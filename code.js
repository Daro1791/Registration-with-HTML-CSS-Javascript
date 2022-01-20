const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const submit = document.getElementById('submit');
const result = document.querySelector(".result");

submit.addEventListener("click",(e)=>{
	
	e.preventDefault();

	let error = validate() ;

	if (error[0]) {
		result.innerHTML = error[1] ;
		result.classList.add("red") ;
	} else {
		result.innerHTML = "Request sent successfully" ;
		result.classList.add("green");
		result.classList.remove("red");
	}
		
})


const validate = ()=>{

	let error = [] ;

	if (name.value.length < 5 || 
		name.value.length > 30 ||
		name.value.indexOf(' ') == -1){

		error[0] = true ;
		error[1] = 'Invalid Name' ;
		return error ;

	} else if (email.value.length <= 6 ||
		email.value.length > 30 ||
		email.value.indexOf('@') == -1 || 
		email.value.indexOf('.') == -1 ) {

		error[0] = true ;
		error[1] = 'Invalid Email' ;
		return error ;

	} else if (subject.value == '') {

		error[0] = true ;
		error[1] = 'Please choose a Subject' ;
		return error ;
	}

	error[0] = false ;
	return error ;



}


