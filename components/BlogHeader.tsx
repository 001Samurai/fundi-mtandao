import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from 'lucide-react'

interface BlogHeaderProps {
  title: string
  category: string
  date: string
  readTime: string
}

export function BlogHeader({ title, category, date, readTime }: BlogHeaderProps) {
  return (
    <header>
      <Badge className="mb-2">{category}</Badge>
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <div className="flex items-center text-sm text-muted-foreground">
        <Calendar className="mr-2 h-4 w-4" />
        <span className="mr-4">{date}</span>
        <Clock className="mr-2 h-4 w-4" />
        <span>{readTime}</span>
      </div>
    </header>
  )
}

