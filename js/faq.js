let question = document.getElementsByClassName('question');
let answer = document.querySelectorAll('.answer');
let contador = 0;

for(let i = 0; i< question.length; i++)
{
   question[i].addEventListener('click', () =>
   {
      if(contador > 0 && position != i)
      {
         answer[position].classList.remove('is-active');
         answer[position].classList.add('is-not-active');
         position = i;

         answer[i].classList.remove('is-not-active');
         answer[i].classList.add('is-active');
      }

      else 
      {
         if(answer[i].classList.contains('is-active'))
         {
            answer[i].classList.remove('is-active');
            answer[i].classList.add('is-not-active');

            contador = 0
         }
         else 
         {
            answer[i].classList.remove('is-not-active');
            answer[i].classList.add('is-active');
            contador ++;
            position = i;
         }
      }
   });
}