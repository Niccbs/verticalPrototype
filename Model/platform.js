function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function overview() {
    window.location.href = '/View/overview.html';
  }
  
  function cat(type) {
    window.location.href = '/View/categories.html#'+type;
  }


  function getPage(page) {
    const title = document.getElementById('title')
    const content = document.getElementById('content')

    const thepage = page;
      const ob = {
        page: thepage,
      };

    fetch("http://localhost:3000/page", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      }, body: JSON.stringify(ob),
  })
  .then(response => response.json())
    .then(response => {
      content.innerHTML =" "
      Object.values(response).forEach(Element => {
      content.innerHTML += Element.content; title.innerHTML += Element.title
    
    })
    
  })
  

  .catch(() => {
      window.alert("Something went wrong!");
  });
  };
  

  //loader den side der står i endpointet
  function pageLoad() {
    const hashP = window.location.hash
    const p = hashP.substring(1)
    const pp = p.replace(/%/g,' ')
        getPage(pp);
    }

  