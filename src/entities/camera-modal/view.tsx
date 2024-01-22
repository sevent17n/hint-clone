"use client";

import { Modal } from "@/shared/componets/modal";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { CameraModalProps } from "./types";
import Image from "next/image";
import Palm from "@/assets/icons/ic_palm_contour.svg";
import styles from "./styles.module.scss";

export const CameraModal: FC<CameraModalProps> = ({
  open,
  onClose,
  handlePhotoSelect,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }

      setStream(mediaStream);
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const takePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const context = canvas.getContext("2d");

      if (context) {
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

        canvas.toBlob((blob) => {
          if (blob) {
            const file = new File([blob], "photo.jpg", { type: "image/jpeg" });
            handlePhotoSelect(file);
          }
        }, "image/jpeg");
      }
    }
  };

  const stopCamera = () => {
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      setStream(null);
    }
  };

  useEffect(() => {
    if (open) {
      startCamera();
    } else {
      stopCamera();
    }
  }, [open]);

  return (
    <Modal
      position={"center"}
      open={open}
      onClose={() => {
        onClose();
        stopCamera();
      }}
      style={{ borderRadius: 30 }}
    >
      <div className={styles.container}>
        <Image
          src={Palm}
          alt="Palm"
          draggable={false}
          className={styles.palm}
        />
        <video ref={videoRef} autoPlay playsInline className={styles.video} />
        <button onClick={takePhoto} className={styles.button}>
          <div />
        </button>
      </div>
    </Modal>
  );
};
