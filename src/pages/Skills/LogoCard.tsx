"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt?: string;
}

const LogoCard = React.forwardRef<HTMLDivElement, LogoCardProps>(
  ({ src, alt = "logo", className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "realtive w-[162px] h-[80px]",
          "p-[2px] rounded-xl",
          "bg-gradient-to-r from-[#8746EB] to-[#DC49A6]",
          "shadow-[0px_4px_24px_rgba(135,70,235,0.32)]",
          "transition-all duration-300",
          "hover:scale-105 hover:shadow-[0px_6px_32px_rgba(135,70,235,0.45)]",
          className,
        )}
        {...props}
      >
        <div className="w-full h-full bg-neutral-900 rounded-[11px] flex items-center justify-center p-4">
          <Image src={src} alt={alt} className="object-contain" />
        </div>
      </div>
    );
  },
);

LogoCard.displayName = "LogoCard";

export default LogoCard;
