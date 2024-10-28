/* eslint-disable no-unused-vars */
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-black text-white mt-10 py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {/* Company Section */}
        <div className="flex flex-col items-center min-h-full">
          <h6 className="text-lg font-semibold mb-5 text-center">Company</h6>
          <button className="block mb-2">About</button>
          <button className="block mb-2">Blog</button>
          <button className="block mb-2">Press</button>
          <button className="block mb-2">Jobs</button>
          <button className="block mb-2">Partners</button>
        </div>

        {/* Solution Section */}
        <div className="flex flex-col items-center min-h-full">
          <h6 className="text-lg font-semibold mb-5 text-center">Solution</h6>
          <button className="block mb-2">Marketing</button>
          <button className="block mb-2">Analytics</button>
          <button className="block mb-2">Commerce</button>
          <button className="block mb-2">Insights</button>
          <button className="block mb-2">Supports</button>
        </div>

        {/* Documentation Section */}
        <div className="flex flex-col items-center min-h-full">
          <h6 className="text-lg font-semibold mb-5 text-center">Documentation</h6>
          <button className="block mb-2">Guides</button>
          <button className="block mb-2">API Status</button>
        </div>

          {/* Legal Section */}
          <div className="flex flex-col items-center min-h-full">
          <h6 className="text-lg font-semibold mb-5">Legal</h6>
          <button className="block mb-2">Claim</button>
          <button className="block mb-2">Privacy</button>
          <button className="block mb-2">Terms</button>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center mt-10">
        <p>&copy; 2023 My Company. All Rights Reserved.</p>
        <p>Made With Love By Me</p>
        <p>
          Icons made by{' '}
          <a href="https://www.freepik.com" className="underline">
            FreePik
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com" className="underline">
            www.flaticon.com
          </a>
        </p>
      </div>
    </div>
  )
}

export default Footer
