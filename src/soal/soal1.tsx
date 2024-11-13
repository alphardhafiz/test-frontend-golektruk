import React, { useRef, useState } from "react";

const Soal1: React.FC = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const box = boxRef.current;
    if (!box) return;

    // Calculate initial offsets
    const offsetX = e.clientX - box.getBoundingClientRect().left;
    const offsetY = e.clientY - box.getBoundingClientRect().top;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      // Calculate new position
      const newX = moveEvent.clientX - offsetX;
      const newY = moveEvent.clientY - offsetY;
      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <>
      <div
        ref={boxRef}
        onMouseDown={handleMouseDown}
        style={{
          backgroundColor: "#fff",
          width: 40,
          height: 40,
          borderRadius: "8px",
          position: "absolute",
          left: `${position.x}px`,
          top: `${position.y}px`,
          cursor: "grab",
        }}
      ></div>

      {/* Ekspektasi hasil */}
      <iframe
        src="/soal1.mp4"
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          border: "1px solid white",
        }}
      ></iframe>
    </>
  );
};

export default Soal1;
