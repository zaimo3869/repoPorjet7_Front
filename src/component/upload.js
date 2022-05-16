
import React,{Component} from 'react';
import PostService from '../service/post.service';

const initialState = {
    titre: "",
    name: "",
    photo:"",
    message: "",
    User_Id: "",
    nameError: ""
  };

  let testNumber = /^[a-zA-Z-\s]*$/;

export default class upload extends Component {
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
      let nameError = "";
  
      
      //============= Name ================
      if (!testNumber.test(this.state.name)|| this.state.name ==="") {
        nameError = "Nom ne peut etre vide";
      }

      //============= Mise ne place state error ================
      if ( nameError ) {
        this.setState({  nameError });
        return false;
      }
  
      return true;
    };
  
    handleSubmit = event => {
      event.preventDefault();
      const isValid = this.validate();
      console.log(this.state);
      if (isValid) {
          //envoie les donner a l'API {nom:this.state.name, prenom:this.state.prenom, 
          // photo_url:this.state.photo, email: this.state.email, passwords: this.state.password}
          PostService.createPost({title:this.state.titre, Users_Id:localStorage.getItem("userId"), 
            photo_url:this.state.photo, message: this.state.message})
            
         
        // clear form
        
      }
    };
    local = ()=>{
    console.log(localStorage.getItem("userId"));
    alert('bana')
    }
   
    
    render() {
      return (
        <form className='Signup' onSubmit={this.handleSubmit}>
            <h1>Creer votre post !</h1>
            <div className='inputDiv'>
            
            <label >titre</label>
            <input name="titre" placeholder="titre" value={this.state.titre} onChange={this.handleChange} />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.prenomError}
            </div>

            <label >nom</label>
            <input name="name" placeholder="nom" value={this.state.name} onChange={this.handleChange} />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.nameError}
            </div>

            <label >Photo</label>
            <input type="file" name="photo" placeholder="Une photo de vous" value={this.state.photo} onChange={this.handleChange} />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.photoError}
            </div>

          <label >Massage</label>
            <input name="message" placeholder="massage" value={this.state.message} onChange={this.handleChange}/>
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.emailError}
            </div>
          <button type="submit">submit</button>
            </div>
        </form>
      );
    }
  }