"use client";
import { FC, useState, useRef } from "react";
import { ScanPalmProps } from "./types";
import { Modal } from "@/shared/componets/modal";
import { CameraModal } from "../../entities/camera-modal";
import { ErrorModal } from "../../entities/error-modal";
import { imageService } from "./model";
import styles from "./styles.module.scss";
import Ic_Photo from "@/assets/icons/ic_photo.svg";
import Ic_Folder from "@/assets/icons/ic_folder.svg";
import NextImage from "next/image";
import { useScanResult } from "@/shared/context/scan-result-context";
import { useRouter } from "next/navigation";
import { SCAN_RESULT_ROUTE } from "@/config/routes/lib";

export const ScanPalm: FC<ScanPalmProps> = ({ open, onClose }) => {
  const { setHand, setImage } = useScanResult();
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

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
        const imageElement = await fileToImageElement(selectedFile);
        const hands = await imageService.scanPhoto(imageElement);

        if (hands && hands[0]) {
          setHand(hands[0]);
          setImage(selectedFile);
          router.push(SCAN_RESULT_ROUTE);
        }
      } catch (e) {
        onClose();
        setIsErrorModalOpen(true);
      }
    }
  };

  const handlePhotoSelect = async (photo: File) => {
    setIsCameraOpen(false);

    try {
      const imageElement = await fileToImageElement(photo);

      const hands = await imageService.scanPhoto(imageElement);

      if (hands && hands[0]) {
        setHand(hands[0]);
        setImage(photo);
        router.push(SCAN_RESULT_ROUTE);
      }
    } catch (e) {
      onClose();
      setIsErrorModalOpen(true);
    }
  };

  const fileToImageElement = (file: File): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        if (event.target) {
          const imageElement = new Image();
          imageElement.src = event.target.result as string;
          imageElement.onload = () => resolve(imageElement);
        } else {
          reject(new Error("Failed to read the file."));
        }
      };

      reader.readAsDataURL(file);
    });
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
              <NextImage src={Ic_Photo} alt={"Take Photo"} draggable={false} />
            </span>
          </button>
          <div className={styles.divider} />
          <button onClick={handleChooseFileClick} className={styles.button}>
            Choose File{" "}
            <span>
              <NextImage
                src={Ic_Folder}
                alt={"Choose File"}
                draggable={false}
              />
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
