// Question 1

let cat = {
    complain: function () {
        console.log("Meow!");
    }
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

const cats = [{
    name: "Blob",
    age: 10
},
{
    name: "Harold",
},
{
    name: "Blurt",
    age: 21
}
];

function listElement(list){
    for(var i = 0; i < cats.length; i++){
        let catName = cats[i].name;
        console.log(catName);
    }
}

listElement();


// Question 8

/* const catAge = "Age unknown";
const divContainer = document.createElement("div");

function createCats(cats){

        for(var i = 0; i < list.length; i++){

            containerHeader = cats[i].name;
            var containerHeader = document.createElement("h5");
            textItem = cats[i].age;
            var textItem = document.createElement("p");
    }

    cats.forEach((arrayList) => {
    })

}

createCats(); */