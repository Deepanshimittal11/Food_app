import Image from 'next/image'
import Button from './Button'

const Contact = () => {
  return (
    <section className="flexCenter w-full flex-col py-1">
      <div className="max-container padding-container relative w-full">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12">
          {/* <Image 
            src="/food_app_logo.png" 
            alt="contact" 
            width={50} 
            height={50} 
            className="mb-4"
          /> */}
          <h2 className="bold-40 lg:bold-64 text-center">Get in Touch</h2>
          <p className="regular-16 text-gray-30 text-center max-w-[600px] mt-4">
            Have questions about our services? We're here to help! Reach out to us through any of the following channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="flex flex-col gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="bold-24 mb-6">Contact Information</h3>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-green-50 p-3 text-white text-xl">
                    📍
                  </div>
                  <div>
                    <h4 className="bold-16">Address</h4>
                    <p className="regular-14 text-gray-30">123 Travel Street, Adventure City, TC 12345</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-green-50 p-3 text-white text-xl">
                    📞
                  </div>
                  <div>
                    <h4 className="bold-16">Phone</h4>
                    <p className="regular-14 text-gray-30">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-green-50 p-3 text-white text-xl">
                    ✉️
                  </div>
                  <div>
                    <h4 className="bold-16">Email</h4>
                    <p className="regular-14 text-gray-30">support@travelapp.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="bold-16 mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="rounded-full bg-green-50 p-3 hover:bg-green-90 transition-colors">
                    <Image src="/facebook.svg" alt="facebook" width={24} height={24} />
                  </a>
                  <a href="#" className="rounded-full bg-green-50 p-3 hover:bg-green-90 transition-colors">
                    <Image src="/instagram.svg" alt="instagram" width={24} height={24} />
                  </a>
                  <a href="#" className="rounded-full bg-green-50 p-3 hover:bg-green-90 transition-colors">
                    <Image src="/twitter.svg" alt="twitter" width={24} height={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="bold-24 mb-6">Send us a Message</h3>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="regular-14">Name</label>
                <input 
                  type="text" 
                  placeholder="Your name"
                  className="w-full p-3 rounded-lg border border-gray-20 focus:outline-none focus:border-green-50"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="regular-14">Email</label>
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="w-full p-3 rounded-lg border border-gray-20 focus:outline-none focus:border-green-50"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="regular-14">Subject</label>
                <input 
                  type="text" 
                  placeholder="Message subject"
                  className="w-full p-3 rounded-lg border border-gray-20 focus:outline-none focus:border-green-50"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="regular-14">Message</label>
                <textarea 
                  placeholder="Your message"
                  rows={4}
                  className="w-full p-3 rounded-lg border border-gray-20 focus:outline-none focus:border-green-50"
                />
              </div>

              <Button 
                type="submit"
                title="Send Message"
                variant="btn_green"
                className="mt-4"
              />
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="w-full h-[400px] rounded-3xl overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647043087964!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
