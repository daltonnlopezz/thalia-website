import React, { useState } from 'react';
import { ShoppingBag, Heart, Star, Plus, Minus, Search } from 'lucide-react';

const Clothing: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'leggings', name: 'Leggings' },
    { id: 'tops', name: 'Tops' },
    { id: 'bras', name: 'Sports Bras' },
    { id: 'accessories', name: 'Accessories' }
  ];

  const products = [
    {
      id: 1,
      name: 'Essential High-Waist Leggings',
      category: 'leggings',
      price: 89,
      originalPrice: 120,
      image: '/api/placeholder/300/400',
      rating: 4.8,
      reviews: 124,
      colors: ['Black', 'Navy', 'Forest Green', 'Dusty Rose'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      description: 'Buttery-soft leggings with a high-waist design that stays in place during any workout. Made from sustainable materials.',
      features: ['High-waist design', 'Squat-proof', 'Moisture-wicking', 'Sustainable materials']
    },
    {
      id: 2,
      name: 'Flow State Tank Top',
      category: 'tops',
      price: 45,
      originalPrice: 65,
      image: '/api/placeholder/300/400',
      rating: 4.9,
      reviews: 89,
      colors: ['White', 'Black', 'Sage Green', 'Coral'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      description: 'Lightweight, breathable tank perfect for pilates and yoga. Designed for freedom of movement.',
      features: ['Breathable fabric', 'Ribbed texture', 'Relaxed fit', 'Easy care']
    },
    {
      id: 3,
      name: 'Power Sports Bra',
      category: 'bras',
      price: 55,
      originalPrice: 75,
      image: '/api/placeholder/300/400',
      rating: 4.7,
      reviews: 156,
      colors: ['Black', 'White', 'Dusty Rose', 'Navy'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      description: 'High-support sports bra with adjustable straps and breathable mesh panels.',
      features: ['High support', 'Adjustable straps', 'Moisture-wicking', 'Seamless design']
    },
    {
      id: 4,
      name: 'Zen Wrap Cardigan',
      category: 'tops',
      price: 78,
      originalPrice: 98,
      image: '/api/placeholder/300/400',
      rating: 4.6,
      reviews: 67,
      colors: ['Cream', 'Charcoal', 'Sage Green'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      description: 'Versatile wrap cardigan perfect for layering. Soft, cozy, and effortlessly stylish.',
      features: ['Wrap design', 'Soft fabric', 'Versatile styling', 'Easy care']
    },
    {
      id: 5,
      name: 'Grip Socks',
      category: 'accessories',
      price: 18,
      originalPrice: 25,
      image: '/api/placeholder/300/400',
      rating: 4.8,
      reviews: 203,
      colors: ['Black', 'White', 'Gray', 'Pink'],
      sizes: ['S', 'M', 'L'],
      description: 'Non-slip grip socks perfect for pilates and barre classes. Stay grounded and connected.',
      features: ['Non-slip grip', 'Breathable', 'Seamless toe', 'Machine washable']
    },
    {
      id: 6,
      name: 'Balance Leggings',
      category: 'leggings',
      price: 95,
      originalPrice: 130,
      image: '/api/placeholder/300/400',
      rating: 4.9,
      reviews: 98,
      colors: ['Black', 'Navy', 'Burgundy', 'Olive'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      description: 'Premium leggings with compression technology and side pockets. Perfect for active lifestyles.',
      features: ['Compression technology', 'Side pockets', 'Squat-proof', 'Premium materials']
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-600 to-primary-600 text-white py-20">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-serif font-bold mb-6">
              Thalia's Clothing Line
            </h1>
            <p className="text-xl text-secondary-100 mb-8">
              Thoughtfully designed pilates and activewear that moves with you. 
              Sustainable, stylish, and built for the modern woman.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-center">
              <div className="flex items-center space-x-2">
                <Heart className="h-6 w-6" />
                <span>Sustainable Materials</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-6 w-6" />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShoppingBag className="h-6 w-6" />
                <span>Free Shipping</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ShoppingBag className="h-24 w-24 text-gray-400" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors duration-200">
                      <Heart className="h-5 w-5 text-gray-600" />
                    </button>
                  </div>
                  {product.originalPrice > product.price && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium">
                      Sale
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="grid lg:grid-cols-2 gap-8 p-8">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                <ShoppingBag className="h-32 w-32 text-gray-400" />
              </div>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                    {selectedProduct.name}
                  </h2>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="text-lg font-semibold">{selectedProduct.rating}</span>
                      <span className="text-gray-600">({selectedProduct.reviews} reviews)</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-3xl font-bold text-gray-900">${selectedProduct.price}</span>
                    {selectedProduct.originalPrice > selectedProduct.price && (
                      <span className="text-xl text-gray-500 line-through">${selectedProduct.originalPrice}</span>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                  <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Features</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedProduct.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center space-x-2 text-gray-600">
                        <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Colors</h3>
                    <div className="flex space-x-2">
                      {selectedProduct.colors.map((color: string, index: number) => (
                        <button
                          key={index}
                          className="px-3 py-1 border border-gray-300 rounded-full text-sm hover:border-primary-600 hover:text-primary-600 transition-colors duration-200"
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Sizes</h3>
                    <div className="flex space-x-2">
                      {selectedProduct.sizes.map((size: string, index: number) => (
                        <button
                          key={index}
                          className="w-10 h-10 border border-gray-300 rounded-full text-sm font-medium hover:border-primary-600 hover:text-primary-600 transition-colors duration-200"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Quantity</h3>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-primary-600 transition-colors duration-200"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="text-lg font-semibold">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-primary-600 transition-colors duration-200"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <button className="flex-1 btn-primary">
                      Add to Cart
                    </button>
                    <button
                      onClick={() => setSelectedProduct(null)}
                      className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-secondary-600 to-primary-600">
        <div className="container-max text-center">
          <h2 className="text-4xl font-serif font-bold text-white mb-6">
            Join the Movement
          </h2>
          <p className="text-xl text-secondary-100 mb-8 max-w-2xl mx-auto">
            Be the first to know about new collections, exclusive offers, and styling tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-secondary-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clothing;
