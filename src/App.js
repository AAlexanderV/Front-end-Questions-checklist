import { useState } from "react";
import "./App.css";
import RenderQuestions from "./components/RenderQuestions";
import default_questions from "./data/default_questions";

function App() {
    if (!localStorage.getItem("questions")) {
        localStorage.setItem("questions", JSON.stringify(default_questions));
    }
    const [questionsList, setQuestionsList] = useState(
        localStorage.getItem("questions")
    );

    return (
        <div className="main_window">
            <RenderQuestions
                questions={JSON.parse(questionsList)}
                setQuestionsList={setQuestionsList}
            />
        </div>
    );
}

export default App;
