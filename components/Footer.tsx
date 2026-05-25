export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-white font-bold text-base mb-1">
          Financial Analyst Academy
        </p>
        <p className="text-sm mb-6">
          CFA Charterholder監修 | シンガポール拠点
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-xs mb-8">
          <a href="#" className="hover:text-white transition-colors">
            プライバシーポリシー
          </a>
          <a href="#" className="hover:text-white transition-colors">
            特定商取引法に基づく表記
          </a>
          <a href="#" className="hover:text-white transition-colors">
            お問い合わせ
          </a>
        </div>
        <p className="text-xs text-slate-500">
          © 2024 Financial Analyst Academy. All rights reserved.
        </p>
        <p className="text-xs text-slate-600 mt-2">
          ※ CFA® は CFA Institute の登録商標です。本サービスは CFA Institute とは無関係の独立した教育サービスです。
        </p>
      </div>
    </footer>
  );
}
