import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/db/mongoose'
import Contact from '@/db/models/Contact'

export async function PUT(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    await dbConnect()

    const { id } = await context.params
    const body = await request.json()
    const { status, budget } = body

    const updateData: Record<string, any> = { updatedAt: new Date() }
    if (status !== undefined) updateData.status = status
    if (budget !== undefined) updateData.budget = budget

    const contact = await Contact.findByIdAndUpdate(id, updateData, { new: true })

    if (!contact) {
      return NextResponse.json({ success: false, error: 'Contact not found' }, { status: 404 })
    }

    return NextResponse.json({ success: true, contact })
  } catch (error) {
    console.error('Contact update error:', error)
    return NextResponse.json({ success: false, error: 'Failed to update contact' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    await dbConnect()

    const { id } = await context.params
    const contact = await Contact.findByIdAndDelete(id)

    if (!contact) {
      return NextResponse.json({ success: false, error: 'Contact not found' }, { status: 404 })
    }

    return NextResponse.json({ success: true, message: 'Contact deleted' })
  } catch (error) {
    console.error('Contact delete error:', error)
    return NextResponse.json({ success: false, error: 'Failed to delete contact' }, { status: 500 })
  }
}