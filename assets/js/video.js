(function () {
  // sakrivanje i dodavanje videa
  var w =
    document.documentElement.clientWidth ||
    document.body.clientWidth ||
    window.innerWidth;
  var targetWidth = 768;
  if (w >= targetWidth) {
    document.getElementById("video2").innerHTML =
      '<source src="assets/img/video/v-hero-desk.m4v" type="video/mp4">';
    console.log("desk");
  } else {
    document.getElementById("video1").innerHTML =
      '<source src="assets/img/video/v-hero-mob.m4v" type="video/mp4">';
    console.log("mob");
  }

  // kraj
})();

window.onload = function () {
  w =
    document.documentElement.clientWidth ||
    document.body.clientWidth ||
    window.innerWidth;
  var targetWidth = 768;
  if (w >= targetWidth) {
    document.getElementById("video1").innerHTML =
      '<source src="assets/img/video/v-hero-mob.m4v" type="video/mp4">';
    console.log("mob 1");
  } else {
    document.getElementById("video2").innerHTML =
      '<source src="assets/img/video/v-hero-desk.m4v" type="video/mp4">';
    console.log("desk 1");
  }

  document.getElementById("iframe-container").innerHTML =
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/TUHvWRltT7A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  console.log("yt done");
};
