function EditComments(event) {
    const questionsArr = JSON.parse(localStorage.getItem("questions"));

    questionsArr[Number(event.target.id.slice(9)) - 1].comments =
        event.target.innerText;

    localStorage.setItem("questions", JSON.stringify(questionsArr));
}

export default EditComments;
