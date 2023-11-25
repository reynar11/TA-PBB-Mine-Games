import Header from "../components/Header";
import Meta from "../components/Meta";
import Footer from "../components/Footer";
import Image from "next/image";
import steam from "../public/assets/steam.png";
import epic from "../public/assets/epicgames.png";
import riot from "../public/assets/riot.png";
import origin from "../public/assets/origin.png";
import rockstar from "../public/assets/rockstar.png";
import battlenet from "../public/assets/batlenett.png";
import Navbar from "../components/Navbar";

export default function Tools() {
  return (
    <div>
      <Meta title="Game Digital Platform Tools" />
      <Header />
      <section class="text-gray-600 body-font bg-gray-900">
        <div class="container px-5 py-5 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 text-white">
              Game Platform
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s text-slate-200">
            This is a platform of supporters and developers of games that are channeled on Mine Games, where players can find out more about each developer who strives to create games that you can play.
            </p>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div class="p-4 md:w-1/3 flex flex-col text-justify items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-900 text-indigo-500 mb-5 flex-shrink-0">
                <Image alt="icon" src={steam} className="rounded-full" />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg text-center title-font font-medium mb-3 text-white">
                  Steam
                </h2>
                <p class="leading-relaxed text-base text-slate-200">
                Steam is a video game digital distribution service by Valve. It was launched as a standalone software client in September 2003 as a way for Valve to provide automatic updates for their games, and expanded to include games from third-party publishers.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-justify items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-900 text-indigo-500 mb-5 flex-shrink-0">
                <Image alt="icon" src={epic} className="rounded-full" />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg text-center title-font font-medium mb-3 text-white">
                  Epic Games
                </h2>
                <p class="leading-relaxed text-base text-slate-200">
                Epic Games develops the Unreal Engine, a commercially available game engine that also supports internally developed video games, such as Fortnite and the Unreal series, Gears of War, and Infinity Blade.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-justify items-center">
              <div class="bg-gray-900 w-20 h-20 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-5 flex-shrink-0">
                <Image alt="icon" src={riot} className="rounded-full" />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg text-center title-font font-medium mb-3 text-white">
                  Riot Games
                </h2>
                <p class="leading-relaxed text-base text-slate-200">
                Riot Games, Inc. is an American electronic sports tournament organizer, video game developer and video game publisher based in western Los Angeles, California. The company was formed in September 2006 to develop League of Legends, a multiplayer online battle arena game.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-justify items-center">
              <div class=" w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-900 text-indigo-500 mb-5 flex-shrink-0 ">
                <Image alt="icon" src={battlenet} className="rounded-full " />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg text-center title-font font-medium mb-3 text-white">
                  Battle.net
                </h2>
                <p class="leading-relaxed text-base text-slate-200">
                Battle.net is an online video game presented by Blizzard Entertainment. The game was launched in January 1997 with the release of Blizzard's action-RPG Diablo. Battle.net was the first online video game to be incorporated directly into the game in use.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-justify items-center">
              <div class="bg-gray-900 w-20 h-20 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-5 flex-shrink-0">
                <Image alt="icon" src={origin} className="rounded-full" />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg text-center title-font font-medium mb-3 text-white">
                  Origin
                </h2>
                <p class="leading-relaxed text-base text-slate-200">
                Origin is a digital distribution platform developed by Electronic Arts for purchasing and playing video games. The platform's software client is available for personal computers and mobile platforms.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-justify items-center">
              <div class="bg-gray-900 w-20 h-20 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-5 flex-shrink-0">
                <Image alt="icon" src={rockstar} className="rounded-full " />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg text-center title-font font-medium mb-3 text-white">
                  Rockstar
                </h2>
                <p class="leading-relaxed text-base text-slate-200">
                Rockstar Games, Inc. is an American video game publisher based in New York City.
                </p>
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
