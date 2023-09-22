// import React from 'react'
// import {a} from "react-router-dom";
import React, { useState } from "react";
import Tour from "../../img/Tour.jpg";
// import TourOne from "../../img/TourOne.jpg"

function Navbar() {
  const [activeDiv, setActiveDiv] = useState(0);

  const handleButtonClick = (index) => {
    setActiveDiv(index);
  };

  return (
    <div>
      <header>
        <div className="">
          <img
            src={Tour}
            className="w-full h-[250px] min-[800px]:h-[300px] min-[1000px]:h-[320px] min-[1150px]:h-[350px] shadow-2xl "
            alt=""
          />
        </div>
        <nav className="mt-14 flex justify-center  font-bold text-[#183B83]">
          <div className="flex gap-4 justify-center items-center flex-wrap">
            <div className=" active:text-white text-center active:bg-[#183B83]  bg-transparent  active:rounded-full active:p-2  cursor-pointer">
              <a herf="/" onClick={() => handleButtonClick(0)}>
                Tour Details
              </a>
            </div>
            <div className=" active:text-white active:bg-[#183B83]  bg-transparent  active:rounded-full active:p-2   cursor-pointer">
              <a herf="/business" onClick={() => handleButtonClick(1)}>
                Inclusions & Exclusions
              </a>
            </div>
            <div className=" active:text-white active:bg-[#183B83] bg-transparent active:rounded-full active:p-2   cursor-pointer">
              <a herf="/entertainment" onClick={() => handleButtonClick(2)}>
                Terms & Conditions
              </a>
            </div>
            <div className=" active:text-white active:bg-[#183B83] p-2 px-3 rounded-full active:px-3 bg-transparent active:rounded-full active:p-2   cursor-pointer">
              <a herf="/health">Enquiry</a>
            </div>
          </div>
        </nav>
      </header>

      <section>
        <div
          className="flex bg-[#183B83] text-white m-6  p-6 min-[800px]:m-10 min-[800px]:p-8 min-[1000px]:m-12 min-[1100px]:mx-20 min-[1000px]:p-10 rounded-3xl"
          style={{ display: activeDiv === 0 ? "block" : "none" }}
        >
          <div className="">
            <h3 className="font-semibold  text-[3vw]  min-[500px]:text-[2.7vw] min-[800px]:text-[2.1vw] min-[1000px]:text-[1.3vw]">
              Day 1 : Arrive Tokyo
            </h3>
            <p className="my-2 text-[3.3vw] min-[500px]:text-[2.5vw] min-[800px]:text-[2vw] min-[1000px]:text-[1.2vw]">
              AM/PM Arrival Transfer by shared Limousine bus to hotel
              <br />
              Check in to Hotel 3 PM
              <br />
              Overnight at hotel (Tokyo Hotel)
            </p>
            <h3 className="font-semibold  text-[3vw]  min-[500px]:text-[2.7vw] min-[800px]:text-[2.1vw] min-[1000px]:text-[1.3vw]">
              Day 2 : Tokyo Afternoon (B)
            </h3>
            <p className="my-2 text-[3.3vw] min-[500px]:text-[2.5vw] min-[800px]:text-[2vw] min-[1000px]:text-[1.2vw]">
              Pick-up Service
              <br />
              Gather at designated locations (hotels in Tokyo) and board the bus
              bound for Hamamatsu Cho Bus Terminal.
              <br />
              <br />
              13:40 - Hamamatsucho Bus Terminal
              <br />
              Walk to the World Trade Center Building from Hamamatsucho Bus
              Terminal and visit the observation deck.
              <br />
              Seaside Top (observation deck) (20 min)
              <br />
              Enjoy a panoramic view of Tokyos bay area from a height of 152
              meters.
              <br />
              Imperial Palace Plaza (10 min)
              <br />
              Admire the view at this National Garden that was formerly a
              private garden of the Royal Family. Enjoy theview of Nijubashi
              Bridge, which is said to be the face of the Imperial Palace, as
              well as the view of theImperial Palace itself.
              <br />
              Ginza (drive-by)
              <br />
              From the window get a look at Ginza, where rows of luxury brand
              shops, and recently fast fashion retailers,line the streets.
              <br />
              Senso-ji Temple & Nakamise Shopping Street (45 min)
              <br />
              Senso-ji, Tokyos oldest temple, offers plenty to see including the
              bright red Kaminarimon Gate, a statue ofthegod of thunder, and a
              five-story pagoda. The bustling street known as "Nakamise"
              stretches for about 250mfrom Kaminarimon Gate to Senso-ji Temple
              and is filled with a plethora of shops.
              <br />
              Asakusa
              <br />
              Boat Cruise Sumida River Cruise (40 min)
              <br />
              Cruise around modern day Tokyo and experience the atmosphere of
              Edo.
              <br />
              Sumida River Cruise may be unavailable without prior notice due to
              river conditions. Changes in the itinerarywillbe provided by the
              guide.As the schedule of Sumida River Cruise will be altered
              during cherry blossom season (expected period: mid-March early
              April), arrival time may be delayed.
              <br />
              Overnight at hotel ( Tokyo Hotel)
            </p>

            <h3 className="font-semibold text-[3vw] min-[500px]:text-[2.7vw] min-[800px]:text-[2.1vw] min-[1000px]:text-[1.3vw]">
              Day 3: 1-Day Mt. Fuji & Hakone Tour (Return byMotorcoach) (No
              Lunch)
            </h3>
            <p className="my-2 text-[3.1vw] min-[500px]:text-[2.5vw] min-[800px]:text-[2vw] min-[1000px]:text-[1.2vw]">
              Pick-up Service
              <br />
              This tour can be joined from various meeting points mainly located
              at major hotels throughout Tokyo. - 09:00
              <br />
              Hamamatsucho Bus Terminal (120 min)
              <br />
              Depart from Hamamatsucho and head to Mt. Fuji by bus. (Chuo
              Expressway or Tomei Expressway)
              <br />
              Mt. Fuji 5th Station (30 min)
              <br />
              The bus will head up to the 5th Station along the Subaru Line. The
              5th Station is situated at 2,300 meters(7,546ft) above sea level.
              At this height, participants will be amazed atspectacular,
              breath-taking views fromabove theclouds.Lunch is not included in
              the tour.
              <br />
              Lake Ashi Cruise (15 min)
              <br />
              This crater lake along the southwest wall of the caldera of Mt.
              Hakone was formed by a powerfulvolcaniceruption nearly 3,000 years
              ago and provides postcard views of Mt. Fuji towering 30 km
              northwest.Admire thesuperb view of Mt. Fuji from aboard a ship.
              <br />
              Mt. Komag take Ropeway (50 min)
              <br />
              Take a 7-minute ropeway ride to the peak of Mt. Komagatake. A
              total of 50 minutes will be spent here,including time to walk
              around at the peak. Take a cableway ride up to the spiritual
              Hakone Shrine Mototsumiya(original shrine) that nestles at the
              mountaintop.
              <br />
              Hakone
              <br />
              Depart Hakone and return to Tokyo by bus.
              <br />
              The bus may make stops at hotels in the Hakone area and Odawara
              Station. 18:30 - 20:00
              <br />
              Shinjuku
              <br />
              Drop-off near Shinjuku Station West Exit
              <br />
              Overnight at hotel (Tokyo Hotel)
            </p>
            <h3 className="font-semibold text-[3vw] min-[500px]:text-[2.7vw] min-[800px]:text-[2.1vw] min-[1000px]:text-[1.3vw]">
              Day 4 : Full day free for relax & shopping
            </h3>
            <p className="my-2 text-[3.1vw] min-[500px]:text-[2.5vw] min-[800px]:text-[2vw] min-[1000px]:text-[1.2vw]">
              Overnight at hotel (Tokyo Hotel)
            </p>
            <h3 className="font-semibold text-[3vw] min-[500px]:text-[2.7vw] min-[800px]:text-[2.1vw] min-[1000px]:text-[1.3vw]">
              Day 5 : Departure
            </h3>
            <p className="my-2 text-[3.1vw] min-[500px]:text-[2.5vw] min-[800px]:text-[2vw] min-[1000px]:text-[1.2vw]">
              Free time till departure
              <br />
              Departure Transfer to Airport by shared Airport Limousine bus
              <br />
              Above Itinerary is a suggested Itinerary and not a Confirmed one
              as it can be Changed due operational conditionsor availability to
              SIC base tours.
              <br />
              Before confirmation of the Booking, Please cross check with us
              your Travel Detail
            </p>
          </div>
        </div>
      </section>

      <section>
        <div
          className="flex bg-[#183B83] text-white m-6  p-6 min-[800px]:m-10 min-[800px]:p-8 min-[1000px]:m-12 min-[1100px]:mx-20 min-[1000px]:p-10 rounded-3xl"
          style={{ display: activeDiv === 1 ? "block" : "none" }}
        >
          <div className="">
            <h3 className="font-semibold  text-[3vw]  min-[500px]:text-[2.7vw] min-[800px]:text-[2.1vw] min-[1000px]:text-[1.3vw]">
              Inclusions
            </h3>
            <p className="my-2 text-[3.3vw] min-[500px]:text-[2.5vw] min-[800px]:text-[2vw] min-[1000px]:text-[1.2vw]">
              • 04 nights Accommodation <br /> • English speaking guide during
              sightseeing on sic basis tour only
              <br /> • Meals: breakfast only basis
              <br /> • Transportation: a/c coach
              <br /> • Entrance tkt: all-inclusive as per itinerary
            </p>

            <h3 className="font-semibold text-[3vw] min-[500px]:text-[2.7vw] min-[800px]:text-[2.1vw] min-[1000px]:text-[1.3vw]">
              Exclusions
            </h3>
            <p className="my-2 text-[3.1vw] min-[500px]:text-[2.5vw] min-[800px]:text-[2vw] min-[1000px]:text-[1.2vw]">
              • Return airfare (International & Domestic) <br />
              • Visa Charges <br />
              • Travel Insurance <br />
              • Gratuities/Tipping. <br />
              • Any meals other than mentioned in itinerary <br />
              • Camera charges, water bottle or any expense of personal nature
              <br />
              • Entry fees to monuments and places other than package inclusion.
              <br />
              • Anything not mentioned in the package inclusions. <br />
              • Porter age at hotels and airports, tips, laundry, liquors, wine.
              <br />
              • All items of personal nature. <br />
              • Any cost arising due to natural calamities like landslides,
              roadblocks, earthquakes and any situation beyond company control.
              <br />
            </p>
          </div>
        </div>
      </section>

      <section>
        <div
          className="flex bg-[#183B83] text-white m-6  p-6 min-[800px]:m-10 min-[800px]:p-8 min-[1000px]:m-12 min-[1100px]:mx-20 min-[1000px]:p-10 rounded-3xl"
          style={{ display: activeDiv === 2 ? "block" : "none" }}
        >
          <div className="">
            <p className="my-2 text-[3.3vw] min-[500px]:text-[2.5vw] min-[800px]:text-[2vw] min-[1000px]:text-[1.2vw]">
              • For Package Quote Hotels Room Category Will Be In Base Category
              Only Unless Specified.
              <br />
              • Cancellation Policy Will Be Applicable As Per Hotel &
              Transporter’s Terms & Conditions Only & General Cancellation
              Policy Will Be As Under :-
              <br />
              <span className="font-semibold">
                45 days prior to arrival: 10% of the tour / service cost.
                <br />
                15 days prior to arrival: 25% of the tour / service cost.
                <br />
                07 days prior to arrival: 50% of the tour / service cost.
                <br />
                48 hours prior to arrival or no show: no refund.
                <br />
              </span>
              • Written Cancellation Will Accept On All Working Days, Except
              Sunday, Any Cancellation Sent On Sunday’s Will Be Considered On
              Next Working Day (Monday).
              <br />
              • Child Above 12 Years Will Be Considered As Adult Only.
              <br />
              • Any Cost Arising Due To Unforeseen Contingencies Such As Any
              Pandemic Situation, Flight Cancellations, Landslides, Road
              Blockage, Political Disturbances (Strikes), Etc. Such Expenses
              Will Have To Be Paid Directly.
              <br />
              • Payment Terms : 50% Payment For Confirmation & Balance 50%
              Payment Before 20 Days Prior To The Departure Date, If Service
              Falling Within 20 Days Then 100% Advance Payment At The Time Of
              Confirmation.
              <br />
              • Hotels Rooms Confirmation Is Subject To Availability.
              <br />
              • If Above Quote Hotels Not Available Then Similar Hotels Options
              Will Be Offered.
              <br />
              • Hotel Check Inn & Check Out Policy Will Be Applicable, Rooms
              Will Not Be Allotted Before Check Inn Timings Of Hotel.
              <br />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
