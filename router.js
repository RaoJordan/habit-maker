// IMPLEMENTING ROUTING 
const route = (e) => {
    e = e || window.e;
    e.preventDefault();
    window.history.pushState({}, "", e.target.href);
    handleLocation();
}

const routes = {
    404 : "/404.html",
    "/" : "/index.html",
    "/allReport" : "/cardInfo.html" 
}

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    try {
        const data = await fetch(route);
        const html = await data.text();
        document.getElementById("container").innerHTML = html;
    } catch (error) {
        console.error("Error fetching route:", error);
    }   
}


window.onpopstate = (event) => {
    handleLocation(event);
};
window.route = route;
handleLocation();