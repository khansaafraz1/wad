function changeClass() {
  let element = document.querySelector(".Class");
  console.log("class name:", element.className);
  element.className = "newClass";
  element.textContent = "I am in CS-4";
  console.log("New class name:", element.className);
}
