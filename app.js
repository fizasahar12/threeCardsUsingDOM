var container = document.querySelector(".container");
var card = document.querySelectorAll(".card");

// var array = [
//   {
//     title: "asdsad",
//     desc: "",
//     img: "",
//     link: "/",
//   },
//   {
//     title: "",
//     desc: "",
//     img: "",
//     link: "/",
//   },
//   {
//     title: "",
//     desc: "",
//     img: "",
//     link: "/",
//   },
// ];

//   let template = `<div class="card one">
//             <img class="icon1" src="./images/icon-sedans.svg" alt="sedan" />
//             <h1>${array[i].title}</h1>
//             <p>
//              ${array[i].desc}
//             </p>
//             <button>Learn More</button>
//           </div>
// `;

//   container.innerHTML = container.innerHTML + template;
for (let i = 0; i < card.length; i++) {
  let _card = card[i];

  card[i].style.padding = "35px 25px";
  card[i].style.flex = "0.7";
  card[i].querySelector("h1").style.marginBottom = "20px";
  card[i].querySelector("h1").style.color = "hsl(0, 0%, 95%)";
  card[i].querySelector("h1").classList.add("font-Big");
  card[i].querySelector("p").style.marginBottom = "30px";
  card[i].querySelector("p").style.color = "hsla(0, 0%, 100%, 0.75)";
  card[i].querySelector("p").style.fontWeight = "400";
  card[i].querySelector("p").style.lineHeight = "20px";
  card[i].querySelector("p").style.fontSize = "12px";
  var button = card[i].querySelector("button");
  button.classList.add("Button");
  // button.className = "Button";

  if (card[i].classList.contains("one")) {
    let _button = card[i].querySelector("button");
    _card.style.backgroundColor = "hsl(31, 77%, 52%)";
    _button.style.color = "hsl(31, 77%, 52%)";

    _button.addEventListener("mouseover", () => {
      _button.style.backgroundColor = "hsl(31, 77%, 52%)";
      _button.style.color = "white";
      _button.style.border = "hsl(0, 0%, 95%)";
    });
    _button.addEventListener("mouseleave", () => {
      _button.style.backgroundColor = "hsl(0, 0%, 95%)";
      _button.style.color = "hsl(31, 77%, 52%)";
    });
  }
  if (card[i].classList.contains("two")) {
    _card.style.backgroundColor = "hsl(184, 100%, 22%)";
    _card.querySelector("button").style.color = "hsl(184, 100%, 22%)";
  }
  if (card[i].classList.contains("three")) {
    _card.style.backgroundColor = "hsl(179, 100%, 13%)";
    _card.querySelector("button").style.color = "hsl(179, 100%, 13%)";
  }
}

var media = () => {
  let q = matchMedia("(max - width: 728px)");
  if (q.matches) {
    var a = document.querySelector(".container");
    a.style.flexDirection = "column";
  } else {
    var a = document.querySelector(".container");
    a.style.flexDirection = "row";
  }
};
console.log(media);
onload = media;
onresize = media;
