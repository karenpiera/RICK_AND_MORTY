



function validation (user){
const errors ={};
 if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email) ){
errors.email="email no valido";
 }
  if(!userData.email){
    errors.email= "debe ingresar email";
  }
  if(userData.email.length>35 ){
errors.email="email no debe superar 35 caracter";
  }
  if(!/.*\d+.*/.test(userData.password) ){
    errors.password= "contraseña debe num";
  }
  if(userData.password.length<6 ||  userData.password.length>10){
    errors.password="contraseña debe tener minimo 6 caracter y maximo 10  caracater"
  }

  return errors;
}

export default validation;