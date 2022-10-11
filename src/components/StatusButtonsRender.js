function StatusButtonsRender({ index, setQuestionColor }) {
    const colorMap = ["Red", "Yellow", "Grey", "Green"];

    const RadioButtonsHandler = (event) => {
        const buttonColorMap = {
            Red: 0,
            Yellow: 1,
            Grey: 2,
            Green: 3,
        };

        const questionsArr = JSON.parse(localStorage.getItem("questions"));
        questionsArr[Number(event.target.dataset.index) - 1].status =
            buttonColorMap[event.target.dataset.color];
        localStorage.setItem("questions", JSON.stringify(questionsArr));

        setQuestionColor(colorMap[buttonColorMap[event.target.dataset.color]]);
    };

    return (
        <div className="status_swithers">
            {colorMap.map((value, i) => {
                return (
                    <label
                        className={"switch "}
                        key={value}
                    >
                        <input
                            type="radio"
                            name={"question_radio_" + index}
                            // checked={i === questionStatus ? "checked" : ""}
                        />
                        <span
                            className={"slider round " + value + "Radio"}
                            data-index={index} //index in arr
                            data-color={value} //chosen status color
                            onClick={RadioButtonsHandler}
                        ></span>
                    </label>
                );
            })}
        </div>
    );
}

export default StatusButtonsRender;
