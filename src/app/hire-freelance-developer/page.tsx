import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Hire Freelance Full-Stack Developer in India',
  description:
    'Hire Manprit Kaur, a freelance full-stack developer in India for web apps, SaaS products, Chrome extensions, desktop apps, Ionic apps, and AI integrations.',
  alternates: {
    canonical: '/hire-freelance-developer',
  },
  keywords: [
    'hire freelance developer',
    'hire full stack developer india',
    'freelance react developer india',
    'next.js freelancer',
    'chrome extension freelancer',
    'ionic app freelancer',
  ],
  openGraph: {
    title: 'Hire Freelance Full-Stack Developer in India',
    description:
      'Available for freelance and product collaboration work across web apps, SaaS, extensions, desktop apps, and AI integrations.',
    url: 'https://manprit.dev/hire-freelance-developer',
    type: 'website',
  },
}

export default function HireFreelanceDeveloperPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Hire a Freelance Full-Stack Developer
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            I help founders and teams ship reliable products with modern stacks: React, Next.js, Node.js,
            TypeScript, Ionic, Chrome Extensions, Desktop Apps, and AI integrations.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="rounded-xl border border-slate-200 p-4">
              <h2 className="font-semibold text-slate-900 mb-2">What You Can Hire Me For</h2>
              <ul className="text-slate-600 space-y-1">
                <li>Web app and SaaS development</li>
                <li>Chrome extension development</li>
                <li>Ionic mobile app development</li>
                <li>Desktop apps with Electron</li>
                <li>PWA implementation and optimization</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h2 className="font-semibold text-slate-900 mb-2">Availability</h2>
              <ul className="text-slate-600 space-y-1">
                <li>Freelance projects</li>
                <li>Long-term product collaboration</li>
                <li>Feature ownership and delivery</li>
                <li>Timezone-flexible remote work</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact-us"
              className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Me
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center rounded-lg border border-blue-600 px-5 py-3 text-blue-700 font-semibold hover:bg-blue-50 transition-colors"
            >
              View Projects
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
