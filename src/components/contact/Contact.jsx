import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ArrowTopHeader from "../ArrowTopHeader";
import Footer from "../Footer";
import style from "./contact.module.css";

const Contact = () => {
  const formRef = useRef();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    budget: "",
    design: false,
    development: false,
    seo: false,
    projectManagement: false,
    notSure: false,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setData({
      ...data,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ayc4ky9",
        "template_aeeigcq",
        formRef.current,
        "2AbAQYoOXUq712ml0"
      )
      .then(
        (result) => {
          toast.success("Success! email send successfully");
          setData("");
        },
        (error) => {
          console.log(error.text);
          toast.error(error);
        }
      );
  };

  return (
    <div className={style.contactPage}>
      <ToastContainer />
      <div className={style.logo}>
        {/* <img src="assets/photos/blueLogo.png" alt="" width={153} height={63} /> */}
      </div>
      <div className={style.pageTitle}>
        <ArrowTopHeader label={"Contact"} color={"#C0C0C0"} dark={true} />
      </div>
      <div className={style.contactTypo}>
        <h1>Contact</h1>
        <p>Websites, campaigns, or rocket ships, let’s create something</p>
      </div>
      {/* form  */}
      <div className={style.contactForm}>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className={style.input__container}>
            <span className={style.inputStyle}>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={data.firstName}
                onChange={handleInputChange}
              />
            </span>
            <span className={style.inputStyle}>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={data.lastName}
                onChange={handleInputChange}
              />
            </span>
          </div>
          <div className={style.input__container}>
            <span className={style.inputStyle}>
              <input
                type="Email"
                placeholder="Email"
                name="email"
                value={data.email}
                onChange={handleInputChange}
              />
            </span>
            <span className={style.inputStyle}>
              <input
                type="number"
                placeholder="Phone"
                name="phone"
                value={data.phone}
                onChange={handleInputChange}
              />
            </span>
          </div>
          <div className={style.textarea__container}>
            <textarea
              className={style.inputStyle}
              cols="32"
              rows="10"
              placeholder="Message"
              name="message"
              value={data.message}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className={style.servicesArea}>
            <h3>Service</h3>
            <p>
              Selecting the services below helps us match the right person and
              material when sending you information. Select as many as you’d
              like.
            </p>
            <div>
              <label className={style.chckBox}>
                Design
                <input
                  type="checkbox"
                  name="design"
                  checked={data.design}
                  onChange={handleInputChange}
                />
                <span className={style.checkmark}></span>
              </label>
              <label className={style.chckBox}>
                Development
                <input
                  type="checkbox"
                  name="development"
                  checked={data.development}
                  onChange={handleInputChange}
                />
                <span className={style.checkmark}></span>
              </label>
              <label className={style.chckBox}>
                SEO
                <input
                  type="checkbox"
                  name="seo"
                  checked={data.seo}
                  onChange={handleInputChange}
                />
                <span className={style.checkmark}></span>
              </label>
              <label className={style.chckBox}>
                Project Management
                <input
                  type="checkbox"
                  name="projectManagement"
                  checked={data.projectManagement}
                  onChange={handleInputChange}
                />
                <span className={style.checkmark}></span>
              </label>
              <label className={style.chckBox}>
                I'm not sure
                <input
                  type="checkbox"
                  name="notSure"
                  checked={data.notSure}
                  onChange={handleInputChange}
                />
                <span className={style.checkmark}></span>
              </label>
            </div>
            <div className={style.servicesArea}>
              <h3>Budget</h3>
              <p>
                Picking a budget can help us narrow down the project size and
                depth, but isn’t necessary to fill out.
              </p>
              <span className={style.inputStyle}>
                <input
                  type="text"
                  placeholder="0$ - 5000$ ranges"
                  name="budget"
                  value={data.budget}
                  onChange={handleInputChange}
                />
              </span>
            </div>
          </div>
          <button type="submit">send Information</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
