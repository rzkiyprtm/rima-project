import React from 'react'
import { useState } from "react";
import styles from '../styles/Notification.module.css'

function Notification() {
  const [linkActive, setLinkActive] = useState("one")


  return (
    <>
    <main className="container-fluid p-0">

    <div className={styles["title-container"]}>
      <div className={styles.title}>
      <h1>Notification</h1>
      <p>See your notifications for the latest updates</p>
      </div>
    </div>

    <div className={`${styles["form-container"]} container`}>
      <div className={styles["chat-box"]}>
      <div className={styles["chat-one"]}>
        <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dapibus non elementum arcu tortor...</p>
      </div>
      </div>
      <div className={styles["chat-box-middle"]}>
      <div className={styles["chat-one"]}>
        <h3 className={styles.h3}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dapibus non elementum arcu tortor...</p>
      </div>
      </div>
      <div className={styles["chat-box"]}>
      <div className={styles["chat-one"]}>
        <h3 className={styles.h3}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dapibus non elementum arcu tortor...</p>
      </div>
      </div>
    </div>

    <section>
      <div className={styles.pagination}>
        <div 
        onClick={() => {
          setLinkActive("one")
        }}
         style={{ "background-color": linkActive === "one" ? "#000000" : "" }}
        className={styles["page-box"]}>
          <h4>01</h4>
        </div>
        <div 
        onClick={() => {
          setLinkActive("two")
        }}
         style={{ "background-color": linkActive === "two" ? "#000000" : "" }}
        className={styles["page-box"]}>
          <h4>02</h4>
        </div>
        <div 
        onClick={() => {
          setLinkActive("three")
        }}
         style={{ "background-color": linkActive === "three" ? "#000000" : "" }}
        className={styles["page-box"]}>
          <h4>03</h4>
        </div>
        <div 
        onClick={() => {
          setLinkActive("four")
        }}
         style={{ "background-color": linkActive === "four" ? "#000000" : "" }}
        className={styles["page-box"]}>
          <h4>04</h4>
        </div>
        <div
        
        onClick={() => {
          setLinkActive("five")
        }}
         style={{ "background-color": linkActive === "five" ? "#000000" : "" }}
        className={styles["page-box"]}>
          <h4>05</h4>
        </div>
      </div>
    </section>

    </main>
    </>
  )
}

export default Notification