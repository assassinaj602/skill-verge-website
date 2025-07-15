import React from 'react';
import { 
  AcademicCapIcon, 
  LightBulbIcon, 
  UserGroupIcon,
  CheckCircleIcon,
  StarIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-gradient">Skill Verge</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are dedicated to providing high-quality education that combines academic excellence 
              with practical skills development, preparing students for success in the modern world.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Skill Verge was founded with a simple yet powerful vision: to bridge the gap between 
                traditional academic education and the practical skills demanded by today's rapidly 
                evolving job market. We recognized that students needed more than just theoretical 
                knowledge to succeed in their careers.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Starting with a small team of passionate educators, we began offering courses that 
                combined rigorous academic preparation with hands-on technical training. Our approach 
                has helped hundreds of students excel in their examinations while also developing 
                valuable skills in programming, design, and digital literacy.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to expand our offerings while maintaining our commitment to 
                personalized attention, practical learning, and academic excellence.
              </p>
            </div>
            <div className="bg-gradient-secondary rounded-xl p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                  <div className="text-gray-600">Students Taught</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">3+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
                  <div className="text-gray-600">Courses Offered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">95%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-16 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Teaching Philosophy
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe in a holistic approach to education that nurtures both academic achievement 
              and practical skills development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <LightBulbIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-center mb-4">
                Interactive Learning
              </h3>
              <p className="text-gray-600 text-center">
                We use modern teaching methods that engage students actively in the learning process, 
                making complex concepts easier to understand and remember.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <UserGroupIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-center mb-4">
                Personalized Attention
              </h3>
              <p className="text-gray-600 text-center">
                Small class sizes ensure that every student receives individual attention and support 
                tailored to their unique learning style and pace.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <AcademicCapIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-center mb-4">
                Practical Application
              </h3>
              <p className="text-gray-600 text-center">
                Every theoretical concept is reinforced with practical exercises and real-world 
                applications to ensure deep understanding and retention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Goals */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Goals
            </h2>
            <p className="text-lg text-gray-600">
              We strive to achieve excellence in education and make a positive impact on our students' lives
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircleIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Academic Excellence</h3>
                  <p className="text-gray-600">
                    Help students achieve top grades in their O/A Levels, FSC, and ICS examinations 
                    through comprehensive preparation and expert guidance.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircleIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Skill Development</h3>
                  <p className="text-gray-600">
                    Equip students with modern technical skills including programming, web development, 
                    mobile app development, and digital design.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircleIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Career Preparation</h3>
                  <p className="text-gray-600">
                    Prepare students for successful careers by combining academic knowledge with 
                    practical skills and industry insights.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircleIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Accessible Education</h3>
                  <p className="text-gray-600">
                    Make quality education accessible to students from all backgrounds through 
                    affordable pricing and flexible online learning options.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircleIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Innovation in Learning</h3>
                  <p className="text-gray-600">
                    Continuously innovate our teaching methods and curriculum to stay ahead of 
                    educational trends and industry requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircleIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Global Standards</h3>
                  <p className="text-gray-600">
                    Maintain international standards in education while catering to local 
                    examination requirements and cultural contexts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Approach */}
      <section className="py-16 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Educational Approach
            </h2>
            <p className="text-lg text-gray-600">
              We follow a comprehensive methodology that ensures effective learning and skill development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Assessment</h3>
              <p className="text-gray-600">
                Initial assessment to understand student's current level and learning goals
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Customization</h3>
              <p className="text-gray-600">
                Personalized learning path tailored to individual needs and pace
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Implementation</h3>
              <p className="text-gray-600">
                Interactive lessons with practical exercises and real-world applications
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">4</span>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Evaluation</h3>
              <p className="text-gray-600">
                Regular assessment and feedback to ensure continuous improvement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-gray-600">
              We take pride in our students' success and our contribution to their achievements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-secondary rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <TrophyIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Top Grades</h3>
              <p className="text-gray-600 mb-4">
                Over 90% of our students achieve A or A* grades in their examinations
              </p>
              <div className="text-3xl font-bold text-primary-600">90%</div>
            </div>

            <div className="bg-gradient-secondary rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <StarIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Student Satisfaction</h3>
              <p className="text-gray-600 mb-4">
                Consistently high satisfaction rates from students and parents
              </p>
              <div className="text-3xl font-bold text-primary-600">4.9/5</div>
            </div>

            <div className="bg-gradient-secondary rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <UserGroupIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Community Impact</h3>
              <p className="text-gray-600 mb-4">
                Positive impact on local education and skill development
              </p>
              <div className="text-3xl font-bold text-primary-600">500+</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
