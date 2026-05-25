import CTAButton from "./CTAButton";

export default function FinalCTA() {
  return (
    <section className="py-16 px-4 bg-white border-t border-slate-100">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-4">
          最後に
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 leading-tight mb-6">
          CFA学習で遠回りする必要は
          <br />
          <span className="text-blue-700">ありません。</span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
          正しい戦略を最初に知るだけで、学習効率は大きく変わります。
          このメール講座は、あなたが最短ルートでCFA Level 1合格を目指すための
          「地図」を提供します。まずは7日間、一緒に歩み始めましょう。
        </p>

        <CTAButton label="今すぐ無料で受け取る →" className="mb-6" />

        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            完全無料
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            いつでも解除可能
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            日本語要点集付き
          </span>
        </div>
      </div>
    </section>
  );
}
