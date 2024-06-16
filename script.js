const inputTag = document.querySelector(".input");
const listContainerTag = document.querySelector(".listContainer");

let productArray = [];
inputTag.addEventListener("change", (event) => {
  productArray.push(event.target.value); // add the entered product to the array

  const updateTheList = () => {
    listContainerTag.innerHTML = ""; // remove old list and start new

    for (let i = 0; i < productArray.length; i++) {
      const productTag = document.createElement("div"); //create productTag
      productTag.classList.add("productTag"); // add class list (productTag)
      const product = `${i + 1}. ${productArray[i]}`; // make product
      productTag.append(product); // append product to productTag

      //const binContainerTag = document.createElement("div");// create binContainerTag
      // <i class="fa-solid fa-trash-can"></i>
      const binTag = document.createElement("i");
      binTag.classList.add("fa-solid", "fa-trash-can");
      //binContainerTag.append(binTag); // append binTag to binContaierTag

      const listTag = document.createElement("div");
      listTag.classList.add("listTag"); // add class list (listTag)
      listTag.append(productTag, binTag); // append productTag and binContainerTag to listTag

      listContainerTag.append(listTag); // append listTag to listContainerTag

      isDone = false;
      // linethrough the done product
      listTag.addEventListener("click", () => {
        if (!isDone) {
          productTag.classList.add("doneList");
          isDone = true;
        } else {
          productTag.classList.remove("doneList");
          isDone = false;
        }
      });

      // remove the unwanted product
      binTag.addEventListener("click", () => {
        productArray.splice(i, 1);
        updateTheList(); // remove the unwanted product and make new list
      });
    }
  };

  updateTheList();
  event.target.value = "";
});
