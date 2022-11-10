let primeiraA = document.querySelector("#a1")
let primeiraB = document.querySelector("#b1")
let primeiraC = document.querySelector("#c1")

let segundaA = document.querySelector("#a2")
let segundaB = document.querySelector("#b2")
let segundaC = document.querySelector("#c2")

let terceiraA = document.querySelector("#a3")
let terceiraB = document.querySelector("#b3")
let terceiraC = document.querySelector("#c3")

primeiraA.addEventListener("click", function() {
    primeiraA.style.background = "rgba(255, 0, 0, 0.4)"
    primeiraB.style.background = "rgba(0, 255, 21, 0.4)"
    primeiraC.style.background = "rgba(255, 0, 0, 0.4)"
})
primeiraB.addEventListener("click", function() {
    primeiraA.style.background = "rgba(255, 0, 0, 0.4)"
    primeiraB.style.background = "rgba(0, 255, 21, 0.4)"
    primeiraC.style.background = "rgba(255, 0, 0, 0.4)"
})
primeiraC.addEventListener("click", function() {
    primeiraA.style.background = "rgba(255, 0, 0, 0.4)"
    primeiraB.style.background = "rgba(0, 255, 21, 0.4)"
    primeiraC.style.background = "rgba(255, 0, 0, 0.4)"
})



segundaA.addEventListener("click", function() {
    segundaA.style.background = "rgba(0, 255, 21, 0.4)"
    segundaB.style.background = "rgba(255, 0, 0, 0.4)"
    segundaC.style.background = "rgba(255, 0, 0, 0.4)"
})
segundaB.addEventListener("click", function() {
    segundaA.style.background = "rgba(0, 255, 21, 0.4)"
    segundaB.style.background = "rgba(255, 0, 0, 0.4)"
    segundaC.style.background = "rgba(255, 0, 0, 0.4)"
})
segundaC.addEventListener("click", function() {
    segundaA.style.background = "rgba(0, 255, 21, 0.4)"
    segundaB.style.background = "rgba(255, 0, 0, 0.4)"
    segundaC.style.background = "rgba(255, 0, 0, 0.4)"
})



terceiraA.addEventListener("click", function() {
    terceiraA.style.background = "rgba(255, 0, 0, 0.4)"
    terceiraB.style.background = "rgba(255, 0, 0, 0.4)"
    terceiraC.style.background = "rgba(0, 255, 21, 0.4)"
})
terceiraB.addEventListener("click", function() {
    terceiraA.style.background = "rgba(255, 0, 0, 0.4)"
    terceiraB.style.background = "rgba(255, 0, 0, 0.4)"
    terceiraC.style.background = "rgba(0, 255, 21, 0.4)"
})
terceiraC.addEventListener("click", function() {
    terceiraA.style.background = "rgba(255, 0, 0, 0.4)"
    terceiraB.style.background = "rgba(255, 0, 0, 0.4)"
    terceiraC.style.background = "rgba(0, 255, 21, 0.4)"
})