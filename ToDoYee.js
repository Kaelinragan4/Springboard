document.addEventListener("DOMContentLoaded", function() {
    let thingForm = document.getElementById("newThingForm");
    let toDoStuff = document.getElementById("toDoStuff");

    thingForm.addEventListener("submit", function(event) {
      event.preventDefault();

      let removeButton = document.createElement("button");
      removeButton.innerText = "Delete";

      let newThing = document.createElement("li");
      newThing.innerText = document.getElementById("task").value;

      toDoStuff.appendChild(newThing);
      newThing.appendChild(removeButton);

      thingForm.reset();

    });
   
    toDoStuff.addEventListener("click", function(event) {
      const targetTagToLowerCase = event.target.tagName.toLowerCase();
      if (targetTagToLowerCase === "li") {
        event.target.style.textDecoration = "line-through";
      } else if (targetTagToLowerCase === "button") {
        event.target.parentNode.remove();
      }
    });
  });