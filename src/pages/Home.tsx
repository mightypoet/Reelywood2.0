import { Hero } from '../components/Hero';
import { SocialProof } from '../components/SocialProof';
import { InteractiveFunnel } from '../components/InteractiveFunnel';
import { InteractiveWorkflow } from '../components/InteractiveWorkflow';
import { CoursesGrid } from '../components/CoursesGrid';
import { TrustIndicators } from '../components/TrustIndicators';
import { AboutTeam } from '../components/AboutTeam';
import { PodcastSection } from '../components/PodcastSection';

export function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <InteractiveFunnel />
      <InteractiveWorkflow />
      <CoursesGrid />
      <TrustIndicators />
      <AboutTeam />
      <PodcastSection />
    </>
  );
}
