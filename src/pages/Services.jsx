import Section from '../components/Section'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { 
  BarChart3, 
  Database, 
  Repeat, 
  TrendingUp, 
  Users 
} from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: BarChart3,
      title: 'Dashboard Development',
      description: 'Custom analytics dashboards that transform your operational data into clear, actionable insights.',
      details: [
        'Interactive visualizations tailored to your operational needs',
        'Real-time data updates from your existing systems',
        'Mobile-responsive design for access anywhere',
        'Role-based views for different stakeholders',
        'Intuitive navigation and user-friendly interface'
      ]
    },
    {
      icon: Database,
      title: 'Data Integration & Modeling',
      description: 'Seamlessly connect disparate data sources and build robust data models for reliable reporting.',
      details: [
        'Integration with ERP, MES, SCADA, and other operational systems',
        'Data warehouse design and implementation',
        'ETL/ELT pipeline development',
        'Data quality assurance and validation',
        'Scalable architecture for growing data volumes'
      ]
    },
    {
      icon: Repeat,
      title: 'Reporting Automation',
      description: 'Automate routine reporting tasks to save time and ensure consistent, timely delivery of insights.',
      details: [
        'Automated daily, weekly, and monthly reports',
        'Email and portal-based report distribution',
        'Custom report templates matching your needs',
        'Scheduled data refreshes and updates',
        'Exception-based alerting for critical metrics'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Operational Analytics',
      description: 'Deep-dive analysis of your operations to identify inefficiencies and optimization opportunities.',
      details: [
        'Root cause analysis for operational issues',
        'Performance benchmarking and KPI tracking',
        'Predictive analytics for maintenance and planning',
        'Cost analysis and optimization opportunities',
        'Trend analysis and forecasting'
      ]
    },
    {
      icon: Users,
      title: 'Training & Support',
      description: 'Empower your team with the knowledge and tools to maintain and extend your analytics solutions.',
      details: [
        'Hands-on training for your analytics team',
        'Documentation and knowledge transfer',
        'Ongoing support and maintenance',
        'Best practices and methodology guidance',
        'Extension and enhancement services'
      ]
    }
  ]
  
  return (
    <div>
      {/* Hero */}
      <Section padding="large">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-slate-600">
            Comprehensive analytics solutions designed to transform your operational data into actionable insights.
          </p>
        </div>
      </Section>
      
      {/* Services Overview */}
      <Section border>
        <div className="max-w-4xl mx-auto space-y-6 text-lg text-slate-700 leading-relaxed">
          <p>
            We offer a full range of business analytics services tailored to operational organizations. Whether you need 
            a single dashboard, a complete data integration project, or ongoing analytics support, we have the expertise 
            to deliver solutions that work.
          </p>
          <p>
            Our services are designed to work together as a comprehensive analytics program, or individually to address 
            specific needs. We'll work with you to determine the right approach for your organization.
          </p>
        </div>
      </Section>
      
      {/* Individual Services */}
      {services.map((service, index) => (
        <Section 
          key={index} 
          border 
          background={index % 2 === 0 ? 'white' : 'slate'}
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                <service.icon className="w-8 h-8" />
              </div>
              <div className="flex-grow">
                <h2 className="text-2xl font-medium tracking-tight md:text-4xl lg:text-5xl text-neutral-900 dark:text-neutral-100 mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-slate-600 mb-6">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <p className="text-slate-700">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>
      ))}
      
      {/* CTA Section */}
      <Section background="none" className="h-fit bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-medium tracking-tight md:text-4xl lg:text-5xl text-neutral-900 dark:text-neutral-100 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-8">
            Let's discuss how our services can help transform your operational data into actionable insights.
          </p>
          <Link to="/contact">
            <Button size="lg" icon>
              Contact Us
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  )
}
