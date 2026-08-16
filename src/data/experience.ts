import type { Experience } from '../types';

export const experience: Experience[] = [
    {
    company: 'Xome',
    role: 'Data Engineer and Scientist Intern',
    start: '2026-05',
    end: 'Present',
    summary:
      'Created a data-driven Economic Insights Engine that provides actionable insights for real estate professionals.',
    bullets: [
      'Architected an end-to-end Medallion Lakehouse (Bronze/Silver/Gold) on Microsoft Fabric using PySpark and Delta Lake.',
      'Automated distributed ETL/ELT pipelines across 5 refresh cadences and developed a 25-check SQL validation suite for Gold-layer tables.',
      'Built interactive dashboard visualizations in PowerBI and presented technical architecture and business impact to senior stakeholders.',
    ],
  },
  {
    company: 'Goldman Sachs',
    role: 'Full-Stack Software Engineer',
    start: '2022-06',
    end: '2025-07',
    summary:
      'Developed and maintained financial applications, focusing on robust, secure software solutions.',
    bullets: [
      'Developed front-end interfaces using modern JavaScript frameworks',
      'Built scalable back-end services',
      'Optimized database queries and data structures',
      'Implemented security best practices',
      'Collaborated with product managers and designers',
    ],
  },
  {
    company: 'Data Prophet',
    role: 'Machine Learning Engineer Intern',
    start: '2021-07',
    end: '2021-08',
    summary: 'Focused on data analysis and machine learning applications.',
    bullets: [
      'Developed an OCR traceability project that increased model efficiency by 40%',
      'Created ML models to improve manufacturing plant KPIs',
      'Implemented data pipelines for efficient data processing',
    ],
  },
  {
    company: 'Philips Capital Management',
    role: 'Financial Data Analyst Intern',
    start: '2021-06',
    end: '2021-07',
    summary: 'Predicted market trends using advanced data analysis techniques.',
    bullets: [
      'Researched 100+ stocks across 5+ industries; pitched ideas and gained supervisor approval',
      'Formulated recommendations using industry outlook, DCF, and comparative analysis',
      "Contributed ideas that were integrated into the company's portfolio",
    ],
  },
];
