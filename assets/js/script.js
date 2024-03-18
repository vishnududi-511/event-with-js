let row = document.querySelector(".row");
row.classList.add( "d-flex", "justify-content-center");
let card_data = [
  {
    cardimage: `./assets/images/crad-img.png`,
    cardheading: `Lorem ipsum dolar sit de`,
    svgbox: [
      `./assets/images/svg/calender.svg`,
      `./assets/images/svg/location.svg`,
      `./assets/images/svg/team.svg`,
    ],
    btn: `Go Check`,
  }, {
    cardimage: `./assets/images/crad-img.png`,
    cardheading: `Lorem ipsum dolar sit de`,
    svgbox: [
      `./assets/images/svg/calender.svg`,
      `./assets/images/svg/location.svg`,
      `./assets/images/svg/team.svg`,
    ],
    btn: `Go Check`,
  }, {
    cardimage: `./assets/images/crad-img.png`,
    cardheading: `Lorem ipsum dolar sit de`,
    svgbox: [
      `./assets/images/svg/calender.svg`,
      `./assets/images/svg/location.svg`,
      `./assets/images/svg/team.svg`,
    ],
    btn: `Go Check`,
  }, {
    cardimage: `./assets/images/crad-img.png`,
    cardheading: `Lorem ipsum dolar sit de`,
    svgbox: [
      `./assets/images/svg/calender.svg`,
      `./assets/images/svg/location.svg`,
      `./assets/images/svg/team.svg`,
    ],
    btn: `Go Check`,
  }, {
    cardimage: `./assets/images/crad-img.png`,
    cardheading: `Lorem ipsum dolar sit de`,
    svgbox: [
      `./assets/images/svg/calender.svg`,
      `./assets/images/svg/location.svg`,
      `./assets/images/svg/team.svg`,
    ],
    btn: `Go Check`,
  }, {
    cardimage: `./assets/images/crad-img.png`,
    cardheading: `Lorem ipsum dolar sit de`,
    svgbox: [
      `./assets/images/svg/calender.svg`,
      `./assets/images/svg/location.svg`,
      `./assets/images/svg/team.svg`,
    ],
    btn: `Go Check`,
  }, {
    cardimage: `./assets/images/crad-img.png`,
    cardheading: `Lorem ipsum dolar sit de`,
    svgbox: [
      `./assets/images/svg/calender.svg`,
      `./assets/images/svg/location.svg`,
      `./assets/images/svg/team.svg`,
    ],
    btn: `Go Check`,
  },
   {
    cardimage: `./assets/images/crad-img.png`,
    cardheading: `Lorem ipsum dolar sit de`,
    svgbox: [
      `./assets/images/svg/calender.svg`,
      `./assets/images/svg/location.svg`,
      `./assets/images/svg/team.svg`,
    ],
    btn: `Go Check`,
  },
    {
    cardimage: `./assets/images/crad-img.png`,
    cardheading: `Lorem ipsum dolar sit de`,
    svgbox: [
      `./assets/images/svg/calender.svg`,
      `./assets/images/svg/location.svg`,
      `./assets/images/svg/team.svg`,
    ],
    btn: `Go Check`,
  },
];

for (let i = 0; i < card_data.length; i++) {
    const cardColumn = document.createElement("div");
  cardColumn.classList.add("col-lg-4", "col-md-6", "col-12", "py-3");
  const card = document.createElement("div");
  card.classList.add(
    "card-box",
    "d-flex",
    "flex-column",
    "justify-content-between"
  );
  card.innerHTML = `
        <img class="card-img w-100" src="${card_data[i].cardimage}" alt="pary-imge">
        <h3 class="font-1">${card_data[i].cardheading}</h3>
        <div class="mt-20">
             <div class="d-flex align-items-center gap-10">
                <img class="cursor-pointer" src="${card_data[i].svgbox[0]}" alt="pary-imge">
                <h4 class="font-2">10/02/2022</h4>
            </div>
             <div class="d-flex align-items-center gap-10 mt-1 ">
                <img class="cursor-pointer" src="${card_data[i].svgbox[1]}" alt="pary-imge">
                <h4 class="font-2">Mumbai</h4>
            </div>
             <div class="d-flex align-items-center gap-10 mt-1">
                <img class="cursor-pointer" src="${card_data[i].svgbox[2]}" alt="pary-imge">
                <h4 class="font-2">1,080</h4>
            </div>
        </div>
        <div class="d-flex align-items-center justify-content-start mt-2">
        <button class="card-btn ">${card_data[i].btn}</button>
        </div>
    `;
  cardColumn.appendChild(card);
  row.appendChild(cardColumn);
}
