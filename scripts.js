// Lista de imágenes (ejemplos). Reemplaza con URLs de Unsplash/Pexels si quieres.
const images = [
  "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1504376379680-94b1a3b3c6f7?auto=format&fit=crop&w=800&q=60"
];

const imgEl = document.getElementById("mainImage");
const changeBtn = document.getElementById("changeBtn");
const partyBtn = document.getElementById("partyBtn");
const sound = document.getElementById("celebrationSound");

changeBtn.addEventListener("click", () => {
  const next = images[Math.floor(Math.random()*images.length)];
  imgEl.src = next;
});

partyBtn.addEventListener("click", () => {
  // simple confetti effect using emojis
  for(let i=0;i<25;i++){
    const span = document.createElement("span");
    span.textContent = ["🎉","✨","🎈","💫"][Math.floor(Math.random()*4)];
    span.style.position="fixed";
    span.style.left = Math.random()*100 + "%";
    span.style.top = (Math.random()*40 + 10) + "%";
    span.style.fontSize = (12 + Math.random()*28) + "px";
    span.style.opacity = "0.95";
    document.body.appendChild(span);
    setTimeout(()=> span.remove(), 2500);
  }
  if(sound) sound.play().catch(()=>{});
});
