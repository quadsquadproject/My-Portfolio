import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import './Contact.css'

const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <section className="background-banner">
        <div className="contact-banner">
          <div className="details-content">
            
            <div className="text-para">
              <p>
                Please complete the form below and we will get back to you soon.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="form-container">
          <div className="layout-container">
            <form className="container-form" onSubmit={handleFormSubmit}>
              <div className="col-lg-1">
                <div className="input_text">
                  <input type="text" placeholder="Name*" />
                </div>
                <div>
                  <input type="email" placeholder="Email*" />
                </div>
              </div>
              <div className="col-lg-2">
                <div>
                  <select name="Select Role">
                    <option value="">Select Topic</option>
                    <option value="">Software Development</option>
                    <option value="">Software Testing</option>
                    <option>IT Skills Enhancement</option>
                    <option>IT consultant</option>
                    <option>Carrear Opportunity</option>
                    <option>Other Topic</option>
                  </select>
                </div>
                <div>
                  <input type="tel" placeholder="Phone Number" />
                </div>
              </div>
              <div className="col-lg-3">
                <div>
                  <input type="text" placeholder="subject *" />
                </div>
                <div>
                  <textarea placeholder="Write a Message..." />
                </div>
              </div>
              <div>
                <button type="submit" className="btn_submit_detail">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="table-container">
            <table cellPadding="20px">
              <tbody>
                <tr>
                  <td className="td-lg-1">Contact Us By Phone</td>
                  <td style={{ color: "orange", fontWeight: "bold" }}>
                    <BsFillTelephoneFill style={{ color: "orange" }} /> 8310338347
                  </td>
                </tr>
                <tr>
                  <td className="td-lg-1">Number Or Email Address</td>
                  <td style={{ color: "orange", fontWeight: "bold" }}>
                    <MdOutlineEmail /> ramakrishna.urankar@gmail.com
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
