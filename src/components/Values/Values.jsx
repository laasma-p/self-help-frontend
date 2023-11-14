import { useState } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Values = ({ values, fetchUpdatedValues }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const deleteValueHandler = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/values/${userId}/${id}`, {
        headers,
      });

      fetchUpdatedValues();
    } catch (error) {
      console.error(error.message);
    }
  };

  const enteredValueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const addValueHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:3000/add-a-value/${userId}`,
        {
          value: enteredValue,
        },
        {
          headers,
        }
      );

      setEnteredValue("");
      fetchUpdatedValues();
      navigate("/values");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="min-h-screen pb-6 flex flex-col items-center bg-gray-100 dark:bg-neutral-700 text-neutral-700 dark:text-gray-100 transition-colors duration-300">
      <h1 className="text-3xl mt-8 mb-6 md:text-4xl text-center">Values</h1>
      <div className="w-4/12">
        <h2 className="text-lg">Add a value</h2>
        <form onSubmit={addValueHandler}>
          <label
            htmlFor="value"
            className="block text-lg font-medium mb-2 mt-2"
          />
          <input
            className="w-full py-1.5 px-2 text-neutral-700 dark:text-neutral-700 block rounded-md ring-1 ring-purple-400 focus:outline-purple-800 dark:ring-indigo-400 dark:focus:outline-indigo-800"
            type="text"
            id="value"
            name="value"
            value={enteredValue}
            onChange={enteredValueChangeHandler}
          />
          <button className="mt-4 mb-4 w-full py-2 px-6 rounded-md font-medium text-center sm:text-lg border-0 bg-purple-400 dark:text-neutral-700 hover:text-gray-100 hover:bg-purple-800 dark:hover:text-gray-100 dark:bg-indigo-400 dark:hover:bg-indigo-800 ring-1 ring-purple-400 hover:ring-purple-800 dark:ring-indigo-400 dark:hover:ring-indigo-800 transition-all duration-300 text-center">
            Add Value
          </button>
        </form>
      </div>
      <div className="w-8/12 sm:w-6/12 lg:w-5/12 xl:w-4/12 bg-purple-400 dark:bg-indigo-400 rounded-lg p-4 shadow-lg">
        {values.length === 0 ? (
          <p className="py-2 text-lg">
            No values added yet. Add some to get started!
          </p>
        ) : (
          <ul>
            {values.map((value) => (
              <li
                className="flex items-center justify-between py-2 text-lg"
                key={value.id}
              >
                <span>{value.value}</span>
                <button
                  className="ml-2 text-purple-800 dark:text-indigo-800 hover:text-gray-100 dark:hover:text-gray-100 transition-all duration-300"
                  onClick={() => deleteValueHandler(value.id)}
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

export default Values;
