function addList() {
  var item = document.getElementById("input").value;
  var text = document.createTextNode(item);
  var newItem = document.createElement("li");

  if (item === "") {
    alert("Pastikan form terisi!")
  } else {
    newItem.appendChild(text);
    document.getElementById("toDoList").appendChild(newItem);
    document.getElementById("input").value = ''
  }
}

function removeListBawah() {
  var item = document.getElementById("toDoList")
  var panjang = document.getElementById("toDoList").childNodes.length

  item.removeChild(item.childNodes[panjang - 1]);
}

function removeListAtas() {
  var item = document.getElementById("toDoList")

  item.removeChild(item.childNodes[0]);
}

function reload() {
  location.reload()
}
