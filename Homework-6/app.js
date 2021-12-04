var cast = [
  {
    id: 1,
    name: "Leonardo DiCaprio",
    character: "Cobb",
    pictureUrl:
      "https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_UY317_CR10,0,214,317_AL_.jpg",
  },
];

var castMember = {
  id: cast.length + 1,
  name: "",
  character: "",
  pictureUrl: "",
};

$(document).ready(function () {
  var myForm = $("form");
  var warningMessage = $(".warning-message");
  var createCastMember = function (member) {
    $("#table-body").append(
      `<tr>
        <td>${member.id}</td>
        <td>${member.character}</td>
        <td>${member.name}</td>
        <td><img src =${member.pictureUrl} /></td>
        <td><i class="fas fa-user-minus"></i></td>
      </tr>`
    );
    $("i").on("click", function () {
      $(this).closest("tr").remove();
    });
  };

  $.map(cast, function (member) {
    createCastMember(member);
  });

  $("#show-crew").on("click", function () {
    myForm.fadeIn();
    $("#add-cast").show();
    $(this).hide();
  });

  $("input").change(function (event) {
    castMember[event.target.name] = event.target.value;
  });

  $("#add-cast").on("click", function () {
    if (castMember.character && castMember.name && castMember.pictureUrl) {
      cast.push(castMember);
      myForm.fadeOut();
      $("#add-cast").hide();
      $("#show-crew").show();
      $("input").val("");
      createCastMember(castMember);
      warningMessage.hide();
    } else {
      warningMessage.show();
    }
  });
});
