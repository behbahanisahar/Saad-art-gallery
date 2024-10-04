import React from "react";
import Image from "next/image";
import locale from "@locale/index";
import img from "../src/img/image-home.png"

type Props = {
  lang: string;
};

const Header: React.FC<Props> = ({ lang }) => {
  return (
    <main aria-labelledby="header-heading">
      <h2 id="header-heading" className="sr-only">
        Header
      </h2>
      <div className="md:relative">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-36 lg:pb-56 xl:col-span-6">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="text-center sm:text-left text-5xl sm:text-4xl mb-20 sm:mb-10 font-bold tracking-tight text-gray-900">
                {locale[lang].welcome}!
              </h1>
              <p className="relative z-10 mt-6 text-lg leading-8 text-gray-700">
              Explore the enchanting world of calligraphy and painting! Our collection features beautiful, handcrafted pieces that bring art to life. Each artwork is a unique expression, perfect for adding a touch of elegance to your space.

Whether you’re looking for a stunning centerpiece or a thoughtful gift, you’ll find something special here. Join us in celebrating the beauty of art—shop now and discover pieces that inspire!
               </p>
            </div>
          </div>
          <div className="lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:xl:mr-56">
            <Image
              className="-mt-80 md:mt-0 w-full object-cover lg:inset-0 lg:aspect-auto lg:h-full"
              src={img}
              width={1000}
              height={500}
              priority={true}
            />
          </div>
        </div>
      </div>
      <hr id="start" />
    </main>
  );
};

export default Header;
