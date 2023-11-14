import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [boundaryCounts, setBoundaryCounts] = useState({});

  const fetchBoundaryCounts = async () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (!userId) {
      console.error("User is not authenticated. Cannot fetch boundary counts.");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:3000/boundary-count/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBoundaryCounts(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (token && userId) {
      fetchBoundaryCounts();
    }
  }, []);

  return (
    <div className="min-h-screen pb-6 bg-gray-100 dark:bg-neutral-700 text-neutral-700 dark:text-gray-100 transition-colors duration-300">
      <h1 className="text-3xl pt-8 pb-6 md:text-4xl text-center">Dashboard</h1>
      <div className="flex flex-col mx-8 text-md sm:text-xl mb-6">
        <h2>Welcome back!</h2>
        <p>Here is the overview of your essentials.</p>
      </div>

      <div className="w-full px-8 pt-4">
        <div className="w-full">
          <div className="bg-purple-400 dark:bg-indigo-400 p-4 rounded-lg shadow-md mb-4">
            <p className="text-xl font-semibold">Your Boundaries</p>
            <p>
              You have set{" "}
              <span className="font-bold">
                {boundaryCounts.boundariesCount}
              </span>{" "}
              boundaries for yourself.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
