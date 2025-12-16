import styles from './ExhibitC.module.css';

import { Card, Image, Container, Row, Col } from 'react-bootstrap';

import Spr25_1 from '../assets/ExhibitC/JSR-96.jpg';
import Spr25_2 from '../assets/ExhibitC/JSR-97.jpg';
import Fl23_1 from '../assets/ExhibitC/Z9B_0296-2.jpg';
import Fl23_2 from '../assets/ExhibitC/Z9B_0315.jpg';
import Fl23_3 from '../assets/ExhibitC/Z9B_0331.jpg';
import Fl23_4 from '../assets/ExhibitC/Z9B_0359-2.jpg';
import Fl23_5 from '../assets/ExhibitC/ZRB_0263.jpg';

export default function ExhibitC(){

    const images = [
        { src: Spr25_1, alt: 'Lorem Ipsum', caption: 'Lorem Ipsum' },
        { src: Spr25_2, alt: 'Lorem Ipsum', caption: 'Lorem Ipsum'},
        { src: Fl23_3, alt: 'Lorem Ipsum', caption: 'Lorem Ipsum' },
        { src: Fl23_2, alt: 'Lorem Ipsum', caption: 'Lorem Ipsum'},
        { src: Fl23_1, alt: 'Lorem Ipsum', caption: 'Lorem Ipsum'},

        { src: Fl23_4, alt: 'Lorem Ipsum', caption: 'Lorem Ipsum' },
        { src: Fl23_5, alt: 'Lorem Ipsum', caption: 'Lorem Ipsum'}
        ];
    return(
        <>
        <h1>Cody Woo-Rodriguez</h1>
        <br />


        <div className={styles.galleryContainer}>
        {images.map((image, index) => (
          <div key={index} className={styles.galleryItem}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      <button className="btn" onClick={() => window.location.href = '/'}>
    Back To Homepage!
    </button>


      </>
    );
}