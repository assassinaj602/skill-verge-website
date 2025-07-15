import React from 'react';
import { skillCourses, academicCourses, academicFees } from '../data';
import CourseCard from '../components/CourseCard';
import Tabs from '../components/Tabs';
import { 
  ComputerDesktopIcon, 
  AcademicCapIcon, 
  CurrencyDollarIcon,
  CheckCircleIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const Courses: React.FC = () => {
  const skillCoursesContent = (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
          Technical Skill Courses
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Master modern technologies and build practical skills that are in high demand 
          in today's job market. Our skill courses are designed to make you job-ready.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      <div className="bg-gradient-secondary rounded-xl p-8 mt-12">
        <h4 className="font-heading font-semibold text-xl mb-6 text-center">
          Why Choose Our Skill Courses?
        </h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            'Hands-on practical projects',
            'Industry-relevant curriculum',
            'Expert instructors',
            'Flexible online learning',
            'Career guidance',
            'Certificate of completion'
          ].map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircleIcon className="h-5 w-5 text-green-500" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const academicCoursesContent = (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
          Academic Courses
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Excel in your academic journey with our comprehensive courses for O/A Levels, 
          FSC, and ICS. Achieve top grades with expert guidance and proven teaching methods.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {academicCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {/* Academic Fee Structure */}
      <div className="bg-gradient-secondary rounded-xl p-8 mt-12">
        <h4 className="font-heading font-semibold text-xl mb-6 text-center">
          Academic Fee Structure
        </h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {academicFees.map((fee, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-center">
                <h5 className="font-semibold text-lg mb-2">{fee.level}</h5>
                <div className="text-2xl font-bold text-primary-600 mb-2">
                  {fee.feePKR} PKR
                </div>
                {fee.feeUSD && (
                  <div className="text-sm text-gray-600 mb-3">
                    ${fee.feeUSD} USD
                  </div>
                )}
                <p className="text-sm text-gray-600">{fee.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            * All fees are monthly. Special discounts available for multiple subjects.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 border border-gray-200">
        <h4 className="font-heading font-semibold text-xl mb-6 text-center">
          Academic Course Features
        </h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            'Complete syllabus coverage',
            'Past paper practice',
            'Regular assessments',
            'Exam preparation techniques',
            'Individual progress tracking',
            'Doubt clearing sessions'
          ].map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircleIcon className="h-5 w-5 text-green-500" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const tabs = [
    {
      id: 'skill',
      label: 'Skill Courses',
      content: skillCoursesContent,
    },
    {
      id: 'academic',
      label: 'Academic Courses',
      content: academicCoursesContent,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Courses</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of academic and skill-based courses 
              designed to help you achieve your educational and career goals.
            </p>
          </div>
        </div>
      </section>

      {/* Course Categories Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <ComputerDesktopIcon className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                Technical Skill Courses
              </h3>
              <p className="text-gray-600 mb-6">
                Master modern technologies including Python, Web Development, Flutter, 
                MS Office, and Canva Design with hands-on practical training.
              </p>
              <div className="flex justify-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">5</div>
                  <div className="text-sm text-gray-600">Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">2-4</div>
                  <div className="text-sm text-gray-600">Months</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">Online</div>
                  <div className="text-sm text-gray-600">Mode</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <AcademicCapIcon className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                Academic Courses
              </h3>
              <p className="text-gray-600 mb-6">
                Excel in your academic journey with our comprehensive courses for O/A Levels, 
                FSC, and ICS with expert guidance and proven teaching methods.
              </p>
              <div className="flex justify-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">4</div>
                  <div className="text-sm text-gray-600">Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">12</div>
                  <div className="text-sm text-gray-600">Months</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">Online</div>
                  <div className="text-sm text-gray-600">Mode</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs tabs={tabs} defaultTab="skill" />
        </div>
      </section>

      {/* Pricing Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Our Pricing is Student-Friendly
            </h2>
            <p className="text-lg text-gray-600">
              We believe quality education should be accessible to all students
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-secondary rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <CurrencyDollarIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">
                Competitive Pricing
              </h3>
              <p className="text-gray-600 mb-4">
                Our courses are priced competitively to make quality education accessible 
                to students from all backgrounds.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Monthly payment options</li>
                <li>• No hidden fees</li>
                <li>• Transparent pricing</li>
              </ul>
            </div>

            <div className="bg-gradient-secondary rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <StarIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">
                Value for Money
              </h3>
              <p className="text-gray-600 mb-4">
                Get premium quality education with expert instructors, comprehensive 
                materials, and ongoing support at affordable rates.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Expert instructors</li>
                <li>• Comprehensive materials</li>
                <li>• Ongoing support</li>
              </ul>
            </div>

            <div className="bg-gradient-secondary rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircleIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">
                Flexible Options
              </h3>
              <p className="text-gray-600 mb-4">
                Choose from various payment plans and course combinations to suit 
                your budget and learning needs.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Multiple payment options</li>
                <li>• Course bundles</li>
                <li>• Scholarship opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Choose your course and take the first step towards achieving your goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-primary-600 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300">
              Enroll Now
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-all duration-300">
              Contact for Guidance
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
