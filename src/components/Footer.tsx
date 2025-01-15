import React from 'react';
import { Github, Twitter, Linkedin, Mail, MessageCircle } from 'lucide-react';

interface FooterProps {
    className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
    return (
        <footer className=" mt-auto ">
            <div className="container mx-auto py-16 px-12 " id="contact">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 " >
                        <h2 className="text-3xl font-bold text-indigo-600 mb-4">InboxGist</h2>
                        <p className="text-gray-600 mb-6">Streamline your workflow with our intuitive project management solution.</p>
                        <div className="flex space-x-4">
                            <a href="https://github.com/katareayush" className="p-2 hover:bg-indigo-300 rounded-full transition-all">
                                <Github size={20} className="text-gray-600" />
                            </a>
                            <a href="https://x.com/ayushkatare17" className="p-2 hover:bg-indigo-300 rounded-full transition-all">
                                <Twitter size={20} className="text-gray-600" />
                            </a>
                            <a href="https://www.linkedin.com/in/ayush-katare/" className="p-2 hover:bg-indigo-300 rounded-full transition-all">
                                <Linkedin size={20} className="text-gray-600" />
                            </a>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <h3 className="text-lg font-bold mb-6 text-gray-900">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><a href="https://docs.google.com/document/d/1vo-4yJznlLuXlAoogZJ1lnfNo6hJqwm-SXY44WJksvo/edit?tab=t.0#heading=h.5449ymuasv26" target='blank' className="text-gray-600 hover:text-indigo-600 transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>
          

                    <div className="col-span-1">
                        <h3 className="text-lg font-bold mb-6 text-gray-900">Get in Touch</h3>
                        <div className="space-y-4">
                            <a href="mailto:katareayush2005@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors">
                                <Mail size={18} />
                                <span>katareayush2005@gmail.com</span>
                            </a>
                        
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-200">
                <div className="container mx-auto px-12 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-600 text-sm">
                            © 2024 InboxGist. All rights reserved.
                        </p>
                        {/* <div className="flex gap-6 mt-4 md:mt-0">
                            <a href="#" className="text-sm text-gray-600 hover:text-[#75d22e] transition-colors">Privacy Policy</a>
                            <a href="#" className="text-sm text-gray-600 hover:text-[#75d22e] transition-colors">Terms of Service</a>
                            <a href="#" className="text-sm text-gray-600 hover:text-[#75d22e] transition-colors">Cookie Policy</a>
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;