import classNames from 'classnames';
import {FC, memo, UIEventHandler, useCallback, useEffect, useMemo, useRef, useState} from 'react';

import {isApple, isMobile} from '../../config';
import {SectionId, testimonial} from '../../data/data';
import {Testimonial as TestimonialType} from '../../data/dataDef';
import useInterval from '../../hooks/useInterval';
import useWindow from '../../hooks/useWindow';
import QuoteIcon from '../Icon/QuoteIcon';
import Section from '../Layout/Section';

const Testimonials: FC = memo(() => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [scrollValue, setScrollValue] = useState(0);
  const [parallaxEnabled, setParallaxEnabled] = useState(false);

  const itemWidth = useRef(0);
  const scrollContainer = useRef<HTMLDivElement>(null);

  const {width} = useWindow();

  const {imageSrc, testimonials} = testimonial;

  const resolveSrc = useMemo(() => {
    if (!imageSrc) return undefined;
    return typeof imageSrc === 'string' ? imageSrc : imageSrc.src;
  }, [imageSrc]);

  useEffect(() => {
    setParallaxEnabled(!(isMobile && isApple));
  }, []);

  useEffect(() => {
    itemWidth.current = scrollContainer.current ? scrollContainer.current.offsetWidth : 0;
  }, [width]);

  useEffect(() => {
    if (scrollContainer.current) {
      const newIndex = Math.round(scrollContainer.current.scrollLeft / itemWidth.current);
      setActiveIndex(newIndex);
    }
  }, [itemWidth, scrollValue]);

  const setTestimonial = useCallback(
    (index: number) => () => {
      if (scrollContainer.current !== null) {
        scrollContainer.current.scrollLeft = itemWidth.current * index;
      }
    },
    [],
  );
  
  const next = useCallback(() => {
    if (activeIndex + 1 === testimonials.length) {
      setTestimonial(0)();
    } else {
      setTestimonial(activeIndex + 1)();
    }
  }, [activeIndex, setTestimonial, testimonials.length]);

  const handleScroll = useCallback<UIEventHandler<HTMLDivElement>>(event => {
    setScrollValue(event.currentTarget.scrollLeft);
  }, []);

  useInterval(next, 9000);

  if (!testimonials.length) {
    return null;
  }

  return (
    <Section noPadding sectionId={SectionId.Testimonials}>
      <div
        className={classNames(
          'flex w-full items-center justify-center bg-cover bg-center px-4 py-16 md:py-24 lg:px-8',
          parallaxEnabled && 'bg-fixed',
          {'bg-neutral-700': !imageSrc},
        )}
        style={imageSrc ? {backgroundImage: `url(${resolveSrc})`} : undefined}>
        <div className="z-10 w-full max-w-screen-md px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/60 p-6 shadow-lg backdrop-blur-sm">
            <div
              className="no-scrollbar flex w-full touch-pan-x snap-x snap-mandatory gap-x-6 overflow-x-auto scroll-smooth"
              onScroll={handleScroll}
              ref={scrollContainer}>
              {testimonials.map((t, index) => {
                const isActive = index === activeIndex;
                return (
                  <TestimonialItem isActive={isActive} key={`${t.name}-${index}`} testimonial={t} />
                );
              })}
            </div>
            <div className="flex gap-x-4">
              {[...Array(testimonials.length)].map((_, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    className={classNames(
                      'h-3 w-3 rounded-full transition-all duration-500 sm:h-4 sm:w-4',
                      isActive ? 'bg-cyan-500 scale-110' : 'bg-gray-300 scale-100 opacity-60',
                    )}
                    disabled={isActive}
                    key={`select-button-${index}`}
                    onClick={setTestimonial(index)}></button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});

// Renombrado a TestimonialItem para evitar conflicto con el tipo importado
const TestimonialItem: FC<{testimonial: TestimonialType; isActive: boolean}> = memo(
  ({testimonial: {text, name, image}, isActive}) => (
    <div
      className={classNames(
        'flex w-full shrink-0 snap-start snap-always flex-col items-start gap-y-4 p-2 transition-opacity duration-1000 sm:flex-row sm:gap-x-6',
        isActive ? 'opacity-100' : 'opacity-0',
      )}>
      {image ? (
        <div className="relative h-14 w-24 shrink-0 sm:h-16 sm:w-28">
          <QuoteIcon className="absolute -left-2 -top-2 h-4 w-4 stroke-cyan-500 text-white" />
          <img
            alt={name}
            src={image}
            className="h-full w-full object-contain"
          />
        </div>
      ) : (
        <QuoteIcon className="h-5 w-5 shrink-0 text-cyan-500 sm:h-8 sm:w-8" />
      )}
      <div className="flex flex-col gap-y-4">
        <div className="relative">
          <p className="prose prose-sm font-medium italic text-white sm:prose-base pr-6">
            {text}
            {/* Icono de cierre al final del texto */}
            <QuoteIcon className="inline-block ml-2 h-4 w-4 rotate-180 transform text-white-500" />
          </p>
        </div>
        <p className="text-xs font-bold italic text-cyan-500 sm:text-sm md:text-base lg:text-lg">- {name}</p>
      </div>
    </div>
  ),
);

Testimonials.displayName = 'Testimonials';
export default Testimonials;