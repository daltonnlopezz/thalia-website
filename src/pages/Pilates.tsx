import React, { useState } from 'react';
import { Clock, Users, Heart, Star, CheckCircle } from 'lucide-react';

const Pilates: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  const classes = [
    {
      id: 'beginner',
      name: 'Beginner Pilates',
      duration: '45 minutes',
      maxStudents: 12,
      price: '$25',
      description: 'Perfect for those new to pilates. Learn the fundamentals with proper form and breathing techniques.',
      benefits: ['Build core strength', 'Improve flexibility', 'Learn proper alignment', 'Reduce stress'],
      schedule: 'Mondays & Wednesdays, 6:00 PM'
    },
    {
      id: 'intermediate',
      name: 'Intermediate Pilates',
      duration: '60 minutes',
      maxStudents: 10,
      price: '$35',
      description: 'For those with some pilates experience. Challenge yourself with more advanced movements.',
      benefits: ['Enhanced core strength', 'Better balance', 'Increased flexibility', 'Improved posture'],
      schedule: 'Tuesdays & Thursdays, 7:00 PM'
    },
    {
      id: 'advanced',
      name: 'Advanced Pilates',
      duration: '75 minutes',
      maxStudents: 8,
      price: '$45',
      description: 'High-intensity pilates for experienced practitioners. Push your limits safely.',
      benefits: ['Maximum strength gains', 'Advanced flexibility', 'Mental focus', 'Peak performance'],
      schedule: 'Fridays, 6:30 PM & Saturdays, 10:00 AM'
    },
    {
      id: 'reformer',
      name: 'Reformer Pilates',
      duration: '50 minutes',
      maxStudents: 6,
      price: '$55',
      description: 'Small group reformer classes for personalized attention and advanced techniques.',
      benefits: ['Personalized instruction', 'Advanced equipment', 'Targeted muscle work', 'Injury prevention'],
      schedule: 'Sundays, 9:00 AM & 11:00 AM'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-serif font-bold mb-6">
              Pilates Classes
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Transform your body and mind with professional pilates instruction. 
              All levels welcome in our supportive, encouraging environment.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-center">
              <div className="flex items-center space-x-2">
                <Heart className="h-6 w-6" />
                <span>All Levels Welcome</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-6 w-6" />
                <span>Small Class Sizes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-6 w-6" />
                <span>Expert Instruction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Choose Your Class
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each class is designed to meet you where you are and help you progress at your own pace
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {classes.map((classItem) => (
              <div
                key={classItem.id}
                className={`bg-white rounded-2xl shadow-lg p-8 cursor-pointer transition-all duration-300 hover:shadow-xl ${
                  selectedClass === classItem.id ? 'ring-2 ring-primary-600' : ''
                }`}
                onClick={() => setSelectedClass(selectedClass === classItem.id ? null : classItem.id)}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                      {classItem.name}
                    </h3>
                    <p className="text-gray-600">{classItem.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary-600">{classItem.price}</div>
                    <div className="text-sm text-gray-500">per class</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="h-5 w-5" />
                    <span>{classItem.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users className="h-5 w-5" />
                    <span>Max {classItem.maxStudents}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Schedule:</h4>
                  <p className="text-gray-600">{classItem.schedule}</p>
                </div>

                {selectedClass === classItem.id && (
                  <div className="border-t pt-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {classItem.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center space-x-2 text-gray-600">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <button className="w-full mt-6 btn-primary">
                  Book This Class
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Thalia Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                Meet Your Instructor
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Hi, I'm Thalia! With over 8 years of experience in pilates instruction, 
                I'm passionate about helping you discover the transformative power of this practice.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                My approach combines traditional pilates principles with modern techniques, 
                ensuring each class is both challenging and accessible. I believe pilates 
                is for every body, and I'm here to guide you on your wellness journey.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">Certified Pilates Instructor (PMA)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">8+ Years Teaching Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">Specialized in Injury Prevention</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
                <Heart className="h-32 w-32 text-primary-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-max text-center">
          <h2 className="text-4xl font-serif font-bold text-white mb-6">
            Ready to Start Your Pilates Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Book your first class today and experience the difference professional pilates instruction can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Book Your First Class
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Contact Me
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pilates;
