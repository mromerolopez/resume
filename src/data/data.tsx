import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import backgroundImage from '../images/header-background.webp';
import {
  About,
  ContactSection,
  ContactType,
  Me,
  HomepageMeta,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

const getExperienceYears: () => number = () => {
  const startDate: Date = new Date('04/01/2015');
  const now: Date = new Date();
  let diff = (now.getTime() - startDate.getTime()) / 1000;
  diff /= (60 * 60 * 24);
  return Math.abs(Math.round(diff / 365.25));
};

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Miguel Romero | Platform Lead Manager | Madrid, Spain',
  description: `Miguel Romero is a Platform Lead Manager at Santander Digital Services in Madrid, Spain. Specialized in Angular, Java, Node.js, and leading engineering teams. ${getExperienceYears()}+ years of experience in software engineering.`,
};

/**
 * Section definition
 */
export const SectionId = {
  Me: 'me',
  About: 'about',
  Contact: 'contact',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Me section
 */
export const meData: Me = {
  imageSrc: backgroundImage,
  name: `Hi, I'm Miguel Romero`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Spain-based <strong className="text-stone-100">Platform Lead Manager</strong> @ <strong className="text-stone-100"><a target="_blank" rel="noopener noreferrer" href="https://www.santanderdigitalservices.com/es/inicio">Santander Digital Services</a></strong>.
        I design, build, and lead the development of robust, scalable digital products.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Off the clock: <strong className="text-stone-100">sci-fi books, motorcycles,</strong> and <strong className="text-stone-100">mountain trails</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/resume/assets/resume.pdf',
      text: 'Resume',
      target: '_blank',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      target: '_self',
      primary: false,
    },
  ],
};

const getAge: () => number = () => {
  const birthDay: Date = new Date('09/04/1988 12:00:00');
  const now: Date = new Date();
  let diff = (now.getTime() - birthDay.getTime()) / 1000;
  diff /= (60 * 60 * 24);
  return Math.abs(Math.round(diff / 365.25));
};

/**
 * About section
 */
export const aboutData: About = {
  description: `With over ${getExperienceYears()} years in software engineering, I specialize in frontend and backend development — primarily Angular, Java, and Node.js — while leading cross-functional engineering teams. I focus on technical delivery, architecture decisions, and growing the people around me.`,
  aboutItems: [
    { label: 'Location', text: 'Madrid, Spain', Icon: MapIcon },
    { label: 'Age', text: getAge().toString(), Icon: CalendarIcon },
    { label: 'Nationality', text: 'Spanish', Icon: FlagIcon },
    { label: 'Interests', text: 'Motorcycles, Hiking, Board Games', Icon: SparklesIcon },
    { label: 'Study', text: 'UNED, self-taught', Icon: AcademicCapIcon },
    { label: 'Employment', text: 'Santander Digital Services', Icon: BuildingOffice2Icon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'Angular',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 9,
      },
      {
        name: 'React',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Java',
        level: 5,
      },
      {
        name: 'Spring Boot',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Databases',
    skills: [
      {
        name: 'SQL',
        level: 7,
      },
      {
        name: 'NoSQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Cloud',
    skills: [
      {
        name: 'AWS',
        level: 5,
      },
      {
        name: 'Azure',
        level: 4,
      },
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Spanish',
        level: 10,
      },
      {
        name: 'English',
        level: 7,
      }
    ],
  }
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */

export const experience: TimelineItem[] = [
  {
    date: 'November 2022 - Present',
    location: 'Santander Digital Services',
    title: 'Platform Lead Manager',
    content: (
      <p>
        Lead the end-to-end delivery of large-scale, customer-facing banking applications built with Angular, Java, and Spring Boot.
        Manage and mentor a cross-functional team of 20+ engineers across frontend and backend disciplines.
        Define technical roadmaps, coordinate with product and architecture teams, and drive alignment between business goals and engineering execution.
      </p>
    ),
  },
  {
    date: 'January 2021 - September 2022',
    location: 'Plexus Tech',
    title: 'Tech Lead',
    content: (
      <p>
        Acted as the primary technical contact for clients, translating business requirements into concrete engineering plans.
        Led cross-functional teams through full project lifecycles, ensuring delivery on schedule and within budget.
        Defined technical architecture, established coding standards, and mentored junior and mid-level developers.
        Managed project planning, resource allocation, and risk mitigation across concurrent workstreams.
      </p>
    ),
  },
  {
    date: 'August 2019 - December 2021',
    location: 'Plexus Tech',
    title: 'Senior Developer',
    content: (
      <p>
        Developed complex frontend applications with Angular and TypeScript, with a strong emphasis on Test-Driven Development (TDD).
        Worked in Agile/Scrum teams, contributing to sprint planning, code reviews, and CI/CD pipelines.
        Delivered clean, well-tested, and maintainable code across multiple concurrent client projects.
      </p>
    ),
  },
  {
    date: 'August 2015 - December 2019',
    location: 'CITECAM',
    title: 'Junior Developer',
    content: (
      <p>
        Built full-stack applications using Node.js, Angular, React, and Go.
        Designed and managed SQL and NoSQL databases for scalable data solutions.
        Deployed and maintained applications on AWS and Azure cloud infrastructure.
        Worked within Gitflow-based workflows across collaborative development teams.
      </p>
    ),
  }
];

export const education: TimelineItem[] = [
  {
    date: 'June 2016',
    location: 'C.I.F.P. Marcos Valcárcel',
    title: 'Certificate of Higher Education - Applications Development',
    content: <p>
      Graduated with honors (GPA 3.67/4).
      Tackled complex migration projects, demonstrating problem-solving skills and effective teamwork in multidisciplinary environments.
    </p>,
  },
  {
    date: 'June 2014',
    location: 'C.I.F.P. Marcos Valcárcel',
    title: 'Certificate of Higher Education - System Admin',
    content: <p>
      Achieved a top GPA of 3.85/4.
      Gained hands-on experience as an intern at ViewNext, sharpening technical skills and adaptability in fast-paced environments.
    </p>,
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: [
    `Let's build something great.`,
    `Open to new projects, collaborations, and tech challenges.`,
    `Drop me a line and let's connect.`
  ],
  items: [
    {
      type: ContactType.LinkedIn,
      text: 'miguel-romero-lópez',
      href: 'https://www.linkedin.com/in/miguel-romero-lópez-916bba98/',
    },
    {
      type: ContactType.Email,
      text: 'miky.rl@gmail.com',
      href: 'mailto:miky.rl@gmail.com',
    },
    {
      type: ContactType.Github,
      text: 'mromerolopez',
      href: 'https://github.com/mromerolopez',
    },
    {
      type: ContactType.Location,
      text: 'Madrid, Spain',
      href: 'https://maps.app.goo.gl/pdt8BX7ACfr3wdi97',
    }
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/mromerolopez' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/miguel-romero-lópez-916bba98/' },
  { label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/Maldercito' },
];
