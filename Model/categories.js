function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function overview() {
    window.location.href = '/View/overview.html';
  }



function pageSpec(p) {
  
    const pp = p.replace(/\s/g, '%')
    window.location.href = '/View/platform.html#'+pp;
    
    
  }
  
  function cat(type) {
    window.location.href = '/View/categories.html#'+type;
    window.location.reload()
  }


function getAll(type) {

    const titleDiv = document.getElementById('titleCat')
    const typee = type

    const t = {
        type: typee
    }
    console.log(type)

    fetch("http://localhost:3000/all", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(t),
  })
  .then(response => response.json())
    .then(response => {
      titleDiv.innerHTML =" "
      Object.values(response).forEach(Element => {
      titleDiv.innerHTML +=  `<div id="titleSpec" class="titleSpec" onclick="pageSpec('${Element.title}')"> ${Element.title}</div>` +"<br>"
    
    })
    
  })
  

  .catch(() => {
      window.alert("Something went wrong!");
  });
  };
  




  

  //takes the endpoint
function pageLoadCat() {
    if (window.location.hash === "#guidelines") {
        getAll('guidelines');
    }
    else if (window.location.hash === "#rules") {
        getAll('rules');
    }
    else if (window.location.hash === "#agreements") {
        getAll('agreements');
    }
}