import * as React from "react"
import { cn } from "@/lib/utils"

const ButtonGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md bg-background p-1 text-muted-foreground",
          className,
        )}
        {...props}
      />
    )
  },
)
ButtonGroup.displayName = "ButtonGroup"

export { ButtonGroup }
