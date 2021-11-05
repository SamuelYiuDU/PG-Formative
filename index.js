function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

document.getElementById('sendform').addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(document.getElementById('text').value)
})

