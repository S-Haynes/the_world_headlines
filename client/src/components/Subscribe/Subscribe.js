import React from "react";
import styles from "./Subscribe.css";
import CloseButton from "../CloseButton/CloseButton";
import Logo from "../Logo/Logo";
import WhiteLogo from "../../assets/img/newslogowhite.png";

const Subscribe = ({ show, closeClick }) => {
  let content = show ? (
    <div className={styles.Subscribe}>
      <div
        onClick={closeClick}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          width: "35px",
          height: "30px",
          cursor: "pointer"
        }}
      >
        <CloseButton />
      </div>
      <Logo img={WhiteLogo} />
      <h4 className="mt-4">Subscribe to our Newsletter.</h4>
      <form>
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Email Address"
          />
          <small
            style={{ marginTop: "20px", color: "#aaa" }}
            id="emailHelp"
            class="form-text "
          >
            We'll never share your email with anyone else.
          </small>
        </div>
      </form>
    </div>
  ) : null;
  return content;
};

export default Subscribe;
