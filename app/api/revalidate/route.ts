import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook'

const SANITY_WEBHOOK_SECRET = "07775000"
 
export async function GET(request: NextRequest, res: any) {
    // Check for secret to confirm this is a valid request
    const signature:any = request.headers.get(SIGNATURE_HEADER_NAME)
    const isValid = isValidSignature(JSON.stringify(request.body), signature, SANITY_WEBHOOK_SECRET)

    console.log(`==== Is the webhook request valid: ${isValid}`)

    if (!isValid) {
        return res.status(401).json({ message: 'Invalid signature' })
    }
    
    const requestBody = await request.text()
    const parsedBody = JSON.parse(requestBody)

    console.log(`==== Parsed body: ${JSON.stringify(parsedBody)}`)

    const mainPath = parsedBody._type === 'recipe' ? '/recipes'
     : parsedBody._type === 'page' ? '/pages' 
     : parsedBody._type === 'blog' ? '/blogs'
     : ''
    
    console.log(mainPath)

    const pathToRevalidate = parsedBody._type === 'recipe' ? `/recipes/${parsedBody.slug?.current}` 
     : parsedBody._type === 'page' ? `/pages/${parsedBody.slug?.current}`
     : parsedBody._type === 'blog' ? `/blogs/${parsedBody.slug?.current}`
     : ''
    
    console.log(`==== Revalidating path: ${mainPath}`)

    revalidatePath(mainPath)
    revalidatePath(pathToRevalidate)
    
    return NextResponse.json({ revalidated: true, now: Date.now() })
}