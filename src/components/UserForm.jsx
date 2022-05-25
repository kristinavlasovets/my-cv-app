import React from "react";
import Button from "./Button";

export default class UserForm extends React.Component {
    render() {
      return (
        <div className="container">
          <h1>Send us your CV</h1>
          <h2>Our specialists are searching for talented professionals. Send your CV today and we will contact you with the latest job opportunities.</h2>
  
          <form>
            <label htmlFor="user_name">Name:</label>
            <input
              id="user_name"
              type="text"
              value={this.props.userName}
              placeholder="Name"
            />
            <label htmlFor="user_lastname">Last Name:</label>
            <input
              id="user_lastname"
              type="text"
              value={this.props.userLastName}
              placeholder="Last Name"
            />
            <label htmlFor="user_birth_date">Date of Birth:</label>
            <input
              id="user_birthdate"
              type="text"
              value={this.props.userBirthdate}
              placeholder="DD.MM.YYYY"
            />
            <label htmlFor="user_phone">Phone:</label>
            <input
              id="user_phone"
              type="text"
              value={this.props.userPhone}
              placeholder="Phone"
            />
            <label htmlFor="user_website">Website:</label>
            <input
              id="user_website"
              type="text"
              value={this.props.userWebsite}
              placeholder="Website"
            />
            <label htmlFor="user_about">Tell us about yourself:</label>
            <input
              id="user_about"
              type="text"
              value={this.props.userAbout}
              placeholder="Tell us about yourself"
            />
            <label htmlFor="user_techstack">Technology stack:</label>
            <input
              id="user_techstack"
              type="text"
              value={this.props.userTechstack}
              placeholder="Technology stack"
            />
            <label htmlFor="user_project">Recent project description:</label>
            <input
              id="user_project"
              type="text"
              value={this.props.userName}
              placeholder="Recent project description"
            />
          </form>

        <Button />
        <Button />
        
        </div>
      );
    }
  }
  