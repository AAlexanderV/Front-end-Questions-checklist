import { useState } from "react";
import StatusButtonsRender from "./StatusButtonsRender";
import ToggleComments from "./ToggleComments";
import EditComments from "./EditComments";
// import DeleteQuestion from "./DeleteQuestion";
import deleteIcon from "./../delete.png";

function QuestionLayout({
    index,
    question,
    comments,
    questionStatusID,
    setQuestionsList,
}) {
    const colorMap = ["Red", "Yellow", "Grey", "Green"];

    const [questionColor, setQuestionColor] = useState(
        colorMap[questionStatusID]
    ); // для смены статуса текста вопроса

    const DeleteQuestion = (event) => {
        const arrIndexToDelete = Number(event.target.dataset.index) - 1;
        const questions = JSON.parse(localStorage.getItem("questions"));

        questions.splice(arrIndexToDelete, 1);
        localStorage.setItem("questions", JSON.stringify(questions));

        setQuestionsList(localStorage.getItem("questions"));
    };

    return (
        <div className={"question_row status-" + questionColor}>
            <div className="question_inner">
                <StatusButtonsRender
                    index={index}
                    questionStatusID={questionStatusID}
                    setQuestionColor={setQuestionColor}
                />

                <div className="question_index">{index}</div>
                <div
                    className={"question_text status-" + questionColor}
                    id={index}
                    onClick={ToggleComments}
                >
                    {question}
                </div>
                <div className="delete_question">
                    <img
                        src={deleteIcon}
                        alt={"delete-icon"}
                        data-index={index}
                        onClick={DeleteQuestion}
                    />
                </div>
            </div>
            <div
                className="question_comments hide"
                contentEditable="true"
                id={"comments_" + index}
                onBlur={EditComments}
            >
                {comments}
            </div>
        </div>
    );
}

export default QuestionLayout;
