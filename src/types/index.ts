export interface Course {
  id: string;
  title: string;
  category: 'skill' | 'academic';
  icon: string;
  description: string;
  monthlyFeePKR: number;
  monthlyFeeUSD?: number;
  duration: string;
  mode: 'online' | 'offline' | 'hybrid';
  instructor: string;
  prerequisites: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface Instructor {
  id: string;
  name: string;
  title: string;
  specializations: string[];
  avatar: string;
  bio: string;
  experience: string;
  email?: string;
  education?: string | string[];
  linkedin?: string;
  github?: string;
  fullBio?: string;
  notableProjects?: {
    name: string;
    url: string;
    description?: string;
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface AcademicFee {
  level: string;
  feePKR: number;
  feeUSD?: number;
  description: string;
}
