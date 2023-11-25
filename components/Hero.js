import React from "react";
import Image from "next/image";
import warframe from "../public/assets/game platform.jpg";
import Link from "next/link";

export default function Hero() {
  return (
    <div>
      <section class="bg-gray-900 text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="lg:w-2/3 mx-auto">
            <div class="flex flex-wrap w-full  py-32 px-10 relative mb-4 rounded">
              <Image
                alt="gallery"
                class="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                src="https://vncojewellery.com/artikel/wp-content/uploads/2019/08/Di-manakah-Tambang-Berlian-Terbesar-di-Dunia-Berada.jpg"
                width={1000}
                height={1000}
              />
              <div class="text-center relative z-10 w-full">
                <h2 class="text-2xl text-gray-900 font-medium title-font mb-2 text-white hover:text-violet-700">
                  Games List
                </h2>
                <p class="leading-relaxed text-slate-200">
                A vast collection of quality games like a diamond mine
                </p>
                <Link
                  href="/gamelist"
                  class="mt-3 text-indigo-500 inline-flex items-center "
                >
                  Find More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div class="flex flex-wrap -mx-2">
              <div class="px-2 w-1/2">
                <div class="flex flex-wrap w-full  sm:py-24 py-16 sm:px-10 px-6 relative rounded">
                  <Image
                    alt="gallery"
                    class="w-full h-full object-center block opacity-25 absolute inset-0"
                    src={warframe}
                    width={1000}
                    height={1000}
                  />
                  <div class="text-center relative z-10 w-full">
                    <h2 class="text-xl text-gray-900 font-medium title-font mb-2 text-white hover:text-violet-700">
                      Games Platform
                    </h2>
                    <p class="leading-relaxed text-slate-200">
                    Provides a wide selection of developers and player support in play
                    </p>
                    <Link
                      href="/platform"
                      class="mt-3 text-indigo-500 inline-flex items-center"
                    >
                      Find More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div class="px-2 w-1/2">
                <div class="flex flex-wrap w-full  sm:py-24 py-16 sm:px-10 px-6 relative rounded">
                  <Image
                    alt="gallery"
                    class="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                    src="https://media.gq-magazine.co.uk/photos/645b5c3c8223a5c3801b8b26/16:9/w_1280,c_limit/100-best-games-hp-b.jpgw"
                    width={80}
                    height={80}
                  />
                  <div class="text-center relative z-10 w-full">
                    <h2 class="text-xl text-gray-900 font-medium title-font mb-2 text-white hover:text-violet-700">
                      About Us
                    </h2>
                    <p class="leading-relaxed text-slate-200">
                    A simple information about the developer of "Mine Games"
                    </p>
                    <Link
                      href="/aboutus"
                      class="mt-3 text-indigo-500 inline-flex items-center"
                    >
                      Find More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
