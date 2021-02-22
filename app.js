'use strict';

let attempts = 0;
let maxClick = 25;


let leftImgEl = document.getElementById('leftImg');
let middleImgEl = document.getElementById('middleImg');
let rightImgEl = document.getElementById('rightImg');

let arr=[];
let arrName = [];
let voteCount = [];
let imgCount = [];
function busMall(name, source){
    this.name = name;
    this.source = source;
    arr.push(this);
    this.itrTime=0;
    this.vote=0;
    arrName.push(this.name);

}
new busMall('bag','img/bag.jpg');
new busMall('banana','img/banana.jpg');
new busMall('bathroom','img/bathroom.jpg');
new busMall('boots','img/boots.jpg');
new busMall('breakfast','img/breakfast.jpg');
new busMall('bubblegum','img/bubblegum.jpg');
new busMall('chair','img/chair.jpg');
new busMall('cthulhu','img/cthulhu.jpg');
new busMall('dog-duck','img/dog-duck.jpg');
new busMall('dragon','img/dragon.jpg');
new busMall('pen','img/pen.jpg');
new busMall('pet-sweep','img/pet-sweep.jpg');
new busMall('scissors','img/scissors.jpg');
new busMall('shark','img/shark.jpg');
new busMall('sweep','img/sweep.png');
new busMall('tauntaun','img/tauntaun.jpg');
new busMall('unicorn','img/unicorn.jpg');
new busMall('usb','img/usb.gif');
new busMall('water-can','img/water-can.jpg');
new busMall('wine-glass','img/wine-glass.jpg');


let left ;
let middle;
let right;

function renderRandomImg(){
   left = getRandom();
   middle = getRandom();
   right = getRandom();


   while(left === middle || left === right){
    left = getRandom(); 

    
}
while(right === middle || right === left){
    right = getRandom(); 

    
}
while(middle === left || middle === right){
    middle = getRandom(); 

    
}
    leftImgEl.setAttribute('src', arr[left].source); 
    arr[left].itrTime++;
    middleImgEl.setAttribute('src', arr[middle].source); 
    arr[middle].itrTime++;
    rightImgEl.setAttribute('src', arr[right].source);
    arr[right].itrTime++;
   

}
renderRandomImg();
function getRandom(){
    let randomImg = Math.floor(Math.random() * arr.length); 
    return randomImg;
    }

leftImgEl.addEventListener('click', click);
middleImgEl.addEventListener('click', click);
rightImgEl.addEventListener('click', click);

function click(event){
    attempts++;
    
    if(attempts <= maxClick){
        if(event.target.id === 'leftImg'){
            arr[left].vote++;
            
          
        }else if(event.target.id === 'middleImg'){
            arr[middle].vote++;
           
           
        }
        else{
            arr[middle].vote++;
       

        }
        renderRandomImg();
       
    }else{
        let unorder = document.getElementById('unorder');
        let li;
        for(let i = 0 ; i < arr.length; i++){
            li = document.createElement('li');
            unorder.appendChild(li);                                     
            li.textContent = `${arr[i].name} it has ${arr[i].vote} Votes , and iteration times ${arr[i].itrTime} times.`
        }
        for(let j = 0 ; j <arr.length; j++){
            voteCount.push(arr[j].vote);
            imgCount.push(arr[j].itrTime);
        }
        chartRender();
        leftImgEl.removeEventListener('click', click);
        middleImgEl.removeEventListener('click', click);
        rightImgEl.removeEventListener('click', click);    
    }


}
function chartRender(){
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        
        type: 'bar',
    
      
        data: {
            labels: arrName,
            datasets: [{
                label: 'vote',
                backgroundColor: 'rgb(0, 0, 0)',
                borderColor: 'rgb(0, 0, 0)',
                data: voteCount,
            },{
                label: 'iteration img',
                backgroundColor: 'rgb(96, 96, 96)',
                borderColor:'A5EB68',
                data:imgCount,
    
            }]
        },
    
        
        options: {}
    });
    
}
