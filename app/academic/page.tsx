import { ExperienceTab } from "@/components/experience-tab"
import { Header } from "@/components/header"

export default function AcademicPage() {
  return (
    <main className="min-h-screen bg-[#e8f5e9] flex flex-col">
      <Header currentPage="academic" />

      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center">Academic Background</h1>

        <div className="max-w-4xl mx-auto space-y-8">
          <ExperienceTab
            title="Master of Science in Computer Science"
            organization="Stanford University"
            date="2019 - 2021"
            points={[
              "Specialized in Artificial Intelligence and Machine Learning",
              "Thesis: 'Optimizing Neural Networks for Edge Computing Applications'",
              "GPA: 3.9/4.0",
              "Teaching Assistant for Introduction to Machine Learning",
            ]}
          />

          <ExperienceTab
            title="Bachelor of Science in Computer Engineering"
            organization="National University of Singapore"
            date="2015 - 2019"
            points={[
              "Dean's List for all semesters",
              "Capstone Project: 'IoT-based Smart Home System'",
              "Participated in ACM-ICPC Programming Competition",
              "Vice President of the Computer Science Club",
            ]}
          />

          <ExperienceTab
            title="High School Diploma"
            organization="Raffles Institution"
            date="2011 - 2015"
            points={[
              "Graduated with Distinction",
              "President of the Robotics Club",
              "National Mathematics Olympiad - Gold Medal",
              "Science Research Program Participant",
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
