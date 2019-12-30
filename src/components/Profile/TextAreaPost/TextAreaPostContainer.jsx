import { addPost, inputSynchronization } from "../../../redux/profileReducer";
import TextAreaPost from "./TextAreaPost";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    newPostText: state.profilePage.newPostText
  };
};

const TextAreaPostContainer = connect(mapStateToProps, {
  inputSynchronization,
  addPost
})(TextAreaPost);

export default TextAreaPostContainer;
