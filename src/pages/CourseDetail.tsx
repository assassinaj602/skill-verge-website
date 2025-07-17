import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon, ClockIcon, UserIcon, StarIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { skillCourses, academicCourses } from '../data';

const CourseDetail: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  
  // Find the course in both skill and academic courses
  const course = [...skillCourses, ...academicCourses].find(
    (c) => c.id === courseId
  );

  if (!course) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <Link
            to="/courses"
            className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const features = [
    'Interactive lessons and hands-on projects',
    'Expert instructor support',
    'Certificate of completion',
    'Flexible online learning',
    'Real-world applications',
    'Career guidance and support'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              to="/courses"
              className="inline-flex items-center text-primary-600 hover:text-primary-800 transition-colors"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to Courses
            </Link>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">{course.icon}</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                  {course.level}
                </span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {course.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {course.description}
              </p>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center text-gray-600">
                  <ClockIcon className="h-5 w-5 mr-2" />
                  <span>Duration: {course.duration}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <UserIcon className="h-5 w-5 mr-2" />
                  <span>Instructor: {course.instructor}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <StarIcon className="h-5 w-5 mr-2" />
                  <span>Mode: {course.mode}</span>
                </div>
              </div>
              
              <Link
                to="/enroll"
                className="inline-flex items-center px-8 py-3 bg-gradient-primary text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Enroll Now
              </Link>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-6">
                {course.discountedPricePKR ? (
                  <>
                    <div className="text-lg text-gray-500 line-through mb-1">Was {course.monthlyFeePKR} PKR</div>
                    <div className="text-3xl font-bold text-primary-600 mb-2">Now {course.discountedPricePKR} PKR<span className="text-lg font-normal text-gray-600">/month</span></div>
                    <div className="text-sm text-gray-600 mb-2">(~${(course.discountedPricePKR / 285).toFixed(2)} USD)</div>
                  </>
                ) : (
                  <>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {course.monthlyFeePKR} PKR
                      <span className="text-lg font-normal text-gray-600">/month</span>
                    </div>
                    <div className="text-gray-600">
                      or ${course.monthlyFeeUSD} USD/month
                    </div>
                  </>
                )}
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 mb-4">What's Included:</h3>
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Prerequisites:</strong> {course.prerequisites}
                </p>
                <Link
                  to="/enroll"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-primary text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                >
                  Start Learning Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">
                Course Overview
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6">
                  {course.description}
                </p>
                <p className="text-gray-700 mb-6">
                  This comprehensive course is designed to provide you with practical skills and knowledge 
                  that you can immediately apply in real-world scenarios. Our expert instructors will guide 
                  you through each step of the learning process.
                </p>
                <p className="text-gray-700">
                  Whether you're a complete beginner or looking to enhance your existing skills, this course 
                  offers the perfect balance of theoretical knowledge and hands-on practice to help you succeed.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
                Course Information
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="font-medium text-gray-900">Duration:</span>
                  <span className="text-gray-700 ml-2">{course.duration}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Level:</span>
                  <span className="text-gray-700 ml-2 capitalize">{course.level}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Mode:</span>
                  <span className="text-gray-700 ml-2 capitalize">{course.mode}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Instructor:</span>
                  <span className="text-gray-700 ml-2">{course.instructor}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Prerequisites:</span>
                  <span className="text-gray-700 ml-2">{course.prerequisites}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;
