import React from 'react'
import styles from './About.module.css'


const AboutComponent = () => {
  return (
    <div className={styles.container}>
    <div className={styles.section1}>
      <img 
      className={styles.purple_ellipse}
      src='/about5.png'/>
      <div>
      <h2>About Us</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus magna viverra viverra fermentum.Cras eget justo vitae ex </p>
    </div>
      <img 
      className={styles.yellow_ellipse}
      src='/about4.png'/>
    </div>
    <div className={styles.section2}>
      <div className={styles.video}>
        <video 
        src=''
        controls
        autoPlay
        />
      </div>
      <div>
        <h2>Who Are We?</h2>
        <p>We are not the typical lottery you can come across online. Our team has beliefs and values we amend to rigorously, providing you with the best chance of actually hitting the lottery while having fun.</p>
      </div>
    </div>
    
    <div className={styles.section3}>
    
    <img src='/curveyline.png'  className={styles.curve}/>
    <div>
      <h2>Our Mission</h2>
<p>We have only one goal on our radar - to change the online crypto lottery industry. And we will do this by providing our users with numerous opportunities to make a profit, the most significant chance in the industry of taking down the best lottery prizes and, of course, a safe place where everyone can have fun and enjoy some thrilling emotions.</p>
<p>All crypto lotteries rely solely on luck, and we hate that. Players deserve so much more! Here at MYLT, we give users all the freedom they need so that they can take full ownership of their fate. You want the best chance to win big? We offer it. You want to win the new Rolex watch? Join our niche lottery for it. You don’t like the prize you have won? Auction it to the other users and make a profit to get new tickets before the draw or simply keep your profit</p>
<p>Luck isn’t the driving force of our lives anymore. So join our passionate community, and let’s change the crypto lottery industry forever, all while profiting and having fun together!</p>
    </div>
    </div>
    
    </div>
  )
}

export default AboutComponent;