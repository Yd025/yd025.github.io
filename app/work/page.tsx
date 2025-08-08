import { ExperienceTab } from "@/components/experience-tab"
import { Header } from "@/components/header"

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#e8f5e9] flex flex-col">
      <Header currentPage="work" />

      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center">Work Experience</h1>

        <div className="max-w-4xl mx-auto space-y-8">
          <ExperienceTab
            title="Senior Software Engineer"
            organization="Tech Company"
            date="Jan 2022 - Present"
            points={[
              "Led the development of a key product feature that increased user engagement by 35%",
              "Collaborated with cross-functional teams to implement new technologies",
              "Mentored junior developers and conducted code reviews",
              "Optimized database queries resulting in 50% faster load times",
            ]}
          />

          <ExperienceTab
            title="Software Engineer"
            organization="Startup Inc."
            date="Mar 2019 - Dec 2021"
            points={[
              "Developed and maintained RESTful APIs using Node.js and Express",
              "Implemented responsive UI components with React and TypeScript",
              "Participated in agile development processes including daily standups and sprint planning",
              "Deployed and monitored applications using AWS services",
            ]}
          />

          <ExperienceTab
            title="Junior Developer"
            organization="Digital Agency"
            date="Jun 2017 - Feb 2019"
            points={[
              "Built and maintained client websites using HTML, CSS, and JavaScript",
              "Collaborated with designers to implement pixel-perfect layouts",
              "Optimized website performance and accessibility",
              "Assisted in troubleshooting and bug fixing",
            ]}
          />
        </div>
      </section>

      <footer className="bg-gray-100 py-6 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs">© 2025 Adelin Ma. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
