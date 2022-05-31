import React from "react";
import CvOutputCSS from "../styles/components/cvOutput.module.css";

export default class CvOutput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={CvOutputCSS.cv_wrapper}>
        <h2 className={CvOutputCSS.cv_header}>
          {this.props.username} {this.props.lastname}
        </h2>
        <p className={CvOutputCSS.cv_frame}>{this.props.website}</p>

        <div>
          <h3>About me</h3>
          <h3 className={CvOutputCSS.cv_subheader}>{this.props.birthdate}</h3>
          <p>{this.props.about}</p>
        </div>

        <div>
          <h3>Technology stack</h3>
          <p>{this.props.techstack}</p>
        </div>

        <div>
          <h3>My projects</h3>
          <p>{this.props.techstack}</p>
        </div>

        <div className={CvOutputCSS.cv_contacts}>
          <h3 className={CvOutputCSS.cv_header}>Contact me:</h3>
          <p className={CvOutputCSS.cv_frame}>{this.props.phone}</p>
        </div>
      </div>
    );
  }
}
