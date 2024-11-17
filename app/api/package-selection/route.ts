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
        subject: `New Package Selection: ${body.plan.toUpperCase()} Plan`,
        text: `
      Selected Package: ${body.plan.toUpperCase()}

      Client Information:
      -------------------
      Name: ${body.name}
      Email: ${body.email}
      Phone: ${body.phone}
      Company: ${body.company || 'N/A'}
      Website: ${body.website || 'N/A'}

      Desired Services:
      -----------------
      ${body.desiredServices.join(', ')}

      Other Services:
      ---------------
      ${body.otherServices || 'None specified'}

      Project Description:
      --------------------
      ${body.projectDescription}
    `,
    }

    try {
        await transporter.sendMail(mailOptions)
        console.log('Package selection email sent successfully')
        return NextResponse.json({ message: 'Package selection submitted successfully' }, { status: 200 })
    } catch (error) {
        console.error('Error sending package selection email:', error as Error)
        return NextResponse.json({ error: 'Failed to submit package selection', details: (error as Error).message }, { status: 500 })
    }
}