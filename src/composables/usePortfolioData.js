// src/composables/usePortfolioData.js

export function usePortfolioData() {
  // ── SVGs ──
  const reactSvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="2.5" fill="#61DAFB"/><ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" stroke-width="1.2" fill="none"/><ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" stroke-width="1.2" fill="none" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" stroke-width="1.2" fill="none" transform="rotate(120 12 12)"/></svg>`
  const vueSvg = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h3.5L12 15l6.5-12H22L12 21 2 3z" fill="#41B883"/><path d="M6.5 3h3.3L12 7.6 14.2 3h3.3L12 13 6.5 3z" fill="#35495E"/></svg>`
  const svelteSvg = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.17 4.39c-1.74-2.52-5.22-3.34-7.74-1.83L7.05 5.69A5.42 5.42 0 0 0 4.7 9.4a5.7 5.7 0 0 0 .57 4.13 5.46 5.46 0 0 0-.74 2.05 5.56 5.56 0 0 0 .94 4.05c1.74 2.52 5.22 3.34 7.74 1.83l5.38-3.13a5.42 5.42 0 0 0 2.35-3.71 5.7 5.7 0 0 0-.57-4.13 5.46 5.46 0 0 0 .74-2.05 5.56 5.56 0 0 0-.94-4.05z" fill="#FF3E00"/><path d="M10.85 20.4a3.74 3.74 0 0 1-4-1.19 3.47 3.47 0 0 1-.59-2.54 3.3 3.3 0 0 1 .12-.46l.09-.3.27.2a6.8 6.8 0 0 0 2.06 1l.2.06-.02.19a1.07 1.07 0 0 0 .2.74 1.26 1.26 0 0 0 1.35.4 1.17 1.17 0 0 0 .33-.15l5.38-3.13a1.1 1.1 0 0 0 .5-.74 1.17 1.17 0 0 0-.2-.89 1.26 1.26 0 0 0-1.35-.4 1.17 1.17 0 0 0-.33.15l-2.05 1.2a3.87 3.87 0 0 1-1.1.5 3.74 3.74 0 0 1-4-1.19 3.47 3.47 0 0 1-.59-2.54 3.26 3.26 0 0 1 1.49-2.22l5.38-3.13a3.87 3.87 0 0 1 1.1-.5 3.74 3.74 0 0 1 4 1.19 3.47 3.47 0 0 1 .59 2.54 3.3 3.3 0 0 1-.12.46l-.09.3-.27-.2a6.8 6.8 0 0 0-2.06-1l-.2-.06.02-.19a1.07 1.07 0 0 0-.2-.74 1.26 1.26 0 0 0-1.35-.4 1.17 1.17 0 0 0-.33.15L9.5 10.77a1.1 1.1 0 0 0-.5.74 1.17 1.17 0 0 0 .2.89 1.26 1.26 0 0 0 1.35.4 1.17 1.17 0 0 0 .33-.15l2.05-1.2a3.87 3.87 0 0 1 1.1-.5 3.74 3.74 0 0 1 4 1.19 3.47 3.47 0 0 1 .59 2.54 3.26 3.26 0 0 1-1.49 2.22l-5.38 3.13a3.87 3.87 0 0 1-1.1.5l-.8.07z" fill="#fff"/></svg>`
  const tsSvg = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="3" fill="#3178C6"/><path d="M13.5 11.5h2.5V10h-6.5v1.5H12v6h1.5v-6z" fill="white"/><path d="M16.5 15.5c0 .8.6 1.5 1.6 1.5s1.9-.5 1.9-1.6c0-1-.6-1.4-1.6-1.7-.8-.3-1-.4-1-.8 0-.3.3-.6.8-.6.6 0 .9.3.9.8h1.3c0-1.1-.7-1.7-2.1-1.7-1.2 0-2 .7-2 1.7 0 .9.5 1.4 1.6 1.7.9.3 1 .5 1 .9 0 .4-.3.7-.9.7-.7 0-1.1-.4-1.1-1H16.5z" fill="white"/></svg>`
  const nextSvg = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11" fill="black"/><path d="M14.5 7.5v9.6l-7.3-9.6H5v9h1.5V10l7.3 9h1.7V7.5H14.5z" fill="white"/></svg>`
  const tailwindSvg = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" fill="#38BDF8"/></svg>`
  const nodeSvg = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 1.85L2 7.5v8.99l10 5.65 10-5.65V7.5L12 1.85zM12 4.08l7.2 4.07L12 12.2 4.8 8.15 12 4.08zM4.5 9.86l7 3.96v7.9L4.5 17.7V9.86zm15 0v7.85l-7 3.95v-7.9l7-3.9z" fill="#539E43"/></svg>`
  const nestSvg = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14.13 1.463C13.35.696 12.3.25 11.25.25A4.25 4.25 0 0 0 7 4.5a4.3 4.3 0 0 0 .68 2.34A5.21 5.21 0 0 0 5.07 9.1a5.25 5.25 0 0 0 1.62 7.24l.09.05a5.22 5.22 0 0 0 2.72.76 5.25 5.25 0 0 0 4.5-2.55 5.25 5.25 0 0 0 4.5 2.55 5.22 5.22 0 0 0 2.72-.76l.09-.05A5.25 5.25 0 0 0 22.93 9.1a5.21 5.21 0 0 0-2.61-2.26A4.3 4.3 0 0 0 21 4.5 4.25 4.25 0 0 0 16.75.25c-1.05 0-2.1.45-2.88 1.21l-.37.38-.37-.38z" fill="#E0234E"/></svg>`
  const phpSvg = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="12" rx="11" ry="6.5" fill="#777BB3"/><path d="M7.18 9.5H5.6L5 13h1.42l.22-1.17h.9c.76 0 1.3-.5 1.43-1.3.13-.72-.27-1.03-.79-1.03zm-.3 1.1c.25 0 .38.12.32.47-.06.34-.23.46-.48.46h-.56l.2-1.03c.2.01.35.04.52.1zm5.3-1.1H10.6L10 13h1.42l.22-1.17h.9c.76 0 1.3-.5 1.43-1.3.13-.72-.27-1.03-.79-1.03zm-.3 1.1c.25 0 .38.12.32.47-.06.34-.23.46-.48.46h-.56l.2-1.03c.2.01.35.04.52.1zm4.52-.1c-.23 0-.5.1-.68.35l.06-.32H14.7l-.6 3.47h1.3l.26-1.5c.1-.59.44-.87.75-.87.2 0 .3.1.25.4l-.32 1.97h1.3l.34-2.02c.11-.7-.2-1.48-1.08-1.48z" fill="white"/></svg>`
  const socketSvg = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#010101"/><path d="M12 4.5c-4.14 0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5 7.5-3.36 7.5-7.5-3.36-7.5-7.5-7.5z" fill="white"/><path d="M9.5 8l-2.5 4h3l-2 4 6-5h-3.5z" fill="#010101"/></svg>`
  const mongoSvg = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.052-1.682-.197-2.218z" fill="#47A248"/></svg>`
  const postgresSvg = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.6 2.1c-.8-.1-1.6.1-2.3.5-.7.3-1.5.5-2.2.5-1 0-1.9-.3-2.7-.8C8 1.9 7.5 1.6 7 1.5 5.5 1.2 4 1.8 3 3c-.9 1.1-1.3 2.6-1 4 .2.8.5 1.5.9 2.1-.5 1.2-.6 2.5-.3 3.7.3 1.2 1 2.3 2 3 .6.5 1.4.8 2.2.9.8.1 1.5 0 2.2-.3l.2-.1v2.5c0 1 .4 1.9 1 2.6.3.3.7.6 1.1.7.4.2.8.3 1.2.3.4 0 .8-.1 1.2-.3.4-.2.8-.4 1.1-.8.6-.6 1-1.5 1-2.5V16.2l.2.1c.7.3 1.4.4 2.2.3.8-.1 1.6-.4 2.2-.9 1-.7 1.7-1.8 2-3 .3-1.2.2-2.5-.3-3.7.4-.6.7-1.3.9-2.1.3-1.4-.1-2.9-1-4-1-1.2-2.5-1.8-4-1.5z" fill="#336791"/></svg>`
  const dockerSvg = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 11h-2v-2h2v2zm-3 0h-2V9h2v2zm6 0h-2V9h2v2zm-3-3h-2V6h2v2zm-3 0h-2V6h2v2zm6 0h-2V6h2v2zM22.5 11a3 3 0 0 0-3-2.8c-.1 0-.2 0-.3.02A5 5 0 0 0 14.5 5h-.5v2h.5a3 3 0 0 1 2.86 2.13A3 3 0 0 1 22.5 11zm-10.5 3H1.5s-.5 4.5 5 4.5h12c3.5 0 4.5-3 4.5-4.5h-11z" fill="#2496ED"/></svg>`
  const gitSvg = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.189 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.349l2.658 2.659a1.838 1.838 0 1 1-1.1 1.034l-2.48-2.48v6.511a1.84 1.84 0 1 1-1.512-.045V9.595a1.84 1.84 0 0 1-1-2.419L7.614 4.422.454 11.58A1.55 1.55 0 0 0 .452 13.77L10.93 23.546c.603.602 1.582.602 2.184 0l10.432-10.432a1.55 1.55 0 0 0 0-2.184z" fill="#F05032"/></svg>`
  const flutterSvg = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14.314 0L2.3 12l3.7 3.7 12.07-12H14.3zm.014 11.072L7.857 17.53l6.47 6.47H18.3l-6.47-6.47 6.47-6.46h-4z" fill="#54C5F8"/><path d="M7.857 17.53l3.972 3.973-1.857 1.857H6L7.857 17.53z" fill="#01579B"/></svg>`
  const wpSvg = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM3.05 12c0-1.31.28-2.56.77-3.69l4.24 11.63A8.97 8.97 0 0 1 3.05 12zm8.95 8.95a8.94 8.94 0 0 1-2.54-.37l2.7-7.84 2.76 7.57c.02.05.04.09.06.13a8.95 8.95 0 0 1-2.98.51zm1.24-13.32c.54-.03 1.03-.09 1.03-.09.49-.06.43-.78-.06-.75 0 0-1.45.11-2.39.11-.88 0-2.36-.11-2.36-.11-.49-.03-.55.72-.06.75 0 0 .46.06.94.09l1.4 3.83-1.97 5.9-3.27-9.73c.54-.03 1.02-.09 1.02-.09.49-.06.43-.78-.06-.75 0 0-1.45.11-2.38.11-.17 0-.36 0-.56-.01A8.97 8.97 0 0 1 12 3.05c2.34 0 4.47.89 6.07 2.36-.04 0-.07-.01-.11-.01-.88 0-1.5.77-1.5 1.59 0 .74.43 1.37.88 2.11.34.6.74 1.36.74 2.47 0 .77-.29 1.66-.68 2.9l-.89 2.97-3.27-9.71zm4.87 12.32l2.74-7.92c.51-1.28.68-2.3.68-3.21 0-.33-.02-.63-.06-.91A8.96 8.96 0 0 1 20.95 12a8.97 8.97 0 0 1-2.84 7.95z" fill="#21759B"/></svg>`
  const expressSvg = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.819 6.411zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666-.002-1.051-.002-2.099 0-3.06zm1.188-.252h9.73c-.074-3.273-2.018-5.143-4.52-5.143-2.761.023-4.946 1.913-5.21 5.143z" fill="#000000"/></svg>`
  const mysqlSvg = `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#00758F" d="M2 12h8v52H2zm116 0h8v52h-8z"/><path fill="#00758F" d="M10 12h108v8H10zm0 44h108v8H10z"/></svg>`
  const cicdSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="#38BDF8" stroke-width="1.8" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>`

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  const heroPills = [
    'Full-Stack Expert',
    'Vue & React Specialist',
    'Performance Focused',
    'Clean Architecture',
  ]

  const marquee = [
    'Architecture', 'Global Scale', 'Enterprise', 'Security',
    'Microservices', 'Real-Time', 'High Performance', 'Clean Code',
  ]

  const aboutFeatures = [
    {
      title: 'Security First',
      desc: 'RBAC & secure API architectures.',
      icon: `<svg width="20" height="20" fill="none" stroke="var(--primary)" stroke-width="2" viewBox="0 0 24 24"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>`,
    },
    {
      title: 'Scalability',
      desc: 'Microservices serving millions.',
      icon: `<svg width="20" height="20" fill="none" stroke="var(--secondary)" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
    },
  ]

  const skillCategories = [
    {
      name: 'Frontend',
      letter: 'F',
      skills: [
        { name: 'React', svg: reactSvg },
        { name: 'Vue 3', svg: vueSvg },
        { name: 'Svelte', svg: svelteSvg },
        { name: 'TypeScript', svg: tsSvg },
        { name: 'Next.js', svg: nextSvg },
        { name: 'Tailwind CSS', svg: tailwindSvg },
      ],
    },
    {
      name: 'Backend',
      letter: 'B',
      skills: [
        { name: 'Node.js', svg: nodeSvg },
        { name: 'Express', svg: expressSvg },
        { name: 'NestJS', svg: nestSvg },
        { name: 'PHP', svg: phpSvg },
        { name: 'Socket.io', svg: socketSvg },
      ],
    },
    {
      name: 'Databases',
      letter: 'D',
      skills: [
        { name: 'MySQL', svg: mysqlSvg },
        { name: 'MongoDB', svg: mongoSvg },
        { name: 'PostgreSQL', svg: postgresSvg },
      ],
    },
    {
      name: 'DevOps & Cloud',
      letter: 'D',
      skills: [
        { name: 'Git', svg: gitSvg },
        { name: 'Docker', svg: dockerSvg },
        { name: 'CI/CD', svg: cicdSvg },
      ],
    },
    {
      name: 'Mobile & More',
      letter: 'M',
      skills: [
        { name: 'Flutter', svg: flutterSvg },
        { name: 'WordPress', svg: wpSvg },
      ],
    },
  ]

  const experience = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'Ministry of Labor (MTESS) & CNAS',
      period: 'March 2016 – January 2026',
      responsibilities: [
        'Architected and delivered a national web portal serving millions of citizens, winning the "Algerian Web Award" (2018).',
        'Engineered a Legislative Document Management System with RBAC that reduced document retrieval time by 40%.',
        'Refactored legacy PHP monoliths into modern Node.js/Express microservices, improving performance by 40%.',
        'Developed real-time monitoring tools using Socket.io to track 20+ services.',
        'Mentored junior developers and established standardized Git workflows and automated testing suites.',
      ],
    },
    {
      title: 'Full-Stack & Mobile Developer',
      company: 'Freelance',
      period: '2014 – Present',
      responsibilities: [
        'Designed and deployed a full-stack e-learning platform using Node.js and MongoDB with secure JWT authentication.',
        'Built a cross-platform healthcare appointment system using Flutter and React, automating scheduling workflows.',
        'Created an encrypted SQL query builder and real-time dashboard for complex report generation.',
      ],
    },
  ]

  const projects = [
    {
      title: 'National Citizen Portal',
      desc: 'A multi-million user portal for government services, optimized for UX and accessibility. Winner of the Algerian Web Award 2018.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
      icon: `<svg width="64" height="64" fill="none" stroke="var(--primary)" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
    },
    {
      title: 'DocuManage RBAC',
      desc: 'Legislative Document Management System with granular role-based permissions, optimized query speed, and audit trails.',
      tags: ['NestJS', 'MySQL', 'React', 'Docker'],
      icon: `<svg width="64" height="64" fill="none" stroke="var(--secondary)" stroke-width="1.5" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>`,
    },
    {
      title: 'MediFlow App',
      desc: 'Cross-platform healthcare appointment and workflow automation system with real-time notifications and analytics.',
      tags: ['Flutter', 'Node.js', 'MongoDB', 'React'],
      icon: `<svg width="64" height="64" fill="none" stroke="var(--primary)" stroke-width="1.5" viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
    },
    {
      title: 'E-Learning Platform',
      desc: 'Full-stack e-learning platform with course management, progress tracking, and secure JWT authentication.',
      tags: ['Vue 3', 'Node.js', 'MongoDB', 'Socket.io'],
      icon: `<svg width="64" height="64" fill="none" stroke="var(--secondary)" stroke-width="1.5" viewBox="0 0 24 24"><path d="m2 3 20 9-20 9V3z"/><path d="M22 3v18"/></svg>`,
    },
    {
      title: 'Service Monitor Dashboard',
      desc: 'Real-time monitoring dashboard tracking 20+ microservices with alerts, metrics charts, and incident management.',
      tags: ['Vue 3', 'Socket.io', 'Express', 'Docker'],
      icon: `<svg width="64" height="64" fill="none" stroke="var(--primary)" stroke-width="1.5" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
    },
    {
      title: 'Query Builder Pro',
      desc: 'Encrypted SQL query builder with real-time dashboard for complex report generation across multiple databases.',
      tags: ['React', 'Node.js', 'MySQL', 'PostgreSQL'],
      icon: `<svg width="64" height="64" fill="none" stroke="var(--secondary)" stroke-width="1.5" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></svg>`,
    },
  ]

  return {
    navItems,
    heroPills,
    marquee,
    aboutFeatures,
    skillCategories,
    experience,
    projects,
  }
}
