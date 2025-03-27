import React from 'react';
import Image from 'next/image';
import { projects } from '../data/index';
import { FaLocationArrow } from 'react-icons/fa';

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="font-bold text-4xl md:text-5xl text-center lg:text-2xl">
        A Small Selection of{' '}
        <span className="text-blue-500">Recent Projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map(({ id, title, desc, img, toolsList, link }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w=[80vw]"
          >
            <div className="">
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden rounded-lg lg:rounded-3xl md:rounded-xl bg-[#13162d]">
                  <Image
                    src={img}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                {/* <Image
                  src={img}
                  alt={title}
                  width={300}
                  height={200}
                  className="z-10 absolute bottom-0"
                /> */}
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl test-base line-clamp-1">
                {title}
              </h1>

              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {desc}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {toolsList.map((tool) => (
                    <div key={tool} className="border-black/[0.2]">
                      <p className="lg:text-md md:text-xs text-sm p-2">
                        {tool}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <a href={link} target="_blank">
                    <p className="flex lg:text-md md:text-xs text-sm text-blue-500">
                      Check it Out
                    </p>
                    <FaLocationArrow className="ms-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
