import React from 'react';
import Image from 'next/image';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '../data/index';

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-4xl md:text-5xl text-center lg:max-w-[45vw]">
          React Out to Me
        </h1>
        <p className="md:mt-10 my-5 text-center">
          I&apos;m always looking forward to new opportunities and meeting new
          people so feel free to connect with me through my socials!
        </p>
        <a href="mailto:pattywong2882@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Patrick Wong
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map(({ id, icon, link }) => (
            <div
              key={id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center"
            >
              <a href={link} target="_blank">
                <Image src={icon} alt={id} width={30} height={30} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
