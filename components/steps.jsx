"use client"
import Image from 'next/image';

import { IconArrowDown, IconCheck } from '@tabler/icons-react';
import Lottie from "lottie-react";
import lottie3 from "../anim/lottie3.json";

const Steps = () => {
// Steps data
const stepsData = {
    title: 'Follow these three simple steps to get started with our product',
    items: [
      {
        title: 'Step 1',
        description:
          'Begin by signing up for a free account on our platform. It only takes a minute, and no credit card is required.',
        icon: IconArrowDown,
      },
      {
        title: 'Step 2',
        description:
          'After signing up, access your dashboard and customize your chatbots settings to match your brand and objectives. Define conversation flows, personalize the appearance, and set goals.',
        icon: IconArrowDown,
      },
      {
        title: 'Step 3',
        description:
          'Finally, integrate your chatbot into your website or application following our integration guides. Test its functionality, and when you are satisfied, launch it to provide instant support and engage with your users.',
        icon: IconArrowDown,
      },
      {
        title: 'Ready!',
        icon: IconCheck,
      },
    ],
    image: {
      src: '',
      alt: 'Steps image',
    },
  };



  const { title, items, image } = stepsData;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="row-gap-10 grid gap-6 md:grid-cols-2">
        <div className="mb-4 md:mb-0 md:py-4 md:pr-16">
          {title && <h2 className="font-heading mb-8 text-3xl font-bold lg:text-4xl">{title}</h2>}
          {items &&
            items.length &&
            items.map(({ title, description, icon: Icon }, index) => (
              <div key={`item-steps-${index}`} className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div>
                    {index !== items.length - 1 ? (
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-900">
                        {Icon ? (
                          <Icon className="h-6 w-6 text-primary-800 dark:text-slate-200" />
                        ) : (
                          <IconArrowDown className="h-6 w-6 text-primary-800 dark:text-slate-200" />
                        )}
                      </div>
                    ) : (
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-900 bg-primary-900">
                        {Icon ? (
                          <Icon className="h-6 w-6 text-white dark:text-slate-200" />
                        ) : (
                          <IconCheck className="h-6 w-6 text-white dark:text-slate-200" />
                        )}
                      </div>
                    )}
                  </div>
                  {index !== items.length - 1 && <div className="h-full w-px bg-gray-300 dark:bg-slate-500"></div>}
                </div>
                <div className={`pt-1 ${index !== items.length - 1 ? 'pb-8' : ''}`}>
                  {title && <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">{title}</p>}
                  {description && <p className="text-gray-600 dark:text-slate-400">{description}</p>}
                </div>
              </div>
            ))}
        </div>
        <div className="relative">
          {/* {image && (
            <Image
              src={image.src}
              width={400}
              height={768}
              alt={image.alt}
              className="inset-0 w-full rounded-md bg-gray-500 object-cover object-top shadow-lg dark:bg-slate-700 md:absolute md:h-full"
            />
          )} */}

<Lottie className=' ' animationData={lottie3} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default Steps;