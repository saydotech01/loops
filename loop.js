// loop is a continous repetition of sequenceqs of instructions until a certain condition is met
// loop stages
// 1. initialization
// 2. condition
// 3. increment/decrement
// 4. body of the loop

// for loop
// for (let i = 1; i <= 5; i +=3) {
//     console.log(i);
// }

// for (let i = 5; i >= 1; i--) {
//     console.log(i);
// }

// while loop
// let i = 1;
// while (i <= 5) {
//     let multiply = `${i} X 2 = ${i * 2}`;
//     i++;
//     console.log(multiply);
// }

// assignment loop
// 1. generate numbers from 5-10
/**
 * add 5 to each number
 * show the output in the console
 * 
 * expected output
 * 5 + 5 = 10
 * 6 + 5 = 11
 * 7 + 5 = 12
 * 8 + 5 = 13
 * 9 + 5 = 14
 * 10 + 5 = 15
 */

// solution to generate numbers from 5-
let html_static = document.getElementById('table');
let container = document.createElement('table');  
container.setAttribute('border', '1');

container.innerHTML = `<caption>Table of Addition</caption>
                            <thead>
                                <tr>
                                    <th>Number</th>         
                                    <th>Operation</th>      
                                    <th>Number</th>
                                    <th>Result</th>      
                                </tr>   
                            </thead>
                             <tbody>
                                  <tr>`
                                 

for (let i = 5; i <= 10; i++) {
    let add = `${i} + 5 = ${i + 5}`;

    container.innerHTML += `
                                    <td>${i}</td>   
                                    <td> + </td>
                                    <td>5</td>
                                    <td>${i + 5}</td> `
}
 container.innerHTML += `</tr>
                            </tbody> `
                            
html_static.appendChild(container);     
console.log(container);
        