let question = document.getElementsByClassName('question');
let answer = document.querySelectorAll('.answer');
let contador = 0;

for(let i = 0; i< question.length; i++)
{
   question[i].addEventListener('click', () =>
   {
      if(contador > 0 && position != i)
      {
         hideShow(i, position);
         showHide(i);
         position = i;
      }

      else 
      {
         if(answer[i].classList.contains('is-active'))
         {
            hideShow(i, position);            
            contador = 0
         }
         else 
         {
            showHide(i);
            contador ++;
            position = i;
         }
      }
   });
}

function hideShow (a, b)
{
   question[a].classList.remove('question-answer');
   answer[b].classList.remove('is-active');
   answer[b].classList.add('is-not-active');
}

function showHide (a)
{
   question[a].classList.add('question-answer');
   answer[a].classList.add('is-active');
   answer[a].classList.remove('is-not-active');
}