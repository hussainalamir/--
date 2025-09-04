const cityMap = document.getElementById("cityMap");

let isDragging = false;
let startX, startY;
let offsetX = 0, offsetY = 0;

// بدء السحب
cityMap.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX + offsetX;
  startY = e.clientY + offsetY;
  cityMap.style.cursor = "grabbing";
});

// أثناء السحب
document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  offsetX = startX - e.clientX;
  offsetY = startY - e.clientY;

  // حدود الماب الكبير
  offsetX = Math.max(0, Math.min(100000 - 650, offsetX));
  offsetY = Math.max(0, Math.min(100000 - 650, offsetY));

  cityMap.style.transform = `translate(${-offsetX}px, ${-offsetY}px)`;
});

// انتهاء السحب
document.addEventListener("mouseup", () => {
  isDragging = false;
  cityMap.style.cursor = "grab";
});




//ston and push

const push_class = "push"
  const push_count = 500;
const ston_class = "ston"
  const ston_count = 500;

function start(){
    create_random_Elements(push_class, push_count)
    create_random_Elements(ston_class , ston_count)
}



function create_random_Elements(classname , elementcount) {
    for ( let count = 0; count <elementcount; count++) {
        const newElement = document.createElement("div");
        newElement.classListadd(classname);
        newElement.style.left = Math.random() * 100 + "%"
         newElement.style.top = Math.random() * 100 + "%"
        document.cityMap.appendChild(newElement);
    }
    
}

start()
