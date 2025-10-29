import { Metadata } from 'next'
import MethodologyClient from './MethodologyClient'

export const metadata: Metadata = {
  title: 'Metodologia BRUX - Framework Strategico per Progetti Web',
  description: 'Scopri il framework BRUX: Brief, Research, Uncover, eXecution. Un approccio strutturato e partnership-based per garantire il successo dei progetti web attraverso collaborazione e risultati misurabili.',
  keywords: ['metodologia brux', 'framework sviluppo web', 'brief research uncover execution', 'metodologia agile', 'partnership web development', 'processo sviluppo siti web'],
  alternates: {
    canonical: 'https://bruxstudio.it/methodology',
  },
  openGraph: {
    title: 'Metodologia BRUX - Framework Strategico | Brux Studio',
    description: 'Framework strategico per lo sviluppo di progetti web di successo: Brief, Research, Uncover, eXecution.',
    url: 'https://bruxstudio.it/methodology',
    type: 'website',
  },
}

export default function MethodologyPage() {
  return <MethodologyClient />
}
