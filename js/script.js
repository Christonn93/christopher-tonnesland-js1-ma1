// Question 1

let cat = {
  complain: function () {
    console.log("Meow!");
  },
};

// Question 2

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.className = "subheading";

/* 
Reference used to solve this Question: 
https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
*/

// Question 5

const paragraphs = document.querySelectorAll("p");
paragraphs.forEach((para) => {
  para.style.color = "red";
});

// Question 6

const resultsContainer = document.querySelector(".results");
resultsContainer.style.backgroundColor = "yellow";
resultsContainer.innerHTML = "<p>New paragraph</p>";

// Question 7

const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

function listElement(list) {
  for (var i = 0; i < cats.length; i++) {
    let names = cats[i].name;
    console.log(names);
  }
}

listElement();

// Question 8
function createCats(cats) {
  for (let q = 0; q < cats.length; q++) {
    let catName = cats[q].name;
    let catAge = cats[q].age;
    const name = (document.createElement("h5").innerHTML = catName);
    const age = (document.createElement("p").innerHTML = catAge);
    const missingAge = "Age unknown";

    if (!catAge) {
      let divContainer = (document.querySelector(".cat-container").innerHTML += `
            <h5>${name}</h5>
            <p>${missingAge}</p>
            `);
    } else {
      let divContainer = (document.querySelector(".cat-container").innerHTML += `
            <h5>${name}</h5>
            <p>${age}</p>
            `);
    }
  }
}

createCats(cats);
