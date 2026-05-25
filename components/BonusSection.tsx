import CTAButton from "./CTAButton";

const bonuses = [
  {
    number: "特典 1",
    tag: "PDF資料",
    title: "CFA Level 1 日本語要点集",
    subtitle: "財務諸表分析編",
    color: "border-amber-400",
    tagColor: "bg-amber-100 text-amber-700",
    highlights: [
      "マインドマップ形式で視覚的に整理",
      "英文テキストを読む前の全体把握に最適",
      "試験直前の復習ツールとしても活用可能",
    ],
    note: "Financial Statement Analysisは試験ウェイトが高い最重要科目。この要点集を最初に読むだけで理解速度が格段に上がります。",
  },
  {
    number: "特典 2",
    tag: "電子書籍",
    title: "CFA受験情報電子書籍",
    subtitle: "代表あよもてぃの独学体験談",
    color: "border-blue-400",
    tagColor: "bg-blue-100 text-blue-700",
    highlights: [
      "実際の独学プロセスを全て公開",
      "やってはいけない失敗パターンを網羅",
      "遠回りを避けるための具体的な知恵",
    ],
    note: "「もっと早くこれを知りたかった」という声を多数いただいた、実体験ベースのリアルな受験記録です。",
  },
  {
    number: "特典 3",
    tag: "期間限定",
    title: "メール講座限定の特別コンテンツ",
    subtitle: "登録者のみ受け取れる限定特典",
    color: "border-slate-400",
    tagColor: "bg-slate-100 text-slate-700",
    highlights: [
      "メール講座登録者限定の追加特典",
      "内容は登録後のメールでご案内",
      "期間限定のため予告なく終了する場合あり",
    ],
    note: "現在準備中の特典を含め、登録者の方に随時お届けします。早めのご登録をおすすめします。",
  },
];

export default function BonusSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-3">
            登録者全員にプレゼント
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
            メール講座に加えて
            <br />
            <span className="text-amber-600">3つの無料特典</span>をお届け
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            講座登録後、すぐにダウンロードできます。
          </p>
        </div>

        <div className="space-y-6">
          {bonuses.map((bonus, idx) => (
            <div
              key={idx}
              className={`border-l-4 ${bonus.color} bg-slate-50 rounded-xl p-6 hover:shadow-md transition-shadow`}
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="font-black text-slate-400 text-sm">
                  {bonus.number}
                </span>
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded-full ${bonus.tagColor}`}
                >
                  {bonus.tag}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-0.5">
                {bonus.title}
              </h3>
              <p className="text-slate-500 text-sm mb-4">{bonus.subtitle}</p>
              <ul className="space-y-2 mb-4">
                {bonus.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <svg
                      className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-500 italic leading-relaxed">
                {bonus.note}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-6 text-sm sm:text-base">
            メール講座 ＋ 3つの特典、すべて
            <span className="font-bold text-slate-800">無料</span>でお受け取りいただけます。
          </p>
          <CTAButton label="日本語要点集を無料で受け取る →" />
        </div>
      </div>
    </section>
  );
}
