import { Check, X } from "lucide-react";

type Props = {
  checked?: boolean;
};

export function CheckV2({ checked = true }: Props) {
  return (
    <div
      className={`
        w-5 h-5
        lg:w-7 lg:h-7
        rounded-full
        flex items-center justify-center text-center
        transition-all duration-200
        mx-auto
        ${
          checked
            ? "bg-linear-to-r to-[#DC49A6] from-[#8746EB]"
            : "bg-neutral-300"
        }
      `}
    >
      {checked ? (
        <Check className="w-4 h-4 text-white stroke-[3]" />
      ) : (
        <X className="w-4 h-4 text-white stroke-[3]" />
      )}
    </div>
  );
}

export default CheckV2;
