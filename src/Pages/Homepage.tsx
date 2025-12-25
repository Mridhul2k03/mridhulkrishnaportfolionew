import { useState } from 'react';
import Dock from "../Components/Dock"
import Particles from "../Components/Ui/Particles"
import { Home, User, Code, Phone, FileText, Rocket } from "lucide-react";
import SplitText from "../Components/Ui/SplitText";
import About from "../Components/About";
import Projects from "@/Components/Projects";
import Contact from "@/Components/Contact";
import ResumeModal from "@/Components/Ui/ResumeModal"; // Add this import

function Homepage() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false); // Add state

  const items = [
    {
      icon: <Home size={18} />,
      label: "Home",
      onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
      className: "bg-blue-100 dark:bg-blue-900"
    },
    {
      icon: <User size={18} />,
      label: "About",
      onClick: () => window.scrollTo({ top: document.getElementById('about')?.offsetTop || 0, behavior: 'smooth' }),
      className: "bg-green-100 dark:bg-green-900"
    },
    {
      icon: <Code size={18} />,
      label: "Projects",
      onClick: () => window.scrollTo({ top: document.getElementById('projects')?.offsetTop || 0, behavior: 'smooth' }),
      className: "bg-yellow-100 dark:bg-yellow-900"
    },
    {
      icon: <Rocket size={18} />,
      label: "Skills",
      onClick: () => window.scrollTo({ top: document.getElementById('skills')?.offsetTop || 0, behavior: 'smooth' }),
      className: "bg-purple-100 dark:bg-purple-900"
    },
    {
      icon: <Phone size={18} />,
      label: "Contact",
      onClick: () => window.scrollTo({ top: document.getElementById('contact')?.offsetTop || 0, behavior: 'smooth' }),
      className: "bg-red-100 dark:bg-red-900"
    },
    {
      icon: <FileText size={18} />,
      label: "Resume",
      onClick: () => setIsResumeModalOpen(true), // Updated to open modal
      className: "bg-red-100 dark:bg-red-900"
    }
  ]

  return (
    <>
      <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={500}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            fontSize: "48px",
            fontWeight: "bold",
            textAlign: "center",
            zIndex: 10,
          }}
        >
          <SplitText text=" Hi I'm Mridhul" />
        </div>
      </div>
      
      <Dock items={items} className="z-10" />
      <About />
      <Projects />
      <Contact />
      
      {/* Add Resume Modal */}
      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />
    </>
  )
}

export default Homepage