"use client";

import { useState, useEffect } from 'react'
// import img from "next/img"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Star, Check, Users } from 'lucide-react'

const mentors = [
  { name: "Dr. Emily Chen", role: "Study Abroad Specialist", company: "Global Ed Consultants", companyLogo: "/logos/global-ed.png", experience: "10+ years of experience", rating: 5.0 },
  { name: "Prof. Michael Brown", role: "International Education Expert", company: "Ivy League University", companyLogo: "/logos/ivy-league.png", experience: "15+ years of experience", rating: 5.0 },
  { name: "Sarah Johnson", role: "Career Counselor", company: "Future Careers Inc.", companyLogo: "/logos/future-careers.png", experience: "8 years of experience", rating: 5.0 },
  { name: "Dr. Alex Wong", role: "Cultural Integration Advisor", company: "Adapt International", companyLogo: "/logos/adapt-intl.png", experience: "12+ years of experience", rating: 5.0 },
  { name: "Maria Garcia", role: "Language Learning Specialist", company: "Polyglot Academy", companyLogo: "/logos/polyglot.png", experience: "7 years of experience", rating: 5.0 },
  { name: "James Smith", role: "Financial Aid Expert", company: "EduFund Solutions", companyLogo: "/logos/edufund.png", experience: "9 years of experience", rating: 5.0 },
]

const countries = [
  { name: "USA", flag: "🇺🇸" },
  { name: "UK", flag: "🇬🇧" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "Japan", flag: "🇯🇵" },
  { name: "Singapore", flag: "🇸🇬" },
  { name: "France", flag: "🇫🇷" },
  { name: "Spain", flag: "🇪🇸" },
  { name: "Italy", flag: "🇮🇹" },
]

const services = [
  "Personalized Mentorship",
  "University Application Guidance",
  "Visa and Immigration Support",
  "Cultural Adaptation Coaching",
  "Career Planning Assistance"
]

const testimonials = [
  { 
    name: "Alex Thompson", 
    photo: "https://i.pravatar.cc/100?img=1", 
    university: "Harvard University", 
    country: "USA", 
    job: "Software Engineer at Google",
    text: "The mentorship I received was <span class='text-purple-400 font-semibold'>invaluable</span>. It completely <span class='text-purple-400 font-semibold'>changed my study abroad experience</span> and set me on the path to my dream career.", 
    rating: 5 
  },
  { 
    name: "Sophia Lee", 
    photo: "https://i.pravatar.cc/100?img=2", 
    university: "University of Oxford", 
    country: "UK", 
    job: "Research Scientist at NASA",
    text: "I couldn't have navigated the application process without my mentor's guidance. Their insights were <span class='text-purple-400 font-semibold'>crucial to my success</span>. Highly recommended!", 
    rating: 5 
  },
  { 
    name: "Raj Patel", 
    photo: "https://i.pravatar.cc/100?img=3", 
    university: "National University of Singapore", 
    country: "Singapore", 
    job: "Investment Banker at JP Morgan",
    text: "The cultural insights from my mentor helped me <span class='text-purple-400 font-semibold'>adjust quickly to my new environment</span>. Their support was instrumental in my academic and professional success.", 
    rating: 4.5 
  },
]

export default function MentorshipLandingPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <h1 className="text-2xl font-bold text-white">MentorMatch</h1>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button variant="ghost" className="text-white hover:text-purple-200">Home</Button>
          <Button variant="ghost" className="text-white hover:text-purple-200">About</Button>
          <Button variant="ghost" className="text-white hover:text-purple-200">Contact</Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                    Book 1:1 calls with expert study abroad mentors
                  </h1>
                  <p className="max-w-[600px] text-zinc-200 md:text-xl">
                    Get personalized guidance from experienced mentors to help you navigate your study abroad journey.
                  </p>
                </div>
                <div className="space-y-4">
                  <ul className="space-y-2">
                    {services.map((service, index) => (
                      <li key={index} className="flex items-center text-white">
                        <Check className="mr-2 h-5 w-5 text-green-400" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center space-x-2 text-white">
                    <Users className="h-5 w-5 text-yellow-400" />
                    <span className="font-semibold">1000+ happy customers</span>
                    <span className="text-2xl">🎉😊👍</span>
                  </div>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <form className="flex space-x-2">
                    <Input
                      className="max-w-lg flex-1 bg-white/10 text-white placeholder:text-zinc-400"
                      placeholder="Enter your email"
                      type="email"
                    />
                    <Button className="bg-purple-600 text-white hover:bg-purple-700">
                      Get Started
                    </Button>
                  </form>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-zinc-300 mb-2">Trusted by students from 10+ countries</p>
                  <div className="flex flex-wrap gap-2">
                    {countries.map((country) => (
                      <span key={country.name} className="text-2xl" title={country.name}>
                        {country.flag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden h-[600px]">
                <div className="absolute inset-0 animate-scroll">
                  {mentors.concat(mentors).map((mentor, index) => (
                    <div key={index} className="flex flex-col items-center space-y-2 border border-purple-300/20 rounded-lg p-4 backdrop-blur-sm mb-4">
                      <img
                        alt={mentor.name}
                        className="rounded-full"
                        height="100"
                        src={`https://i.pravatar.cc/100?img=${index + 1}`}
                        width="100"
                      />
                      <h3 className="text-xl font-bold text-white">{mentor.name}</h3>
                      <p className="text-sm text-zinc-300">{mentor.role}</p>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(mentor.rating) ? 'text-yellow-400' : 'text-gray-400'}`} />
                        ))}
                        <span className="ml-2 text-white">{mentor.rating}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 bg-white/5">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Expert Mentors</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {mentors.map((mentor, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-4">
                    <div className="flex items-center mb-4">
                      <img
                        alt={mentor.name}
                        className="rounded-full mr-4"
                        height="60"
                        src={`https://i.pravatar.cc/100?img=${index + 7}`}
                        width="60"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{mentor.name}</h3>
                        <p className="text-sm text-gray-600">{mentor.role}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{mentor.experience}</p>
                    <div className="flex items-center mb-4">
                      <img
                        alt={mentor.company}
                        height="20"
                        src={mentor.companyLogo}
                        width="20"
                      />
                      <span className="ml-2 text-sm text-gray-600">{mentor.company}</span>
                    </div>
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(mentor.rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">{mentor.rating.toFixed(1)}</span>
                    </div>
                    <Button className="w-full bg-purple-600 text-white hover:bg-purple-700">
                      Book a FREE Trial
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 bg-white/5">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">What Our Students Say</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <img
                      alt={testimonial.name}
                      className="rounded-full mr-4"
                      height="60"
                      src={testimonial.photo}
                      width="60"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                      <p className="text-sm text-zinc-300">{testimonial.job}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-zinc-300">{testimonial.university}</p>
                    <p className="text-sm text-zinc-300">{testimonial.country}</p>
                  </div>
                  <p className="text-white mb-4" dangerouslySetInnerHTML={{ __html: testimonial.text }}></p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(testimonial.rating) ? 'text-yellow-400' : 'text-gray-400'}`} />
                    ))}
                    <span className="ml-2 text-zinc-300">{testimonial.rating.toFixed(1)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-purple-300/20">
        <p className="text-xs text-zinc-400">© 2023 MentorMatch. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-zinc-400" href="#">Terms of Service</Link>
          <Link className="text-xs hover:underline underline-offset-4 text-zinc-400" href="#">Privacy</Link>
        </nav>
      </footer>
    </div>
  )
}