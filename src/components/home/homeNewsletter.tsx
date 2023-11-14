import Image from "next/image";
import styles from "@/app/styles";

export default function HomeNewsletter() {
  return (
    <div className="bg-dn-orange">
      <div className="flex items-center justify-center py-24">
        <form className="w-full max-w-3xl  p-4 md:p-0 ">
          <div className="flex flex-col md:flex-row gap-4">
            <label htmlFor="full-name" className="sr-only">
              Full name
            </label>
            <input
              id="full-name"
              name="name"
              type="name"
              autoComplete="name"
              required
              className={`min-w-0 flex-auto rounded-md border-0 uppercase placeholder:text-gray-200/50 bg-white/5 px-3.5 py-2 ring-1 ring-white/50 focus:ring-white text-white shadow-sm focus:outline-none focus:ring-1 focus:ring-offset-0 font-poppins placeholder:font-bold`}
              placeholder="Your name"
            />
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className={`min-w-0 flex-auto rounded-md border-0 uppercase placeholder:text-gray-200/50 bg-white/5 px-3.5 py-2 ring-1 ring-white/50 focus:ring-white text-white shadow-sm focus:outline-none focus:ring-1 focus:ring-offset-0 font-poppins placeholder:font-bold`}
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-white uppercase font-poppins font-bold px-3.5 py-2.5 text-dn-orange shadow-sm  focus:outline-none"
            >
              Sign up to our newsletter
            </button>
          </div>
          <p className="mt-2 font-poppins text-[0.7rem] text-white/60">
            All your information will be kept confidential and we’ll only send
            you the latest updates, news and events that are happening in our
            city.
          </p>
        </form>
      </div>
      <div className="lg:hidden">
        <Image
          src="/img/green-orange-motif-mobile.jpg"
          width={1000}
          height={100}
          alt="Picture green and orange pattern"
        />
      </div>
      <div className="hidden lg:block">
        <Image
          src="/img/green-orange-motif-1.jpg"
          width={2000}
          height={100}
          alt="Picture green and orange pattern"
        />
      </div>
    </div>
  );
}
