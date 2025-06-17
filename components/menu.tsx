import Image from 'next/image'
import Button from '@/components/Button'
import { useState, useEffect } from 'react'

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'main', name: 'Main Course' },
    { id: 'fast', name: 'Fast Food' },
    { id: 'drinks', name: 'Drinks' },
  ]

  const menuItems = [
    {
      id: 1,
      name: 'Signature Pasta',
      description: 'Handmade pasta with truffle cream sauce',
      price: 14.99,
      image: '/pasta.png',
      category: 'main',
      popular: true,
      time: '20-25 min',
    },
    {
      id: 2,
      name: 'Crispy Fries',
      description: 'Golden crispy fries with special seasoning',
      price: 4.99,
      image: '/fries.jpg',
      category: 'appetizers',
      time: '10-15 min',
    },
    {
      id: 3,
      name: 'Margherita Pizza',
      description: 'Fresh mozzarella, basil & tomato sauce',
      price: 12.99,
      image: '/pizza.png',
      category: 'main',
      popular: true,
      time: '15-20 min',
    },
    {
      id: 4,
      name: 'Classic Burger',
      description: 'Juicy beef patty with fresh vegetables',
      price: 9.99,
      image: '/burger.jpg',
      category: 'fast',
      time: '10-15 min',
    },
    {
      id: 5,
      name: 'Chocolate Shake',
      description: 'Rich chocolate with whipped cream',
      price: 5.99,
      image: '/shake1.png',
      category: 'drinks',
      time: '5-10 min',
    },
    {
      id: 6,
      name: 'Steamed Momos',
      description: 'Delicate dumplings filled with spiced vegetables',
      price: 8.99,
      image: '/momos.png',
      category: 'appetizers',
      time: '15-20 min',
    },
    {
      id: 7,
      name: 'Chicken Roll',
      description: 'Spiced chicken wrapped in soft paratha',
      price: 6.99,
      image: '/roll.jpg',
      category: 'fast',
      time: '10-15 min',
    },
    {
      id: 8,
      name: 'Fresh Mojito',
      description: 'Minty fresh with lime and soda',
      price: 4.99,
      image: '/mojito1.jpg',
      category: 'drinks',
      time: '5-10 min',
    },
  ]

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
          Our <span className="text-green-600">Menu</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover our culinary journey through carefully crafted dishes that will delight your senses! 🍽️
        </p>
      </div>

      {/* Category Navigation */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((category, index) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
              activeCategory === category.id
                ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-200 hover:border-green-300 shadow-sm'
            }`}
            style={{
              animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`,
              opacity: isVisible ? 1 : 0,
            }}
          >
            <span className="font-medium text-sm md:text-base">{category.name}</span>
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            className="menu-item perspective-1000 w-full max-w-[300px] mx-auto"
            style={{
              animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`,
              opacity: isVisible ? 1 : 0,
            }}
          >
            <div className="card relative w-full aspect-square transform-style-3d transition-transform duration-800 hover:rotate-y-180">
              {/* Front of card */}
              <div className="card-face absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-green-400 to-green-600 text-white p-6 backface-hidden">
                <div className="relative w-32 h-32 mb-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded-full"
                    priority={index < 4}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">{item.name}</h3>
                <p className="text-lg font-semibold">${item.price.toFixed(2)}</p>
                {item.popular && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <span>🔥</span> Popular
                  </div>
                )}
              </div>

              {/* Back of card */}
              <div className="card-face absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-green-700 text-white p-6 backface-hidden rotate-y-180">
                <h3 className="text-xl font-bold mb-3 text-center">{item.name}</h3>
                <p className="text-center mb-4 text-sm">{item.description}</p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm">⏱️ {item.time}</span>
                </div>
                <Button
                  type="button"
                  title="Add to Cart"
                  icon="/cart.png"
                  variant="btn_white"
                  className="w-full text-sm py-2.5 hover:scale-105 transition-transform duration-200"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="text-center py-16">
          <div className="text-7xl mb-6">🍽️</div>
          <h3 className="text-2xl font-bold text-gray-700 mb-3">No items in this category</h3>
          <p className="text-gray-500 max-w-md mx-auto mb-6">
            We're working on adding more delicious options to satisfy your cravings!
          </p>
          <button 
            onClick={() => setActiveCategory('all')}
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full hover:from-green-600 hover:to-green-700 transition-colors transform hover:scale-105 hover:shadow-lg text-sm font-medium"
          >
            View Full Menu
          </button>
        </div>
      )}

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        .transform-style-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Modern scrollbar styling */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }

        /* Selection styling */
        ::selection {
          background: #4ade80;
          color: white;
        }
      `}</style>
    </div>
  )
}

export default Menu