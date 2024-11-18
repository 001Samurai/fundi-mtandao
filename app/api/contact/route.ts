import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
    const body = await req.json()

    console.log('Environment variables:', {
        EMAIL_USER: process.env.EMAIL_USER ? 'Set' : 'Not set',
        EMAIL_PASS: process.env.EMAIL_PASS ? 'Set' : 'Not set'
    })

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error('Email credentials are not set')
        return NextResponse.json({ error: 'Email configuration error' }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    })

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'dmachua.freelance@gmail.com',
        subject: 'New Contact Form Submission',
        text: `
      Name: ${body.name}
      Email: ${body.email}
      Phone: ${body.phone}
      Preferred Contact Method: ${body.preferredContact}
      Message: ${body.message}
      Subscribe to Newsletter: ${body.newsletter ? 'Yes' : 'No'}
    `,
        html: `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Phone:</strong> ${body.phone}</p>
      <p><strong>Preferred Contact Method:</strong> ${body.preferredContact}</p>
      <p><strong>Message:</strong> ${body.message}</p>
      <p><strong>Subscribe to Newsletter:</strong> ${body.newsletter ? 'Yes' : 'No'}</p>
    `,
    }

    try {
        await transporter.sendMail(mailOptions)
        console.log('Contact form email sent successfully')
        return NextResponse.json({ message: 'Contact form submitted successfully' }, { status: 200 })
    } catch (error) {
        console.error('Error sending contact form email:', error)
        return NextResponse.json({ error: 'Failed to submit contact form', details: (error as Error).message }, { status: 500 })
    }
}