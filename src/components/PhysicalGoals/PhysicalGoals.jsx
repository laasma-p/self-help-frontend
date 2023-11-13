const PhysicalGoals = () => {
  return (
    <div className="min-h-screen pb-6 flex flex-col items-center bg-gray-100 dark:bg-neutral-700 text-neutral-700 dark:text-gray-100 transition-colors duration-300">
      <h1 className="text-3xl mt-8 mb-6 md:text-4xl text-center">
        Physical Goals
      </h1>
      <div className="w-4/12">
        <h2 className="text-lg">Add a physical goal</h2>
        <form>
          <label
            htmlFor="physicalGoal"
            className="block text-lg font-medium mb-2 mt-2"
          />
          <input
            className="w-full py-1.5 px-2 text-neutral-700 dark:text-neutral-700 block rounded-md ring-1 ring-purple-400 focus:outline-purple-800 dark:ring-indigo-400 dark:focus:outline-indigo-800"
            type="text"
            id="physicalGoal"
            name="physicalGoal"
          />
          <button className="mt-4 mb-4 w-full py-2 px-6 rounded-md font-medium text-center sm:text-lg border-0 bg-purple-400 dark:text-neutral-700 hover:text-gray-100 hover:bg-purple-800 dark:hover:text-gray-100 dark:bg-indigo-400 dark:hover:bg-indigo-800 ring-1 ring-purple-400 hover:ring-purple-800 dark:ring-indigo-400 dark:hover:ring-indigo-800 transition-all duration-300 text-center">
            Add Physical Goal
          </button>
        </form>
      </div>
      <div className="w-8/12 sm:w-6/12 lg:w-5/12 xl:w-4/12 bg-purple-400 dark:bg-indigo-400 rounded-lg p-4 shadow-lg">
        <ul>
          <li className="py-2 text-lg">Phys. Goal 1</li>
          <li className="py-2 text-lg">Phys. Goal 2</li>
          <li className="py-2 text-lg">Phys. Goal 3</li>
          <li className="py-2 text-lg">Phys. Goal 4</li>
        </ul>
      </div>
    </div>
  );
};

export default PhysicalGoals;
