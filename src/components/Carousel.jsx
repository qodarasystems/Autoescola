// Carousel.jsx
import React, { useState, useEffect } from "react"


const images = [
  "/hero1.png",
  "/hero2.png",
  "/hero3.png"
]

function Carousel() {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <div className="carousel" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Slide ${i + 1}`}
          className={`carousel-image ${i === index ? "active" : "inactive"}`}
          onClick={() => setIndex(i)}
        />
      ))}
      <div className="carousel-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? "active-dot" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
