import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {profileImageSrc, description, aboutItems} = aboutData;
  const { ref, controls, variants } = useScrollReveal();

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.About}>
      <motion.div
        animate={controls}
        initial="hidden"
        ref={ref}
        variants={variants}
      >
        <div className={classNames('grid grid-cols-1 gap-y-4', {'md:grid-cols-4': !!profileImageSrc})}>
          {/* COLUMNA 1: Foto + Logo (Alineados verticalmente) */}
  {!!profileImageSrc && (
    <div className="col-span-1 flex flex-col items-center gap-y-6 md:items-start"> 
      
      {/* Contenedor de la Foto */}
      <div className="relative h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32 ring-2 ring-cyan-500/20">
        <Image 
          alt="about-me-image" 
          className="h-full w-full object-cover" 
          src={profileImageSrc} 
        />
      </div>

      {/* Contenedor del Logo (Ahora debajo por el flex-col) */}
      <div className="flex flex-col items-center md:items-start">
        <a
          href="https://instagram.com/mardigitals.arg"
          rel="noopener noreferrer"
          target="_blank"
          className="transition-all duration-300 hover:scale-105"
        >
          <motion.div
            animate={{ scale: [1.5, 1.1, 1.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <img 
              alt="Mar Digitals" 
              className="h-12 w-auto grayscale transition-all duration-300 hover:grayscale-0 md:h-14"
              src="/mar-digitals-logo-blanco.png" 
            />
          </motion.div>
        </a>
      </div>
    </div>
  )}
          <div className={classNames('col-span-1 flex flex-col gap-y-6', {'md:col-span-3': !!profileImageSrc })}>              
            <div className="flex flex-col gap-y-2">
              <h2 className="text-2xl font-bold text-white">Conocé mas sobre mí</h2>          
              <p className="prose prose-sm text-gray-300 sm:prose-base">{description}</p>
            </div>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {aboutItems.map(({label, text, Icon}, idx) => (
                <li className="col-span-1 flex  items-start gap-x-2" key={idx}>
                  {Icon && <Icon className="h-7 w-7 text-white" />}
                  <span className="text-sm font-bold text-white">{label}:</span>
                  <span className=" text-sm text-gray-300">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
