import React from 'react';
import { Link } from 'react-router-dom';
import type { Instructor } from '../types';

interface InstructorCardProps {
  instructor: Instructor;
}

const InstructorCard: React.FC<InstructorCardProps> = ({ instructor }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group card-hover scale-hover">
      <div className="p-6">
        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gradient-primary shadow-lg scale-hover float-animation">
            <img 
              src={instructor.avatar} 
              alt={instructor.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to initials if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.classList.add('bg-gradient-primary', 'flex', 'items-center', 'justify-center');
                target.parentElement!.innerHTML = `<span class="text-white text-2xl font-bold">${instructor.name.split(' ').map(n => n[0]).join('').toUpperCase()}</span>`;
              }}
            />
          </div>
        </div>

        {/* Info */}
        <div className="text-center mb-4">
          <h3 className="font-heading font-semibold text-xl text-gray-900 mb-2">
            {instructor.name}
          </h3>
          <p className="text-primary-600 font-medium mb-2">
            {instructor.title}
          </p>
          <p className="text-gray-600 text-sm">
            {instructor.experience}
          </p>
        </div>

        {/* Bio */}
        <div className="mb-4">
          <p className="text-gray-600 text-sm text-center line-clamp-3">
            {instructor.bio}
          </p>
        </div>

        {/* Specializations */}
        <div className="mb-6">
          <h4 className="font-medium text-gray-900 mb-3 text-center">Specializations</h4>
          <div className="flex flex-wrap gap-2 justify-center">
            {instructor.specializations.map((spec, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gradient-secondary text-primary-700 rounded-full text-sm font-medium bounce-hover"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* Contact Button */}
        <Link
          to={`/instructor/${instructor.id}`}
          className="w-full inline-block bg-gradient-primary text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 group-hover:scale-105 text-center btn-animate ripple-effect"
        >
          Contact Instructor
        </Link>
      </div>
    </div>
  );
};

export default InstructorCard;
