    var x = sessionStorage.length
    console.log(x)
    if (x == 0) {
      document.getElementById("please").innerHTML ="<h3>" + "Please get started by creating a new contact!" + "</h3>"
    }

    for (i=1;i < (x+1);i++) {
    var key = i
    var goGet = sessionStorage.getItem(key)
    var gotGet = JSON.parse(goGet)
    console.log(gotGet)
    var aa = gotGet.FirstNameEntry
    var bb = gotGet.LastNameEntry
    var cc = gotGet.emailEntry
    var dd = gotGet.telEntry
    var a = document.createElement("tr")

    var b = document.createElement("td")
    var c = document.createElement("td")
    var d = document.createElement("td")
    var e = document.createElement("td")





    var bText = document.createTextNode(aa)
    var cText = document.createTextNode(bb)
    var dText = document.createTextNode(cc)
    var eText = document.createTextNode(dd)


    a.appendChild(b).appendChild(bText)
    a.appendChild(c).appendChild(cText)
    a.appendChild(d).appendChild(dText)
    a.appendChild(e).appendChild(eText)



    document.getElementById("retrieve").appendChild(a)
}



function retrieveContactInfo() {

var ret = document.getElementById("search").value
var myArray = [ret]
var splitter = ret.split(" ")

console.log(splitter[0])
console.log(splitter[1])
console.log(splitter)
console.log(aa)

for (i = 1; i < (x+1);i++) {
  var key = i
  console.log(key)
  var searchGet = sessionStorage.getItem(key)
  var searchGetParse = JSON.parse(searchGet)
  console.log(searchGetParse)
  var searchFN = searchGetParse.FirstNameEntry
  var searchLN = searchGetParse.LastNameEntry
  var searchEE = searchGetParse.emailEntry
  var searchTE = searchGetParse.telEntry
if ((searchFN == splitter[0]) && (searchLN == splitter[1])) {
  $('#placeSearch').html("First Name: " + searchFN+"<br/>"+ "Last Name: "+searchLN+ "<br/>"+"Email: " +searchEE+"<br/>"+"Telephone #: " + searchTE)
  return
}
}
if ((searchFN !== splitter[0]) && (searchLN !== splitter[1])) {
  $('#placeSearch').html("Person not found")
  return
}
}

function editContactInfo() {

  var id = $(this).attr("id")
  console.log(id)
  //var getKey =
  //console.log(getKey)
/*
  var editGet = sessionStorage.getItem(getKey)
  var editGetParse = JSON.parse(editGet)

  var x= editGetParse.FirstNameEntry
  var y= editGetParse.LastNameEntry
  var z= editGetParse.emailEntry
  var n= editGetParse.telEntry

  $('#firstName').val(x)
  $('#lastName').val(y)
  $('#email').val(z)
  $('#tel').val(n)
  */
}


$('.btn').on("click", function(e) {
  e.preventDefault();
  retrieveContactInfo();
})



$('.edit').click(function(e) {
  e.preventDefault();


  var myClass = $(this).attr("id")
  console.log(myClass)

  var key = myClass
  console.log(key)

  var editGet = sessionStorage.getItem(key)
  var editGetParse = JSON.parse(editGet)

  var x= editGetParse.FirstNameEntry
  var y= editGetParse.LastNameEntry
  var z= editGetParse.emailEntry
  var n= editGetParse.telEntry
  console.log(x)

createNewEdit(x,y,z,n)

})

function createNewEdit(x,y,z,n) {
alert(x)
alert(y)
  //$('#firstName').val(x)
  //$('#lastName').val(y)
  //$('#email').val(z)
  //$('#tel').val(n)

}
