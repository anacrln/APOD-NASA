$("form").submit(false)

$("#btn").on("click", function() {
  let date = $("#date").val()
  let url = `https://api.nasa.gov/planetary/apod?api_key=gWnsyTlLJ3RW2k5DRn9LOthZozQjLT55lBqeltsy&date=${date}`

  $.ajax({
    url: url,
    type: "get",

    success: function(data) {
      $("#title").text(data.title)
      $("#image").attr('src', data.url)
      $("#text").text(data.explanation)
      if(data.media_type == 'image') {
        $('#image').attr('src', data.url).show()
        $("#video").hide()
      } else if(data.media_type == 'video') {
        $("#video").attr('src', info.url).show()
        $("#image").hide()
      }
    },

      error: function error() {
        alert("Não temos imagem desse dia.")
      }
    
  })
})