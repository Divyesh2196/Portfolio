import React from "react";

const experienceContent = [
  {
    year: " 2022 - Present",
    position: "Front-end Developer & Web Developer",
    compnayName: "Freelancer ",
    details: `With over 5 years of experience in Full Stack Web Development, I have expertise in MERN Stack as well as the LAMP stack. I am proficient in both Front-end and Back-end Frameworks and I'm also well versed in API integration.`,
  },

  {
    year: " 2020 - 2022",
    position: "Web Developer",
    compnayName: "Resolute Solutions pte ltd ",
    details: `Utilized HTML , CSS , bootstrap, Javascript and jQuery to create 100 responsive landing pages for both company
    and client.
    Designed dynamic and browser , tablet and phone compatible pages using HTML5,CSS3,Bootstrap, jQuery and
    Javascript.
    Build and Implement Front-end web applications that integrate with back-end services and third party partners.
    Strong command of javascript.
    Interact with Internal cutomers.
    Create a website with custom theme in WordPress.
    Create a website with child theme in WordPress.`,
  },
  
 
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
