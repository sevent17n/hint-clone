export interface CameraModalProps {
  open: boolean;
  onClose: () => void;
  handlePhotoSelect: (photo: File) => void;
}
