import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DiaryCard = ({ diaryCards, fetchUpdatedDiaryCards }) => {
  const [openDiaryCard, setOpenDiaryCard] = useState(false);
  const [hasDiaryCardForToday, setHasDiaryCardForToday] = useState(false);
  const [diaryCard, setDiaryCard] = useState({
    date: "",
    suicidalIdeation: "",
    exercise: "",
    selfCare: "",
    skills: "",
    comments: "",
  });

  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const openDiaryCardHandler = () => {
    setOpenDiaryCard(true);
  };

  const handleFieldChange = (field, value) => {
    setDiaryCard((prevDiaryCard) => ({
      ...prevDiaryCard,
      [field]: value,
    }));
  };

  useEffect(() => {
    const checkDiaryCardForToday = async () => {
      try {
        const today = new Date().toISOString().split("T")[0];
        const response = await axios.get(
          `http://localhost:3000/check-diary-card-date/${userId}/${today}`,
          {
            headers,
          }
        );
        setHasDiaryCardForToday(response.data.hasDiaryCardForToday);
      } catch (error) {
        console.error(error.message);
      }
    };

    checkDiaryCardForToday();
  }, [userId, headers]);

  const formatDate = (isoDate) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(isoDate).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  };

  const addDiaryCardHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:3000/add-a-diary-card/${userId}`,
        {
          diaryCard,
        },
        {
          headers,
        }
      );

      setOpenDiaryCard(false);

      setDiaryCard({
        date: "",
        suicidalIdeation: "",
        exercise: "",
        selfCare: "",
        skills: "",
        comments: "",
      });

      fetchUpdatedDiaryCards();
      navigate("/diary-cards");
    } catch (error) {
      console.error(error.message);
    }
  };

  const deleteDiaryCardHandler = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/diary-cards/${userId}/${id}`, {
        headers,
      });

      fetchUpdatedDiaryCards();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="min-h-screen pb-6 bg-gray-100 dark:bg-neutral-700 text-neutral-700 dark:text-gray-100 transition-colors duration-300">
      <h1 className="text-3xl pt-8 pb-6 md:text-4xl text-center">
        Diary Cards
      </h1>
      <div className="flex justify-center">
        {openDiaryCard ? (
          <div className="w-4/12">
            <form onSubmit={addDiaryCardHandler}>
              <label htmlFor="date" className="block text-lg font-medium mb-2">
                Date
              </label>
              <input
                className="w-full py-1.5 px-2 text-neutral-700 dark:text-neutral-700 block rounded-md ring-1 ring-purple-400 focus:outline-purple-800 dark:ring-indigo-400 dark:focus:outline-indigo-800"
                type="date"
                id="date"
                name="date"
                value={diaryCard.date}
                onChange={(event) =>
                  handleFieldChange("date", event.target.value)
                }
              />
              <label
                htmlFor="suicidalIdeation"
                className="block text-lg font-medium mb-2 mt-2"
              >
                Suicidal Ideation
              </label>
              <input
                className="w-full py-1.5 px-2 text-neutral-700 dark:text-neutral-700 block rounded-md ring-1 ring-purple-400 focus:outline-purple-800 dark:ring-indigo-400 dark:focus:outline-indigo-800"
                type="text"
                id="suicidalIdeation"
                name="suicidalIdeation"
                value={diaryCard.suicidalIdeation}
                onChange={(event) =>
                  handleFieldChange("suicidalIdeation", event.target.value)
                }
              />
              <label
                htmlFor="exercise"
                className="block text-lg font-medium mb-2 mt-2"
              >
                Exercise Done
              </label>
              <input
                className="w-full py-1.5 px-2 text-neutral-700 dark:text-neutral-700 block rounded-md ring-1 ring-purple-400 focus:outline-purple-800 dark:ring-indigo-400 dark:focus:outline-indigo-800"
                type="text"
                id="exercise"
                name="exercise"
                value={diaryCard.exercise}
                onChange={(event) =>
                  handleFieldChange("exercise", event.target.value)
                }
              />
              <label
                htmlFor="selfCare"
                className="block text-lg font-medium mb-2 mt-2"
              >
                Self Care Activities
              </label>
              <input
                className="w-full py-1.5 px-2 text-neutral-700 dark:text-neutral-700 block rounded-md ring-1 ring-purple-400 focus:outline-purple-800 dark:ring-indigo-400 dark:focus:outline-indigo-800"
                type="text"
                id="selfCare"
                name="selfCare"
                value={diaryCard.selfCare}
                onChange={(event) =>
                  handleFieldChange("selfCare", event.target.value)
                }
              />
              <label
                htmlFor="skills"
                className="block text-lg font-medium mb-2 mt-2"
              >
                Skills Used
              </label>
              <input
                className="w-full py-1.5 px-2 text-neutral-700 dark:text-neutral-700 block rounded-md ring-1 ring-purple-400 focus:outline-purple-800 dark:ring-indigo-400 dark:focus:outline-indigo-800"
                type="text"
                id="skills"
                name="skills"
                value={diaryCard.skills}
                onChange={(event) =>
                  handleFieldChange("skills", event.target.value)
                }
              />
              <label
                htmlFor="comments"
                className="block text-lg font-medium mb-2 mt-2"
              >
                Additional Comments
              </label>
              <input
                className="w-full py-1.5 px-2 text-neutral-700 dark:text-neutral-700 block rounded-md ring-1 ring-purple-400 focus:outline-purple-800 dark:ring-indigo-400 dark:focus:outline-indigo-800"
                type="text"
                id="comments"
                name="comments"
                value={diaryCard.comments}
                onChange={(event) =>
                  handleFieldChange("comments", event.target.value)
                }
              />
              <button className="mt-4 mb-4 w-full py-2 px-6 rounded-md font-medium text-center sm:text-lg border-0 bg-purple-400 dark:text-neutral-700 hover:text-gray-100 hover:bg-purple-800 dark:hover:text-gray-100 dark:bg-indigo-400 dark:hover:bg-indigo-800 ring-1 ring-purple-400 hover:ring-purple-800 dark:ring-indigo-400 dark:hover:ring-indigo-800 transition-all duration-300 text-center">
                Save
              </button>
            </form>
          </div>
        ) : (
          <>
            {hasDiaryCardForToday ? (
              <div className="w-8/12 sm:w-6/12 lg:w-5/12 xl:w-4/12 text-center bg-red-400 rounded-lg p-2 mb-4 shadow-lg">
                <p className="text-lg font-medium mb-2 mt-2 text-neutral-700 dark:text-gray-100">
                  You have already added a diary card for today.
                </p>
              </div>
            ) : (
              <button
                onClick={openDiaryCardHandler}
                className="mt-4 mb-4 w-4/12 py-2 px-6 rounded-md font-medium text-center sm:text-lg border-0 bg-purple-400 dark:text-neutral-700 hover:text-gray-100 hover:bg-purple-800 dark:hover:text-gray-100 dark:bg-indigo-400 dark:hover:bg-indigo-800 ring-1 ring-purple-400 hover:ring-purple-800 dark:ring-indigo-400 dark:hover:ring-indigo-800 transition-all duration-300 text-center"
              >
                Add A New Diary Card
              </button>
            )}
          </>
        )}
      </div>
      {diaryCards.length === 0 ? (
        <div className="w-8/12 m-auto sm:w-6/12 lg:w-5/12 xl:w-4/12 bg-purple-400 dark:bg-indigo-400 rounded-lg p-4 shadow-lg">
          <p className="py-2 text-md md:text-lg">
            You have not added any diary cards as of now. Fill out the first
            one!
          </p>
        </div>
      ) : (
        <div className="sm:w-9/12 md:w-8/12 lg:max-w-6/12 w-full flex-col justify-center m-auto">
          {diaryCards.map((diaryCard) => (
            <div
              className="bg-purple-400 dark:bg-indigo-400 rounded-lg text-md md:text-lg p-6 sm:p-4 shadow-lg m-2"
              key={diaryCard.id}
            >
              <div className="flex text-center sm:text-left m-auto justify-center align-center flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 flex flex-col m-auto p-0 sm:p-2 break-words">
                  <span className="font-medium">Date</span>
                  {formatDate(diaryCard.date)}
                  <span className="font-medium">Suicidal Ideation</span>
                  {diaryCard.suicidal_ideation}
                  <span className="font-medium">Exercise Done</span>
                  {diaryCard.exercise}
                </div>

                <div className="w-full sm:w-1/2 flex flex-col p-0 sm:p-2 m-auto break-words">
                  <span className="font-medium">Self Care Activities</span>
                  {diaryCard.self_care}
                  <span className="font-medium">Skills Used</span>
                  {diaryCard.skills}
                  <span className="font-medium">Additional Comments</span>
                  {diaryCard.comments}
                </div>
              </div>
              <button
                className="w-full mt-4 w-4/12 py-2 px-6 rounded-md font-medium text-center sm:text-lg border-0 bg-red-400 dark:text-neutral-700 hover:text-gray-100 hover:bg-red-800 dark:hover:text-gray-100 ring-1 ring-red-400 hover:ring-red-800 transition-all duration-300"
                onClick={() => deleteDiaryCardHandler(diaryCard.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DiaryCard;
