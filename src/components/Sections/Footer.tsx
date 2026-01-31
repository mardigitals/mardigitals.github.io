import {BoltIcon, ChevronUpIcon} from '@heroicons/react/24/solid';
import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Socials from '../Socials';

const currentYear = new Date().getFullYear();

const Footer: FC = memo(() => (
  <div className="relative bg-neutral-900 px-4 pb-6 pt-12 sm:px-8 sm:pb-8 sm:pt-14">
    {/* Botón para volver arriba */}
    <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-6">
      <a
        className="rounded-full bg-neutral-100 p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
        href={`/#${SectionId.Hero}`}>
        <ChevronUpIcon className="h-6 w-6 text-cyan-500 sm:h-8 sm:w-8" />
      </a>
    </div>

    <div className="flex flex-col items-center gap-y-6">
      {/* Iconos de Redes Sociales */}
      <div className="flex gap-x-4 text-neutral-500">
        <Socials />
      </div>

      {/* Créditos de Mar Digitals: Bolt + Logo */}
      <a
        className="-m-2 flex items-center gap-x-3 rounded-md p-2 transition-all duration-300 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        href="https://instagram.com/mardigitals.arg"
        rel="noopener noreferrer"
        target="_blank">
        <div className="flex items-center gap-x-2">
          <BoltIcon className="h-5 w-5 text-cyan-500" />
          <span className="text-sm text-neutral-400">developed by</span>
          <img 
            alt="Mar Digitals" 
            className="h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300" 
            src="/mar-digitals-logo.png" 
          />
        </div>
      </a>

      {/* Copyright Final */}
      <span className="text-sm text-neutral-700">© Copyright {currentYear} Mario Ricotti</span>
    </div>
  </div>
));

Footer.displayName = 'Footer';
export default Footer;
