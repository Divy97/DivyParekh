import React from "react";

import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        <Button
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",

            borderRadius: `calc(1.75rem* 0.96)`,
          }}
          className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
            <img
              src="/exp2.svg"
              alt="thumbnail"
              className="lg:w-32 md:w-20 w-16"
            />
            <div className="lg:ms-5">
              <h1 className="text-start text-xl md:text-2xl font-bold">
                FrontEnd Developer Intern
              </h1>
              <p className="text-start text-white-100 mt-3 font-extrabold">
                Crakcube {"   "} ◦ {"   "} Oct 2023 - Mar 2024
              </p>
              <p className="text-start text-white-100 mt-3 font-semibold">
                ◦ Developing an edu-social website, merging educational and
                social media features.
                <br />
                <br />◦ Played a key role in designing and implementing
                interactive functionalities. <br />
                <br />◦ Led the creation of a dynamic blog section, enabling
                students to write and earn within the platform.
              </p>
            </div>
          </div>
        </Button>
        <Button
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",

            borderRadius: `calc(1.75rem* 0.96)`,
          }}
          className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
            <img
              src="/exp1.svg"
              alt="card.thumbnail"
              className="lg:w-32 md:w-20 w-16"
            />
            <div className="lg:ms-5">
              <h1 className="text-start text-xl md:text-2xl font-bold">
                FrontEnd Developer Intern
              </h1>
              <p className="text-start text-white-100 mt-3 font-extrabold">
                Sanghvi Infosoft {"   "} ◦ {"   "} Jan 2023 - July 2023
              </p>
              <p className="text-start text-white-100 mt-3 font-semibold">
                ◦ Developed an innovative game-based learning website for
                student education.
                <br />
                <br />◦ Ensured optimal performance by implementing front-end
                resulting increase in website performance.
                <br />
                <br />◦ Essential contributions included the creation of dynamic
                templates and the implementation of drag-and-drop functionaliti
              </p>
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Experience;
