"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

const Separator = (
  { className, orientation = "horizontal", decorative = true, ...props }: React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
) => (
  <SeparatorPrimitive.Root
    decorative={decorative}
    orientation={orientation}
    className={cn(
      "bg-default-200 flex-1",
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      className
    )}
    {...props}
  />
)

export { Separator }
