import React from "react";
import Cap from "../img/Cap.png";
import Tourist from "../img/Tourist.png";
import SignBord from "../img/SignBoard.png";
import Map from "../img/Map.png";
import Hotel from "../img/Hotel.png";
import Itenaries from "../img/Itenaries.png";
import Road from "../img/Road.png";
import Transport from "../img/Transport.png";
import Traveller from "../img/Traveller.png";
import Unique from "../img/Unique.png";

function About() {
  return (
    <div className="Page1 mx-6 lg:mx-20 ">
      <div className="flex flex-col justify-center  gap-6 ">
        <div className="lg:flex lg:gap-8 ">
          <div className="">
            <div className="mt-10 lg:mt-16 flex left1 tracking-[2px] font-semibold mb-10">
              <span class="text-[7vw]  text-[#183B83] mr-6 border-l-4  border-[#183B83] py-2 lg:text-[3vw] animated-text4" />
              <h1 className="text-[5vw] text-[#183B83] font-semibold left1  tracking-[2px] lg:text-[2.1vw]">
                About Us
              </h1>
            </div>

            <div className="text-[10vw] lg:text-[5.5vw] mt-4  text-[#183B83] font-bold ">
              <h1 className="mb-[-16px] up1 ">
                <img
                  src={Cap}
                  className="left animated-text  h-[%] w-[12%] z-10 ml-[-26px] mb-[-44px]  relative "
                  alt="logo"
                />
                Why
              </h1>
              <h1 className="up2 ">Blue Escape?</h1>
            </div>
            <div className="text-[5vw] lg:text-[2vw] text-[#183c83] font-semibold  lg:w-[550px]">
              <p className="typewriter">
                Welcome,<span className="typewriter1"></span>
              </p>
              <p className="animated-text ">
                to the world of Blue Escape Holidays, where we transform your
                travel dreams into unforgettable realities.
              </p>
            </div>
            <div className=" animated-text mt-[5%] mb-10">
              <input
                type="button"
                value="LERN MORE"
                className="bg-[#F2B725] hover:bg-[rgb(247,179,50)] cursor-pointer shadow-md  tracking-[2px] lg:text-[1.3vw] rounded-full text-[3vw] text-[#183c83] hover:border-[2px] border-[1px]   border-[#183B83] hover:border-[#183B83] font-semibold p-[1%] px-[4%] "
              />
            </div>
          </div>
          <div className="mt-[9%] lg:mt-[15%] xl:mt-[11%] 2xl-[14%] ">
            <div className="flex justify-center animated-text1 ">
              <img
                src={Tourist}
                className=" h-[56%]  w-[58%] ml-[px]  z-10 right  "
                alt="logo"
              />
              <img
                src={SignBord}
                className=" h-60%] w-[58%] ml-[-50px] left "
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="Page2 my-10  ">
        <div className="text-[#183B83] ">
          <h2 className=" text-[6vw] sm:text-[4.3vw] md:text-[3.6vw] lg:text-[3vw] xl:[2.2vw] 2xl:text-[2vw] font-semibold">
            At Blue Escape Holidays,
          </h2>
          <p className="text-[3.5vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[1.6vw] xl:[1vw] 2xl:text-[0.8vw]">
            we understand that discerning travelers seek more than just a
            vacation; they yearn for immersive experiences that touch the heart
            and soul.
          </p>
          <p className="text-[3.5vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[1.6vw] xl:[1vw] 2xl:text-[0.8vw]">
            That's why we specialize in crafting bespoke journeys across the
            globe, meticulously curated to cater to your every desire.
          </p>
        </div>

        <div className="flex justify-between gap-4">
          <div className="text-center rounded-3xl px-6 py-4  bg-[#183B83] text-white">
            <div className="">
              <div className="flex justify-center my-4">
                <img src={Hotel} alt="" srcset="" className="w-16 " />
              </div>
                <h3 className="mx-16  ">HANDPICKED HOTELS</h3>
              <p className="w-[300px] text-[1vw] ">
                Our commitment to excellence is evident in every facet of our
                service. We handpick hotels that are more than just places to
                stay; they are havens of luxury, comfort, and character. Each
                property is chosen with utmost care to ensure it aligns with
                your preferences, whether you seek opulence, serenity, or
                authenticity.
              </p>
            </div>
          </div>
          <div className="text-center rounded-3xl px-6 py-4  bg-[#183B83] text-white">
            <div className="">
              <div className="flex justify-center my-4">
                <img src={Hotel} alt="" srcset="" className="w-16 " />
              </div>
                <h3 className="mx-16  ">HANDPICKED HOTELS</h3>
              <p className="w-[300px] text-[1vw] ">
                Our commitment to excellence is evident in every facet of our
                service. We handpick hotels that are more than just places to
                stay; they are havens of luxury, comfort, and character. Each
                property is chosen with utmost care to ensure it aligns with
                your preferences, whether you seek opulence, serenity, or
                authenticity.
              </p>
            </div>
          </div>
          <div className="text-center rounded-3xl px-6 py-4  bg-[#183B83] text-white">
            <div className="">
              <div className="flex justify-center my-4">
                <img src={Hotel} alt="" srcset="" className="w-16 " />
              </div>
                <h3 className="mx-16  ">HANDPICKED HOTELS</h3>
              <p className="w-[300px] text-[1vw] ">
                Our commitment to excellence is evident in every facet of our
                service. We handpick hotels that are more than just places to
                stay; they are havens of luxury, comfort, and character. Each
                property is chosen with utmost care to ensure it aligns with
                your preferences, whether you seek opulence, serenity, or
                authenticity.
              </p>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default About;
