import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeftIcon, 
  EnvelopeIcon, 
  AcademicCapIcon, 
  TrophyIcon,
  StarIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline';
import { instructors } from '../data';

const InstructorDetail: React.FC = () => {
  const { instructorId } = useParams<{ instructorId: string }>();
  
  const instructor = instructors.find(i => i.id === instructorId);

  if (!instructor) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Instructor Not Found</h1>
          <Link
            to="/faculty"
            className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Faculty
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              to="/faculty"
              className="inline-flex items-center text-primary-600 hover:text-primary-800 transition-colors link-hover"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to Faculty
            </Link>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Profile Image */}
            <div className="lg:col-span-1">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-8 border-white shadow-2xl mb-6">
                  <img 
                    src={instructor.avatar} 
                    alt={instructor.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.classList.add('bg-gradient-primary', 'flex', 'items-center', 'justify-center');
                      target.parentElement!.innerHTML = `<span class="text-white text-6xl font-bold">${instructor.name.split(' ').map(n => n[0]).join('').toUpperCase()}</span>`;
                    }}
                  />
                </div>
                
                {/* Social Links */}
                <div className="flex justify-center space-x-4 mb-6">
                  <a 
                    href={instructor.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 scale-hover"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href={instructor.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-all duration-300 scale-hover"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a 
                    href={`mailto:${instructor.email}`}
                    className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-all duration-300 scale-hover"
                  >
                    <EnvelopeIcon className="w-6 h-6" />
                  </a>
                </div>
                
                {/* Contact Button */}
                <a
                  href={`mailto:${instructor.email}`}
                  className="inline-flex items-center px-6 py-3 bg-gradient-primary text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 btn-animate"
                >
                  <EnvelopeIcon className="h-5 w-5 mr-2" />
                  Contact Instructor
                </a>
              </div>
            </div>
            
            {/* Profile Details */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <div>
                  <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    {instructor.name}
                  </h1>
                  <p className="text-xl text-primary-600 font-medium mb-4">
                    {instructor.title}
                  </p>
                  <p className="text-gray-600 flex items-center">
                    <BriefcaseIcon className="h-5 w-5 mr-2" />
                    {instructor.experience}
                  </p>
                </div>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gradient-secondary p-4 rounded-lg text-center">
                    <StarIcon className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">Experience</div>
                    <div className="text-sm text-gray-600">{instructor.experience}</div>
                  </div>
                  <div className="bg-gradient-secondary p-4 rounded-lg text-center">
                    <AcademicCapIcon className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">Specializations</div>
                    <div className="text-sm text-gray-600">{instructor.specializations.length} areas</div>
                  </div>
                </div>
                
                {/* About */}
                <div>
                  <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">About</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: instructor.fullBio || '' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education & Position */}
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <AcademicCapIcon className="h-6 w-6 text-primary-600 mr-2" />
                  Education
                </h3>
                <div className="bg-gradient-secondary p-6 rounded-lg">
                  {Array.isArray(instructor.education) ? (
                    <ul className="space-y-2">
                      {instructor.education.map((edu, idx) => (
                        <li key={idx} className="text-gray-700 font-medium flex items-start">
                          <span className="inline-block w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></span>
                          <span>{edu}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700 font-medium">{instructor.education}</p>
                  )}
                </div>
              </div>
              
              <div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <BriefcaseIcon className="h-6 w-6 text-primary-600 mr-2" />
                  Current Position
                </h3>
                <div className="bg-gradient-secondary p-6 rounded-lg">
                  <p className="text-gray-700 font-medium">{instructor.title}</p>
                </div>
              </div>
            </div>
            
            {/* Specializations */}
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">Specializations</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {instructor.specializations.map((spec, index) => (
                    <div
                      key={index}
                      className="bg-white border border-primary-200 px-4 py-3 rounded-lg text-center font-medium text-primary-700 hover:bg-primary-50 transition-all duration-300 scale-hover"
                    >
                      {spec}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Created by section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-gray-600">
              This website is created by{' '}
              <span className="font-semibold text-primary-600">Muhammad Assad Ullah</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstructorDetail;
