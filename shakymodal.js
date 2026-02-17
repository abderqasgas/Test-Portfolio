const projectA = document.getElementById('project-a');
const projectADialog = document.getElementById('project-a-dialog');
let img = document.getElementById('currPic');

projectA.addEventListener('click', () => {
  projectADialog.showModal();
});

function togglePic(){
    if (img.getAttribute("src") === "./images/shaky-light.png") {
                img.src = "./images/shaky-dark.png";
            } else {
                img.src = "./images/shaky-light.png";
            }
}

projectADialog.addEventListener('click', (event) => {
  if (event.target === projectADialog) {
    projectADialog.close();
  }
});