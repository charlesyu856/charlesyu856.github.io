import type { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'MSADS RAG Chatbot',
    href: 'https://github.com/charlesyu856/msads-rag-chatbot',
    image: '/images/msads-chatbot.jpg',
    description: 'Implemented a RAG-based conversational AI system that can efficiently retrieve and generate accurate responses to user inquiries about the MS in Applied Data Science program at the University of Chicago',
    tags: ['RAG', 'AI', 'ML', 'NLP'],
  },
  {
    title: 'OCR Traceability Project',
    href: '/dataprophet-ocr.pdf',
    image: '/images/ocr.png',
    description:
      'Developed an unsupervised region detection model using Python and image processing, increasing model efficiency by 40%. Built OCR models to read product unit details and link quality assessment results with actual products via an HMI pipeline.',
    tags: ['Python', 'OCR', 'Computer Vision', 'ML'],
  },
  {
    title: 'Student Mental Health Analysis',
    href: '/student-mental-health-analysis.pdf',
    image: '/images/student-mental-health.jpg',
    description:
      "End-to-end ML project analyzing how online learning affected students' mental health and academic performance. Trained Random Forest, KNN, and Logistic Regression models — Random Forest obtained the highest accuracy.",
    tags: ['Python', 'scikit-learn', 'EDA'],
  },
  {
    title: 'Sign Language Recognition & Translation',
    href: 'https://github.com/charlesyu856/My-Personal-Data-Science-Projects/blob/main/sign-language-recognition-and-translation/sign_language_recognition_and_translation.pdf',
    image: '/images/sign-lang.jpg',
    description:
      'Implemented a 50+ layer CNN architecture trained on 100,000 labeled sign language gestures. Trained on the ChicagoFSWild ASL dataset over 10 epochs, improving accuracy from 15% to 40%.',
    tags: ['PyTorch', 'TensorFlow', 'CNN'],
  },
  {
    title: 'NBA Analysis Project',
    href: 'https://github.com/charlesyu856/nba_analysis_proj',
    image: '/images/basketball.jpeg',
    description:
      'Used Python and ML algorithms to predict the 2020-2021 NBA championship team. Datasets sourced from Kaggle and scraped from the official NBA website using BeautifulSoup.',
    tags: ['Python', 'BeautifulSoup', 'ML'],
  },
  {
    title: 'World Happiness Report',
    href: 'https://github.com/charlesyu856/World-Happiness-Report/tree/master',
    image: '/images/happiness.jpeg',
    description:
      "Explored global happiness metrics in a Jupyter notebook. Applied statistical techniques to compare happiness before and during COVID-19, and trained ML models to predict healthy life expectancy.",
    tags: ['Jupyter', 'Statistics', 'ML'],
  },
  {
    title: 'Trading Algorithms',
    href: 'https://github.com/charlesyu856/Trading-Algorithm',
    image: '/images/stock.jpeg',
    description:
      'Built a stock simulation predicting daily high/low prices for Apple (2020-2021). Designed investment strategies using simple and exponential moving averages.',
    tags: ['Python', 'Finance', 'Time Series'],
  },
];
