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
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
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
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Miguel Romero`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Spain based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        as Team Lead at <strong className="text-stone-100"><a target="_blank" href="https://www.santanderdigitalservices.com/es/inicio">Santander Digital Services</a></strong> helping build modern, mobile-first, customer face applications.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me inmerse in <strong className="text-stone-100">science fiction literature</strong>,
        enjoying <strong className="text-stone-100">motorcyle rides</strong>, or exploring the beautiful{' '}
        <strong className="text-stone-100">mountains of center Spain</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
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
}

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I have a strong 9-year background in software development, covering both frontend and backend, with a focus on Angular, Java and Node. Additionally, I’ve honed leadership abilities through managing software teams and projects. My career reflects a consistent dedication to delivering innovative, high-quality technological solutions.`,
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
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
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
        Extensive experience in developing large-scale applications, with a comprehensive focus on both frontend using Angular and backend utilizing Java and Spring Boot. Strong project management skills, leading multidisciplinary teams with a customer-centric approach. Demonstrated ability to thrive in dynamic environments and adapt quickly to changes, ensuring the delivery of high-quality projects within established timelines. Excellent communication and collaboration skills, fostering effective relationships with internal and external stakeholders to ensure project success.
      </p>
    ),
  },
  {
    date: 'January 2021 - September 2022',
    location: 'Plexus Tech',
    title: 'Tech Lead',
    content: (
      <p>
        I built a robust background in client relationship management, team leadership, project planning, and technical definition. Proven ability to effectively engage with clients, ensuring their needs are understood and met to achieve high levels of satisfaction. Experienced in leading and motivating teams to deliver projects on time and within budget. Skilled in strategic project planning, including resource allocation and risk management. Proficient in providing technical guidance and defining project requirements to ensure successful outcomes. Adept at fostering collaborative environments to drive innovation and excellence.
      </p>
    ),
  },
  {
    date: 'August 2019 - December 2021',
    location: 'Plexus Tech',
    title: 'Senior Developer',
    content: (
      <p>
        I became proficient in Angular and TypeScript, with a strong emphasis on Test-Driven Development (TDD) practices. Skilled in Agile methodologies, particularly Scrum, for efficient project management and delivery. Committed to writing clean, maintainable code that adheres to best practices and industry standards. Demonstrated ability to work collaboratively within cross-functional teams to achieve project goals and deliver high-quality software solutions.
      </p>
    ),
  },
  {
    date: 'August 2015 - December 2019',
    location: 'CITECAM',
    title: 'Junior Developer',
    content: (
      <p>
        Extensive experience in full-stack development utilizing Node.js, Angular, and React frameworks. Proficient in managing both SQL and NoSQL databases to deliver scalable and efficient solutions. Skilled in cloud computing platforms such as AWS and Azure, with a proven track record of deploying and managing applications in the cloud. Experienced in version control using Git and Gitflow methodologies. Additionally, proficient in Python and Go languages, demonstrating adaptability and versatility in tackling diverse technical challenges. Committed to delivering high-quality, innovative solutions that drive business success.
      </p>
    ),
  }
];

export const education: TimelineItem[] = [
  {
    date: 'June 2016',
    location: 'Tech School',
    title: 'Certificate of Higher Education - Applications Development',
    content: <p>Graduated with honors and an outstanding GPA of 9.18, I have a strong academic background coupled with an exceptional commitment to excellence. My focus on the internal migration project not only showcased my ability to tackle complex challenges but also demonstrated my capacity to work collaboratively and effectively in multidisciplinary teams.</p>,
  },
  {
    date: 'June 2014',
    location: 'Tech School',
    title: 'Certificate of Higher Education - System Admin',
    content: <p>With an outstanding GPA of 9.62, I stand out as a dedicated student with high academic achievements. My role as a intern at ViewNext not only provided me with valuable hands-on experience but also enhanced my technical skills and ability to adapt to demanding professional environments.</p>,
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: `I'm here to power your tech projects. Reach out now, and let's take your ideas to the next level. I'm eager to hear about your challenges and collaborate to achieve your goals.`,
  items: [
    {
      type: ContactType.Email,
      text: 'mromerolopez343@gmail.com',
      href: 'mailto:mromerolopez343@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Madrid, Spain',
      href: 'https://maps.app.goo.gl/pdt8BX7ACfr3wdi97',
    },
    {
      type: ContactType.Github,
      text: 'mromerolopez',
      href: 'https://github.com/mromerolopez',
    },
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
