
      fetch("https://api.npoint.io/7bbd3a59c401f616bb89")
        .then(function (response) {
          return response.json();
        })
        .then(function ({ places }) {
          let valToAdd = "";
          for (let i = 0; i < places.length; i++) {
            valToAdd +=
              places[i].info + "=>" + places[i].name + " " + places[i].image+"</br>";
          }
          const ele = document.getElementById("data");
          ele.innerHTML = valToAdd;
        })
        .catch(function (err) {
          console.log(err);
        });