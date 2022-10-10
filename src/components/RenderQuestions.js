import QuestionLayout from "./QuestionLayout";

function RenderQuestions({ questions }) {
    return (
        <div className="questions_list">
            {questions.map((value, index) => {
                return (
                    <QuestionLayout
                        index={index + 1}
                        question={value.question}
                        comments={value.comments}
                        questionStatus={value.status}
                        key={index}
                    />
                );
            })}
        </div>
    );
}

export default RenderQuestions;
