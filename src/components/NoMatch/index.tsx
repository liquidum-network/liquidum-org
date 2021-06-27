import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <React.Fragment>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-cyan-600 tracking-wide">Oh no</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              404
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Page not found. Maybe try our <Link className="text-base text-blue-600 tracking-wide uppercase" to='/'>home page?</Link>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NotFound;