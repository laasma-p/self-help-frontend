const Navigation = () => {
  return (
    <nav className="bg-purple-800 dark:bg-indigo-800 transition-colors duration-300">
      <div className="flex items-center justify-end h-16 max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:block">
          <div className="ml-4 flex items-center space-x-4 h-full">
            <a
              href="#"
              className="text-gray-100 dark:text-gray-100 hover:bg-purple-400 dark:hover:bg-indigo-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="text-gray-100 dark:text-gray-100 hover:bg-purple-400 dark:hover:bg-indigo-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              Problems
            </a>
            <a
              href="#"
              className="text-gray-100 dark:text-gray-100 hover:bg-purple-400 dark:hover:bg-indigo-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              Therapy Goals
            </a>
            <a
              href="#"
              className="text-gray-100 dark:text-gray-100 hover:bg-purple-400 dark:hover:bg-indigo-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              Physical Goals
            </a>
            <div className="relative group inline-block">
              <p className="text-gray-100 dark:text-gray-100 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                More
              </p>
              <div className="opacity-0 invisible absolute transition-all duration-300 transform translate-y-2 right-0 z-50 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                <div className="bg-purple-800 dark:bg-indigo-800 shadow-lg dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-100 w-48">
                  <a
                    href="#"
                    className="px-4 py-2 text-gray-100 dark:text-gray-100 hover:bg-purple-400 dark:hover:bg-indigo-400 block w-full text-left"
                  >
                    Boundaries
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 text-gray-100 dark:text-gray-100 hover:bg-purple-400 dark:hover:bg-indigo-400 block w-full text-left"
                  >
                    Values
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 text-gray-100 dark:text-gray-100 hover:bg-purple-400 dark:hover:bg-indigo-400 block w-full text-left"
                  >
                    Log Out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
