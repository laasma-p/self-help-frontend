import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-purple-800 dark:bg-indigo-800 transition-colors duration-300">
      <div className="flex items-center justify-end h-16 max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:block">
          <div className="ml-4 flex items-center space-x-4 h-full">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-100 dark:text-gray-100 bg-purple-400 dark:bg-indigo-400 px-3 py-2 rounded-md text-sm font-medium"
                  : "text-gray-100 dark:text-gray-100 hover:bg-purple-400 dark:hover:bg-indigo-400 px-3 py-2 rounded-md text-sm font-medium"
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/problems"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-100 dark:text-gray-100 bg-purple-400 dark:bg-indigo-400 px-3 py-2 rounded-md text-sm font-medium"
                  : "text-gray-100 dark:text-gray-100 hover:bg-purple-400 dark:hover:bg-indigo-400 px-3 py-2 rounded-md text-sm font-medium"
              }
            >
              Problems
            </NavLink>
            <NavLink
              to="/therapy-goals"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-100 dark:text-gray-100 bg-purple-400 dark:bg-indigo-400 px-3 py-2 rounded-md text-sm font-medium"
                  : "text-gray-100 dark:text-gray-100 hover:bg-purple-400 dark:hover:bg-indigo-400 px-3 py-2 rounded-md text-sm font-medium"
              }
            >
              Therapy Goals
            </NavLink>
            <NavLink
              to="/physical-goals"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-100 dark:text-gray-100 bg-purple-400 dark:bg-indigo-400 px-3 py-2 rounded-md text-sm font-medium"
                  : "text-gray-100 dark:text-gray-100 hover:bg-purple-400 dark:hover:bg-indigo-400 px-3 py-2 rounded-md text-sm font-medium"
              }
            >
              Physical Goals
            </NavLink>
            <div className="relative group inline-block">
              <p className="text-gray-100 dark:text-gray-100 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                More
              </p>
              <div className="opacity-0 invisible absolute transition-all duration-300 transform translate-y-2 right-0 z-50 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                <div className="bg-purple-800 dark:bg-indigo-800 shadow-lg dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-100 w-48">
                  <NavLink
                    to="/boundaries"
                    className={({ isActive }) =>
                      isActive
                        ? "px-4 py-2 text-gray-100 dark:text-gray-100 bg-purple-400 dark:bg-indigo-400 block w-full text-left"
                        : "px-4 py-2 text-gray-100 dark:text-gray-100 hover:bg-purple-400 dark:hover:bg-indigo-400 block w-full text-left"
                    }
                  >
                    Boundaries
                  </NavLink>

                  <NavLink
                    to="/values"
                    className={({ isActive }) =>
                      isActive
                        ? "px-4 py-2 text-gray-100 dark:text-gray-100 bg-purple-400 dark:bg-indigo-400 block w-full text-left"
                        : "px-4 py-2 text-gray-100 dark:text-gray-100 hover:bg-purple-400 dark:hover:bg-indigo-400 block w-full text-left"
                    }
                  >
                    Values
                  </NavLink>
                  <NavLink
                    to="/"
                    className="px-4 py-2 text-gray-100 dark:text-gray-100 hover:bg-purple-400 dark:hover:bg-indigo-400 block w-full text-left"
                  >
                    Log Out
                  </NavLink>
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