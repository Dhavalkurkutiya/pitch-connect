import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 font-work-sans">
      <div className="container mx-auto px-5 py-10">
        {/* Desktop Footer */}
        <div className="hidden md:grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image src="/logo.png" alt="PitchConnect Logo" width={144} height={30} />
            </Link>
            <p className="text-gray-600 text-sm mt-4">
              Connect with fellow entrepreneurs, showcase your startup ideas, and participate in virtual pitch competitions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[rgb(238,43,105)] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/startups" className="text-gray-600 hover:text-[rgb(238,43,105)] transition-colors text-sm">
                  Explore Startups
                </Link>
              </li>
              <li>
                <Link href="/startup/create" className="text-gray-600 hover:text-[rgb(238,43,105)] transition-colors text-sm">
                  Submit Your Pitch
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[rgb(238,43,105)] transition-colors text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-[rgb(238,43,105)] transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-[rgb(238,43,105)] transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[rgb(238,43,105)] transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <a 
                  href="https://github.com/Dhavalkurkutiya/startup-spark" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[rgb(238,43,105)] transition-colors text-sm"
                >
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://github.com/Dhavalkurkutiya/startup-spark" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[rgb(238,43,105)] transition-colors"
                aria-label="GitHub"
              >
                <Github className="size-5" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[rgb(238,43,105)] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="size-5" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[rgb(238,43,105)] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5" />
              </a>
              <a 
                href="mailto:contact@pitchconnect.com" 
                className="text-gray-600 hover:text-[rgb(238,43,105)] transition-colors"
                aria-label="Email"
              >
                <Mail className="size-5" />
              </a>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none  text-sm w-full"
                />
                <button className="bg-[rgb(238,43,105)] text-white px-4 py-2 rounded-r-md hover:bg-[rgb(218,33,95)] transition-colors text-sm">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Footer */}
        <div className="md:hidden">
          <div className="flex justify-center mb-6">
            <Link href="/" className="inline-block">
              <Image src="/logo.png" alt="PitchConnect Logo" width={144} height={30} />
            </Link>
          </div>

          <div className="flex justify-center space-x-6 mb-6">
            <a 
              href="https://github.com/Dhavalkurkutiya/startup-spark" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[rgb(238,43,105)] transition-colors"
              aria-label="GitHub"
            >
              <Github className="size-5" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[rgb(238,43,105)] transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="size-5" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[rgb(238,43,105)] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-5" />
            </a>
            <a 
              href="mailto:contact@pitchconnect.com" 
              className="text-gray-600 hover:text-[rgb(238,43,105)] transition-colors"
              aria-label="Email"
            >
              <Mail className="size-5" />
            </a>
          </div>

          <div className="mb-6">
            <h4 className="text-sm font-medium mb-2 text-center">Subscribe to our newsletter</h4>
            <div className="flex px-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm w-full"
              />
              <button className="bg-[rgb(238,43,105)] text-white px-4 py-2 rounded-r-md hover:bg-[rgb(218,33,95)] transition-colors text-sm">
                Join
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="font-semibold text-sm mb-3 text-center">Quick Links</h3>
              <ul className="space-y-2 text-center">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-[rgb(238,43,105)] transition-colors text-xs">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/startups" className="text-gray-600 hover:text-[rgb(238,43,105)] transition-colors text-xs">
                    Explore Startups
                  </Link>
                </li>
                <li>
                  <Link href="/startup/create" className="text-gray-600 hover:text-[rgb(238,43,105)] transition-colors text-xs">
                    Submit Your Pitch
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-[rgb(238,43,105)] transition-colors text-xs">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-sm mb-3 text-center">Resources</h3>
              <ul className="space-y-2 text-center">
                <li>
                  <Link href="/blog" className="text-gray-600 hover:text-[rgb(238,43,105)] transition-colors text-xs">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-600 hover:text-[rgb(238,43,105)] transition-colors text-xs">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-[rgb(238,43,105)] transition-colors text-xs">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://github.com/Dhavalkurkutiya/startup-spark" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[rgb(238,43,105)] transition-colors text-xs"
                  >
                    GitHub Repository
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-6 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs md:text-sm text-gray-600 text-center md:text-left">
              © {new Date().getFullYear()} PitchConnect. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-xs text-gray-600 hover:text-[rgb(238,43,105)] transition-colors">
                Privacy Policy
              </Link>
                <Link href="/terms" className="text-xs text-gray-600 hover:text-[rgb(238,43,105)] transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-xs text-gray-600 hover:text-[rgb(238,43,105)] transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
          <div className="text-center mt-4 text-xs text-gray-500 flex items-center justify-center">
            Made with <Heart className="size-3 mx-1 text-red-500" /> by the PitchConnect Team
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;