export function GradientDot() {
  return (
    <div
      className="w-6 h-6 flex items-center justify-center p-[6px] 
                    bg-[#D3BBFA] 
                    shadow-[0px_4px_24px_rgba(135,70,235,0.32)] 
                    rounded-full z-10"
    >
      <div className="w-3 h-3 rounded-full bg-linear-to-r from-[#8746EB] to-[#DC49A6]" />
    </div>
  );
}

export default GradientDot;
