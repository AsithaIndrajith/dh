import React from "react";
import "./NotFound.css";

export default function NotFound(props) {
  return (
    <div style={{ backgroundColor: "#95c2de", width: "100%", height: "99vh" }}>
      <div class="mainbox">
        <div class="err">4</div>
        <i class="far fa-question-circle fa-spin"></i>
        <div class="err2">4</div>
        <div class="msg">
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place?
          <p>
            Let's go <a href="/dh">home</a> and try from there.
          </p>
        </div>
      </div>
    </div>
  );
}
