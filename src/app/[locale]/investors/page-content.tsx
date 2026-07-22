import EnquiryPageLayout, { EnquiryPageData } from '@/components/enquiry/EnquiryPageLayout';
import bannerImg from '@/assets/about-us/generated/header.png';

const pageData: EnquiryPageData = {
  title: "Investors",
  breadcrumbName: "Investors",
  bgImage: bannerImg.src,
  heading: "Investor Relations",
  subheading: "Seppa Solutions is at the forefront of innovation in the filling and packaging industry. We welcome strategic investors who share our vision for growth and technological advancement.",
  formTitle: "Investment Inquiry",
  submitButtonText: "Submit Inquiry",
  formFields: [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      placeholder: "Your full name",
      required: true,
      halfWidth: true
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "Your email address",
      required: true,
      halfWidth: true
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "Contact number",
      required: true,
      halfWidth: true
    },
    {
      name: "interest",
      label: "Investment Interest",
      type: "select",
      required: true,
      options: [
        "Equity Investment",
        "Strategic Partnership",
        "Joint Venture",
        "Project Financing",
        "Other"
      ]
    },
    {
      name: "message",
      label: "Message / Inquiry",
      type: "textarea",
      placeholder: "Please share your investment interests, background, and any specific questions..."
    }
  ]
};

const InvestorsPage = () => {
  return <EnquiryPageLayout data={pageData} />;
};

export default InvestorsPage;
