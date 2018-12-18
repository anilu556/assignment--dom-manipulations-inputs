document.querySelector("#reset-field-btn").addEventListener('click', function(){
      // TASK #1
     var txt = document.querySelector('.ex1-text');
    txt.value = "";
  })


document.querySelector("#validate-field-btn").addEventListener('click',function(){
  // TASK #2

  var text = document.querySelector('.ex2-text');
  var msj = document.querySelector(".flash-message");
  var letters = text.value.length;

  if ( letters < 6){
    msj.textContent = "Input not long enough";
    msj.classList.add("invalid");
    msj.classList.remove("valid");
  } else {
    msj.textContent = "Entry is valid";
    msj.classList.add("valid");
    msj.classList.remove("invalid");
  }
})


document.querySelector("#calculate-items-btn").addEventListener('click', function(){
  // TASK #3

  var options = document.querySelectorAll('.item-input');
  var total = 0;
  var result = document.querySelector('.sum-total');

  for ( i = 0; i < options.length; i++){
    var item = options[i];

  if (item.checked === true)
    total = total + parseInt(item.value)
  }
    result.textContent = "$" + total;

});


document.querySelector("#select-to-show-more-btn").addEventListener('click', function(){
  // TASK #4
  var options = document.querySelectorAll("option");
  var selection = document.querySelector(".selection");
  var imgBox = document.querySelector(".img-box");
  var model = document.querySelector(".model");
  var msrp = document.querySelector(".msrp");
  var mpg = document.querySelector(".mpg");
  var edmunds = document.querySelector(".edmunds");

  options.forEach(function(option){
    if(selection.selectedIndex === option.index){
      imgBox.innerHTML = "<img src='images/" + option.dataset.img + "'></img>";
      model.textContent = option.value;
      msrp.textContent = option.dataset.msrp;
      mpg.textContent = option.dataset.mpg;
      edmunds.textContent = option.dataset.edmunds;
    }
  });
});
