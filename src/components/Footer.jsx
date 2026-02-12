import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-neutral-100 bg-white px-8 py-20 dark:border-white/[0.1] dark:bg-neutral-950">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between text-sm text-neutral-500 sm:flex-row md:px-8">
        <div>
          <div className="mr-0 mb-4 md:mr-4 md:flex">
            <Link
              to="/"
              className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black dark:text-white"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-800 bg-black dark:border-neutral-200 dark:bg-white">
                <span className="text-sm font-bold text-white dark:text-black">D</span>
              </div>
              <span className="font-medium text-black dark:text-white">Datalyica</span>
            </Link>
          </div>
          <div className="mt-2 ml-2 text-neutral-600 dark:text-neutral-400">
            © copyright Datalyica {new Date().getFullYear()}. All rights reserved.
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 items-start gap-10 sm:mt-0 md:mt-0 lg:grid-cols-4">
          <div className="flex w-full flex-col justify-center space-y-4">
            <p className="font-bold text-neutral-600 transition-colors hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100">
              Pages
            </p>
            <ul className="list-none space-y-4 text-neutral-600 transition-colors hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100">
              <li className="list-none">
                <Link to="/" className="transition-colors hover:text-neutral-800 dark:hover:text-neutral-100">
                  Home
                </Link>
              </li>
              <li className="list-none">
                <Link to="/about" className="transition-colors hover:text-neutral-800 dark:hover:text-neutral-100">
                  About
                </Link>
              </li>
              <li className="list-none">
                <Link to="/services" className="transition-colors hover:text-neutral-800 dark:hover:text-neutral-100">
                  Services
                </Link>
              </li>
              <li className="list-none">
                <Link to="/portfolio" className="transition-colors hover:text-neutral-800 dark:hover:text-neutral-100">
                  Our Work
                </Link>
              </li>
              <li className="list-none">
                <Link to="/contact" className="transition-colors hover:text-neutral-800 dark:hover:text-neutral-100">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <p className="font-bold text-neutral-600 transition-colors hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100">
              Contact
            </p>
            <ul className="list-none space-y-4 text-neutral-600 transition-colors dark:text-neutral-300">
              <li className="list-none">
                <a
                  href="mailto:info@datalyica.com"
                  className="transition-colors hover:text-neutral-800 dark:hover:text-neutral-100"
                >
                  info@datalyica.com
                </a>
              </li>
              <li className="list-none">
                <a
                  href="tel:+1234567890"
                  className="transition-colors hover:text-neutral-800 dark:hover:text-neutral-100"
                >
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <p className="font-bold text-neutral-600 transition-colors hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100">
              Legal
            </p>
            <ul className="list-none space-y-4 text-neutral-600 transition-colors dark:text-neutral-300">
              <li className="list-none">
                <a href="#" className="transition-colors hover:text-neutral-800 dark:hover:text-neutral-100">
                  Privacy Policy
                </a>
              </li>
              <li className="list-none">
                <a href="#" className="transition-colors hover:text-neutral-800 dark:hover:text-neutral-100">
                  Terms of Service
                </a>
              </li>
              <li className="list-none">
                <a href="#" className="transition-colors hover:text-neutral-800 dark:hover:text-neutral-100">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <p className="font-bold text-neutral-600 transition-colors hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100">
              Socials
            </p>
            <ul className="list-none space-y-4 text-neutral-600 transition-colors dark:text-neutral-300">
              <li className="list-none">
                <a href="#" className="transition-colors hover:text-neutral-800 dark:hover:text-neutral-100">
                  LinkedIn
                </a>
              </li>
              <li className="list-none">
                <a href="#" className="transition-colors hover:text-neutral-800 dark:hover:text-neutral-100">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="inset-x-0 mt-20 bg-gradient-to-b from-neutral-50 to-neutral-200 bg-clip-text text-center text-5xl font-bold text-transparent md:text-9xl lg:text-[12rem] xl:text-[13rem] dark:from-neutral-950 dark:to-neutral-800">
        Datalyica
      </p>
    </footer>
  )
}
