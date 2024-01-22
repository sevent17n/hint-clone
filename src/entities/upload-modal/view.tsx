"use client";
import { FC, useState, useRef } from "react";
import { UploadModalProps } from "./types";
import { Modal } from "@/shared/componets/modal";
import { CameraModal } from "../camera-modal";
import { ErrorModal } from "../error-modal";
import { scanPhoto } from "./model";
import styles from "./styles.module.scss";
import Ic_Photo from "@/assets/icons/ic_photo.svg";
import Ic_Folder from "@/assets/icons/ic_folder.svg";
import Image from "next/image";

export const UploadModal: FC<UploadModalProps> = ({ open, onClose }) => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChooseFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleTakePhotoClick = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(() => {
        onClose();
        setIsCameraOpen(true);
      })
      .catch(() => {
        onClose();
        setIsErrorModalOpen(true);
      });
  };

  const handleFileInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      try {
        await scanPhoto(selectedFile);
      } catch (e) {
        onClose();
        setIsErrorModalOpen(true);
      }
    }
  };

  const handlePhotoSelect = async (photo: File) => {
    setIsCameraOpen(false);
    try {
      await scanPhoto(photo);
    } catch (e) {
      onClose();
      setIsErrorModalOpen(true);
    }
  };

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        position="bottom"
        style={{ borderRadius: 8 }}
      >
        <div className={styles.container}>
          <button onClick={handleTakePhotoClick} className={styles.button}>
            Take Photo{" "}
            <span>
              <Image src={Ic_Photo} alt={"Take Photo"} draggable={false} />
            </span>
          </button>
          <div className={styles.divider} />
          <button onClick={handleChooseFileClick} className={styles.button}>
            Choose File{" "}
            <span>
              <Image src={Ic_Folder} alt={"Choose File"} draggable={false} />
            </span>
          </button>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileInputChange}
            style={{ display: "none" }}
          />
        </div>
      </Modal>
      <CameraModal
        handlePhotoSelect={handlePhotoSelect}
        open={isCameraOpen}
        onClose={() => setIsCameraOpen(false)}
      />
      <ErrorModal
        open={isErrorModalOpen}
        onClose={() => setIsErrorModalOpen(false)}
      />
    </>
  );
};
