import BackgroundBlobs from "../components/main/BackgroundBlobs";
import HeroTitle from "../components/main/HeroTitle";
import HeroSubtitle from "../components/main/HeroSubtitle";
import HeroDescription from "../components/main/HeroDescription";
import HeroButtons from "../components/main/HeroButtons";
import SocialIcons from "../components/main/SocialIcons";

function Main () {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-graphite-background/95 pt-16 overflow-hidden"
    >
      <BackgroundBlobs />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 rounded-xl p-10 space-y-8">
        <HeroTitle />
        <HeroSubtitle />
        <HeroDescription />
        <HeroButtons />
        <SocialIcons />
      </div>
    </section>
  );
};

export default Main;
