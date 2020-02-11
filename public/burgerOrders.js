$(document).ready(function () {
  $.get("/allOrders", function(data) {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        if (data[i].devoured === 1) {
          let burgerOrderEl = $("<h3>").text(data[i].burger_name);
          burgerOrderEl.className = 'yumC';
          $(".yumC").append(burgerOrderEl);
        } else {
          let burgerOrderEl = $("<h3>").text(data[i].burger_name);
          let button = $("<button>");
          button.textContent = "eat it";
          button.attr("name", data[i].burger_name);
          button.attr("class", "eat");
          burgerOrder.append(burgerOrderEl, button)
        }
      }
    });

  let eat = document.getElementsByClassName("eat");
  eat.addEventListener("click", function() {
    axios.put('/update/' + this.getAttribute("name"), function (data) {
        console.log(data);
        window.location.reload();
      });

  });
  
  let burger = document.getElementById('burgerNameEl').value;
  let saveEl = document.getElementById('saveEl');
  saveEl.addEventListener("click", function () {
    console.log(saveEl);
    console.log(burger);
    let saveData = { burger: burger };
    axios.post('/', { data: saveData })
      .then(function (data) {
        console.log(data);
        window.location.reload();
      });
  }
)
});
