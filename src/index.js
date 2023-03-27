$(document).ready(function () {
  const mobileMenuIcon = $("#mobile-menu-button");
  mobileMenuIcon.on("click", function () {
    $(this).toggleClass("open");
  });
});
