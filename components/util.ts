"use client";

export const onKeyPress = (e: any) => {
  if (e.key === "a") {
    const elm = document.getElementById("requestAccessModal");
    elm!.style.display = "flex";
  }
};
