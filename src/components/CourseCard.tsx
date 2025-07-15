import React from 'react';
import { Link } from 'react-router-dom';
import type { Course } from '../types';
import { 
  ClockIcon, 
  ComputerDesktopIcon, 
  UserIcon,
  CurrencyDollarIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group card-hover">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white">
              {course.category === 'skill' ? (
                <ComputerDesktopIcon className="h-6 w-6" />
              ) : (
                <AcademicCapIcon className="h-6 w-6" />
              )}
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg text-gray-900">
                {course.title}
              </h3>
              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                course.category === 'skill' 
                  ? 'bg-blue-100 text-blue-800' 
                  : 'bg-green-100 text-green-800'
              }`}>
                {course.category === 'skill' ? 'Skill Course' : 'Academic Course'}
              </span>
            </div>
          </div>
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
            course.level === 'beginner' 
              ? 'bg-green-100 text-green-800'
              : course.level === 'intermediate'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-red-100 text-red-800'
          }`}>
            {course.level}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-3">
          {course.description}
        </p>

        {/* Pricing */}
        <div className="bg-gradient-secondary p-4 rounded-lg mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <CurrencyDollarIcon className="h-5 w-5 text-primary-600" />
              <span className="font-semibold text-gray-900">Monthly Fee</span>
            </div>
            <div className="text-right">
              <div className="font-bold text-lg text-primary-600">
                {course.monthlyFeePKR} PKR
              </div>
              {course.monthlyFeeUSD && (
                <div className="text-sm text-gray-600">
                  ${course.monthlyFeeUSD} USD
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Course Details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center space-x-3">
            <ClockIcon className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">Duration: {course.duration}</span>
          </div>
          <div className="flex items-center space-x-3">
            <ComputerDesktopIcon className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">Mode: {course.mode}</span>
          </div>
          <div className="flex items-center space-x-3">
            <UserIcon className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">Instructor: {course.instructor}</span>
          </div>
          <div className="flex items-start space-x-3">
            <AcademicCapIcon className="h-4 w-4 text-gray-500 mt-0.5" />
            <span className="text-sm text-gray-600">Prerequisites: {course.prerequisites}</span>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          to={`/course/${course.id}`}
          className="w-full inline-block bg-gradient-primary text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 group-hover:scale-105 text-center btn-animate ripple-effect"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
