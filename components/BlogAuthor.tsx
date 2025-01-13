import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface BlogAuthorProps {
  author: string
}

export function BlogAuthor({ author }: BlogAuthorProps) {
  return (
    <div className="flex items-center space-x-4 my-8">
      <Avatar>
        <AvatarImage src={`/images/blog/authors/${author.toLowerCase().replace(' ', '-')}.jpg`} alt={author} />
        <AvatarFallback>{author[0]}</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm font-medium">Written by</p>
        <p className="text-lg font-semibold">{author}</p>
      </div>
    </div>
  )
}

