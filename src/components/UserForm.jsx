import React from "react";
import Button from "./Button";
import CvOutput from "./CvOutput";
import UserFormCSS from "../styles/components/userForm.module.css";
import {
  checkEmpty,
  checkCapitalLetter,
  checkSpaces,
  checkUrl,
  checkLimit,
} from "../helpers/helperFunctions";

export default class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      lastname: "",
      birthdate: "",
      phone: "",
      website: "",
      about: "",
      techstack: "",
      project: "",
      error: {
        username: "",
        lastname: "",
        phone: "",
        website: "",
        about: "",
        techstack: "",
        project: "",
      },
      usernameValid: false,
      lastnameValid: false,
      phoneValid: false,
      websiteValid: false,
      aboutValid: false,
      techstackValid: false,
      projectValid: false,
    };
  }

  handleUserInput = (e) => {
    const { name, value } = e.target;
    let formIsValid = true;

    const isEmpty = checkEmpty(value);
    if (isEmpty) {
      formIsValid = false;
      this.setState({
        error: {
          [name]: isEmpty,
        },
      });
    } else {
      this.setState({
        error: "",
      });
    }

    if (name === "username" || name === "lastname") {
      const isCapital = checkCapitalLetter(value);
      if (isCapital) {
        this.setState({
          error: {
            [name]: isCapital,
          },
        });
      }
    }

    const isSpace = checkSpaces(value);
    if (isSpace) {
      this.setState({
        error: {
          [name]: isSpace,
        },
      });
    }

    if (name === "website") {
      const isUrl = checkUrl(value);
      if (isUrl) {
        this.setState({
          error: {
            [name]: isUrl,
          },
        });
      } else {
        this.setState({
          error: "",
        });
      }
    }

    if (name === "phone") {
      if (value.length === 1) {
        this.setState({
          phone: value + "-",
        });
      }
    }

    const isLimit = checkLimit(value);
    if (isLimit) {
      this.setState({
        error: {
          [name]: isLimit,
        },
      });
    }

    this.setState({
      [name]: value,
    });
    return formIsValid;
  };

  resetForm = () => {
    this.setState({
      username: "",
      lastname: "",
      birthdate: "",
      phone: "",
      website: "",
      about: "",
      techstack: "",
      project: "",
    });
  };

  submitForm = (e) => {
    e.preventDefault();

    if (this.handleUserInput()) {
      alert("Form submitted.");
    } else {
      alert("Form has errors.");
    }
  };

  render() {
    const { error } = this.state;
    return (
      <div className="container">
        <div className={UserFormCSS.user_form_wrapper}>
          <div className={UserFormCSS.user_form_header}>
            <h2>Send us your CV</h2>
            <p>
              Our specialists are searching for talented professionals. Send
              your CV today and we will contact you with the latest job
              opportunities.
            </p>
          </div>

          <div className={UserFormCSS.form_block}>
            <form id="cv_form">
              <label htmlFor={UserFormCSS.user_name}>Name*</label>
              <input
                name="username"
                id={UserFormCSS.user_name}
                type="text"
                value={this.state.username}
                placeholder="Name"
                required
                onChange={this.handleUserInput}
              />

              <span>{error.username}</span>

              <label htmlFor="user_lastname">Last Name*</label>
              <input
                name="lastname"
                id={UserFormCSS.user_lastname}
                type="text"
                value={this.state.lastname}
                placeholder="Last Name"
                required
                onChange={this.handleUserInput}
              />
              <span>{error.lastname}</span>

              <label htmlFor="user_birth_date">Date of Birth*</label>
              <input
                name="birthdate"
                id={UserFormCSS.user_birthdate}
                type="date"
                value={this.state.birthdate}
                placeholder="DD.MM.YYYY"
                required
                onChange={this.handleUserInput}
              />

              <label htmlFor="user_phone">Phone*</label>
              <input
                name="phone"
                id={UserFormCSS.user_phone}
                type="tel"
                value={this.state.phone}
                placeholder="7-____-__-__"
                maxLength={12}
                required
                onChange={this.handleUserInput}
              />
              <span>{error.phone}</span>

              <label htmlFor="user_website">Website*</label>
              <input
                name="website"
                id={UserFormCSS.user_website}
                type="url"
                value={this.state.website}
                placeholder="Website"
                required
                onChange={this.handleUserInput}
              />
              <span>{error.website}</span>

              <label htmlFor="user_about">Tell us about yourself*</label>
              <textarea
                name="about"
                value={this.state.about}
                rows="7"
                autoFocus
                maxLength="600"
                id={UserFormCSS.user_about}
                placeholder="Tell us about yourself"
                required
                onChange={this.handleUserInput}
              />
              <span>{error.about}</span>
              <span>{`${600 - this.state.about.length} / 600`}</span>

              <label htmlFor="user_techstack">Technology stack*</label>
              <textarea
                name="techstack"
                value={this.state.techstack}
                rows="7"
                autoFocus
                maxLength="600"
                id={UserFormCSS.user_techstack}
                placeholder="Technology stack"
                required
                onChange={this.handleUserInput}
              />
              <span>{error.techstack}</span>
              <span>{`${600 - this.state.techstack.length} / 600`}</span>

              <label htmlFor="user_project">Recent project description*</label>
              <textarea
                name="project"
                value={this.state.project}
                rows="7"
                autoFocus
                maxLength="600"
                id={UserFormCSS.user_project}
                placeholder="Recent project description"
                required
                onChange={this.handleUserInput}
              />
              <span>{error.project}</span>
              <span>{`${600 - this.state.project.length} / 600`}</span>

              <div className={UserFormCSS.user_form_footer}>
                <Button
                  onClick={this.resetForm}
                  btnClass="button_cancel"
                  btnText="Cancel"
                />
                <Button
                  onClick={this.submitForm}
                  btnType="submit"
                  btnClass="button_send"
                  btnText="Save"
                />
              </div>
            </form>
          </div>
        </div>

        <CvOutput
          username={this.state.username}
          lastname={this.state.lastname}
          birthdate={this.state.birthdate}
          phone={this.state.phone}
          website={this.state.website}
          about={this.state.about}
          techstack={this.state.techstack}
          project={this.state.project}
        />
      </div>
    );
  }
}
