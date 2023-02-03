const aboutMeContent = document.querySelectorAll(".about-content");
const aboutMeCatagory = document.querySelectorAll(".about-me-catagory");

// Default selected about me catagory at index 0
let selectedIndex = 0;
aboutMeContent[selectedIndex].classList.remove("hidden");
aboutMeCatagory[selectedIndex].classList.add("active");

// Find max content height
let maxHeight = 0;
aboutMeContent.forEach((content) => {
  console.log("Scroll height", content.scrollHeight);
  maxHeight = Math.max(maxHeight, content.scrollHeight);
});
console.log(maxHeight);
console.dir(document.querySelector(".about-contents"));

document.querySelector(".about-contents").style.minHeight =
  maxHeight.toString() + "px";
// Click event handler when a catagory is clicked
aboutMeCatagory.forEach((catagory, index) => {
  catagory.addEventListener("click", () => {
    if (index === selectedIndex) {
      return;
    }
    console.log(index);
    aboutMeContent[selectedIndex].classList.add("hidden");
    aboutMeCatagory[selectedIndex].classList.remove("active");

    selectedIndex = index;
    aboutMeContent[selectedIndex].classList.remove("hidden");
    aboutMeCatagory[selectedIndex].classList.add("active");
  });
});
