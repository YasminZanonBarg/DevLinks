function toggleMode() {
  const html = document.documentElement
  // 1. alternando as classes
  html.classList.toggle("light")

  // 2. alternando as imagem e descrição (alt)
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos de sol e camisa preta, barba e fundo azul."
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos de grau e camisa preta, barba e fundo azul."
    )
  }
}
