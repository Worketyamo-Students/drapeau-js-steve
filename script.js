// const colorBody=document.getElementById("color")
// colorBody.style.backgroundColor="pink"
// const h1=document.getElementById("title")
let pays=prompt("quel pays voulez vous le drapeau?")
const drapeau=document.getElementById("fondDrapeau")
const firstColor=document.getElementById("element1")
const secondColor=document.getElementById("element2")
const thirthColor=document.getElementById("element3")
const secondComponentColor=document.getElementById("element2_component")
drapeau.style.width="100vw"
drapeau.style.height="100vh"
drapeau.style.display="flex"
drapeau.style.margin="0"
drapeau.style.padding="0"
drapeau.style.alignItems = "center"
drapeau.style.justifyContent ="center"
drapeau.style.backgroundColor="white"
if(pays=="japon" || pays=="japan"){
    secondColor.style.backgroundColor="red"
    secondColor.style.width=" 600px"
    secondColor.style.height="600px"
    secondColor.style.borderRadius="50%"
}
else if(pays=="guinée" || pays=="guinea"){
    firstColor.style.backgroundColor="red"
    firstColor.style.flex="1"
    firstColor.style.height="100%"
    secondColor.style.backgroundColor="yellow"
    secondColor.style.flex="1"
    secondColor.style.height="100%"
    thirthColor.style.backgroundColor="green"
    thirthColor.style.flex="1"
    thirthColor.style.height="100%"
}
else if(pays=="cameroun" || pays=="cameroon"){
    firstColor.style.backgroundColor="green"
    firstColor.style.flex="1"
    firstColor.style.height="100%"
    secondColor.style.backgroundColor="red"
    secondColor.style.flex="1"
    secondColor.style.height="100%"
    secondColor.style.display="flex"
    secondColor.style.justifyContent="center"
    secondColor.style.alignItems="center"
    secondComponentColor.style.backgroundColor="yellow"
    secondComponentColor.style.width=" 500px"
    secondComponentColor.style.height="500px"
    secondComponentColor.style.clipPath="polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
    thirthColor.style.backgroundColor="yellow"
    thirthColor.style.flex="1"
    thirthColor.style.height="100%"
}
else if(pays=="senegal" || pays=="sénegal"){
    firstColor.style.backgroundColor="green"
    firstColor.style.flex="1"
    firstColor.style.height="100%"
    secondColor.style.backgroundColor="yellow"
    secondColor.style.flex="1"
    secondColor.style.height="100%"
    secondColor.style.display="flex"
    secondColor.style.justifyContent="center"
    secondColor.style.alignItems="center"
    secondComponentColor.style.backgroundColor="green"
    secondComponentColor.style.width=" 500px"
    secondComponentColor.style.height="500px"
    secondComponentColor.style.clipPath="polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
    thirthColor.style.backgroundColor="red"
    thirthColor.style.flex="1"
    thirthColor.style.height="100%"
}
else if (pays=="nigeria") {
    firstColor.style.backgroundColor="green"
    firstColor.style.flex="1"
    firstColor.style.height="100%"
    secondColor.style.backgroundColor="white"
    secondColor.style.flex="1"
    secondColor.style.height="100%"
    thirthColor.style.backgroundColor="green"
    thirthColor.style.flex="1"
    thirthColor.style.height="100%"

}