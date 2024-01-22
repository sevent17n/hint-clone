"use client";

import * as handPoseDetection from "@tensorflow-models/hand-pose-detection";
import "@tensorflow/tfjs-backend-webgl";
import { DetectorInput } from "@tensorflow-models/hand-pose-detection/dist/shared/calculators/interfaces/common_interfaces";

class ImageService {
  public async scanPhoto(
    file: DetectorInput
  ): Promise<handPoseDetection.Hand[]> {
    try {
      const model = handPoseDetection.SupportedModels.MediaPipeHands;

      const detector = await handPoseDetection.createDetector(model, {
        runtime: "mediapipe",
        solutionPath: "https://cdn.jsdelivr.net/npm/@mediapipe/hands",
        modelType: "full",
      });

      const hands = await detector.estimateHands(file);

      if (hands?.length > 1) throw new Error("Fail");

      return hands;
    } catch (e) {
      console.error(e);
      throw new Error("Fail");
    }
  }
}
export const imageService = new ImageService();
