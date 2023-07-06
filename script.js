const container = document.getElementById("card")
const catButton = document.getElementsByClassName("btn btn-primary my-2")[0]
const dogButton = document.getElementsByClassName("btn btn-secondary my-2")[0]

let data

const cat = function () {
  fetch("https://api.pexels.com/v1/search?query=kittens", {
    headers: {
      Authorization: "QroDXtrhY7fBMgS9XdXknQrJa72EhVtoLPps7QF3lmc9NCd6UkP9vcIV",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        if (res.status === 404) {
          throw new Error("Non trovato")
        } else if (res.status === 500) {
          throw new Error("Errore interno del server")
        } else {
          throw new Error("Errore nella chiamata API")
        }
      }
    })
    .then((data) => {
      catButton.addEventListener("click", function () {
        data.photos.forEach((element) => {
          const card = document.createElement("div")
          card.classList.add("col-md-4")

          card.innerHTML = `
            <div class="card mb-4 shadow-sm">
              <img src="${element.src.large}" class="card-img-top" alt="image" style="height: 25em"/>
              <div class="card-body">
                <h5 class="card-title">Lorem Ipsum</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-secondary">
                      Hide
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      Edit
                    </button>
                  </div>
                  <small class="text-muted">${element.id}</small>
                </div>
              </div>
            </div>
          `
          container.appendChild(card)

          let hiddenButton = card.querySelectorAll(".btn-secondary")
          hiddenButton.forEach((button) => {
            button.addEventListener("click", function () {
              card.classList.add("d-none")
            })
          })
        })
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

const dog = function () {
  fetch("https://api.pexels.com/v1/search?query=dog", {
    headers: {
      Authorization: "QroDXtrhY7fBMgS9XdXknQrJa72EhVtoLPps7QF3lmc9NCd6UkP9vcIV",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        if (res.status === 404) {
          throw new Error("Non trovato")
        } else if (res.status === 500) {
          throw new Error("Errore interno del server")
        } else {
          throw new Error("Errore nella chiamata API")
        }
      }
    })
    .then((data) => {
      dogButton.addEventListener("click", function () {
        data.photos.forEach((element) => {
          const card = document.createElement("div")
          card.classList.add("col-md-4")

          card.innerHTML = `
            <div class="card mb-4 shadow-sm">
              <img src="${element.src.large}" class="card-img-top" alt="image" style="height: 25em"/>
              <div class="card-body">
                <h5 class="card-title">Lorem Ipsum</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-secondary">
                      Hide
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      Edit
                    </button>
                  </div>
                  <small class="text-muted">${element.id}</small>
                </div>
              </div>
            </div>
          `
          container.appendChild(card)

          let hiddenButton = card.querySelectorAll(".btn-secondary")
          hiddenButton.forEach((button) => {
            button.addEventListener("click", function () {
              card.classList.add("d-none")
            })
          })
        })
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

catButton.addEventListener("click", function () {
  container.innerHTML = ""
  cat()
})

dogButton.addEventListener("click", function () {
  container.innerHTML = ""
  dog()
})
