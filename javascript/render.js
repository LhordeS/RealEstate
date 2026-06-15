export function renderProperties (properties){
  const container = document.getElementById("list");

  // clear existing content
  container.innerHTML = "";

  properties.forEach(p => {
    const el = document.createElement("div");

    el.innerHTML = `
      <h3>${p.address}</h3>
      <p>Price: ¥${p.price.toLocaleString()}</p>
      <p>Yield: ${p.yield}%</p>
      <p>Size: ${p.size} sqm</p>
    `;

    container.appendChild(el);
  });
}
