import React from "react";
import styles from "../styles/Profile.module.css";

//component
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";

function Profile() {
  return (
    <>
      <Navbar />
      <div className={`container-fluid p-5 ${styles["cont-fluid"]}`}>
        <div className="container justify-content-center">
          <p className={`text-center  ${styles["profile"]}`}>Profile</p>
          <p className={`text-center fs-6 ${styles["text-profile"]}`}>See your notifications for the latest updates</p>
        </div>
      </div>
      <form className="container mt-5">
        <form className={`form-floating `}>
          <input type="text" className={`form-control my-auto ${styles["floating-form"]}`} id="floatingInputValue" placeholder=" " value="Female" />
          <label for="floatingInputValue">Gender</label>
        </form>
        <form className="form-floating ">
          <input type="email" className={`form-control my-auto ${styles["floating-form"]} ${styles["floating-form-2"]}`} id="floatingInputValue" placeholder="name@example.com" value="syifa@gamil.com" />
          <label for="floatingInputValue">Your Email</label>
        </form>
        <form className="form-floating">
          <input type="text" className={`form-control my-auto ${styles["floating-form"]} ${styles["floating-form-3"]}`} id="floatingInputValue" placeholder=" " value="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          <label for="floatingInputValue">Store Description</label>
        </form>

        <button type="submit" className="btn btn-danger my-5">
          Logout
        </button>
      </form>
      <Footer />
    </>
  );
}

export default Profile;