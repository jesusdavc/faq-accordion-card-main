/*Call the elements */
const element = document.getElementsByClassName('faq-answers_element');



/**For each element that have the class apply a Event Listener */

for(let i=0; i<=element.length; i++){
    element[i].addEventListener('click', () => {
        
        const answer = document.getElementsByClassName('element-answer');
        const question = document.getElementsByClassName('element-question');
        const arrow_button = document.getElementsByClassName('arrow-button')
        if (answer[i].style.display != 'block'){
                answer[i].style.display = 'block';
                question[i].style.fontWeight = 'bold';
                arrow_button[i].style.transform = 'rotate(0.5turn)';
        }else{
            answer[i].style.display = 'none';
            question[i].style.fontWeight = 'normal'
            arrow_button[i].style.transform = 'rotate(0turn)';
            }
    
        }
    );
}




/**  Funtion that determine what show and what hide*/


