import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Sparkles, ShoppingBag, BookOpen, Star } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 py-12 sm:py-16 lg:py-20">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-responsive-xl font-serif font-bold text-gray-900 leading-tight">
                  Welcome to
                  <span className="text-primary-600 block">Thalia's World</span>
                </h1>
                <p className="text-responsive-base text-gray-600 leading-relaxed">
                  Discover the perfect balance of wellness, fashion, and lifestyle. 
                  Join me on a journey of authentic living and personal growth.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/blog" className="btn-primary inline-flex items-center justify-center">
                  Read My Blog
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/recommendations" className="btn-secondary inline-flex items-center justify-center">
                  See My Recommendations
                  <Heart className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center">
                  <Heart className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 text-primary-600" />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-primary-600 text-white p-2 sm:p-3 rounded-full shadow-lg">
                <Sparkles className="h-4 w-4 sm:h-6 sm:w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-responsive-lg font-serif font-bold text-gray-900 mb-4">
              What You'll Find Here
            </h2>
            <p className="text-responsive-base text-gray-600 max-w-3xl mx-auto">
              A curated space where wellness meets lifestyle, fashion, and authentic recommendations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Blog */}
            <Link to="/blog" className="group">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                <div className="bg-primary-600 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-3 sm:mb-4">
                  Lifestyle Blog
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  Personal stories, wellness tips, and insights into my daily life.
                </p>
                <div className="text-primary-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Read More →
                </div>
              </div>
            </Link>

            {/* Recommendations */}
            <Link to="/recommendations" className="group">
              <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                <div className="bg-secondary-600 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Star className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-3 sm:mb-4">
                  Recommendations
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  Handpicked products and brands I love and trust for your lifestyle.
                </p>
                <div className="text-secondary-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Discover →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-max text-center">
          <h2 className="text-responsive-lg font-serif font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-responsive-base text-primary-100 mb-8 max-w-2xl mx-auto">
            Join our community and discover the perfect balance of wellness, style, and authentic living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-6 sm:px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Get in Touch
            </Link>
            <Link to="/blog" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-6 sm:px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Read My Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
