"use client";

export default function StickyNav() {
  const scrollToForm = () => {
    const el = document.getElementById("form-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white border-t border-slate-200 shadow-lg px-4 py-3">
      <button
        onClick={scrollToForm}
        className="w-full bg-amber-500 hover:bg-amber-400 text-white font-bold text-base py-3.5 rounded-full shadow-md transition-all duration-200 cursor-pointer"
      >
        無料でメール講座を受け取る →
      </button>
    </div>
  );
}
