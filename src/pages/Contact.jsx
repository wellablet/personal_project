import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import sendSvg from '../assets/send.svg';
import mailSentSvg from '../assets/mail_sent.svg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [currentSvg, setCurrentSvg] = useState(sendSvg);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/mnndplqd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: 'abulaiti.abulimiti@powercoders.org'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setCurrentSvg(mailSentSvg);
        // Reset back to original SVG after 10 seconds
        setTimeout(() => {
          setCurrentSvg(sendSvg);
        }, 10000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className="min-h-screen w-full bg-white flex flex-col items-center px-6 py-16"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23cfd8dc' fill-opacity='0.3'%3E%3Ccircle cx='2' cy='2' r='1'/%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='18' cy='18' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
      }}
    >
      <div className="max-w-6xl w-full">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-sky-600 mb-4">Let's Connect</h1>
          <p className="text-gray-600 text-lg">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          {/* Left Side - Contact Form */}
          <div className="lg:w-[60%]">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-gray-50 rounded-lg border-0 focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-gray-50 rounded-lg border-0 focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                    placeholder="Your email"
                  />
                </div>
                
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-6 py-4 bg-gray-50 rounded-lg border-0 focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
              </div>
              
              <div className="flex justify-start space-x-4 items-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-sky-500 text-white py-4 px-10 rounded-lg hover:bg-sky-600 transition-colors font-medium text-lg shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {submitStatus === 'error' && (
                  <p className="text-red-500">Failed to send message. Please try again.</p>
                )}
              </div>
            </form>
          </div>

          {/* Right Side - SVG */}
          <div className="lg:w-[40%] flex justify-center">
            <div className="relative">
              <img 
                src={currentSvg} 
                alt="Contact illustration" 
                className="w-full max-w-xs transition-all duration-500 ease-in-out transform hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-100 pt-12">
          <div className="flex flex-col items-center">
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-12 mb-8">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-sky-50 rounded-full">
                  <FaEnvelope className="text-sky-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-700">abulaiti.abulimiti@powercoders.org</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-sky-50 rounded-full">
                  <FaPhone className="text-sky-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-gray-700">+1 234 567 890</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-sky-50 rounded-full">
                  <FaMapMarkerAlt className="text-sky-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-gray-700">Lausanne, Suisse</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 mb-8">
              <a href="https://github.com/wellablet" className="p-3 bg-gray-50 rounded-full text-gray-600 hover:bg-sky-50 hover:text-sky-500 transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/abulaiti-a-40a73124b" className="p-3 bg-gray-50 rounded-full text-gray-600 hover:bg-sky-50 hover:text-sky-500 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="p-3 bg-gray-50 rounded-full text-gray-600 hover:bg-sky-50 hover:text-sky-500 transition-colors">
                <FaTwitter size={20} />
              </a>
            </div>

            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Your Name
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
