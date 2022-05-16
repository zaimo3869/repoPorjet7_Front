
import React,{Component} from 'react';
import PostService from '../service/post.service';

const initialState = {
    titre: "",
    name: "",
    photo:"",
    content: "",
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
      console.log(this.state);
      
         
        let baseURL = (window.location).href;
        let id = baseURL.substring(baseURL.lastIndexOf('=')+1)
          PostService.createComment({ fk_postId:id,content:this.state.photo})
          .then((res)=> console.log(res))
          window.location.pathname = `post/:id/=${id}`
            
         
        // clear form
        
    };
    local = ()=>{
    console.log(localStorage.getItem("userId"));
    alert('bana')
    }
   
    
    render() {
      return (
        <form className='Signup' onSubmit={this.handleSubmit}>
            <h1>Commenter !</h1>
            <div className='inputDiv'>
            

            <label >message</label>
            <input  name="photo" placeholder="Une photo de vous" value={this.state.photo} onChange={this.handleChange} />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.photoError}
            </div>

          <label >Photo</label>
            <input type="file" name="content" placeholder="photo" value={this.state.content} onChange={this.handleChange}/>
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.emailError}
            </div>
          <button type="submit">submit</button>
            </div>
        </form>
      );
    }
  }