document.getElementById('searchform').style.display = 'none';

document.getElementById('cartform').style.display = 'none';



document.getElementById("boton_search").onclick = function() {
   
   displaying = document.getElementById("searchform").style.display;
      if(displaying == "block") {
         //alert('entro 1');
         document.getElementById('searchform').style.display = 'none';
      }else{
         //alert('entro 2');
         document.getElementById('searchform').style.display = 'block';
      }

};



document.getElementById("SideCartToggle").onclick = function() {
   
   displaying = document.getElementById("cartform").style.display;
      if(displaying == "block") {
         //alert('entro 1');
         document.getElementById('cartform').style.display = 'none';
      }else{
         //alert('entro 2');
         document.getElementById('cartform').style.display = 'block';
      }

};


document.getElementById("side-cart__button--close").onclick = function() {
   var cartform1 = document.getElementById ("cartform");

   cartform1.style.display = 'none';
};


document.getElementById("ForgotPasswordLink").onclick = function() {

   document.getElementById("forgot-password").classList.add('forgot-password--active');

};

document.getElementById("ForgotPasswordCancel").onclick = function() {

   document.getElementById("forgot-password").classList.remove('forgot-password--active');
};