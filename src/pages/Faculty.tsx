import React from 'react';
import { instructors } from '../data';
import InstructorCard from '../components/InstructorCard';
import { 
  AcademicCapIcon, 
  UserGroupIcon, 
  StarIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const Faculty: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-gradient">Expert Faculty</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedicated team of experienced educators and industry professionals are committed 
              to helping you achieve your academic and career goals.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
            {[instructors.find(i => i.id === '1'), instructors.find(i => i.id === '3'), instructors.find(i => i.id === '4')].map(
              (instructor, idx) => instructor && <InstructorCard key={instructor.id} instructor={instructor} />
            )}
          </div>
        </div>
      </section>

      {/* Faculty Highlights */}
      <section className="py-16 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Our Faculty Stands Out
            </h2>
            <p className="text-lg text-gray-600">
              Our instructors bring a unique combination of academic expertise and industry experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <AcademicCapIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-center mb-4">
                Academic Excellence
              </h3>
              <p className="text-gray-600 text-center">
                All our instructors hold advanced degrees and have extensive teaching experience 
                in their respective fields.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <UserGroupIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-center mb-4">
                Industry Experience
              </h3>
              <p className="text-gray-600 text-center">
                Our faculty members have real-world experience in their industries, bringing 
                practical insights to the classroom.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <StarIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-center mb-4">
                Student-Centered Approach
              </h3>
              <p className="text-gray-600 text-center">
                We believe in personalized learning and ensure each student receives individual 
                attention and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Teaching Philosophy
            </h2>
            <p className="text-lg text-gray-600">
              We believe in creating an environment where students can thrive and reach their full potential
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircleIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Interactive Learning</h3>
                  <p className="text-gray-600">
                    We use modern teaching methods that engage students actively in the learning process, 
                    making education more effective and enjoyable.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircleIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Practical Application</h3>
                  <p className="text-gray-600">
                    Every concept is taught with real-world applications and hands-on practice 
                    to ensure deep understanding and retention.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircleIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Continuous Support</h3>
                  <p className="text-gray-600">
                    Our instructors provide ongoing support and mentorship to help students 
                    overcome challenges and achieve their goals.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-secondary rounded-xl p-8">
              <h3 className="font-heading font-semibold text-xl mb-6 text-center">
                Our Commitment to Excellence
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Student Success Rate</span>
                  <span className="font-bold text-primary-600">95%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Average Class Size</span>
                  <span className="font-bold text-primary-600">15 students</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Individual Attention</span>
                  <span className="font-bold text-primary-600">100%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Faculty Experience</span>
                  <span className="font-bold text-primary-600">5+ years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Expertise */}
      <section className="py-16 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Areas of Expertise
            </h2>
            <p className="text-lg text-gray-600">
              Our faculty covers a wide range of subjects and technical skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-heading font-semibold text-lg mb-4 text-center">
                Academic Subjects
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                  O/A Level Computer Science
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                  FSC Mathematics & Physics
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                  ICS Computer Science
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                  Chemistry & Biology
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-heading font-semibold text-lg mb-4 text-center">
                Programming & Development
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                  Python Programming
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                  Web Development (React, HTML/CSS)
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                  Flutter & Mobile Development
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                  JavaScript & TypeScript
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-heading font-semibold text-lg mb-4 text-center">
                Digital Skills
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                  MS Office Suite
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                  Canva Design
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                  Data Analysis & Excel
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                  Digital Marketing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Learn from Our Expert Faculty?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join our classes and experience personalized, high-quality education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-primary-600 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300">
              Enroll Now
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-all duration-300">
              Contact Faculty
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;
