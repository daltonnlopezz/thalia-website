import React, { useState } from 'react';
import { Calendar, Clock, User, Heart, BookOpen, Tag, Search } from 'lucide-react';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'pilates', name: 'Pilates' },
    { id: 'lifestyle', name: 'Lifestyle' },
    { id: 'wellness', name: 'Wellness' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'recipes', name: 'Recipes' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'My Pilates Journey: From Beginner to Instructor',
      excerpt: 'How I discovered pilates and how it transformed not just my body, but my entire approach to wellness and self-care.',
      content: 'Full blog post content would go here...',
      category: 'pilates',
      author: 'Thalia',
      date: '2024-01-15',
      readTime: '5 min read',
      image: '/api/placeholder/600/400',
      tags: ['pilates', 'journey', 'wellness'],
      likes: 42,
      featured: true
    },
    {
      id: 2,
      title: '5 Morning Routines That Changed My Life',
      excerpt: 'Simple morning habits that set the tone for a productive, peaceful day ahead.',
      content: 'Full blog post content would go here...',
      category: 'lifestyle',
      author: 'Thalia',
      date: '2024-01-12',
      readTime: '3 min read',
      image: '/api/placeholder/600/400',
      tags: ['morning routine', 'productivity', 'self-care'],
      likes: 38,
      featured: false
    },
    {
      id: 3,
      title: 'Sustainable Activewear: Why It Matters',
      excerpt: 'The environmental impact of our clothing choices and how to build a more sustainable wardrobe.',
      content: 'Full blog post content would go here...',
      category: 'fashion',
      author: 'Thalia',
      date: '2024-01-10',
      readTime: '4 min read',
      image: '/api/placeholder/600/400',
      tags: ['sustainability', 'fashion', 'environment'],
      likes: 29,
      featured: false
    },
    {
      id: 4,
      title: 'The Mind-Body Connection in Pilates',
      excerpt: 'Exploring how pilates strengthens not just our physical body, but our mental and emotional wellbeing too.',
      content: 'Full blog post content would go here...',
      category: 'pilates',
      author: 'Thalia',
      date: '2024-01-08',
      readTime: '6 min read',
      image: '/api/placeholder/600/400',
      tags: ['pilates', 'mindfulness', 'wellness'],
      likes: 51,
      featured: true
    },
    {
      id: 5,
      title: 'My Favorite Smoothie Bowl Recipe',
      excerpt: 'A nutrient-packed breakfast that fuels my morning pilates sessions and keeps me energized all day.',
      content: 'Full blog post content would go here...',
      category: 'recipes',
      author: 'Thalia',
      date: '2024-01-05',
      readTime: '2 min read',
      image: '/api/placeholder/600/400',
      tags: ['recipes', 'healthy eating', 'breakfast'],
      likes: 33,
      featured: false
    },
    {
      id: 6,
      title: 'Building Confidence Through Movement',
      excerpt: 'How pilates helped me develop a deeper sense of self-confidence and body positivity.',
      content: 'Full blog post content would go here...',
      category: 'wellness',
      author: 'Thalia',
      date: '2024-01-03',
      readTime: '4 min read',
      image: '/api/placeholder/600/400',
      tags: ['confidence', 'body positivity', 'movement'],
      likes: 47,
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-primary-600 text-white py-20">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-serif font-bold mb-6">
              Thalia's Blog
            </h1>
            <p className="text-xl text-green-100 mb-8">
              Stories, insights, and inspiration from my journey in pilates, wellness, and life. 
              Join me as I share what I've learned along the way.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-center">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-6 w-6" />
                <span>Weekly Posts</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-6 w-6" />
                <span>Personal Stories</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="h-6 w-6" />
                <span>Authentic Voice</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 lg:p-12">
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured Post
                </span>
                <span className="text-primary-600 font-medium">{featuredPost.category}</span>
              </div>
              
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                {featuredPost.title}
              </h2>
              
              <p className="text-xl text-gray-600 mb-6 max-w-3xl">
                {featuredPost.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center space-x-2 text-gray-600">
                  <User className="h-5 w-5" />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Calendar className="h-5 w-5" />
                  <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="h-5 w-5" />
                  <span>{featuredPost.readTime}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Heart className="h-5 w-5" />
                  <span>{featuredPost.likes}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {featuredPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-white text-primary-600 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              
              <button className="btn-primary">
                Read Full Post
              </button>
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
                      ? 'bg-primary-600 text-white'
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
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="h-16 w-16 text-gray-400" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4" />
                      <span>{post.likes}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gradient-to-r from-green-600 to-primary-600">
        <div className="container-max text-center">
          <h2 className="text-4xl font-serif font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Get the latest posts delivered straight to your inbox. No spam, just inspiration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-green-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
