import React from 'react';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="pb-20">
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center max-w-80">
            Just found out there&apos;s a root beer flavored Poppi
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Patrick Wong"
          />

          {/* <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="I'm going to devour an Al Pastor Burrito later"
          /> */}

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            An aspiring Software Engineer, building applications as a creative
            outlet.
          </p>

          <div className="flex flex-col justify-center items-center gap-2 mt-10">
            <p>
              Hi, I&apos;m Patrick Wong! I&apos;m a 4th year Computer Science
              student at UC Irvine. Here are a few things about what I like to
              do, and what I&apos;m currently up to!
            </p>
            <p>
              I&apos;m interested in Machine-Learning and Software Engineering
              so the projects I&apos;m working on explores these interests to
              further my understanding. Through this process I&apos;ve learned
              to develop SaaS applications using modern frameworks such as
              NextJs, and integrating OpenAI&apos;s API, Clerk, and Stripe.
            </p>
            <p>
              Aside from developing applications, I enjoy spending my free time
              satisfying my food cravings by cooking delicious recipes I come
              across, playing video games (atm it&apos;s Marvel Rivals),
              watching anime, and playing badminton/bouldering with friends.
            </p>
          </div>

          <a href="#projects">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          <Link href="#projects" scroll={true}>
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
