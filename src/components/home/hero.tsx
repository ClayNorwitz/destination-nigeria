"use client";
import Image from "next/image";
import styles from "@/app/styles";
import { useState, useRef } from "react";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import { splitTitle, splitText } from "@/utils/gsap";

type SocialIconProps = React.SVGProps<SVGSVGElement>;

interface SocialItem {
  name: string;
  href: string;
  icon: React.FC<SocialIconProps>;
}

const navigation: { social: SocialItem[] } = {
  social: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/destination-2030-nigeria/about/?viewAsMember=true",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "X",
      href: "https://twitter.com/NigeriaDes2030",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 90 90" {...props}>
          <path
            fillRule="evenodd"
            d="M 0.219 2.882 l 34.748 46.461 L 0 87.118 h 7.87 l 30.614 -33.073 l 24.735 33.073 H 90 L 53.297 38.043 L 85.844 2.882 h -7.87 L 49.781 33.341 L 27.001 2.882 H 0.219 z M 11.793 8.679 h 12.303 L 78.425 81.32 H 66.122 L 11.793 8.679 z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com/destination2030nigeria?igshid=OGQ5ZDc2ODk2ZA==",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Threads",
      href: "https://www.threads.net/@destination2030nigeria",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 192 192" {...props}>
          <path
            fillRule="evenodd"
            d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "tiktok",
      href: "https://www.tiktok.com/@destination2030nigeria?_t=8hBvq0AynX0&_r=1",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 -40 448 560" {...props}>
          <path
            fillRule="evenodd"
            d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

type HeroProps = {
  setOpen: any;
};

export default function Hero({ setOpen }: HeroProps) {
  const [copied, setCopied] = useState(false);
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    splitTitle(titleRef, containerRef);
  }, []);

  const handleCopyClick = () => {
    const urlToCopy = window.location.href;

    navigator.clipboard
      .writeText(urlToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Display "copied to clipboard" for 2 seconds
      })
      .catch((err) => console.error("Error copying to clipboard:", err));
  };

  return (
    <div ref={containerRef} className="hero-image h-full relative">
      <div className="h-full flex flex-col justify-between">
        {/* Empty Space */}
        <div className="flex-1"></div>
        {/* Main Content */}
        <div className="flex-1 grid grid-cols-4">
          <div className="col-span-1 lg:flex hidden"></div>
          <div className="col-span-4 lg:col-span-2 flex justify-end ">
            <h1
              ref={titleRef}
              className={`${styles.h1} !mb-0 text-white text-right md:!text-[10rem] md:!leading-[8rem] p-4 lg:p-0 lg:pt-4 max-w-lg `}
            >
              Nigeria <span className="block">every</span>
              <span className="block">where</span>
            </h1>
          </div>
          <div className="hidden lg:col-span-1 bg-dn-green w-full h-full lg:flex items-center justify-center space-x-4">
            <h3
              className={`${styles.h3} !mb-0 text-dn-dark-green text-right !leading-[2rem]`}
            >
              Destination <span className="block text-white">2030</span> Nigeria
            </h3>
            <Image
              src="/img/destination-nigeria-logo.png"
              width={120}
              height={154}
              alt="Picture green and orange pattern"
            />
          </div>
        </div>
        {/* Socials */}
        <div className=" flex-1 col-span-full  flex flex-col items-center justify-center ">
          <div className="pb-5">
            <p className={`${styles.paragraphBold} text-3xl text-white`}>
              Follow our journey
            </p>
          </div>
          <div className="flex w-full items-center justify-center space-x-6 ">
            <div className="h-px w-1/5 bg-white"></div>
            <div className="flex space-x-4 items-center ">
              {navigation.social.map((item) => (
                <a
                  target="_blank"
                  key={item.name}
                  href={item.href}
                  className="text-white bg-white/10 p-2 rounded-md"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className=" h-6 w-6" aria-hidden="true" />
                </a>
              ))}
              <div
                className="bg-white/10 p-2 rounded-md relative cursor-pointer"
                onClick={handleCopyClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                  />
                </svg>
                {copied && (
                  <span
                    className={`bg-white/10 w-48 justify-center text-white absolute ring-1 ring-white ${styles.paragraph} flex translate-y-10 ease-in-out transition-all top-0 left-1/2 -translate-x-1/2`}
                  >
                    copied to clipboard!
                  </span>
                )}
              </div>
            </div>
            <div className="h-px w-1/5 bg-white"></div>
          </div>
          <div className="pt-5">
            <button
              onClick={() => {
                setOpen(true);
              }}
              className="flex-none  rounded-sm bg-white/5 uppercase font-poppins font-bold px-3.5 py-2.5 text-white shadow-sm ring-1 ring-white hover:bg-white hover:text-dn-green transition-colors focus:outline-none"
            >
              Sign up to our newsletter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
