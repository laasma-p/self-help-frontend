import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navigation = ({ setIsAuthenticated }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAuthenticated = localStorage.getItem("token") !== null;

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const logoutHandler = () => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      setIsAuthenticated(false);
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      {isAuthenticated && (
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
                        onClick={logoutHandler}
                      >
                        Log Out
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-100">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-purple-800 dark:bg-indigo-800">
              <div className="px-2 space-y-1 my-2 md:px-3">
                <NavLink
                  to="/"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-100 dark:text-gray-100 bg-purple-400 dark:bg-indigo-400 block px-3 py-2 rounded-md text-base font-medium"
                      : "text-gray-100 dark:text-gray-100 block px-3 py-2 rounded-md text-base font-medium"
                  }
                >
                  Dashboard
                </NavLink>
                <NavLink
                  to="/problems"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-100 dark:text-gray-100 bg-purple-400 dark:bg-indigo-400 block px-3 py-2 rounded-md text-base font-medium"
                      : "text-gray-100 dark:text-gray-100 block px-3 py-2 rounded-md text-base font-medium"
                  }
                >
                  Problems
                </NavLink>
                <NavLink
                  to="/therapy-goals"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-100 dark:text-gray-100 bg-purple-400 dark:bg-indigo-400 block px-3 py-2 rounded-md text-base font-medium"
                      : "text-gray-100 dark:text-gray-100 block px-3 py-2 rounded-md text-base font-medium"
                  }
                >
                  Therapy Goals
                </NavLink>
                <NavLink
                  to="/physical-goals"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-100 dark:text-gray-100 bg-purple-400 dark:bg-indigo-400 block px-3 py-2 rounded-md text-base font-medium"
                      : "text-gray-100 dark:text-gray-100 block px-3 py-2 rounded-md text-base font-medium"
                  }
                >
                  Physical Goals
                </NavLink>
                <NavLink
                  to="/values"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-100 dark:text-gray-100 bg-purple-400 dark:bg-indigo-400 block px-3 py-2 rounded-md text-base font-medium"
                      : "text-gray-100 dark:text-gray-100 block px-3 py-2 rounded-md text-base font-medium"
                  }
                >
                  Values
                </NavLink>
                <NavLink
                  to="/boundaries"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-100 dark:text-gray-100 bg-purple-400 dark:bg-indigo-400 block px-3 py-2 rounded-md text-base font-medium"
                      : "text-gray-100 dark:text-gray-100 block px-3 py-2 rounded-md text-base font-medium"
                  }
                >
                  Boundaries
                </NavLink>
                <NavLink
                  to="/"
                  className="text-gray-100 dark:text-gray-100 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={logoutHandler}
                >
                  Log Out
                </NavLink>
              </div>
            </div>
          )}
        </nav>
      )}
    </>
  );
};

export default Navigation;
