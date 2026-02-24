import { ArrowRight } from "iconsax-reactjs";

export default function GradientIcon() {
  return (
    <div className="relative w-5 h-5 group">
      <svg width="0" height="0">
        <defs>
          <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8746EB" />
            <stop offset="100%" stopColor="#DC49A6" />
          </linearGradient>
        </defs>
      </svg>

      <ArrowRight
        size="20"
        color="url(#iconGradient)"
        className="transition-transform duration-300"
      />
    </div>
  );
}
