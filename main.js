var botonmostrar = document.getElementById("pais1")
var botonocultar = document.getElementById("regresar")

botonmostrar.addEventListener("click", mostrarmexico)
botonocultar.addEventListener("click", ocultar)

//Variables para mostrar el contenido 
var titulo, texto, fotomostrar

var pin = document.querySelector(".pin");
var plano = document.querySelector(".earth")
var titulo = document.querySelector("#nom-pais")
var texto = document.querySelector("p")
var fotomostrar = document.querySelector("img")
// FUNCION PARA OCULTAR EL CONTENIDO
function ocultar() {
    pin.style.top = "200px";
    pin.style.left = "260px";
    plano.animate(
        { transform: "translateX(0px)" },
        { duration: 3000, fill: "forwards" }
    )
    document.getElementById("campo").style.display = "none"
    document.getElementById("bandera").style.display = "none"

}

//FUNCION PARA MOSTRAR EL CONTENIDO DE MEXICO

function mostrarmexico() {

    pin.style.top = "170px";
    pin.style.left = "185px";

    titulo = document.querySelector("#nom-pais")
    titulo.innerHTML = "México"

    texto = document.querySelector("p")
    texto.innerHTML =  `Presidente: Andrés Manuel López Obrador.
    Platos típicos: Tacos al pastor, Mole poblano, Pozole.
    Lugares turísticos: Chichén Itzá, Ciudad de México, Cancún
    Producto Interno Bruto (PIB): 1.05 billones de dólares.`
    fotomostrar = document.querySelector("img")
    fotomostrar.setAttribute("src", "mexico.svg")

    document.getElementById("regresar").style.display ="block"
    document.getElementById("campo").style.display = "block"
    document.getElementById("bandera").style.display = "block"

}

//ELEMENTOS PARA MOSTRAR EL CONTENIDO DE BRASIL

botonmostrar = document.getElementById("pais2")

botonmostrar.addEventListener("click", mostrarbrasil)

function mostrarbrasil() {

    pin.style.top = "250px";
    pin.style.left = "350px";
    plano.animate(
        { transform: "translateX(0px)" },
        { duration: 3000, fill: "forwards" }
    )

    titulo.innerHTML = "Brasil"

    texto = document.querySelector("p")
    texto.innerHTML = `Presidente: Luiz Inácio Lula da Silva.
    Platos tipico: Feijoada, Acarajé, Pan de Queso.
    Lugares turísticos: Cristo Redentor, Cataratas del Iguazú, Pan de Azúcar.
    Producto interno bruto (PIB): 1.924.134 M$`

    fotomostrar.setAttribute("src", "brasil.png")


    document.getElementById("campo").style.display = "block"
    document.getElementById("bandera").style.display = "block"

}


//ELEMENTOS PARA MOSTRAR EL CONTENIDO DE ESPAÑA

botonmostrar = document.getElementById("pais3")

botonmostrar.addEventListener("click", mostraresp)

function mostraresp() {
    pin.style.top = "110px";
    pin.style.left = "60px";
    plano.animate(
        { transform: "translateX(-380px)" },
        { duration: 3000, fill: "forwards" }
    )
    titulo.innerHTML = "España"


    texto = document.querySelector("p")
    texto.innerHTML = `Presidente: Pedro Sánchez.
    Platos tipico: Las tapas, Paella, Tortilla de papa.
    Lugares turísticos: Isla de Tabarca, Formentera, Basílica de la Sagrada Família.
    Producto interno bruto (PIB): 1.400,52M$`
    fotomostrar = document.querySelector("img")

    fotomostrar.setAttribute("src", "espana.png")

    document.getElementById("campo").style.display = "block"
    document.getElementById("bandera").style.display = "block"

}

//ELEMENTOS PARA MOSTRAR EL CONTENIDO DE ALEMANIA

botonmostrar = document.getElementById("pais4")

botonmostrar.addEventListener("click", mostraralemania)

function mostraralemania() {

    plano.animate(
        { transform: "translateX(-380px)" },
        { duration: 3000, fill: "forwards" }
    )
    pin.style.top = "70px";
    pin.style.left = "70px";
    titulo.innerHTML = "Reino Unido"



    texto = document.querySelector("p")
    texto.innerHTML = `Presidente: Frank-Walter Steinmeier.
    Platos tipico: Brezel, Knödel, Salchichas.
    Lugares turísticos: Europa-Park, Miniatur Wunderland Hamburg, muro de Berlín.
    Producto interno bruto (PIB): 4.075.395 M$`
    fotomostrar = document.querySelector("img")
    fotomostrar.setAttribute("src", "alemania.png")

    document.getElementById("campo").style.display = "block"
    document.getElementById("bandera").style.display = "block"

}

//ELEMENTOS PARA MOSTRAR EL CONTENIDO DE CHINA

botonmostrar = document.getElementById("pais5")

botonmostrar.addEventListener("click", mostrarchina)

function mostrarchina() {

    plano.animate(
        { transform: "translateX(-640px)" },
        { duration: 3000, fill: "forwards" }
    )
    pin.style.top = "110px";
    pin.style.left = "130px";
    titulo.innerHTML = "China"


    texto = document.querySelector("p")
    texto.innerHTML = `Presidente: Xi Jinping.
    Platos tipico: El pato Pekinés, Sopa Wan Tan, Zongzi.
    Lugares turísticos: Gran muralla, la Ciudad Prohibida en Beijing, las Montañas de Guilin.
    Producto interno bruto (PIB): 17.174.722 M$`

    fotomostrar.setAttribute("src", "china.jpeg")

    document.getElementById("campo").style.display = "block"
    document.getElementById("bandera").style.display = "block"

}

//ELEMENTOS PARA MOSTRAR EL CONTENIDO DE INDIA

botonmostrar = document.getElementById("pais6")

botonmostrar.addEventListener("click", mostrarindia)

function mostrarindia() {

    plano.animate(
        { transform: "translateX(-640px)" },
        { duration: 3000, fill: "forwards" }
    )
    pin.style.top = "170px";
    pin.style.left = "40px";
    titulo.innerHTML = "India"


    texto = document.querySelector("p")
    texto.innerHTML = `Presidente: Draupadi Murmu.
    Platos tipico: Samosas, Biryani, Pollo tikka masala.
    Lugares turísticos: Taj Mahal, Templo Dorado, Fuerte Amber.
    Producto interno bruto (PIB): 2.661.796 M$`


    fotomostrar.setAttribute("src", "india.png")

    document.getElementById("campo").style.display = "block"
    document.getElementById("bandera").style.display = "block"

}

//ELEMENTOS PARA MOSTRAR EL CONTENIDO DE SUDAFRICA

botonmostrar = document.getElementById("pais7")

botonmostrar.addEventListener("click", mostrarsudafrica)

function mostrarsudafrica() {

    plano.animate(
        { transform: "translateX(-380px)" },
        { duration: 3000, fill: "forwards" }
    )
    pin.style.top = "315px";
    pin.style.left = "140px";
    titulo.innerHTML = "Sudáfrica"


    texto = document.querySelector("p")
    texto.innerHTML = `Presidente: Cyril Ramaphosa.
    Platos tipico: Amasi, Biltong, Bobotie.
    Lugares turísticos: Parque nacional Kruger, Ciudad del Cabo, Johannesburgo.
    Producto interno bruto (PIB): 384.964 M$`


    fotomostrar.setAttribute("src", "sudafrica.png")

    document.getElementById("campo").style.display = "block"
    document.getElementById("bandera").style.display = "block"
}

//ELEMENTOS PARA MOSTRAR EL CONTENIDO DE MARRUECOS

botonmostrar = document.getElementById("pais8")

botonmostrar.addEventListener("click", mostrarmarruecos)

function mostrarmarruecos() {

    plano.animate(
        { transform: "translateX(-380px)" },
        { duration: 3000, fill: "forwards" }
    )
    pin.style.top = "160px";
    pin.style.left = "40px";
    titulo.innerHTML = "Marruecos"


    texto = document.querySelector("p")
    texto.innerHTML = `Presidente: Mohamed VI.
    Platos tipico: Tajines, Cuscús con verduras, Kefta.
    Lugares turísticos: Marrakech, Mezquita Hassan II, Palacio de la bahía.
    Producto interno bruto (PIB): 127.596 M$`


    fotomostrar.setAttribute("src", "marruecos.png")

    document.getElementById("campo").style.display = "block"
    document.getElementById("bandera").style.display = "block"

}

//ELEMENTOS PARA MOSTRAR EL CONTENIDO DE AUSTRALIA

botonmostrar = document.getElementById("pais9")

botonmostrar.addEventListener("click", mostraraustralia)

function mostraraustralia() {

    plano.animate(
        { transform: "translateX(-640px)" },
        { duration: 3000, fill: "forwards" }
    )
    pin.style.top = "290px";
    pin.style.left = "190px";
    titulo.innerHTML = "Australia"


    texto = document.querySelector("p")
    texto.innerHTML = `Presidente: Anthony Albanese.
    Platos tipico: meatloaf, Pavlova, hoki.
    Lugares turísticos: Ópera de Sídney, Uluru, Gran Barrera de Coral.
    Producto interno bruto (PIB): 1.701.893 M$`

    fotomostrar = document.querySelector("img")
    fotomostrar.setAttribute("src", "australia.png")
    document.getElementById("campo").style.display = "block"
    document.getElementById("bandera").style.display = "block"

}

//ELEMENTOS PARA MOSTRAR EL CONTENIDO DE NUEVA ZELANDA

botonmostrar = document.getElementById("pais10")

botonmostrar.addEventListener("click", mostrarnv)

function mostrarnv() {
    plano.animate(
        { transform: "translateX(-640px)" },
        { duration: 3000, fill: "forwards" }
    )
    pin.style.top = "340px";
    pin.style.left = "310px";
    titulo.innerHTML = "Nueva Zelanda"

    texto = document.querySelector("p")
    texto.innerHTML = `Presidente: Chris Hipkins.
    Platos tipico: Hangi maorí, Asado Hogget, teririki.
    Lugares turísticos: Auckland, Queenstown, Wellington.
    Producto interno bruto (PIB): 233.016 M$`


    fotomostrar.setAttribute("src", "nuevazelanda.png")
    document.getElementById("campo").style.display = "block"
    document.getElementById("bandera").style.display = "block"

}

//ELEMENTOS PARA MOSTRAR EL CONTENIDO DE VENEZUELA

botonmostrar = document.getElementById("regresar")
botonmostrar.addEventListener("click", mostrarve)

function mostrarve() {

    titulo = document.querySelector("#nom-pais")
    titulo.innerHTML = "Venezuela"

    texto = document.querySelector("p")
    texto.innerHTML = `Presidente: Nicolás Maduro.
    'Platos tipico: arepa, pabellón criollo, cachapa.
    'Lugares turísticos: Parque Nacional Morrocoy, Archipiélago Los Roques, Colonia Tovar.
    'Producto interno bruto (PIB): 113.055 M€`

    fotomostrar = document.querySelector("img")
    fotomostrar.setAttribute("src","venezuela.png")

    //document.getElementById("regresar").style.display ="none"

    document.getElementById("campo").style.display = "block"
    document.getElementById("bandera").style.display = "block"
    
}