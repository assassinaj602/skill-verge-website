import React from 'react';
import { Link } from 'react-router-dom';
import { 
  AcademicCapIcon, 
  ComputerDesktopIcon, 
  UserGroupIcon,
  CheckCircleIcon,
  StarIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';
import { skillCourses, academicCourses, testimonials } from '../data';
import CourseCard from '../components/CourseCard';

const Home: React.FC = () => {
  const featuredCourses = [...skillCourses.slice(0, 2), ...academicCourses.slice(0, 2)];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-slide-up">
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Welcome to{' '}
                <span className="text-gradient">Skill Verge</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Empowering students with quality education and technical skills for a brighter future
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/courses"
                  className="px-8 py-4 bg-gradient-primary text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center btn-animate ripple-effect"
                >
                  Explore Courses
                  <ChevronRightIcon className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-all duration-300 scale-hover"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center scale-hover">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2 pulse-glow">500+</div>
              <div className="text-gray-600">Students Enrolled</div>
            </div>
            <div className="text-center scale-hover">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2 pulse-glow">10+</div>
              <div className="text-gray-600">Courses Available</div>
            </div>
            <div className="text-center scale-hover">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2 pulse-glow">4</div>
              <div className="text-gray-600">Expert Instructors</div>
            </div>
            <div className="text-center scale-hover">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2 pulse-glow">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              At Skill Verge, we believe in empowering students with both academic excellence and practical skills. 
              Our mission is to bridge the gap between traditional education and modern industry demands, preparing 
              students for success in their academic journey and professional careers.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <AcademicCapIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Academic Excellence</h3>
                <p className="text-gray-600">
                  Comprehensive academic courses from O/A Levels to FSC/ICS with expert guidance
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <ComputerDesktopIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Technical Skills</h3>
                <p className="text-gray-600">
                  Modern programming languages and tools to prepare for the digital future
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserGroupIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Personalized Learning</h3>
                <p className="text-gray-600">
                  Small class sizes and individual attention for optimal learning outcomes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4 scale-hover">
              Featured Courses
            </h2>
            <p className="text-lg text-gray-600">
              Discover our most popular courses designed to boost your skills and career prospects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredCourses.map((course, index) => (
              <div key={course.id} className="card-animate" style={{ animationDelay: `${index * 0.1}s` }}>
                <CourseCard course={course} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/courses"
              className="inline-flex items-center px-8 py-4 bg-gradient-primary text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 btn-animate ripple-effect scale-hover"
            >
              View All Courses
              <ChevronRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Skill Verge?
            </h2>
            <p className="text-lg text-gray-600">
              We provide comprehensive education with a focus on practical skills and academic excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Instructors',
                description: 'Learn from industry professionals with years of experience',
                icon: UserGroupIcon,
              },
              {
                title: 'Flexible Learning',
                description: 'Online classes that fit your schedule and learning pace',
                icon: ComputerDesktopIcon,
              },
              {
                title: 'Practical Projects',
                description: 'Hands-on experience with real-world projects and applications',
                icon: CheckCircleIcon,
              },
              {
                title: 'Affordable Pricing',
                description: 'Quality education at competitive prices for all students',
                icon: CheckCircleIcon,
              },
              {
                title: 'Academic Support',
                description: 'Complete support for O/A Levels, FSC, and ICS examinations',
                icon: AcademicCapIcon,
              },
              {
                title: 'Modern Curriculum',
                description: 'Up-to-date courses that match current industry standards',
                icon: CheckCircleIcon,
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-lg text-gray-600">
              Read success stories from our students who have transformed their careers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gradient-secondary rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of students who have chosen Skill Verge for their education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="px-8 py-4 bg-white text-primary-600 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300"
            >
              Explore Courses
            </Link>
            <Link
              to="/faculty"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-all duration-300"
            >
              Meet Our Faculty
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
