export interface Project {
  title: string
  kind: string
  summary: string
  description: string
  link: string
  cover: string
  tags: string[]
}

export const projects: Project[] = [
  {
    title: 'RanChat Web',
    kind: 'Realtime product',
    summary: 'Random video chat web application',
    description:
      'A realtime peer-matching experience built around WebSocket and WebRTC flows, with chat-driven multiplayer interactions and a TypeScript-first stack.',
    link: 'https://ranchat-web.vercel.app',
    cover: '/assets/projects/ranchat.png',
    tags: ['TypeScript', 'Next.js', 'NestJS', 'Socket.IO', 'PeerJS'],
  },
  {
    title: 'TravelGen Web',
    kind: 'Full-stack product',
    summary: 'Discover the world with us by your side',
    description:
      'A travel planning interface for custom packages, personalized preferences, authentication, and payment flows.',
    link: 'https://travelgen-client.vercel.app',
    cover: '/assets/projects/travelgen-web.png',
    tags: ['TypeScript', 'Next.js', 'NextAuth', 'Zustand', 'Stripe'],
  },
  {
    title: 'TravelGen API',
    kind: 'API documentation',
    summary: 'Documented service layer for TravelGen',
    description:
      'Fastify API documentation covering database-backed travel features, mail flows, and service contracts.',
    link: 'https://travelgen-server-fastify.vercel.app/api/static/index.html',
    cover: '/assets/projects/travelgen-api.png',
    tags: ['Fastify', 'TypeScript', 'Prisma', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'IQ Test',
    kind: 'Frontend build',
    summary: "The world's premier Intelligence Quotient testing service",
    description:
      'A close replication of an aptitude-testing product, rebuilt with attention to interaction, pacing, and layout details.',
    link: 'https://iqtest-application.vercel.app/',
    cover: '/assets/projects/iq-test.png',
    tags: ['TypeScript', 'Next.js', 'React', 'Recoil', 'Tailwind'],
  },
  {
    title: 'Bookaholic Web',
    kind: 'Commerce UI',
    summary: 'Curated book browsing experience',
    description:
      'A book discovery client with category exploration, product detail flows, and a smooth reading-commerce interface.',
    link: 'https://bookaholic-client-react.vercel.app/',
    cover: '/assets/projects/bookaholic-web.png',
    tags: ['TypeScript', 'React', 'Redux'],
  },
  {
    title: 'Bookaholic API',
    kind: 'API documentation',
    summary: 'Backend contract for Bookaholic',
    description:
      'Express API documentation for a PostgreSQL-backed book commerce application.',
    link: 'https://bookaholic-api-expressjs.vercel.app/docs/',
    cover: '/assets/projects/bookaholic-api.png',
    tags: ['Express', 'Sequelize', 'PostgreSQL'],
  },
  {
    title: 'Ikiwae',
    kind: 'Commerce UI',
    summary: 'Furniture shopcommerce interface',
    description:
      'A polished furniture storefront for browsing collections, reviewing product details, and simulating checkout.',
    link: 'https://ikiwae-react.firebaseapp.com/',
    cover: '/assets/projects/ikiwae.png',
    tags: ['TypeScript', 'React'],
  },
  {
    title: 'Search Party Engine',
    kind: 'Search tool',
    summary: 'A friendly search party for the internet',
    description:
      'A compact Svelte search interface integrated with the Google Search API.',
    link: 'https://search-engine-svelte.vercel.app/',
    cover: '/assets/projects/search-party.png',
    tags: ['TypeScript', 'Svelte', 'SCSS'],
  },
  {
    title: 'Personal Portfolio',
    kind: 'Personal site',
    summary: 'The portfolio you are reading now',
    description:
      'A dark, animated, bilingual portfolio built to feel personal without losing clarity.',
    link: 'https://diazlinggaputra.vercel.app',
    cover: '/assets/projects/portfolio.png',
    tags: ['TypeScript', 'Next.js', 'Framer Motion', 'Chakra UI', 'i18n'],
  },
  {
    title: 'Nitya',
    kind: 'Landing page',
    summary: 'Seaweed cattle feed landing page',
    description:
      'A static environmental landing page for a seaweed-based cattle feed concept.',
    link: 'https://nitya-landing-page.netlify.app',
    cover: '/assets/projects/nitya.png',
    tags: ['HTML', 'CSS'],
  },
]
