var foodArray = JSON.parse(localStorage.getItem("food")) ? JSON.parse(localStorage.getItem("food")) : [];

addFood = () =>{
    var name = prompt("enter food name");
    var price = prompt("enter food price");
  
    //console.log(name)
    const foodDetail = {
        foodName : name,
        foodPrice : price,
    };   
    return(foodDetail);
 

}
foodAdding = () => {
foodArray = JSON.parse(localStorage.getItem("food")) ? JSON.parse(localStorage.getItem("food")) : [];
var preLength = foodArray.length;
var addedArray = addFood();

// for ( let i = 0 ; i < addedArray.length ; i ++ ){
// if(foodArray[i].foodName.some((v)=>{return v.foodArray[i].foodName==addedArray[i].foodName}))
// {
//     alert("duplicate value")
// }}
foodArray.push(addedArray);

var newLength = foodArray.length;
if( newLength - preLength == 1 )
alert("new food item is added");

localStorage.setItem('food',JSON.stringify(foodArray));
ownerViewFood();


//console.log(localStorage);
} 

ownerViewFood = () =>{
    console.log(foodArray)
if(foodArray.length == 0){
    console.log("menu is empty");
    alert("press add button to add food")

}

else {
    
var foodRetrieve = (localStorage.getItem('food'))
foodRetrieve = JSON.parse(foodRetrieve);
console.log(foodRetrieve)
    
    // //console.log(foodArray.length)
    // console.log(foodRetrieve[0])
    //  console.log(foodRetrieve[1])
    // console.log(foodRetrieve[2])
    // for(let i = 0 ; i < foodArray.length ; i++){
    // console.log(foodArray[i].foodName)
    //}
    var row="";
   // console.log("hi")
    
    for(let i = 0; i < foodRetrieve.length ; i++){

    let name = foodRetrieve[i].foodName;
    let p = foodRetrieve[i].foodPrice;
    row = row + "<tr>" ;
    row = row + "<td>" + "<button onclick= editFood('"+name+"') >editName </button>" + "</td>" ;
    row = row + "<td>" + "<button onclick = editPrice('"+p+"','"+name+"'); > editPrice </button>" + "</td>";
    row = row + "<td>" + name + "</td>" + "<td>" + p + "</td> " ;
    row = row + "<td>" + "<button onclick= deleteFood('"+name+"','"+p+"')>delete </button>" + "</td>" ;
    row += "</tr>";
}

document.getElementById("mytable").innerHTML=row;

return row;
}
}

userViewFood = () =>{
        if(foodArray.length == 0){
            alert("menu is empty");
        
        } 
        else {
            alert("user menu");
        var foodRetrieve = (localStorage.getItem('food'))
        foodRetrieve = JSON.parse(foodRetrieve);
            
        var row="";
            
        for(let i = 0; i < foodRetrieve.length ; i++){
        let name = foodRetrieve[i].foodName;
        let link = "ordernow.html?fname="+name;
        let p = foodRetrieve[i].foodPrice;
        row = row + "<tr>" ;
        row = row + "<td>" + name + "</td>" + "<td>" + p + "</td> " ;
        row = row + "<td>" + "<a href='"+link+"'> ordernow</a>" + "</td>";
        row += "</tr>";
        }
        
        document.getElementById("userTable").innerHTML = row;
        return row;
        }
        }

const deleteFood = (name) => {
    var confir = confirm("are you want to delete this food item")
    if(confir == true){

    var temp = JSON.parse(localStorage.getItem('food'));
    
    var temp2 = temp.filter(item => (item.foodName != name));
    
    localStorage.setItem("food",JSON.stringify(temp2));
    //foodArray = localStorage.getItem("food");
    console.log(localStorage)
    
    ownerViewFood();
    }
    else
    ownerViewFood();
}



editFood = (name) =>{
    //alert(name);
    var newFood = prompt("enter new food name");
    for(let i = 0 ; i < foodArray.length ; i++)
    {
        console.log(foodArray)
        if(foodArray[i].foodName == name){
        foodArray[i].foodName = newFood;
        console.log(foodArray[i].foodName)

        break; }

    }
    localStorage.setItem('food',JSON.stringify(foodArray))
    ownerViewFood();
    
}
editPrice = (price,name) =>{
    

    var newPrice = prompt("enter new food price");
    for(let i = 0 ; i < foodArray.length ; i++)
    {
        //console.log(foodArray[i])
        if(foodArray[i].foodName == name && foodArray[i].foodPrice == price){
        foodArray[i].foodPrice = newPrice;
        console.log(foodArray[i].foodPrice)

        break; }

    }
    localStorage.setItem('food',JSON.stringify(foodArray))
    ownerViewFood();
  
}

function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}
    


  



