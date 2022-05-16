import React,{Component} from 'react';
import PostService from '../service/post.service';

const initialState = {
    titre: "",
    name: "",
    photo:"",
    message: "",
    date:"",
    User_Id: "",
    nameError: ""
  };

  let testNumber = /^[a-zA-Z-\s]*$/;

export default class ModifyPost extends Component {
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
    //   if (!testNumber.test(this.state.name)|| this.state.name ==="") {
    //     nameError = "Nom ne peut etre vide";
    //   }

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
        let baseURL = (window.location).href;
        let id = baseURL.substring(baseURL.lastIndexOf('/')+1)
        console.log(id);
          PostService.updatePost({title:this.state.titre, id:id, 
          image_url:this.state.photo, message: this.state.message, post_date:this.date})
            
         
        // clear form
        
      }
    };
    // local = ()=>{
        
    // }
   
    
    render() {
      return (
        <form className='Signup' onSubmit={this.handleSubmit}>
            <h1>Modifier votre post !</h1>
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
            {/* <button onClick={this.local}>clique</button> */}
          <button type="submit">submit</button>
            </div>
        </form>
      );
    }
  }