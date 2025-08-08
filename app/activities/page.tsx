import { Header } from "@/components/header"
import { ExperienceTab } from "@/components/experience-tab"

export default function ActivitiesPage() {
  return (
    <main className="min-h-screen bg-[#e8f5e9] flex flex-col">
      <Header currentPage="activities" />

      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center">Activities & Leadership</h1>

        <div className="max-w-4xl mx-auto space-y-8">
          <ExperienceTab
            title="Tech Conference Organizer"
            organization="TechConnect Annual Conference"
            date="2020 - Present"
            points={[
              "Lead a team of 15 volunteers to organize annual technology conference with 500+ attendees",
              "Secure sponsorships from major tech companies totaling over $50,000 annually",
              "Coordinate speaker selection and schedule for 30+ technical sessions",
              "Implement feedback system that improved attendee satisfaction by 25%",
            ]}
          />

          <ExperienceTab
            title="Hackathon Mentor"
            organization="Global Hack Initiative"
            date="2019 - Present"
            points={[
              "Mentor student teams during 48-hour hackathon events",
              "Provide technical guidance on web development, mobile apps, and AI projects",
              "Judge project submissions and provide constructive feedback",
              "Conduct workshops on modern development practices and tools",
            ]}
          />

          <ExperienceTab
            title="Competitive Programming Coach"
            organization="University Coding Team"
            date="2018 - 2021"
            points={[
              "Trained university students for ACM-ICPC and other programming competitions",
              "Developed practice problems and conducted weekly training sessions",
              "Led team to regional finals with top 10 placement",
              "Created comprehensive algorithm and data structure curriculum",
            ]}
          />

          <ExperienceTab
            title="Tech Meetup Organizer"
            organization="Seattle Web Developers Group"
            date="2017 - 2019"
            points={[
              "Organized monthly meetups for 100+ web developers in the Seattle area",
              "Secured venue sponsors and refreshments for each event",
              "Recruited speakers on topics including React, Node.js, and cloud technologies",
              "Grew membership by 40% through targeted outreach and quality programming",
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
