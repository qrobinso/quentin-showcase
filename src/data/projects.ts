export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  link?: string;
  date: string;
  category: 'work' | 'side' | 'patent';
}

export const workProjects: Project[] = [
  {
    id: 'work-1',
    title: 'GenAI Customer Service Platform',
    description: 'Led development of AI-powered customer service platform serving 50M+ users with 40% reduction in resolution time.',
    images: ['/api/placeholder/800/600'],
    link: '#',
    date: '2024',
    category: 'work'
  },
  {
    id: 'work-2',
    title: 'IoT Ecosystem Integration',
    description: 'Architected seamless integration layer connecting 100M+ IoT devices across home automation platforms.',
    images: ['/api/placeholder/800/600'],
    link: '#',
    date: '2023',
    category: 'work'
  },
];

export const sideProjects: Project[] = [
  {
    id: 'side-1',
    title: 'AI Writing Assistant',
    description: 'Open-source writing tool leveraging GPT-4 for technical documentation and creative content.',
    images: ['/api/placeholder/800/600'],
    link: '#',
    date: '2024',
    category: 'side'
  },
];

export const patents: Project[] = [
  {
    id: 'patent-1',
    title: 'Adaptive IoT Device Discovery',
    description: 'Novel approach to zero-configuration device discovery in heterogeneous IoT networks. US Patent 11,234,567',
    images: ['/api/placeholder/800/600'],
    date: '2023',
    category: 'patent'
  },
  {
    id: 'patent-2',
    title: 'Context-Aware Voice Assistant',
    description: 'System for maintaining conversation context across multi-device ecosystems. US Patent 11,123,456',
    images: ['/api/placeholder/800/600'],
    date: '2022',
    category: 'patent'
  },
];
