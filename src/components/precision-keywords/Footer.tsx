export default function Footer() {
  return (
    <footer className="bg-[#333333] text-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="mb-4">PrecisionKeywords</h3>
            <p className="text-gray-300">
              Optimize Your Success with Our ROI-Driven Digital Marketing Agency
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {['About Us', 'Services', 'Pricing', 'FAQs'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@precisionkeywords.com</li>
              <li>Phone: (234) 123-4567</li>
              <li>Address: Lagos, Nigeria</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'Facebook'].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} PrecisionKeywords. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 