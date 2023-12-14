import { useState } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TherapyGoals = ({ therapyGoals, fetchUpdatedTherapyGoals }) => {
  const [enteredTherapyGoal, setEnteredTherapyGoal] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const deleteTherapyGoalHandler = async (id) => {
    try {
      await axios.delete(
        `http://localhost:3000/therapy-goals/${userId}/${id}`,
        {
          headers,
        }
      );

      fetchUpdatedTherapyGoals();
    } catch (error) {
      console.error(error.message);
    }
  };

  const enteredTherapyGoalChangeHandler = (event) => {
    setEnteredTherapyGoal(event.target.value);
  };

  const addTherapyGoalHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:3000/add-a-therapy-goal/${userId}`,
        {
          therapyGoal: enteredTherapyGoal,
        },
        {
          headers,
        }
      );

      setEnteredTherapyGoal("");
      fetchUpdatedTherapyGoals();
      navigate("/therapy-goals");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="min-h-screen pb-6 flex flex-col items-center bg-gray-100 dark:bg-neutral-700 text-neutral-700 dark:text-gray-100 transition-colors duration-300">
      <h1 className="text-3xl mt-8 mb-6 md:text-4xl text-center">
        Therapy Goals
      </h1>
      <div className="w-4/12">
        <h2 className="text-lg">Add a therapy goal</h2>
        <form onSubmit={addTherapyGoalHandler}>
          <label
            htmlFor="therapyGoal"
            className="block text-lg font-medium mb-2 mt-2"
          />
          <input
            className="w-full mt-2 sm:text-sm text-neutral-700 dark:text-neutral-700 block rounded-md border-0 px-2 py-1.5 sm:leading-6 shadow-sm ring-1 ring-purple-400 focus:outline-purple-800 dark:ring-indigo-400 dark:focus:outline-indigo-800 dark:outline-none"
            type="text"
            id="therapyGoal"
            name="therapyGoal"
            value={enteredTherapyGoal}
            onChange={enteredTherapyGoalChangeHandler}
          />
          <button className="mt-4 mb-4 w-full py-2 px-6 rounded-md font-medium text-center sm:text-lg border-0 bg-purple-400 dark:text-neutral-700 hover:text-gray-100 hover:bg-purple-800 dark:hover:text-gray-100 dark:bg-indigo-400 dark:hover:bg-indigo-800 ring-1 ring-purple-400 hover:ring-purple-800 dark:ring-indigo-400 dark:hover:ring-indigo-800 transition-all duration-300 text-center">
            Add Therapy Goal
          </button>
        </form>
      </div>
      <div className="w-8/12 sm:w-6/12 lg:w-5/12 xl:w-4/12 bg-purple-400 dark:bg-indigo-400 rounded-lg p-4 shadow-lg">
        {therapyGoals.length === 0 ? (
          <p className="py-2 text-md md:text-lg">
            No therapy goals yet. Add some to get started!
          </p>
        ) : (
          <ul>
            {therapyGoals.map((therapyGoal) => (
              <li
                className="flex items-center justify-between py-2 text-md md:text-lg"
                key={therapyGoal.id}
              >
                <span>{therapyGoal.therapyGoal}</span>
                <button
                  className="ml-6 text-purple-800 dark:text-indigo-800 hover:text-gray-100 dark:hover:text-gray-100 transition-all duration-300"
                  onClick={() => deleteTherapyGoalHandler(therapyGoal.id)}
                >
                  <FaTrash />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TherapyGoals;
