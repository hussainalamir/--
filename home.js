document.getElementById("startBtn").addEventListener("click", () => {
  alert("🎯 Starting a new game! You will soon enter the strategic map.");
});

document.getElementById("continueBtn").addEventListener("click", () => {
  const saved = localStorage.getItem('myGameSave');
  if(saved) {
    alert("💾 Game loaded! Resuming your progress...");
    // هنا لاحقاً سيتم استرجاع حالة اللعبة
  } else {
    alert("⚠️ No saved game found. Starting a new game instead.");
  }
});
