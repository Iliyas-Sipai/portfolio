import js1 from "../../assets/js-pro1.png";
import js2 from "../../assets/js-pro2.png";
import js3 from "../../assets/js-pro3.png";
import js4 from "../../assets/js-pro4.png";
import js5 from "../../assets/js-pro11.png";
import js6 from "../../assets/js-pro6.png";
import js7 from "../../assets/js-pro7.png";
import js8 from "../../assets/js-pro8.png";
import js9 from "../../assets/js-pro9.png";
import js10 from "../../assets/js-pro10.png";

import css1 from "../../assets/csspro-1.png";
import css2 from "../../assets/csspro-2.png";
import css3 from "../../assets/csspro-3.png";
import css4 from "../../assets/csspro-4.png";
import css5 from "../../assets/csspro-5.png";
import css6 from "../../assets/csspro-6.png";
import css7 from "../../assets/csspro-7.png";
import css8 from "../../assets/csspro-8.png";

const content = {
  javascript: [
    {
      title: "Timer",
      imageSrc: js1,
      sourceCodeLink:
        "https://github.com/Iliyas-Sipai/Javascript-project/tree/main/project9",
      visitPageLink: "https://javascript-project-m6oo.vercel.app/",
    },
    {
      title: "Calculator",
      imageSrc: js2,
      sourceCodeLink: "https://github.com/Iliyas-Sipai/calculator",
      visitPageLink: "https://calculator-woad-eight-22.vercel.app/",
    },
    {
      title: "Toggle Button",
      imageSrc: js3,
      sourceCodeLink: "https://github.com/Iliyas-Sipai/Toggle-button",
      visitPageLink: "https://toggle-button-vercelapp.vercel.app/",
    },
    {
      title: "Add Friend & Remove",
      imageSrc: js4,
      sourceCodeLink:
        "https://github.com/Iliyas-Sipai/Javascript-project/tree/main/project1",
      visitPageLink: "https://javascript-project-9424.vercel.app/",
    },
    {
      title: "Password ganerator",
      imageSrc: js8,
      sourceCodeLink:
        "https://github.com/Iliyas-Sipai/Javascript-project/tree/main/Password-janaretor",
      visitPageLink: "https://password-janaretor.vercel.app/",
    },
    {
      title: "like Page",
      imageSrc: js7,
      sourceCodeLink:
        "https://github.com/Iliyas-Sipai/Javascript-project/tree/main/project2",
      visitPageLink: "https://project-you-tube-sigma.vercel.app/",
    },
    ,
    {
      title: "Mini Calendar",
      imageSrc: js9,
      sourceCodeLink: "https://github.com/Iliyas-Sipai/mini-calendar",
      visitPageLink: "https://mini-calendar-ecru.vercel.app/",
    },
    {
      title: "Random Color ganerator",
      imageSrc: js6,
      sourceCodeLink:
        "https://github.com/Iliyas-Sipai/Javascript-project/tree/main/project11",
      visitPageLink: "https://javascript-project-il1l.vercel.app/",
    },
    {
      title: "BG Change",
      imageSrc: js5,
      sourceCodeLink: "https://github.com/Iliyas-Sipai/background-change.",
      visitPageLink: "https://background-change-gules.vercel.app/",
    },
  ],
  css: [
    {
      title: "Facebook Login Clone",
      imageSrc: css1,
      sourceCodeLink:
        "https://github.com/Iliyas-Sipai/CSS-Project/tree/new/facebook",
      visitPageLink: "https://css-project-lilac.vercel.app/",
    },
    {
      title: "Parallax Website",
      imageSrc: css2,
      sourceCodeLink:
        "https://github.com/Iliyas-Sipai/CSS-Project/tree/new/project3",
      visitPageLink: "https://css-project-2x4b.vercel.app/",
    },
    {
      title: "Music Web Clone",
      imageSrc: css3,
      sourceCodeLink:
        "https://github.com/Iliyas-Sipai/CSS-Project/tree/new/project6",
      visitPageLink: "https://css-project-b91z.vercel.app/",
    },
    {
      title: "Hover or Not",
      imageSrc: css4,
      sourceCodeLink:
        "https://github.com/Iliyas-Sipai/CSS-Project/tree/main/hover-or-not",
      visitPageLink: "https://css-project-mdd8.vercel.app/",
    },
    {
      title: "JS Documentation",
      imageSrc: css5,
      sourceCodeLink:
        "https://github.com/Iliyas-Sipai/CSS-Project/tree/new/project8",
      visitPageLink: "https://css-project-c1xd.vercel.app/#Introduction",
    },
    {
      title: "Netflix Login Page",
      imageSrc: css6,
      sourceCodeLink:
        "https://github.com/Iliyas-Sipai/CSS-Project/tree/new/Netflic%20login%20page",
      visitPageLink: "https://css-project-frn4.vercel.app/",
    },
    {
      title: "Border Animation",
      imageSrc: css7,
      sourceCodeLink:
        "https://github.com/Iliyas-Sipai/CSS-Project/tree/main/text%20border%20animation",
      visitPageLink: "https://css-project-29cl.vercel.app/",
    },
    {
      title: "Responsive Card",
      imageSrc: css8,
      sourceCodeLink:
        "https://github.com/Iliyas-Sipai/CSS-Project/tree/main/card",
      visitPageLink: "https://css-project-b6h9.vercel.app/",
    },
  ],
 react: [
    // {
    // },
  ],
};
// *************//////////////////////////*//********************************************/////*//// */

import { useState } from "react";
import "./MyWork.css";

const Project = () => {
  const [activeTab, setActiveTab] = useState("javascript");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div id="work" className="projects-container">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-tab-group">
        {Object.keys(content).map((tab) => (
          <button
            key={tab}
            className={`projects-tab-button ${
              activeTab === tab ? "active" : ""
            }`}
            onClick={() => handleTabChange(tab)}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {content[activeTab].map((item, index) => (
          <div key={index} className="project-card">
            <h4 className="project-title">{item.title}</h4>
            <img
              src={item.imageSrc}
              alt={item.title}
              className="project-image"
            />
            <div className="project-links">
              <a
                href={item.sourceCodeLink}
                target="_blank"
                className=" button-17"
              >
                Source Code
              </a>
              <a
                href={item.visitPageLink}
                target="_blank"
                className=" button-17"
              >
                Visit Page
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
