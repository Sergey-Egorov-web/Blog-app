let post = {
  title: "",
  text: "",
};

let posts = [];

const titlePostInputNode = document.querySelector(".js-input-title");
const textPostInputNode = document.querySelector(".js-input-post");
const addPostBtnNode = document.querySelector(".js-add-post-button");
const postsNode = document.querySelector(".js-posts");
// const outputPostTitleNode = document.querySelector(".js-output-post-title");
// const outputPostNode = document.querySelector(".js-output-post");

addPostBtnNode.addEventListener("click", function () {
  post = getPostFromUser(titlePostInputNode.value, textPostInputNode.value);
  addPost(getPost());
  console.log(getPosts());
  renderPost(getPosts());
});

// -----------получение поста от пользователя-------------//

function getPostFromUser(titlePostFromUser, textPostFromUser) {
  // const title = titlePostFromUser;
  // const text = textPostFromUser;
  return {
    title: titlePostFromUser,
    text: textPostFromUser,
  };
}

function setPost(newPost) {
  const post = newPost;
  return post;
}

function getPost() {
  return post;
}
function getPosts() {
  return posts;
}

function addPost(post) {
  posts.push(post);
}

function renderPost(posts) {
  const post = getPosts();
  let postsHTML = "";

  posts.forEach((post) => {
    postsHTML += `
    <div class="post">
      <p class="post-title">${post.title}</p>
      <p class="post-text">${post.text}</p>
    </div>
    `;
  });
  postsNode.innerHTML = postsHTML;
}
