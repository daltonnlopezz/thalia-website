import React, { useState } from 'react';
import { Star, Heart, ExternalLink, Search } from 'lucide-react';

const Recommendations: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'pilates', name: 'Pilates Equipment' },
    { id: 'activewear', name: 'Activewear' },
    { id: 'wellness', name: 'Wellness' },
    { id: 'beauty', name: 'Beauty & Skincare' },
    { id: 'home', name: 'Home & Lifestyle' }
  ];

  const recommendations = [
    {
      id: 1,
      name: 'Manduka Pro Yoga Mat',
      category: 'pilates',
      price: 120,
      originalPrice: 150,
      rating: 4.9,
      reviews: 2847,
      image: '/api/placeholder/300/300',
      brand: 'Manduka',
      description: 'The gold standard in yoga and pilates mats. Dense, supportive, and incredibly durable.',
      pros: ['Lifetime guarantee', 'Non-slip surface', 'Eco-friendly materials', 'Perfect thickness'],
      cons: ['Higher price point', 'Heavy to carry'],
      personalNote: 'I\'ve had this mat for 3 years and it still looks brand new. Worth every penny!',
      affiliateLink: 'https://example.com/manduka-pro',
      featured: true
    },
    {
      id: 2,
      name: 'Lululemon Align Leggings',
      category: 'activewear',
      price: 98,
      originalPrice: 118,
      rating: 4.8,
      reviews: 15234,
      image: '/api/placeholder/300/300',
      brand: 'Lululemon',
      description: 'Buttery-soft leggings that feel like a second skin. Perfect for pilates and everyday wear.',
      pros: ['Incredibly soft', 'Squat-proof', 'High-waist design', 'Great color selection'],
      cons: ['Pricey', 'Can pill over time'],
      personalNote: 'These are my go-to leggings for every pilates class. The comfort is unmatched.',
      affiliateLink: 'https://example.com/lululemon-align',
      featured: true
    },
    {
      id: 3,
      name: 'Theragun Mini Massage Gun',
      category: 'wellness',
      price: 199,
      originalPrice: 249,
      rating: 4.7,
      reviews: 8923,
      image: '/api/placeholder/300/300',
      brand: 'Theragun',
      description: 'Portable percussion therapy device perfect for muscle recovery after pilates sessions.',
      pros: ['Portable', 'Quiet operation', 'Long battery life', 'Effective relief'],
      cons: ['Expensive', 'Learning curve'],
      personalNote: 'This has been a game-changer for my recovery routine. My muscles thank me!',
      affiliateLink: 'https://example.com/theragun-mini',
      featured: false
    },
    {
      id: 4,
      name: 'Glossier Milky Jelly Cleanser',
      category: 'beauty',
      price: 18,
      originalPrice: 22,
      rating: 4.6,
      reviews: 4567,
      image: '/api/placeholder/300/300',
      brand: 'Glossier',
      description: 'Gentle, effective cleanser that removes makeup and dirt without stripping your skin.',
      pros: ['Gentle formula', 'Removes all makeup', 'Affordable', 'Great for sensitive skin'],
      cons: ['Small bottle', 'Not for oily skin'],
      personalNote: 'I\'ve tried so many cleansers, but this one is perfect for my sensitive skin.',
      affiliateLink: 'https://example.com/glossier-cleanser',
      featured: false
    },
    {
      id: 5,
      name: 'Pilates Ring (Magic Circle)',
      category: 'pilates',
      price: 35,
      originalPrice: 45,
      rating: 4.8,
      reviews: 1234,
      image: '/api/placeholder/300/300',
      brand: 'Balanced Body',
      description: 'Versatile pilates prop that adds resistance and challenge to your workouts.',
      pros: ['Versatile', 'Durable', 'Good resistance', 'Easy to store'],
      cons: ['Can be challenging for beginners', 'Limited exercises'],
      personalNote: 'This ring has transformed my home pilates practice. So many exercise variations!',
      affiliateLink: 'https://example.com/pilates-ring',
      featured: false
    },
    {
      id: 6,
      name: 'Saje Wellness Essential Oils Set',
      category: 'wellness',
      price: 89,
      originalPrice: 120,
      rating: 4.9,
      reviews: 2341,
      image: '/api/placeholder/300/300',
      brand: 'Saje',
      description: 'Premium essential oils set for aromatherapy and creating a calming home environment.',
      pros: ['High quality oils', 'Beautiful packaging', 'Great variety', 'Long-lasting'],
      cons: ['Expensive', 'Strong scents'],
      personalNote: 'These oils help me create the perfect atmosphere for my evening wind-down routine.',
      affiliateLink: 'https://example.com/saje-oils',
      featured: false
    }
  ];

  const filteredRecommendations = recommendations.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredItems = filteredRecommendations.filter(item => item.featured);
  const regularItems = filteredRecommendations.filter(item => !item.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-600 to-orange-600 text-white py-20">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-serif font-bold mb-6">
              My Recommendations
            </h1>
            <p className="text-xl text-yellow-100 mb-8">
              Handpicked products I love and trust. From pilates equipment to wellness essentials, 
              these are the items that have made a real difference in my life.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-center">
              <div className="flex items-center space-x-2">
                <Star className="h-6 w-6" />
                <span>Tested & Loved</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-6 w-6" />
                <span>Personal Reviews</span>
              </div>
              <div className="flex items-center space-x-2">
                <ExternalLink className="h-6 w-6" />
                <span>Affiliate Links</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Recommendations */}
      {featuredItems.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-max">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
              Featured Recommendations
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredItems.map((item) => (
                <div key={item.id} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Star className="h-12 w-12 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                        <span className="text-yellow-600 font-medium">{item.brand}</span>
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center space-x-1">
                          <Star className="h-5 w-5 text-yellow-400 fill-current" />
                          <span className="font-semibold">{item.rating}</span>
                          <span className="text-gray-500">({item.reviews} reviews)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-gray-900">${item.price}</span>
                          {item.originalPrice > item.price && (
                            <span className="text-lg text-gray-500 line-through">${item.originalPrice}</span>
                          )}
                        </div>
                      </div>
                      <a
                        href={item.affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center"
                      >
                        Shop Now
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filters and Search */}
      <section className="bg-white py-8 border-b">
        <div className="container-max">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-yellow-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-8">
            {regularItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Star className="h-10 w-10 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-yellow-600 font-medium text-sm">{item.brand}</span>
                        <span className="text-gray-500 text-sm">{item.category}</span>
                      </div>
                      <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                        {item.name}
                      </h3>
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="font-semibold text-sm">{item.rating}</span>
                          <span className="text-gray-500 text-sm">({item.reviews})</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xl font-bold text-gray-900">${item.price}</span>
                          {item.originalPrice > item.price && (
                            <span className="text-lg text-gray-500 line-through">${item.originalPrice}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{item.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Personal Note:</h4>
                    <p className="text-gray-600 italic">"{item.personalNote}"</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">Pros:</h4>
                      <ul className="space-y-1">
                        {item.pros.slice(0, 2).map((pro, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-center">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">Cons:</h4>
                      <ul className="space-y-1">
                        {item.cons.slice(0, 2).map((con, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-center">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a
                    href={item.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-primary inline-flex items-center justify-center"
                  >
                    Shop Now
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section-padding bg-gray-100">
        <div className="container-max">
          <div className="bg-white rounded-2xl p-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Transparency Note
            </h2>
            <p className="text-gray-600 mb-4">
              Some of the links on this page are affiliate links, which means I may earn a small commission 
              if you make a purchase through them. This comes at no extra cost to you and helps support 
              the content I create. I only recommend products I genuinely love and use myself.
            </p>
            <p className="text-gray-600">
              All opinions expressed are my own, and I'm committed to providing honest, helpful recommendations 
              that I believe will benefit you on your wellness journey.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="container-max text-center">
          <h2 className="text-4xl font-serif font-bold text-white mb-6">
            Have a Product to Recommend?
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            I'm always looking for new products to try and share with my community. 
            Send me your suggestions!
          </p>
          <button className="bg-white text-yellow-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
            Contact Me
          </button>
        </div>
      </section>
    </div>
  );
};

export default Recommendations;
