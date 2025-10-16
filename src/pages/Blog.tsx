import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Heart, BookOpen, Search, X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  likes: number;
  featured: boolean;
  markdownContent?: string;
}

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'pilates', name: 'Pilates' },
    { id: 'lifestyle', name: 'Lifestyle' },
    { id: 'wellness', name: 'Wellness' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'recipes', name: 'Recipes' }
  ];

  // Function to parse frontmatter from markdown
  const parseFrontmatter = (content: string) => {
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
    const match = content.match(frontmatterRegex);
    
    if (match) {
      const frontmatter = match[1];
      const markdownContent = match[2];
      
      const metadata: any = {};
      frontmatter.split('\n').forEach(line => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length > 0) {
          const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
          if (key.trim() === 'tags') {
            metadata[key.trim()] = value.split(',').map(tag => tag.trim());
          } else if (key.trim() === 'featured') {
            metadata[key.trim()] = value === 'true';
          } else {
            metadata[key.trim()] = value;
          }
        }
      });
      
      return { metadata, content: markdownContent };
    }
    
    return { metadata: {}, content };
  };

  // Load blog posts from markdown files
  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        // Load example blog posts with real content
        
        // Load the pilates journey post
        const pilatesPostContent = `---
title: "My Pilates Journey: From Beginner to Instructor"
excerpt: "How I discovered pilates and how it transformed not just my body, but my entire approach to wellness and self-care."
category: "pilates"
author: "Thalia"
date: "2024-01-15"
readTime: "5 min read"
tags: ["pilates", "journey", "wellness", "transformation"]
featured: true
---

# My Pilates Journey: From Beginner to Instructor

Three years ago, I walked into my first pilates class feeling completely out of place. I was the person who always chose the elliptical over anything that required coordination, and here I was, surrounded by people who seemed to move with such grace and ease.

## The Beginning

I remember that first class like it was yesterday. The instructor asked us to find our "neutral spine" and I had absolutely no idea what that meant. I spent most of the class looking around, trying to copy what everyone else was doing, feeling like I was failing at something that looked so simple.

But something kept me coming back. Maybe it was the way I felt after class - that unique combination of exhaustion and energy. Or maybe it was the instructor's gentle encouragement: *"It's not about perfection, it's about progress."*

## The Turning Point

After about six months of consistent practice, I started to notice changes that went far beyond the physical:

- **My posture improved** - I was standing taller, feeling more confident
- **I slept better** - The mindful breathing techniques helped me unwind
- **I felt stronger** - Not just physically, but mentally too
- **I was more present** - Pilates taught me to focus on the moment

## The Decision to Teach

The idea of becoming an instructor seemed impossible at first. I was still learning so much myself! But my instructor saw something in me that I didn't see in myself.

> "You have a natural ability to connect with people and help them understand their bodies," she told me one day after class.

That conversation changed everything. I enrolled in a comprehensive teacher training program, and six months later, I was teaching my first class.

## What I've Learned

Teaching pilates has taught me that everyone's journey is different. Some people come to pilates for physical strength, others for mental clarity, and many for both. What matters most is showing up and being kind to yourself in the process.

### My Top 3 Pilates Tips for Beginners:

1. **Start where you are** - Don't compare yourself to others in the class
2. **Focus on breath** - Your breath is your anchor during challenging movements
3. **Be patient** - Progress in pilates is often subtle but profound

## The Ripple Effect

What started as a way to get in shape has become so much more. Pilates has given me:

- A career I'm passionate about
- A community of amazing people
- A deeper understanding of my body
- Tools to help others on their wellness journey

## Looking Forward

I'm excited to share more of my pilates journey with you through this blog. Whether you're a complete beginner or have been practicing for years, I hope my experiences can inspire and support you on your own path.

Remember: **Every expert was once a beginner.** Every pro was once an amateur. Every icon was once an unknown.

---

*What's your pilates story? I'd love to hear about your journey in the comments below!*

**With love and gratitude,**  
*Thalia* 💕`;

        const morningRoutineContent = `---
title: "5 Morning Routines That Changed My Life"
excerpt: "Simple morning habits that set the tone for a productive, peaceful day ahead. Small changes, big impact."
category: "lifestyle"
author: "Thalia"
date: "2024-01-12"
readTime: "4 min read"
tags: ["morning routine", "productivity", "self-care", "wellness"]
featured: false
---

# 5 Morning Routines That Changed My Life

I used to be the person who hit snooze five times, rushed out the door with wet hair, and grabbed whatever was easiest for breakfast (usually a granola bar). Sound familiar?

Then I realized that how I started my day was setting the tone for everything that followed. So I made some small changes that had a **huge** impact on my overall wellbeing.

## 1. Wake Up 30 Minutes Earlier

I know, I know. This sounds impossible if you're already struggling to get enough sleep. But hear me out - those extra 30 minutes have given me:

- Time to wake up naturally (no more jarring alarm sounds!)
- Space to prepare for the day mentally
- A buffer for unexpected delays
- A sense of control over my morning

**Pro tip:** Start with just 10 minutes earlier and gradually work your way up.

## 2. Drink a Glass of Water First Thing

Before coffee, before anything else - water. Your body has been fasting all night and needs hydration.

I keep a glass of water by my bed and drink it as soon as I wake up. It's amazing how much more energized I feel throughout the day.

## 3. 5 Minutes of Gentle Movement

This doesn't have to be a full workout! I do a simple routine that takes just 5 minutes:

- 10 deep breaths
- Gentle neck rolls
- Shoulder shrugs
- A few cat-cow stretches
- 5 minutes of light pilates or yoga

This gets my blood flowing and helps me feel more awake than any cup of coffee ever could.

## 4. Write Down 3 Things I'm Grateful For

Gratitude practice has been a game-changer for my mindset. Every morning, I write down three things I'm grateful for. They can be big or small:

- The warm sun coming through my window
- My supportive partner
- Having a job I love
- The fact that I woke up healthy today

This simple practice has helped me start each day with a positive mindset.

## 5. Eat a Nourishing Breakfast

I used to skip breakfast or grab something quick and processed. Now I make sure to have something that will fuel my body properly.

My go-to breakfasts:
- **Overnight oats** with berries and nuts
- **Avocado toast** with a poached egg
- **Smoothie bowl** with spinach, banana, and protein powder
- **Greek yogurt** with granola and fresh fruit

## The Results

After implementing these routines consistently for just two weeks, I noticed:

- ✅ More energy throughout the day
- ✅ Better mood and less anxiety
- ✅ Improved focus and productivity
- ✅ Stronger immune system
- ✅ Better sleep quality at night

## Making It Stick

The key to making morning routines stick is to **start small**. Don't try to implement all five at once. Pick one that resonates with you and focus on that for a week. Once it becomes habit, add another.

Remember: **Progress, not perfection.** Some mornings you'll nail your routine, other mornings you'll hit snooze and rush out the door. That's okay! The goal is consistency over time, not perfection every single day.

## Your Turn

What's one small change you could make to your morning routine? I'd love to hear about it! Share in the comments below or tag me on social media.

---

*Remember: You have the power to design your day. Start with your morning.*

**With love and encouragement,**  
*Thalia* ✨`;

        const sustainableFashionContent = `---
title: "Sustainable Activewear: Why It Matters and Where to Find It"
excerpt: "The environmental impact of our clothing choices and how to build a more sustainable wardrobe that supports both your wellness journey and the planet."
category: "fashion"
author: "Thalia"
date: "2024-01-10"
readTime: "6 min read"
tags: ["sustainability", "fashion", "activewear", "environment", "conscious living"]
featured: false
---

# Sustainable Activewear: Why It Matters and Where to Find It

When I first started my pilates journey, I was all about finding the cutest, most affordable activewear. Fast fashion brands were my go-to - why pay $80 for leggings when I could get them for $20?

But then I learned about the true cost of fast fashion, and it completely changed how I approach my wardrobe.

## The Hidden Cost of Fast Fashion

The fashion industry is responsible for:

- **10% of global carbon emissions** (more than international flights and maritime shipping combined!)
- **20% of global wastewater** from textile dyeing and treatment
- **85% of textiles** end up in landfills each year
- **Microplastics** from synthetic fabrics polluting our oceans

When I realized that my $20 leggings were contributing to this environmental crisis, I knew I had to make a change.

## What Makes Activewear Sustainable?

Sustainable activewear focuses on:

### 🌱 **Materials**
- **Organic cotton** - Grown without harmful pesticides
- **Recycled polyester** - Made from plastic bottles
- **Tencel/Lyocell** - Made from sustainably sourced wood pulp
- **Hemp** - Requires minimal water and pesticides
- **Bamboo** - Fast-growing and naturally antimicrobial

### 🏭 **Manufacturing**
- **Fair labor practices** - Workers paid living wages
- **Local production** - Reduced transportation emissions
- **Water-efficient processes** - Less water waste during production
- **Chemical-free dyes** - Safer for workers and environment

### ♻️ **End of Life**
- **Biodegradable materials** - Break down naturally
- **Recycling programs** - Take back old items
- **Durability** - Made to last, not fall apart

## My Favorite Sustainable Activewear Brands

After years of research and trying different brands, here are my top picks:

### 1. **Girlfriend Collective** ⭐⭐⭐⭐⭐
- **What I love:** Made from recycled plastic bottles
- **Price range:** $38-88
- **Best for:** Leggings, sports bras, basic tees
- **Why it's great:** Transparent about their supply chain, inclusive sizing

### 2. **Pact** ⭐⭐⭐⭐
- **What I love:** 100% organic cotton basics
- **Price range:** $24-68
- **Best for:** Everyday wear, layering pieces
- **Why it's great:** Affordable, certified organic, great for sensitive skin

### 3. **Outdoor Voices** ⭐⭐⭐⭐
- **What I love:** Technical fabrics with sustainable focus
- **Price range:** $45-95
- **Best for:** High-performance activities
- **Why it's great:** Durable, functional, some recycled materials

### 4. **Patagonia** ⭐⭐⭐⭐⭐
- **What I love:** Industry leader in sustainability
- **Price range:** $35-150
- **Best for:** Outdoor activities, layering
- **Why it's great:** Lifetime guarantee, extensive recycling program

## Building a Sustainable Activewear Wardrobe

You don't need to replace everything at once! Here's how I built mine:

### **Phase 1: Audit What You Have**
- Take inventory of your current activewear
- Identify what you actually wear vs. what sits in your drawer
- Donate or sell items you don't love

### **Phase 2: Invest in Staples**
Start with these essential pieces:
- **1-2 pairs of high-quality leggings** (black and a fun color)
- **2-3 sports bras** (different support levels)
- **2-3 basic tanks/tees** (mix of short and long sleeve)
- **1-2 layering pieces** (hoodie, jacket)

### **Phase 3: Add Variety Gradually**
- **Specialty pieces** for specific activities
- **Seasonal items** as needed
- **Accessories** like headbands, socks

## Caring for Your Sustainable Activewear

To make your investment last:

### **Washing**
- **Cold water only** - Saves energy and prevents shrinking
- **Air dry when possible** - Extends fabric life
- **Wash less frequently** - Spot clean when possible
- **Use gentle detergents** - Avoid harsh chemicals

### **Storage**
- **Fold, don't hang** - Prevents stretching
- **Keep away from direct sunlight** - Prevents fading
- **Store in breathable containers** - Prevents mildew

## The Investment is Worth It

I know sustainable activewear costs more upfront, but here's the math:

**Fast fashion leggings:** $20 × 4 pairs per year = $80/year
**Sustainable leggings:** $80 × 1 pair every 2 years = $40/year

Plus, you get:
- Better quality and fit
- Peace of mind about environmental impact
- Support for ethical labor practices
- Items that actually last

## Small Steps, Big Impact

You don't have to be perfect! Every sustainable choice makes a difference:

- **Buy one sustainable piece** instead of three fast fashion items
- **Take care of what you have** to make it last longer
- **Buy secondhand** when possible
- **Support brands** that align with your values

## My Challenge to You

This month, I challenge you to:

1. **Audit your activewear** - What do you actually wear?
2. **Research one sustainable brand** - Find something that excites you
3. **Make one conscious purchase** - Quality over quantity
4. **Share your journey** - Tag me on social media!

---

*Remember: Sustainable fashion isn't about perfection, it's about progress. Every small choice we make adds up to create real change.*

**With love for our planet,**  
*Thalia* 🌍`;

        const { metadata: pilatesMetadata, content: pilatesContent } = parseFrontmatter(pilatesPostContent);
        const { metadata: morningMetadata, content: morningContent } = parseFrontmatter(morningRoutineContent);
        const { metadata: fashionMetadata, content: fashionContent } = parseFrontmatter(sustainableFashionContent);

        const newPosts: BlogPost[] = [
    {
      id: 1,
            title: pilatesMetadata.title || 'My Pilates Journey',
            excerpt: pilatesMetadata.excerpt || 'A sample blog post',
            content: pilatesMetadata.excerpt || 'A sample blog post',
            category: pilatesMetadata.category || 'pilates',
            author: pilatesMetadata.author || 'Thalia',
            date: pilatesMetadata.date || '2024-01-15',
            readTime: pilatesMetadata.readTime || '5 min read',
      image: '/api/placeholder/600/400',
            tags: pilatesMetadata.tags || ['pilates', 'journey'],
      likes: 42,
            featured: pilatesMetadata.featured || true,
            markdownContent: pilatesContent
    },
    {
      id: 2,
            title: morningMetadata.title || 'Morning Routines',
            excerpt: morningMetadata.excerpt || 'Simple morning habits',
            content: morningMetadata.excerpt || 'Simple morning habits',
            category: morningMetadata.category || 'lifestyle',
            author: morningMetadata.author || 'Thalia',
            date: morningMetadata.date || '2024-01-12',
            readTime: morningMetadata.readTime || '4 min read',
      image: '/api/placeholder/600/400',
            tags: morningMetadata.tags || ['morning routine'],
      likes: 38,
            featured: morningMetadata.featured || false,
            markdownContent: morningContent
    },
    {
      id: 3,
            title: fashionMetadata.title || 'Sustainable Activewear',
            excerpt: fashionMetadata.excerpt || 'Environmental impact of clothing',
            content: fashionMetadata.excerpt || 'Environmental impact of clothing',
            category: fashionMetadata.category || 'fashion',
            author: fashionMetadata.author || 'Thalia',
            date: fashionMetadata.date || '2024-01-10',
            readTime: fashionMetadata.readTime || '6 min read',
      image: '/api/placeholder/600/400',
            tags: fashionMetadata.tags || ['sustainability'],
      likes: 29,
            featured: fashionMetadata.featured || false,
            markdownContent: fashionContent
          }
        ];

        setBlogPosts(newPosts);
        setLoading(false);
      } catch (error) {
        console.error('Error loading blog posts:', error);
        setLoading(false);
      }
    };

    loadBlogPosts();
  }, []);


  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog posts...</p>
        </div>
      </div>
    );
  }

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
              
              <div className="text-xl text-gray-600 mb-6 max-w-3xl">
                {featuredPost.markdownContent ? (
                  <div className="prose prose-lg max-w-none">
                    <ReactMarkdown 
                      remarkPlugins={[remarkGfm]}
                    >
                      {featuredPost.markdownContent.split('\n').slice(0, 3).join('\n')}
                    </ReactMarkdown>
                  </div>
                ) : (
                  featuredPost.excerpt
                )}
              </div>
              
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
              
              <button 
                className="btn-primary"
                onClick={() => setSelectedPost(featuredPost)}
              >
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
                onClick={() => setSelectedPost(post)}
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
                  
                  <button 
                    className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPost(post);
                    }}
                  >
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

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                    {selectedPost.title}
                  </h2>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{selectedPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(selectedPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{selectedPost.readTime}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="prose prose-lg max-w-none">
                {selectedPost.markdownContent ? (
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {selectedPost.markdownContent}
                  </ReactMarkdown>
                ) : (
                  <p>{selectedPost.content}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
