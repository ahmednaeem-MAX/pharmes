
let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let descount = document.getElementById('descount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');

let mood = 'create'
let tmp; 
// //getTotal

// function getTotal() {
//     if (price.value != '') {
//         let result = (+price.value + +taxes.value + +ads.value )
//         - +descount.value;
// total.innerHTML = result;
// total.style.background ='#040';
        
//     }else{
//         total.innerHTML = '';
//         total.style.background ='#a00d02';
   
//     }
    
// }

//create product

let dataPro;

if (localStorage.product != null) {
    dataPro = JSON.parse(localStorage.product)
}else{
    dataPro = [];
}


submit.onclick = function () {
let newPro = {
    title:title.value.toLowerCase(),
    price:price.value,
    taxes:taxes.value,
    ads:ads.value,
    descount:descount.value,
    // total:total.innerHTML,
    count:count.value,
    category:category.value.toLowerCase(),
}    


    
if (title.value != '' && price.value != '' && category.value != ''
&& newPro.count < 100 ) {

    if (mood === 'create') {
    if (newPro.count > 1 ) {
        for (let i = 0; i < newPro.count; i++) {
             dataPro.push(newPro);            
        }
        }else{
            dataPro.push(newPro);   
    }
    }else{
        dataPro[tmp] = newPro;
        mood = 'create'
        submit.innerHTML = 'create' 
        count.style.display ="block";   
    }
    



//save localStorage  
dataPro.push(newPro)
localStorage.setItem('product',JSON.stringify(dataPro) )


clearData()
showData()
}

 }



// //clear inbuts

function clearData() {
    
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    descount.value = '';
    // total.innerHTML= '';
    count.value = '';
    category.value = '';

}


//READ

function showData()
{
    // getTotal()

    let table = '';

for (let i = 0; i < dataPro.length; i++) {
table += `
<tr>
    <td>${i+1}</td>
    <td>${dataPro[i].title}</td>
    <td>${dataPro[i].price}</td>
    <td>${dataPro[i].taxes}</td>
    <td>${dataPro[i].ads}</td>
    <td>${dataPro[i].descount}</td>
    <td>${dataPro[i].category}</td>
     
 

    <td><button  onclick = "UpdateData(${i})" id ='update'>update</button></td>

<td><button onclick = "deleteData(${i})" id ='delete'>delete</button></td>


    </tr>`


}
document.getElementById('tbody').innerHTML = table;

let btnDelete = document.getElementById('deleteAll')

if (dataPro.length > 0) {
    btnDelete.innerHTML =` <button id = "deleteAll" onclick = "deleteAll()"> Delete All </button>
`
    
}else{
    btnDelete.innerHTML = '';
}

}

showData()


//delete

function deleteData(i) {
    dataPro.splice(i,1);
    localStorage.product = JSON.stringify(dataPro);
    showData()
    
}


function deleteAll() {
    localStorage.clear();
    dataPro.splice(0);
    showData();
    
}

//count


//update

function UpdateData(i) {
title.value = dataPro[i].title
price.value = dataPro[i].price
taxes.value = dataPro[i].taxes
ads.value = dataPro[i].ads
descount.value = dataPro[i].descount
// getTotal()
document.getElementById("inputs").style.display = 'block'
document.getElementById("submit").style.display = 'block'
count.style.display="none";
category.value = dataPro[i].category
    submit.innerHTML="update";
    mood='update';
    temp = i;
    scroll({
        top : 0,
        behavior:'smooth',

    });

};

//searchMood

let searchMood = 'title';


function getSearchMood(id){
    
let search = document.getElementById('search')
if (id == 'searchTitle') {
 searchMood = 'title';


}else{
    searchMood = 'category';


}
search.placeholder = 'Search by'+ searchMood;
search.focus()
search.value ='';
showData()
}


function searchData(value) {
let table =""
    
for (let i = 0; i < dataPro.length; i++) {
if (searchMood == 'title') {


if (dataPro[i].title.includes(value.toLowerCase())) {
    table += `
<tr>
    <td>${i}</td>
    <td>${dataPro[i].title}</td>
    <td>${dataPro[i].price}</td>
    <td>${dataPro[i].taxes}</td>
    <td>${dataPro[i].ads}</td>
    <td>${dataPro[i].descount}</td>
    <td>${dataPro[i].category}</td>
    
    <td><button onclick = "UpdateData(${i})" id ='update'>update</button></td>
    <td><button onclick = "deleteData(${i})" id ='delete'>delete</button></td>

</tr>`
}    


}else{

if (dataPro[i].category.includes(value.toLowerCase())) {
    table += `
<tr>
    <td>${i}</td>
    <td>${dataPro[i].title}</td>
    <td>${dataPro[i].price}</td>
    <td>${dataPro[i].taxes}</td>
    <td>${dataPro[i].ads}</td>
    <td>${dataPro[i].descount}</td>
    <td>${dataPro[i].category}</td>
    
    <td><button onclick = "UpdateData(${i})" id ='update'>update</button></td>
    <td><button onclick = "deleteData(${i})" id ='delete'>delete</button></td>

</tr>`
}
}
}
document.getElementById('tbody').innerHTML = table;
}


document.getElementById("doaa").addEventListener('click',function () {

  document.getElementById("inputs").style.display = 'none'; 
  document.getElementById("ser").style.display = 'block'; 
  document.getElementById("crud").style.display = 'block'  
  document.getElementById('container').style.display ='none'


})


document.getElementById("show").addEventListener('click',function () {
    document.getElementById("inputs").style.display = 'block'  
    document.getElementById("ser").style.display = 'none'  
    document.getElementById("amala").style.display = 'none'  
    document.getElementById('container').style.display ='none'

  })
  
  
document.getElementById("ama").addEventListener('click',function () {
    document.getElementById("amala").style.display = 'block'  
    document.getElementById("crud").style.display = 'none'  
    document.getElementById('container').style.display ='none'


  })
  
   
// $("#ama").click(function(){
//     $("#amala").slideToggle();
//     $("#crud").hide();
//   });


//   $("#show").click(function(){
//     $("#inputs").slideToggle();
//     $("#ser").hide();

//   });