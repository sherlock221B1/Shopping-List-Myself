const inputTag = document.querySelector(".input");
const listContainerTag = document.querySelector(".listContainer");

let count = 0;
inputTag.addEventListener("change", (event) => {
  count += 1;

  const productTag = document.createElement("div");  //create productTag
  productTag.classList.add("productTag"); // add class list (productTag)
  const product = `${count}. ${event.target.value}`; // make product
  productTag.append(product); // append product to productTag

  //const binContainerTag = document.createElement("div");// create binContainerTag
  // <i class="fa-solid fa-trash-can"></i>
  const binTag = document.createElement("i");
  binTag.classList.add("fa-solid","fa-trash-can");
  //binContainerTag.append(binTag); // append binTag to binContaierTag

  const listTag = document.createElement("div");
  listTag.classList.add("listTag") // add class list (listTag)
  listTag.append(productTag,binTag); // append productTag and binContainerTag to listTag

  listContainerTag.append(listTag); // append listTag to listContainerTag

  isDone = false;
  listTag.addEventListener("click", () => {
    if (!isDone) {
      productTag.classList.add("doneList");
      isDone = true;
    } else {
      productTag.classList.remove("doneList");
      isDone = false;
    }
  });

  event.target.value = "";
});
