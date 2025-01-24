import React from "react";

const educationContent = [
  {
    year: "2016 - 2020",
    degree: "Front-end Developer",
    institute: "salient templates",
    details: `Designed dynamic and browser , tablet and phone compatible pages using HTML5,CSS3,Bootstrap, jQuery and
    Javascript.
    Develop custome, dynamic user experinces using html5,css 3, javascript and jquery.
    Work with designers to obtain and create all visual assets necessary for website products and to create
    prototypes
    Work closely with back-end developers to facilitate user experience on front-end using dynamic data.
    Strong command of javascript.
    Worked with the latest versing of SASS and HTML5`,
  },
  ,{
    year: "2017",
    degree: "ENGINEERING DEGREE",
    institute: "Shri Shambhubhai V. Patel College of Computer Science and Business Management",
    details: `  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
        adipisicing elit`,
  },
  {
    year: "2014",
    degree: "Higher Secondary School ",
    institute: "KIEV UNIVERSITY",
    details: `Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol
        elit, tempor incididunt`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
