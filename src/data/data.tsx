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
import profilepic from '../images/profilepic.jpg';
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

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Miguel Romero | Resume',
  description: 'Explore my professional journey, standout projects, and technical skills as you discover how my passion for technology and innovation has driven my career forward',
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
        I'm a Spain based <strong className="text-stone-100">Full Stack Engineer & Team Lead</strong> @ <strong className="text-stone-100"><a target="_blank" href="https://www.santanderdigitalservices.com/es/inicio">Santander Digital Services</a></strong>. 
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

const getExperienceYears: () => number = () => {
  const startDate: Date = new Date('04/01/2015');
  const now: Date = new Date();
  let diff = (now.getTime() - startDate.getTime()) / 1000;
  diff /= (60 * 60 * 24);
  return Math.abs(Math.round(diff / 365.25));
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
  profileImageSrc: profilepic,
  description: `With over ${getExperienceYears()} years in software engineering, I specialize in both frontend and backend, mainly with Angular, Java, and Node. I thrive on leading teams, solving complex problems, and delivering high-impact solutions. My focus: quality, innovation, and continuous improvement.`,
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
        name: 'Golang',
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
    title: 'Engineering Manager',
    content: (
      <p>
        Led the development of large-scale, customer-facing applications (Angular, Java, Spring Boot).
        Managed multidisciplinary teams, ensuring timely delivery and high quality.
        Adaptable, communicative, and focused on client success.
      </p>
    ),
  },
  {
    date: 'January 2021 - September 2022',
    location: 'Plexus Tech',
    title: 'Tech Lead',
    content: (
      <p>
        Built strong foundations in client relations, team leadership, and technical strategy.
        I engage directly with clients to understand and deliver on their needs.
        Led and motivated teams to deliver projects on time and within budget.
        Skilled in project planning, resource allocation, and risk management.
        Provide clear technical guidance and define requirements for successful outcomes.
        Foster collaborative, innovative environments that drive results.
      </p>
    ),
  },
  {
    date: 'August 2019 - December 2021',
    location: 'Plexus Tech',
    title: 'Senior Developer',
    content: (
      <p>
        Proficient in Angular and TypeScript, with a focus on Test-Driven Development (TDD).
        Experienced in Agile environments (Scrum) for efficient project delivery.
        Committed to writing clean, maintainable code that meets industry standards.
        Thrive in cross-functional teams to achieve goals and deliver quality software.
      </p>
    ),
  },
  {
    date: 'August 2015 - December 2019',
    location: 'CITECAM',
    title: 'Junior Developer',
    content: (
      <p>
        Full-stack developer with hands-on experience in Node.js, Angular, and React.
        Skilled in both SQL and NoSQL databases to build scalable, efficient solutions.
        Cloud-savvy: deployed and managed apps on AWS and Azure.
        Strong command of Git and Gitflow for version control.
        Versatile in Python and Go, adapting quickly to new technical challenges.
        Focused on delivering innovative, high-quality solutions that drive results.
      </p>
    ),
  }
];

export const education: TimelineItem[] = [
  {
    date: 'June 2016',
    location: 'Tech School',
    title: 'Certificate of Higher Education - Applications Development',
    content: <p>
      Graduated with honors (GPA 3.67/4).
      Tackled complex migration projects, demonstrating problem-solving skills and effective teamwork in multidisciplinary environments.
    </p>,
  },
  {
    date: 'June 2014',
    location: 'Tech School',
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
