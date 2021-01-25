const n = 2
const element = document.getElementById(`element${n}`);
/**Probar si se pueden llamar elementos así */
const question = document.getElementsByClassName('element-question');
const answer = document.getElementById(`answer${n}`);


function showHiddeAnswer(){
    if(answer.style.display != 'block'){
        answer.style.display = 'block';
}else{
    answer.style.display = 'none';
}
}

element.addEventListener('click', showHiddeAnswer);