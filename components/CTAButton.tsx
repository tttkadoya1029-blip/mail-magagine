"use client";

interface CTAButtonProps {
  label?: string;
  className?: string;
}

export default function CTAButton({
  label = "無料でメール講座を受け取る",
  className = "",
}: CTAButtonProps) {
  const scrollToForm = () => {
    const el = document.getElementById("form-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <button
      onClick={scrollToForm}
      className={`cta-pulse inline-block bg-amber-500 hover:bg-amber-400 text-white font-bold text-lg px-10 py-5 rounded-full shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer ${className}`}
    >
      {label}
    </button>
  );
}
