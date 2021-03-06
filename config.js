module.exports = {
  pathPrefix: '',
  siteUrl: 'https://tc-imba.github.io',
  siteTitle: 'Yihao Liu',
  siteDescription: 'Logbook of a software developer',
  author: 'Yihao Liu',
  introduction: [
    // 'My name is Yihao Liu, ...',
    // 'My interests are in ...',
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  ],
  avatar: 'avatar.png',
  professions: [
    'Ph.D Student',
    'Full Stack Developer',
  ],
  birthday: 'June 15, 1997',
  location: 'Singapore',
  email: 'liuyh970615@gmail.com',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: process.env.DISQUS_SCRIPT
    || 'https://rolwinreevan.disqus.com/embed.js',
  pages: {
    home: '/',
    posts: 'posts',
    contact: 'contact',
    resume: 'resume',
    tags: 'tags',
    research: 'research',
  },
  social: {
    github: 'https://github.com/tc-imba',
    // facebook: 'https://www.facebook.com/rolwin.monteiro',
    // twitter: 'https://twitter.com/rolwin100',
    // instagram: 'https://www.instagram.com/reevan100/',
    // rss: '/rss.xml',
  },
  wakatime: {
    username: 'tcimba',
    activity: '7add4047-08f9-4da8-b649-aa114503678f',
    language: '460a84ab-722a-4b80-b896-cabaa13ad7eb',
    editor: 'd851639a-28d8-4884-949f-d338a858f7e9',
    os: 'caf7d0d1-8fd2-4595-a991-363c8583fea9',
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT
    || 'https://getform.io/f/09a3066f-c638-40db-ad59-05e4ed71e451',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
  education: [
    {
      date: 'Jan 2020 - Present',
      icon: 'graduation-cap',
      title: 'Ph.D in Computer Science',
      location: 'Nanyang Technological University, Singapore',
    }, {
      date: 'Sept 2015 - Aug 2019',
      icon: 'university',
      title: 'B.S.E. in Electrical and Computer Engineering',
      location: 'Shanghai Jiao Tong University, China',
    }, {
      date: 'Sept 2008 - June 2015',
      icon: 'school',
      title: 'Middle School',
      location: 'Shanghai Southwest Weiyu Middle School, China',
    }],
  interests: [
    {
      icon: 'cubes',
      title: 'Distributed Systems',
    }, {
      icon: 'layer-group',
      title: 'Full Stack Development',
    }, {
      icon: ['fab', 'linux'],
      title: 'Open Source Community',
    }],
  experience: [
    {
      title: 'Work',
      data: [
        {
          date: 'Aug 2019',
          title: 'fxh home visit third time',
          location: 'Shanghai',
          description: 'description',
          icon: 'cubes',
        },
      ],
    }, {
      title: 'Teaching',
      data: [
        {
          date: 'Aug 2019',
          title: 'fxh home visit third time',
          location: 'Shanghai',
        }, {
          date: 'Aug 2018',
          title: 'fxh home visit second time',
          location: 'Shanghai',
        }, {
          date: 'Aug 2017',
          title: 'fxh home visit',
          location: 'Shanghai',
        }, {
          date: 'Aug 2018',
          title: 'fxh home visit second time',
          location: 'Shanghai',
        }, {
          date: 'Aug 2017',
          title: 'fxh home visit',
          location: 'Shanghai',
        },
      ],
    }, {
      title: 'Volunteer',
      data: [
        {
          date: 'Aug 2019',
          title: 'fxh home visit third time',
          location: 'Shanghai',
        }, {
          date: 'Aug 2018',
          title: 'fxh home visit second time',
          location: 'Shanghai',
        }, {
          date: 'Aug 2017',
          title: 'fxh home visit',
          location: 'Shanghai',
        },
      ],
    },
  ],
  tagColors: [
    'magenta', 'red', 'volcano', 'orange', 'gold',
    'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple',
  ],
  tags: {
    javascript: {
      name: 'javascript',
      description: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
      color: '#f0da50',
    },
    nodejs: {
      name: 'Node.js',
      description: 'Node.js is a tool for executing JavaScript in a variety of environments.',
      color: '#90c53f',
    },
    rxjs: {
      name: 'RxJS',
      description: 'RxJS is a library for reactive programming using Observables, for asynchronous operations.',
      color: '#eb428e',
    },
    typescript: {
      name: 'typescript',
      description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
      color: '#257acc',
    },
    reactjs: {
      name: 'reactjs',
      description: 'React is an open source JavaScript library used for designing user interfaces.',
      color: '#61dbfa',
    },
    gatsby: {
      name: 'Gatsby.js',
      description: 'A framework built over ReactJS to generate static page web application.  ',
      color: '#6f309f',
    },
    html: {
      name: 'HTML',
      description: 'A markup language that powers the web. All websites use HTML for structuring the content.',
      color: '#dd3431',
    },
    css: {
      name: 'css',
      description: 'CSS is used to style the HTML element and to give a very fancy look for the web application.',
      color: '#43ace0',
    },
    python: {
      name: 'python',
      description: 'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },

  },
};
