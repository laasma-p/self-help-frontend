const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-neutral-700 text-neutral-700 dark:text-gray-100 transition-colors duration-300">
      <h1 className="text-3xl md:text-4xl text-center">
        Log in to your account
      </h1>
      <div className="mt-10 md:mx-auto md:w-full sm:max-w-sm">
        <form>
          <label
            htmlFor="email"
            className="block text-lg font-medium mb-2 mt-2"
          >
            Email address
          </label>
          <input
            className="w-full py-1.5 px-2 text-neutral-700 dark:text-neutral-700 block rounded-md ring-1 ring-purple-400 focus:outline-purple-800 dark:ring-indigo-400 dark:focus:outline-indigo-800"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />

          <label
            htmlFor="password"
            className="block text-lg font-medium mb-2 mt-2"
          >
            Password
          </label>
          <input
            className="w-full py-1.5 px-2 text-neutral-700 dark:text-neutral-700 block rounded-md ring-1 ring-purple-400 focus:outline-purple-800 dark:ring-indigo-400 dark:focus:outline-indigo-800"
            id="password"
            name="password"
            type="password"
            required
          />

          <button className="mt-4 w-full py-2 px-6 rounded-md font-medium text-center sm:text-lg border-0 bg-purple-400 dark:text-neutral-700 hover:text-gray-100 hover:bg-purple-800 dark:hover:text-gray-100 dark:bg-indigo-400 dark:hover:bg-indigo-800 ring-1 ring-purple-400 hover:ring-purple-800 dark:ring-indigo-400 dark:hover:ring-indigo-800 transition-all duration-300">
            Log In
          </button>
        </form>

        <p className="text-neutral-700 dark:text-gray-100 mt-10 text-center sm:text-lg">
          Not registered?{" "}
          <a
            to="#"
            className="text-purple-400 hover:text-neutral-700 dark:text-indigo-400 dark:hover:text-gray-100 font-medium transition-all duration-300"
          >
            Click here to get started
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
