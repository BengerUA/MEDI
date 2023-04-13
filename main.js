  var image = document.getElementById("inno__certificate");
  image.addEventListener("click", function() {
    var newScale = image.style.transform === "scale(1)" ? "scale(2)" : "scale(1)";
    image.style.transform = newScale;
  });