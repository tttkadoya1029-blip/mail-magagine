const days = [
  {
    day: "Day 1",
    title: "なぜ多くの人がCFA試験に失敗するのか",
    desc: "合格者と不合格者を分ける本質的な違いとは何か。最初に知っておくべき「CFA試験の現実」をお伝えします。",
    color: "bg-blue-600",
  },
  {
    day: "Day 2",
    title: "初期段階で試験詳細を把握すべき理由",
    desc: "試験構造・科目ウェイト・合格基準を正しく理解することで、学習の優先順位が明確になります。",
    color: "bg-blue-700",
  },
  {
    day: "Day 3",
    title: "最短合格に必要な学習法",
    desc: "Schweser・公式教材・問題演習の正しい使い分けと、教材ごとの役割を明確に解説します。",
    color: "bg-blue-800",
  },
  {
    day: "Day 4",
    title: "CFA試験は点ではなく線で学ぶ",
    desc: "科目横断の理解が合格の鍵。各科目を孤立させず、体系的に学習する思考法を身につけます。",
    color: "bg-slate-700",
  },
  {
    day: "Day 5",
    title: "最短合格スケジュールの作り方",
    desc: "試験日から逆算した現実的なスケジュール設計と、忙しい社会人のための時間管理戦略を公開します。",
    color: "bg-slate-800",
  },
  {
    day: "Day 6",
    title: "合格者ベースのロードマップ",
    desc: "実際に合格した人たちが歩んだ学習の軌跡を公開。あなたの状況に合わせたロードマップを描きます。",
    color: "bg-amber-600",
  },
  {
    day: "Day 7",
    title: "「知っている」と「できる」の違い",
    desc: "最後のDay7では、合格と不合格を分ける「実践力」の磨き方と、直前期の最終戦略をお伝えします。",
    color: "bg-amber-700",
  },
];

export default function CourseContent() {
  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
            7日間の講座内容
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
            毎日届くメールで
            <br />
            <span className="text-blue-700">CFA合格の全体像</span>が見えてくる
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            1通あたり読了時間は約5〜10分。忙しい社会人でも
            スキマ時間で読み進められます。
          </p>
        </div>

        <div className="space-y-4">
          {days.map((item, idx) => (
            <div
              key={idx}
              className="flex gap-4 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div
                className={`${item.color} text-white flex flex-col items-center justify-center px-4 py-6 min-w-[80px] text-center`}
              >
                <span className="text-xs font-medium opacity-80">
                  {item.day.split(" ")[0]}
                </span>
                <span className="text-2xl font-black">
                  {item.day.split(" ")[1]}
                </span>
              </div>
              <div className="py-5 pr-5 flex-1">
                <h3 className="font-bold text-slate-800 text-sm sm:text-base mb-1.5">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center">
          <p className="text-blue-800 font-bold text-base sm:text-lg">
            7日間読み終えると、CFA学習の
            <span className="text-blue-600"> 全体像・戦略・スケジュール</span> が
            <br className="hidden sm:block" />
            明確に見えてきます。
          </p>
        </div>
      </div>
    </section>
  );
}
