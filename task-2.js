/*Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:

isParent(parent, child);
isParent(document.body.children[0], document.querySelector('mark'));
// true так как первый див является родительским элементом для mark

isParent(document.querySelector('ul'), document.querySelector('mark'));
// false так как ul НЕ является родительским элементом для mark
Функция принимает только DOM объекты.

Получить список всех ссылок, которые не находятся внутри списка ul

Найти элемент, который находится перед и после списка ul*/

console.log('Задание № 2');


function isParent(parent, child){
    let result = parent.contains(child);
      console.log(result);
   }

isParent(document.body.children[0], document.querySelector('mark'));
isParent(document.querySelector('ul'), document.querySelector('mark'));
   


let alls = document.querySelectorAll('a');


   for (let i = 0; i<=alls.length-1; i++){
    
        if (alls[i] === document.querySelector('ul')){
            
        }else console.log(alls[i]);
   }