import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Smartphone, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">YP</span>
            </div>
            <span className="font-bold text-xl">Yash Patel</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com" target="_blank">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="#contact">
                <Mail className="h-4 w-4 mr-2" />
                Hire Me
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Hi, I'm <span className="text-primary">Yash Patel</span>
                </h1>
                <p className="text-xl text-muted-foreground md:text-2xl">Full-Stack Developer & UI/UX Designer</p>
              </div>
              <p className="max-w-[600px] text-muted-foreground md:text-lg">
                I create beautiful, functional, and user-centered digital experiences. With expertise in modern web
                technologies and design principles, I bring ideas to life.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="#projects">View My Work</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Image
                    src="/YASH PESONAL PORTFOLLIO IMAGE 2 cpy.jpg?height=700&width=300"
                    alt="Yash Patel"
                    width={300}
                    height={300}
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-3 rounded-full">
                  <Code className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <Image
                src="/YASH PESONAL PORTFOLLIO IMAGE 2.jpg?height=400&width=500"
                alt="About me"
                width={500}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
                <p className="text-muted-foreground">Passionate developer with 5+ years of experience</p>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a passionate full-stack developer with over 6 month of experience creating digital solutions that
                  make a difference. I specialize in React, Next.js, and modern web technologies.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                  or sharing knowledge with the developer community.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold">10+</h3>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
                <div>
                  <h3 className="font-semibold">1+</h3>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <h3 className="font-semibold">30+</h3>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
                <div>
                  <h3 className="font-semibold">100%</h3>
                  <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Skills & Expertise</h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              I work with a variety of technologies and tools to bring your ideas to life
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <Code className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Frontend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Backend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">PHP</Badge>
                  <Badge variant="secondary">MYSQL</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Palette className="h-8 w-8 text-primary mb-2" />
                <CardTitle>UI/UX Design</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Figma</Badge>
                  <Badge variant="secondary">Adobe XD</Badge>
                  <Badge variant="secondary">Sketch</Badge>
                  <Badge variant="secondary">Prototyping</Badge>
                </div>
              </CardContent>
            </Card>

            {/* <Card>
              <CardHeader>
                <Smartphone className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Mobile Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React Native</Badge>
                  <Badge variant="secondary">Flutter</Badge>
                  <Badge variant="secondary">iOS</Badge>
                  <Badge variant="secondary">Android</Badge>
                </div>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Projects</h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              Here are some of my recent projects that showcase my skills and experience
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/petcare.png?height=200&width=400"
                  alt="E-commerce Platform"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Pet care Platform</CardTitle>
                <CardDescription>A full-stack e-commerce solution built with PHP and JS</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Javascript</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">PHP</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <Link href="#" target="_blank">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="#" target="_blank">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/event.png?height=200&width=400"
                  alt="Task Management App"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Event Management System</CardTitle>
                <CardDescription>A collaborative Event management tool with real-time updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Socket.io</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <Link href="#" target="_blank">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="#" target="_blank">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/h.png?height=200&width=400"
                  alt="Weather Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Hotel Predictor Chatbot</CardTitle>
                <CardDescription>A beautiful Chatbot app with location-based forecasts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">API Integration</Badge>
                  <Badge variant="outline">PWA</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <Link href="#" target="_blank">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="#" target="_blank">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get In Touch</h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              Have a project in mind? Let's work together to bring your ideas to life.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Let's start a conversation</h3>
                <p className="text-muted-foreground mb-6">
                  I'm always interested in hearing about new projects and opportunities.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>yashpatel261006@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Github className="h-5 w-5 text-primary" />
                  <span>github.com/yashpatel-it</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <span>www.linkedin.com/in/yash-patel-4a5857252
</span>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">
                        First name
                      </label>
                      <Input id="first-name" placeholder="Yash" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">
                        Last name
                      </label>
                      <Input id="last-name" placeholder="Patel" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="yashpatel261006@gmail.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Tell me about your project..." className="min-h-[100px]" />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © {new Date().getFullYear()} John Doe. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com" target="_blank">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:yashpatel@gmail.com">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
