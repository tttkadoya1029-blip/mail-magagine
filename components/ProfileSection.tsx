const careers = [
  { icon: "🏦", text: "三井住友銀行（SMBC）勤務" },
  { icon: "🌍", text: "Barclays Capital 出向" },
  { icon: "✈️", text: "ロンドン・シンガポール 海外駐在経験" },
  { icon: "🇸🇬", text: "Daiwa Capital Markets Singapore 勤務" },
  { icon: "🎓", text: "CFA Charterholder（合格者資格保有）" },
  { icon: "💼", text: "Financial Analyst Academy 代表" },
];

export default function ProfileSection() {
  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
            この講座を届ける人
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
            CFA Charterholderが
            <br />
            <span className="text-blue-700">伴走します</span>
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          {/* ヘッダー */}
          <div className="gradient-navy text-white p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-amber-400 flex items-center justify-center text-3xl mx-auto mb-4 font-bold text-white">
              あ
            </div>
            <h3 className="text-xl font-bold mb-1">あよもてぃ</h3>
            <p className="text-blue-200 text-sm">Financial Analyst Academy 代表</p>
            <div className="inline-flex items-center gap-1.5 mt-3 bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full">
              <span>★</span>
              <span>CFA Charterholder</span>
            </div>
          </div>

          {/* キャリア */}
          <div className="p-8">
            <h4 className="font-bold text-slate-700 text-sm mb-5 uppercase tracking-wider">
              キャリア・実績
            </h4>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {careers.map((c, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-sm text-slate-700"
                >
                  <span className="text-lg">{c.icon}</span>
                  <span>{c.text}</span>
                </div>
              ))}
            </div>

            {/* メッセージ */}
            <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                私自身、CFA試験を受験したとき、右も左も分からない状態からスタートしました。
                英語の分厚いテキスト、膨大な学習範囲、仕事との両立……
                多くの壁にぶつかりながら合格を手にした経験から、
                <span className="font-bold text-blue-700">「最初に正しい戦略を知っていれば、もっと楽に、もっと早く合格できた」</span>
                と確信しています。
              </p>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                このメール講座は、そのノウハウを余すことなくお伝えするために作りました。
                シンガポール拠点でFA-Academyを運営しながら、多数のCFA受験生をサポートしてきた実績をもとに、
                あなたの合格に本当に役立つ情報だけをお届けします。
              </p>
              <p className="mt-4 text-right text-slate-500 text-sm font-medium">
                — あよもてぃ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
