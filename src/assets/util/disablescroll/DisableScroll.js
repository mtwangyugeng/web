var tempsy = 0;
function according(e) {
    e.preventDefault();
    tempsy = window.scrollY
    // console.log(tempsy)
}
document.addEventListener( "scroll",according,false);
function gotted(event){
  console.log( "scrolled");
  event.preventDefault(); 
  event.stopPropagation();
  window.scrollTo({
    top: tempsy,
    left: 0,
  })

  return false;
}

export function disableScroll() {
  document.removeEventListener('scroll', according, false);
  document.addEventListener( "scroll", gotted, false);
}

// call this to Enable
export function enableScroll() {
  document.addEventListener( "scroll",according,false);
  document.removeEventListener( "scroll", gotted, false);
}