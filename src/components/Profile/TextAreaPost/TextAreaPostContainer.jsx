import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from "../../../redux/profileReducer";
import TextAreaPost from "./TextAreaPost";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    newPostText: state.profilePage.newPostText
  };
};
const mapDispatchToProps = dispatch => {
  return {
    inputSynchronization: inputText => {
      dispatch(updateNewPostTextActionCreator(inputText));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  };
};

const TextAreaPostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TextAreaPost);

export default TextAreaPostContainer;
