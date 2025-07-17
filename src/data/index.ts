import type { Course, Instructor, Testimonial, AcademicFee } from '../types';
import zainImg from '../assets/zain.jpg';
import assadImg from '../assets/assad.jpg';
import hammasImg from '../assets/hammas.jpg';

export const instructors: Instructor[] = [
  {
    id: '1',
    name: 'Zain Tahir',
    title: 'Flutter Developer | Python Enthusiast | UI/UX Designer',
    specializations: ['Flutter', 'Python', 'UI/UX Design'],
    avatar: zainImg,
    bio: `Flutter Developer with a passion for Python and UI/UX design. Experienced in building apps from To-Do Lists to AI Chatbots. Active in AICP, Umeed-e-Subh, MLSA, and QDS.`,
    experience: '2 years teaching experience',
    email: 'zain@skillverge.com',
    education: 'BS CS',
    linkedin: 'https://linkedin.com/in/zaintahir',
    fullBio: `
<strong>Introduction:</strong><br/>
I’m a Flutter Developer with a passion for Python and UI/UX design using Figma and Canva. I've worked on various Flutter apps, from basic tools like a To-Do List and Pomodoro Timer to advanced API-based apps like a Currency Exchange App and AI Chatbot. I’ve also contributed as a designer and educator in university societies like AICP, Umeed-e-Subh, MLSA, and QDS. I’m eager to build innovative, user-friendly apps and grow in the app development and design industry.<br/><br/>
<strong>Qualification:</strong><br/>
BS CS<br/><br/>
<strong>Experience:</strong><br/>
2 years teaching experience<br/><br/>
<strong>Skills:</strong><br/>
Python, Dart, Flutter, UI/UX designing, Canva<br/><br/>
<strong>Interests/Hobbies:</strong><br/>
Watching YouTube
`,
  },
  {
    id: '4',
    name: 'Hammas',
    title: 'Flutter Developer | UI/UX Designer',
    specializations: ['Flutter', 'Dart', 'UI/UX Design'],
    avatar: hammasImg,
    bio: `Flutter Developer with a passion for Python and UI/UX design. Experienced in building apps from To-Do Lists to AI Chatbots. Active in UMC, Umeed-e-Subh, MLSA, and QDS.`,
    experience: '2 years teaching experience',
    email: 'hammas@skillverge.com',
    education: 'BS CS',
    linkedin: 'https://linkedin.com/in/hammas',
    github: 'https://github.com/hammas',
    fullBio: `
<strong>Introduction:</strong><br/>
I’m a Flutter Developer with a passion for Python and UI/UX design using Figma and Canva. I've worked on various Flutter apps, from basic tools like a To-Do List and Pomodoro Timer to advanced API-based apps like a Currency Exchange App and AI Chatbot. I’ve also contributed as a designer and educator in university societies like UMC, Umeed-e-Subh, MLSA, and QDS. I’m eager to build innovative, user-friendly apps and grow in the app development.<br/><br/>
<strong>Qualification:</strong><br/>
BS CS<br/><br/>
<strong>Experience:</strong><br/>
2 years teaching experience<br/><br/>
<strong>Skills:</strong><br/>
Dart, Flutter, UI/UX designing<br/><br/>
<strong>Interests/Hobbies:</strong><br/>
Watching Wrestling, movies
`,
  },
  {
    id: '3',
    name: 'Muhammad Assad Ullah',
    title: 'App & Web Developer | ICS Instructor | AI-Integrated Teaching Specialist',
    specializations: ['Flutter', 'Frontend Development', 'Prompt Engineering', 'ICS Computer Science', 'UI/UX Design', 'AI Tools'],
    avatar: assadImg,
    bio: ` 2+ Years Experience\n\nI'm a passionate and skilled full stack Flutter app and web developer with a strong foundation in modern front end technologies, mobile app development, and prompt engineering. With over 2 years of hands-on development and teaching experience, I blend technical expertise with a unique ability to teach complex concepts in a simple, engaging way.\n\nAs an ICS Computer Science instructor, I focus on bridging the gap between academic concepts and real-world application — empowering students not only to score well but to build confidently using modern tools.`,
    experience: '2+ years development and teaching experience',
    email: 'asadullahaj602@gmail.com',
    education: [
      'BS Computer Science, University of Engineering & Technology, Taxila (2023–2027)',
      'ICS (Computer Science), Punjab College, Muzaffargarh (2021–2023)',
      '▫️ 3rd Position – DG Khan Board'
    ],
    linkedin: 'https://www.linkedin.com/in/muhammad-assadullah/',
    github: 'https://github.com/assassinaj602',
    fullBio: `
<strong>🧠 About Me</strong><br/>
I'm a passionate and skilled full stack Flutter app and web developer with a strong foundation in modern front-end technologies, mobile app development, and prompt engineering. With over 2 years of hands on development and teaching experience, I blend technical expertise with a unique ability to teach complex concepts in a simple, engaging way.<br/><br/>
As an ICS Computer Science instructor, I focus on bridging the gap between academic concepts and real world application empowering students not only to score well but to build confidently using modern tools.<br/><br/>
<strong>🎓 Education</strong><br/>
BS Computer Science, University of Engineering & Technology, Taxila (2023–2027)<br/>
ICS (Computer Science), Punjab College, Muzaffargarh (2021–2023)<br/>
▫️ 3rd Position – DG Khan Board<br/><br/>
<strong>💼 Current Roles</strong><br/>
App Developer (Flutter)<br/>
Web Developer (React & Frontend Tech)<br/>
ICS Computer Science Instructor<br/><br/>
<strong>🔧 Specializations</strong><br/>
Flutter & Dart Mobile Development<br/>
Frontend Web Development (HTML, CSS, JS, Tailwind, React.js)<br/>
Prompt Engineering for AI Tools<br/>
ICS Computer Science (Punjab Textbook, Practical Guidance)<br/>
UI/UX Implementation & Design Thinking<br/>
AI-powered Learning Tools Integration<br/><br/>
<strong>🎯 Teaching Philosophy</strong><br/>
“Education must evolve with technology.”<br/>
I incorporate AI tools like ChatGPT and visual explainers to simplify learning, encourage curiosity, and make my students future-ready for a tech-driven world.<br/><br/>
<strong>🧩 Fun Facts & Interests</strong><br/>
Anime lover, gamer, and movie geek<br/>
Enjoy reading mangas, tech blogs, and novels<br/>
Sports enthusiast (especially football and cricket)<br/>
Lifelong learner and code explorer<br/><br/>
<strong>💬 Favorite Quote</strong><br/>
“Life has no CTRL + Z” every decision shapes who we become.
`,
  },
];

export const skillCourses: Course[] = [
  {
    id: 'python',
    title: 'Python Programming',
    category: 'skill',
    icon: '🐍',
    description: 'Learn Python from basics to advanced concepts including data structures, algorithms, and real-world projects.',
    monthlyFeePKR: 1500,
    discountedPricePKR: 500,
    monthlyFeeUSD: 15,
    duration: '2 months',
    mode: 'online',
    instructor: 'Zain Tahir',
    prerequisites: 'Basic computer knowledge',
    level: 'beginner',
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    category: 'skill',
    icon: '🌐',
    description: 'Learn web development with the help of AI tools to enhance your skills and code efficiently. Complete web development course covering HTML, CSS, JavaScript, React, and modern web technologies.',
    monthlyFeePKR: 1500,
    discountedPricePKR: 500,
    monthlyFeeUSD: 15,
    duration: '2 months',
    mode: 'online',
    instructor: 'Muhammad Assad Ullah',
    prerequisites: 'Basic computer knowledge',
    level: 'intermediate',
  },
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering',
    category: 'skill',
    icon: '🤖',
    description: 'Master the art of AI prompt engineering to maximize productivity and efficiency in your work. Learn to create effective prompts for various AI tools and applications.',
    monthlyFeePKR: 1000,
    discountedPricePKR: 200,
    monthlyFeeUSD: 5,
    duration: '1 month',
    mode: 'online',
    instructor: 'Muhammad Assad Ullah',
    prerequisites: 'Basic computer knowledge',
    level: 'beginner',
  },
  {
    id: 'canva',
    title: 'Canva Design',
    category: 'skill',
    icon: '🎨',
    description: 'Master graphic design with Canva, create professional designs, social media graphics, and marketing materials.',
    monthlyFeePKR: 1000,
    discountedPricePKR: 200,
    monthlyFeeUSD: 5,
    duration: '1 months',
    mode: 'online',
    instructor: 'Zain Tahir',
    prerequisites: 'None',
    level: 'beginner',
  },
  {
    id: 'flutter',
    title: 'Flutter Development',
    category: 'skill',
    icon: '📱',
    description: 'Build cross-platform mobile applications using Flutter framework and Dart programming language.',
    monthlyFeePKR: 1500,
    discountedPricePKR: 500,
    monthlyFeeUSD: 15,
    duration: '2 months',
    mode: 'online',
    instructor: 'Hammas',
    prerequisites: 'Basic programming knowledge',
    level: 'intermediate',
  },
];

export const academicCourses: Course[] = [
  {
    id: 'o-level-cs',
    title: 'O Level Computer Science',
    category: 'academic',
    icon: '🎓',
    description: 'Complete O Level Computer Science course covering all syllabus topics with practical programming.',
    monthlyFeePKR: 1500,
    monthlyFeeUSD: 12,
    duration: '12 months',
    mode: 'online',
    instructor: 'Zain Tahir',
    prerequisites: 'Basic math knowledge',
    level: 'intermediate',
  },
  {
    id: 'a-level-cs',
    title: 'A Level Computer Science',
    category: 'academic',
    icon: '🎓',
    description: 'Advanced A Level Computer Science course with in-depth programming and computer systems knowledge.',
    monthlyFeePKR: 2000,
    monthlyFeeUSD: 15,
    duration: '12 months',
    mode: 'online',
    instructor: 'Zain Tahir',
    prerequisites: 'O Level Computer Science or equivalent',
    level: 'advanced',
  },
  {
    id: 'fsc-subjects',
    title: 'FSC Subjects',
    category: 'academic',
    icon: '📚',
    description: 'Comprehensive FSC level subjects including Mathematics, Physics, Chemistry, and Computer Science.',
    monthlyFeePKR: 1500,
    monthlyFeeUSD: 13,
    duration: '12 months',
    mode: 'online',
    instructor: 'Hammas',
    prerequisites: 'Matriculation or equivalent',
    level: 'intermediate',
  },
  {
    id: 'ics-cs',
    title: 'ICS Computer Science',
    category: 'academic',
    icon: '💻',
    description: 'ICS Computer Science course covering programming fundamentals, data structures, and software development.',
    monthlyFeePKR: 1500,
    monthlyFeeUSD: 13,
    duration: '12 months',
    mode: 'online',
    instructor: 'Muhammad Assad Ullah',
    prerequisites: 'Matriculation or equivalent',
    level: 'intermediate',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ahmad Hassan',
    role: 'Python Student',
    content: 'The Python course was excellent! Zain sir explained everything clearly and the practical projects really helped me understand the concepts.',
    rating: 5,
    avatar: '/avatars/ahmad.jpg',
  },
  {
    id: '2',
    name: 'Fatima Khan',
    role: 'O Level Student',
    content: 'Thanks to Skill Verge, I scored an A* in my O Level Computer Science exam. The teaching methodology is outstanding!',
    rating: 5,
    avatar: '/avatars/fatima.jpg',
  },
  {
    id: '3',
    name: 'Ali Ahmed',
    role: 'Web Development Student',
    content: 'Muhammad Assad Ullah sir\'s web development course is amazing. I built my first professional website after just 2 months of learning.',
    rating: 5,
    avatar: '/avatars/ali.jpg',
  },
  {
    id: '4',
    name: 'Sarah Malik',
    role: 'Flutter Student',
    content: 'The Flutter course by Hammas sir was comprehensive and practical. I\'m now confident in building mobile apps.',
    rating: 5,
    avatar: '/avatars/sarah.jpg',
  },
];

export const academicFees: AcademicFee[] = [
  {
    level: 'Matric',
    feePKR: 3000,
    description: 'Complete Matriculation level subjects with expert guidance',
  },
  {
    level: 'FSC/ICS',
    feePKR: 3500,
    description: 'FSC and ICS subjects with comprehensive study materials',
  },
  {
    level: 'O Levels',
    feePKR: 3000,
    feeUSD: 12,
    description: 'Cambridge O Level subjects with international standards',
  },
  {
    level: 'A Levels',
    feePKR: 4000,
    feeUSD: 15,
    description: 'Cambridge A Level subjects for university preparation',
  },
];
