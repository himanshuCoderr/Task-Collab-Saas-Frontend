import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar.tsx";

function OrganizationRegistration() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100">
        <Navbar />
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pt-20 pb-12 px-4 md:px-0 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Create Your Organization
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Set up your organization's workspace and start collaborating with your team today.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 pb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Form */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Organization Details</h2>
              <form className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block mb-2 text-sm font-medium text-gray-700">Organization Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Acme Corp" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block mb-2 text-sm font-medium text-gray-700">Organization Email</label>
                  <input 
                    type="email" 
                    placeholder="e.g. admin@acmecorp.com" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="block mb-2 text-sm font-medium text-gray-700">Organization Domain (Optional)</label>
                  <input 
                    type="text" 
                    placeholder="e.g. acmecorp.com" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label className="block mb-2 text-sm font-medium text-gray-700">Organization Type</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                    <option value="">Select Organization Type</option>
                    <option value="startup">Startup</option>
                    <option value="small_business">Small Business</option>
                    <option value="enterprise">Enterprise</option>
                    <option value="non_profit">Non-Profit</option>
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <label className="block mb-2 text-sm font-medium text-gray-700">Team Size</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                    <option value="">Select Team Size</option>
                    <option value="1-10">1-10 members</option>
                    <option value="11-50">11-50 members</option>
                    <option value="51-200">51-200 members</option>
                    <option value="201+">201+ members</option>
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <label className="block mb-2 text-sm font-medium text-gray-700">Admin Full Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. John Doe" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
                  <input 
                    type="password" 
                    placeholder="Choose a secure password" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                >
                  <label className="block mb-2 text-sm font-medium text-gray-700">Confirm Password</label>
                  <input 
                    type="password" 
                    placeholder="Confirm your password" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </motion.div>

                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  <button 
                    type="submit" 
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  >
                    Create Organization
                  </button>
                </motion.div>
              </form>
            </motion.div>

            {/* Right Column - Features */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">What You'll Get</h3>
                <ul className="space-y-4">
                  <motion.li 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-start"
                  >
                    <svg className="w-6 h-6 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-gray-800">Team Workspace</h4>
                      <p className="text-gray-600 text-sm">Create a dedicated space for your team to collaborate</p>
                    </div>
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-start"
                  >
                    <svg className="w-6 h-6 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-gray-800">Task Management</h4>
                      <p className="text-gray-600 text-sm">Organize and track tasks with your team</p>
                    </div>
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-start"
                  >
                    <svg className="w-6 h-6 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-gray-800">Real-time Collaboration</h4>
                      <p className="text-gray-600 text-sm">Work together in real-time with your team</p>
                    </div>
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-start"
                  >
                    <svg className="w-6 h-6 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-gray-800">Analytics & Reports</h4>
                      <p className="text-gray-600 text-sm">Track progress and get insights into team performance</p>
                    </div>
                  </motion.li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Need Help?</h3>
                <p className="text-gray-600 mb-4">Our team is here to help you get started. Contact us for any questions about setting up your organization.</p>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Contact Support →
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
}

export default OrganizationRegistration;