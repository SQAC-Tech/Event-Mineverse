import React from "react";
import brick from "../assets/brick.svg";
import fc from "../assets/fc.svg";
import phase1 from "../assets/phase1.svg";
import phase2 from "../assets/phase2.png";
import regopen from "../assets/regopen.svg";
import eventday from "../assets/eventday.svg";
import slantbrick from "../assets/slantbrick.svg";
import slantbrick1 from "../assets/slantbrick1.svg";
import creeperright from "../assets/creeperright.svg";
import creeperleft from "../assets/creeperleft.svg";
import timeline from "../assets/timeline.png";

export default function TimelineLayout() {
  return (
    <div className="pt-6 pb-12 flex flex-col items-center px-3 sm:px-6">
      {/* Timeline */}
      <img
        src={timeline}
        alt="Timeline"
        className="w-[60%] max-w-[300px] mb-8 shadow-xl rounded-lg"
      />

      {/* Registration */}
      <img
        src={regopen}
        alt="Registration Open"
        className="w-[60%] max-w-[256px] mb-2 shadow-lg"
      />

      {/* Brick */}
      <img
        src={brick}
        alt="Brick"
        className="w-[15%] max-w-[64px] mb-4"
      />

      {/* Event Day */}
      <img
        src={eventday}
        alt="Event Day"
        className="w-[60%] max-w-[256px] mb-4 shadow-lg"
      />

      {/* Slant Bricks */}
      <div className="relative w-full max-w-[500px] h-[80px] mx-auto mt-2">
        <img
          src={slantbrick}
          alt="Slant Brick Left"
          className="absolute left-[10%] top-0 w-[45%] max-w-[208px]"
        />
        <img
          src={slantbrick1}
          alt="Slant Brick Right"
          className="absolute right-[10%] top-0 w-[45%] max-w-[208px]"
        />
      </div>

      {/* Creepers & Phases (stay in row on all screens) */}
      <div className="flex justify-between items-start w-full max-w-[900px] mx-auto mt-10 px-2">
        <img
          src={creeperleft}
          alt="Creeper Left"
          className="w-[15%] max-w-[112px] -mt-6 hidden md:block"
        />
        <img
          src={phase1}
          alt="Phase 1"
          className="w-[40%] max-w-[224px] -mt-4"
        />
        <img
          src={phase2}
          alt="Phase 2"
          className="w-[40%] max-w-[224px] -mt-4"
        />
        <img
          src={creeperright}
          alt="Creeper Right"
          className="w-[15%] max-w-[112px] -mt-6 hidden md:block"
        />
      </div>

      {/* Final Section */}
      <div className="relative w-full flex flex-col items-center mt-10 mb-6">
        <div className="flex justify-center items-center gap-0 mb-10">
          <img
            src={slantbrick1}
            alt="Slant Brick Left"
            className="w-[40%] max-w-[224px]"
          />
          <img
            src={slantbrick}
            alt="Slant Brick Right"
            className="w-[40%] max-w-[224px]"
          />
        </div>

        <img
          src={fc}
          alt="Felicitation Ceremony"
          className="w-[80%] max-w-[360px] shadow-xl rounded-lg"
        />
      </div>
    </div>
  );
}
