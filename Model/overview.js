function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function create() {
    location.href="/View/create.html"     
 }
 

 //category type
 function cat(type) {
  window.location.href = '/View/categories.html#'+type;


}