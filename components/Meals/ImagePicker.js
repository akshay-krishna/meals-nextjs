"use client";
import { useRef, useState } from "react";
import styles from "./imagePicker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState();
  const imageRef = useRef();
  const handlePick = () => {
    imageRef.current.click();
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };
  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage ? (
            <p>No Image picked yet.</p>
          ) : (
            <Image src={pickedImage} alt="Picked image" fill />
          )}
        </div>
        <input
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageRef}
          onChange={handleImageChange}
          required
        />
        <button className={styles.button} onClick={handlePick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
