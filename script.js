document.getElementById("storyForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    detective: document.getElementById("detective").value.trim(),
    suspect: document.getElementById("suspect").value.trim(),
    crime: document.getElementById("crime").value,
    location: document.getElementById("location").value,
  };

  localStorage.setItem("mysteryData", JSON.stringify(data));
  window.location = "story.html";
});
