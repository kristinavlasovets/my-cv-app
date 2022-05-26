import React from "react";
import Button from "./Button";

export default class UserForm extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="user_form_wrapper">
          <div className="user_form_header">
            <h2>Send us your CV</h2>
            <p>
              Our specialists are searching for talented professionals. Send
              your CV today and we will contact you with the latest job
              opportunities.
            </p>
          </div>

          <div className="form_block">
            <form>
              <label htmlFor="user_name">Name*</label>
              <input
                id="user_name"
                type="text"
                placeholder="Name"
                required
              />

              <label htmlFor="user_lastname">Last Name*</label>
              <input
                id="user_lastname"
                type="text"
                placeholder="Last Name"
                required
              />

              <label htmlFor="user_birth_date">Date of Birth*</label>
              <input
                id="user_birthdate"
                type="date"
                placeholder="DD.MM.YYYY"
                required
              />

              <label htmlFor="user_phone">Phone*</label>
              <input
                id="user_phone"
                type="tel"
                placeholder="Phone"
                required
              />

              <label htmlFor="user_website">Website</label>
              <input
                id="user_website"
                type="url"
                placeholder="Website"
              />

              <label htmlFor="user_about">Tell us about yourself</label>
              <textarea
              rows='7'
                autoFocus
                maxLength="140"
                id="user_about"
                placeholder="Tell us about yourself"
              />

              <label htmlFor="user_techstack">Technology stack</label>
              <textarea
              rows='7'
                autoFocus
                maxLength="140"
                id="user_techstack"
                placeholder="Technology stack"
              />

              <label htmlFor="user_project">Recent project description</label>
              <textarea
              rows='7'
                autoFocus
                maxLength="140"
                id="user_project"
                placeholder="Recent project description"
              />
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
