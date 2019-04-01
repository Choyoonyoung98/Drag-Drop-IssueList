import React, { Component } from "react";
import "./issue.style.css";
import IssueDep from "./issueDepartment/IssueDep";
import Issues from "./issues/Issues";

export class Issue extends Component {
  render() {
    return (
      <div className="issue-container">
        <h1>Drag & drop Test</h1>

        <div className="box-container">
          <Issues />
        </div>
      </div>
    );
  }
}

export default Issue;
