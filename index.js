$(() => {
  console.log('index.js loading ')
  loadImages()

  $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 160,
    horizontalOrder: true
  });
})

const loadImages = () => {
  let folder = "images/";
  $.ajax({
    url: folder,
    dataType: 'json',
    success: function (data) {
      data.forEach(img => {

        $("body").append(`
          <div class="grid-item grid-item--width2 grid-item--height2">
          <img src="${folder}${img}">
          </div>    
          `)
      })
    }
  })

}