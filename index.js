let movies = [
  {
    name: "KGF Ch.2",
    des:
      "It follows the assassin Rocky, who after establishing himself as the kingpin of the Kolar Gold Fields, must retain his supremacy over adversaries and government officials, while also coming to terms with his past.",
    image: "images/Kgf.jpg"
  },
  
  {
    name: "RRR",
    des:
      "RRR is an entirely fictitious story incorporating the lives of two real-life Indian revolutionaries, namely Alluri Sitarama Raju and Komaram Bheem, who fought against the British Raj and the Nizam of Hyderabad respectively. Charan plays Rama Raju while Rama Rao plays Komaram Bheem.",
    image: "images/RRR.jpg"
  },
  
  {
    name: "Joker",
    des:
      "A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain. Arthur Fleck works as a clown and is an aspiring stand-up comic. He has mental health issues, part of which involves uncontrollable laughter.",
    image: "images/Joker.jpg"
  },
  
  {
    name: "Runaway 34",
    des:
      "Image result for runaway 34 premiseThe film is inspired by an aviation incident of a Jet Airways flight from Doha to Kochi in 2015. The film stars Ajay Devgn, Amitabh Bachchan, and Rakul Preet Singh, with Boman Irani, Angira Dhar and Aakanksha Singh playing pivotal roles.",
    image: "images/Runaway 34.jpg"
  },
  
  {
    name: "Rockstar",
    des:
      "A  flashback reveals the story of Jordan, whose real name is Janardhan Jakhar a.k.a. JJ, a Jat boy from Delhi. He is studying at Hindu College and dreams of being a rockstar like Jim Morrison, for which he is often laughed at by his friends.",
    image: "images/Rockstar.jpg"
  },
  
  {
    name: "wanda vision",
    des:
      "Wanda basically has a mental breakdown that results in the death of her husband Vision, Hawkeye and a bunch of other people. In the famous House of M storyline on which this show is very loosely based, Wanda creates an alternate reality where Vision and the twins are alive, and they all live together.",
    image: "images/slider 3.png"
  },
  {
    name: "Goadfather",
    des:
      "he aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son. The Godfather 'Don' Vito Corleone is the head of the Corleone mafia family in New York.",
    image: "images/Godfather.jpg"
  },
  {
    name: "83",
    des:
      "The movie details the journey of the victory of the Indian cricket team, led by Kapil Dev, in the 1983 World Cup. On 25 June 1983, the Lord's Cricket Ground witnessed 11 men beat the twice over World Champions West Indies, putting India firmly onto the cricket world stage.",
    image: "images/83.jpg"
  },
  {
    name: "All of us are dead",
    des:
      "The series mostly takes place at a high school in South Korea as a zombie apocalypse suddenly breaks out and threatens the safety of the students. It is based on the Naver webtoon Now at Our School by Joo Dong-geun, which was published between 2009 and 2011.",
    image: "images/Dead.jpg"
  },
  {
    name: "Money Heist",
    des:
      "A criminal mastermind who goes by 'The Professor' has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain. To help him carry out the ambitious plan, he recruits eight people with certain abilities and who have nothing to lose.",
    image: "images/Money Heist 2.jpg"
  },
  {
    name: "Raanjhana",
    des:
      "'Raanjhana' is about a small-town boy needs to break through the class divide to gain acceptance from his childhood sweetheart who is in love with big city ideals. It is a love story that has a Shakespearean touch and is mounted on a lavish scale.",
    image: "images/Raanjhana.jpg"
  },
  {
    name: "The Falcon",
    des:
      "Six months after being handed the mantle of Captain America at the end of Avengers: Endgame (2019), Sam Wilson teams up with Bucky Barnes on a global mission to stop an anti-patriotism group, the Flag Smashers, who are enhanced with a recreation of the Super Soldier Serum",
    image: "images/slider 2.png"
  }
  
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; //Tracking Current Slide

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }
  //DOM elememts
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);
  //Setting up images
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  //setting elements classnames
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 4500);

//video cards

const videoCards = [...document.querySelectorAll(".video-card")];
videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

//card sliders
