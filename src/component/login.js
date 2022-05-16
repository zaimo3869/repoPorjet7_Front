
import React,{Component} from 'react';
import UserService from "../service/user.service"
import {Link} from 'react-router-dom';

const initialState = {
    prenom: "",
    name: "",
    photo:"",
    email: "",
    password: "",
    prenomError:"",
    nameError: "",
    emailError: "",
    photoError:"",
    passwordError: ""
  };

  //=============REGEX===================
  let regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  export default class login extends Component {
    state = initialState;
  
    handleChange = event => {
      const isCheckbox = event.target.type === "checkbox";
      this.setState({
        [event.target.name]: isCheckbox
          ? event.target.checked
          : event.target.value
      });
    };
  
    validate = () => {
      let emailError = "";
      let passwordError = "";
      //============= Email ================
      if (!regexMail.test(this.state.email)|| this.state.email ==="") {
        emailError = "mauvais format d email";
      }
      //============= Password ================
      if (!passwordRegex.test(this.state.password)|| this.state.password ==="") {
        passwordError = "8 caractère minimum et le mots de passe doit contenir : des majuscule et minuscule, 1 chiffre ";
      }
      //============= Mise ne place state error ================
      if (emailError ||  passwordError ) {
        this.setState({ emailError, passwordError});
        return false;
      }
  
      return true;
    };
    veriflog = event => {
      event.preventDefault();
    }
    handleSubmit = event => {
      event.preventDefault();
      const isValid = this.validate();
      if (isValid) {
          //envoie les donner a l'API
         UserService.login({email: this.state.email,passwords: this.state.password})
         .then((res)=> {console.log(res.data.userId)})
         .catch(error => {
          console.log(error);
          
      })
        // clear form
        window.location.pathname = "/post"
      }
    };
   
    
    render() {
      return (
        <form className='Signup' onSubmit={this.handleSubmit} >
            <h1>Connectez vous !</h1>
            <div className='inputDivLog'>
           

          <label >email</label>
            <input name="email" placeholder="email" value={this.state.email} onChange={this.handleChange}/>
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.emailError}
            </div>
          <label >Mots de passe</label>
            <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange}/>
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.passwordError}
            </div> 
            
            <button type='submi'>submit</button>
            </div>
        </form>
      );
    }
  }