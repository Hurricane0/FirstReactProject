import React from "react";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import Dialogs from "./Dialogs";

class DialogsContainer extends React.Component {
  render() {
    return <Dialogs />;
  }
}
let AuthRedirectComponent = withAuthRedirect(DialogsContainer);
export default AuthRedirectComponent;
