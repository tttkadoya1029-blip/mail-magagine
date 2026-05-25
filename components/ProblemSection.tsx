const problems = [
  {
    icon: "🤔",
    text: "CFAに興味はあるが、何から始めればいいか分からない",
  },
  {
    icon: "📖",
    text: "英語テキストだけで内容を理解できるか不安",
  },
  {
    icon: "📚",
    text: "Schweser・公式教材・問題演習の使い分けが分からない",
  },
  {
    icon: "😰",
    text: "独学で不合格になるのが怖い。遠回りしたくない",
  },
  {
    icon: "⏰",
    text: "仕事が忙しく、貴重な学習時間をムダにしたくない",
  },
  {
    icon: "🔄",
    text: "2024年以降の最新CFA試験対策が分からない",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
            あなたはこんな悩みを抱えていませんか？
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
            CFA学習を始める前に
            <br />
            <span className="text-blue-700">立ちはだかる6つの壁</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {problems.map((problem, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <span className="text-2xl flex-shrink-0 mt-0.5">{problem.icon}</span>
              <p className="text-slate-700 font-medium leading-relaxed text-sm sm:text-base">
                {problem.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-blue-700 text-white rounded-2xl p-6 text-center">
          <p className="text-lg font-bold leading-relaxed">
            一つでも当てはまるなら、
            <br />
            このメール講座はあなたのために作られています。
          </p>
        </div>
      </div>
    </section>
  );
}
