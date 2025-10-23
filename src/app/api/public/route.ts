import Contact from "@/db/models/Contact";
import dbConnect from "@/db/mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        await dbConnect()

        const body = await request.json()
        const { name, email, phone, projectType, budget, message } = body

        if(!name || !email || !message) {
            return NextResponse.json({ message: "Name, email, and message are required" }, { status: 400 });
        }

        const contact = new Contact({
            name,
            email,
            phone,
            projectType,
            budget,
            message
        })

        await contact.save()

        return NextResponse.json({ success: true, contact }, { status: 201 })
    } catch (error) {
        console.error('Contact creation error:', error)
        return NextResponse.json({ success: false, error: 'Failed to create contact' }, { status: 500 })
    }
}