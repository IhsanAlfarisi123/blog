function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const navbar = document.getElementById("navbar");

    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-200px";
        navbar.style.opacity = "1";
    } else {
        sidebar.style.left = "0";
        navbar.style.opacity = "0";
    }
}


