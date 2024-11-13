import { useEffect, useState } from "react";

interface Iresult {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export default function Soal3() {
  /**
   * ? 1. hilangkan semua error dan deskripsikan apa penyebab error.
   * 1. api awalnya mengirimkan search.id, harusnya search saja
   * 2. result tidak memiliki object name
   * 3. results bukan array, jadi harus diganti cara rendernya bukan dengan map
   * ? 2. tampilkan data yang di panggil dari api tersebut...
   */

  return <SeachComponent />;
}

function SeachComponent() {
  const [search, setSearch] = useState<string>("");
  const [result, setResult] = useState<Iresult | null>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${search}`
      );
      const data = await response.json();
      setResult(data);
    }

    if (search) fetchData();
  }, [search]);
  console.log({ result });
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />
      {result && (
        <ul
          style={{
            backgroundColor: "white",
            marginTop: 20,
            borderRadius: 8,
            width: "40%",
          }}
        >
          <li>{result.title}</li>
          <li>
            <a href={result.url}></a>
            {result.url}
          </li>
          <li>
            <img src={result.thumbnailUrl} />
          </li>
        </ul>
      )}
    </div>
  );
}
