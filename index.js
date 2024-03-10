/** Definimos una función asincrónica para obtener publicaciones desde una API */
const getPosts = async () => {
    try {
      // Realizamos una solicitud a la API usando fetch
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      // Esperamos la respuesta y la convertimos en formato JSON
      let data = await response.json();
  
      // Verificamos si los datos obtenidos no son nulos
      if (data !== null) {
       
        // Mapeamos los datos para crear elementos HTML
        const publicaciones = document.getElementById("publicaciones");
       data.forEach(publicacion =>{
            const publicacionDiv = document.createElement("div");
            publicacionDiv.classList.add("publicacion");

            const tituloPublicacion = document.createElement("h2");
            tituloPublicacion.textContent = publicacion.title;

            const cuerpoPublicacion = document.createElement("p");
            cuerpoPublicacion.textContent = publicacion.body;
        
            publicacionDiv.appendChild(tituloPublicacion);
            publicacionDiv.appendChild(cuerpoPublicacion);

            publicaciones.appendChild(publicacionDiv);
        })
      }
    } catch (error) {
      // Capturamos y mostramos errores en la consola
      console.log(error);
    }
  };

  getPosts();