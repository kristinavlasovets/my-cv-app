import React from "react";
import Button from "./Button";
import UserFormCSS from "../styles/components/userForm.module.css";

const formValid = ({ error, ...rest }) => {
  let isValid = false;
  Object.values(error).forEach((val) => {
    if (val.length > 0) {
      isValid = false;
    } else {
      isValid = true;
    }
  });
  Object.values(rest).forEach((val) => {
    if (val === null) {
      isValid = false;
    } else {
      isValid = true;
    }
  });
  return isValid;
};

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
        birthdate: "",
        phone: "",
        website: "",
        about: "",
        techstack: "",
        project: "",
      },
    };
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    if (formValid(this.state)) {
      console.log(this.state);
    } else {
      console.log("Form is invalid!");
    }
  };

  handleUserInput = (e) => {
    e.preventDefault();
    let error = { ...this.state.error };
    const { name, value } = e.target;

    switch (name) {
      case "username":
        error.username =
          value.length < 1 ? "The field is empty. Please fill in." : "";
        break;
      case "lastname":
        error.lastname =
          value.length < 1 ? "The field is empty. Please fill in." : "";
        break;
      case "website":
        error.website =
          value.length < 1 ? "The field is empty. Please fill in." : "";
        break;
      default:
        break;
    }
    this.setState({
      error,
      [name]: value,
    });
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
            <form onSubmit={this.onFormSubmit}>
              <label htmlFor={UserFormCSS.user_name}>Name*</label>
              <input
                name="username"
                id={UserFormCSS.user_name}
                type="text"
                value={this.state.name}
                placeholder="Name"
                required
                onChange={this.handleUserInput}
              />

              <label htmlFor="user_lastname">Last Name*</label>
              <input
                name="lastname"
                id={UserFormCSS.user_lastname}
                type="text"
                value={this.state.lastName}
                placeholder="Last Name"
                required
                onChange={this.handleUserInput}
              />

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
                placeholder="Phone"
                pattern="[0-9]{1}-[0-9]{4}-[0-9]{2}-[0-9]{2}"
                required
                onChange={this.handleUserInput}
              />

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
            </form>
          </div>

          <div className={UserFormCSS.user_form_footer}>
            <Button btnType="reset" btnClass="button_cancel" btnText="Cancel" />
            <Button btnType="submit" btnClass="button_send" btnText="Save" />
          </div>
        </div>
      </div>
    );
  }
}
