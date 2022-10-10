import StatusButtonsRender from "./StatusButtonsRender";

function QuestionLayout({ index, question, comments, questionStatus }) {
    const status_color = [
        "status-red",
        "status-yellow",
        "status-grey",
        "status-green",
    ];

    return (
        <div className={"question_row " + status_color[questionStatus]}>
            <div className="question_inner">
                <StatusButtonsRender
                    index={index}
                    questionStatus={questionStatus}
                />
                <div className="question_index">{index}</div>
                <div
                    className={"question_text " + status_color[questionStatus]}
                    id={index}
                >
                    {question}
                </div>
            </div>
            <div className="question_comments">{comments}</div>
        </div>
    );
}

export default QuestionLayout;
