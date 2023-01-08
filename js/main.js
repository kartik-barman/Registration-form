var myForm = document.getElementById('myForm');

//check console.log(myForm);

myForm.addEventListener('submit', function(e)
{
    e.preventDefault();

    var firstName = e.target.fName.value;

    var lastName = e.target.lName.value;
    
    var age = e.target.age.value;

    var phNumber = e.target.phNumber.value;

    var email = e.target.emailId.value;

    var gender = e.target.gender.value; 

    var language = e.target.language.value; 

   // check console.log(firstName, lastName, age, phNumber, email, gender, language);

   var formData = {
    firstName : firstName,
    lastName : lastName ,
    age : age ,
    phNumber : phNumber ,
    email : email ,
    gender : gender ,
    language : language,
    

   }
   console.log(formData);
})

