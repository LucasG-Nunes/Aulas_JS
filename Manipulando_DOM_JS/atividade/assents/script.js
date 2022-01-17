const meuElement = document.getElementById("mode-selector");
const meuBody= document.getElementsByTagName("body")[0];
const meuh1 = document.getElementById("page-title");
const meufooter = document.getElementsByTagName('footer')[0];

function changeMode(){
    changeclasses();
    changeText();

}

function changeclasses(){
    meuBody.classList.toggle('dark-mode');
    meuh1.classList.toggle('dark-mode');
    meufooter.classList.toggle('dark-mode');
    meuElement.classList.toggle('dark-mode');
}

function changeText(){
    const darkMode = "Dark Mode"
    const lightMode = "Light Mode"

    if(meuBody.classList.contains("dark-mode")){
        meuElement.innerHTML = (lightMode + "On");
        meuh1.innerHTML = (darkMode + " On ");
        return;
    }
    meuElement.innerHTML = (darkMode);
    meuh1.innerHTML = (lightMode );
}

meuElement.addEventListener("click",changeMode);