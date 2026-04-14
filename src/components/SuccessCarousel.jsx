import React, { useState, useEffect } from "react";

const data = [
  {
    name: "Ananya Sharma",
    role: "Frontend Developer at Google",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul Verma",
    role: "Backend Developer at Amazon",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Singh",
    role: "UI Designer at Adobe",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Amit Kumar",
    role: "ML Engineer at Meta",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Sneha Reddy",
    role: "Cloud Engineer at Oracle",
    img: "https://randomuser.me/api/portraits/women/25.jpg",
  },
];

function SuccessCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const person = data[index];

  return (
    <div className="carousel">
      <h2>🎉 Success Stories</h2>

      <div className="carousel-card">
        <img src={person.img} alt={person.name} />
        <h3>{person.name}</h3>
        <p>{person.role}</p>
      </div>
    </div>
  );
}

export default SuccessCarousel;