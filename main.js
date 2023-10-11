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
    plano.animate(
        { transform: "translateX(0px)" },
        { duration: 3000, fill: "forwards" }
    )
    titulo.innerHTML = "México"
    texto.innerHTML = `1. Patrimonio cultural: México es conocido por su rica historia y patrimonio cultural. 
    'El país cuenta con numerosos sitios arqueológicos, como las antiguas ciudades mayas de Chichén Itzá y Tulum, 
    'así como con impresionantes monumentos coloniales, como la Catedral Metropolitana de la Ciudad de México.` +

        ` 2. Gastronomía: La comida mexicana es famosa en todo el mundo por su variedad y sabores únicos.
     'Desde los tacos y las enchiladas hasta los tamales y los chiles en nogada,
     'la gastronomía mexicana ofrece una amplia gama de platos deliciosos que combinan ingredientes frescos y picantes.` +

        `3. Artesanías: México es conocido por sus hermosas artesanías hechas a mano. 
     'Desde textiles tradicionales y cerámica hasta joyería y esculturas de madera, 
     'las artesanías mexicanas reflejan la rica cultura y tradiciones del país.`
    fotomostrar.setAttribute("src", "mexico.svg")

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

    texto.innerHTML = ` 1. Playas impresionantes: Brasil es famoso por sus hermosas playas, como Copacabana en Río de Janeiro y Praia do Forte en Bahía. 
    'Estas playas ofrecen arenas blancas, aguas cristalinas y una gran variedad de actividades acuáticas.` +

        `2. Carnaval de Río de Janeiro: El Carnaval de Río de Janeiro es uno de los eventos más famosos y coloridos del mundo. 
    'Con desfiles de samba, disfraces elaborados y música en vivo, el Carnaval atrae a millones de visitantes cada año.` +

        `3. Cristo Redentor: La estatua del Cristo Redentor en Río de Janeiro es uno de los íconos más reconocibles de Brasil. 
    'Ubicada en la cima del Cerro del Corcovado, ofrece una vista panorámica impresionante de la ciudad y es un destino turístico muy popular.`

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

    texto.innerHTML = `1. Arquitectura histórica: España cuenta con una gran cantidad de edificios históricos y monumentos impresionantes, como la Sagrada Familia en Barcelona, 
    'el Alhambra en Granada y la Catedral de Santiago de Compostela. 
    'Estas construcciones reflejan la rica historia y la influencia de diferentes culturas en el país.` +

        `2. Gastronomía: La comida española es conocida en todo el mundo por su variedad y sabor. 
    'Desde las tapas y paellas hasta los famosos jamones ibéricos y los vinos españoles, la gastronomía española es una atracción en sí misma.` +

        `3. Playas y costa: España cuenta con hermosas playas a lo largo de su costa mediterránea y atlántica.
    'Destinos como Ibiza, Costa del Sol y las Islas Canarias atraen a turistas de todo el mundo que buscan disfrutar del sol, el mar y las actividades acuáticas.`


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



    texto.innerHTML = `1. Castillos y palacios: Alemania es conocida por sus impresionantes castillos y palacios, como el castillo de Neuschwanstein y el palacio de Sanssouci. 
    'Estas construcciones históricas ofrecen una visión fascinante de la arquitectura y la historia del país.` +

        `2. Cerveza y Oktoberfest: Alemania es famosa por su cerveza de alta calidad y su tradición cervecera. 
    'El Oktoberfest en Múnich es uno de los festivales más grandes del mundo, donde los visitantes pueden disfrutar de cerveza alemana auténtica, música en vivo y comida tradicional.` +

        `3. Cultura e historia: Alemania tiene una rica historia y una cultura vibrante. 
    'Ciudades como Berlín, Múnich y Colonia ofrecen museos, galerías de arte, teatros y una escena musical diversa. 
    'Además, el país tiene una gran cantidad de sitios históricos, como el Muro de Berlín y el campo de concentración de Auschwitz.`

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



    texto.innerHTML = `1. Gran Muralla China: La Gran Muralla China es una de las maravillas arquitectónicas más famosas del mundo y un símbolo icónico de China. 
    Con una longitud de más de 21,000 kilómetros, esta antigua fortificación ofrece impresionantes vistas panorámicas y una fascinante historia.` +

        `2. Paisajes naturales impresionantes: China cuenta con una variedad de paisajes naturales impresionantes, desde las montañas sagradas de Huangshan y Zhangjiajie 
    'hasta los ríos Yangtsé y Li, y los campos de arroz en terrazas de Yuanyang. Estos paisajes ofrecen una belleza única y oportunidades para actividades al aire libre.` +

        `3. Tecnología e innovación: China se ha convertido en un líder mundial en tecnología e innovación. 
    'Desde la fabricación de productos electrónicos hasta la exploración espacial, China ha logrado avances significativos en diversos campos, lo que la convierte en un destino atractivo para aquellos interesados en la ciencia y la tecnología.`

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


    texto.innerHTML = `1. Diversidad cultural: India es conocida por su diversidad cultural, con más de 2,000 grupos étnicos y más de 1,600 idiomas hablados en todo el país.
     'Esta diversidad se refleja en sus tradiciones, festividades y cocina, que varían de una región a otra.` +

        `2. Espiritualidad y religión: India es el lugar de nacimiento de varias religiones importantes, como el hinduismo, el budismo, el jainismo y el sijismo. 
     'El país alberga numerosos templos, ashrams y lugares sagrados que atraen a personas de todo el mundo en busca de paz espiritual y enriquecimiento personal.` +

        `3. Medicina ayurvédica: India es conocida por su antigua tradición de medicina ayurvédica, que se basa en el equilibrio entre el cuerpo, 
     'la mente y el espíritu. Muchos visitantes acuden a India en busca de tratamientos y terapias ayurvédicas, 
     'como masajes, yoga y meditación, para mejorar su bienestar general.`


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


    texto.innerHTML = `1. Safaris y vida salvaje: Sudáfrica es famosa por sus impresionantes parques nacionales y reservas de vida silvestre,
    ' donde los visitantes pueden disfrutar de safaris y ver de cerca animales icónicos como leones, elefantes, rinocerontes y jirafas.`+

        `2. Paisajes naturales variados: Sudáfrica ofrece una amplia gama de paisajes naturales, desde las majestuosas montañas del Drakensberg y el impresionante cañón del Río Blyde 
    'hasta las hermosas playas de la costa oeste y las vastas llanuras del Karoo. Cada región tiene su propio encanto y belleza única.` +

        `3. Viñedos y gastronomía: Sudáfrica es uno de los principales productores de vino del mundo, 
    'con viñedos pintorescos y bodegas que ofrecen degustaciones y visitas. Además, 
    'la gastronomía sudafricana es una fusión de influencias africanas, europeas y asiáticas, lo que la convierte en una experiencia culinaria única y deliciosa.`


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



    texto.innerHTML = `1. Medina de Marrakech: La medina de Marrakech es un laberinto de calles estrechas y bulliciosas llenas de tiendas, 
    'mercados y lugares históricos. Es un lugar vibrante y colorido donde los visitantes
     'pueden sumergirse en la cultura marroquí y disfrutar de la arquitectura tradicional.`+

        `2. Desierto del Sahara: Marruecos es el hogar de una parte del desierto del Sahara, donde los visitantes pueden experimentar 
     'la majestuosidad de las dunas de arena y pasar la noche en un campamento beduino bajo las estrellas. 
     'Es una experiencia única y mágica que no se puede encontrar en muchos otros lugares del mundo.` +

        `3. Zocos y mercados: Los zocos y mercados de Marruecos son famosos en todo el mundo por su ambiente animado y la variedad de productos que se pueden encontrar.
     'Desde especias y alfombras hasta artesanías y joyas, los visitantes pueden disfrutar de una experiencia de compra única mientras exploran 
     'los estrechos pasillos y regatean con los vendedores.`


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



    texto.innerHTML = `1. Increíble biodiversidad: Australia es conocida por su increíble biodiversidad,
    'con una gran variedad de especies únicas y endémicas. Desde los icónicos canguros y koalas hasta los coloridos arrecifes de coral de la Gran Barrera de Coral, 
    'Australia ofrece una experiencia única para los amantes de la vida salvaje.` +

        `2. Paisajes impresionantes: Australia cuenta con una variedad de paisajes impresionantes,
    'desde las playas de arena blanca y aguas cristalinas de la costa este hasta los desiertos rojos y las formaciones rocosas de Uluru 
    'en el centro del país. Además, cuenta con hermosos parques nacionales y áreas protegidas que ofrecen oportunidades para hacer senderismo, acampar y disfrutar de la naturaleza.` +

        `3. Cultura aborigen: La cultura aborigen es una parte integral de la identidad australiana, y explorar y aprender sobre esta rica historia y tradiciones es una experiencia enriquecedora. 
    'Los visitantes pueden participar en actividades culturales, como pintura, danza y tallado, y aprender sobre la conexión espiritual de los aborígenes con la tierra.`

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

    texto.innerHTML = `1. Paisajes impresionantes: Nueva Zelanda es famosa por sus paisajes espectaculares,
    'desde las majestuosas montañas de los Alpes del Sur hasta los fiordos escarpados de Milford Sound. También cuenta con hermosas playas, lagos cristalinos 
    'y extensos bosques nativos` +

        `2. Cultura maorí: La cultura maorí es una parte integral de la identidad neozelandesa. 
    'Los visitantes pueden aprender sobre las tradiciones y costumbres maoríes, participar en ceremonias 
    'y disfrutar de la música y danza tradicional.` +

        `3. Hospitalidad y amabilidad: Los neozelandeses son conocidos por su hospitalidad y amabilidad hacia los visitantes.
    'El país tiene una cultura acogedora y relajada, lo que hace que los viajeros se sientan bienvenidos y cómodos durante su estadía.`


    fotomostrar.setAttribute("src", "nuevazelanda.png")
    document.getElementById("campo").style.display = "block"
    document.getElementById("bandera").style.display = "block"

}
