import { Hand } from "@tensorflow-models/hand-pose-detection";

export interface IScanResultContext {
  hand: Hand | null;
  setHand: (newType: Hand) => void;

  image: Blob | null;
  setImage: (photo: Blob) => void;
}
