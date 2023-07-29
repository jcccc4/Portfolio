import React from "react";

type Props = {};

export default function Experience({}: Props) {
  return (
    <div id="experience" className="pt-10">
      <h2>EXPERIENCE</h2>
      <div>
        <div className="mt-4">
          <div className="flex justify-between">
            <h3 className="flex flex-col">
              <span>Full Stack Developer </span>
              <span className="font-medium">Manulife</span>
            </h3>
            <h3>2022-PRESENT</h3>
          </div>

          <p className="mt-2 max-w-[540px] ">
            Leading technology migrations, addressed medium to Snyk issues,
            ensuring compliance with regulations, enhancing user experiences,
            identifying and resolving monitoring gaps, and effectively managing
            software releases.
          </p>
        </div>
        <div className="mt-6 ">
          <div className="flex justify-between">
            <h3 className="flex flex-col">
              <span>PCB Layout Engineer</span>
              <span className="font-medium">Kyocera</span>
            </h3>
            <h3>2020-2021</h3>
          </div>

          <p className="mt-2 max-w-[540px]">
            Designed and created PCB layouts using Zuken CR5000 and Cadence
            Allegro. Incorporated engineering changes, provided technical
            support, and maintained departmental procedures, standards, and
            guidelines.
          </p>
        </div>
      </div>
      
    </div>
  );
}
