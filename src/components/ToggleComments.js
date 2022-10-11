function ToggleComments(event) {
    const comment = document.getElementById("comments_" + event.target.id);
    comment.classList.toggle("hide");
}

export default ToggleComments;
