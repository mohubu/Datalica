import { Link } from 'react-router-dom'
import Section from '../components/Section'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <Section padding="large">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-slate-900 mb-4">404</h1>
        <h2 className="text-2xl font-medium tracking-tight md:text-4xl lg:text-5xl text-neutral-900 dark:text-neutral-100 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-slate-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button size="lg">Go to Homepage</Button>
        </Link>
      </div>
    </Section>
  )
}
