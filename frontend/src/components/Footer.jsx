import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

function Footer() {
    return (
        <>
            <footer className="bg-[#10375C] text-white py-8">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-wrap justify-between">

                        <div className="w-full sm:w-1/3 mb-6">
                            <h3 className="text-2xl font-bold mb-4">Talent Match</h3>
                            <p>Your trusted platform for finding top career opportunities and making your mark in the industry.</p>
                        </div>

                        <div className="w-full sm:w-1/3 mb-6 text-center">
                            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                            <ul>
                                <li><a href="/jobs" className="text-[#F3C623] hover:text-white">Job Openings</a></li>
                                <li><a href="/about" className="text-[#F3C623] hover:text-white">About Us</a></li>
                                <li><a href="/contact" className="text-[#F3C623] hover:text-white">Contact</a></li>
                                <li><a href="/blog" className="text-[#F3C623] hover:text-white">Blog</a></li>
                            </ul>
                        </div>

                        <div className="w-full sm:w-1/3 mb-6">
                            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="www.facebook.com" className="text-[#F3C623] hover:text-white"><i className=""><Facebook></Facebook></i></a>
                                <a href="#" className="text-[#F3C623] hover:text-white"><i className=""><Twitter></Twitter></i></a>
                                <a href="#" className="text-[#F3C623] hover:text-white"><i className="fab fa-linkedin-in"><Linkedin></Linkedin></i></a>
                                <a href="#" className="text-[#F3C623] hover:text-white"><i className="fab fa-instagram"><Instagram></Instagram></i></a>
                            </div>
                        </div>

                    </div>
                    <div className="mt-8 text-center border-t border-[#F3C623] pt-4">
                        <p>&copy; 2024 Talent Match. All rights reserved.</p>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer