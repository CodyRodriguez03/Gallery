import styles from './ExhibitB.module.css';
import { Row, Col, Collapse } from 'react-bootstrap';

import below from '../assets/ExhibitB/Below.jpg';
import bw from '../assets/ExhibitB/BW.png';
import cSplash from '../assets/ExhibitB/cSplash.png';
import hCover from '../assets/ExhibitB/Hcover.png';
import point from '../assets/ExhibitB/point.png';

export default function ExhibitB() {

  const images = [
    { src: cSplash, alt: 'Color Splash of Hozier performing', caption: 'Lorem Ipsum' },
    { src: hCover, alt: 'Hozier playing guitar from below', caption: 'Lorem Ipsum' },
    { src: point, alt: 'Hozier pointing while singing', caption: 'Lorem Ipsum' },
    { src: bw, alt: 'update', caption: 'Lorem Ipsum' },
    { src: below, alt: 'update', caption: 'Lorem Ipsum' }
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