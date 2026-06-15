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
    el.classList.add("property");

    container.appendChild(el);
  });
}

export function renderInsights(properties) {
  const container = document.getElementById("insights");

  if (!properties.length) {
    container.innerHTML = "<p>No results</p>";
    return;
  }

  const avgPrice = properties.reduce((sum, p) => sum + p.price, 0) / properties.length;

  const avgYield = properties.reduce((sum, p) => sum + Number(p.yield), 0) / properties.length;

  container.innerHTML = `
    <p>Results: ${properties.length}</p>
    <p>Avg Price: ¥${Math.round(avgPrice).toLocaleString()}</p>
    <p>Avg Yield: ${avgYield.toFixed(1)}%</p>
  `;
}
