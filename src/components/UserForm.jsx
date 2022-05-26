import React from "react";
import Button from "./Button";

export default class UserForm extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="user_form_wrapper">
          <div className="user_form_header">
            <h1>Send us your CV</h1>
            <p>
              Our specialists are searching for talented professionals. Send
              your CV today and we will contact you with the latest job
              opportunities.
            </p>
          </div>

          <div className="form_block">
            <form>
              <div className="input_wrapper">
                <label htmlFor="user_name">Name</label>
                <input
                  id="user_name"
                  type="text"
                  value={this.props.userName}
                  placeholder="Name"
                />
              </div>

              <div className="input_wrapper">
                <label htmlFor="user_lastname">Last Name</label>
                <input
                  id="user_lastname"
                  type="text"
                  value={this.props.userLastName}
                  placeholder="Last Name"
                />
              </div>

              <div className="input_wrapper"></div>

              <div className="input_wrapper">
                <label htmlFor="user_birth_date">Date of Birth</label>
                <input
                  id="user_birthdate"
                  type="text"
                  value={this.props.userBirthdate}
                  placeholder="DD.MM.YYYY"
                />
              </div>
              <div className="input_wrapper">
                <label htmlFor="user_phone">Phone</label>
                <input
                  id="user_phone"
                  type="text"
                  value={this.props.userPhone}
                  placeholder="Phone"
                />
              </div>
              <div className="input_wrapper">
                <label htmlFor="user_website">Website</label>
                <input
                  id="user_website"
                  type="text"
                  value={this.props.userWebsite}
                  placeholder="Website"
                />
              </div>
              <div className="input_wrapper">
                <label htmlFor="user_about">Tell us about yourself</label>
                <textarea
                  autoFocus
                  maxLength="140"
                  id="user_about"
                  type="text"
                  value={this.props.userAbout}
                  placeholder="Tell us about yourself"
                />
              </div>
              <div className="input_wrapper">
                <label htmlFor="user_techstack">Technology stack</label>
                <textarea
                  autoFocus
                  maxLength="140"
                  id="user_techstack"
                  type="text"
                  value={this.props.userTechstack}
                  placeholder="Technology stack"
                />
              </div>
              <div className="input_wrapper">
                <label htmlFor="user_project">Recent project description</label>
                <textarea
                  autoFocus
                  maxLength="140"
                  id="user_project"
                  type="text"
                  value={this.props.userName}
                  placeholder="Recent project description"
                />
              </div>
            </form>
          </div>

          <div className="user_form_footer">
            <Button btnClass="button_cancel" btnText="Cancel" />
            <Button btnClass="button_send" btnText="Send" />
          </div>
        </div>
      </div>
    );
  }
}
