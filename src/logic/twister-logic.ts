/* eslint-disable @typescript-eslint/no-unused-vars */

function* generateRotation(spins: number) {
  let degrees = spins * 360;
  while (degrees < 2) {
    yield degrees;
    degrees++;
  }
}

export const TWISTER_LIMBS = [
  "Left Foot",
  "Right Foot",
  "Left Hand",
  "Right Hand",
];

export const TWISTER_COLORS = ["red", "blue", "green", "yellow"];

export const Tailwind_Background = {
  red: "bg-red-500",
  blue: "bg-blue-600",
  green: "bg-green-600",
  yellow: "bg-yellow-500",
};
