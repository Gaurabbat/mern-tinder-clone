import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import axios from "../../config/axios";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    async function getData() {
      const request = await axios.get("http://localhost:5000/cards");
      setPeople(request.data);
    }
    getData();
  }, []);

  console.log(people);
  const swiped = (direction, name) => {
    console.log(direction);
  };

  const outOfFrame = (name) => {
    console.log(name);
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(direction) => swiped(direction, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.imgUrl})` }}
            >
              <div>
              <h3>{person.name}</h3>
              {/* <p>{person.bio}</p> */}
              </div>
             
            </div>
            
          </TinderCard>
        ))}
      </div>
    </div>
  );
}
export default TinderCards;
