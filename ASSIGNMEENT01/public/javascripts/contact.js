$(document).ready(function(){
    $('.contact-form div').css('color','#fff');
    $('.contact-form div').css('font-size','20px');
    $('.submit').on({
      mouseenter: function(){
        $(this).css("background-color", "#FFBB99");
        $(this).css("color", "#000");
      },
      mouseleave: function(){
        $(this).css("background-color", "transparent");
        $(this).css("color", "#fff");
      }
    });
    });
    function formOver(obj) {
      obj.innerHTML = "FILL THE CONTACT FORM";
      obj.style.color = "#fff";
    }
    function formOut(obj) {
      obj.innerHTML = "CONTACT ME";
      obj.style.color = "#fff";
    }
    function changeText(obj) {
      obj.innerHTML = "Response Submitted";
      obj.style.color = "#fff";
    }
    