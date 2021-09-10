var orderItem = JSON.parse(localStorage.getItem("order")) ? JSON.parse(localStorage.getItem("order")) : [];

addOrder = () =>{
    var name = document.getElementById("name").value;
    var mob = document.getElementById("mob").value;
    var add = document.getElementById("address").value;
    var quan = document.getElementById("quan").value;
    var foodName = getParamete("fname");

    var obj = {

        foodName : foodName,
        name : name,
        mobile : mob,
        address : add,
        quantity : quan,
        orderStatus : "-"

    }
    
    orderItem.push(obj)
    
    localStorage.setItem('order',JSON.stringify(orderItem));
    alert("your order is placed please wait for approval")        
    }
     


viewOrder = () =>{
    console.log(orderItem)
if(orderItem.length == 0){
    alert("no order is placed");

}

else {
    
var orderDetails = (localStorage.getItem('order'))
orderDetails = JSON.parse(orderDetails);
console.log(orderDetails)

    var row = "";    
    for(let i = 0; i < orderDetails.length ; i++){

    let foodName = orderDetails[i].foodName;
    let name = orderDetails[i].name;
    let mobile = orderDetails[i].mobile;
    let address = orderDetails[i].address;
    let quantity = orderDetails[i].quantity;
    let orderStatus = orderDetails[i].orderStatus;

    row = row + "<tr>" ;
    
    row = row + "<td>" + foodName + "</td>";
    row = row + "<td>" + name + "</td>" ;
    row = row + "<td>" + mobile + "</td>" ;
    row = row + "<td>" + address + "</td>" ;
    row = row + "<td>" + quantity + "</td>" ; ;
    row = row + "<td> <select id='td"+(i+1)+"'><option value=''>change current status</option><option value='approved'>Approved</option><option value='cooking'>cooking</option>"    
    row =row + "<option value='delivered'>delivered</option> </select> </td>";
    row = row + "<td>" + orderStatus + "</td>" ;
    row += "</tr>";
}
row = row + '<button onclick="statusUpdate()">click to update order status</button>'; 

document.getElementById("mytable").innerHTML=row;

return row;
}
}


userViewOrder = () =>{
    console.log(orderItem)
if(orderItem.length == 0){
    alert("no order is placed");

}

else {
    
var orderDetails = (localStorage.getItem('order'))
orderDetails = JSON.parse(orderDetails);
console.log(orderDetails)

    var row = "";    
    for(let i = 0; i < orderDetails.length ; i++){

    let foodName = orderDetails[i].foodName;
    let name = orderDetails[i].name;
    let mobile = orderDetails[i].mobile;
    let address = orderDetails[i].address;
    let quantity = orderDetails[i].quantity;
    let orderStatus = orderDetails[i].orderStatus;

    row = row + "<tr>" ;
    
    row = row + "<td>" + foodName + "</td>";
    row = row + "<td>" + name + "</td>" ;
    row = row + "<td>" + mobile + "</td>" ;
    row = row + "<td>" + address + "</td>" ;
    row = row + "<td>" + quantity + "</td>" ; ;
    row = row + "<td>" + orderStatus + "</td>" ;
    row += "</tr>";
} 

document.getElementById("userTable").innerHTML=row;
}
}
statusUpdate = () => {

    
    let temp = JSON.parse(localStorage.getItem('order'));
    let currentStatus = JSON.parse(localStorage.getItem('order'));
    for( let i = 0 ; i < temp.length; i++){
        let j = document.getElementById("td" + (i+1)).value;
        //alert(j);
        temp[i].orderStatus = j;       
    }
    localStorage.setItem('order',JSON.stringify(temp));
    viewOrder();
    
}

getParamete = (key) => {
  
    // Address of the current window
    address = window.location.search
  
    // Returns a URLSearchParams object instance
    parameterList = new URLSearchParams(address)
  
    // Returning the respected value associated
    // with the provided key
    return parameterList.get(key)
}


