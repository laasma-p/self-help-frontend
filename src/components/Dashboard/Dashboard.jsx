const Dashboard = () => {
  return (
    <div className="min-h-screen pb-6 bg-gray-100 dark:bg-neutral-700 text-neutral-700 dark:text-gray-100 transition-colors duration-300">
      <h1 className="text-3xl pt-8 pb-6 md:text-4xl text-center">Dashboard</h1>
      <div className="flex flex-col mx-8 text-md sm:text-xl mb-6">
        <h2>Welcome back!</h2>
        <p>Here is the overview of your essentials.</p>
      </div>
    </div>
  );
};

export default Dashboard;
