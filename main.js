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
    pin.style.display = "none";
    pin.style.top = "220px";
    pin.style.left = "285px";
    var h = plano.animate(
        { transform: "translateX(0px)" },
        { duration: 800, fill: "forwards" }
    )
    h.onfinish = function () {
        pin.style.display = "block";
    };
    document.getElementById("campo").style.display = "none"
    document.getElementById("bandera").style.display = "none"

}

//FUNCION PARA MOSTRAR EL CONTENIDO DE MEXICO

function mostrarmexico() {
    pin.style.display = "none";
    pin.style.top = "185px";
    pin.style.left = "200px";
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
    texto.innerHTML =  `Presidente: Andrés Manuel López Obrador. <br> <br>
    Capital: Ciudad de México. <br> <br>
    Platos típicos: Tacos al pastor, Mole poblano, Pozole. <br> <br>
    Lugares turísticos: Chichén Itzá, Ciudad de México, Cancún <br> <br>
    Población: 126,7 millones de personas. <br> <br>
    Extensión territorial: 1,973 millones km². <br> <br>
    Producto Interno Bruto (PIB): 1.05 billones de dólares.`
    fotomostrar = document.querySelector("img")
    fotomostrar.setAttribute("src", "mexico.svg")

    campo.animate(
        {
          opacity: [0, 1]
        },
        2100,
      );

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
    pin.style.top = "270px";
    pin.style.left = "365px";
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
    Capital: Brasilia. <br> <br>
    Platos típicos: Feijoada, Acarajé, Pan de Queso. <br><br>
    Lugares turísticos: Cristo Redentor, Cataratas del Iguazú, Pan de Azúcar.<br><br>
    Población: 214,3 millones de personas. <br> <br>
    Extensión territorial: 8,51 millones km². <br> <br>
    Producto interno bruto (PIB): 1.924.134 M$`

    fotomostrar.setAttribute("src", "brasil.png")

    campo.animate(
        {
          opacity: [0, 1]
        },
        2100,
      );

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
    pin.style.top = "125px";
    pin.style.left = "115px";
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
    Capital: Madrid. <br> <br>
    Platos típicos: Las tapas, Paella, Tortilla de papa.<br><br>
    Lugares turísticos: Isla de Tabarca, Formentera, Basílica de la Sagrada Família.<br><br>
    Población: 47,42 millones de personas. <br> <br>
    Extensión territorial: 506.030 km². <br> <br>
    Producto interno bruto (PIB): 1.400,52M$`
    fotomostrar = document.querySelector("img")
    
    
    fotomostrar.setAttribute("src", "espana.png")
   
        campo.animate(
            {
              opacity: [0, 1]
            },
            2100,
          );

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
    pin.style.top = "80px";
    pin.style.left = "115px";
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
    Capital: Londres. <br> <br>
    Platos típicos: Fish & chips, cream tea, falafel.<br><br>
    Lugares turísticos: Torre de Londres, Museo Británico, Puente de la Torre.<br><br>
    Población: 67,33 millones de personas. <br> <br>
    Extensión territorial: 243.610 km². <br> <br>
    Producto interno bruto (PIB): 2.913.623 M$`
    fotomostrar = document.querySelector("img")
    fotomostrar.setAttribute("src", "reino.png")

    campo.animate(
        {
          opacity: [0, 1]
        },
        2100,
      );

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
    pin.style.top = "120px";
    pin.style.left = "210px";
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
    Capital: Pekín. <br> <br>
    Platos típicos: El pato Pekinés, Sopa Wan Tan, Zongzi.<br><br>
    Lugares turísticos: Gran muralla, la Ciudad Prohibida en Beijing, las Montañas de Guilin.<br><br>
    Población: 1,412 miles de millones de personas. <br> <br>
    Extensión territorial: 9,597 millones km². <br> <br>
    Producto interno bruto (PIB): 17.174.722 M$`

    fotomostrar.setAttribute("src", "china.jpeg")

    campo.animate(
        {
          opacity: [0, 1]
        },
        2100,
      );

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
    pin.style.top = "180px";
    pin.style.left = "110px";
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
    Capital: Nueva Delhi. <br> <br>
    Platos típicos: Samosas, Biryani, Pollo tikka masala.<br><br>
    Lugares turísticos: Taj Mahal, Templo Dorado, Fuerte Amber.<br><br>
    Población: 1,408 miles de millones km² de personas. <br> <br>
    Extensión territorial: 9,597 millones km². <br> <br>
    Producto interno bruto (PIB): 2.661.796 M$`

    fotomostrar.setAttribute("src", "india.png")

    campo.animate(
        {
          opacity: [0, 1]
        },
        2100,
      );

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
    pin.style.top = "340px";
    pin.style.left = "200px";
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
    Capital: Pretoria (capital administrativa), Ciudad del Cabo (capital legislativa) y Bloemfontein (capital judicial). <br> <br>
    Platos típicos: Amasi, Biltong, Bobotie.<br><br>
    Lugares turísticos: Parque nacional Kruger, Ciudad del Cabo, Johannesburgo.<br><br>
    Población: 59,39 millones km² de personas. <br> <br>
    Extensión territorial: 1,22 millones km². <br> <br>
    Producto interno bruto (PIB): 384.964 M$`

    fotomostrar.setAttribute("src", "sudafrica.png")

    campo.animate(
        {
          opacity: [0, 1]
        },
        2100,
      );

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
    pin.style.top = "160px";
    pin.style.left = "85px";
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
    Capital: Rabat. <br> <br>
    Platos típicos: Tajines, Cuscús con verduras, Kefta.<br><br>
    Lugares turísticos: Marrakech, Mezquita Hassan II, Palacio de la bahía.<br><br>
    Población: 37,08 millones km² de personas. <br> <br>
    Extensión territorial: 710.850 km². <br> <br>
    Producto interno bruto (PIB): 127.596 M$`

    fotomostrar.setAttribute("src", "marruecos.png")

    campo.animate(
        {
          opacity: [0, 1]
        },
        2100,
      );

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
    Capital: Canberra. <br> <br>
    Platos típicos: meatloaf, Pavlova, hoki.<br><br>
    Lugares turísticos: Ópera de Sídney, Uluru, Gran Barrera de Coral.<br><br>
    Población: 25,69 millones km² de personas. <br> <br>
    Extensión territorial: 7,688 millones km². <br> <br>
    Producto interno bruto (PIB): 1.701.893 M$`

    fotomostrar = document.querySelector("img")
    fotomostrar.setAttribute("src", "australia.png")

    campo.animate(
        {
          opacity: [0, 1]
        },
        2100,
      );

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
    pin.style.top = "375px";
    pin.style.left = "270px";
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
    Capital: Wellington. <br> <br>
    Platos típicos: Hangi maorí, Asado Hogget, teririki.<br><br>
    Lugares turísticos: Auckland, Queenstown, Wellington.<br><br>
    Población: 5,123 millones km² de personas. <br> <br>
    Extensión territorial: 268.021 km². <br> <br>
    Producto interno bruto (PIB): 233.016 M$`

    fotomostrar.setAttribute("src", "nuevazelanda.png")

    campo.animate(
        {
          opacity: [0, 1]
        },
        2100,
      );

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
     Capital: Caracas. <br> <br>
     Platos típicos: arepa, pabellón criollo, cachapa.<br><br>
     Lugares turísticos: Parque Nacional Morrocoy, Archipiélago Los Roques, Colonia Tovar.<br><br>
     Población: 28,2 millones km² de personas. <br> <br>
     Extensión territorial: 916.445 km². <br> <br>
     Producto interno bruto (PIB): 113.055 M€`

    fotomostrar = document.querySelector("img")
    fotomostrar.setAttribute("src", "venezuela.png")

    campo.animate(
        {
          opacity: [0, 1]
        },
        2100,
      );


    document.getElementById("campo").style.display = "block"
    document.getElementById("bandera").style.display = "block"
    document.getElementById("regresar").style.display = "none"
    document.getElementById("textoinicio").style.display = "none"
}
