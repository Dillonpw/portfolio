const images = [
  {
    id: 'ecommerce-site',
    src: '/assets/ecommerce.png',
    mobileImg: '/assets/ecommerce-m.png',
    livePreviewLink: 'https://shop-red-eta.vercel.app/',
    githubLink: 'https://github.com/Dillonpw/ecommerce',
    title: 'Ecommerce Site',
    tags: ['TypeScript', 'React', 'Tailwind', 'TailwindUI', 'Shadcn/ui'],
    challenge:
      'This project was rather large and with that came some challenges: for one I struggled a bit with sharing state between components and pages, I failed to realize that the concept I was inventing in my head and almost in my code already existed in the form of useContex... Once that was out of the way I found some difficulty in positioniing certain elements exactly where I wanted them so they looked presentable both on desktop and mobile but a few tailwind size adjustements sorted that out.',
    description:
      'This template is part of The Odin Project React curriculum You will notice a checkout area if you decide to go through te motions of the website, it does not submit anything, it clears the cart. Engaging in this project introduced me to many new concepts within React. I dove headfirst into the useContext hook and scoured the React documentation to gain what I believe is a working grasp of its uses. In the end, I am happy with the outcome. The goal was to create something purposely generic and minimal, and I believe that’s what I have achieved.',
  },

  {
    id: 'dispatcher-cheat-sheet',
    src: '/assets/DCS-home.png',
    mobileImg: '/assets/DCS-home-m.png',
    livePreviewLink: 'https://www.911dcs.net/',
    githubLink: 'https://github.com/Dillonpw/DCS',
    title: 'Dispatcher Cheat Sheet',
    tags: ['TypeScript', 'React', 'CSS', 'Astro'],
    challenge:
      ' I originally built this project using vanilla JavaScript, and after deciding to build the project up a bit I wanted to challenge myself and covert it to typeScript for some practice. This was the first project I built using TypeScript and I struggled a bit at first with typing things correctly and sometimes skipped types but as I moved through the documentation things becmae clear and the error responses turned into a tool as I converted the code.',
    description:
      'A live and public site with returning users, styled with a brutaslist theme in mind. Consisting of a few useful tools for 911 dispatchers, a job I worked for several years. I built the app to help with my efficiency as a dispatcher and as a send off gift to my former coworkers. The primary funciton is a work schedule generator. As a 911 dispatcher, my schedule was different every week due to the need for 24/7 uptime, and to prevent the same poeple from always working weekends we worked on a rotation of 4 work days followed by 3 days off, which required a great deal of effort to schedule anything in advance. I plan to add more tools to the page as they come to mind and offer this project up to other 911 dispatchers to hopefully make their jobs and lives easier as well.',
  },
  /* to be replaced
  {
    id: '',
    src: '',
    mobileImg: '',
    livePreviewLink: '',
    githubLink: '',
    title: '',
    tags: [],
    challenge: '',
    description: '',
  },

  {
    id: '',
    src: '',
    mobileImg: '',
    livePreviewLink: '',
    githubLink: '',
    title: '',
    tags: [],
    challenge: '',
    description: '',
  }




  {
    id: 'cv-template',
    src: '/assets/cv-template.png',
    mobileImg: '/assets/cv-template-m.png',
    livePreviewLink: 'https://cv-template-navy.vercel.app/',
    githubLink: 'https://github.com/Dillonpw/cv-template',
    title: 'CV Template',
    tags: ['JavaScript', 'React', 'CSS',],

    challenge:
      'The toughest challenge with this particular project was figuring out how to create the individual sections of information for the education and experience fields, as one of my first real projects dealing with React and state management. Initially, I was only able to fill out and submit one section. If I tried to create a new section, it would delete the first one and replace the data. After several different attempts and some searching for similar problems, I was able to come up with a solution by creating an array that would have its own state. This array would contain the data and accept additional data as well.',
    description:
      'An application where a user is able to view and print a basic resume by following the template, buit as a part of The Odin Project React curriculum. The user has the ability to update their personal info, work history, and education, adding multiple work and education items if they wish and delete entries as well. Upon visiting the page, the template will be filled out with generic information to give the user an idea of what the finished product may look like.',
  },

  {
    id: 'slicing',
    src: '/assets/pricing-toggle.png',
    mobileImg: '/assets/pricing-toggle-m.png',
    livePreviewLink:
      'https://www.frontendmentor.io/solutions/pricing-component-build-with-vanilla-js-css-html-ONGCkzEVdW',
    githubLink: 'https://github.com/Dillonpw/pricing-toggle',
    title: 'Design slicing',
    tags: ['React', 'javaScript', 'Bootstrap', 'CSS', 'tailwind', 'HTML'],
    challenge:
      'I had trouble properly displaying the background SVG files for this project for a while, but after some research online I was able to get them functioning to my liking, building the Toggle switch was also a challenge and It took a lot more CSS than i was hoping it would to build; once again I found I was far from the first person to run into theses issues and was able to apply solutions I may not have come up with myself.',
    description:
      'a collection of several Frontend Mentor projects to display design to product slicing, the fist example here is a simple pricing component to be applied to a landing page. In theory the buttons would redirect to more infomation but this is a standalone page. There is a toggle switch to display either annual cost plans or monthyly plans. The page is responsive, adjusting its shape for small screens.',
  }, */
]

export default images
