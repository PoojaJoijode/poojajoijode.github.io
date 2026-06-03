import {
  About,
  Certifications,
  Contact,
  Education,
  Experience,
  Footer,
  Hero,
  Navbar,
  Projects,
  Skills
} from './components';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app-shell">
      <div className="background-grid" aria-hidden="true" />
      <Navbar theme={theme} onThemeToggle={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
