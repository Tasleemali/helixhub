'use client'
import Link from "next/link";
export default function Home() {
  return (
    <div className="font-sans bg-white text-[#0A2A43]">
      {/* Home Section */}
      <section
  id="home"
  className="w-full flex flex-col justify-center items-center text-center px-6 sm:px-8 md:px-16 py-20 md:py-28 bg-gradient-to-b from-white to-[#e6f0f8] shadow-lg"
>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1D3C59] mb-4 leading-tight tracking-wide">
  HelixHub Communication
</h1>
  <p className="text-xl md:text-2xl font-medium text-[#0A2A43] mb-5 max-w-3xl mx-auto">
    Bridging Global Healthcare with Trusted Telecommunication Solutions.
  </p>
  <p className="text-base md:text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
    At HelixHub, we specialize in international telecalling and lead generation for the genetic testing industry, offering precise, HIPAA-compliant solutions to help healthcare companies grow and succeed.
  </p>
  <div className="flex justify-center items-center space-x-4">
    <Link
      href="#services"
      className="text-white bg-[#0A2A43] px-6 py-2 rounded-full text-lg font-semibold transition-all hover:bg-teal-400"
    >
      Learn More
    </Link>
    <Link
      href="#contact"
      className="text-[#0A2A43] border-2 border-[#0A2A43] px-6 py-2 rounded-full text-lg font-semibold transition-all hover:bg-[#0A2A43] hover:text-white"
    >
      Get in Touch
    </Link>
  </div>
</section>
      {/* About Section */}
      <section
        id="about"
        className="w-full bg-[#f9f9f9] px-4 sm:px-6 md:px-12 py-16 md:py-24"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">About Us</h2>
          <div className="space-y-5 text-base md:text-lg text-gray-800">
            <p><strong>Mission:</strong> To provide top-notch international telecalling and lead generation services for the genetic testing industry.</p>
            <p><strong>Vision:</strong> To be the most trusted outsourcing partner for healthcare providers in the US and UK.</p>
            <p>We focus on building long-term relationships with our clients through professional, efficient, and HIPAA-compliant communication strategies.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="w-full px-4 sm:px-6 md:px-12 py-16 md:py-24"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-base md:text-lg text-gray-800">
            <div>
              <h3 className="font-bold mb-1">International Telecalling</h3>
              <p>Dedicated calling team for US/UK clients, offering clear and empathetic engagement with patients.</p>
            </div>
            <div>
              <h3 className="font-bold mb-1">Lead Generation</h3>
              <p>High-conversion leads focused on the genetic testing domain with ethical outreach strategies.</p>
            </div>
            <div>
              <h3 className="font-bold mb-1">Appointment Setting</h3>
              <p>Efficient scheduling between patients and healthcare providers with reminder systems and follow-ups.</p>
            </div>
            <div>
              <h3 className="font-bold mb-1">Campaign Support</h3>
              <p>End-to-end genetic testing campaign execution with full HIPAA compliance and reporting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="w-full bg-[#f9f9f9] px-4 sm:px-6 md:px-12 py-16 md:py-24"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Contact Us</h2>
          <p className="text-lg md:text-xl mb-6 text-gray-700">
            We'd love to hear from you. Reach out for partnerships, queries, or consultations.
          </p>
          <p className="text-base md:text-lg text-[#0A2A43] font-medium mb-2">
            📧 Email: <a href="mailto:helixhubcommunication@gmail.com" className="underline text-blue-700">helixhubcommunication@gmail.com</a>
          </p>
          <p className="text-base md:text-lg text-[#0A2A43] font-medium">
            📱 WhatsApp: <a href="https://wa.me/919619225102" className="underline text-blue-700">  +91 9619225102</a>
          </p>
        </div>
      </section>
    </div>
  );
}
