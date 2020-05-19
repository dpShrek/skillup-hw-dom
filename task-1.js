/* 

Зная структуру html, с помощью изученных методов получить (в консоль):

head
body
все дочерние элементы body и вывести их вконсоль.
первый div и все его дочерние узлы
вывести все дочерние узлы в консоль
вывести в консоль все дочерние узлы, кроме первого и последнего
Для навигации по DOM использовать методы, которые возвращают только элементы

*/

let heads = document.querySelector('head');

let bodys = document.querySelector('body');

let divFirst = document.body.firstElementChild;

let ghg = function () {      
    if (document.body.children) {
        const children = document.body.children;
      
        for (var i = 1; i < children.length - 1; ++i) {
          console.log(children[i])
        }
      }
    };

console.log(heads);

console.log(bodys);

console.log(divFirst);

console.log(divFirst.childNodes);

ghg();


