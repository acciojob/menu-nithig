import React, { useState } from "react";

const MENU_DATA = [
  {
    id: 1,
    title: "Buttermilk Pancakes",
    category: "breakfast",
    price: 15.99,
    img: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b", // pancakes
    desc: "Fluffy buttermilk pancakes with syrup and butter.",
  },
  {
    id: 2,
    title: "Diner Double",
    category: "lunch",
    price: 13.99,
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349", // burger
    desc: "Juicy double beef burger with cheese and fries.",
  },
  {
    id: 3,
    title: "Godzilla Milkshake",
    category: "shakes",
    price: 6.99,
    img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87", // milkshake
    desc: "Massive milkshake with whipped cream and chocolate.",
  },
  {
    id: 4,
    title: "Country Delight",
    category: "breakfast",
    price: 20.99,
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c", // eggs and toast
    desc: "Classic breakfast with eggs, toast, and bacon.",
  },
  {
    id: 5,
    title: "Egg Attack",
    category: "lunch",
    price: 22.99,
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092", // egg sandwich
    desc: "Grilled egg sandwich with avocado and veggies.",
  },
  {
    id: 6,
    title: "Oreo Dream",
    category: "shakes",
    price: 18.99,
    img: "https://images.unsplash.com/photo-1505250469679-203ad9ced0cb", // oreo shake
    desc: "Thick oreo milkshake topped with cookies and cream.",
  },
  {
    id: 7,
    title: "Bacon Overflow",
    category: "breakfast",
    price: 8.99,
    img: "https://images.unsplash.com/photo-1584270354949-1e446dc34c76", // bacon
    desc: "Crispy bacon with scrambled eggs and toast.",
  },
  {
    id: 8,
    title: "American Classic",
    category: "lunch",
    price: 12.99,
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349", // another burger
    desc: "Traditional American cheeseburger with fries.",
  },
  {
    id: 9,
    title: "Quarantine Buddy",
    category: "shakes",
    price: 16.99,
    img: "https://images.unsplash.com/photo-1612197529860-621f2e7fe9d6", // shake with donuts
    desc: "Loaded shake with donuts, whipped cream, and sprinkles.",
  },
];

const Menu = () => {
  const [list, setList] = useState(MENU_DATA);

  const onFilter = (category) => {
    if (category === "all") {
      setList(MENU_DATA);
    } else {
      const matches = MENU_DATA.filter((item) => item.category === category);
      setList(matches);
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Our Menu</h1>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
        <button onClick={() => onFilter("all")}>All</button>
        <button onClick={() => onFilter("breakfast")}>Breakfast</button>
        <button onClick={() => onFilter("lunch")}>Lunch</button>
        <button onClick={() => onFilter("shakes")}>Shakes</button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
        {list.map((item) => (
          <div
            key={item.id}
            data-test-id={`menu-item-${item.category}`}
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid #ccc",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <img src={item.img} alt={item.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <div style={{ padding: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", fontWeight: "bold" }}>
                <span>{item.title}</span>
                <span>${item.price}</span>
              </div>
              <p style={{ fontSize: "14px", color: "#555" }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
