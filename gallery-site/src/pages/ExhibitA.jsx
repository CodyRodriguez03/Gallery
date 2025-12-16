import { useState } from 'react';
import styles from './ExhibitA.module.css';
import { Row, Col, Collapse } from 'react-bootstrap';

import aerial from '../assets/ExhibitA/aerial.png';
import frontShot from '../assets/ExhibitA/beatles-front.jpeg';
import gh from '../assets/ExhibitA/GH.png';
import jl from '../assets/ExhibitA/JL.png';
import pmc from '../assets/ExhibitA/PMC.png';
import rs from '../assets/ExhibitA/RS.png';

export default function ExhibitA() {
  const [openIndex, setOpenIndex] = useState(null);

  const images = [
  { src: aerial, alt: 'Aerial Shot of The Beatles', caption: 'Lorem Ipsum' },
  { src: rs, alt: 'Ringo Starr', caption: 'Lorem Ipsum'},
  { src: jl, alt: 'John Lennon', caption: 'Lorem Ipsum'},
  { src: frontShot, alt: 'Front Shot of The Beatles', caption: 'Lorem Ipsum'},
  { src: gh, alt: 'George HArrison', caption: 'Lorem Ipsum' },
  { src: pmc, alt: 'Paul McCarntney', caption: 'Lorem Ipsum'}
  ];


return (
  <>
    <h1>The Beatles</h1>
    <br/>
    <div className='center'> {images.map((image, index) => (
        <div className={styles.galleryContainer}
        key={index}
        onClick={() => setOpenIndex(openIndex === index ? null : index)}>
      <img
        src={image.src}
        alt={image.alt}
        className={`${styles.imgA} img-fluid rounded`}
      />
      <Collapse in={openIndex === index}>
        <div className="caption-box mt-2">
          {image.caption}
        </div>
      </Collapse>
    </div>
    ))}
    </div>
    <button className="btn" onClick={() => window.location.href = '/'}>
    Back To Homepage!
    </button>


  </>
);
}