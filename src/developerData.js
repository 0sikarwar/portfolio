import htmlIcon from "./assets/svgs/html.svg"
import cssIcon from "./assets/svgs/css.svg"
import reactIcon from "./assets/svgs/react.svg"
import jsIcon from "./assets/svgs/javascript.svg"
import designIcon from "./assets/svgs/design.svg"
import codeIcon from "./assets/svgs/code.svg"
import githubIcon from "./assets/svgs/github.svg"
import linkedinIcon from "./assets/svgs/linkedin.svg"
import graphqlIcon from "./assets/svgs/graphql.svg"
import webPerformanceIcon from "./assets/svgs/webPerformance.svg"
function getExp() {
  const d1 = new Date("2018/04")
  const d2 = new Date()
  let months
  months = (d2.getFullYear() - d1.getFullYear()) * 12
  months -= d1.getMonth()
  months += d2.getMonth()
  if (months % 12 >= 6) months = `${Math.floor(months / 12)}.5`
  else months = `${Math.floor(months / 12)}`
  return months
}
export default {
  name: "Gyanender Singh",
  headerTagline: ["Designer,", "Front-end Developer,", "and Mentor"],
  headerParagraph:
    "I design and code beautifully simple things, and I love what I do.",
  contactEmail: "gyanendersingh5@gmail.com",
  aboutParaOne: `I am a Front-end Developer with more than ${getExp()} years commercial experience and graduate of Computer science engineering. I create successful websites that are fast, easy to use, and built with best practices.`,
  aboutParaTwo:
    "I work to make a better web; one that is fast, easy to use, beautiful, accessible to all, and frustration-free. Regardless of your specific business requirements, in solving these challenges, you have a great chance of finding success online.",
  aboutParaThree:
    "My main experience is in front-end development but I also have a passion for design. Given that producing a modern website requires the combination of design, server technology, and the layer that users interacts with, I believe having experience in both design and development allows for making the most optimal user experiences.",
  aboutImage:
    "https://images.unsplash.com/photo-1519713958759-6254243c4a53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",

  skills: [
    {
      img: htmlIcon,
      para: "HyperText Markup Language (HTML) is the standard markup language which is used to create web pages. For website development, HTML is a critical skill.",
    },
    {
      img: cssIcon,
      para: "CSS (Cascading Style Sheets) is the language used to make a digital document alive and communicable.",
    },
    {
      img: jsIcon,
      para: "Where HTML is a markup language and CSS enhances the web page, Javascript is a programming language that makes the website functional.",
    },
    {
      img: reactIcon,
      para: "React is the ultimate library for front-end developers today. Essentially, React’s value as a JavaScript library is described in its name; it allows fast, dynamic, and user-friendly adaptations, or reactions, based on how a user interacts with the website.",
    },
    {
      img: graphqlIcon,
      para: "GraphQL is designed to make APIs fast, flexible, and developer-friendly. It can even be deployed within an integrated development environment (IDE) known as GraphiQL. As an alternative to REST, GraphQL lets developers construct requests that pull data from multiple data sources in a single API call.",
    },
    {
      img: designIcon,
      para: "Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development.",
    },
    {
      img: codeIcon,
      para: "Problem solving is used everywhere From figuring out how to best implement a design, to fixing bugs that crop up, to figuring out how to make front end code work with the back end code another software engineer has written, development is all about creative problem solving.",
    },
    {
      img: webPerformanceIcon,
      para: "Debugging is simply taking all of the “bugs” (errors) those tests uncover (or your users uncover once your site is launched), putting on detective hat to figure out why and how they’re happening, and fixing the problem. Web performance is the objective measurement and perceived user experience of a web site or application.",
    },
  ],

  contactSubHeading: "Let's create your next experience together",
  social: [
    { img: githubIcon, url: "https://github.com/0sikarwar" },
    { img: linkedinIcon, url: "https://www.linkedin.com/in/sikarwar/" },
  ],
}
