import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { colors } from "@/lib/types";

export const inputVariants = cva(
  " w-full   border  px-2  rounded  text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium  read-only:leading-9 read-only:bg-background  disabled:cursor-not-allowed disabled:opacity-50  transition duration-300 ",
  {
    variants: {
      color: {
        primary: "border-primary text-primary focus:outline-none focus:border-primary-700 disabled:bg-primary/30 disabled:placeholder:text-primary  placeholder:text-primary/70",
        secondary: "border-secondary text-secondary focus:outline-none focus:border-secondary-700 disabled:bg-secondary/30 disabled:placeholder:text-secondary  placeholder:text-secondary/70",
        info: "border-info/50 text-info focus:outline-none focus:border-info-700 disabled:bg-info/30 disabled:placeholder:text-info  placeholder:text-info/70",
        warning:"border-warning/50 text-warning focus:outline-none focus:border-warning-700 disabled:bg-warning/30 disabled:placeholder:text-info  placeholder:text-warning/70",
        success: "border-success/50 text-success focus:outline-none focus:border-success-700 disabled:bg-success/30 disabled:placeholder:text-info  placeholder:text-success/70",
        danger: "border-danger/50 text-danger focus:outline-none focus:border-danger-700 disabled:bg-danger/30 disabled:placeholder:text-danger  placeholder:text-danger/70",
      },
      size: {
        sm: "h-8 text-xs read-only:leading-8",
        md: "h-9 text-xs read-only:leading-9",
        lg: "h-10 text-sm read-only:leading-10",
        xl: "h-12 text-base read-only:leading-[48px]",
      },
    },

    defaultVariants: {
      color: "primary",
      size: "md",
    },
  }
);

export interface InputProps
  extends Omit<React.ComponentProps<"input">, "size">,
  VariantProps<typeof inputVariants> {
  color?: colors;
}

const Input = ({
  className,
  type,
  size,
  color,
  ...props
}: InputProps) => {
  return (
    <div className="flex-1 w-full">
      <input
        type={type}
        className={cn(
          inputVariants({ color, size }),
          className
        )}
        {...props}
      />
    </div>
  );
};

export { Input };