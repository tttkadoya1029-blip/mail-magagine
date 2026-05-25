import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import FailureSection from "@/components/FailureSection";
import SolutionSection from "@/components/SolutionSection";
import CourseContent from "@/components/CourseContent";
import BonusSection from "@/components/BonusSection";
import ProfileSection from "@/components/ProfileSection";
import FormSection from "@/components/FormSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyNav from "@/components/StickyNav";

export default function Home() {
  return (
    <main>
      {/* 1. ヒーロー */}
      <Hero />

      {/* セクション区切り */}
      <div className="section-divider mx-auto max-w-3xl" />

      {/* 2. 問題提起 */}
      <ProblemSection />

      {/* 3. 失敗する理由 */}
      <FailureSection />

      {/* 4. 解決策（コース概要） */}
      <SolutionSection />

      {/* 5. 7日間の内容 */}
      <CourseContent />

      {/* 6. 無料特典 */}
      <BonusSection />

      {/* 7. プロフィール */}
      <ProfileSection />

      {/* 8. メインCTA（フォーム） */}
      <FormSection />

      {/* 最後のCTA */}
      <FinalCTA />

      {/* フッター */}
      <Footer />

      {/* スマホ用スティッキーCTA */}
      <StickyNav />

      {/* スマホスティッキーCTAの高さ分の余白 */}
      <div className="h-16 sm:hidden" />
    </main>
  );
}
