import bebranded from "../../assets/img/portfolio/angularjs/bebranded.jpg";
import JustPlan from "../../assets/img/portfolio/Wordpress/JustPlan.png";
import dalzielracing from "../../assets/img/portfolio/Wordpress/dalzielracing.jpg";
import dsolar from "../../assets/img/portfolio/Wordpress/dsolar.jpg";

import Image2 from "../../assets/img/portfolio/project-2.jpg";
import Image3 from "../../assets/img/portfolio/project-3.jpg";
import Image4 from "../../assets/img/portfolio/project-4.jpg";
import Image5 from "../../assets/img/portfolio/project-5.jpg";
import Image6 from "../../assets/img/portfolio/project-6.jpg";
import Image7 from "../../assets/img/portfolio/project-7.jpg";
import Image8 from "../../assets/img/portfolio/project-8.jpg";
import Image9 from "../../assets/img/portfolio/project-9.jpg";

const PortfolioData = [
  // Angularjs Project
  {
    id: 1,
    type: "mockup project",
    model_id:1,
    image: bebranded,
    tag: ["Angularjs"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        client: "Envato",
        language: "Angular JS, Node JS, HTML, CSS",
        preview: "www.bebranded.com",
        link: "https://www.bebranded.com.au/",
      },
    ],
  },
  // Wordpress Project
  {
    id: 55,
    model_id:1,
    type: "saas project",
    image: JustPlan,
    tag: ["Wordpress","htmldesign"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "just plan",
        client: "Themeforest",
        language: "Wordpress,WooCommerce,Javascript,jQuery,HTML,CSS",
        preview: "www.just-plan.com",
        link: "https://just-plan.online/",
      },
    ],
  },
  {
    id: 5,
    model_id:1,
    type: "saas project",
    image: dalzielracing,
    tag: ["Wordpress"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Dalziel Racing",
        client: "Themeforest",
        language: "Wordpress,Woocommerce, HTML, CSS,Javascript,jQuery",
        preview: "www.dalzielracing.com",
        link: "https://dalzielracing.com",
      },
    ],
  },
  {
    id: 6,
    type: "saas project",
    model_id:1,
    image: dsolar,
    tag: ["Wordpress"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "D-solar",
        client: "Themeforest",
        language: "Wordpress, Divi Theme, HTML, CSS, Javascript,jQuery",
        preview: "www.dsolar.com",
        link: "https://dsolar.com.au/",
      },
    ],
  },

  // {
  //   id: 2,
  //   model_id:1,
  //   type: "youtube project",
  //   image: Image2,
  //   tag: ["Wordpress","htmldesign"],
  //   delayAnimation: "100",
  //   modalDetails: [
  //     {
  //       project: "video",
  //       client: "Videohive",
  //       language: " Adobe After Effects",
  //       preview: "www.videohive.net",
  //       link: "https://www.videohive.net",
  //     },
  //   ],
  // },
  {
    id: 3,
    model_id:1,
    type: "slider project",
    image: Image3,
    tag: ["htmldesign"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "Themeforest",
        language: " HTML, CSS, Javascript",
        preview: "www.envato.com",
        link: "https://www.envato.com",
      },
    ],
  },
  {
    id: 4,
    model_id:1,
    type: "local project",
    image: Image4,
    tag: ["logo", "video"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "video",
        client: "Videohive",
        language: " Adobe After Effects",
        preview: "www.videohive.net",
        link: "https://www.videohive.net",
      },
    ],
  },
  {
    id: 7,
    model_id:1,
    type: "facebook project",
    image: Image7,
    tag: ["logo"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        client: "Facebook",
        language: "HTML, CSS, Javascript",
        preview: "www.facebook.com",
        link: "https://www.facebook.com/ibthemes",
      },
    ],
  },
  {
    id: 8,
    model_id:1,
    type: "dribble project",
    image: Image8,
    tag: ["graphic design"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Website",
        client: "Dribbble",
        language: "HTML, CSS, Javascript",
        preview: "www.dribbble.com",
        link: "https://dribbble.com/ib-themes",
      },
    ],
  },
  {
    id: 9,
    model_id:1,
    type: "behence project",
    image: Image9,
    tag: ["graphic design", "mockup"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "Behance",
        language: "HTML, CSS, Javascript",
        preview: "www.behance.com",
        link: "https://www.behance.net/ib-themes",
      },
    ],
  },
];

export default PortfolioData;
