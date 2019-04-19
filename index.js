$(() => {
  console.log('index.js loaded ... ')

  getImages()

})


const getImages = () => {

  let folder = "images/";

  $.ajax({
    url: folder,
    dataType: 'json',
    success: function (data) {
      data.forEach((pic) => {
        $("body").append(`
        
        <div class="element">
          <img src="${folder}${pic}">
        </div>    
        `)
      })


      // let img = new Image();
      // img.src = src;
      // containerElement.appendChild(img);


    }
  })
}