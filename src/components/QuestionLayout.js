import { useState } from "react";
import StatusButtonsRender from "./StatusButtonsRender";
import ToggleComments from "./ToggleComments";

function QuestionLayout({ index, question, comments, questionStatusID }) {
    const colorMap = ["Red", "Yellow", "Grey", "Green"];

    const [questionColor, setQuestionColor] = useState(
        colorMap[questionStatusID]
    ); // для смены статуса текста вопроса

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
            </div>
            <div
                className="question_comments hide"
                id={"comments_" + index}
            >
                {comments}
            </div>
        </div>
    );
}

export default QuestionLayout;
