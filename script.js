numbers.addEventListener('keydown', stopCarret);
numbers.addEventListener('keyup', stopCarret);
numbers.addEventListener('input', stopCarret);
numbers.addEventListener('change', stopCarret);

function stopCarret() {
  /*
  if (numbers.value.length < 5){
    sauce.innerHTML = "Find Muh Sauce"
  }
  if (numbers.value.length >= 5){
    sauce.classList.remove("disabled")
    sauce.classList.remove("btn-outline-primary")
    sauce.classList.add("btn-primary")
    sauce.innerHTML = "Tap Me Senpai!"
  }
  if (numbers.value.length == 6){
    numbers.readOnly = true
    numbers.blur()
    numbers.addEventListener('focus',blurNumbers)
  }
  */
  
  switch(true){
    case numbers.value.length == 0:
      sauce.classList.add("disabled","btn-outline-primary")
      sauce.classList.remove("btn-primary")
      sauce.innerHTML = "Find Muh Sauce"
      break;
    case numbers.value.length > 0 && numbers.value.length < 6:
      sauce.classList.remove("disabled")
      sauce.classList.remove("btn-outline-primary")
      sauce.classList.add("btn-primary")
      sauce.innerHTML = "Tap Me Senpai!"
      break;
    case numbers.value.length == 6:
      numbers.readOnly = true
      blurNumbers()
      numbers.addEventListener('focus',blurNumbers)
      break;
  }
}

function blurNumbers(){
  numbers.blur()
}

function clearBtn(){
  numbers.value=""
  numbers.readOnly = false
  numbers.removeEventListener('focus',blurNumbers)
  sauce.classList.add("disabled","btn-outline-primary")
  sauce.classList.remove("btn-primary")
  sauce.innerHTML = "Find Muh Sauce"
}
