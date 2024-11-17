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
        subject: 'New Project Quote Request From CTA Section',
        text: `
      Project Type: ${body.project_type}
      Industry: ${body.industry}
      Project Description: ${body.project_description}
      Target Audience: ${body.target_audience}
      Timeline: ${body.timeline}
      Budget Range: ${body.budget_range}
      Name: ${body.name}
      Company: ${body.company}
      Email: ${body.email}
      Phone: ${body.phone}
      Website URL: ${body.website_url || 'N/A'}
    `,
    }

    try {
        await transporter.sendMail(mailOptions)
        console.log('CTA form email sent successfully')
        return NextResponse.json({ message: 'Quote request submitted successfully' }, { status: 200 })
    } catch (error) {
        console.error('Error sending CTA form email:', error)
        return NextResponse.json({ error: 'Failed to submit quote request', details: (error as Error).message }, { status: 500 })
    }
}