function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const isVisible = sidebar.style.left === "0px";

  sidebar.style.left = isVisible ? "-300px" : "0px";

  if (!isVisible)
    document.addEventListener("click", closeSidebarOnClickOutside);
}

function closeSidebarOnClickOutside(event) {
  const sidebar = document.getElementById("sidebar");
  const menuBtn = document.querySelector(".menu");

  if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
    sidebar.style.left = "-300px";
    document.removeEventListener("click", closeSidebarOnClickOutside);
  }
}

function handleResize() {
  const sidebar = document.getElementById("sidebar");

  if (window.innerWidth > 768) sidebar.style.left = "-300px";
}

window.addEventListener("resize", handleResize);
