import * as React from "react";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { colors } from "@/lib/types";

export const textareaVariants = cva(
  "flex flex-1 bg-background w-full min-h-[80px] rounded-md border border-solid   px-3 py-[10px] text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium  read-only:bg-background read-only:text-default-500 disabled:cursor-not-allowed disabled:opacity-50  transition duration-300 ",
  {
    variants: {
      color: {
        primary:
          "border-primary text-primary focus:outline-none focus:border-primary-700 disabled:bg-primary/30 disabled:placeholder:text-primary  placeholder:text-primary/70",
        secondary:
          "border-secondary text-secondary focus:outline-none focus:border-secondary-700 disabled:bg-secondary/30 disabled:placeholder:text-secondary  placeholder:text-secondary/70",
        info: "border-info/50 text-info focus:outline-none focus:border-info-700 disabled:bg-info/30 disabled:placeholder:text-info  placeholder:text-info/70",
        warning:
          "border-warning/50 text-warning focus:outline-none focus:border-warning-700 disabled:bg-warning/30 disabled:placeholder:text-info  placeholder:text-warning/70",
        success:
          "border-success/50 text-success focus:outline-none focus:border-success-700 disabled:bg-success/30 disabled:placeholder:text-info  placeholder:text-success/70",
        danger:
          "border-danger/50 text-danger focus:outline-none focus:border-danger-700 disabled:bg-danger/30 disabled:placeholder:text-danger  placeholder:text-danger/70",
      },

    },

    defaultVariants: {
      color: "primary",
    },
  }
);

export interface TextareaProps
  extends React.ComponentProps<"textarea">,
  VariantProps<typeof textareaVariants> {
  color?: colors;
}

const Textarea = ({ className, color, defaultValue, ...props }: TextareaProps) => {
  return (
    <textarea
      className={cn(
        textareaVariants({ color }),
        className
      )}
      {...props}
    >
      {defaultValue}
    </textarea>
  );
};

export { Textarea };