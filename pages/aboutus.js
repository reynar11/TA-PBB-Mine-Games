import Image from "next/image";
import Header from "../components/Header";
import Meta from "../components/Meta";
import Footer from "../components/Footer";
import banner from "../public/assets/games kumpulan.jpg";
import mypic from "../public/assets/Foto - Reynara.jpg";
import Navbar from "../components/Navbar";

export default function Aboutus() {
  return (
    <div>
      <Meta title="About Us" />
      <Header />
      <section class="text-gray-600 body-font bg-gray-900">
        <div class="container px-5 py-16 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div class="rounded-lg h-64 overflow-hidden">
              <Image
                alt="banner"
                class="object-cover object-center h-full w-full"
                width="2000"
                height="2000"
                src={banner}
              />
            </div>
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-900 text-gray-400 ">
                  <Image
                    alt="profile"
                    className="rounded-full object-cover"
                    height={400}
                    width={400}
                    src={mypic}
                  />
                </div>
                <div class="flex flex-col items-center text-center justify-center">
                  <h1 class="font-medium title-font mt-4 text-gray-900 text-lg text-white">
                    Hiazintus Bagas Reynara T.
                  </h1>
                  <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p class="text-base text-slate-200">
                  Humans who struggle to find identity and sustenance.
                  </p>
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p class="leading-relaxed text-lg mb-4 text-slate-200">
                An ordinary man who can't tell fortunes like a fortune teller, doesn't have superpowers like Superman, doesn't have wealth like Batman. But only a student who struggles to pursue dreams and success for a brighter and happier life for yourself and your family in the future.
                </p>
                <a class="text-indigo-500 inline-flex items-center">
                  Learn More
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Navbar />
      <Footer />
    </div>
  );
}
