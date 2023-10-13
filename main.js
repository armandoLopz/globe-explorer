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
    pin.style.top = "220px";
    pin.style.left = "285px";
    plano.animate(
        { transform: "translateX(0px)" },
        { duration: 3000, fill: "forwards" }
    )
    document.getElementById("campo").style.display = "none"
    document.getElementById("bandera").style.display = "none"

}

//FUNCION PARA MOSTRAR EL CONTENIDO DE MEXICO

function mostrarmexico() {
    pin.style.top = "185px";
    pin.style.left = "200px";
    var h = plano.animate(
        { transform: "translateX(0px)" },
        { duration: 3000, fill: "forwards" }
    )

    titulo = document.querySelector("#nom-pais")
    titulo.innerHTML = "México"

    texto = document.querySelector("p")
    texto.innerHTML = `Presidente: Andrés Manuel López Obrador. <br> <br>
    Platos típicos: Tacos al pastor, Mole poblano, Pozole. <br> <br>
    Lugares turísticos: Chichén Itzá, Ciudad de México, Cancún <br> <br>
    Producto Interno Bruto (PIB): 1.05 billones de dólares.`
    fotomostrar = document.querySelector("img")
    fotomostrar.setAttribute("src", "mexico.svg")

    document.getElementById("regresar").style.display = "block"
    document.getElementById("campo").style.display = "block"
    document.getElementById("bandera").style.display = "block"
    document.getElementById("textoinicio").style.display = "none"

}

//ELEMENTOS PARA MOSTRAR EL CONTENIDO DE BRASIL

botonmostrar = document.getElementById("pais2")

botonmostrar.addEventListener("click", mostrarbrasil)

function mostrarbrasil() {

    pin.style.top = "270px";
    pin.style.left = "365px";
    plano.animate(
        { transform: "translateX(0px)" },
        { duration: 3000, fill: "forwards" }
    )

    titulo.innerHTML = "Brasil"

    texto = document.querySelector("p")
    texto.innerHTML = `Presidente: Luiz Inácio Lula da Silva. <br> <br>
    Platos típicos: Feijoada, Acarajé, Pan de Queso. <br><br>
    Lugares turísticos: Cristo Redentor, Cataratas del Iguazú, Pan de Azúcar.<br><br>
    Producto interno bruto (PIB): 1.924.134 M$`

    fotomostrar.setAttribute("src", "brasil.png")


    document.getElementById("campo").style.display = "block"
    document.getElementById("bandera").style.display = "block"
    document.getElementById("regresar").style.display = "block"
    document.getElementById("textoinicio").style.display = "none"
}


//ELEMENTOS PARA MOSTRAR EL CONTENIDO DE ESPAÑA

botonmostrar = document.getElementById("pais3")

botonmostrar.addEventListener("click", mostraresp)

function mostraresp() {
    pin.style.top = "125px";
    pin.style.left = "115px";
    plano.animate(
        { transform: "translateX(-380px)" },
        { duration: 3000, fill: "forwards" }
    )
    titulo.innerHTML = "España"


    texto = document.querySelector("p")
    texto.innerHTML = `Presidente: Pedro Sánchez.<br><br>
    Platos típicos: Las tapas, Paella, Tortilla de papa.<br><br>
    Lugares turísticos: Isla de Tabarca, Formentera, Basílica de la Sagrada Família.<br><br>
    Producto interno bruto (PIB): 1.400,52M$`
    fotomostrar = document.querySelector("img")

    fotomostrar.setAttribute("src", "espana.png")

    document.getElementById("campo").style.display = "block"
    document.getElementById("bandera").style.display = "block"
    document.getElementById("regresar").style.display = "block"
    document.getElementById("textoinicio").style.display = "none"
}

//ELEMENTOS PARA MOSTRAR EL CONTENIDO DE ALEMANIA

botonmostrar = document.getElementById("pais4")

botonmostrar.addEventListener("click", mostrarreinounido)

function mostrarreinounido() {

    plano.animate(
        { transform: "translateX(-380px)" },
        { duration: 3000, fill: "forwards" }
    )
    pin.style.top = "80px";
    pin.style.left = "115px";
    titulo.innerHTML = "Reino Unido"

    texto = document.querySelector("p")
    texto.innerHTML = `Presidente: Boris Johnson.<br><br>
    Platos típicos: Fish & chips, cream tea, falafel.<br><br>
    Lugares turísticos: Torre de Londres, Museo Británico, Puente de la Torre.<br><br>
    Producto interno bruto (PIB): 2.913.623 M$`
    fotomostrar = document.querySelector("img")
    fotomostrar.setAttribute("src", "reino.avif")

    document.getElementById("campo").style.display = "block"
    document.getElementById("bandera").style.display = "block"
    document.getElementById("regresar").style.display = "block"
    document.getElementById("textoinicio").style.display = "none"
}

//ELEMENTOS PARA MOSTRAR EL CONTENIDO DE CHINA

botonmostrar = document.getElementById("pais5")

botonmostrar.addEventListener("click", mostrarchina)

function mostrarchina() {

    plano.animate(
        { transform: "translateX(-640px)" },
        { duration: 3000, fill: "forwards" }
    )
    pin.style.top = "120px";
    pin.style.left = "210px";
    titulo.innerHTML = "China"


    texto = document.querySelector("p")
    texto.innerHTML = `Presidente: Xi Jinping.<br><br>
    Platos típicos: El pato Pekinés, Sopa Wan Tan, Zongzi.<br><br>
    Lugares turísticos: Gran muralla, la Ciudad Prohibida en Beijing, las Montañas de Guilin.<br><br>
    Producto interno bruto (PIB): 17.174.722 M$`

    fotomostrar.setAttribute("src", "china.jpeg")

    document.getElementById("campo").style.display = "block"
    document.getElementById("bandera").style.display = "block"
    document.getElementById("regresar").style.display = "block"
    document.getElementById("textoinicio").style.display = "none"
}

//ELEMENTOS PARA MOSTRAR EL CONTENIDO DE INDIA

botonmostrar = document.getElementById("pais6")

botonmostrar.addEventListener("click", mostrarindia)

function mostrarindia() {

    plano.animate(
        { transform: "translateX(-640px)" },
        { duration: 3000, fill: "forwards" }
    )
    pin.style.top = "180px";
    pin.style.left = "110px";
    titulo.innerHTML = "India"


    texto = document.querySelector("p")
    texto.innerHTML = `Presidente: Draupadi Murmu.<br><br>
    Platos típicos: Samosas, Biryani, Pollo tikka masala.<br><br>
    Lugares turísticos: Taj Mahal, Templo Dorado, Fuerte Amber.<br><br>
    Producto interno bruto (PIB): 2.661.796 M$`


    fotomostrar.setAttribute("src", "india.png")

    document.getElementById("campo").style.display = "block"
    document.getElementById("bandera").style.display = "block"
    document.getElementById("regresar").style.display = "block"
    document.getElementById("textoinicio").style.display = "none"
}

//ELEMENTOS PARA MOSTRAR EL CONTENIDO DE SUDAFRICA

botonmostrar = document.getElementById("pais7")

botonmostrar.addEventListener("click", mostrarsudafrica)

function mostrarsudafrica() {

    plano.animate(
        { transform: "translateX(-380px)" },
        { duration: 3000, fill: "forwards" }
    )
    pin.style.top = "340px";
    pin.style.left = "200px";
    titulo.innerHTML = "Sudáfrica"


    texto = document.querySelector("p")
    texto.innerHTML = `Presidente: Cyril Ramaphosa.<br><br>
    Platos típicos: Amasi, Biltong, Bobotie.<br><br>
    Lugares turísticos: Parque nacional Kruger, Ciudad del Cabo, Johannesburgo.<br><br>
    Producto interno bruto (PIB): 384.964 M$`


    fotomostrar.setAttribute("src", "sudafrica.png")

    document.getElementById("campo").style.display = "block"
    document.getElementById("bandera").style.display = "block"
    document.getElementById("regresar").style.display = "block"
    document.getElementById("textoinicio").style.display = "none"
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
    pin.style.left = "85px";
    titulo.innerHTML = "Marruecos"


    texto = document.querySelector("p")
    texto.innerHTML = `Presidente: Mohamed VI.<br><br>
    Platos típicos: Tajines, Cuscús con verduras, Kefta.<br><br>
    Lugares turísticos: Marrakech, Mezquita Hassan II, Palacio de la bahía.<br><br>
    Producto interno bruto (PIB): 127.596 M$`


    fotomostrar.setAttribute("src", "marruecos.png")

    document.getElementById("campo").style.display = "block"
    document.getElementById("bandera").style.display = "block"
    document.getElementById("regresar").style.display = "block"
    document.getElementById("textoinicio").style.display = "none"
}

//ELEMENTOS PARA MOSTRAR EL CONTENIDO DE AUSTRALIA

botonmostrar = document.getElementById("pais9")

botonmostrar.addEventListener("click", mostraraustralia)

function mostraraustralia() {

    plano.animate(
        { transform: "translateX(-760px)" },
        { duration: 3000, fill: "forwards" }
    )
    pin.style.top = "330px";
    pin.style.left = "150px";
    titulo.innerHTML = "Australia"


    texto = document.querySelector("p")
    texto.innerHTML = `Presidente: Anthony Albanese.<br><br>
    Platos típicos: meatloaf, Pavlova, hoki.<br><br>
    Lugares turísticos: Ópera de Sídney, Uluru, Gran Barrera de Coral.<br><br>
    Producto interno bruto (PIB): 1.701.893 M$`

    fotomostrar = document.querySelector("img")
    fotomostrar.setAttribute("src", "australia.png")
    document.getElementById("campo").style.display = "block"
    document.getElementById("bandera").style.display = "block"
    document.getElementById("regresar").style.display = "block"
    document.getElementById("textoinicio").style.display = "none"
}

//ELEMENTOS PARA MOSTRAR EL CONTENIDO DE NUEVA ZELANDA

botonmostrar = document.getElementById("pais10")

botonmostrar.addEventListener("click", mostrarnv)

function mostrarnv() {
    plano.animate(
        { transform: "translateX(-760px)" },
        { duration: 3000, fill: "forwards" }
    )
    pin.style.top = "375px";
    pin.style.left = "270px";
    titulo.innerHTML = "Nueva Zelanda"

    texto = document.querySelector("p")
    texto.innerHTML = `Presidente: Chris Hipkins.<br><br>
    Platos típicos: Hangi maorí, Asado Hogget, teririki.<br><br>
    Lugares turísticos: Auckland, Queenstown, Wellington.<br><br>
    Producto interno bruto (PIB): 233.016 M$`


    fotomostrar.setAttribute("src", "nuevazelanda.png")
    document.getElementById("campo").style.display = "block"
    document.getElementById("bandera").style.display = "block"
    document.getElementById("regresar").style.display = "block"
    document.getElementById("textoinicio").style.display = "none"

}

//ELEMENTOS PARA MOSTRAR EL CONTENIDO DE VENEZUELA

botonmostrar = document.getElementById("regresar")
botonmostrar.addEventListener("click", mostrarve)

function mostrarve() {

    titulo = document.querySelector("#nom-pais")
    titulo.innerHTML = "Venezuela"

    texto = document.querySelector("p")
    texto.innerHTML = `Presidente: Nicolás Maduro.<br><br>
     Platos típicos: arepa, pabellón criollo, cachapa.<br><br>
     Lugares turísticos: Parque Nacional Morrocoy, Archipiélago Los Roques, Colonia Tovar.<br><br>
     Producto interno bruto (PIB): 113.055 M€`

    fotomostrar = document.querySelector("img")
    fotomostrar.setAttribute("src", "venezuela.png")


    document.getElementById("campo").style.display = "block"
    document.getElementById("bandera").style.display = "block"
    document.getElementById("regresar").style.display = "none"
    document.getElementById("textoinicio").style.display = "none"
}
