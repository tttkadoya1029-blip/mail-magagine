import CTAButton from "./CTAButton";

const items = [
  { icon: "🎯", text: "CFA試験の全体構造と最新出題傾向の把握" },
  { icon: "📘", text: "教材選び・使い分けの正しい判断基準" },
  { icon: "🗓️", text: "試験日から逆算する学習スケジュールの立て方" },
  { icon: "🔑", text: "「知っている」を「できる」に変える学習法" },
  { icon: "🏆", text: "合格者ベースのロードマップと実践マインド" },
  { icon: "🌏", text: "2024年以降の公式教材重視の最新戦略" },
];

export default function SolutionSection() {
  return (
    <section className="py-16 px-4 bg-blue-700">
      <div className="max-w-3xl mx-auto text-white">
        <div className="text-center mb-12">
          <p className="text-blue-200 font-semibold text-sm uppercase tracking-wider mb-3">
            解決策はこちらです
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-4">
            7日間のメール講座で
            <br />
            <span className="text-amber-400">CFA合格に必要な全体像</span>を手に入れる
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            CFA Charterholderである代表・あよもてぃが、
            自身の学習経験と多数の受験生サポートで蓄積した
            ノウハウを凝縮した7日間プログラムです。
          </p>
        </div>

        {/* コース名 */}
        <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 mb-10 text-center">
          <p className="text-blue-200 text-sm mb-2">無料7日間メール講座</p>
          <h3 className="text-2xl sm:text-3xl font-black text-amber-400 mb-1">
            【CFA Level 1 勝利の方程式】
          </h3>
          <p className="text-blue-100 text-sm">日本語要点集付き</p>
        </div>

        {/* 学べること */}
        <p className="text-center text-blue-100 font-semibold mb-6">
          このメール講座で学べること：
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 bg-white/10 rounded-xl p-4 border border-white/10"
            >
              <span className="text-xl flex-shrink-0">{item.icon}</span>
              <p className="text-sm sm:text-base text-white leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <CTAButton label="今すぐ無料で受け取る →" className="text-lg" />
          <p className="mt-4 text-blue-200 text-sm">
            登録は1分で完了。スマホからでも簡単にお受け取りいただけます。
          </p>
        </div>
      </div>
    </section>
  );
}
