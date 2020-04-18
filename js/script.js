

let test = document.getElementById("test");

// Briefly make the list purple when the mouse moves off the
// <ul> element
test.addEventListener("mouseleave", function( event ) {   
  // highlight the mouseleave target
  event.target.style.color = "orange";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 1000);
}, false);

// Briefly make an <li> orange when the mouse moves off of it
test.addEventListener("mouseout", function( event ) {   
  // highlight the mouseout target
  event.target.style.color = "blue";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);


// Function to change the content of t2
function modifyText(new_text) {
    const t2 = document.getElementById("t2");
    t2.firstChild.nodeValue = new_text;    
  }

const el = document.getElementById("outside");
el.addEventListener("click", function(){modifyText("four")}, false)


class c1{
  constructor(){
      this.name='ali'
  }
}


class c2{
  constructor(){
      this.name='atiye'
  }
}

class c3{
  constructor(){
      this.name='soroosh'
  }
}

// let obj1= new c1()
// let obj2= new c2()
// let obj3= new c3()

// let obj4=Object.assign({},obj3)

// console.log(obj1)
// console.log(obj2)
// console.log(obj3)
// console.log(obj4)

let list=[1,2,3,4]
 console.log(list);
 console.dir(list)