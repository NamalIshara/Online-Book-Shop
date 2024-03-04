const currentUrl = window.location

if (currentUrl.href.includes("index.html")) {
    document.getElementById("index").classList.add("active")
} else if (currentUrl.href.includes("comments")) {
    document.getElementById("comments").classList.add("active")
} else if (currentUrl.href.includes("shop")) {
    document.getElementById("shop").classList.add("active")
} else if (currentUrl.href.includes("quiz")) {
    document.getElementById("quiz").classList.add("active")
} else if (currentUrl.href.includes("siteMap")) {
    document.getElementById("siteMap").classList.add("active")
} else if (currentUrl.href.includes("about")) {
    document.getElementById("about").classList.add("active")
}