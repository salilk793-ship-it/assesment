let expenses = [];
let editIndex = -1;

function addExpense() {

let name = document.getElementById("name").value;
let amount = document.getElementById("amount").value;
let category = document.getElementById("category").value;

let expense = {name, amount, category};
expenses.push(expense);

displayExpenses();
clearFields();
}

function displayExpenses() {

let list = document.getElementById("list");
list.innerHTML = "";

let total = 0;

for(let i = 0; i < expenses.length; i++){

let e = expenses[i];
total += Number(e.amount);

list.innerHTML += `
<li>
${e.name} - ₹${e.amount} (${e.category})
<button onclick="editExpense(${i})">Edit</button>
<button onclick="deleteExpense(${i})">Delete</button>
</li>
`;
}

document.getElementById("total").innerText = total;
}

function editExpense(index){
editIndex = index;

document.getElementById("name").value = expenses[index].name;
document.getElementById("amount").value = expenses[index].amount;
document.getElementById("category").value = expenses[index].category;
}

function updateExpense(){

if(editIndex >= 0){

expenses[editIndex].name = document.getElementById("name").value;
expenses[editIndex].amount = document.getElementById("amount").value;
expenses[editIndex].category = document.getElementById("category").value;

editIndex = -1;

displayExpenses();
clearFields();
}
}

function deleteExpense(index){
expenses.splice(index,1);
displayExpenses();
}

function clearFields(){
document.getElementById("name").value="";
document.getElementById("amount").value="";
}
