//creating class
class OBJECT{
    name;
    age;
    constructor(name, age, id, imgUrl){
        this.name = name;
        this.age =age;
        this.id = id;
        this.imgUrl = imgUrl;
    }
}
//nitialized class
var obj1 = new OBJECT("maryem", 12, 5);
var db = firebase.database(); //initialized database
//setuser funtion working great
function setUser(user){
    if(user.id === ""){
        
    }else{
        db.ref("users/" + user.id).set(user);
    }
    
}
//setting user

function setUserClick(){
    getUser(event)
    event.preventDefault();
    var newname = document.getElementById("name").value;
    var newage = document.getElementById("age").value;
    var newid = document.getElementById("id").value;
    var newUrl = document.getElementById("url").value;
    var addeduser = {
        name : newname,
        age : newage,
        id : newid,
        imgUrl : newUrl
    }
    setUser(addeduser);
    document.getElementById('myform').reset();
}

function getUser(event){
    document.getElementsByTagName("li").innerText = null;
    event.preventDefault();
    var myusers = db.ref("users/").once('value', function(snapshot) {
        var newCompons = document.querySelectorAll('.newComp');
        for (let index = 0; index < newCompons.length; index++) {
            newCompons[index].remove();
        }
        var allUsers = snapshot.val();
        console.log(allUsers)
        for (var key in allUsers) {
            if (allUsers.hasOwnProperty(key)) {
                // var newline = document.createElement("li");
                // newline.className = "listing";
                // newline.innerText = JSON.stringify("NAME = " + allUsers[key].name + " AGE = " + allUsers[key].age + " ID = " + allUsers[key].id) ;
                // document.getElementById("output").appendChild(newline);
                //component creation
                createComponent(allUsers[key].name, allUsers[key].imgUrl, allUsers[key].id, allUsers[key].age);
                //functiom to create component

            }
          } 
      });
}

function createComponent(name, imgUrl, id, age){
    var componentDiv = document.createElement('div');
    componentDiv.className = 'newComp';
    var img = document.createElement('img');
    img.className = "productImage";
    img.src = imgUrl;
    var nameText = document.createElement('h2');
    nameText.className = "name_Product";
    nameText.innerText = name;
    var ageText = document.createElement('h3');
    ageText.innerText = "PRICE : " + age + " PKR";
    ageText.className = "info_Product";
    var idText = document.createElement('h3');
    idText.className = "info_Product";
    idText.innerHTML = "PRODUCT ID :" + id;
    componentDiv.appendChild(img);
    componentDiv.appendChild(nameText);
    componentDiv.appendChild(idText);
    componentDiv.appendChild(ageText);
    //button
    var Delbutton = document.createElement("button");
    Delbutton.className = "delete_button";
    Delbutton.innerHTML = "Delete Product";  
    componentDiv.appendChild(Delbutton);
    document.getElementById("components").appendChild(componentDiv);

}
// createComponent(myobject.name, myobject.imgUrl, myobject.id, myobject.age);

// db.ref().on('value', function(snapshot) {
//   console.log(snapshot.val());
// });

