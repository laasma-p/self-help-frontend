import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-neutral-700 text-neutral-700 dark:text-gray-100 transition-colors duration-300">
      <h1 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl text-center w-3/5 mb-6">
        Self Help
      </h1>
      <p className="sm:text-xl text-center px-16 lg:w-8/12">
        Self-help is always a good idea when you're facing life's challenges.
        Designed with DBT principles in mind, you'll find a wealth of valuable
        information here to help you track your progress and well-being.
      </p>
      <div className="flex flex-col items-center justify-center gap-3.5 sm:flex-row pt-6">
        <Link
          to="/sign-up"
          className="py-2 px-6 rounded-md font-medium text-center sm:text-lg border-2 dark:text-neutral-700 hover:text-gray-100 bg-purple-400 border-purple-400 hover:bg-purple-800 hover:border-purple-800 dark:hover:text-gray-100 dark:bg-indigo-400 dark:border-indigo-400 dark:hover:bg-indigo-800 dark:hover:border-indigo-800 transition-all duration-300"
        >
          Sign Up
        </Link>
        <Link
          to="/login"
          className="py-2 px-8 rounded-md font-medium text-center sm:text-lg border-2 text-purple-400 dark:text-indigo-400 dark:hover:text-indigo-800 border-purple-400 hover:text-purple-800 hover:border-purple-800 dark:border-indigo-400 dark:hover:bg-gray-100 dark:hover:border-gray-100 transition-all duration-300"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Hero;
