"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-normal leading-none text-default mb-1.5 block peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>) => (
  <LabelPrimitive.Root
    className={cn("text-sm font-normal leading-none text-default mb-1.5 block peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className)}
    {...props}
  />
)

export { Label }
