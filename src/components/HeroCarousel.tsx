"use client";
import React, { useState, useEffect } from "react";

const images = [
  {
    src: "/carousel1.jpg",
    alt: "Equipo de CIDSIA colaborando en un proyecto de IA",
    caption: "Innovación y tecnología para tu empresa",
  },
  {
    src: "/carousel2.jpg",
    alt: "Desarrolladores trabajando en software a medida",
    caption: "Soluciones de software a medida",
  },
  {
    src: "/carousel3.jpg",
    alt: "Reunión creativa del equipo CIDSIA",
    caption: "Transforma tu negocio con inteligencia artificial",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {images.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            opacity: i === index ? 1 : 0,
            transition: "opacity 1s cubic-bezier(0.23,1,0.32,1)",
            zIndex: 1,
          }}
        />
      ))}
      <div
        style={{
          position: "absolute",
          bottom: 80,
          left: 0,
          width: "100%",
          textAlign: "center",
          zIndex: 2,
        }}
      >
        <h1
          style={{
            color: "#FFD27A",
            fontSize: "2.5rem",
            textShadow: "0 2px 16px #1A1A1A, 0 0 8px #2C2C2C",
            margin: 0,
            fontWeight: 800,
            letterSpacing: 1,
            animation: "fadeInUp 1s both",
          }}
        >
          {images[index].caption}
        </h1>
      </div>
  {/* Eliminados los botones de navegación del carousel */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(180deg,rgba(44,44,44,0.5) 0%,rgba(44,44,44,0.2) 60%,rgba(44,44,44,0.7) 100%)",
        zIndex: 1,
        pointerEvents: "none"
      }} />
    </section>
  );
}
