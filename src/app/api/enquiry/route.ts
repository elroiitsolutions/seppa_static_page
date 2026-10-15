import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Helper to construct SMTP transporter
function getTransporter() {
  const host = process.env.SMTP_HOST || 'smtp.hostinger.com';
  const port = parseInt(process.env.SMTP_PORT || '465', 10);
  const user = process.env.SMTP_USER || '';
  const pass = process.env.SMTP_PASS || '';
  const secure = process.env.SMTP_SECURE !== 'false' && port === 465;

  if (user && pass) {
    return nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
      tls: {
        rejectUnauthorized: false
      }
    });
  }

  // Fallback for development/testing if SMTP credentials are not yet entered
  return null;
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // 1. Normalize form fields across all enquiry form types
    const fullName = (data.full_name || data.name || data.fullName || '').trim();
    const email = (data.email || '').trim().toLowerCase();
    const phoneNumber = (data.phone_number || data.phone || data.mobile || '').trim();
    const country = (data.country || data.location_country || data.location || data.region || '').trim();
    const city = (data.city || '').trim();
    const companyName = (data.company_name || data.company || data.companyName || '').trim();
    const proposedRegion = (data.proposed_dealership_region || data.region || '').trim();
    const investmentInterest = (data.investment_interest || data.interest || data.investmentRange || '').trim();
    const productInterest = (data.product_interest || data.product || data.product_name || 'General Enquiry').trim();
    const message = (data.message || data.project_requirement || data.business_proposal || data.proposal || '').trim();
    const pageUrl = (data.page_url || '').trim();
    const formType = (data.form_type || 'product').toLowerCase();

    // 2. Validate mandatory fields
    if (!fullName) {
      return NextResponse.json({ success: false, error: 'Full name is required' }, { status: 400 });
    }
    if (!email) {
      return NextResponse.json({ success: false, error: 'Email address is required' }, { status: 400 });
    }
    if (!phoneNumber) {
      return NextResponse.json({ success: false, error: 'Phone number is required' }, { status: 400 });
    }

    // 3. Store into Strapi Backend
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://seppabackend.seppasolutions.com';
    let strapiSaved = false;
    let strapiResponseData = null;

    try {
      const strapiPayload = {
        data: {
          form_type: ['scroll', 'contact', 'dealer', 'investor', 'product'].includes(formType) ? formType : 'product',
          full_name: fullName,
          email: email,
          phone_number: phoneNumber,
          country: country || null,
          city: city || null,
          company_name: companyName || null,
          proposed_dealership_region: proposedRegion || null,
          investment_interest: investmentInterest || null,
          product_interest: productInterest || null,
          message: message || null,
          page_url: pageUrl || null,
          status: 'new'
        }
      };

      const headers: Record<string, string> = {
        'Content-Type': 'application/json'
      };

      if (process.env.STRAPI_API_TOKEN) {
        headers['Authorization'] = `Bearer ${process.env.STRAPI_API_TOKEN}`;
      }

      const strapiRes = await fetch(`${strapiUrl}/api/enquiries`, {
        method: 'POST',
        headers,
        body: JSON.stringify(strapiPayload),
      });

      if (strapiRes.ok) {
        strapiSaved = true;
        strapiResponseData = await strapiRes.json();
      } else {
        const errorText = await strapiRes.text();
        console.warn(`[Strapi Enquiry Notice] Status ${strapiRes.status}:`, errorText);
      }
    } catch (strapiErr) {
      console.error('[Strapi Enquiry Error]:', strapiErr);
    }

    // 4. Send Email Notification
    const recipients = (process.env.ENQUIRY_NOTIFICATION_EMAILS || 'rameshkumar25.work@gmail.com, support@canadianclear.com')
      .split(',')
      .map(e => e.trim())
      .filter(Boolean);

    const formTypeLabels: Record<string, string> = {
      scroll: 'Modal Popup Enquiry',
      contact: 'Contact Us Enquiry',
      dealer: 'Dealership Enquiry',
      dealers: 'Dealership Enquiry',
      investor: 'Investor Enquiry',
      investors: 'Investor Enquiry',
      product: 'Product / Machinery Enquiry'
    };

    const friendlyFormType = formTypeLabels[formType] || 'Product Enquiry';
    const subject = `New ${friendlyFormType} from ${fullName}`;

    const emailFields: Record<string, string> = {
      'Enquiry Type': friendlyFormType,
      'Full Name': fullName,
      'Email': email,
      'Phone Number': phoneNumber,
      'Country': country,
      'City': city,
      'Company Name': companyName,
      'Dealership Region': proposedRegion,
      'Investment Interest': investmentInterest,
      'Product Interest': productInterest,
      'Message / Requirement': message,
      'Page URL': pageUrl,
      'Submitted At': new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }) + ' (IST)'
    };

    let tableRows = '';
    for (const [key, val] of Object.entries(emailFields)) {
      if (val) {
        tableRows += `
          <tr>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0; font-weight: 600; color: #1e293b; background-color: #f8fafc; width: 30%;">
              ${key}
            </td>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0; color: #334155;">
              ${val.replace(/\n/g, '<br/>')}
            </td>
          </tr>
        `;
      }
    }

    // 4. Construct Email Templates with Existing UI System
    const adminEmailHtml = `
      <div style="font-family: Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 650px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
        <div style="background-color: #101934; padding: 24px; text-align: center; border-bottom: 4px solid #f53838;">
          <h2 style="color: #ffffff; margin: 0; font-size: 22px; letter-spacing: 0.5px;">SEPPA SOLUTIONS</h2>
          <p style="color: #cbd5e1; margin: 6px 0 0 0; font-size: 14px;">${friendlyFormType} Notification</p>
        </div>
        <div style="padding: 24px; background-color: #ffffff;">
          <p style="font-size: 15px; color: #334155; margin-top: 0;">
            A new enquiry has been submitted on the website. Here are the details:
          </p>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-top: 16px;">
            <tbody>
              ${tableRows}
            </tbody>
          </table>
          <div style="margin-top: 24px; padding: 12px 16px; background-color: #f1f5f9; border-radius: 8px; font-size: 13px; color: #64748b; text-align: center;">
            This email was automatically generated by the SEPPA Web Portal.
          </div>
        </div>
      </div>
    `;

    const senderEmailHtml = `
      <div style="font-family: Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 650px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
        <div style="background-color: #101934; padding: 24px; text-align: center; border-bottom: 4px solid #f53838;">
          <h2 style="color: #ffffff; margin: 0; font-size: 22px; letter-spacing: 0.5px;">SEPPA SOLUTIONS</h2>
          <p style="color: #cbd5e1; margin: 6px 0 0 0; font-size: 14px;">Enquiry Confirmation</p>
        </div>
        <div style="padding: 24px; background-color: #ffffff;">
          <h3 style="color: #101934; margin-top: 0; font-size: 18px;">Dear ${fullName},</h3>
          <p style="font-size: 15px; color: #334155; line-height: 1.6; margin-top: 4px;">
            Thank you for contacting <strong>SEPPA Solutions</strong>. We have received your ${friendlyFormType.toLowerCase()}. 
            Our team is reviewing your requirements and will connect with you shortly.
          </p>
          <div style="margin: 20px 0 10px 0; font-weight: 600; color: #1e293b; font-size: 15px;">
            Summary of your submission:
          </div>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tbody>
              ${tableRows}
            </tbody>
          </table>
          <div style="margin-top: 24px; padding: 16px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 13px; color: #475569;">
            <p style="margin: 0 0 6px 0; font-weight: 600; color: #1e293b;">Need immediate assistance?</p>
            <p style="margin: 0; line-height: 1.5;">
              You can reply directly to this email or visit our website at 
              <a href="https://seppasolutions.com" style="color: #f53838; text-decoration: none; font-weight: 600;">seppasolutions.com</a>.
            </p>
          </div>
          <div style="margin-top: 20px; font-size: 12px; color: #94a3b8; text-align: center;">
            © ${new Date().getFullYear()} SEPPA Solutions. All rights reserved.
          </div>
        </div>
      </div>
    `;

    let adminEmailSent = false;
    let senderEmailSent = false;
    let emailError = null;

    try {
      const transporter = getTransporter();
      if (transporter) {
        // 1. Dispatch Notification Email to Admin / Form Submit Receivers
        await transporter.sendMail({
          from: process.env.SMTP_FROM || `"SEPPA Solutions" <no-reply@seppasolutions.com>`,
          to: recipients,
          replyTo: `${fullName} <${email}>`,
          subject: subject,
          html: adminEmailHtml
        });
        adminEmailSent = true;

        // 2. Dispatch Confirmation Email to the Customer / Sender
        if (email && email.includes('@')) {
          await transporter.sendMail({
            from: process.env.SMTP_FROM || `"SEPPA Solutions" <no-reply@seppasolutions.com>`,
            to: email,
            subject: `Thank you for your enquiry - SEPPA Solutions`,
            html: senderEmailHtml
          });
          senderEmailSent = true;
        }
      } else {
        console.log(`[Email Notice] SMTP not fully configured yet.`);
        console.log(`Admin email would be sent to: ${recipients.join(', ')}`);
        console.log(`Sender confirmation email would be sent to: ${email}`);
      }
    } catch (mailErr: any) {
      console.error('[Email Dispatch Error]:', mailErr);
      emailError = mailErr?.message || 'Mail dispatch error';
    }

    return NextResponse.json({
      success: true,
      message: 'Enquiry submitted successfully',
      details: {
        strapiSaved,
        adminEmailSent,
        senderEmailSent,
        emailError,
        adminRecipients: recipients,
        senderRecipient: email,
        strapiData: strapiResponseData ? 'saved' : 'pending_backend_sync'
      }
    });

  } catch (error: any) {
    console.error('[Enquiry Handler Error]:', error);
    return NextResponse.json(
      { success: false, error: error?.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
