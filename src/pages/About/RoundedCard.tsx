"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface RoundedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
}

const RoundedCard = React.forwardRef<HTMLDivElement, RoundedCardProps>(
  ({ value, label, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-full aspect-square",
          "rounded-full",
          "flex flex-col items-center justify-center text-center",
          "p-4 transition-all duration-300",
          "bg-[linear-gradient(270deg,#8746EB_0%,#DC49A6_100%)] shadow-[0px_4px_24px_rgba(135,70,235,0.32)] text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0px_6px_32px_rgba(135,70,235,0.45)]",
          className,
        )}
        {...props}
      >
        <span className="text-neutral-100 font-bold text-4xl lg:text-[40px] lg:tracking-tight">
          {value}
        </span>

        <span className="text-neutral-100 font-semibold text-sm mt-1">
          {label}
        </span>
      </div>
    );
  },
);

RoundedCard.displayName = "RoundedCard";

export default RoundedCard;
