const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://garrettgeesink.github.io',
  title: 'GG.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Garrett Geesink',
  role: 'Software Engineer',
  description:
    'I am a passionate and driven software engineer with a strong foundation in computer science and a commitment to delivering innovative technologies. My goal is to leverage my technical expertise to develop robust and user-friendly software.',
  resume: 'Super secret text :)',
  social: {
    linkedin: 'https://www.linkedin.com/in/garrett-geesink/',
    github: 'https://github.com/garrettgeesink',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'TypeFight',
    description:
      'A type-racing site where players can test their typing skills under a time limit. Players can compete with one another on a global leaderboard.',
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    sourceCode: 'https://github.com/UCR-CS110/final-project-typefight',
  },
  {
    name: 'Verne',
    description:
      'VR software that teaches Virtual Reality concepts in VR. Verne Provides supplemental learning material related to content that may be found in any VR design class.',
    stack: ['C#', 'Oculus', 'Unity'],
    livePreview: 'https://chatmansave.itch.io/verne',
  },
  {
    name: 'Dungeon Designer',
    description:
      'Randomly generate dungeons for Dungeons and Dragons using three different generation algorithms. Each room of the dungeon is populated with encounters such as loot, traps, and enemies.',
    stack: ['C++', 'GoogleTest', 'Valgrind', 'AGILE'],
    sourceCode: 'https://github.com/AaronGeesink/Tabletop-RPG-Dungeon-Designer',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'MongoDB',
  'Express.js',
  'React',
  'Node.js',
  'C++',
  'Python',
  'Virtual Reality',
  'Git',
  'CI/CD',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'garrett.geesink@gmail.com',
}

export { header, about, projects, skills, contact }
