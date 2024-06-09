const routes = {
  "/about" : "../pages/about.html",
  "/contato" : "../pages/contato.html",
  "/" : "../pages/home.html",
  404 : "../pages/404.html"
} 

function route(event){
  event = event || window.event
  event.preventDefault()

  window.history.pushState({}, "", event.target.href)

  handle()
}

function handle() {
  const {pathname} = window.location
  const route = routes[pathname] || routes[404]

  fetch(route)
    .then(data => data.text())
    .then(html => {
      const div = document.querySelector("#app")
      div.innerHTML = html
    })
}

handle()

window.onpopstate = () => handle() ///Usar o voltar e avançar
window.route = () => route()