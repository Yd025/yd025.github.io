import { Header } from "@/components/header"
import { ProjectCard } from "@/components/project-card"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#e8f5e9] flex flex-col">
      <Header currentPage="projects" />

      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center">Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <ProjectCard
            title="AI-Powered Task Manager"
            description="A productivity application that uses machine learning to prioritize tasks and suggest optimal work schedules based on user behavior patterns."
            technologies={["React", "Node.js", "TensorFlow.js", "MongoDB"]}
            imageUrl="/placeholder.svg?height=400&width=600"
            liveUrl="https://example.com/project1"
            githubUrl="https://github.com/username/project1"
          />

          <ProjectCard
            title="Sustainable Energy Dashboard"
            description="An interactive dashboard that visualizes renewable energy production and consumption data, helping users understand and optimize their energy usage."
            technologies={["Vue.js", "D3.js", "Express", "PostgreSQL"]}
            imageUrl="/placeholder.svg?height=400&width=600"
            liveUrl="https://example.com/project2"
            githubUrl="https://github.com/username/project2"
          />

          <ProjectCard
            title="Healthcare Appointment System"
            description="A comprehensive platform for healthcare providers to manage appointments, patient records, and billing in a secure and efficient manner."
            technologies={["React Native", "Firebase", "GraphQL", "AWS"]}
            imageUrl="/placeholder.svg?height=400&width=600"
            liveUrl="https://example.com/project3"
            githubUrl="https://github.com/username/project3"
          />

          <ProjectCard
            title="Augmented Reality Navigation"
            description="A mobile application that uses AR to provide intuitive navigation guidance in complex indoor environments like shopping malls and airports."
            technologies={["Unity", "ARKit", "C#", "Python"]}
            imageUrl="/placeholder.svg?height=400&width=600"
            githubUrl="https://github.com/username/project4"
          />

          <ProjectCard
            title="Blockchain Voting System"
            description="A secure and transparent voting platform built on blockchain technology to ensure election integrity and voter privacy."
            technologies={["Solidity", "Ethereum", "Web3.js", "React"]}
            imageUrl="/placeholder.svg?height=400&width=600"
            liveUrl="https://example.com/project5"
          />

          <ProjectCard
            title="Natural Language Code Generator"
            description="An AI tool that converts natural language descriptions into functional code snippets across multiple programming languages."
            technologies={["Python", "PyTorch", "FastAPI", "Next.js"]}
            imageUrl="/placeholder.svg?height=400&width=600"
            liveUrl="https://example.com/project6"
            githubUrl="https://github.com/username/project6"
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
