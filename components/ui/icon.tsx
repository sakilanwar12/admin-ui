"use client";
import React from "react";
import { Icon as IconIfyIcon } from "@iconify/react";
import { cn } from "@/lib/utils";

const Icon = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof IconIfyIcon>) => {
  return <IconIfyIcon className={cn("", className)} {...props} />;
};

export { Icon };