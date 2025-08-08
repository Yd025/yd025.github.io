import { Header } from "@/components/header"
import { ServiceCard } from "@/components/service-card"

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-[#e8f5e9] flex flex-col">
      <Header currentPage="service" />

      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center">Community Service</h1>

        <div className="max-w-4xl mx-auto space-y-8">
          <ServiceCard
            title="Technology Education Initiative"
            organization="Underserved Schools Coalition"
            date="2021 - Present"
            description="A program designed to introduce computer science and programming concepts to students in underserved communities through weekly workshops and mentorship."
            role="Lead Instructor and Program Coordinator responsible for curriculum development, volunteer training, and partnership management with local schools."
            impact="Reached over 500 students across 12 schools, with 70% of participants expressing increased interest in pursuing STEM education and careers."
          />

          <ServiceCard
            title="Disaster Relief Tech Support"
            organization="Global Emergency Response Team"
            date="2020 - Present"
            description="Providing technical expertise and digital infrastructure support during natural disasters and humanitarian crises to facilitate communication and coordination among relief workers."
            role="Technical Lead for communications systems deployment and training local personnel on using emergency response software and hardware."
            impact="Supported relief efforts in 3 major natural disasters, helping coordinate the delivery of aid to over 10,000 affected individuals."
          />

          <ServiceCard
            title="Accessibility Hackathon"
            organization="Tech for All Foundation"
            date="2019 - 2021"
            description="An annual event bringing together developers, designers, and accessibility experts to create innovative solutions for people with disabilities."
            role="Event Organizer and Mentor, providing guidance to teams and ensuring projects meet accessibility standards and address real user needs."
            impact="Facilitated the development of 15+ accessibility-focused applications, 5 of which have been adopted by nonprofit organizations serving people with disabilities."
          />

          <ServiceCard
            title="Senior Digital Literacy Program"
            organization="Community Center Network"
            date="2018 - 2020"
            description="A series of workshops teaching senior citizens essential digital skills, from basic computer usage to online safety and communication tools."
            role="Volunteer Instructor conducting weekly classes and developing age-appropriate learning materials and exercises."
            impact="Helped over 200 seniors gain confidence in using technology for daily tasks, connecting with family, and accessing online services."
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
