import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
 
// e.g a webhook to `your-website.com/api/revalidate?tag=collection&secret=<token>`
export async function GET(request: NextRequest) {
  // Check for secret to confirm this is a valid request
  if (
    request.nextUrl.searchParams.get('secret') !== "07775000"
  ) {
    return res.status(401).json({ message: 'Invalid token' })
  }
 
  const tag = request.nextUrl.searchParams.get('tag')
  revalidateTag(tag)
  return NextResponse.json({ revalidated: true, now: Date.now() })
}