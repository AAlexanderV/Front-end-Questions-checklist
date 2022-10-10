import "./App.css";
import RenderQuestions from "./components/RenderQuestions";
import default_questions from "./data/default_questions";

function App() {
    if (!localStorage.getItem("questions")) {
        localStorage.setItem("questions", JSON.stringify(default_questions));
    }

    return (
        <div className="main_window">
            <div className="header">
                <button className="add_question">Add your question</button>
                <button className="clear_all">Delete all questions</button>
                <button className="default_questions">
                    Return to default settings
                </button>
            </div>
            <RenderQuestions
                questions={JSON.parse(localStorage.getItem("questions"))}
            />
        </div>
    );
}

export default App;
