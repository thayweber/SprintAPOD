let btn = document.querySelector('#submit')

btn.addEventListener('click', () => {
  apiApod()
})



function apiApod() {
  
  const data = $('#data').val();


  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=tb6gQmyj35SRgAV49tUobFBJhNwuhRzGnIbssT6q&date=${data}`,
    success: function(data){
      apiData(data);
    }
  
  })
}

function apiData(saida){
  const imagem = $(".imagem");
  const titulo = $(".titulo");
  const explanation = $(".explanation");
  const copyright = $(".copyright")
 
  titulo.html(`${saida.title}`);
  explanation.html(`${saida.explanation}`);
  copyright.html(`${saida.copyright}`)
  

  if(saida.media_type == 'image') {
    imagem.html(`<img class='img' src="${saida.url}"/>`)
  } else {
    imagem.html(`<iframe class="img" src="${saida.url}?autoplay=1&mute=1"></iframe>`)
    }
  }
