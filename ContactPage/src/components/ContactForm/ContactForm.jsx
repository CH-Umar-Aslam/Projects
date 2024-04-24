import React, { useState } from "react";

import Button from "../Button/Button";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { MdMessage } from "react-icons/md";
import styles from "./Contact.module.css";
const ContactForm = () => {
  const [name, setname] = React.useState("Ansu");
  const [email, setemail] = React.useState("Support@doSomeCoding.com");
  const [text, settext] = React.useState("Subscribe to this channel");

  const onSubmit = (event) => {
    event.preventDefault();
    return (
      setname(event.target[0].value),
      settext(event.target[2].value),
      setemail(event.target[1].value)
    );
  };
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button isOutline={true} text="VIA EMAIL" icon={<HiMail fontSize="24px" />} />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea type="text" rows="8" name="text" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button text="SUBMIT BUTTON" />
          </div>
          <div>{name + "  " + email + " " + text}</div>
        </form>
      </div>
      <div className={styles.contact_Image}>
        <img src="./images/pic.svg" alt="logo-image" />
      </div>
    </section>
  );
};

export default ContactForm;
