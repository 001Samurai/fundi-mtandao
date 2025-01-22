import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const { userId } = auth()
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const { content, postId, userName, userImage } = await request.json()

    const comment = await prisma.comment.create({
      data: {
        content,
        postId,
        userId,
        userName,
        userImage,
      },
    }) 

    return NextResponse.json(comment)
  } catch (error) {
    console.error('Error in POST /api/comments:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const postId = searchParams.get('postId')

    if (!postId) {
      return new NextResponse('Post ID is required', { status: 400 })
    }

    const comments = await prisma.comment.findMany({
      where: { postId },
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json(comments)
  } catch (error) {
    console.error('Error in GET /api/comments:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}