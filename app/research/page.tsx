import { ExperienceTab } from "@/components/experience-tab"
import { Header } from "@/components/header"

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-[#e8f5e9] flex flex-col">
      <Header currentPage="research" />

      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center">Research Projects</h1>

        <div className="max-w-4xl mx-auto space-y-8">
          <ExperienceTab
            title="Machine Learning for Healthcare Applications"
            organization="Stanford AI Lab"
            date="2020 - 2021"
            points={[
              "Developed novel algorithms for medical image analysis using deep learning",
              "Published research in top-tier conferences including MICCAI and IEEE ISBI",
              "Collaborated with medical professionals to validate results",
              "Open-sourced code and models for community use",
            ]}
          />

          <ExperienceTab
            title="Natural Language Processing Research"
            organization="NUS NLP Group"
            date="2018 - 2019"
            points={[
              "Researched transformer-based models for low-resource languages",
              "Implemented and evaluated various attention mechanisms",
              "Presented findings at the ACL Student Research Workshop",
              "Contributed to an open-source NLP toolkit",
            ]}
          />

          <ExperienceTab
            title="Internet of Things Security"
            organization="Cybersecurity Research Center"
            date="2017 - 2018"
            points={[
              "Analyzed security vulnerabilities in consumer IoT devices",
              "Developed a lightweight encryption protocol for resource-constrained devices",
              "Created a testing framework for security assessment",
              "Published findings in IEEE Internet of Things Journal",
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
