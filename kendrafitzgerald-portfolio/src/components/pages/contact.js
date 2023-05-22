import React from 'react';
const styles = {
    body: {
      background: "#000018",
      height: 500,
      width: 750,
      marginLeft: 350,
    },
    header: {
      color: "white",
    },
    text: {
      color: "white",
    },
  };
export default function Contact() {
    return(
        <div className='card' style={styles.body}>
            <div className='card-body'>
            <h1 style={styles.header}>Contact</h1>
        </div>
        </div>
    )
}