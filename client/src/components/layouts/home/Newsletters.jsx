import React from "react";
import Swal from "sweetalert2";
export const Newsletters = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "We will contact you soon",
      icon: "success",
      confirmButtonText: "OK",
    });
  }






  return (
    <section className="new-letter">
      <div className="container">
        <div className="new-letter-inner style-2 flex">
          <div className="new-letter-content">
            <h3 className="heading">Contact Us</h3>
            <p className="sub-heading">
              Send us Your Email we will contact you soon
            </p>
          </div>
          <div className="new-letter-img">
            <div className="form-subcribe">
              <form
                id="subscribe-form"
                onSubmit={handleSubmit}
                method="POST"
                acceptCharset="utf-8"
                className="form-submit"
              >
                <input
                  name="email"
                  className="email"
                  type="email"
                  placeholder="Enter Email Address"
                  required
                />
                <button
                  name="submit"
                  type="submit"
                  id="submit"
                  className="sc-button style letter style-2"
                >
                  <span>Contact us</span>{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
