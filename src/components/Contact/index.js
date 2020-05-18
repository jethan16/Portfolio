import React, { useState } from "react";
import "./Contact.css";
import NetworkContainer from "../NetworkContainer";
import emailjs from "emailjs-com";
import Modal from "react-modal";

let emailStatus = false;
let emailVerification;

function Contact(props) {
  const [formState, setFormState] = useState({
    formName: "",
    formEmail: "",
    formMessage: "",
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
    setTimeout(() => {
      setModalIsOpen(false);
    }, 2000);
  };

  const emptyFormResponse = () => {
    emailStatus = false;
    emailVerification = "Form Empty.";
    openModal();
  };

  const fullFormResponse = () => {
    emailStatus = true;
    emailVerification = "Email Sent!";
    openModal();
  };

  const clearForm = () => [
    setFormState({
      formName: "",
      formEmail: "",
      formMessage: "",
    }),
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("empty form", formState);
    if (
      formState.formName === "" ||
      formState.formemail === "" ||
      formState.formMessage === ""
    ) {
      return emptyFormResponse();
    } else {
      fullFormResponse();
    }

    const serviceID = "ethan_nel_jones_gmail_com";
    const templateID = "template_nnLBbrnV";
    let templateParams = {
      from_name: formState.formName,
      from_email: formState.formEmail,
      message_html: formState.formMessage,
    };
    const userID = "user_HfCNlDYLON9IwCSDcXoEk";
    // console.log("from submit", formState);
    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((res) => {
        openModal();
        clearForm();
        // console.log("email sent!", res);
      })
      .catch((err) => console.log(err));
  };

  const handleFormChange = (event) => {
    event.preventDefault();

    let target = event.target;
    let name = target.name;
    let value = target.value;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // console.log("handle form change", formState);

  return (
    <section className="contact-section" id="contactForm">
      <div className="contact">
        <h1 className="header">CONTACT</h1>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className={`label`}>Name</label>

            <input
              className={`input`}
              type="text"
              placeholder="Your Name"
              name="formName"
              value={formState.formName}
              onChange={handleFormChange}
            />
          </div>

          <div className="field">
            <label className={`label`}>Email</label>

            <input
              className={`input`}
              type="email"
              placeholder="Your Email"
              name="formEmail"
              value={formState.formEmail}
              onChange={handleFormChange}
            />

            {/* <p className="help is-danger">This email is invalid</p> */}
          </div>

          <div className="field">
            <label className={`label`}>Message</label>

            <textarea
              className={`input message`}
              placeholder="Your Message"
              name={"formMessage"}
              value={formState.formMessage}
              onChange={handleFormChange}
            ></textarea>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className={`contact-button is-link`}>Submit</button>
            </div>
            <div className="control">
              <button className={`contact-button`} onClick={clearForm}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
      <Modal
        className={`email-verif-${modalIsOpen === false ? "closed" : "open"}`}
        isOpen={modalIsOpen}
      >
        <div>
          <i
            class={`far fa-thumbs-${emailStatus === false ? "down" : "up"}`}
          ></i>
          <h1>{emailVerification}</h1>
        </div>
      </Modal>
    </section>
  );
}

export default Contact;
