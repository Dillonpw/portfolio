const images = [
  {
    id: 'dispatcher-cheat-sheet',
    src: '/assets/DCS-home.png',
    mobileImg: '/assets/DCS-home-m.png',
    livePreviewLink: 'https://www.911dcs.net/',
    githubLink: 'https://github.com/Dillonpw/DCS',
    title: 'Dispatcher Cheat Sheet',
    challenge:
      'I originally built this project using vanilla JavaScript, and after deciding to build the project up a bit I wanted to challenge myself and covert it to typeScript for some practice. This was the first project I Built using TypeScript and I struggled a bit at first with typing this correctly and sometimes skipped types but as I moved through the documentation things becmae clear and the error responses were very helpful as I converted the code.',
    description:
      "A multi-page HTML/CSS/TypeScript website built using Astro that consists of a few useful tools for 911 dispatchers, a job I worked for several years. I built the app to help with my efficiency as a dispatcher and to make life easier outside of work as well. There is a quick age calculator that takes user input and returns an age based on today's date, and another page that accepts user input and returns a work schedule based on their work rotation. As a 911 dispatcher, my schedule was different every week due to the need to staff the position 24 hours a day, which required a great deal of effort to schedule anything in advance. I built this page as a solution for myself and my coworkers who wanted to quickly check to see if they were going to be working on a given day or not. I plan to add more tools to the page as they come to mind and offer this project up to other 911 dispatchers to hopefully make their jobs easier as well.",
  },

  {
    id: 'ecommerce-site',
    src: '/assets/ecommerce.png',
    mobileImg: '/assets/ecommerce-m.png',
    livePreviewLink: 'https://shop-red-eta.vercel.app/',
    githubLink: 'https://github.com/Dillonpw/ecommerce',
    title: 'Ecommerce Site',
    challenge:
      'This project was rather large and with that came some challenges: for one I struggled a bit with sharing state between components and pages, i failed ot realize that the concept i was inventing in my head and almost in my code already existed in the form of useContex... Once that was out of the way I found some difficulty in positioniing certain elements exactly where I wanted them so they looked presentable both on desktop and mobile but a few tailwind size adjustements sorted that out.',
    description:
      'This template is part of The Odin Project React curriculum, built with React and TypeScript. While TypeScript does make an appearance, I am not yet very confident working with it. You will notce a checkout button if you decide to go through te motions of the website, it does not submit anything it, it clears the cart .Engaging in this project introduced me to many new concepts within React. I dove headfirst into the useContext hook and scoured the React documentation to gain what I believe is a working grasp of its uses. I also explored the useReducer hook but ultimately decided against using it. If I had opted for JavaScript instead of TypeScript, I might have been more comfortable with the reducer, as I am still far from comfortable with TypeScript. In the end, I am happy with the outcome. The goal was to create something purposely generic and minimal, and I believe that’s what I have achieved.',
  },

  {
    id: 'cv-template',
    src: '/assets/cv-template.png',
    mobileImg: '/assets/cv-template-m.png',
    livePreviewLink: 'https://cv-template-navy.vercel.app/',
    githubLink: 'https://github.com/Dillonpw/cv-template',
    title: 'CV Template',
    challenge:
      'The toughest challenge with this particular project was figuring out how to create the individual sections of information for the education and experience fields. Initially, I was only able to fill out and submit one section. If I tried to create a new section, it would delete the first one and replace the data. After several different attempts and some searching for similar problems, I was able to come up with a solution by creating an array that would have its own state. This array would contain the data and accept additional data as well.',
    description:
      'A React application where a user is able to view and print a basic resume by following the template, buit as a part of The Odin Project React curriculum. The user has the ability to update their personal info, work history, and education, adding multiple work and education items if they wish and delete entries as well. Upon visiting the page, the template will be filled out with generic information to give the user an idea of what the finished product may look like.',
  },

  {
    id: 'slicing',
    src: '/assets/pricing-toggle.png',
    mobileImg: '/assets/pricing-toggle-m.png',
    livePreviewLink:
      'https://www.frontendmentor.io/solutions/pricing-component-build-with-vanilla-js-css-html-ONGCkzEVdW',
    githubLink: 'https://github.com/Dillonpw/pricing-toggle',
    title: 'Design slicing',
    challenge:
      'I had trouble properly displaying the background SVG files for this project for a while, but after some research online I was able to get them functioning to my liking, building the Toggle switch was also a challenge and It took a lot more CSS than i was hoping it would to build; once again I found I was far from the first person to run into theses issues and was able to apply solutions I may not have come up with myself.',
    description:
      'a collection of several Frontend Mentor projects to display design to product slicing, the fist example here is a simple pricing component to be applied to a landing page built with HTML, CSS and JS. In theory the buttons would redirect to more infomation but this is a standalone page. There is a toggle switch to display either annual cost plans or monthyly plans. The page is responsive, adjusting its shape for small screens.',
  },
]

export default images