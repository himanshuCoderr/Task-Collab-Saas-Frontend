import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar.tsx";
import { useState } from "react";


// bolna aasan hai ! / but agr uss chiz k liya tumhe coding karni padegi khud taki logic jaldi samjh aaye aur naye feature add kare 





// Variables will be used to record data 
// Improvements:
// 01) There should be an alert displaying us to add deatails if any of the details are not filled ✅
// 02) There should be an alert if the password and confirm password do-not match 
// 03) There should be an alert if password does not contain special characters, captial letters and numbers ✅
// 04) There should be an alert if email already exists and the user wants to create new details using the same email
// Abhishek Sen
// 12:29 AM
// 05)There should be an alert if the user does not add his full name (We can check by seeing if a space exists in between the name)
// 06) There should be an alert if there is no @ in the email address ✅

// typescript



function SignUp() {

  let [personData , setPersonData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  // Common Error Handler 

  let [error , setError] = useState({ errorStatus : false , errorReason : ""  })

  // fullName: "asdsads",
  // email: "asdas",
  // password: "asdsa",
  // confirmPassword: "adsa"
  
  let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

  function handleSubmit(e) {
    // By default fhota h page refresh when form submit
    // 
    e.preventDefault()

    console.log(personData.password)
    
    setError({errorReason : "" , errorStatus : false})
    
    
    let regexRes = pattern.test(personData.password)

    if(regexRes == false){
      setError({errorReason : "weakPasscode" , errorStatus : true})
      return
    }

    if(personData.password !== personData.confirmPassword){
      console.log("password missmatch trigeered")
      setError({errorReason : "passwordMissmatch" , errorStatus : true})
      return
    }

    // console.log(res)
    console.log(personData)
  }



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
          Join TaskFlow
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Create your account and start collaborating with your team today.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-600 text-white">
                  1
                </div>
                <span className="text-sm text-blue-600 font-medium">Account</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 text-gray-600">
                  2
                </div>
                <span className="text-sm text-gray-600">Organization</span>
              </div>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block mb-2 text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  onChange={(e) => {
                    // when any thing we update in state we have to replace like thinkingf they are unmutable 
                    // i am creating new object for every state update !!
                   setPersonData({ ...personData , fullName : e.target.value})
                  }}

                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  onChange={(e) => {
                    setPersonData({...personData , email : e.target.value})
                  }}
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  placeholder="Create a password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  style={ error.errorReason == "weakPasscode" ? { borderColor : "red" , borderWidth : "2px" } : {} }
                  onChange={(e) => {
                    setPersonData({...personData , password : e.target.value})
                  }}
                  required
                  
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <label className="block mb-2 text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  onChange={(e) => {
                    setPersonData({...personData , confirmPassword : e.target.value})
                  }}
                  required
                />
              </motion.div>
              {/*For Showing Errors Messages */}
                {/* nested if statement */}
                {/* jsx js logic kbases pe we can change design or structure of ui */}
                  {/*  if else he hai bss if else jo hota it outputs like more than one logic but in jsx and in one curly braces we can add only one logic at one time */}
                {
                  error.errorStatus == true && <div>
                    {
                      error.errorReason == "weakPasscode" && <p>Password is not matching the requirments</p>
                    }

                    {
                      error.errorReason == "passwordMissmatch" && <p>Password is not matching !!</p>
                    }
                </div>
              }


              <motion.div
                className="flex justify-between items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <button
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition shadow-md hover:shadow-lg transform hover:-translate-y-1 ml-auto" 
                >
                  Continue
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
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Join TaskFlow?</h3>
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
                    <h4 className="font-medium text-gray-800">Streamlined Task Management</h4>
                    <p className="text-gray-600 text-sm">Create, assign, and track tasks with ease</p>
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
                    <h4 className="font-medium text-gray-800">Real-time Collaboration</h4>
                    <p className="text-gray-600 text-sm">Work together seamlessly with your team</p>
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
                    <h4 className="font-medium text-gray-800">Powerful Analytics</h4>
                    <p className="text-gray-600 text-sm">Track progress and team performance</p>
                  </div>
                </motion.li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-xl shadow-lg p-8">
              <p className="text-gray-600 mb-4">
                Already have an account?{' '}
                <span className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer">
                  Sign in →
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
