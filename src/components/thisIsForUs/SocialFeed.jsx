import React, { useState } from "react";
import CollaborationLightBox from "./CollaborationLightBox";
import styles from "./thisus.module.css";

const SocialFeed = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const imageArray = [
    "assets/photos/umt1.jpeg",
    "assets/photos/umt2.jpeg",
    "assets/photos/umt3.jpeg",
  ];
  const openLightbox = (image) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };
  return (
    <React.Fragment>
      <div className={styles.socialFeed__container} data-aos="fade-up">
        <h1>Our Collaborations</h1>
        <div className={styles.socialFeed__headings}>
          <img src="assets/photos/umt.png" alt="umt" width={150} />
          <span>Come see what were up to</span>
        </div>
        <div>
          ZNZ Technologies has successfully visited UMT for our IT Talent Hunt,
          creating exciting opportunities for talented students
        </div>
        <div className={`image-list ${styles.imageGalleryBox}`}>
          {imageArray.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`No ${index + 1}`}
              onClick={() => openLightbox(image)}
              className="clickable-image"
              width={250}
            />
          ))}
        </div>
        <CollaborationLightBox
          show={lightboxOpen}
          onHide={closeLightbox}
          image={currentImage}
        />
      </div>
    </React.Fragment>
  );
};

export default SocialFeed;
