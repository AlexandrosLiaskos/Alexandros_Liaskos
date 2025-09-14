import { Hero } from "@/components/sections/hero"
import { Experience } from "@/components/sections/experience"
import { Projects } from "@/components/sections/projects"
import { Skills } from "@/components/sections/skills"
import { Education } from "@/components/sections/education"
import { Publications } from "@/components/sections/publications"
import { Additional } from "@/components/sections/additional"
import { Contact } from "@/components/sections/contact"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Publications />
        <Additional />
        <Contact />
      </main>
    </>
  )
}
