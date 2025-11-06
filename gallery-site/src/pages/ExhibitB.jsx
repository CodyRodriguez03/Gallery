import { useState } from 'react';
import styles from './ExhibitB.module.css';
import { Row, Col, Collapse } from 'react-bootstrap';

import below from '../assets/ExhibitB/Below.jpg';
import bw from '../assets/ExhibitB/BW.png';
import cSplash from '../assets/ExhibitB/cSplash.png';
import hCover from '../assets/ExhibitB/Hcover.png';
import point from '../assets/ExhibitB/point.png';

export default function ExhibitB() {
  const [openIndex, setOpenIndex] = useState(null);

  const images = [
    { src: below, alt: 'update', caption: 'Lorem Ipsum' },
    { src: bw, alt: 'update', caption: 'Lorem Ipsum' },
    { src: cSplash, alt: 'Color Splash of Hozier performing', caption: 'Lorem Ipsum' },
    { src: hCover, alt: 'Hozier playing guitar from below', caption: 'Lorem Ipsum' },
    { src: point, alt: 'Hozier pointing while singing', caption: 'Lorem Ipsum' }
  ];


  return (
    <div className={styles.exhibitContainer}>
      <h1 className={styles.title}>Hozier</h1>

      <div className={styles.galleryContainer}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.imageItem}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className={`${styles.imgB} img-fluid rounded shadow-sm`}
            />
            <Collapse in={openIndex === index}>
              <div className={`${styles.captionBox} mt-2`}>
                {image.caption}
              </div>
            </Collapse>
          </div>
        ))}
      </div>
    </div>
  );
}