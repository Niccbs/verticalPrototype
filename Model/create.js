function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

function overview() {
    location.href= "/View/overview.html"   
}

function cat(type) {
  window.location.href = '/View/categories.html#'+type;


}

document.addEventListener("DOMContentLoaded", () => {
    var form = document.getElementById("create")  

      form.addEventListener('submit', (e) => {
        e.preventDefault()
  


          const title = document.getElementById("title").value;
          const type = document.getElementById("type").value;
          const content = document.getElementById("content").value;
          

          const page = {
              title: title,
              type: type,
              content: content
              
          };
          
          
          fetch("http://localhost:3000/create", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(page),
          })
          
              .then(res => res.json())
              .catch(() => {
                

                window.alert("This title is already taken");
                document.location=document.location
                console.log
                }
              )
              .then(() => {
                
                  window.alert("Your page was sucessfully uploaded")
                location.href = "/View/overview.html";
                 }

              );
      });     
  
  });

  