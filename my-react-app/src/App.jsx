import React, { useEffect, useState } from "react";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://xcountries-backend.labs.crio.do/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching countries:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Loading...</h2>;
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "20px" }}>
      <h1>🌍 Country Flags</h1>
      <div style={{
        display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", marginTop: "30px"
      }}>
        {countries.map((country) => (
          <div key={country.name} style={{
            width: "150px", border: "1px solid #ddd", borderRadius: "10px", padding: "10px",
            backgroundColor: "#fff", boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"
          }}>
            <img src={country.flag} alt={country.name} style={{
              width: "100%", height: "100px", objectFit: "cover", borderRadius: "6px"
            }} />
            <h3>{country.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
