export function generateProperties(count = 100) {
  const areas = ["shibuya", "Shunjuku", "meguro", "Ikebukuro", "Shinagawa", "Nakano", "Ginza", "Ueno"];

  const properties = [];

  for (let i = 1; i <= count; i++) {
    const area = areas[Math.floor(Math.random() * areas.length)];

    properties.push({
      id: i,
      address: `${area}, Tokyo`,
      price: Math.floor(30000000 + Math.random() * 70000000),
      yield: (3 + Math.random() * 3).toFixed(1),
      size: Math.floor(25 + Math.random() * 40),
      yearBuilt: Math.floor(1995 + Math.random() * 25)
    });
  }

  return properties;
}
