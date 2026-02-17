import { Link } from 'react-router-dom'
import Section from '../components/Section'
import Button from '../components/Button'
import ServiceCard from '../components/ServiceCard'
import Hero from '../components/Hero'
import AnimatedButton from '../components/AnimatedButton'
import ServicesSection from '../components/ServicesSection'
import AnalyticsDashboard from '../components/AnalyticsDashboard'
import MacbookScrollDemo from '../components/ui/macbook-scroll-demo'
import { InfiniteMovingCards } from '../components/ui/infinite-moving-cards'
import { DotGridBackground } from '../components/ui/dot-grid-background'
import LinkPreviewDemo from '../components/link-preview-demo'
import { useDarkMode } from '../hooks/useDarkMode'
import { 
  BarChart3, 
  Database, 
  Repeat, 
  TrendingUp, 
  Users,
  CheckCircle,
  HardHat,
  Truck,
  Factory,
  Zap,
  Building,
  Wrench,
  FileText,
  Filter,
  Gauge,
  Brain
} from 'lucide-react'

export default function Home() {
  const isDark = useDarkMode()
  const services = [
    {
      icon: BarChart3,
      title: 'Dashboard Development',
      description: 'Custom analytics dashboards that transform your operational data into clear, actionable insights.'
    },
    {
      icon: Database,
      title: 'Data Integration & Modeling',
      description: 'Seamlessly connect disparate data sources and build robust data models for reliable reporting.'
    },
    {
      icon: Repeat,
      title: 'Reporting Automation',
      description: 'Automate routine reporting tasks to save time and ensure consistent, timely delivery of insights.'
    },
    {
      icon: TrendingUp,
      title: 'Operational Analytics',
      description: 'Deep-dive analysis of your operations to identify inefficiencies and optimization opportunities.'
    },
    {
      icon: Users,
      title: 'Training & Support',
      description: 'Empower your team with the knowledge and tools to maintain and extend your analytics solutions.'
    }
  ]
  
  const problems = [
    { quote: 'Data scattered across multiple systems with no unified view', icon: Database },
    { quote: 'Reports take days to compile and are often outdated by delivery', icon: FileText },
    { quote: 'Difficulty identifying operational bottlenecks and inefficiencies', icon: Filter },
    { quote: 'Lack of real-time visibility into key performance metrics', icon: Gauge },
    { quote: 'Teams making decisions based on intuition rather than data', icon: Brain }
  ]
  
  const industries = [
    { icon: HardHat, name: 'Mining & Heavy Industry' },
    { icon: Wrench, name: 'Construction' },
    { icon: Truck, name: 'Logistics & Transport' },
    { icon: Factory, name: 'Manufacturing' },
    { icon: Zap, name: 'Utilities' },
    { icon: Building, name: 'Infrastructure' }
  ]
  
  const differentiators = [
    {
      icon: CheckCircle,
      title: 'Operational Experience',
      description: 'We understand the day-to-day challenges of running operations, not just the technical side of analytics.'
    },
    {
      icon: CheckCircle,
      title: 'Practical Solutions',
      description: 'Our solutions are built to be used daily, not just impressive demos that sit unused.'
    },
    {
      icon: CheckCircle,
      title: 'Clear Communication',
      description: 'We translate complex data into clear, actionable insights that your team can understand and act on.'
    },
    {
      icon: CheckCircle,
      title: 'Proven Results',
      description: 'Track record of delivering measurable improvements in operational efficiency and decision-making.'
    },
    {
      icon: CheckCircle,
      title: 'Ongoing Support',
      description: 'We don\'t just deliver and disappear. We provide training and support to ensure long-term success.'
    }
  ]
  
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Turning Data into Clear, Actionable Decisions"
        subtitle="We help mining, construction, logistics, and manufacturing companies transform their operational data into insights that drive better decisions and improved efficiency."
        primaryCTA={{ text: 'Request a Consultation', link: '/contact' }}
        secondaryCTA={{ text: 'Learn More', link: '/services' }}
      />
      
      {/* What We Do Section */}
      <ServicesSection />
      
      {/* Problems We Solve Section */}
      <Section background="slate" border>
        <h2 className="text-2xl font-medium tracking-tight md:text-4xl lg:text-5xl text-neutral-900 dark:text-neutral-100 mb-4 text-center">
          Common Challenges We Help Solve
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 text-center">
          Many organizations struggle with these operational data challenges. We help transform them into opportunities.
        </p>
        <div className="w-full mb-10">
          <div className="flex flex-col items-center justify-center overflow-hidden rounded-lg py-8 antialiased md:py-12">
            <InfiniteMovingCards
              items={problems.map((item) => ({
                quote: item.quote,
                icon: item.icon,
              }))}
              direction="right"
              speed="slow"
              variant="light"
            />
          </div>
        </div>
        <div className="w-full">
          <section className="relative z-20 mx-auto mt-12 mb-3 grid w-full max-w-7xl grid-cols-1 justify-start bg-gradient-to-br from-slate-800 to-gray-900 sm:rounded-lg md:mt-12 md:mb-3 md:grid-cols-[1fr_auto] dark:from-neutral-900">
            <div className="absolute -top-px right-10 z-30 h-px w-1/2 bg-gradient-to-r from-transparent via-purple-500 to-transparent md:right-60" />
            <div className="absolute -top-px right-10 z-30 h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent md:right-40" />
            <div className="absolute -top-px right-10 z-30 h-px w-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent md:right-80" />
            <div 
              className="absolute inset-0 z-0 h-full w-full opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]" 
              style={{ backgroundImage: 'url("/noise.webp")', backgroundSize: '30%' }} 
            />
            <div className="relative overflow-hidden px-6 sm:rounded-2xl md:px-8">
              <div 
                className="pointer-events-none absolute inset-y-0 right-0 overflow-hidden rounded-2xl select-none" 
                style={{ mask: 'radial-gradient(33.875rem 33.875rem at calc(100% - 8.9375rem) 0px, white 3%, transparent 70%)' }} 
              />
              <div className="relative min-w-0 px-0 py-10 sm:px-10 sm:pt-20 sm:pb-10 lg:px-10 md:max-w-[36rem] lg:max-w-[42rem]">
                <h2 className="text-left text-2xl font-medium tracking-tight text-balance text-white md:text-4xl lg:text-5xl">
                  The result: how we help
                </h2>
                <p className="mt-8 max-w-[42rem] text-left text-base/6 text-neutral-200">
                  We bring your data into one place, surface real-time metrics, and turn operational bottlenecks into clear improvement opportunities. You get dashboards and reports that stay current, so your team can make faster, data-driven decisions and see measurable gains.
                </p>
                <Link to="/contact" className="mt-8 inline-block">
                  <AnimatedButton variant="onDark">Book a call</AnimatedButton>
                </Link>
              </div>
            </div>
            <div className="relative flex h-full max-h-[200px] w-fit gap-4 overflow-hidden px-4 md:max-h-[400px] justify-end ml-auto">
              <img 
                alt="cta-2" 
                width={300} 
                height={500} 
                className="mt-10 h-full rounded-lg object-cover object-top" 
                src="https://assets.aceternity.com/pro/cta-2.jpg" 
              />
            </div>
            <div className="absolute right-10 -bottom-px z-30 h-px w-1/2 bg-gradient-to-r from-transparent via-purple-500 to-transparent md:right-60" />
            <div className="absolute right-10 -bottom-px z-30 h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent md:right-40" />
            <div className="absolute right-10 -bottom-px z-30 h-px w-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent md:right-80" />
          </section>
        </div>
        <div className="mb-10">
          <AnalyticsDashboard />
        </div>
      </Section>
      
      {/* Industries We Serve Section - dot grid background like Aceternity dot-distortion */}
      <section className="relative overflow-hidden bg-white py-16 md:py-24 border-t border-slate-200 dark:bg-neutral-900 dark:border-neutral-800">
        <DotGridBackground className="bg-white dark:bg-black" dark={isDark} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-medium tracking-tight md:text-4xl lg:text-5xl text-neutral-900 dark:text-neutral-100 mb-4">
              Industries We Work With
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Our experience spans industries where operational efficiency and data-driven decision-making are critical to success.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 rounded-lg bg-slate-100 dark:bg-neutral-800 flex items-center justify-center text-slate-700 dark:text-slate-300">
                  <industry.icon className="w-8 h-8" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <Section background="slate" border padding="none" className="pt-24 pb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-medium tracking-tight md:text-4xl lg:text-5xl text-neutral-900 dark:text-neutral-100 mb-4 text-center">
            Why Work With Us
          </h2>
          <p className="text-lg text-slate-600 mb-12 text-center">
            We combine operational experience with technical expertise to deliver solutions that work in the real world.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentiators.map((item, index) => (
              <div key={index} className="bg-white rounded-lg border border-slate-200 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Business Intelligence, Power BI & Excel – link preview section */}
      <Section background="slate" border padding="none">
        <LinkPreviewDemo />
      </Section>

      {/* Macbook scroll demo - below Why Work With Us */}
      <MacbookScrollDemo />
      
      {/* Final CTA Section - dashed grid layout */}
      <Section background="none" padding="none" className="h-fit bg-slate-100" innerClassName="bg-slate-100">
        <div className="w-full">
          <section className="w-full grid grid-cols-1 md:grid-cols-3 justify-start relative z-20 max-w-7xl mx-auto bg-slate-100 overflow-hidden">
            <div className="md:col-span-2 p-8 md:p-14">
              <h2 className="text-left text-2xl font-medium tracking-tight md:text-4xl lg:text-5xl text-neutral-500 dark:text-neutral-200">
                Make better decisions with{' '}
                <span className="font-bold text-black dark:text-white">better data</span>
              </h2>
              <p className="text-left text-neutral-500 mt-4 max-w-lg dark:text-neutral-200 text-xl md:text-2xl tracking-tight font-normal">
                Ready to transform your operational data into{' '}
                <span className="text-sky-700">actionable insights</span> and{' '}
                <span className="text-indigo-700">data-driven decisions</span>?
              </p>
              <div className="flex items-start sm:items-center flex-col sm:flex-row sm:gap-4">
                <Link to="/contact" className="mt-8 inline-block">
                  <AnimatedButton>Book a consultation call</AnimatedButton>
                </Link>
              </div>
            </div>
            <div className="border-t md:border-t-0 md:border-l border-dashed border-neutral-200 dark:border-neutral-700 p-8 md:p-14">
              <p className="text-base text-neutral-700 dark:text-neutral-200">
                &ldquo;Datalyica turned our scattered spreadsheets into a single source of truth. We make decisions in hours, not days.&rdquo;
              </p>
              <div className="flex flex-col text-sm items-start mt-4 gap-1">
                <p className="font-bold text-neutral-800 dark:text-neutral-200">Operations Lead</p>
                <p className="text-neutral-500 dark:text-neutral-400">Mining &amp; logistics</p>
              </div>
            </div>
          </section>
        </div>
      </Section>
    </div>
  )
}
