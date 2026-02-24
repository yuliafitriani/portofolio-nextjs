import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "px-6 py-4 bg-black rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-[#8746EB] transition-all duration-200",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
