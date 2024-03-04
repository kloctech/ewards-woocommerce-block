import React, { useEffect, useState } from "react";
export default function CouponsHandler() {
  const [cartValue, setCartValue] = useState("");
  const [storeUrl, setStoreUrl] = useState(window.location.origin);
  useEffect(() => {
    const fetchCartValue = () => {
      const cartValueElement = document.querySelector(".wc-block-components-totals-item__value");
      if (cartValueElement) {
        setCartValue(cartValueElement.textContent);
      }
    };
    const timerId = setTimeout(fetchCartValue, 1000);
    return () => clearTimeout(timerId);
  }, []);
  const containerStyle = {
    width: "100%",
    height: "95vh",
    border: "none",
  };
  const src = `https://cd1d-2401-4900-4bbe-de2b-b00b-3253-bfc3-9b2f.ngrok-free.app?cart=${encodeURIComponent(cartValue)}&storeUrl=${storeUrl}`;
  return <iframe src={src} style={containerStyle} title="External Content" />;
}