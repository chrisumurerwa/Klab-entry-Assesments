
"use client";
import React, { useState } from "react";

export default function SignupJobseeker() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    jobTitle: "",
    location: "",
    salaryRange: "",
    softSkill: "",
    certificate: null,
  });

  const softSkillsOptions = ["Communication", "Teamwork", "Problem Solving", "Leadership"];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "certificate") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can add API call here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 py-10 px-2">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-blue-100 p-8 space-y-8">
        <div className="flex flex-col items-center gap-2">
          <div className="bg-blue-100 rounded-full p-3 mb-2">
            <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </div>
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-1">Jobseeker Signup</h2>
          <p className="text-gray-500 text-center text-sm">Create your profile to apply for jobs and get noticed by employers.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-blue-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-blue-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full border border-blue-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              placeholder="Desired job title"
              value={formData.jobTitle}
              onChange={handleChange}
              className="w-full border border-blue-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <input
              type="text"
              name="location"
              placeholder="Your location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border border-blue-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Salary Range</label>
            <input
              type="text"
              name="salaryRange"
              placeholder="Expected salary range"
              value={formData.salaryRange}
              onChange={handleChange}
              className="w-full border border-blue-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Soft Skill</label>
            <select
              name="softSkill"
              value={formData.softSkill}
              onChange={handleChange}
              className="w-full border border-blue-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            >
              <option value="">Select Soft Skill</option>
              {softSkillsOptions.map((skill, index) => (
                <option key={index} value={skill}>
                  {skill}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Certificate (PDF, DOC, PNG, JPG)</label>
            <input
              type="file"
              name="certificate"
              onChange={handleChange}
              className="w-full border border-blue-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              accept=".pdf,.doc,.docx,.png,.jpg"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}