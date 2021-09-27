module.exports = {
  pathPrefix: '',
  siteUrl: 'https://tc-imba.github.io',
  title: 'Yihao Liu',
  description: 'Personal Website of Yihao Liu',
  author: 'Yihao Liu',
  authorAlternative: '刘逸灏',
  introduction: [
    'You can write one or several paragraphs to introduce yourself here. You can find this introduction in the `config.js` file in the template.',
    'In this site, almost everything supports Markdown Syntax. For example, you can add hyperlinks in the introduction such as [fxhsb](https://github.com/Reapor-Yurnero) with\n```markdown\n[fxhsb](https://github.com/Reapor-Yurnero)\n```',
  ],
  avatar: 'avatar.png',
  professions: [
    'Ph.D Student',
    'Full Stack Developer',
  ],
  birthday: 'June 15, 1997',
  location: 'Singapore',
  email: 'liuyh970615@gmail.com',
  tocMaxDepth: 2,
  excerptMaxLength: 500,
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: process.env.DISQUS_SCRIPT
    || 'https://tc-imba.disqus.com/embed.js',
  pages: {
    home: '/',
    posts: 'posts',
    contact: 'contact',
    resume: 'resume',
    tags: 'tags',
    research: 'research',
  },
  social: {
    github: 'https://github.com/',
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
      // icon: 'linux',
      title: 'Open Source Community',
    }],
  experience: [
    /*{
      title: 'Work',
      position: 'left',
      data: [
        {
          date: 'Aug 2019 - Present',
          title: 'Software Engineer',
          location: 'Somewhere',
          description: 'description',
        },
      ],
    },*/ {
      title: 'Teaching',
      position: 'right',
      data: [
        {
          date: 'Summer 2019',
          title: 'Teaching Assistant',
          description: 'VE572 (Methods and Tools for Big Data)',
          location: 'Shanghai Jiao Tong University, China',
        }, {
          date: 'Fall 2018',
          title: 'Teaching Assistant',
          description: 'VE482 (Introduction to Operating Systems)',
          location: 'Shanghai Jiao Tong University, China',
        }, {
          date: 'Fall 2018',
          title: 'Teaching Assistant',
          description: 'VE281 (Data Structures and Algorithms)',
          location: 'Shanghai Jiao Tong University, China',
        }, {
          date: 'Summer 2019',
          title: 'Teaching Assistant',
          description: 'VE280 (Programming and Elementary Data Structures)',
          location: 'Shanghai Jiao Tong University, China',
        }, {
          date: 'Summer 2018',
          title: 'Teaching Assistant',
          description: 'VG101 (Introduction to Computer and Programming)',
          location: 'Shanghai Jiao Tong University, China',
        },
      ],
    }, {
      title: 'Open Source Project',
      position: 'left',
      data: [
        {
          date: 'Fall 2018 - Present',
          title: 'Fullstack Developer',
          description: '[Joint Online Judge](https://github.com/joint-online-judge)',
          location: 'on GitHub',
        }
      ],
    },
  ],
  awards: [
    {
      date: 'Feb 2019',
      title: 'Meritorious Winner in Mathematical Contest In Modeling',
    }
  ],
  tagColors: [
    'magenta', 'red', 'volcano', 'orange', 'gold',
    'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple',
  ],
  tags: [
    {
      id: 'javascript',
      name: 'javascript',
      description: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
      color: '#f0da50',
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      description: 'Node.js is a tool for executing JavaScript in a variety of environments.',
      color: '#90c53f',
    },
    {
      id: 'rxjs',
      name: 'RxJS',
      description: 'RxJS is a library for reactive programming using Observables, for asynchronous operations.',
      color: '#eb428e',
    },
    {
      id: 'typescript',
      name: 'typescript',
      description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
      color: '#257acc',
    },
    {
      id: 'reactjs',
      name: 'reactjs',
      description: 'React is an open source JavaScript library used for designing user interfaces.',
      color: '#61dbfa',
    },
    {
      id: 'gatsby',
      name: 'Gatsby.js',
      description: 'A framework built over ReactJS to generate static page web application.  ',
      color: '#6f309f',
    },
    {
      id: 'html',
      name: 'HTML',
      description: 'A markup language that powers the web. All websites use HTML for structuring the content.',
      color: '#dd3431',
    },
    {
      id: 'css',
      name: 'css',
      description: 'CSS is used to style the HTML element and to give a very fancy look for the web application.',
      color: '#43ace0',
    },
    {
      id: 'python',
      name: 'python',
      description: 'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },
  ],
};
