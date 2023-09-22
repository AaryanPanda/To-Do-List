

let button = document.querySelector("#button")
let todolist=document.getElementById("todolist")
let input = document.querySelector("#input")
let arr = []
button.onclick=function(){
    arr.push(input.value)
    input.value= ""
    appendList()
    
}



function appendList(){
todolist.innerHTML=null
    for(i=0;i<arr.length;i++){

    todolist.innerHTML += `<li> ${arr[i]}    <a onclick = "editList(${i})" class="edit-button"> Edit </a>    <a onclick="removeList(${i})" class="close-button">Close</a>    </li>`

    }

}

// editlist functionlatity

function editList(i){
   let text= prompt("Enter New Tittle")
   if (text !== null && text.trim() !== "") {
    arr[i] = text;
    appendList();
}
}


//remove functionality

function removeList(i) {
    arr.splice(i, 1);  
    appendList();  
}