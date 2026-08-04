import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Check for secret to confirm this is a valid request from Strapi
    const authHeader = request.headers.get('authorization');
    const secret = authHeader?.split(' ')[1] || request.nextUrl.searchParams.get('secret') || body.secret;
    
    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }

    // Handle Strapi's test trigger
    if (body.event === 'trigger-test') {
      return NextResponse.json({ message: 'Test successful' }, { status: 200 });
    }

    // Strapi webhook payload nests the data inside the `entry` object
    const entry = body.entry || body;
    const { full_path, locale } = entry;

    if (!full_path || !locale) {
      return NextResponse.json({ message: 'Missing path or locale' }, { status: 400 });
    }

    // Revalidate the specific path
    const pathToRevalidate = `/${locale}${full_path}`;
    revalidatePath(pathToRevalidate);
    
    // Also revalidate list pages or dependent pages if necessary
    // revalidatePath(`/${locale}/blog`);

    return NextResponse.json({ revalidated: true, now: Date.now(), path: pathToRevalidate });
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}
