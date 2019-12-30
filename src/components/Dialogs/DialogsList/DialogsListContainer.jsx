import { connect } from "react-redux";
import DialogsList from "./DialogsList";

const mapStateToProps = state => {
  return {
    userDialogs: state.dialogsPage.userDialogs
  };
};

const DialogsListContainer = connect(mapStateToProps)(DialogsList);

export default DialogsListContainer;
