"use client";

import { ChangeEvent, useRef, useState } from "react";
import styles from "./image-picker.module.css";
import Image from "next/image";

type TypeProps = {
  name: string;
  label: string;
};

export default function ImagePicker({ label, name }: TypeProps) {
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handlePickImage = () => {
    imageInputRef.current?.click();
  };

  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined,
  );

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];
    if (!file) {
      return setSelectedImage(undefined);
    }

    const fileReader = new FileReader();
    fileReader.onprogress = () => console.log("Hello");
    fileReader.onload = () => {
      if (typeof fileReader.result === "string") {
        setSelectedImage(fileReader.result);
      }
    };
    fileReader.readAsDataURL(file);
  };
  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <input
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          className={styles.input}
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />
        <button
          className={styles.button}
          type="button"
          onClick={handlePickImage}
        >
          Pick an Image
        </button>

        <div className={styles.preview}>
          {!selectedImage && <p>No Image Picked Yet</p>}
          {selectedImage && (
            <Image src={selectedImage} fill alt="image selected by user" />
          )}
        </div>
      </div>
    </div>
  );
}
