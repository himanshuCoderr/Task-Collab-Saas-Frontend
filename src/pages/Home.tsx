import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
export default function HomePage() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 text-gray-800 font-sans">
        <Navbar />
  
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 pt-32 pb-16">
          <div className="md:w-1/2">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}  
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
            >
              Collaborate Smarter with <span className="text-blue-600">TaskFlow</span>
            </motion.h1>
            <p className="text-lg text-gray-700 mb-8">
              Streamline your team's workflow, assign tasks, track updates, and boost productivity – all in one modern collaborative platform.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition shadow-md">
              Get Started Free
            </button>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.3 }}
            className="md:w-1/2 mt-10 md:mt-0"
          >
            <img 
              src="/assets/task_collab_illustration.svg" 
              alt="Collaboration Illustration" 
              className="w-full max-w-md mx-auto"
            />
          </motion.div>
        </section>
  
        {/* Features Section */}
        <section className="bg-white py-20" id="features">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold mb-4">Why Choose TaskFlow?</h2>
            <p className="text-gray-600 mb-12 max-w-xl mx-auto">
              Built for teams of all sizes – from startups to enterprises. Improve how your company plans, executes, and monitors task collaboration.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-50 p-6 rounded-2xl shadow">
                <img src="/assets/feature_team.svg" alt="Team Management" className="h-24 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Team Management</h3>
                <p className="text-sm text-gray-600">Add, organize, and manage your employees with intuitive roles and permissions.</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-50 p-6 rounded-2xl shadow">
                <img src="/assets/feature_tasks.svg" alt="Task Assignment" className="h-24 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Task Assignment</h3>
                <p className="text-sm text-gray-600">Assign tasks with clear instructions, set priorities, and track execution with ease.</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-50 p-6 rounded-2xl shadow">
                <img src="/assets/feature_tracking.svg" alt="Progress Tracking" className="h-24 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Real-time Tracking</h3>
                <p className="text-sm text-gray-600">View live progress, completion rates, and get instant task updates from teams.</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-50 p-6 rounded-2xl shadow">
                <img src="/assets/feature_insights.svg" alt="Insights" className="h-24 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Productivity Insights</h3>
                <p className="text-sm text-gray-600">Generate actionable reports to understand team output and optimize work.</p>
              </motion.div>
            </div>
          </div>
        </section>
  
        {/* Integration Highlights */}
        <section className="bg-blue-50 py-20" id="integrations">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold mb-4">Powerful Integrations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">Connect TaskFlow with your favorite tools like Slack, Google Calendar, Notion, and GitHub to streamline your workflow.</p>
            <motion.img 
              whileHover={{ scale: 1.05 }} 
              src="/assets/integrations.svg" 
              alt="Integrations" 
              className="w-full max-w-4xl mx-auto"
            />
          </div>
        </section>
  
        {/* Security Section */}
        <section className="bg-white py-20" id="security">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold mb-4">Enterprise-grade Security</h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-10">Your data is protected with end-to-end encryption, SSO, and role-based access control.</p>
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <img src="/assets/security.svg" alt="Security Illustration" className="h-64" />
            </motion.div>
          </div>
        </section>
  
        {/* Call to Action */}
        <section className="bg-blue-600 py-20 text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-4">Start managing your team's productivity today</h2>
            <p className="text-lg mb-8">TaskFlow gives your team the clarity, accountability, and flexibility they need to succeed.</p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-xl text-lg hover:bg-gray-100 transition shadow-lg">
              Create Your Free Workspace
            </button>
          </div>
        </section>
  
        <Footer />
      </div>
    );
  }