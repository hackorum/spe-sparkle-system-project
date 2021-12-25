AFRAME.registerComponent("clickbox", {
  init: function () {
    let sparkles = document.querySelector(".sparkles");
    let el = this.el;
    el.addEventListener("click", function () {
      let visible = sparkles.getAttribute("visible");
      sparkles.setAttribute("visible", !visible);
    });
  },
});
