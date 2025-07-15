import React from 'react';
import { 
  DocumentTextIcon, 
  ShieldCheckIcon, 
  CurrencyDollarIcon,
  UserGroupIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms & <span className="text-gradient">Conditions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Please read these terms and conditions carefully before enrolling in any of our courses. 
              By enrolling, you agree to comply with these terms.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Enrollment Terms */}
            <div className="bg-gradient-secondary rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                  <DocumentTextIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-gray-900">
                  Enrollment Terms
                </h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>
                    <strong>Age Requirement:</strong> Students must be at least 10 years old to enroll 
                    in our courses. Parental consent is required for students under 18.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>
                    <strong>Registration:</strong> Students must complete the enrollment form and provide 
                    accurate information. False information may result in enrollment cancellation.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>
                    <strong>Course Prerequisites:</strong> Students must meet the stated prerequisites 
                    for each course. Skill assessment may be required for advanced courses.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>
                    <strong>Class Schedule:</strong> Students are expected to attend classes regularly 
                    and on time. Schedule changes will be communicated in advance.
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                  <CurrencyDollarIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-gray-900">
                  Payment Terms
                </h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>
                    <strong>Monthly Fees:</strong> Course fees are charged monthly and must be paid 
                    by the 5th of each month. Late payments may incur additional charges.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>
                    <strong>Payment Methods:</strong> We accept bank transfers, online payments, 
                    and cash payments. All payments must be made in advance.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>
                    <strong>Foreign Students:</strong> International students can pay in USD 
                    through secure online payment gateways.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>
                    <strong>Fee Increases:</strong> We reserve the right to increase fees with 
                    30 days' written notice to students.
                  </p>
                </div>
              </div>
            </div>

            {/* Refund Policy */}
            <div className="bg-gradient-secondary rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                  <ShieldCheckIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-gray-900">
                  Refund Policy
                </h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>
                    <strong>Course Cancellation:</strong> Students may cancel their enrollment 
                    within 7 days of course start for a full refund.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>
                    <strong>Withdrawal:</strong> Students who withdraw after 7 days may receive 
                    a partial refund based on the number of classes attended.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>
                    <strong>Technical Issues:</strong> If we cannot provide promised services due 
                    to technical issues, full refunds will be provided.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <p>
                    <strong>No Refund Cases:</strong> No refunds will be given for courses 
                    completed, missed classes due to student absence, or disciplinary dismissals.
                  </p>
                </div>
              </div>
            </div>

            {/* Student Code of Conduct */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                  <UserGroupIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-gray-900">
                  Student Code of Conduct
                </h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>
                    <strong>Respectful Behavior:</strong> Students must treat instructors and 
                    fellow students with respect and courtesy at all times.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>
                    <strong>Academic Integrity:</strong> Students must maintain academic honesty 
                    and avoid plagiarism, cheating, or any form of academic misconduct.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>
                    <strong>Attendance:</strong> Regular attendance is expected. Students with 
                    excessive absences may be dropped from the course.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>
                    <strong>Technology Use:</strong> Students must use technology responsibly 
                    and follow guidelines for online classes and digital resources.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <p>
                    <strong>Disciplinary Action:</strong> Violations of the code of conduct 
                    may result in warnings, suspension, or dismissal from the program.
                  </p>
                </div>
              </div>
            </div>

            {/* Privacy Policy */}
            <div className="bg-gradient-secondary rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                  <ShieldCheckIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-gray-900">
                  Privacy Policy
                </h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>
                    <strong>Data Collection:</strong> We collect only necessary information 
                    for course administration and communication purposes.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>
                    <strong>Data Protection:</strong> Student information is kept confidential 
                    and secure. We do not share personal data with third parties.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>
                    <strong>Communication:</strong> We may contact students via email, phone, 
                    or messaging for course-related matters.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>
                    <strong>Testimonials:</strong> We may request permission to use student 
                    testimonials and success stories for marketing purposes.
                  </p>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                  <ExclamationTriangleIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-gray-900">
                  Limitation of Liability
                </h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>
                    <strong>Course Results:</strong> While we strive for excellence, we cannot 
                    guarantee specific exam results or job placement outcomes.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>
                    <strong>Technical Issues:</strong> Skill Verge is not liable for technical 
                    difficulties beyond our control that may affect online classes.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>
                    <strong>Force Majeure:</strong> We are not responsible for delays or 
                    cancellations due to circumstances beyond our control.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>
                    <strong>Maximum Liability:</strong> Our liability is limited to the amount 
                    of fees paid by the student for the specific course.
                  </p>
                </div>
              </div>
            </div>

            {/* Changes to Terms */}
            <div className="bg-gradient-secondary rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                  <DocumentTextIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-gray-900">
                  Changes to Terms
                </h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Skill Verge reserves the right to modify these terms and conditions at any time. 
                  Students will be notified of any changes via email or through our website. 
                  Continued enrollment after changes constitutes acceptance of the new terms.
                </p>
                
                <p>
                  For questions about these terms and conditions, please contact us at 
                  <a href="mailto:info@skillverge.com" className="text-primary-600 hover:underline ml-1">
                    info@skillverge.com
                  </a>
                  .
                </p>
                
                <p className="text-sm text-gray-600">
                  Last updated: January 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Questions About Our Terms?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us if you need clarification on any of our terms and conditions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-primary-600 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300">
              Contact Us
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-all duration-300">
              Back to Courses
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
