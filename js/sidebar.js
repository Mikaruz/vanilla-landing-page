const sidebar = document.getElementById("sidebar-hidden");
const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", () => {
  sidebar.classList = "sidebar-visible";
});

document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
    sidebar.classList = "sidebar-hidden";
  }
});

function updateSidebarClass() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (isMobile) {
    sidebar.classList = "sidebar-visible";
  } else {
    sidebar.classList = "sidebar-hidden";
  }
}

updateSidebarClass();

window.addEventListener("resize", updateSidebarClass);
