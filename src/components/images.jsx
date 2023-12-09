const images = [
  {
    id: 'cv-template',
    src: '/assets/cv-template.png',
    livePreviewLink: 'https://cv-template-navy.vercel.app/',
    githubLink: 'https://github.com/Dillonpw/cv-template',
    title: 'CV Template',
    challenge:'The toughest challenge with this particular project was figuring out how to create the individual sections of information for the education and experience fields. Initially, I was only able to fill out and submit one section. If I tried to create a new section, it would delete the first one and replace the data. After several different attempts and some searching for similar problems, I was able to come up with a solution by creating an array that would have its own state. This array would contain the data and accept additional data as well.' ,
    description:
      'A React application where a user is able to view and print a basic resume before committing to a professional resume. The user has the ability to update their personal info, work history, and education, adding multiple work and education items if they wish. Upon visiting the page, the template will be filled out with generic information to give the user an idea of what the finished product may look like.',
  },

  {
    id: 'schedule-app',
    src: '/assets/schedule-app.png',
    livePreviewLink: 'https://schedule-app-ts.vercel.app/',
    githubLink: 'https://github.com/Dillonpw/Schedule-App-TS',
    title: 'Schedule App',
    challenge:'' ,
    description:
      'A basic HTML/CSS/JS web page that accepts user input and returns a work schedule based on their work rotation. As a 911 Dispatcher, my schedule was different every week because of the need to staff the position 24 hrs a day and required a great deal of effort to try to schedule anything in advance. I built this page as a solution for myself and my coworkers who wanted to quickly check to see if they were going to be working on a given day or not.',
  },

  {
    id: 'pricing-toggle',
    src: '/assets/pricing-toggle.png',
    livePreviewLink: 'https://dillonpw.github.io/pricing-toggle/',
    githubLink: 'https://github.com/Dillonpw/pricing-toggle',
    title: 'Pricing Toggle',
    challenge:'' ,
    description:
      'A simple pricing component to be apllied to a landing page built with HTML, CSS and JS. In theory the buttons would redirect to more infomation but this is a standalone page. There is a toggle switch to display either annual cost plans or monthyly plans. The page is responsive and functions the same on mobile.',
  },
]

export default images
