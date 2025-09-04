// البيانات الأولية للمدن
const cities = [
  { id: "city1", name: "Orcville", owner: "player", x: 100, y: 200 },
  { id: "city2", name: "HumanTown", owner: "enemy", x: 400, y: 350 }
];

// البيانات الأولية للجيوش
const armies = [
  { id: "army1", owner: "player", x: 120, y: 220, type: "infantry" },
  { id: "enemyArmy1", owner: "enemy", x: 420, y: 370, type: "cavalry" }
];

// إعداد Canvas
const canvas = document.getElementById("mapCanvas");
const ctx = canvas.getContext("2d");

// رسم الخريطة والمدن والجيوش
function drawMap() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // رسم المدن
  cities.forEach(city => {
    ctx.fillStyle = city.owner === "player" ? "green" : "red";
    ctx.beginPath();
    ctx.arc(city.x, city.y, 15, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  });

  // رسم الجيوش
  armies.forEach(army => {
    ctx.fillStyle = army.owner === "player" ? "darkgreen" : "darkred";
    ctx.fillRect(army.x - 5, army.y - 5, 10, 10);
  });
}

// إظهار معلومات عند المرور على المدن أو الجيوش
canvas.addEventListener("mousemove", function(event) {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  let infoText = "Hover over a city or army to see details.";

  cities.forEach(city => {
    const dx = mouseX - city.x;
    const dy = mouseY - city.y;
    if (Math.sqrt(dx*dx + dy*dy) < 15) {
      infoText = `City: ${city.name}\nOwner: ${city.owner}`;
    }
  });

  armies.forEach(army => {
    if (mouseX > army.x - 5 && mouseX < army.x + 5 && mouseY > army.y - 5 && mouseY < army.y + 5) {
      infoText = `Army: ${army.id}\nOwner: ${army.owner}\nType: ${army.type}`;
    }
  });

  document.getElementById("infoText").innerText = infoText;
});

// رسم الخريطة أول مرة
drawMap();
