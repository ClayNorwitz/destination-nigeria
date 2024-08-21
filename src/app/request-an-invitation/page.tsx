import React from "react";
import styles from "../styles";
import Image from "next/image";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
const page = () => {
  return (
    <main className="bg-gray-200">
      <div>
        <Image
          src="/img/sponsor-header.jpg"
          width={1920}
          height={598}
          alt="Picture of a person singing"
          className="object-cover mx-auto"
        />
      </div>
      <div className={`${styles.boxWidth} py-20`}>
        {/* <h2
          className={`${styles.h2} !mb-0 bg-dn-dark-green text-white p-20 text-center`}
        >
          A Cultural Experience Brought to You by <br></br>Destination 2030-
          Nigeria Everywhere
        </h2> */}
        <div className="bg-white p-5">
          <h1 className={`${styles.h3} mt-10`}>Request an Invitation</h1>
          <p className={`${styles.paragraph} max-w-6xl`}>
            On the sidelines of the United Nations General Assembly in New York,
            this cultural experience will bring together policymakers, creators,
            government officials, and key stakeholders from around the world.
            The event promises an evening filled with cultural conversations,
            captivating artist performances, and valuable networking
            opportunities. Submitting the invitation request form does not
            guarantee an invitation or attendance. We will review all requests
            and get back to you soon.
          </p>
          <p className={`${styles.paragraph} max-w-6xl mt-6`}>
            For enquiries, please contact us via email at{" "}
            <a
              className="font-bold underline"
              href="mailto:admin@nigeriadestination2030.com"
            >
              admin@nigeriadestination2030.com
            </a>
          </p>
          <form
            action="https://formsubmit.co/admin@nigeriadestination2030.com"
            method="POST"
            className="mt-10"
          >
            <input
              type="hidden"
              name="_autoresponse"
              value="Thank you for requesting an invitation to our exclusive cultural experience on the sidelines of the United Nations General Assembly.  
Our team will review your request and get back to you soon with further information.
We look forward to the possibility of having you join us for this extraordinary event!"
            ></input>
            <div className="space-y-12 sm:space-y-16">
              <div>
                <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                    <label
                      htmlFor="first-name"
                      className={`${styles.paragraph}`}
                    >
                      First Name
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                      <input
                        required
                        id="first-name"
                        name="first-name"
                        type="text"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                    <label
                      htmlFor="last-name"
                      className={`${styles.paragraph}`}
                    >
                      Last Name
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                      <input
                        required
                        id="last-name"
                        name="last-name"
                        type="text"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                    <label htmlFor="email" className={`${styles.paragraph}`}>
                      Email Address
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                      <input
                        required
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                    <label htmlFor="country" className={`${styles.paragraph}`}>
                      Country
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                      <input
                        required
                        id="country"
                        name="country"
                        type="text"
                        autoComplete="country-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      ></input>
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                    <label
                      htmlFor="job-title"
                      className={`${styles.paragraph}`}
                    >
                      Job Title/Designation
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                      <input
                        required
                        id="job-title"
                        name="job-title"
                        type="text"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      ></input>
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                    <label
                      htmlFor="organization-name"
                      className={`${styles.paragraph}`}
                    >
                      Organization Name
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                      <input
                        required
                        id="organization-name"
                        name="organization-name"
                        type="text"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      ></input>
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                    <label
                      htmlFor="organization-type"
                      className={`${styles.paragraph}`}
                    >
                      Organization Type
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                      <input
                        required
                        id="organization-type"
                        name="organization-type"
                        type="text"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      ></input>
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:py-6">
                    <div>
                      {" "}
                      <label
                        htmlFor="requested-by"
                        className={`${styles.paragraph}`}
                      >
                        Requested By
                      </label>
                      <p
                        className={`${styles.paragraph} italic text-gray-700 !text-sm mt-4 pr-6`}
                      >
                        *If you are submitting a request on behalf of someone
                        else, please include both your name and the name of your
                        organization.
                      </p>
                    </div>

                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                      <input
                        required
                        id="requested-by"
                        name="requested-by"
                        type="text"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-lg sm:text-sm sm:leading-6"
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="submit"
                className={`${styles.paragraph} inline-flex justify-center rounded-md bg-dn-dark-green px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-dn-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dn-green`}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div></div>
    </main>
  );
};

export default page;
