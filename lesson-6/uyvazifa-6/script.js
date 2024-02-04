let  cards = document.querySelector(".cards");
let form = document.querySelector("#form");

let mahsulotlar = JSON.parse(localStorage.getItem("mahsulotlar")) || [];

console.log(mahsulotlar);

form.addEventListener("submit" , function (el) {
    el.preventDefault();
    
    let mahsulot = {
        nomi: el.target[0].value,
        narhi: el.target[1].value,
        rasmi: el.target[2].value,
    };

    let chek = mahsulotlar.find((e) => e.nomi == mahsulot.nomi);

    if(chek){
        alert(`${mahsulot.nomi} - bu mahsulot biznda alla qachon mavjud`);
    }else{
        mahsulotlar.push(mahsulot);
        localStorage.setItem("mahsulotlar", JSON.stringify(mahsulotlar));

        renderData(mahsulotlar);
    }
});

function renderData(data) {
    cards.innerHTML = ""

    data.forEach((el) => {
        let card = document.createElement("div");
        card.classList.add("cards__card");
        card.innerHTML += `
        <img src=${el.rasmi} alt=${el.nomi}>
        <div class="cards__card---titil">
            <h3>
                ${el.nomi}
            </h3>
            <p><span>Narhi:</span> ${el.narhi}</p>

        </div>
        
        `;
        cards.appendChild(card);
    });

}

renderData(mahsulotlar);




