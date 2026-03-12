import styles from './ExhibitB.module.css';
import { Row, Col, Collapse } from 'react-bootstrap';

import below from '../assets/ExhibitB/Below.jpg';
import bw from '../assets/ExhibitB/BW.png';
import cSplash from '../assets/ExhibitB/cSplash.png';
import hCover from '../assets/ExhibitB/Hcover.png';
import point from '../assets/ExhibitB/point.png';

export default function ExhibitB() {

  //ORDER MATTERS
  const images = [
    { src: cSplash, alt: 'Color Splash of Hozier performing', caption: <><h4>Hozier fun fact!</h4> <br /> <p>Hozier was born on March 17th, 1990. Saint Patrick's day!</p></>},
    { src: hCover, alt: 'Hozier playing guitar from below', caption: <><h4>Hozier fun fact!</h4> <br /> <p>While Hozier was nominated for a grammy for his hit song "Take Me to Church", he lost to Sam Smith's song "Stay with Me"</p></> },
    { src: point, alt: 'Hozier pointing while singing', caption: <><h4>Hozier fun fact!</h4> <br /> <p>Hozier was a member of the Irish choral group Anúna from 2009 to 2012.</p></> },
    { src: bw, alt: 'update', caption: <><h4>Hozier fun fact!</h4> <br /> <p>Hozier's favorite movie was The Blues Brothers, helping solidify his love for the style.</p></> },
    { src: below, alt: 'update', caption: <><h4>Hozier fun fact!</h4> <br /> <p>Contrary to popular belief, Hozier is a self proclaimed atheist.</p></> }
  ];


  return (
    <div className={styles.exhibitContainer}>
      <h1 className={styles.title}>Hozier</h1>
      <br /><br />
  
      <div className={styles.galleryContainer}>
        {images.map((image, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardInner}>
              {/* FRONT */}
              <div className={styles.cardFront}>
                <img src={image.src} alt={image.alt} className={styles.imgB} />
              </div>
          
              {/* BACK */}
              <div className={styles.cardBack}>
                <div className={styles.cardBackBlur}
                style={{ backgroundImage: `url(${image.src})` }}
                ></div>
                <div className={styles.caption}>{image.caption}</div>
              </div>
            </div>
        </div>
        ))}
      </div>
      <button className="btn" onClick={() => window.location.href = '/'}>
    Back To Homepage!
    </button>
    </div>
  );
  
  
}