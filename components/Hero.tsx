import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-1 py-1 pb-2 md:gap-1 lg:py-[0.1px]">
      <div className="flex justify-center mb-8">
        <Link href="/menu" className="hover:opacity-90 transition-opacity">
          <Button 
            type="button" 
            title="View Full Menu" 
            variant="btn_green" 
          />
        </Link>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="hide-scrollbar flex h-[300px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[300px] xl:h-[300px] max-w-[100vw]">
          
          <div className="relative z-20 flex w-[268px] flex-shrink-0 flex-col gap-8 rounded-3xl bg-[url('/pasta.png')] bg-cover bg-center bg-no-repeat px-7 py-8">
            <div className="flex flex-col">
              <h3 className="bold-20 text-white">Signature Pasta</h3>
              <p className="regular-14 text-white">Handmade pasta with truffle cream sauce</p>
            </div>
            <Button 
              type="button" 
              title="Order Now" 
              variant="btn_white_text" 
              className="text-sm py-1 px-1"
            />
          </div>

          <div className="relative z-20 flex w-[268px] flex-shrink-0 flex-col gap-8 rounded-3xl bg-[url('/pizza.png')] bg-cover bg-center bg-no-repeat px-7 py-8">
            <div className="flex flex-col">
              <h3 className="bold-20 text-white">Margherita Pizza</h3>
              <p className="regular-14 text-white">Fresh mozzarella, basil & tomato sauce</p>
            </div>
            <Button 
              type="button" 
              title="Order Now" 
              variant="btn_white_text" 
              className="text-sm py-1 px-1"
            />
          </div>

          <div className="relative z-20 flex w-[268px] flex-shrink-0 flex-col gap-8 rounded-3xl bg-[url('/momos.png')] bg-cover bg-center bg-no-repeat px-7 py-8">
            <div className="flex flex-col">
              <h3 className="bold-20 text-white">Steamed Momos</h3>
              <p className="regular-14 text-white">Delicate dumplings filled with spiced vegetables</p>
            </div>
            <Button 
              type="button" 
              title="Order Now" 
              variant="btn_white_text" 
              className="text-sm py-1 px-1"
            />
          </div>

          <div className="relative z-20 flex w-[268px] flex-shrink-0 flex-col gap-8 rounded-3xl bg-[url('/noodles.jpg')] bg-cover bg-center bg-no-repeat px-7 py-8">
            <div className="flex flex-col">
              <h3 className="bold-20 text-white">Stir-Fry Noodles</h3>
              <p className="regular-14 text-white">Wok-tossed noodles with fresh vegetables</p>
            </div>
            <Button 
              type="button" 
              title="Order Now" 
              variant="btn_white_text" 
              className="text-sm py-1 px-1"
            />
          </div>

          <div className="relative z-20 flex w-[268px] flex-shrink-0 flex-col gap-8 rounded-3xl bg-[url('/roll.jpg')] bg-cover bg-center bg-no-repeat px-7 py-8">
            <div className="flex flex-col">
              <h3 className="bold-20 text-white">Chicken Roll</h3>
              <p className="regular-14 text-white">Spiced chicken wrapped in soft paratha</p>
            </div>
            <Button 
              type="button" 
              title="Order Now" 
              variant="btn_white_text" 
              className="text-sm py-1 px-1"
            />
          </div>

          <div className="relative z-20 flex w-[268px] flex-shrink-0 flex-col gap-8 rounded-3xl bg-[url('/sandwiches.jpg')] bg-cover bg-center bg-no-repeat px-7 py-8">
            <div className="flex flex-col">
              <h3 className="bold-20 text-white">Club Sandwich</h3>
              <p className="regular-14 text-white">Triple-decker with chicken, bacon & avocado</p>
            </div>
            <Button 
              type="button" 
              title="Order Now" 
              variant="btn_white_text" 
              className="text-sm py-1 px-1"
            />
          </div>

          <div className="relative z-20 flex w-[268px] flex-shrink-0 flex-col gap-8 rounded-3xl bg-[url('/shake1.png')] bg-cover bg-center bg-no-repeat px-7 py-8">
            <div className="flex flex-col">
              <h3 className="bold-20 text-white">Chocolate Shake</h3>
              <p className="regular-14 text-white">Rich chocolate with whipped cream</p>
            </div>
            <Button 
              type="button" 
              title="Order Now" 
              variant="btn_white_text" 
              className="text-sm py-1 px-1"
            />
          </div>

          <div className="relative z-20 flex w-[268px] flex-shrink-0 flex-col gap-8 rounded-3xl bg-[url('/shake2.png')] bg-cover bg-center bg-no-repeat px-7 py-8">
            <div className="flex flex-col">
              <h3 className="bold-20 text-white">Oreo Milkshake</h3>
              <p className="regular-14 text-white">Creamy vanilla with crushed Oreo cookies</p>
            </div>
            <Button 
              type="button" 
              title="Order Now" 
              variant="btn_white_text" 
              className="text-sm py-1 px-1"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero