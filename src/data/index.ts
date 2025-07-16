import type { Course, Instructor, Testimonial, AcademicFee } from '../types';
import zainImg from '../assets/zain.jpg';
import naseerImg from '../assets/naseer.jpg';
import assadImg from '../assets/assad.jpg';
import hammasImg from '../assets/hammas.jpg';

export const instructors: Instructor[] = [
  {
    id: '1',
    name: 'Zain Tahir',
    title: 'Senior Computer Science Instructor',
    specializations: ['O/A Level Computer Science', 'Python Programming', 'Canva Design'],
    avatar: zainImg,
    bio: 'Expert in O/A Level Computer Science with extensive experience in Python programming and digital design using Canva.',
    experience: '5+ years teaching experience',
    email: 'zain@skillverge.com',
    education: 'BS Computer Science, University of Engineering & Technology Taxila',
    linkedin: 'https://linkedin.com/in/zaintahir',
    fullBio: 'Zain Tahir is a passionate computer science educator with over 5 years of teaching experience. He specializes in O/A Level Computer Science and has helped hundreds of students achieve excellent results. His expertise in Python programming and Canva design makes him a versatile instructor who can teach both academic and practical skills.',
  },
  {
    id: '2',
    name: 'Saad Naseer',
    title: 'MS Office Specialist',
    specializations: ['MS Office Suite', 'Excel Advanced', 'PowerPoint', 'Data Analysis'],
    avatar: naseerImg,
    bio: 'Microsoft Office specialist with comprehensive knowledge of all Office applications and advanced data analysis techniques.',
    experience: '4+ years professional experience',
    email: 'saad@skillverge.com',
    education: 'BS Business Administration, University of Engineering & Technology Taxila',
    linkedin: 'https://linkedin.com/in/saadnaseer',
    fullBio: 'Saad Naseer is a Microsoft Office specialist with extensive experience in business applications. He has worked with numerous organizations to improve their productivity through efficient use of Office tools. His expertise in Excel and data analysis makes him the go-to instructor for professional Office skills.',
  },
  {
    id: '3',
    name: 'Muhammad Assad Ullah',
    title: 'App, Web Developer & ICS Instructor',
    specializations: ['Frontend Development', 'Prompt Engineering', 'ICS Computer Science', 'React.js', 'Flutter', 'Mobile App Development'],
    avatar: assadImg,
    bio: 'Full-stack developer specializing in frontend technologies and modern web development practices, also teaching ICS Computer Science.',
    experience: '3+ years development and teaching experience',
    email: 'asadullahaj602@gmail.com',
    education: [
      'Bachelors in Computer Science, University of Engineering and Technology Taxila (2023-2027)',
      'ICS, Punjab College Muzaffargarh (2021-2023), 3rd Position in DGK Board'
    ],
    linkedin: 'https://www.linkedin.com/in/muhammad-assadullah/',
    github: 'https://github.com/assassinaj602',
    notableProjects: [
      {
        name: 'Study Buddy AI',
        url: 'https://github.com/assassinaj602/study-buddy-ai',
        description: 'Multi-modal AI academic assistant with file processing capabilities.'
      },
      {
        name: 'HackShield Academy',
        url: 'https://github.com/assassinaj602/hackshield-academy',
        description: 'Interactive cybersecurity education platform with phishing detection games, password builders, and security quizzes.'
      },
      {
        name: 'UrbanTrim',
        url: 'https://github.com/assassinaj602/urbantrim',
        description: 'UrbanTrim project.'
      }
    ],
    fullBio: `
<strong>Introduction:</strong><br/>
Muhammad Assad Ullah is a skilled full-stack <span class="font-bold text-primary-600">Flutter</span> <span class="font-bold text-primary-600">app and web developer</span> with expertise in modern web technologies and mobile app development. He specializes in <span class="font-bold text-primary-600">Flutter development</span> and <span class="font-bold text-primary-600">frontend web development</span>, and has extensive experience in prompt engineering. His passion for teaching has led him to become an excellent ICS Computer Science instructor, helping students bridge the gap between academic knowledge and practical skills.<br/><br/>
<strong>Teaching Philosophy:</strong><br/>
I use AI in my teachings to make learning faster and modern, ensuring students are prepared for the future of technology.<br/><br/>
<strong>Fun Facts & Interests:</strong><br/>
I love coding, anime, movies, reading (mangas, novels), video games, and sports.<br/><br/>
<strong>Favorite Quote:</strong><br/>
"Life has no CTRL + Z"
`,
  },
  {
    id: '4',
    name: 'Hammas',
    title: 'Flutter Developer & FSC Instructor',
    specializations: ['Flutter Development', 'Mobile App Development', 'FSC Subjects', 'Dart Programming'],
    avatar: hammasImg,
    bio: 'Mobile app developer with expertise in Flutter framework and comprehensive knowledge of FSC level subjects.',
    experience: '3+ years development experience',
    email: 'hammas@skillverge.com',
    education: 'BS Computer Science, University of Engineering & Technology Taxila',
    linkedin: 'https://linkedin.com/in/hammas',
    github: 'https://github.com/hammas',
    fullBio: 'Hammas is a dedicated Flutter developer with a strong background in mobile app development. He combines his technical expertise with excellent teaching skills to help FSC students excel in their studies. His experience in building cross-platform mobile applications using Flutter makes him a valuable instructor for students interested in mobile development.',
  },
];

export const skillCourses: Course[] = [
  {
    id: 'python',
    title: 'Python Programming',
    category: 'skill',
    icon: '🐍',
    description: 'Learn Python from basics to advanced concepts including data structures, algorithms, and real-world projects.',
    monthlyFeePKR: 4000,
    monthlyFeeUSD: 15,
    duration: '3 months',
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
    monthlyFeePKR: 5000,
    monthlyFeeUSD: 18,
    duration: '4 months',
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
    monthlyFeePKR: 500,
    monthlyFeeUSD: 2,
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
    monthlyFeePKR: 3000,
    monthlyFeeUSD: 12,
    duration: '2 months',
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
    monthlyFeePKR: 5500,
    monthlyFeeUSD: 20,
    duration: '4 months',
    mode: 'online',
    instructor: 'Hammas',
    prerequisites: 'Basic programming knowledge',
    level: 'intermediate',
  },
  {
    id: 'ms-office',
    title: 'MS Office Suite',
    category: 'skill',
    icon: '💼',
    description: 'Complete Microsoft Office training including Word, Excel, PowerPoint, and advanced data analysis.',
    monthlyFeePKR: 3500,
    monthlyFeeUSD: 13,
    duration: '2 months',
    mode: 'online',
    instructor: 'Saad Naseer',
    prerequisites: 'Basic computer knowledge',
    level: 'beginner',
  },
];

export const academicCourses: Course[] = [
  {
    id: 'o-level-cs',
    title: 'O Level Computer Science',
    category: 'academic',
    icon: '🎓',
    description: 'Complete O Level Computer Science course covering all syllabus topics with practical programming.',
    monthlyFeePKR: 3000,
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
    monthlyFeePKR: 4000,
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
    monthlyFeePKR: 3500,
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
    monthlyFeePKR: 3500,
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
