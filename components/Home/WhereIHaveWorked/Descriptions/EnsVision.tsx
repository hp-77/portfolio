import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function EnsVision() {
  const tasks = [
    {
      text: "Developed scalable web applications using the MERN (MongoDB, Express.js, React, Node.js) stack, enhancing user experience and performance.",
      keywords: ["scalable", "web", "applications", "MERN", "performance"],
    },
    {
      text: "Leveraged Next.js for server-side rendering and efficient client-side navigation, ensuring fast and responsive web applications.",
      keywords: ["Next.js", "server-side rendering", "efficient"],
    },
    {
      text: "Implemented website design and enhanced interactivity.",
      keywords: ["website design"],
    },
    {
      text: "Implemented Docker containers for seamless deployment and management of application environments, optimizing development workflows.",
      keywords: ["Docker", "optimizing"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Engineer Intern <span className="text-AAsecondary">@ Integra works</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">May 2024 - July 2024</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.integra.works/index.html", "_blank")}
          >
            www.integra.works.com
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
