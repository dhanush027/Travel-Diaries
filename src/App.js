import React, { useState } from "react";
import "./styles.css";
const listValues = {
  Trekking: [
    { place: "⛰️ Himalayas", rating: "9.9/10" },
    { place: "🗻 Bali Pass", rating: "9.0/10" },
    { place: "🏕️ Roopkund", rating: "8.5/10" } //use ':' for sub goTolist in an object not '='
  ],
  Vacation: [
    { place: "🚣 Rio De Janerio", rating: "9.0/10" },
    { place: "🗼 Paris", rating: "9.5/10" },
    { place: "🤿 Maldives", rating: "8.5/10" } //use ':' for sub goTolist in an object not '='
  ],
  Worship: [
    { place: "🛕️ Kashi Vishwanath Temple", rating: "10/10" },
    { place: "📿 Lotus Temple", rating: "8.5/10" },
    { place: "🪔 Borobudur Temple", rating: "8.9/10" } //use ':' for sub goTolist in an object not '='
  ]
};
var listObj = Object.keys(listValues);
export default function App() {
  var [goTolist, setgoToList] = useState("Trekking");
  function onClickHandler(place) {
    setgoToList(place);
  }
  return (
    <div className="App">
      <div class="styling">
        <p style={{ fontSize: "30px" }}>
          <span style={{ fontSize: "30px" }}>🦸</span> Travel Shaktimaan&nbsp;
          <span style={{ fontSize: "30px" }}>🦸</span>
        </p>
        <div>&nbsp;Here is a list of great Goto Places!</div>
        {listObj.map((place) => (
          <button
            type="submit"
            onClick={() => onClickHandler(place)}
            style={{
              margin: "0.8rem",
              padding: "0.7rem 1rem",
              border: "0.5px solid #3B82F6",
              borderRadius: "2rem"
            }}
          >
            {place}
          </button>
        ))}
        <hr />

        {listValues[goTolist].map((value) => (
          <div
            style={{
              width: "85%",
              border: "1px solid #3B82F6",
              padding: "0.5rem",
              borderRadius: "1rem",
              margin: "0.5rem 0rem"
            }}
          >
            <div style={{ fontSize: "20px" }}>{value.place}</div>
            <div style={{ fontSize: "18px" }}>{value.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
