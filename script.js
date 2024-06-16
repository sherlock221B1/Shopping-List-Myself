const inputTag = document.querySelector(".input");
const listContainerTag = document.querySelector(".listContainer");

let count = 0;
inputTag.addEventListener("change", (event) => {
  count += 1;

  const listTag = document.createElement("div");
  listTag.classList.add("listTag");
  const product = `${count}. ${event.target.value}`;
  listTag.append(product);
  listContainerTag.append(listTag);

  isDone = false;
  listTag.addEventListener("click", () => {
    if (!isDone) {
      listTag.classList.add("doneList");
      isDone = true;
    } else {
      listTag.classList.remove("doneList");
      isDone = false;
    }
  });

  event.target.value = "";
});
