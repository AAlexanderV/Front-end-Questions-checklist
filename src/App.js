import { useState } from "react";
import "./App.css";
import RenderQuestions from "./components/RenderQuestions";
// import AddQuestion from "./components/AddQuestion";
import default_questions from "./data/default_questions";

function App() {
    if (!localStorage.getItem("questions")) {
        localStorage.setItem("questions", JSON.stringify(default_questions));
    }
    const [questionsList, setQuestionsList] = useState(
        JSON.parse(localStorage.getItem("questions"))
    );

    // function AddQuestion() {
    //     let prompt = prompt("Type your question:");
    //     const newQuestion = {
    //         question: prompt,
    //         comments: "",
    //         status: 2,
    //     };

    //     localStorage.setItem(
    //         "questions",
    //         JSON.stringify(
    //             JSON.parse(
    //                 localStorage.getItem("questions").unshift(newQuestion)
    //             )
    //         )
    //     );

    //     setQuestionsList(JSON.parse(localStorage.getItem("questions")));
    // }

    return (
        <div className="main_window">
            <div className="header">
                <button
                    className="add_question"
                    // onClick={AddQuestion}
                >
                    Add your question
                </button>
                <button className="clear_all">Delete all questions</button>
                <button className="default_questions">
                    Return to default settings
                </button>
            </div>
            <RenderQuestions
                questions={questionsList}
                setQuestionsList={setQuestionsList}
            />
        </div>
    );
}

export default App;
