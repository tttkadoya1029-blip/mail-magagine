"use client";

import { useState } from "react";

const includes = [
  "7日間メール講座【CFA Level 1 勝利の方程式】",
  "CFA Level 1 日本語要点集 財務諸表分析編（PDF）",
  "CFA受験情報電子書籍",
  "メール講座限定の期間限定特典",
];

export default function FormSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: ここを実際のフォーム送信処理（メルマガ配信ツールの埋め込みフォーム）に置き換える
    // 例: Mailchimp / ConvertKit / ActiveCampaign のフォームURLへPOSTまたはiframe埋め込み
    console.log("Form submitted:", { name, email });
    setSubmitted(true);
  };

  return (
    <section id="form-section" className="py-16 px-4 gradient-blue-navy">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-blue-200 font-semibold text-sm uppercase tracking-wider mb-3">
            今すぐ無料で受け取る
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-4">
            7日間でCFA学習の
            <br />
            <span className="text-amber-400">全体像をつかむ</span>
          </h2>
          <p className="text-blue-100 text-sm sm:text-base">
            以下のフォームからご登録いただくと、
            <br />
            すぐにメール講座と特典をお届けします。
          </p>
        </div>

        {/* 受け取れるもの */}
        <div className="bg-white/10 rounded-2xl p-6 mb-8 border border-white/20">
          <p className="text-white font-bold text-sm mb-4">
            ご登録で受け取れるもの：
          </p>
          <ul className="space-y-2.5">
            {includes.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-white">
                <svg
                  className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* フォーム */}
        {/*
          =====================================================
          TODO: 実装時にここを差し替えてください
          メルマガ配信サービス（Mailchimp / ConvertKit など）の
          埋め込みフォームコードをこの <div> 内に貼り付けてください。
          =====================================================
        */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {submitted ? (
            <div className="text-center py-4">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                ご登録ありがとうございます！
              </h3>
              <p className="text-slate-600 text-sm">
                ご入力のメールアドレスに確認メールを送りました。
                <br />
                メールボックスをご確認ください。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-slate-700 text-sm font-semibold mb-1.5"
                >
                  お名前
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="例：山田 太郎"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-slate-700 text-sm font-semibold mb-1.5"
                >
                  メールアドレス
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="例：your@email.com"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm"
                />
              </div>

              <button
                type="submit"
                className="cta-pulse w-full bg-amber-500 hover:bg-amber-400 text-white font-bold text-base py-4 rounded-full shadow-lg transition-all duration-200 hover:scale-[1.02] cursor-pointer"
              >
                無料でメール講座を受け取る →
              </button>

              <p className="text-slate-400 text-xs text-center leading-relaxed">
                登録は無料です。いつでも配信解除できます。
                <br />
                ご入力いただいた情報は厳重に管理し、第三者に提供することはありません。
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
