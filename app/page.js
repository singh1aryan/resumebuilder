import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Star } from "lucide-react"
import { Testimonials } from "./testimonials"
import Link from 'next/link' // Add this import

// const TikTokIcon = ({ className = "w-6 h-6" }) => (
//   <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//     <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
//   </svg>
// )

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-2">
          <svg
            className="h-8 w-8 text-primary"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
            <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
            <path d="M9 9h1" />
            <path d="M9 13h6" />
            <path d="M9 17h6" />
          </svg>
          <span className="text-2xl font-bold">
            <span className="text-primary">Resume</span>Review
          </span>
        </div>
        <nav className="space-x-4">
          <a className="text-sm font-medium hover:text-primary" href="#">
            Reviews & examples
          </a>
          <a className="text-sm font-medium hover:text-primary" href="#">
            How it works
          </a>
          <a className="text-sm font-medium hover:text-primary" href="#">
            Pricing
          </a>
          <Button variant="outline">Login</Button>
          <Button variant="secondary">Sign Up</Button>
          <Button>Get started</Button>
        </nav>
      </header>
      <main className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Get your resume ready for <span className="bg-green-500 text-white">$100k jobs</span>
          </h1>
          <p className="text-xl mb-6 text-gray-600">
            The #1 AI-powered Resume Review Platform for Job Seekers and Professionals
          </p>
          <div className="flex items-center space-x-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-yellow-400" />
            ))}
            <span className="text-sm text-gray-600">Rated 4.9 by 10,000+ happy customers</span>
          </div>
          <Link href="/build">
            <Button size="lg" className="mb-4">
              Build from scratch
            </Button>
          </Link>
          <Button size="lg" className="mb-4 mx-3">
            Get your resume reviewed
          </Button>
          <div className="text-sm text-gray-600 mb-6">As seen on:</div>
          <div className="flex space-x-4">
            <Facebook className="text-gray-600 hover:text-primary transition-colors" />
            <Instagram className="text-gray-600 hover:text-primary transition-colors" />
            <Linkedin className="text-gray-600 hover:text-primary transition-colors" />
            {/* <TikTokIcon className="text-gray-600 hover:text-primary transition-colors" /> */}
          </div>
        </div>
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Resume Review Demo"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
      <section className="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">All reviews include</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <svg
                className="h-5 w-5 text-green-500 mr-2"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Comprehensive AI analysis
            </li>
            <li className="flex items-center">
              <svg
                className="h-5 w-5 text-green-500 mr-2"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Expert human review
            </li>
            <li className="flex items-center">
              <svg
                className="h-5 w-5 text-green-500 mr-2"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Tailored improvement suggestions
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Why choose ResumeReview?</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <svg
                className="h-5 w-5 text-green-500 mr-2"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Industry-leading AI technology
            </li>
            <li className="flex items-center">
              <svg
                className="h-5 w-5 text-green-500 mr-2"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Personalized feedback
            </li>
            <li className="flex items-center">
              <svg
                className="h-5 w-5 text-green-500 mr-2"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              24/7 customer support
            </li>
          </ul>
        </div>
      </section>
      <Testimonials />
      <section className="mt-16 text-center bg-gray-100 py-12 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">$29</h2>
        <p className="text-xl mb-2">one-time payment</p>
        <p className="text-gray-600 mb-6">Get your dream job faster</p>
        <Button size="lg">Start your review now</Button>
      </section>
    </div>
  )
}