import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#175379] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#175379] text-white hover:bg-[#e47a33]",
        destructive:
          "bg-[#e47a33] text-white hover:bg-[#175379]",
        outline:
          "border-2 border-[#175379] bg-transparent text-[#175379] hover:bg-[#175379]/90 hover:text-white hover:border-[#175379]",
        secondary:
          "bg-[#e47a33] text-white hover:bg-[#175379]",
        ghost: "text-[#175379] hover:bg-[#e47a33] hover:text-[#e47a33]",
        link: "text-[#175379] underline-offset-4 hover:text-[#e47a33] hover:underline decoration-[#e47a33]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-7 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
