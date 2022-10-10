import App from "../App";

const RadioButtonsHandler = (event) => {
    const colorMap = {
        Red: 0,
        Yellow: 1,
        Grey: 2,
        Green: 3,
    };

    // console.log(event.target.dataset.index);
    // console.log(event.target.dataset.color);
    // console.log(colorMap[event.target.dataset.color]);

    const questionsArr = JSON.parse(localStorage.getItem("questions"));
    questionsArr[Number(event.target.dataset.index) - 1].status =
        colorMap[event.target.dataset.color];

    const sortedQuestionsArr = questionsArr.sort((a, b) => a.status - b.status);
    localStorage.setItem("questions", JSON.stringify(sortedQuestionsArr));
    App();
};

function StatusButtonsRender({ index, questionStatus }) {
    const color = ["RedRadio", "YellowRadio", "GreyRadio", "GreenRadio"];

    return (
        <div className="status_swithers">
            {color.map((value, i) => {
                return (
                    <label
                        className={"switch "}
                        key={value}
                    >
                        {/* {value} */}
                        <input
                            type="radio"
                            name={"question_radio_" + index}

                            // checked={i === questionStatus ? "checked" : ""}
                        />
                        <span
                            className={"slider round " + value}
                            data-index={index} //index in arr
                            data-color={value.slice(0, -5)} //chosen status color
                            onClick={RadioButtonsHandler}
                        ></span>
                    </label>
                );
            })}
        </div>
    );
}

export default StatusButtonsRender;
