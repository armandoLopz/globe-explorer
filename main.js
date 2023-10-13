var botonmostrar = document.getElementById("pais1")
var botonocultar = document.getElementById("regresar")
//1234
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

    document.getElementById("campo").style.display = "none"
    document.getElementById("bandera").style.display = "none"

}

//FUNCION PARA MOSTRAR EL CONTENIDO DE MEXICO

function mostrarmexico() {
    pin.style.display = "none";
    pin.style.top = "160px";
    pin.style.left = "170px";
    var h = plano.animate(
        { transform: "translateX(0px)" },
        { duration: 800, fill: "forwards" }
    )
    h.onfinish = function () {
        pin.style.display = "block";
    };

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
    pin.style.display = "none";
    pin.style.top = "260px";
    pin.style.left = "350px";
    var h = plano.animate(
        { transform: "translateX(0px)" },
        { duration: 800, fill: "forwards" }
    )
    h.onfinish = function () {
        pin.style.display = "block";
    };

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
    pin.style.display = "none";
    pin.style.top = "100px";
    pin.style.left = "97px";
    var h = plano.animate(
        { transform: "translateX(-380px)" },
        { duration: 800, fill: "forwards" }
    )
    h.onfinish = function () {
        pin.style.display = "block";
    };
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
    pin.style.display = "none";
    pin.style.top = "60px";
    pin.style.left = "95px";
    var h = plano.animate(
        { transform: "translateX(-380px)" },
        { duration: 800, fill: "forwards" }
    )
    h.onfinish = function () {
        pin.style.display = "block";
    };
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
    pin.style.display = "none";
    pin.style.top = "100px";
    pin.style.left = "190px";
    var h = plano.animate(
        { transform: "translateX(-640px)" },
        { duration: 800, fill: "forwards" }
    )
    h.onfinish = function () {
        pin.style.display = "block";
    };

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
    pin.style.display = "none";
    pin.style.top = "160px";
    pin.style.left = "90px";
    var h = plano.animate(
        { transform: "translateX(-640px)" },
        { duration: 800, fill: "forwards" }
    )
    h.onfinish = function () {
        pin.style.display = "block";
    };

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
    pin.style.display = "none";
    pin.style.top = "320px";
    pin.style.left = "180px";
    var h = plano.animate(
        { transform: "translateX(-380px)" },
        { duration: 800, fill: "forwards" }
    )
    h.onfinish = function () {
        pin.style.display = "block";
    };

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
    pin.style.display = "none";
    pin.style.top = "150px";
    pin.style.left = "65px";
    var h = plano.animate(
        { transform: "translateX(-380px)" },
        { duration: 800, fill: "forwards" }
    )
    h.onfinish = function () {
        pin.style.display = "block";
    };

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
    pin.style.display = "none";
    pin.style.top = "330px";
    pin.style.left = "150px";
    var h = plano.animate(
        { transform: "translateX(-760px)" },
        { duration: 800, fill: "forwards" }
    )
    h.onfinish = function () {
        pin.style.display = "block";
    };

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
    pin.style.display = "none";
    pin.style.top = "345px";
    pin.style.left = "260px";
    var h = plano.animate(
        { transform: "translateX(-760px)" },
        { duration: 800, fill: "forwards" }
    )
    h.onfinish = function () {
        pin.style.display = "block";
    };

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

    pin.style.display = "none";
    pin.style.top = "200px";
    pin.style.left = "260px";
    var h = plano.animate(
        { transform: "translateX(0px)" },
        { duration: 800, fill: "forwards" }
    )
    h.onfinish = function () {
        pin.style.display = "block";
    };
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
