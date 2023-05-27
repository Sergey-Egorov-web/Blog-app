let postTitle;

const titleInputNode = document.querySelector(".js-input-title");
const addPostBtnNode = document.querySelector(".js-add-post-button");

addPostBtnNode.addEventListener("click", function () {
  const titleInputNode = document.querySelector(".js-input-title");
  postTitle = titleInputNode.value;
  console.log(postTitle);
});
