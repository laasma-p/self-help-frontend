import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DiaryCard = ({ diaryCards, fetchUpdatedDiaryCards }) => {
  const [openDiaryCard, setOpenDiaryCard] = useState(false);
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

  return (
    <div className="min-h-screen pb-6 flex flex-col items-center bg-gray-100 dark:bg-neutral-700 text-neutral-700 dark:text-gray-100 transition-colors duration-300">
      <h1 className="text-3xl mt-8 mb-6 md:text-4xl text-center">
        Diary Cards
      </h1>
      <>
        {openDiaryCard ? (
          <div className="w-4/12">
            <form onSubmit={addDiaryCardHandler}>
              <label htmlFor="date" className="block text-lg font-medium mb-2">
                Date
              </label>
              <input
                className="w-full mt-2 sm:text-sm text-neutral-700 dark:text-neutral-700 block rounded-md border-0 px-2 py-1.5 sm:leading-6 shadow-sm ring-1 ring-purple-400 focus:outline-purple-800 dark:ring-indigo-400 dark:focus:outline-indigo-800 dark:outline-none"
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
                className="w-full mt-2 sm:text-sm text-neutral-700 dark:text-neutral-700 block rounded-md border-0 px-2 py-1.5 sm:leading-6 shadow-sm ring-1 ring-purple-400 focus:outline-purple-800 dark:ring-indigo-400 dark:focus:outline-indigo-800 dark:outline-none"
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
                className="w-full mt-2 sm:text-sm text-neutral-700 dark:text-neutral-700 block rounded-md border-0 px-2 py-1.5 sm:leading-6 shadow-sm ring-1 ring-purple-400 focus:outline-purple-800 dark:ring-indigo-400 dark:focus:outline-indigo-800 dark:outline-none"
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
                className="w-full mt-2 sm:text-sm text-neutral-700 dark:text-neutral-700 block rounded-md border-0 px-2 py-1.5 sm:leading-6 shadow-sm ring-1 ring-purple-400 focus:outline-purple-800 dark:ring-indigo-400 dark:focus:outline-indigo-800 dark:outline-none"
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
                className="w-full mt-2 sm:text-sm text-neutral-700 dark:text-neutral-700 block rounded-md border-0 px-2 py-1.5 sm:leading-6 shadow-sm ring-1 ring-purple-400 focus:outline-purple-800 dark:ring-indigo-400 dark:focus:outline-indigo-800 dark:outline-none"
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
                className="w-full mt-2 sm:text-sm text-neutral-700 dark:text-neutral-700 block rounded-md border-0 px-2 py-1.5 sm:leading-6 shadow-sm ring-1 ring-purple-400 focus:outline-purple-800 dark:ring-indigo-400 dark:focus:outline-indigo-800 dark:outline-none"
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
          <button
            onClick={openDiaryCardHandler}
            className="mt-4 mb-4 w-4/12 py-2 px-6 rounded-md font-medium text-center sm:text-lg border-0 bg-purple-400 dark:text-neutral-700 hover:text-gray-100 hover:bg-purple-800 dark:hover:text-gray-100 dark:bg-indigo-400 dark:hover:bg-indigo-800 ring-1 ring-purple-400 hover:ring-purple-800 dark:ring-indigo-400 dark:hover:ring-indigo-800 transition-all duration-300 text-center"
          >
            Add A New Diary Card
          </button>
        )}
      </>
      {diaryCards.length === 0 ? (
        <div className="w-8/12 sm:w-6/12 lg:w-5/12 xl:w-4/12 bg-purple-400 dark:bg-indigo-400 rounded-lg p-4 shadow-lg">
          <p className="py-2 text-md md:text-lg">
            You have not added any diary cards as of now. Fill out the first
            one!
          </p>
        </div>
      ) : (
        <>
          {diaryCards
            .slice()
            .reverse()
            .map((diaryCard) => (
              <div
                className="w-8/12 md:w-7/12 lg:w-6/12 flex flex-col sm:flex-row justify-center align-center bg-purple-400 dark:bg-indigo-400 rounded-lg p-6 sm:p-4 shadow-lg m-2 break-all text-md md:text-lg"
                key={diaryCard.id}
              >
                <div className="w-full sm:w-1/2 flex flex-col p-0 sm:p-2">
                  <span className="font-medium">Date</span>
                  {formatDate(diaryCard.date)}
                  <span className="font-medium">Suicidal Ideation</span>
                  {diaryCard.suicidal_ideation}
                  <span className="font-medium">Exercise Done</span>
                  {diaryCard.exercise}
                </div>

                <div className="w-full sm:w-1/2 flex flex-col p-0 sm:p-2">
                  <span className="font-medium">Self Care Activities</span>
                  {diaryCard.self_care}
                  <span className="font-medium">Skills Used</span>
                  {diaryCard.skills}
                  <span className="font-medium">Additional Comments</span>
                  {diaryCard.comments}
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default DiaryCard;
