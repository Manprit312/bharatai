import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/db/mongoose'
import Contact from '@/db/models/Contact'

export async function GET(request: NextRequest) {
  try {
    await dbConnect()
    const contacts = await Contact.find({}).sort({ createdAt: -1 })

    return NextResponse.json({ success: true, contacts })
  } catch (error) {
    console.error('Contacts fetch error:', error)
    return NextResponse.json({ success: false, error: 'Failed to fetch contacts' }, { status: 500 })
  }
}
