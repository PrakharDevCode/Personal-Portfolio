"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, ExternalLink, Menu, X, ChevronDown } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const projects = [
    {
      id: 1,
      title: "Hotel Booking Management Website",
      // category: "web",
      description: "A Hotel Booking Management System built with C#, ASP.NET, and SQL Server to streamline reservations, customer records, and room management.",
      image: "/thumbnail-hotel.png",
      tech: ["C#", "Asp.net", "Sql Server"],
      link: "#",
    },
    {
      id: 2,
      title: "Netflix Clone Website",
      // category: "design",
      description: "Responsive Netflix clone website built using HTML and CSS, replicating the streaming platform’s modern UI design.",
      image: "/Screenshot (542).png",
      tech: ["HTML", "CSS", "Respnsive design"],
      link: "#",
    },
    {
      id: 3,
      title: "My Portfolio Website",
      // category: "mobile",
      description: "Modern portfolio website built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion, featuring smooth animations, responsive design, and optimized performance.",
      image: "/thumbnail-portfolio.png",
      tech: ["HTML","CSS","JavaScript(ES6+)","React.js","Next.js","Tailwind CSS","TypeScript","AI Prompt Engineering"],
      link: "#",
    },
    {
      id: 4,
      title: "PDF Tools Web App - InProgress",
      category: "web",
      description: "Built with Next.js 14, React 18, TypeScript, Tailwind CSS, and shadcn/ui, featuring drag-and-drop file upload, interactive tool selection, and responsive animations using modern AI tools as well.",
      image: "/thumbnail-tools.png",
      tech: ["HTML","CSS","Next.js","React.js","Typescript","Tailwind CSS"],
      link: "#",
    }

  ]

  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 75 },
    { name: "JavaScript", level: 60 },
    { name: "React/Next.js", level: 50 },
    { name: "TypeScript", level: 50 },
    { name: "Canva", level: 80 },
    { name: "Figma", level: 60 },
    { name: ".Net", level: 60 },
    { name: "MySql", level: 70 },
    { name: "C++", level: 70 },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full glass z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl font-sans gradient-text">My Portfolio</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:scale-110 transition-transform"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2 animate-fade-in glass-card rounded-lg mx-4 mb-4">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float"></div>
          <div
            className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary/40 rounded-full animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-accent/30 rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
        <div className={`text-center z-10 px-4 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <div className="animate-float mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary p-1 glass-card">
              <img
                src="/Selected photo (1).jpg"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-sans mb-6 gradient-text">Aspiring Frontend Developer</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Exploring frontend development and AI to build smart, user-friendly digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="text-lg px-8 hover:scale-105 transition-all duration-300"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="lg"
              className="text-lg px-8 glass-card hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
          <div className="flex justify-center space-x-6 mt-12">
            <a
              href="https://github.com/PrakharDevCode" target="_blank"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/insightprakhar/" target="_blank"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:prakharcode6@gmail.com" target="_blank"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-muted-foreground" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold font-sans mb-6 gradient-text">About Me</h2>
              <p className="text-lg text-muted-foreground mb-6">
                I’m Prakhar Shrivastava, currently working at HCLTech with 1.6 years of industry experience 
                in C# and quality engineering. My journey began with backend technologies and software 
                quality, but my true passion lies in creating engaging web experiences.  
                I’m now transitioning into Frontend Development, practicing HTML, CSS, JavaScript, and React, while also exploring AI-powered tools to design modern, 
                innovative digital solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                When I'm not coding, you can find me exploring new design trends, practicing Data Structures and Algorithm,
                or exploring other popular technology.
              </p>
              <Button
                onClick={() => scrollToSection("contact")}
                className="text-lg px-6 hover:scale-105 transition-all duration-300"
              >
                Let's Work Together
              </Button>
            </div>
            <div className="animate-slide-up">
              <div className="glass-card rounded-lg p-4">
                <img src="/developer-workspace.png" alt="Workspace" className="rounded-lg w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold font-sans mb-6 gradient-text">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here’s a glimpse of my work — from building a C# based project to 
              crafting modern frontend applications..            
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group glass-card hover:scale-105 transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <Button
                      size="sm"
                      className="bg-white/90 text-primary hover:bg-white hover:scale-110 transition-all duration-300"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold font-sans mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs glass">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold font-sans mb-6 gradient-text">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground">Technologies and tools I use to bring ideas to life</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full glass rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-primary via-accent to-secondary h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold font-sans mb-6 gradient-text">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">
              Ready to start your next project? Let's create something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold font-sans mb-6">Let's Talk</h3>
              <p className="text-muted-foreground mb-8">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or
                just want to say hi, I'll try my best to get back to you!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
                  <Mail className="text-primary" size={20} />
                  <span><a href="#">hello@portfolio.com</a></span>
                </div>
                <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
                  <Github className="text-primary" size={20} />
                  <span><a target="_blank" href="https://github.com/PrakharDevCode">github.com/portfolio</a></span>
                </div>
                <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
                  <Linkedin className="text-primary" size={20} />
                  <span><a target="_blank" href="https://www.linkedin.com/in/insightprakhar/">linkedin.com/in/portfolio</a></span>
                </div>
              </div>
            </div>

            <Card className="animate-slide-up glass-card">
              <CardContent className="p-6">
                <form action="https://formspree.io/f/mjkodyvr" method="POST" acceptCharset="UTF-8" className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" className="glass" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your.email@example.com" className="glass" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Tell me about your project..." rows={5} className="glass" />
                  </div>
                  <Button type="submit" className="w-full text-lg hover:scale-105 transition-all duration-300">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 glass">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">© 2025 Prakhar-Shrivastava-Portfolio</p>
        </div>
      </footer>

      {/* Theme Toggle Button */}
      <ThemeToggle />
    </div>
  )
}
