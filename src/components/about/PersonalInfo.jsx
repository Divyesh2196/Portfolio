import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Divyesh" },
  { meta: "last name", metaInfo: "Chandegara" },
  { meta: "Age", metaInfo: "28 Years" },
  { meta: "Nationality", metaInfo: "Indian" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Surat,Gujarat,India" },
  { meta: "phone", metaInfo: "+91 8758000222" },
  { meta: "Email", metaInfo: "divyeshprajapati212033@gmail.com" },
  { meta: "Skype", metaInfo: "live:.cid.cf6c993b97547909" },
  { meta: "langages", metaInfo: "Gujarati,Hindi,English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
