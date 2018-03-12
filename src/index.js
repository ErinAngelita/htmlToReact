import $ from 'jquery'

$.ajax({
  url: "https://swapi.co/api/people",
  success: (result) => {
    result.results.map((res, index) => {
      let html =
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
