import React from 'react'
import Button from './Button'
import Image from 'next/image'

const Drinks = () => {
  return (
    <section className="flexCenter w-full flex-col py-16 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.png')] bg-cover bg-center bg-no-repeat opacity-20" />
      
      <div className="max-container padding-container relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section - Drink Details */}
          <div className="flex flex-col gap-8 relative">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-green-50/20">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-green-50 animate-bounce bold">
                    <Image src="/food_app_logo.png" alt="drinks" width={80} height={80} />
                  </div>
                  <h2 className="bold-40 bg-gradient-to-r from-green-50 to-green-90 bg-clip-text text-transparent">Our Signature Drinks</h2>
                </div>

                <div className="flex flex-col gap-4">
                  <p className="regular-16 text-gray-30 leading-relaxed">
                    Experience our handcrafted beverages made with premium ingredients and served with passion. From refreshing mojitos to indulgent milkshakes, we've got something for every taste.
                  </p>
                  
                  <div className="flex flex-col gap-3">
                    <h3 className="bold-20 text-green-50 flex items-center gap-2">
                      <span className="text-2xl">✨</span> Featured Categories
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-green-50/10 p-4 rounded-2xl hover:bg-green-50/20 transition-colors">
                        <h4 className="bold-16 text-green-50 mb-2">Classic Mojitos</h4>
                        <p className="regular-14 text-gray-30">Fresh mint & premium rum</p>
                      </div>
                      <div className="bg-green-50/10 p-4 rounded-2xl hover:bg-green-50/20 transition-colors">
                        <h4 className="bold-16 text-green-50 mb-2">Milkshakes</h4>
                        <p className="regular-14 text-gray-30">Rich & creamy delights</p>
                      </div>
                      <div className="bg-green-50/10 p-4 rounded-2xl hover:bg-green-50/20 transition-colors">
                        <h4 className="bold-16 text-green-50 mb-2">Smoothies</h4>
                        <p className="regular-14 text-gray-30">Fresh fruit blends</p>
                      </div>
                      <div className="bg-green-50/10 p-4 rounded-2xl hover:bg-green-50/20 transition-colors">
                        <h4 className="bold-16 text-green-50 mb-2">Mocktails</h4>
                        <p className="regular-14 text-gray-30">Creative non-alcoholic</p>
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="button"
                    title="View Full Menu"
                    variant="btn_green"
                    className="mt-4 hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Drink Images */}
          <div className="relative h-[600px]">
            {/* Large Image - Top Right */}
            <div className="absolute top-0 right-0 w-[400px] h-[300px] rounded-3xl overflow-hidden group hover:z-10 transition-all duration-300 hover:scale-105">
              <Image
                src="/shake1.png"
                alt="Smoothies"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h3 className="bold-20">Smoothies</h3>
                  <p className="regular-14">Rich and creamy</p>
                </div>
              </div>
            </div>

            {/* Medium Image - Bottom Left */}
            <div className="absolute bottom-0 left-0 w-[300px] h-[250px] rounded-3xl overflow-hidden group hover:z-10 transition-all duration-300 hover:scale-105">
              <Image
                src="/mojito1.jpg"
                alt="Classic Mojito"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <h3 className="bold-16">Classic Mojito</h3>
                </div>
              </div>
            </div>

            {/* Small Image - Middle Right */}
            <div className="absolute top-[200px] right-[100px] w-[200px] h-[180px] rounded-3xl overflow-hidden group hover:z-10 transition-all duration-300 hover:scale-105">
              <Image
                src="/shake4.jpg"
                alt="Strawberry Shake"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <h3 className="bold-16">Strawberry Shake</h3>
                </div>
              </div>
            </div>

            {/* Small Image - Middle Left */}
            <div className="absolute top-[150px] left-[50px] w-[180px] h-[160px] rounded-3xl overflow-hidden group hover:z-10 transition-all duration-300 hover:scale-105">
              <Image
                src="/mojito2.jpg"
                alt="Berry Mojito"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <div className="text-white">
                  <h3 className="bold-14">Berry Mojito</h3>
                </div>
              </div>
            </div>

            {/* Small Image - Bottom Right */}
            <div className="absolute bottom-[50px] right-[50px] w-[220px] h-[200px] rounded-3xl overflow-hidden group hover:z-10 transition-all duration-300 hover:scale-105">
              <Image
                src="/mojito3.jpg"
                alt="Tropical Mojito"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <div className="text-white">
                  <h3 className="bold-14">Tropical Mojito</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Drinks