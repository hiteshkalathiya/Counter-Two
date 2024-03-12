// let maxcount = document.querySelector("#count").innerHTML
// let maxcount2 = document.querySelector("#count2").innerHTML
// let maxcount3 = document.querySelector("#count3").innerHTML
// let maxcount4 = document.querySelector("#count4").innerHTML

// let count = 0;
// let id = setInterval(() => {
//     count += 1;
//     document.querySelector("#count").innerHTML = count;
//     if (count == maxcount) {
//         clearInterval(id);
//     }

// }, 100)

// setTimeout(() => {
//     let count2 = 0;
//     let id2 = setInterval(() => {
//         count2 += 1;
//         document.querySelector("#count2").innerHTML = count2;
//         if (count2 == maxcount2) {
//             clearInterval(id2);
//         }
//     }, 100);
// }, 2000);

// setTimeout(() => {
//     let count3 = 0;
//     let id3 = setInterval(() => {
//         count3 += 1;
//         document.querySelector("#count3").innerHTML = count3;
//         if (count3 == maxcount3) {
//             clearInterval(id3);
//         }

//     }, 100)
// }, 4000);

// setTimeout(() => {
//     let count4 = 0;
//     let id4 = setInterval(() => {
//         count4 += 1;
//         document.querySelector("#count4").innerHTML = count4;
//         if (count4 == maxcount4) {
//             clearInterval(id4);
//         }

//     }, 100)
// }, 7000);




// let maxcount = +document.querySelector("#count").innerHTML;
// let maxcount2 = +document.querySelector("#count2").innerHTML;
// let maxcount3 = +document.querySelector("#count3").innerHTML;
// let maxcount4 = +document.querySelector("#count4").innerHTML;

// let count = 0;
// let id = setInterval(() => {
//     count += 1;
//     document.querySelector("#count").innerHTML = count;
//     if (count == maxcount) {
//         clearInterval(id);
//     }

// }, 100)


// setTimeout(() => {
//     let count2 = 0;
//     let id2 = setInterval(() => {
//         count2 += 1;
//         document.querySelector("#count2").innerHTML = count2;
//         if (count2 == maxcount2) {
//             clearInterval(id2);
//         }
//     }, 100);
// }, 2000);


// setTimeout(() => {
//     let count3 = 0;
//     let id3 = setInterval(() => {
//         count3 += 1;
//         document.querySelector("#count3").innerHTML = count3;
//         if (count3 == maxcount3) {
//             clearInterval(id3);
//         }

//     }, 100)
// }, 4000);


// setTimeout(() => {
//     let count4 = 0;
//     let id4 = setInterval(() => {
//         count4 += 1;
//         document.querySelector("#count4").innerHTML = count4;
//         if (count4 == maxcount4) {
//             clearInterval(id4);
//         }

//     }, 100)
// }, 7000);

let maxcount = parseInt(document.querySelector("#count").innerHTML);
let maxcount2 = parseInt(document.querySelector("#count2").innerHTML);
let maxcount3 = parseInt(document.querySelector("#count3").innerHTML);
let maxcount4 = parseInt(document.querySelector("#count4").innerHTML);

let count = 0;
let id = setInterval(() => {
    count += 1;
    document.querySelector("#count").innerHTML = count;
    if (count === maxcount) {
        clearInterval(id);
        setTimeout(startCount2, 2000); 
    }
}, 10);

function startCount2() {
    let count2 = 0;
    let id2 = setInterval(() => {
        count2 += 1;
        document.querySelector("#count2").innerHTML = count2;
        if (count2 === maxcount2) {
            clearInterval(id2);
            setTimeout(startCount3, 2000); 
        }
    }, 10);
}

function startCount3() {
    let count3 = 0;
    let id3 = setInterval(() => {
        count3 += 1;
        document.querySelector("#count3").innerHTML = count3;
        if (count3 === maxcount3) {
            clearInterval(id3);
            setTimeout(startCount4, 3000); 
        }
    }, 10);
}

function startCount4() {
    let count4 = 0;
    let id4 = setInterval(() => {
        count4 += 1;
        document.querySelector("#count4").innerHTML = count4;
        if (count4 === maxcount4) {
            clearInterval(id4);
        }
    }, 10);
}
