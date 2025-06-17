import React from 'react'
import Button from './Button'
import Image from 'next/image'

const NonVeg = () => {
  return (
    <section className="flexCenter w-full flex-col py-16 relative">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 bg-[url('/pattern.png')] bg-cover bg-center bg-no-repeat opacity-20" />
       */}
      <div className="max-container padding-container relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          

          {/* Right Section - NON VEG Images */}
          <div className="relative h-[600px]">
            {/* Large Image - Top Right */}
            <div className="absolute top-0 right-0 w-[400px] h-[300px] rounded-3xl overflow-hidden group hover:z-10 transition-all duration-300 hover:scale-105">
              <Image
                src="/non-veg-pizza.png"
                alt="Non-Veg Pizza"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h3 className="bold-20">Non-Veg Pizza</h3>
                  <p className="regular-14">Loaded with premium meats</p>
                </div>
              </div>
            </div>

            {/* Medium Image - Bottom Left */}
            <div className="absolute bottom-0 left-0 w-[300px] h-[250px] rounded-3xl overflow-hidden group hover:z-10 transition-all duration-300 hover:scale-105">
              <Image
                src="/non-veg-item.png"
                alt="Grilled Chicken"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <h3 className="bold-16">Grilled Chicken</h3>
                </div>
              </div>
            </div>

            {/* Small Image - Middle Right */}
            <div className="absolute top-[200px] right-[100px] w-[200px] h-[180px] rounded-3xl overflow-hidden group hover:z-10 transition-all duration-300 hover:scale-105">
              <Image
                src="/momos.png"
                alt="Non-Veg Momos"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <h3 className="bold-16">Non-Veg Momos</h3>
                </div>
              </div>
            </div>

            {/* Small Image - Middle Left */}
            <div className="absolute top-[150px] left-[50px] w-[180px] h-[160px] rounded-3xl overflow-hidden group hover:z-10 transition-all duration-300 hover:scale-105">
              <Image
                src="/roll.jpg"
                alt="Non-Veg Roll"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <div className="text-white">
                  <h3 className="bold-14">Non-Veg Roll</h3>
                </div>
              </div>
            </div>

            {/* Small Image - Bottom Right */}
            <div className="absolute bottom-[50px] right-[50px] w-[220px] h-[200px] rounded-3xl overflow-hidden group hover:z-10 transition-all duration-300 hover:scale-105">
              <Image
                src="/non-veg-burger.png"
                alt="Non-Veg Burger"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <div className="text-white">
                  <h3 className="bold-14">Non-Veg Burger</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Left Section - Non-Veg Specialties */}
          <div className="flex flex-col gap-8 relative">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-green-50/20">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-green-50 animate-bounce bold">
                    <Image src="/food_app_logo.png" alt="nonveg" width={80} height={80} />
                  </div>
                  <h2 className="bold-40 bg-gradient-to-r from-green-50 to-green-90 bg-clip-text text-transparent">Non-Vegetarian Specialties</h2>
                </div>

                <div className="flex flex-col gap-4">
                  <p className="regular-16 text-gray-30 leading-relaxed">
                    Explore bold flavors and hearty dishes with our non-veg menu—featuring premium cuts, sizzling grills, and rich, aromatic curries cooked to perfection.
                  </p>
                  
                  <div className="flex flex-col gap-3">
                    <h3 className="bold-20 text-green-50 flex items-center gap-2">
                      <span className="text-2xl">🍗</span> Chef's Recommendations
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-green-50/10 p-4 rounded-2xl hover:bg-green-50/20 transition-colors">
                        <h4 className="bold-16 text-green-50 mb-2">Grilled Chicken</h4>
                        <p className="regular-14 text-gray-30">Juicy, smoky, and tender</p>
                      </div>
                      <div className="bg-green-50/10 p-4 rounded-2xl hover:bg-green-50/20 transition-colors">
                        <h4 className="bold-16 text-green-50 mb-2">Seafood Platter</h4>
                        <p className="regular-14 text-gray-30">Fresh catch, expertly cooked</p>
                      </div>
                      <div className="bg-green-50/10 p-4 rounded-2xl hover:bg-green-50/20 transition-colors">
                        <h4 className="bold-16 text-green-50 mb-2">Spicy Lamb Curry</h4>
                        <p className="regular-14 text-gray-30">Rich, aromatic spices</p>
                      </div>
                      <div className="bg-green-50/10 p-4 rounded-2xl hover:bg-green-50/20 transition-colors">
                        <h4 className="bold-16 text-green-50 mb-2">Classic Burgers</h4>
                        <p className="regular-14 text-gray-30">All-time favorite, juicy patties</p>
                      </div>
                    </div>
                  </div>
                  {/* Inspirational Quote */}
                  {/* <div className="mt-4 p-4 bg-green-50/5 rounded-xl border border-green-50/10">
                    <p className="italic text-gray-30 regular-16">
                      "One cannot think well, love well, sleep well, if one has not dined well."
                      <span className="block text-right text-green-50 mt-2">- Virginia Woolf</span>
                    </p>
                  </div> */}

                  <Button 
                    type="button"
                    title="Discover More"
                    variant="btn_green"
                    className="mt-4 hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default NonVeg