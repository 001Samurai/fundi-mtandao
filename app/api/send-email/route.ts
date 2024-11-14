import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
    const body = await req.json()

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    })

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'dmachua.freelance@gmail.com',
        subject: 'New Project Inquiry',
        text: `
      Name: ${body.name}
      Email: ${body.email}
      Service: ${body.service}
      Message: ${body.message}
    `,
    }

    try {
        await transporter.sendMail(mailOptions)
        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
    } catch (error) {
        console.error('Error sending email:', error)
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }
}