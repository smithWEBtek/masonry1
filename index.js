$(() => {
  console.log('index.js loading ')
  loadImages()
  // masonize()
})

const loadImages = () => {
  let folder = "images/";
  $.ajax({
    url: folder,
    dataType: 'json',
    success: function (data) {
      data.forEach((img) => {

        $("body").append(`
          <div>
            <img src="${folder}${img}" class="grid-item grid-item--width2">
          </div>    
        `)
      })
    }
  })
}

function masonize() {
  let elem = document.querySelector('.grid');
  let msnry = new Masonry(elem, {
    // options
    itemSelector: '.grid-item',
    columnWidth: 200
  })
}