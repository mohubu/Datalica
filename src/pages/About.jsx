import Section from '../components/Section'
import { Target, Users, Lightbulb } from 'lucide-react'

export default function About() {
  return (
    <div>
      {/* Hero */}
      <Section padding="large">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            About Datalyica
          </h1>
          <p className="text-xl text-slate-600">
            We're a team of analytics professionals dedicated to helping businesses make better decisions through data.
          </p>
        </div>
      </Section>
      
      {/* Company Intro */}
      <Section border>
        <div className="max-w-4xl mx-auto space-y-6 text-lg text-slate-700 leading-relaxed">
          <p>
            At Datalyica, we understand that data is only valuable when it's transformed into clear, actionable insights. 
            Our team brings together years of experience in operational analytics, data engineering, and business intelligence 
            to help organizations across mining, construction, logistics, and manufacturing industries.
          </p>
          <p>
            We've seen firsthand how operational teams struggle with scattered data, outdated reports, and the challenge of 
            making quick decisions with incomplete information. That's why we focus on building practical, reliable solutions 
            that your team will actually use—not just impressive demos that sit unused.
          </p>
          <p>
            Our approach is straightforward: we listen to your challenges, understand your operations, and deliver analytics 
            solutions that fit seamlessly into your workflow. We believe in clear communication, practical solutions, and 
            ongoing support to ensure your success.
          </p>
        </div>
      </Section>
      
      {/* Approach Section */}
      <Section background="slate" border>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-medium tracking-tight md:text-4xl lg:text-5xl text-neutral-900 dark:text-neutral-100 mb-12 text-center">
            Our Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mx-auto mb-4">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Understand</h3>
              <p className="text-slate-600">
                We start by understanding your operations, challenges, and goals. Every organization is unique, 
                and we take the time to learn what matters most to you.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mx-auto mb-4">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Design</h3>
              <p className="text-slate-600">
                We design solutions that fit your workflow, not the other way around. Our dashboards and reports 
                are built to be practical tools your team will use daily.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Deliver & Support</h3>
              <p className="text-slate-600">
                We deliver working solutions and provide training and ongoing support. Your success is our success, 
                and we're committed to helping you achieve your goals.
              </p>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Mission Statement */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 rounded-lg border border-blue-200 p-8 md:p-12">
            <h2 className="text-2xl font-medium tracking-tight md:text-4xl lg:text-5xl text-neutral-900 dark:text-neutral-100 mb-4 text-center">
              Our Mission
            </h2>
            <p className="text-lg text-slate-700 text-center leading-relaxed">
              To empower organizations with the analytics tools and insights they need to make better decisions, 
              improve operational efficiency, and achieve their business objectives. We believe that every organization, 
              regardless of size, should have access to clear, actionable data insights.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}
