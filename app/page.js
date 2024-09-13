'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { PlusCircle, Trash2, Wand2, Download, CreditCard } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Simulated OpenAI API call
// const generateAIContent = async (prompt: string): Promise<string> => {
//   await new Promise(resolve => setTimeout(resolve, 1000));
//   return `AI-generated content for: ${prompt}`;
// }

// // Simulated PDF generation
// const generatePDF = async (resumeData: any): Promise<string> => {
//   await new Promise(resolve => setTimeout(resolve, 2000));
//   return URL.createObjectURL(new Blob([JSON.stringify(resumeData)], { type: 'application/pdf' }));
// }

export default function ResumeBuilder() {
  const [resume, setResume] = useState({
    name: 'Jake Ryan',
    contact: '123-456-7890 | jake@su.edu | linkedin.com/in/jake | github.com/jake',
    education: [
      {
        school: 'Southwestern University',
        degree: 'Bachelor of Arts in Computer Science, Minor in Business',
        location: 'Georgetown, TX',
        date: 'Aug. 2018 - May 2021'
      },
      {
        school: 'Blinn College',
        degree: 'Associate\'s in Liberal Arts',
        location: 'Bryan, TX',
        date: 'Aug. 2014 - May 2018'
      }
    ],
    experience: [
      {
        title: 'Undergraduate Research Assistant',
        company: 'Texas A&M University',
        location: 'College Station, TX',
        date: 'June 2020 - Present',
        details: [
          'Developed a REST API using FastAPI and PostgreSQL to store data from learning management systems',
          'Developed a full-stack web application using Flask, React, PostgreSQL and Docker to analyze GitHub data',
          'Explored ways to visualize GitHub collaboration in a classroom setting'
        ]
      },
      {
        title: 'Information Technology Support Specialist',
        company: 'Southwestern University',
        location: 'Georgetown, TX',
        date: 'Sep. 2018 - Present',
        details: [
          'Communicate with managers to set up campus computers used on campus',
          'Assess and troubleshoot computer problems brought by students, faculty and staff',
          'Maintain upkeep of computers, classroom equipment, and 200 printers across campus'
        ]
      },
      {
        title: 'Artificial Intelligence Research Assistant',
        company: 'Southwestern University',
        location: 'Georgetown, TX',
        date: 'May 2019 - July 2019',
        details: [
          'Explored methods to generate video game dungeons based off of The Legend of Zelda',
          'Developed a game in Java to test the generated dungeons',
          'Contributed 50K+ lines of code to an established codebase via Git',
          'Conducted a human subject study to determine which video game dungeon generation technique is enjoyable',
          'Wrote an 8-page paper and gave multiple presentations on-campus',
          'Presented virtually to the World Conference on Computational Intelligence'
        ]
      }
    ],
    projects: [
      {
        name: 'Gitlytics',
        technologies: 'Python, Flask, React, PostgreSQL, Docker',
        date: 'June 2020 - Present',
        details: [
          'Developed a full-stack web application using with Flask serving a REST API with React as the frontend',
          'Implemented GitHub OAuth to get data from user\'s repositories',
          'Visualized GitHub data to show collaboration',
          'Used Celery and Redis for asynchronous tasks'
        ]
      },
      {
        name: 'Simple Paintball',
        technologies: 'Spigot API, Java, Maven, TravisCI, Git',
        date: 'May 2018 - May 2020',
        details: [
          'Developed a Minecraft server plugin to entertain kids during free time for a previous job',
          'Published plugin to websites gaining 2K+ downloads and an average 4.5/5-star review',
          'Implemented continuous delivery using TravisCI to build the plugin upon new a release',
          'Collaborated with Minecraft server administrators to suggest features and get feedback about the plugin'
        ]
      }
    ],
    skills: {
      languages: 'Java, Python, C/C++, SQL (Postgres), JavaScript, HTML/CSS, R',
      frameworks: 'React, Node.js, Flask, JUnit, WordPress, Material-UI, FastAPI',
      developerTools: 'Git, Docker, TravisCI, Google Cloud Platform, VS Code, Visual Studio, PyCharm, IntelliJ, Eclipse',
      libraries: 'pandas, NumPy, Matplotlib'
    }
  })

  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)

  const updateResume = (field, value) => {
    setResume(prev => ({ ...prev, [field]: value }))
  }

  const updateNestedField = (section, index, field, value) => {
    setResume(prev => {
      const newSection = [...prev[section]]
      newSection[index] = { ...newSection[index], [field]: value }
      return { ...prev, [section]: newSection }
    })
  }

  const addItem = (section, item) => {
    setResume(prev => ({ ...prev, [section]: [...prev[section], item] }))
  }

  const removeItem = (section, index) => {
    setResume(prev => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index)
    }))
  }

  const updateDetail = (section, itemIndex, detailIndex, value) => {
    setResume(prev => {
      const newSection = [...prev[section]]
      newSection[itemIndex] = {
        ...newSection[itemIndex],
        details: newSection[itemIndex].details.map((detail, i) =>
          i === detailIndex ? value : detail
        )
      }
      return { ...prev, [section]: newSection }
    })
  }

  const addDetail = (section, itemIndex) => {
    setResume(prev => {
      const newSection = [...prev[section]]
      newSection[itemIndex] = {
        ...newSection[itemIndex],
        details: [...newSection[itemIndex].details, '']
      }
      return { ...prev, [section]: newSection }
    })
  }

  const removeDetail = (section, itemIndex, detailIndex) => {
    setResume(prev => {
      const newSection = [...prev[section]]
      newSection[itemIndex] = {
        ...newSection[itemIndex],
        details: newSection[itemIndex].details.filter((_, i) => i !== detailIndex)
      }
      return { ...prev, [section]: newSection }
    })
  }

  const generateAIDetail = async (section, itemIndex, detailIndex) => {
    const item = resume[section][itemIndex];
    const prompt = `Generate a bullet point for a resume ${section} section. 
                    Role: ${item.title || item.name}. 
                    Company/Project: ${item.company || item.technologies}. 
                    Current detail: ${item.details[detailIndex]}`;
    
    const aiContent = await generateAIContent(prompt);
    
    updateDetail(section, itemIndex, detailIndex, aiContent);
  }

  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true)
    try {
      const pdfUrl = await generatePDF(resume)
      const link = document.createElement('a')
      link.href = pdfUrl
      link.download = `${resume.name.replace(' ', '_')}_Resume.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Error generating PDF:', error)
      // Here you would typically show an error message to the user
    } finally {
      setIsGeneratingPDF(false)
    }
  }

  const handleAddAICredits = () => {
    // Implement the logic to add AI credits
    console.log('Adding AI credits')
  }

  return (
    <div className="flex flex-col h-screen">
      <nav className="bg-primary text-primary-foreground shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="font-bold text-xl">BestResumeReview</span>
            </div>
            <div className="flex items-center">
              <Button 
                onClick={handleAddAICredits}
                variant="secondary"
                className="mr-4"
              >
                <CreditCard className="mr-2 h-4 w-4" />
                Add AI Credits
              </Button>
              <Button 
                onClick={handleDownloadPDF} 
                disabled={isGeneratingPDF}
                variant="secondary"
              >
                {isGeneratingPDF ? 'Generating PDF...' : 'Download PDF'}
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/2 p-4 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">Resume Builder</h2>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={resume.name}
                onChange={(e) => updateResume('name', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="contact">Contact Information</Label>
              <Input
                id="contact"
                value={resume.contact}
                onChange={(e) => updateResume('contact', e.target.value)}
              />
            </div>
            
            <h3 className="text-xl font-semibold mt-4">Education</h3>
            {resume.education.map((edu, index) => (
              <div key={index} className="space-y-2 p-2 border rounded">
                <Input
                  placeholder="School"
                  value={edu.school}
                  onChange={(e) => updateNestedField('education', index, 'school', e.target.value)}
                />
                <Input
                  placeholder="Degree"
                  value={edu.degree}
                  onChange={(e) => updateNestedField('education', index, 'degree', e.target.value)}
                />
                <Input
                  placeholder="Location"
                  value={edu.location}
                  onChange={(e) => updateNestedField('education', index, 'location', e.target.value)}
                />
                <Input
                  placeholder="Date"
                  value={edu.date}
                  onChange={(e) => updateNestedField('education', index, 'date', e.target.value)}
                />
                <Button variant="destructive" onClick={() => removeItem('education', index)}>Remove</Button>
              </div>
            ))}
            <Button onClick={() => addItem('education', { school: '', degree: '', location: '', date: '' })}>
              Add Education
            </Button>
            
            <h3 className="text-xl font-semibold mt-4">Experience</h3>
            {resume.experience.map((exp, index) => (
              <div key={index} className="space-y-2 p-2 border rounded">
                <Input
                  placeholder="Title"
                  value={exp.title}
                  onChange={(e) => updateNestedField('experience', index, 'title', e.target.value)}
                />
                <Input
                  placeholder="Company"
                  value={exp.company}
                  onChange={(e) => updateNestedField('experience', index, 'company', e.target.value)}
                />
                <Input
                  placeholder="Location"
                  value={exp.location}
                  onChange={(e) => updateNestedField('experience', index, 'location', e.target.value)}
                />
                <Input
                  placeholder="Date"
                  value={exp.date}
                  onChange={(e) => updateNestedField('experience', index, 'date', e.target.value)}
                />
                {exp.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center space-x-2">
                    <Input
                      placeholder="Detail"
                      value={detail}
                      onChange={(e) => updateDetail('experience', index, detailIndex, e.target.value)}
                    />
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline" size="icon" onClick={() => generateAIDetail('experience', index, detailIndex)}>
                            <Wand2 className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Generate AI content</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <Button variant="destructive" size="icon" onClick={() => removeDetail('experience', index, detailIndex)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button onClick={() => addDetail('experience', index)}>Add Detail</Button>
                <Button variant="destructive" onClick={() => removeItem('experience', index)}>Remove Experience</Button>
              </div>
            ))}
            <Button onClick={() => addItem('experience', { title: '', company: '', location: '', date: '', details: [''] })}>
              Add Experience
            </Button>
            
            <h3 className="text-xl font-semibold mt-4">Projects</h3>
            {resume.projects.map((project, index) => (
              <div key={index} className="space-y-2 p-2 border rounded">
                <Input
                  placeholder="Project Name"
                  value={project.name}
                  onChange={(e) => updateNestedField('projects', index, 'name', e.target.value)}
                />
                <Input
                  placeholder="Technologies"
                  value={project.technologies}
                  onChange={(e) => updateNestedField('projects', index, 'technologies', e.target.value)}
                />
                <Input
                  placeholder="Date"
                  value={project.date}
                  onChange={(e) => updateNestedField('projects', index, 'date', e.target.value)}
                />
                {project.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center space-x-2">
                    <Input
                      placeholder="Detail"
                      value={detail}
                      onChange={(e) => updateDetail('projects', index, detailIndex, e.target.value)}
                    />
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline" size="icon" onClick={() => generateAIDetail('projects', index, detailIndex)}>
                            <Wand2 className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Generate AI content</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <Button variant="destructive" size="icon" onClick={() => removeDetail('projects', index, detailIndex)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button onClick={() => addDetail('projects', index)}>Add Detail</Button>
                <Button variant="destructive" onClick={() => removeItem('projects', index)}>Remove Project</Button>
              </div>
            ))}
            <Button onClick={() => addItem('projects', { name: '', technologies: '', date: '', details: [''] })}>
              Add Project
            </Button>
            
            <h3 className="text-xl font-semibold mt-4">Technical Skills</h3>
            <div>
              <Label htmlFor="languages">Languages</Label>
              <Input
                id="languages"
                value={resume.skills.languages}
                onChange={(e) => updateResume('skills', { ...resume.skills, languages: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="frameworks">Frameworks</Label>
              <Input
                id="frameworks"
                value={resume.skills.frameworks}
                onChange={(e) => updateResume('skills', { ...resume.skills, frameworks: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="developerTools">Developer Tools</Label>
              <Input
                id="developerTools"
                value={resume.skills.developerTools}
                onChange={(e) => updateResume('skills', { ...resume.skills, developerTools: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="libraries">Libraries</Label>
              <Input
                id="libraries"
                value={resume.skills.libraries}
                onChange={(e) => updateResume('skills', { ...resume.skills, libraries: e.target.value })}
              />
            </div>
          </div>
        </div>
        
        <div className="w-1/2 p-4 bg-gray-100 overflow-y-auto">
          <div className="bg-white p-6 shadow-lg" style={{ fontFamily: 'Times New Roman, serif' }}>
            <h1 className="text-3xl font-bold text-center mb-2">{resume.name}</h1>
            <p className="text-center mb-4">{resume.contact}</p>
            
            <h2 className="text-xl font-bold mt-4 mb-2 border-b border-gray-400">EDUCATION</h2>
            {resume.education.map((edu, index) => (
              <div key={index} className="mb-2">
                <div className="flex justify-between">
                  <span className="font-bold">{edu.school}</span>
                  <span>{edu.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="italic">{edu.degree}</span>
                  <span>{edu.date}</span>
                </div>
              </div>
            ))}
            
            <h2 className="text-xl font-bold mt-4 mb-2 border-b border-gray-400">EXPERIENCE</h2>
            {resume.experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between">
                  <span className="font-bold">{exp.title}</span>
                  <span>{exp.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="italic">{exp.company}</span>
                  <span>{exp.location}</span>
                </div>
                <ul className="list-disc list-inside">
                  {exp.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
            
            <h2 className="text-xl font-bold mt-4 mb-2 border-b border-gray-400">PROJECTS</h2>
            {resume.projects.map((project, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between">
                  <span className="font-bold">{project.name} | {project.technologies}</span>
                  <span>{project.date}</span>
                </div>
                <ul className="list-disc list-inside">
                  {project.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
            
            <h2 className="text-xl font-bold mt-4 mb-2 border-b border-gray-400">TECHNICAL SKILLS</h2>
            <p><span className="font-bold">Languages:</span> {resume.skills.languages}</p>
            <p><span className="font-bold">Frameworks:</span> {resume.skills.frameworks}</p>
            <p><span className="font-bold">Developer Tools:</span> {resume.skills.developerTools}</p>
            <p><span className="font-bold">Libraries:</span> {resume.skills.libraries}</p>
          </div>
        </div>
      </div>
    </div>
  )
}