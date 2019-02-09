import React from "react";
import Button from "../Button";

class ButtonToggle extends React.Component {
  render() {
    var { disabled, toggle } = this.props;
    return (
      <div style={{ display: "flex", padding: "30px", marginBottom: "20px" }}>
        <Button disabled={disabled} onClick={toggle} name="Photo Gallery" />
        <Button disabled={!disabled} onClick={toggle} name="Video Demo's" />
      </div>
    );
  }
}
export default ButtonToggle;
