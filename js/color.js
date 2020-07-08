$(document).ready(function(){
  $.cssHooks.backgroundColor = {
    get: function(elem) {
      if (elem.currentStyle)
        var bg = elem.currentStyle["backgroundColor"];
      else if (window.getComputedStyle)
        var bg = document.defaultView.getComputedStyle(elem,
          null).getPropertyValue("background-color");
      if (bg.search("rgb") === -1)
        return bg;
      else {
        bg = bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        function hex(x) {
          return ("0" + parseInt(x).toString(16)).slice(-2);
        }
        return "#" + hex(bg[1]) + hex(bg[2]) + hex(bg[3]);
      }
    }
  };

  var colors = {};
  $('div.colors > div').each(function(i, obj) {
    colors[obj.className] = $('div.' + obj.className).css('background-color');
  });
  var nearest = nearestColor.from(colors);

  $(".colors > div").click(function() {
    var bgColor = $(this).css('background-color');
    if (bgColor === '#dddddd') {
      alert ("No color set.")
    }
    else {
      $(".compare-color").css("background-color", bgColor);
      $(".compare-color-select input").val(bgColor);
      $(".compare-color-select .info").html($(this)[0].className.substring(3));
      selectSquare($(this)[0].className);
    }
  });
  $("input.pick").on('keyup', function() {
    if (isColor($(this).val())) {
      $(".original-color").css("background-color", $(this).val());
      $(".original-color-select .info").html("Sample color");
      $(".compare-color-select input").val(nearest($(this).val()).value);
      $(".compare-color").css("background-color", nearest($(this).val()).value);
      $(".compare-color-select .info").html(nearest($(this).val()).name.substring(3));
      selectSquare(nearest($(this).val()).name);
      var family = document.getElementById($('.' + nearest($(this).val()).name).closest('div.color-family').attr('id'));
      family.scrollIntoView();
    }
    else {
      $(".original-color").css("background-color", "#fff");
      $(".original-color-select .info").html("");
      $(".compare-color-select input").val("");
      $(".compare-color").css("background-color", "#fff");
      $(".compare-color-select .info").html("");
      selectSquare("-");
    }
  });


  Sortable.create(colorFamilies, {
    animation: 150
  });
});

function selectSquare(sq) {
  $('.selected').removeClass("selected");
  $('.' + sq).addClass("selected");
}

function isColor(strColor){
  var s = new Option().style;
  s.color = strColor;
  return s.color !== '';
}
