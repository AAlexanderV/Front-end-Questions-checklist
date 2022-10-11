import QuestionLayout from "./QuestionLayout";

function RenderQuestions({ questions, setQuestionsList }) {
    return (
        <div className="questions_list">
            {questions.map((value, index) => {
                return (
                    <QuestionLayout
                        index={index + 1}
                        question={value.question}
                        comments={value.comments}
                        questionStatusID={value.status}
                        setQuestionsList={setQuestionsList}
                        key={index}
                    />
                );
            })}
        </div>
    );
}

export default RenderQuestions;
