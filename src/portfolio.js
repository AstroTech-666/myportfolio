/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "FarzanaAbdulzada",
  title: "Hi all, I'm Farzana",
  subTitle: emoji(
    "A passionate Software Developer and AI Researcher 🚀 with experience in machine learning, deep learning, and entrepreneurship. Skilled in C++ for high-performance game development and AI simulations, and Python for machine learning and data science with TensorFlow, PyTorch, and NumPy."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AstroTech-666",
  gmail: "abdulzadafarzana38@gmail.com",
  stackoverflow: "https://stackoverflow.com/users/23550924/astrotech-666",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE SOFTWARE DEVELOPER AND AI RESEARCHER EXPLORING INNOVATIVE TECHNOLOGIES",
  skills: [
    emoji(
      "⚡ Develop AI-driven applications and deep learning models for real-world problem-solving"
    ),
    emoji("⚡ Build interactive and data-driven applications using C++, Python, and machine learning frameworks"),
    emoji(
      "⚡ Work on open-source projects, financial modeling, and innovative AI-driven research"
    )
  ],


  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "C++",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "TensorFlow",
    fontAwesomeClassname: "fas fa-brain"
  },
  {
    skillName: "PyTorch",
    fontAwesomeClassname: "fas fa-fire-alt"
  },
  {
    skillName: "Unreal Engine",
    fontAwesomeClassname: "fas fa-gamepad"
  },
  {
    skillName: "OpenCV",
    fontAwesomeClassname: "fas fa-camera"
  },
  {
    skillName: "NumPy",
    fontAwesomeClassname: "fas fa-calculator"
  },
  {
    skillName: "Pandas",
    fontAwesomeClassname: "fas fa-table"
  },
  {
    skillName: "Scikit-Learn",
    fontAwesomeClassname: "fas fa-chart-line"
  },
  {
    skillName: "SQL",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js-square"
  },
  {
    skillName: "RNN",
    fontAwesomeClassname: "fas fa-random"
  },
  {
    skillName: "LSTM",
    fontAwesomeClassname: "fas fa-wave-square"
  },
  {
    skillName: "Machine Learning",
    fontAwesomeClassname: "fas fa-robot"
  },
  {
    skillName: "Git",
    fontAwesomeClassname: "fab fa-git-alt"
  }
],
display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      Name: "Inspirit AI Scholar",
      logo: require("./assets/images/AI.png"),
      subHeader: "Artificial intelligence program for high school students, developed and taught by Stanford and MIT alumni and graduate students.",
      desc: "A highly selective AI program designed to immerse high school students in the fundamentals and applications of artificial intelligence, offering a unique learning experience from some of the brightest minds in the field.",
      descBullets: [
        "Learned foundational concepts of AI and machine learning.",
        "Collaborated on AI projects with peers from around the world.",
        "Gained insights from Stanford and MIT alumni and graduate students."
      ],      
    },
    {
      Name: "Unreal Engine 5 C++ The Ultimate Game Developer Course",
      logo: require("./assets/images/U.png"),
      subHeader: "Unreal Engine 5 C++ Programming by Creating an Action-RPG Style Open World Game!",
      desc: "A comprehensive course on Unreal Engine 5, teaching C++ programming through hands-on development of an action-RPG style open world game. Learn everything from basic coding to advanced game development techniques.",
      descBullets: [
        "Mastered C++ programming in Unreal Engine 5.",
        "Created a fully functional action-RPG style game with open-world mechanics.",
        "Learned about game design, AI systems, and game optimization.",
        "Gained experience in working with game engines and game development workflows."
      ],      
    },
    {
      Name: "AI Programming with Python Nanodegree (Udacity)",
      logo: require("./assets/images/V.png"),
      subHeader: "A comprehensive program designed with the essential skills needed to build and deploy AI models.",
      desc: "A deep dive into the world of AI programming with Python, covering the key skills needed to build and deploy machine learning models. This program offers hands-on experience with AI tools and frameworks.",
      descBullets: [
        "Learned the foundations of machine learning, neural networks, and deep learning.",
        "Built and deployed AI models using Python and popular libraries like NumPy, TensorFlow, and Keras.",
        "Gained experience in data preprocessing, model training, and optimization techniques.",
        "Worked on real-world projects to develop practical AI solutions."
      ]      
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "3D Game Development (Unreal Engine, C++)", // Reflecting your expertise in Unreal Engine and C++ for game development
      progressPercentage: "75%" // Your proficiency in game development
    },
    {
      Stack: "Machine Learning (Python, TensorFlow, RNN, LSTM)", // Reflecting your skills in machine learning and AI
      progressPercentage: "85%" // Your proficiency in ML and AI technologies
    },
    {
      Stack: "Research & Simulation (NASA Data, Exoplanet Modeling)", // Highlighting your research skills in space exploration and simulation
      progressPercentage: "80%" // Your proficiency in research and space-related simulations
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section (optional)
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Startups and Companies I’ve Helped with Tech Development and Growth",
  projects: [
    {
      image: require("./assets/images/Tk.webp"),
      projectName: "TimeTek",
      projectDesc: "A student-led startup founded by high schoolers, TimeTek transforms time management into an engaging experience for students. As a software developer, I helped build this creative platform to simplify scheduling with a fun twist.",
    },
    {
      image: require("./assets/images/Stoodive.webp"),
      projectName: "Stoodive",
      projectDesc: "As a Community Ambassador for Stoodive—a startup building the world’s largest community of professors and students—I played a key role in expanding its community and fostering engagement.",
    }
  ],
  display: true 
};


const achievementSection = {
  title: emoji("Achievements 🏆 "),

  achievementsCards: [
    {
      title: "Most Active Member, AI Programming Nanodegree",
      subtitle:
        "Awarded for outstanding performance and commitment, recognized as the 'Most Active Member.' Earned an advanced Python scholarship to collaborate with mentors on high-level projects, selected from 100 applicants out of thousands.",
      image: require("./assets/images/V.png"),
      imageAlt: "Most Active Member Logo",
      footerLink: [
      ]
    },
    {
      title: "Top Performer, Afghan Girls Robotics Team",
      subtitle: "Contributed to designing and programming an object-avoiding robot for an online competition. Focused on coding, sensor integration, and troubleshooting. Gained hands-on experience while empowering girls in Afghanistan to explore STEM fields.",
      image: require("./assets/images/robot.png"),
      imageAlt: "Robotics Team Logo",
      footerLink: [
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "abdulzadafarzana38@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
