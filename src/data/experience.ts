import type { Experience } from '../types'

export const experienceData: Experience[] = [
  {
    id: 'github-view-booster',
    title: 'GitHub View Booster',
    shortDescription: 'A powerful and efficient tool to boost your GitHub profile view counter using multi-threading and proxy support',
    heroImage: '/github.png',
    startDate: '2024',
    endDate: 'Present',
    flag: 'GitHub Automation | Python',
    flagColor: 'def26b',
    url: 'https://github.com/bhaskarsaikia-17/Github-View-Booster',
    company: 'Personal Project',
    position: 'Developer',
  },
  {
    id: 'insta-riper',
    title: 'Insta-Riper',
    shortDescription: 'A versatile Instagram automation tool with multiple functions for account management',
    heroImage: '/github.png',
    startDate: '2024',
    endDate: 'Present',
    flag: 'Instagram Bot | Python',
    flagColor: '6bb3f2',
    url: 'https://github.com/bhaskarsaikia-17/Insta-Riper',
    company: 'Personal Project',
    position: 'Developer',
  },
  {
    id: 'payment-method-checker',
    title: 'Payment Method Checker',
    shortDescription: 'Educational payment method validation and checking tool',
    heroImage: '/github.png',
    startDate: '2024',
    endDate: 'Present',
    flag: 'Payment Validation | Python',
    flagColor: '6bf2a1',
    url: 'https://github.com/bhaskarsaikia-17/Payment-Method-checker',
    company: 'Personal Project',
    position: 'Developer',
  },
]

export const getExperience = () => {
  return experienceData.sort((a, b) => {
    const dateA = new Date(a.startDate)
    const dateB = new Date(b.startDate)
    return dateB.getTime() - dateA.getTime()
  })
}
