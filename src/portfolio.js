/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000, // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true, // Set to false to use static SVG
};

const greeting = {
  username: "Faisal Iqbal",
  title: "Hi all, I'm Faisal",
  subTitle: emoji(
    "I’m a Frontend Developer who thrives on building sleek, high-performance web and mobile apps with JavaScript, TypeScript, React.js, Vue.js, React Native, and modern tech stacks that bring ideas to life"
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/iqbalfaisal",
  linkedin: "https://www.linkedin.com/in/thefaisaliqbal/",
  gmail: "7faisaliqbal@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Creative Frontend Developer Crafting Beautiful, Fast & User-Friendly Experiences",
  skills: [
    emoji(
      "⚡ Design and build sleek, responsive, and interactive user interfaces for web and mobile apps using cutting-edge frontend technologies"
    ),
    emoji(
      "⚡ Create lightning-fast Progressive Web Apps (PWAs) and Single Page Applications (SPAs) for seamless, app-like user experiences"
    ),
    emoji(
      "⚡ Integrate powerful third-party services like Firebase, AWS, and DigitalOcean to supercharge applications with real-time features and scalability"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "React-Native",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "React-Js",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "Vue-Js",
      fontAwesomeClassname: "fab fa-vuejs",
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git",
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java",
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "yarn",
      fontAwesomeClassname: "fab fa-yarn",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of the Punjab",
      logo: require("./assets/images/punjab.jpeg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2014 - Jun 2018",
      desc: "CGPA: 3.05 / 4.0",
      descBullets: [],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "JavaScript", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "React-Native",
      progressPercentage: "90%",
    },
    {
      Stack: "React-Js",
      progressPercentage: "80%",
    },
    {
      Stack: "Vue-Js",
      progressPercentage: "75%",
    },
    {
      Stack: "TypeScript",
      progressPercentage: "80%",
    },
    {
      Stack: "Node-Js",
      progressPercentage: "70%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Sr. Consultant Developer",
      company: "Thoughtworks",
      companylogo: require("./assets/images/tw.png"),
      date: "Aug 2023 – Present",
      desc: "https://www.thoughtworks.com/",
      descBullets: [
        "Contributed to various client projects while embodying the company's values of transparency, collaboration, and social justice",
        "Collaborated closely with clients to understand their business requirements and user needs, facilitating workshops and user testing sessions to gather feedback and iterate on mobile app designs, resulting in high client satisfaction.",
        "Provided technical leadership within project teams, guiding junior developers in best practices for mobile app development, conducting code reviews, and making architectural decisions to ensure scalability and maintainability.",
        "Encountered a performance bottleneck in a mobile application and implemented a caching mechanism that reduced load times by 30%, showcasing problem-solving skills and a proactive approach to optimising app performance.",
      ],
    },
    {
      role: "Senior Dev Engineer",
      company: "Mashreq",
      companylogo: require("./assets/images/mashreq.jpeg"),
      date: "Dec 2022 – Sept 2023",
      desc: "https://www.mashreq.com/",
      descBullets: [
        "Spearheaded the development of proof-of-concept (POC) projects, demonstrating innovation and feasibility of new ideas. ",
        "Provided technical leadership to a team of developers, conducting code reviews and mentoring junior team members to foster skill development and ensure code quality.",
        "Collaborated with UX/UI designers to create intuitive app interfaces and collaborated with product managers to prioritize features based on customer feedback and market trends.",
        "Implemented robust security measures, including end-to-end encryption and biometric authentication, to safeguard sensitive customer data and ensure compliance with regulatory requirements.",
        "Utilised Azure cloud services for deployment, scaling, and management of applications. ",
        "Worked with Microsoft Portal (MS Portal) for various aspects of project management and resource provisioning.",
      ],
    },
    {
      role: "Sr. Frontend Developer",
      company: "We Are Nova",
      companylogo: require("./assets/images/wearenova.png"),
      date: "Jun 2021 – Dec 2022",
      desc: "https://www.wearenova.co.uk/",
      descBullets: [
        "Developing web and mobile applications using React/Next JS, React Native.",
        "Worked with HTML,CSS and it’s preprocessors such as Sass & TailwindCSS. Also, CSS-in-JS such as (styles-components, emotions)",
        "Excellent with agile project procedures(e.g.Scrum,and Kanban).",
        "Working closely in the planning,design,and delivery of startup products and services.",
        "Prepared Technical Specifications based on the functional requirements.",
        "Proficient in developing CI/CD pipelines by using Bitrise and Bamboo",
        "Collaborated with product team members to implement new feature developments.",
        "Proficient in test own code using automated tests e.g. Jest, Cypress/Enzyme.",
        "Maintain the code quality by using different tools suchas sonar-cloud, greylog, dependency-scanner, and amplitude.",
      ],
    },
    {
      role: "Mobile App Developer",
      company: "AzadChaiwala",
      companylogo: require("./assets/images/azadchaiwala.jpeg"),
      date: "Oct 2018 – Jun 2021",
      desc: "https://chaiwala.com/",
      descBullets: [
        "Proficient in building cross-platform native applications with React-Native-CLI/Expo.",
        "Expertise in using react-native-cli and expo.",
        " Proficiency in implementation of Restful/GraphQL API.",
        "Familiarity with newer specifications of ECMAScript and TypeScript.",
        "Experience with CocoaPods, Node, and Yarn.",
        "Thorough understanding of FluxArchitecture.",
        "Expertise in using MobX/Redux for state management.",
        "Experience in publishing applications to the PlayStoreand App Store.",
        "UI should meet the design requirements.",
        "Hands-on experience in working with GIT",
      ],
    },
    {
      role: "Android App Developer",
      company: "Parity Zone",
      companylogo: require("./assets/images/parityzone.png"),
      date: "Jun 2018 – Oct 2018",
      desc: "https://parityzone.com/",
      descBullets: [
        "Proficient in building Android applications in JAVA",
        "Integrating mobile applications to Web Services.",
        "Adding the ads of Facebook and AdMob in applications.",
        "Integration of maps,geolocation services,and social media APIs.",
        "Cloud message APIs and push notifications",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/mb.png"),
      projectName: "MB.OS Portal",
      projectDesc:
        "Main user interface platform for the Mercedes-Benz ecosystem",
      footerLink: [
        {
          name: "Website",
          url: "http://portal.mbos.mercedes-benz.com/",
        },
      ],
    },
    {
      image: require("./assets/images/bmmro.png"),
      projectName: "BMMRO",
      projectDesc:
        "To promote conservation ot marine mammals and their habitats through scientific research and educational outreach",
      footerLink: [
        {
          name: "Website",
          url: "http://www.bahamaswhales.org/",
        },
      ],
    },
    {
      image: require("./assets/images/primer.jpg"),
      projectName: "Primer",
      projectDesc:
        "Unleash your payments potential. Shape extraordinary commerce experiences, process every payment with precision, and accelerate business growth without compromise.",
      footerLink: [
        {
          name: "Website",
          url: "https://primer.io/",
        },
        {
          name: "primer-sdk-react-native",
          url: "https://github.com/primer-io/primer-sdk-react-native?tab=readme-ov-file",
        },
      ],
    },
    {
      image: require("./assets/images/swished.png"),
      projectName: "Swished | Rent & Lend Fashion",
      projectDesc:
        "Rent outfits More fashion, more often, less cost to your purse & planet. List your wardrobe to make money search for SWISHED.",
      footerLink: [
        {
          name: "Website",
          url: "https://rentwithswished.com/allrentals",
        },
        {
          name: "Android",
          url: "https://play.google.com/store/apps/details?id=co.uk.swished",
        },
        {
          name: "iOS",
          url: "https://apps.apple.com/gb/app/swished/id1600685718",
        },
      ],
    },
    {
      image: require("./assets/images/gomarry.png"),
      projectName: "GoMarry - The Marriage Only Match Making Service",
      projectDesc:
        "Proven Alternative To Dating Apps. Not About Cheap Swipes, One Night Stands Or Hookups. Only For People Who Want Commitment & Long-term Relationships. I.e. Marriage & Family.",
      footerLink: [
        {
          name: "Website",
          url: "https://www.gomarry.com/",
        },
        {
          name: "Android",
          url: "https://play.google.com/store/apps/details?id=com.gomarry",
        },
        {
          name: "iOS",
          url: "https://apps.apple.com/app/id1489454989",
        },
      ],
    },
    {
      image: require("./assets/images/picturepath.png"),
      projectName: "PicturePath: Visual Timeline Tool for SEN Children",
      projectDesc: `Creating inclusive environments for people with additional needs.
      Picturepath supports those with additional support needs, such as autism, to thrive at home, in education and through all of life’s experiences.`,
      footerLink: [
        {
          name: "Website",
          url: "https://mypicturepath.com/",
        },
        {
          name: "Android",
          url: "https://play.google.com/store/apps/details?id=com.acorn.picapp&hl=en_GB",
        },
        {
          name: "iOS",
          url: "https://apps.apple.com/gb/app/picturepath/id1339643269",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing",
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing",
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html",
        },
      ],
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en",
        },
      ],
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/",
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Recommendations Section

const recommendationSection = {
  title: "Recommendations",
  subtitle: "",
  recommendations: [
    {
      url: "https://www.linkedin.com/in/thefaisaliqbal/details/recommendations/",
      image: require("./assets/images/simone.jpeg"),
      name: "Simone Terranova",
      role: "Digital Product Designer",
      text: `"With Faisal, we worked together on project called Picturepath. Among his many strengths are a great working attitude and a remarkable sense of problem-solving. His knowledge of programming and teamwork gave the project a solid foundation. He is a real asset to any team."`,
    },
    {
      url: "https://www.linkedin.com/in/thefaisaliqbal/details/recommendations/",
      image: require("./assets/images/clare.jpeg"),
      name: "Clare Curran",
      role: "Freelance Senior Digital Designer",
      text: `"Faisal’s strong skillset and work ethic make him an excellent software engineer and a pleasure to work with. He has a collaborative attitude to problem solving and is always open to other peoples opinions. He is an asset to any team and I hope we get to work together again in the future."`,
    },
    {
      url: "https://www.linkedin.com/in/thefaisaliqbal/details/recommendations/",
      image: require("./assets/images/mark.jpeg"),
      name: "Mark Lally",
      role: "Head of Product Management",
      text: `"Faisal is a fantastic software engineer. Great experience in mobile development which is only surpassed by his ability to pick up new libraries, code bases and technologies. Importantly for me, Faisal is excellent at identifying problems and solving them. Always willing to discuss and review his builds prior to deployment he is an asset to any team. I look forward to our paths passing again in the future."`,
    },
    {
      url: "https://www.linkedin.com/in/thefaisaliqbal/details/recommendations/",
      image: require("./assets/images/eleanor.jpeg"),
      name: "Eleanor Wheadon",
      role: "Product Owner",
      text: `"Throughout the time I worked with Faisal, he was always very focused and hard working when given tasks and stories to complete within our sprints. Faisal’s skills in native app development really helped us out as a team whenever we required them. Faisal always got involved in detailed discussions about our requirements and would raise valuable questions and points often to allow us to achieve our sprint goals to the best of our ability. Thanks for your efforts and good luck with your future :)"`,
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "",
      event_url: "https://www.facebook.com/events/2339906106275053/",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Whether you want to discuss a project or simply say hello, feel free to reach out to me anytime. My inbox is always open.",
  number: "+40-724-425267",
  email_address: "7faisaliqbal@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  recommendationSection,
};
