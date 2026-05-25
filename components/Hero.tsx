import CTAButton from "./CTAButton";

export default function Hero() {
  return (
    <section className="gradient-navy text-white py-20 px-4 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-400 blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-amber-400 blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        {/* バッジ */}
        <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/50 text-amber-300 text-sm font-medium px-4 py-2 rounded-full mb-8">
          <span>★</span>
          <span>CFA Charterholder 監修 | 完全無料 | 日本語対応</span>
        </div>

        {/* キャッチコピー */}
        <p className="text-blue-200 text-base sm:text-lg mb-4 font-medium">
          CFA学習、何から始めればいいか分からないあなたへ
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
          <span className="text-white">CFA Level 1</span>
          <br />
          <span className="text-amber-400">最短合格</span>
          <span className="text-white">に必要な戦略を</span>
          <br />
          <span className="text-amber-400">7日間</span>
          <span className="text-white">で無料公開</span>
        </h1>

        <p className="text-blue-100 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          英語・教材選び・学習順序・スケジュール管理の不安を、
          <br className="hidden sm:block" />
          7日間のメール講座で一気に解消します。
        </p>

        {/* CTA */}
        <CTAButton label="無料でメール講座を受け取る →" />

        {/* 安心フレーズ */}
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-blue-200">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            完全無料
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            いつでも解除可能
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            日本語要点集付き
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            電子書籍プレゼント
          </span>
        </div>
      </div>
    </section>
  );
}
