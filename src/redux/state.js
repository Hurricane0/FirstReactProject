let state = {
  dialogsPage: {
    userDialogs: [
      { id: 1, name: "Nikita Dvortsov" },
      { id: 2, name: "Sonya Gurina" },
      { id: 3, name: "Dasha Dvortsova" },
      { id: 4, name: "Roman Dvortsov" }
    ],
    userMessages: [
      { id: 1, message: "I am Nikita Dvortsov" },
      { id: 2, message: "I am Sonya Gurina" },
      { id: 3, message: "I am Dasha Dvortsova" }
    ]
  },
  profilePage: {
    posts: [
      { id: 1, postText: "It is the first post" },
      { id: 2, postText: "There is the second post" },
      { id: 3, postText: "The third post!" }
    ],
    textareaText: ""
  }
};
//Adding new post
export let addPost = () => {
  let newPost = {
    id: 4,
    postText: state.profilePage.textareaText
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.textareaText = "";
  rerenderEntireTree(state);
};
//Synchronous input text update
export let updateNewTextareaText = newtext => {
  state.profilePage.textareaText = newtext;
  rerenderEntireTree(state);
};
//Default stab (Заглушка)
let rerenderEntireTree = () => {
  console.log("State has been changed");
};
//Pattern (Observer) for rerenderinng with no mistakes in cyclic dependence
export const subscribe = observer => {
  rerenderEntireTree = observer; //Changing rerenderEntireTree() function
};
export default state;
