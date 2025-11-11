"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>) => (
  <CheckboxPrimitive.Root
    className={cn(
      "peer h-3.5 w-3.5 flex justify-center items-center shrink-0 rounded-[3px] border border-default-200   disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-3 w-3" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
)

export { Checkbox }
