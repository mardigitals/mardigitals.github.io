import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  MapIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-imagen-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-imagen-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-imagen-3.jpg';
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
import { 
  SiJavascript, SiTypescript, SiDotnet,
  SiReact, SiTailwindcss, SiNestjs, SiExpress,
  SiNodedotjs, SiMysql, SiGithub, SiPostman, SiBootstrap, SiHtml5, SiCss3,
} from 'react-icons/si';
import { BiLogoJava } from 'react-icons/bi';
import { TbBrandVisualStudio } from 'react-icons/tb';


/**
 * Lógica para cálculo de edad automática
 */
const calculateAge = (birthDate: string): number => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
};

// Reemplazá 'YYYY-MM-DD' por tu fecha de nacimiento real
const myAge = calculateAge('1995-06-14');

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Mario Ricotti | Full Stack Developer | mar digitals',
  description: "Portfolio profesional de Mario Ricotti,  Full Stack Developer. Mar digitals founder",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'perfil',
  Contact: 'contacto',
  Portfolio: 'portfolio',
  Resume: 'resumen',
  Skills: 'habilidades',
  Stats: 'stats',
  Testimonials: 'testimonios',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Soy Mario Ricotti.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Tengo <span className="text-stone-100">{myAge} años</span>, soy
        <strong className="text-stone-100"> Full Stack Developer</strong> y fundador de
        <strong className="text-stone-100"> Mar Digitals</strong>.
      </p>

      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Desarrollo aplicaciones web modernas con herramientas actuales y escalables.
        Mis trabajos se enfocan en lograr una
        <strong className="text-stone-100"> <em>UX</em></strong> amigable y una
        <strong className="text-stone-100"> <em>UI</em></strong> atractiva y funcional.
        <br />
        Tecnología pensada para crecer:
        <strong className="text-stone-100"> intuitiva · veloz · escalable</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resumen.pdf',
      text: 'Descargar CV',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contacto',
      primary: false,
    },
  ],
};


/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Soy Técnico Superior en Programación, egresado de la UTN | Facultad Regional Rafaela en 2026. 
  Me considero un apasionado por el desarrollo de software, la tecnología y la optimización de procesos.
  Mi lugar favorito en el mundo es el MAR, donde puedo desconectar y encontrar inspiración.`,

  aboutItems: [
    { label: 'Ubicación', 
      text: (
        <>
          <div className="flex flex-col gap-y-3 pt-1">
            <div className="flex items-start gap-x-2">
              <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500 shadow-[0_0_5px_#06b6d4]" />
              <p className="text-sm leading-tight">
                <span className="font-bold text-neutral-100">Rafaela, Santa Fe</span>
                <br />
                <span className="text-xs italic text-neutral-400">Argentina</span>
              </p>
            </div>
          </div>
        </>
      ),
      Icon: MapIcon 
    },

    { label: 'Intereses',   
      text: (
        <>
          <div className="flex flex-col gap-y-3 pt-1">
            <div className="flex items-start gap-x-2">
              <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500 shadow-[0_0_5px_#06b6d4]" />
              <p className="text-sm leading-tight">
                <span className="font-bold text-neutral-100">Software, buceo y automovilismo.</span>
                <br />
                <span className="text-xs italic text-neutral-400"></span>
              </p>
            </div>
          </div>
        </>
      ),
      
      Icon: SparklesIcon
    },

    {
      label: 'Estudios',
      text: (
        <>
          <div className="flex flex-col gap-y-3 pt-1">
            <div className="flex items-start gap-x-2">
              <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500 shadow-[0_0_5px_#06b6d4]" />
              <p className="text-sm leading-tight">
                <span className="font-bold text-neutral-100">Técnico Sup. en Programación</span>
                <br />
                <span className="text-xs italic text-neutral-400"> UTN Facultad Regional Rafaela (2026).</span>
              </p>
            </div>
          </div>
        </>
      ),
      Icon: AcademicCapIcon,
    },

    {
      label: 'Empleos',
      text: (
        <>   
          <div className="flex flex-col gap-y-3 pt-1">
            {/* Ítem: Full Stack Developer */}
            <div className="flex items-start gap-x-2">
              <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500 shadow-[0_0_5px_#06b6d4]" />
              <p className="text-sm leading-tight">
                <span className="font-bold text-neutral-100">Full Stack Developer</span>
                <br />
                <span className="text-xs italic text-neutral-400">Freelance</span>
              </p>
            </div>

            {/* Ítem: E-commerce */}
            <div className="flex items-start gap-x-2">
              <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
              <p className="text-sm leading-tight">
                <span className="font-bold text-neutral-100">Tech E-commerce</span>
                <br />
                <span className="text-xs italic text-neutral-400">Tienda Mar Digitals · Mercado Libre</span>
              </p>
            </div>

            {/* Ítem: Gerente */}
            <div className="flex items-start gap-x-2">
              <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
              <p className="text-sm leading-tight">
                <span className="font-bold text-neutral-100">Gerente</span>
                <br />
                <span className="text-xs italic text-neutral-400">Autódromo “Ciudad de Rafaela”</span>
              </p>
            </div>
          </div>
        </>
      ),
      Icon: BuildingOffice2Icon,
    },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Lenguajes de Programación',
    skills: [
      {
        name: (
          <span className="flex items-center gap-x-3 text-lg font-bold">
            <SiDotnet className="text-2xl text-purple-600" /> C# 
          </span>
        ), level: 8
      },
      {
        name: (
          <span className="flex items-center gap-x-3 text-lg font-bold">
            <SiJavascript className="text-2xl text-[#F7DF1E]" /> JavaScript 
            <SiTypescript className="text-2xl text-[#3178C6] ml-1" /> TypeScript
          </span>
        ), level: 9
      },
      {
        name: (
          <span className="flex items-center gap-x-3 text-lg font-bold">
            <BiLogoJava className="text-2xl text-orange-600" /> Java
          </span>
        ), level: 7
      },
    ],
  },
  {
    name: 'Frontend Development',
    skills: [
      {
        name: (
          <span className="flex items-center gap-x-3 text-lg font-bold">
            <SiHtml5 className="text-2xl text-orange-500" /> HTML5 
            <SiCss3 className="text-2xl text-blue-500 ml-1" /> CSS3
          </span>
        ), level: 10
      },
      {
        name: (
          <span className="flex items-center gap-x-3 text-lg font-bold">
            <SiReact className="text-2xl text-blue-400" /> React 
          </span>
        ), level: 8
      },
      {
        name: (
          <span className="flex items-center gap-x-3 text-lg font-bold">
            <SiTailwindcss className="text-2xl text-cyan-400" /> Tailwind 
            <SiBootstrap className="text-2xl text-purple-500 ml-1" /> Bootstrap
          </span>
        ), level: 9
      },
  
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      {
        name: (
          <span className="flex items-center gap-x-3 text-lg font-bold">
            <SiNodedotjs className="text-2xl text-green-600" /> Node.js
          </span>
        ), level: 8
      },
      {
        name: (
          <span className="flex items-center gap-x-3 text-lg font-bold">
            <SiNestjs className="text-2xl text-red-600" /> Nest.js 
            <SiExpress className="text-2xl ml-1" /> Express
          </span>
        ), level: 8
      },
      {
        name: (
          <span className="flex items-center gap-x-3 text-lg font-bold">
            <SiMysql className="text-2xl text-blue-800" /> MySQL 
          </span>
        ), level: 8
      },
    ],
  },
  {
    name: 'Herramientas',
    skills: [
      {
        name: (
          <span className="flex items-center gap-x-3 text-lg font-bold">
            <SiGithub className="text-2xl" /> Git - GitHub
          </span>
        ), level: 9
      },
      {
        name: (
          <span className="flex items-center gap-x-3 text-lg font-bold">
            <SiPostman className="text-2xl text-orange-500" /> Postman
          </span>
        ), level: 8
      },
      {
        name: (
          <span className="flex items-center gap-x-3 text-lg font-bold">
            <TbBrandVisualStudio className="text-2xl text-blue-500" /> VS Code
          </span>
        ), level: 9
      },
    ],
  },
];
/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
   {
    title: 'Web de Estudio RA - Arquitectura',
    description: 'Static Web',
    url: 'https://www.arqestudiora.com',
    image: porfolioImage1,
  },
  {
    title: 'Gestión de Fans para Autódromo',
    description: 'Memberships Platform',
    url: 'https://www.autodromorafaela.com',
    image: porfolioImage2,
  },
    {
    title: 'ANOTHER PROJECT',
    description: '12',
    url: 'https://www.otrosproyectos.com',
    image: porfolioImage3,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Enero 2026',
    location: 'UTN | Facultad Regional de Rafaela',
    title: 'Técnico Superior en Programación',
    content: (
      <p>
        Aprendí a desarrollar software en forma sólida, desde los requerimientos hasta el mantenimiento en producción.  
        Durante la carrera, adquirí conocimientos  desde la lógica de bajo nivel en <strong>C</strong>, todo el mundo de POO con <strong>Java</strong> hasta arquitecturas modernas y competencias avanzadas en el ecosistema de <strong>JavaScript/TypeScript</strong> con <strong>React y Node.js</strong>, 
        además de desarrollo robusto con <strong>.NET y C#</strong> con su enfoque más coorporativo. Me especialicé en el diseño de bases de datos relacionales como 
        <strong> SQL Server y MySQL</strong>, aplicando patrones de diseño y metodologías ágiles para crear soluciones escalables y eficientes.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2025 - Presente',
    location: 'Mar Digitals',
    title: 'Full Stack Developer',
    content: (
      <p>
        Desarrollo integral de soluciones digitales a medida. 
      </p>
    ),
  },
  {
    date: 'Febrero 2018 - Presente',
    location: 'Autódromo "Ciudad de Rafaela"',
    title: 'Gerente y Dirección General',
    content: (
      <p>
        Dirección estratégica y administrativa.
      </p>
    ),
  },
  {
    date: 'Febrero 2026 - Presente',
    location: 'Tienda Mar Digitals - Mercado Libre',
    title: 'Tech E-commerce',
    content: (
      <p>
        Unidad de negocio nueva y en crecimiento, enfocada en la comercialización estratégica de hardware y soluciones tecnológicas a través de <strong>Mercado Libre</strong>. 
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Arquitectos de Estudio RA',
      text: 'Mario transformó nuestra presencia digital, optimizando el SEO de nuestra web y logrando una visibilidad que antes no teníamos. Su enfoque en la velocidad de carga fue clave para nuestro estudio.',
      image: '/estudio-ra-logo.png', 
    },
    {
      name: 'Comisión Atlético de Rafaela',
      text: 'Como creador y desarrollador del proyecto Óvalo Fans, Mario demostró una visión estratégica excepcional. Logró digitalizar y fidelizar una comunidad de fans que no conocíamos, con una solución creativa que superó nuestras expectativas.',
      image: '/autodromo-rafaela-logo.png',
    }
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Dejame tu consulta',
  description: 'Este es un buen momento para enviarme un mensaje si estás interesado en trabajar conmigo o simplemente quieres saludar.',
  items: [
    {
      type: ContactType.Email,
      text: 'maritoricotti@gmail.com',
      href: 'mailto:maritoricotti@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Rafaela, Santa Fe, Argentina.',
      href: 'https://www.google.com/maps/search/?api=1&query=Belgrano+476+Rafaela/',
    },
    {
      type: ContactType.Instagram,
      text: '@mardigitals.arg',
      href: 'https://www.instagram.com/mardigitals.arg/',
    },
    {
      type: ContactType.Github,
      text: 'mardigitals',
      href: 'https://github.com/mardigitals/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/mardigitals/'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/mario-ricotti/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/mardigitals.arg/'},
];
