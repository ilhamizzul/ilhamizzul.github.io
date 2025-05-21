
import { Badge } from "@/components/ui/badge";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Get In Touch
          </span>
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
          Interested in working together or have a question? Feel free to reach out!
        </p>

        <div className="max-w-3xl mx-auto bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg border-blue-100 dark:border-blue-900 rounded-lg p-8">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">Connect With Me</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">Email</h4>
                  <p className="text-slate-600 dark:text-slate-300">contact@ilhamizzul.com</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">Location</h4>
                  <p className="text-slate-600 dark:text-slate-300">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">Social Links</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/ilhamizzul" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-slate-200 dark:bg-slate-700 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                  aria-label="GitHub"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.477 2 2 6.477 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor" />
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/ilham-izzul-hadyan/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-slate-200 dark:bg-slate-700 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V20H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V20H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" fill="currentColor" />
                    <path d="M6 9H2V20H6V9Z" fill="currentColor" />
                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" fill="currentColor" />
                  </svg>
                </a>
                <a 
                  href="mailto:contact@ilhamizzul.com" 
                  className="p-3 bg-slate-200 dark:bg-slate-700 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                  aria-label="Email"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
