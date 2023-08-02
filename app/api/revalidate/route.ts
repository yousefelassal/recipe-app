import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook'

const SANITY_WEBHOOK_SECRET = "07775000"
 
export async function GET(request: NextRequest, res: any) {
  // Check for secret to confirm this is a valid request
  const signature:any = request.headers.get(SIGNATURE_HEADER_NAME)
  const isValid = isValidSignature(JSON.stringify(request.body), signature, SANITY_WEBHOOK_SECRET)

  console.log(`==== Is the weebhook request valid: ${isValid}`)

  if (!isValid) {
    return res.status(401).json({ message: 'Invalid signature' })
  }
  
  const mainPath = request.body._type === 'recipe' ? '/recipes'
   : request.body._type === 'page' ? '/pages' 
   : request.body._type === 'blog' ? '/blogs'
   : ''
  
  const pathToRevalidate = request.body._type === 'recipe' ? `/recipes/${request.body.slug.current}` 
   : request.body._type === 'page' ? `/pages/${request.body.slug.current}`
   : request.body._type === 'blog' ? `/blogs/${request.body.slug.current}`
   : ''
  
  console.log(`==== Revalidating path: ${mainPath}`)

  revalidatePath(mainPath)
  revalidatePath(pathToRevalidate)
  
  return NextResponse.json({ revalidated: true, now: Date.now() })
}