import { useEffect, useRef, useState } from "react";

interface Idata {
  id: number;
  country: string;
}
const data: Idata[] = [
  { id: 1, country: "United States" },
  { id: 2, country: "Canada" },
  { id: 3, country: "Mexico" },
  { id: 4, country: "Brazil" },
  { id: 5, country: "Argentina" },
  { id: 6, country: "United Kingdom" },
  { id: 7, country: "France" },
  { id: 8, country: "Germany" },
  { id: 9, country: "Italy" },
  { id: 10, country: "Spain" },
  { id: 11, country: "Russia" },
  { id: 12, country: "China" },
  { id: 13, country: "Japan" },
  { id: 14, country: "South Korea" },
  { id: 15, country: "India" },
  { id: 16, country: "Australia" },
  { id: 17, country: "South Africa" },
  { id: 18, country: "Egypt" },
  { id: 19, country: "Nigeria" },
  { id: 20, country: "Kenya" },
];

function Soal2() {
  const [hoverId, setHoverId] = useState<number | null>(null);
  const [showBox, setShowBox] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  console.log(data);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowBox(false); 
      }
    };

    
    document.addEventListener("mousedown", handleClickOutside);

    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "100px",
        position: "relative",
      }}
    >
      <div ref={containerRef} style={{ position: 'relative' }}>
        <p
          style={{
            fontSize: "18px",
            color: "white",
          }}
        >
          value:
        </p>

        <div>
          <input
            type="text"
            onClick={() => setShowBox(true)}
            placeholder="Select"
            value={value}
            style={{
              backgroundColor: "white",
              padding: "8px",
              borderRadius: "8px",
            }}
          />
        </div>
      {value && (
        <div onClick={() => setValue('')} style={{ position: "absolute", top: "35px", right: '10px', cursor: 'pointer' }}>
          X
        </div>
      )}
      {showBox && (
        <div
          ref={dropdownRef}
          style={{
            position: "absolute",
            top: "70px",
            display: "flex",
            width: "208px",
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius: "8px",
          }}
        >
          {data.map((d: Idata, index: number) => (
            <div
              key={d.id}
              onMouseEnter={() => setHoverId(d.id)}
              onMouseLeave={() => setHoverId(null)}
              onClick={() => {
                setValue(d.country);
                setShowBox(false);
              }}
              style={{
                backgroundColor: hoverId === d.id ? "#777" : "",
                cursor: "pointer",
                padding: "0 8px",
                paddingTop: `${index === 0 ? "8px" : ""}`,
                paddingBottom: `${data.length === index + 1 ? "8px" : ""}`,
                borderBottomLeftRadius: data.length === index + 1 ? "8px" : "",
                borderBottomRightRadius: data.length === index + 1 ? "8px" : "",
                borderTopRightRadius: index === 0 ? "8px" : "",
                borderTopLeftRadius: index === 0 ? "8px" : "",
              }}
            >
              {d.country}
            </div>
          ))}
        </div>
      )}
      </div>
      {/* Ekspektasi hasil */}
      <iframe
        src="/soal2.mp4"
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          border: "1px solid white",
        }}
      ></iframe>
    </div>
  );
}

export default Soal2;
