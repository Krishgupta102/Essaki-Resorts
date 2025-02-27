import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-blue-600 text-white text-center py-4 mt-10">
      <div className="container mx-auto">
        <p className="text-sm">Copyright &copy; 2014. Esakki High View Resorts. All Rights Reserved.</p>
        <div className="flex justify-center gap-4 my-2">
          <a href="#" className="text-white text-xl">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-white text-xl">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p className="text-sm">Powered By Raga Designers</p>
        </div>
        </footer>
    </div>
  )
}

export default Footer
