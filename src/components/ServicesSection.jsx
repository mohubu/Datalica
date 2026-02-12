import { Check, Clock, BarChart3, Database, Shield, Repeat, TrendingUp, Users, FileText, Zap } from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      title: 'Dashboard Development',
      description: 'Custom analytics dashboards that transform your operational data into clear, actionable insights.',
      visual: 'cards',
      roundedCorners: ''
    },
    {
      title: 'Data Integration & Modeling',
      description: 'Seamlessly connect disparate data sources and build robust data models for reliable reporting.',
      visual: 'process',
      roundedCorners: ''
    },
    {
      title: 'Reporting Automation',
      description: 'Automate routine reporting tasks to save time and ensure consistent, timely delivery of insights.',
      visual: 'automation',
      roundedCorners: ''
    },
    {
      title: 'Operational Analytics',
      description: 'Deep-dive analysis of your operations to identify inefficiencies and optimization opportunities.',
      visual: 'analytics',
      roundedCorners: ''
    },
    {
      title: 'Training & Support',
      description: 'Empower your team with the knowledge and tools to maintain and extend your analytics solutions.',
      visual: 'support',
      roundedCorners: ''
    }
  ]

  return (
    <div className="mx-auto w-full px-8 py-10 md:px-[4.5rem] md:py-20 lg:py-32">
      {/* Header */}
      <div className="flex flex-col justify-start gap-10 xl:flex-row xl:items-baseline">
        <h2 className="text-2xl font-medium tracking-tight md:text-4xl lg:text-5xl text-neutral-900 dark:text-neutral-100">
          Built for Operations Teams<br />That Need Clear Insights.
        </h2>
        <p className="font-sans max-w-sm text-base text-neutral-500 md:text-lg dark:text-neutral-400">
          Our analytics solutions work inside your existing tools, with built-in data governance, automated workflows, and full traceability. Every metric is auditable, every insight actionable.
        </p>
      </div>

      {/* Services Grid */}
      <div className="my-10 grid w-fit grid-cols-1 gap-4 md:my-20 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {/* Service 1: Dashboard Development */}
        <div className="flex w-full mx-auto w-full min-w-[280px] max-w-[460px] flex-col overflow-hidden rounded bg-transparent aspect-[4/3] h-[400px] border border-neutral-200 dark:border-neutral-700" style={{ width: '100%' }}>
          <div className="relative min-h-0 flex-1 overflow-visible perspective-distant transform-3d">
            <div className="h-full w-full perspective-distant transform-3d" style={{ transform: 'translateY(-2.5rem) scale(1.2) rotateX(30deg) rotateY(-20deg) rotateZ(15deg)' }}>
              {/* Card 1 - Front */}
              <div className="mx-auto my-auto h-fit w-full rounded border border-neutral-200 bg-white p-3 shadow-2xl dark:border-neutral-700 dark:bg-neutral-800 absolute bottom-0 left-12 z-30 max-w-[90%]">
                <div className="flex items-center gap-3">
                  <Check className="size-4 text-green-500" />
                  <p className="text-sm font-normal text-black dark:text-white">Equipment Utilization</p>
                  <div className="flex w-fit items-center gap-1 rounded-full border px-1 py-0.5 border-green-300 bg-green-300/10 text-green-500">
                    <Clock className="size-3" />
                    <p className="text-[10px] font-bold">Real-time</p>
                  </div>
                </div>
                <p className="mt-3 text-sm font-normal text-neutral-400 dark:text-neutral-400">
                  Track equipment performance across all sites with live updates.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <div className="rounded-sm bg-red-200 px-2 py-1 text-xs text-red-700 dark:bg-red-900/30 dark:text-red-300">Mining</div>
                  <div className="rounded-sm bg-orange-200 px-2 py-1 text-xs text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">Logistics</div>
                  <div className="rounded-sm bg-green-200 px-2 py-1 text-xs text-green-700 dark:bg-green-900/30 dark:text-green-300">Manufacturing</div>
                </div>
              </div>

              {/* Card 2 - Middle */}
              <div className="mx-auto my-auto h-fit w-full max-w-[85%] rounded border border-neutral-200 bg-white p-3 shadow-2xl dark:border-neutral-700 dark:bg-neutral-800 absolute bottom-8 left-8 z-20">
                <div className="flex items-center gap-3">
                  <BarChart3 className="size-4 text-red-500" />
                  <p className="text-sm font-normal text-black dark:text-white">Production Metrics</p>
                  <div className="flex w-fit items-center gap-1 rounded-full border px-1 py-0.5 border-red-300 bg-red-300/10 text-red-500">
                    <Clock className="size-3" />
                    <p className="text-[10px] font-bold">Daily</p>
                  </div>
                </div>
                <p className="mt-3 text-sm font-normal text-neutral-400 dark:text-neutral-400">
                  Monitor production KPIs and identify bottlenecks in real-time.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <div className="rounded-sm bg-red-200 px-2 py-1 text-xs text-red-700 dark:bg-red-900/30 dark:text-red-300">Analytics</div>
                  <div className="rounded-sm bg-orange-200 px-2 py-1 text-xs text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">Reports</div>
                </div>
              </div>

              {/* Card 3 - Back */}
              <div className="mx-auto my-auto h-fit w-full rounded border border-neutral-200 bg-white p-3 shadow-2xl dark:border-neutral-700 dark:bg-neutral-800 absolute bottom-20 left-4 z-10 max-w-[80%]">
                <div className="flex items-center gap-3">
                  <Database className="size-4 text-orange-500" />
                  <p className="text-sm font-normal text-black dark:text-white">Data Integration</p>
                  <div className="flex w-fit items-center gap-1 rounded-full border px-1 py-0.5 border-orange-300 bg-orange-300/10 text-orange-500">
                    <Clock className="size-3" />
                    <p className="text-[10px] font-bold">Automated</p>
                  </div>
                </div>
                <p className="mt-3 text-sm font-normal text-neutral-400 dark:text-neutral-400">
                  Connect multiple data sources into unified analytics platform.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <div className="rounded-sm bg-orange-200 px-2 py-1 text-xs text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">ERP</div>
                  <div className="rounded-sm bg-green-200 px-2 py-1 text-xs text-green-700 dark:bg-green-900/30 dark:text-green-300">SCADA</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 px-4 pt-6 pb-6 md:px-6 md:pb-12">
            <h3 className="font-display text-lg font-medium md:text-xl text-neutral-900 dark:text-neutral-100">
              {services[0].title}
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              {services[0].description}
            </p>
          </div>
        </div>

        {/* Service 2: Data Integration & Automation */}
        <div className={`flex w-full mx-auto w-full min-w-[280px] max-w-[460px] flex-col overflow-hidden rounded bg-transparent aspect-[4/3] h-[400px] border border-neutral-200 dark:border-neutral-700 ${services[1].roundedCorners}`} style={{ width: '100%' }}>
          <div className="relative min-h-0 flex-1 overflow-visible perspective-distant transform-3d">
            <div className="group/bento-skeleton mx-auto my-auto flex h-full w-full max-w-[85%] flex-col rounded border border-neutral-300 bg-neutral-100 mask-b-from-50% mask-radial-from-50% p-3 shadow-2xl dark:border-neutral-700 dark:bg-neutral-800 translate-x-10" style={{ transform: 'rotateY(20deg) rotateX(20deg) rotateZ(-20deg)' }}>
              <div className="flex items-center gap-3">
                <Check className="size-4 text-green-500" />
                <p className="text-sm font-normal text-black dark:text-white">Data Pipeline</p>
              </div>
              <div className="relative mt-4 flex-1 overflow-visible rounded border border-neutral-200 bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800">
                <div className="absolute inset-0 bg-[image:repeating-linear-gradient(315deg,_rgba(0,0,0,0.05)_0,_rgba(0,0,0,0.05)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
                <div className="absolute inset-0 h-full w-full translate-x-4 -translate-y-4 translate-z-10 rounded bg-white transition-all duration-300 group-hover/bento-skeleton:translate-x-0 group-hover/bento-skeleton:-translate-y-0 dark:bg-neutral-700">
                  {/* Process Steps */}
                  <div className="flex items-center justify-between px-4 py-2">
                    <div className="flex items-center gap-2">
                      <div className="flex size-4 items-center justify-center rounded-full bg-green-500">
                        <Check className="size-3 fill-green-500 stroke-white" />
                      </div>
                      <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Data Collection</p>
                    </div>
                    <div className="flex items-center gap-1 text-neutral-400">
                      <Clock className="size-3" />
                      <p className="text-[10px] font-bold">10s</p>
                    </div>
                  </div>
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
                  <div className="flex items-center justify-between px-4 py-2">
                    <div className="flex items-center gap-2">
                      <div className="flex size-4 items-center justify-center rounded-full bg-green-500">
                        <Check className="size-3 fill-green-500 stroke-white" />
                      </div>
                      <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Data Processing</p>
                    </div>
                    <div className="flex items-center gap-1 text-neutral-400">
                      <Clock className="size-3" />
                      <p className="text-[10px] font-bold">20s</p>
                    </div>
                  </div>
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
                  <div className="flex items-center justify-between px-4 py-2">
                    <div className="flex items-center gap-2">
                      <div className="flex size-4 items-center justify-center rounded-full bg-green-500">
                        <Check className="size-3 fill-green-500 stroke-white" />
                      </div>
                      <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Data Transformation</p>
                    </div>
                    <div className="flex items-center gap-1 text-neutral-400">
                      <Clock className="size-3" />
                      <p className="text-[10px] font-bold">30s</p>
                    </div>
                  </div>
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
                  <div className="flex items-center justify-between px-4 py-2">
                    <div className="flex items-center gap-2">
                      <div className="flex size-4 items-center justify-center rounded-full bg-green-500">
                        <Check className="size-3 fill-green-500 stroke-white" />
                      </div>
                      <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Report Generation</p>
                    </div>
                    <div className="flex items-center gap-1 text-neutral-400">
                      <Clock className="size-3" />
                      <p className="text-[10px] font-bold">40s</p>
                    </div>
                  </div>
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
                  <div className="flex items-center justify-between px-4 py-2">
                    <div className="flex items-center gap-2">
                      <div className="flex size-4 items-center justify-center rounded-full bg-orange-500">
                        <div className="size-3 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      </div>
                      <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Delivery</p>
                    </div>
                    <div className="flex items-center gap-1 text-neutral-400">
                      <Clock className="size-3" />
                      <p className="text-[10px] font-bold">50s</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-10 flex flex-col gap-1 px-4 pt-6 pb-6 md:px-6 md:pb-12">
            <h3 className="font-display text-lg font-medium md:text-xl text-neutral-900 dark:text-neutral-100">
              {services[1].title}
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              {services[1].description}
            </p>
          </div>
        </div>

        {/* Service 3: Reporting Automation */}
        <div className={`flex w-full mx-auto w-full min-w-[280px] max-w-[460px] flex-col overflow-hidden rounded bg-transparent aspect-[4/3] h-[400px] border border-neutral-200 dark:border-neutral-700 ${services[2].roundedCorners}`} style={{ width: '100%' }}>
          <div className="relative min-h-0 flex-1 overflow-visible perspective-distant transform-3d">
            <div className="relative flex h-full w-full items-center justify-center pt-4 pb-4">
              <div className="group/automation mx-auto my-auto flex h-full w-full max-w-[85%] flex-col rounded border border-neutral-300 bg-neutral-100 p-3 shadow-2xl dark:border-neutral-700 dark:bg-neutral-800" style={{ transform: 'rotateY(-15deg) rotateX(10deg)' }}>
                <div className="flex items-center gap-3 mb-4">
                  <Repeat className="size-5 text-red-500" />
                  <p className="text-sm font-normal text-black dark:text-white">Automated Reports</p>
                </div>
                <div className="relative flex-1 overflow-visible rounded border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-800 p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileText className="size-4 text-red-500" />
                        <p className="text-xs font-medium text-neutral-600 dark:text-neutral-400">Daily Production Report</p>
                      </div>
                      <div className="flex items-center gap-1 text-neutral-400">
                        <Clock className="size-3" />
                        <p className="text-[10px] font-bold">Auto</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileText className="size-4 text-green-500" />
                        <p className="text-xs font-medium text-neutral-600 dark:text-neutral-400">Weekly Summary</p>
                      </div>
                      <div className="flex items-center gap-1 text-neutral-400">
                        <Clock className="size-3" />
                        <p className="text-[10px] font-bold">Auto</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileText className="size-4 text-orange-500" />
                        <p className="text-xs font-medium text-neutral-600 dark:text-neutral-400">Monthly Analytics</p>
                      </div>
                      <div className="flex items-center gap-1 text-neutral-400">
                        <Clock className="size-3" />
                        <p className="text-[10px] font-bold">Auto</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 px-4 pt-6 pb-6 md:px-6 md:pb-12">
            <h3 className="font-display text-lg font-medium md:text-xl text-neutral-900 dark:text-neutral-100">
              {services[2].title}
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              {services[2].description}
            </p>
          </div>
        </div>

        {/* Service 4: Operational Analytics */}
        <div className={`flex w-full mx-auto w-full min-w-[280px] max-w-[460px] flex-col overflow-hidden rounded bg-transparent aspect-[4/3] h-[400px] border border-neutral-200 dark:border-neutral-700 ${services[3].roundedCorners}`} style={{ width: '100%' }}>
          <div className="relative min-h-0 flex-1 overflow-visible perspective-distant transform-3d">
            <div className="relative flex h-full w-full items-center justify-center pt-4 pb-4">
              <div className="group/analytics mx-auto my-auto flex h-full w-full max-w-[85%] flex-col rounded border border-neutral-300 bg-neutral-100 p-3 shadow-2xl dark:border-neutral-700 dark:bg-neutral-800" style={{ transform: 'rotateY(15deg) rotateX(-10deg)' }}>
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="size-5 text-red-500" />
                  <p className="text-sm font-normal text-black dark:text-white">Performance Analysis</p>
                </div>
                <div className="relative flex-1 overflow-visible rounded border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-800 p-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-neutral-500 dark:text-neutral-400">Efficiency</span>
                      <span className="text-xs font-bold text-green-600">+15%</span>
                    </div>
                    <div className="h-2 bg-neutral-200 rounded-full overflow-hidden dark:bg-neutral-700">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs text-neutral-500 dark:text-neutral-400">Uptime</span>
                      <span className="text-xs font-bold text-orange-600">98.5%</span>
                    </div>
                    <div className="h-2 bg-neutral-200 rounded-full overflow-hidden dark:bg-neutral-700">
                      <div className="h-full bg-orange-500 rounded-full" style={{ width: '98.5%' }}></div>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs text-neutral-500 dark:text-neutral-400">Cost Reduction</span>
                      <span className="text-xs font-bold text-red-600">-22%</span>
                    </div>
                    <div className="h-2 bg-neutral-200 rounded-full overflow-hidden dark:bg-neutral-700">
                      <div className="h-full bg-red-500 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 px-4 pt-6 pb-6 md:px-6 md:pb-12">
            <h3 className="font-display text-lg font-medium md:text-xl text-neutral-900 dark:text-neutral-100">
              {services[3].title}
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              {services[3].description}
            </p>
          </div>
        </div>

        {/* Service 5: Training & Support */}
        <div className={`flex w-full mx-auto w-full min-w-[280px] max-w-[460px] flex-col overflow-hidden rounded bg-transparent aspect-[4/3] h-[400px] border border-neutral-200 dark:border-neutral-700 ${services[4].roundedCorners}`} style={{ width: '100%' }}>
          <div className="relative min-h-0 flex-1 overflow-visible perspective-distant transform-3d">
            <div className="relative flex h-full w-full items-center justify-center pt-4 pb-4">
              <div className="group/training mx-auto my-auto flex h-full w-full max-w-[90%] flex-col rounded border border-neutral-300 bg-white p-4 shadow-2xl dark:border-neutral-700 dark:bg-neutral-800" style={{ transform: 'rotateY(-10deg) rotateX(5deg)' }}>
                {/* Training Image/Illustration */}
                <div className="relative flex-1 rounded-xl overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-green-50 dark:from-red-900/20 dark:via-orange-900/20 dark:to-green-900/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Training room illustration */}
                    <div className="w-full h-full p-4 flex flex-col items-center justify-center gap-3">
                      {/* Instructor/Teacher */}
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-red-500/50 flex-shrink-0 bg-neutral-200 dark:bg-neutral-700">
                          <img
                            src="https://i.pravatar.cc/96?img=33"
                            alt="Instructor"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 h-2 bg-red-200 rounded dark:bg-red-800"></div>
                      </div>
                      {/* Students/Attendees */}
                      <div className="grid grid-cols-3 gap-2 w-full">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                          <div key={i} className="flex items-center gap-1.5">
                            <div className="w-6 h-6 rounded-full bg-orange-400 dark:bg-orange-600"></div>
                            <div className="flex-1 h-1.5 bg-orange-200 rounded dark:bg-orange-800"></div>
                          </div>
                        ))}
                      </div>
                      {/* Screen/Board */}
                      <div className="w-full h-8 bg-gradient-to-r from-red-400 via-orange-400 to-green-500 rounded dark:from-red-700 dark:via-orange-700 dark:to-green-700 mt-2 flex items-center justify-center">
                        <div className="flex gap-1">
                          <BarChart3 className="size-4 text-white" />
                          <FileText className="size-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Training Info */}
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="size-4 text-green-500" />
                    <p className="text-xs font-medium text-neutral-600 dark:text-neutral-400">Team Training</p>
                  </div>
                  <div className="flex items-center gap-1 text-neutral-400">
                    <Clock className="size-3" />
                    <p className="text-[10px] font-bold">Ongoing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 px-4 pt-6 pb-6 md:px-6 md:pb-12">
            <h3 className="font-display text-lg font-medium md:text-xl text-neutral-900 dark:text-neutral-100">
              {services[4].title}
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              {services[4].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
