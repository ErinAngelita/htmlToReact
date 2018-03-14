import $ from 'jquery'

$("#selectySelects").on("change", (e) => {
  let query = e.currentTarget.value;
  let qUrl = `https://swapi.co/api/${query}`;
  if($(".dataBox")){
      $(".dataBox").remove();
  }
  $.ajax({
    url: qUrl,
    success: (result) => {
      console.log(result.results[0]);
      result.results.map((res, index) => {
        let html = query === "people" ?
         '<div class="dataBox flexItem">' +
            '<div class="flexRightContainer"><p>' + res.name +
            '</p><button data-index="' + index +
            '" id="meow' + index +
            '" class="meowBtn">Show More</button>' +
            '<div id="meowDiv' + index + '" class="hideOnStart">' +
              '<p>' + res.height + '</p>' +
              '<p>' + res.mass + '</p>' +
              '<p>' + res.hair_color + '</p>' +
              '<p>' + res.skin_color + '</p>' +
              '<p>' + res.eye_color + '</p>' +
              '<p>' + res.birth_year + '</p>' +
              '<p>' + res.gender + '</p>' +
            '</div>' +
         '</div>'
       :
         '<div class="dataBox flexItem">' +
            '<div class="flexRightContainer"><p>' + res.name +
            '</p><button data-index="' + index +
            '" id="meow' + index +
            '" class="meowBtn">Show More</button>' +
            '<div id="meowDiv' + index + '" class="hideOnStart">' +
              '<p>' + res.name + '</p>' +
              '<p>' + res.diameter + '</p>' +
              '<p>' + res.gravity + '</p>' +
              '<p>' + res.climate + '</p>' +
              '<p>' + res.orbital_period + '</p>' +
              '<p>' + res.population + '</p>' +
              '<p>' + res.rotation_period + '</p>' +
            '</div>' +
         '</div>';
       let buttonId = '#meow' + index;
        $("#dataContainer").append(html);
        $(buttonId).on('click', (e) => {
          e.preventDefault();
          let divId = '#meowDiv' + e.currentTarget.dataset.index;
          $(divId).toggle();
        })
      });
    },
    complete: () => {
      $('.hideOnStart').hide()
    }
  });
})
