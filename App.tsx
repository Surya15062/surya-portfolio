import { Navigation } from './components/Navigation';
import { ModernHero } from './components/ModernHero';
import { ModernSkills } from './components/ModernSkills';
import { ModernProjects } from './components/ModernProjects';
import { ModernAbout } from './components/ModernAbout';
import { ModernContact } from './components/ModernContact';
import { ModernFooter } from './components/ModernFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ModernHero />
      <ModernAbout />
      <ModernSkills />
      <ModernProjects />
      <ModernContact />
      <ModernFooter />
    </div>
  );
}