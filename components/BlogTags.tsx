import { Badge } from "@/components/ui/badge"

interface BlogTagsProps {
  tags: string[]
}

export function BlogTags({ tags }: BlogTagsProps) {
  return (
    <div className="flex flex-wrap gap-2 my-8">
      {tags.map((tag) => (
        <Badge key={tag} variant="secondary">{tag}</Badge>
      ))}
    </div>
  )
}

