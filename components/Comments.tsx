// 2. Create the Comments component (components/Comments.tsx):
import { useState } from 'react'
import { useAuth, useUser } from '@clerk/nextjs'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { formatDistanceToNow } from 'date-fns'

interface Comment {
  id: string
  content: string
  createdAt: string
  userId: string
  userName: string
  userImage?: string
}

interface CommentsProps {
  postId: string
  initialComments: Comment[]
}

export function Comments({ postId, initialComments }: CommentsProps) {
  const { isSignedIn } = useAuth()
  const { user } = useUser()
  const [comments, setComments] = useState<Comment[]>(initialComments)
  const [newComment, setNewComment] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim() || !user) return

    setIsSubmitting(true)
    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: newComment,
          postId,
          userId: user.id,
          userName: user.fullName || user.username,
          userImage: user.imageUrl,
        }),
      })

      if (!response.ok) throw new Error('Failed to post comment')

      const comment = await response.json()
      setComments([comment, ...comments])
      setNewComment('')
    } catch (error) {
      console.error('Error posting comment:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      
      {!isSignedIn ? (
        <div className="text-center py-4 bg-gray-50 rounded-lg">
          <p className="mb-2">Please sign in to leave a comment</p>
          <Button variant="outline">Sign In</Button>
        </div>
      ) : (
        <form onSubmit={handleSubmitComment} className="mb-8">
          <Textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            className="mb-2"
          />
          <Button 
            type="submit" 
            disabled={isSubmitting || !newComment.trim()}
          >
            {isSubmitting ? 'Posting...' : 'Post Comment'}
          </Button>
        </form>
      )}

      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
            <Avatar>
              <AvatarImage src={comment.userImage} />
              <AvatarFallback>
                {comment.userName.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">{comment.userName}</span>
                <span className="text-gray-500 text-sm">
                  {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
                </span>
              </div>
              <p className="mt-1">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}