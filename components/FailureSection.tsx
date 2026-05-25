const reasons = [
  {
    number: "01",
    title: "努力だけでは合格できない試験",
    desc: "CFAは「努力量」だけでなく、「戦略」で結果が決まります。闇雲に勉強時間を確保しても、正しい方向性がなければ合格は遠のくばかりです。",
  },
  {
    number: "02",
    title: "古い情報・間違った教材選びで遠回り",
    desc: "ネットに出回るCFA対策情報の多くは古く、現在の試験形式に対応していません。間違った教材を選ぶだけで、数百時間の無駄が生まれます。",
  },
  {
    number: "03",
    title: "2024年以降は公式教材重視の流れが加速",
    desc: "CFA InstituteのLearning Ecosystem導入やModule化により、試験の出題傾向が変化しています。旧来の学習法では対応が難しくなっています。",
  },
  {
    number: "04",
    title: "最初の「全体像」が合否を分ける",
    desc: "経験者が口を揃えて言うのは、「最初に正しい全体像を知っていれば、もっと早く合格できた」ということ。スタートの判断が、その後の学習効率を根本から左右します。",
  },
];

export default function FailureSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">
            なぜ多くの受験生が失敗するのか
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
            CFA試験で遠回りする人には
            <br />
            <span className="text-red-600">共通のパターン</span>がある
          </h2>
          <p className="mt-4 text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
            合格率は40〜50%前後。半数以上が不合格になる理由は、
            才能や英語力だけではありません。
          </p>
        </div>

        <div className="space-y-6">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="flex gap-5 p-6 rounded-2xl border-l-4 border-red-400 bg-red-50/50 hover:bg-red-50 transition-colors"
            >
              <div className="flex-shrink-0">
                <span className="text-3xl font-black text-red-200 leading-none">
                  {reason.number}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-base sm:text-lg mb-2">
                  {reason.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-slate-800 text-white rounded-2xl p-8">
          <p className="text-lg sm:text-xl font-bold leading-relaxed mb-2">
            だから、<span className="text-amber-400">最初に正しい戦略を知ること</span>が
          </p>
          <p className="text-lg sm:text-xl font-bold">
            CFA最短合格の出発点になります。
          </p>
        </div>
      </div>
    </section>
  );
}
