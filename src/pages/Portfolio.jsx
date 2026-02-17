import Section from '../components/Section'
import Card from '../components/Card'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { TrendingUp, Clock, DollarSign } from 'lucide-react'

export default function Portfolio() {
  const caseStudies = [
    {
      industry: 'Mining',
      title: 'Equipment Utilization Dashboard',
      problem: 'A mining operation struggled with low visibility into equipment utilization across multiple sites, leading to inefficient resource allocation and missed production targets.',
      solution: 'We developed a comprehensive dashboard integrating data from multiple equipment monitoring systems, providing real-time visibility into utilization rates, maintenance schedules, and performance metrics across all sites.',
      results: [
        '15% increase in overall equipment utilization',
        'Reduced equipment downtime by 20% through predictive maintenance insights',
        '30% reduction in time spent compiling utilization reports',
        'Improved decision-making speed with real-time data access'
      ]
    },
    {
      industry: 'Logistics',
      title: 'Fleet Performance Analytics',
      problem: 'A logistics company needed better visibility into fleet performance, fuel efficiency, and route optimization to reduce costs and improve delivery times.',
      solution: 'We built an integrated analytics platform connecting telematics, fuel tracking, and delivery management systems, providing comprehensive fleet performance insights and automated reporting.',
      results: [
        '12% reduction in fuel costs through route optimization insights',
        '18% improvement in on-time delivery rates',
        'Automated daily performance reports saving 10+ hours per week',
        'Data-driven driver performance coaching program'
      ]
    },
    {
      industry: 'Manufacturing',
      title: 'Production Line Efficiency Analysis',
      problem: 'A manufacturing facility had difficulty identifying bottlenecks and inefficiencies in their production lines, resulting in missed production targets and increased costs.',
      solution: 'We implemented real-time production monitoring dashboards with automated alerts, root cause analysis tools, and historical trend analysis to identify and address production inefficiencies.',
      results: [
        '22% increase in overall equipment effectiveness (OEE)',
        'Reduced production downtime by 25%',
        'Faster identification and resolution of production issues',
        'Improved production planning accuracy'
      ]
    },
    {
      industry: 'Construction',
      title: 'Project Cost Tracking & Forecasting',
      problem: 'A construction company struggled with project cost visibility and forecasting, leading to budget overruns and difficulty identifying cost-saving opportunities.',
      solution: 'We developed a project analytics system integrating financial, scheduling, and resource data to provide real-time cost tracking, forecasting, and variance analysis across all active projects.',
      results: [
        'Improved project margin accuracy by 18%',
        'Reduced budget overruns by 30%',
        'Faster identification of cost variances',
        'Better resource allocation decisions'
      ]
    },
    {
      industry: 'Utilities',
      title: 'Maintenance Planning & Optimization',
      problem: 'A utility company needed better insights into maintenance schedules, asset performance, and resource allocation to reduce unplanned downtime and maintenance costs.',
      solution: 'We created a maintenance analytics platform combining asset performance data, maintenance history, and resource planning to optimize maintenance schedules and improve asset reliability.',
      results: [
        '25% reduction in unplanned maintenance events',
        '15% reduction in overall maintenance costs',
        'Improved asset reliability and uptime',
        'Better resource allocation for maintenance teams'
      ]
    }
  ]
  
  return (
    <div>
      {/* Hero */}
      <Section padding="large">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Our Work
          </h1>
          <p className="text-xl text-slate-600">
            Real results from real projects. See how we've helped organizations transform their operational data into actionable insights.
          </p>
        </div>
      </Section>
      
      {/* Case Studies */}
      <Section border>
        <div className="max-w-6xl mx-auto space-y-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="hover:border-slate-300">
              <div className="space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-600 mb-3">
                    {study.industry}
                  </span>
                  <h2 className="text-2xl font-medium tracking-tight md:text-4xl lg:text-5xl text-neutral-900 dark:text-neutral-100 mb-4">
                    {study.title}
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
                      The Challenge
                    </h3>
                    <p className="text-slate-700">{study.problem}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
                      Our Solution
                    </h3>
                    <p className="text-slate-700">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
                      Results
                    </h3>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start gap-2">
                          <TrendingUp className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section background="none" className="h-fit bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-medium tracking-tight md:text-4xl lg:text-5xl text-neutral-900 dark:text-neutral-100 mb-4">
            Ready to See Similar Results?
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-8">
            Let's discuss how we can help your organization achieve similar improvements through better analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" icon>
                Contact Us
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="secondary">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  )
}
