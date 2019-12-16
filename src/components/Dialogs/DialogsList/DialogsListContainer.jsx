import { connect } from "react-redux";
import DialogsList from "./DialogsList";

const mapStateToProps = state => {
  return {
    userDialogs: state.dialogsPage.userDialogs
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};

const DialogsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogsList);

export default DialogsListContainer;
