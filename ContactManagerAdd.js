function addContactInfo() {
var firstName =  $('#firstName').val()
var lastName = $('#lastName').val()
var email = $('#email').val()
var tel = $('#tel').val()
var keyLength = sessionStorage.length

console.log(contactInfo)
console.log(keyLength)

var numberKey = keyLength + 1
console.log(numberKey)


if ((firstName == "") || (lastName == "")
  || (email == "") || (tel == "")) {
    alert("Please fill out all entries")
  } else {
    var contactInfo = {
      FirstNameEntry: firstName,
      LastNameEntry: lastName,
      emailEntry: email,
      telEntry: tel
    }



    var change = JSON.stringify(contactInfo);
    var myStorage = sessionStorage.setItem(numberKey,change)
    var message = sessionStorage.getItem(numberKey)
    var products = JSON.parse(message)


    console.log(products)
  }



}




$('.btn').on("click",addContactInfo)
