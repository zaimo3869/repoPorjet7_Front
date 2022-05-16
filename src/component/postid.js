import React,{Component} from "react"
import PostService from "../service/post.service"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faComment,faFilePen,faTrashCan} from '@fortawesome/free-solid-svg-icons'


export  default class PostId extends Component{
          
    constructor (props) {
        super(props)
        this.getPost = this.getPost.bind(this)
        this.state = { 
          post:[],
            comment : [],
            id:[]
        }
    }
    
    componentDidMount () {
      this.getPost()
    }
    getPost() {
      let baseURL = (window.location).href;
      let id = baseURL.substring(baseURL.lastIndexOf('=')+1)
      this.setState({id:id})
      console.log(this.state);
      PostService.getOnePost({id:id}).then((res) => {
         this.setState({post:res.data})
         console.log(this.state);
        
     })
     PostService.getAOneComment({id:id}).then((res) => {
      this.setState({comment:res.data})
  })
  }
    modify (){
      // PostService.updatePost({id:2 , title:"éé", message:"ef"}).then((res) => {
      //   console.log(res)});
      window.location.pathname = `post/:id/modify/${this.state.id}`
    }
    getIdParams  (){
     let baseURL = (window.location).href;
     let id = baseURL.substring(baseURL.lastIndexOf('=')+1)
     alert(id.lastIndexOf('='))
     return{
    }}

    delete = () => {
      if(window.confirm("veux tu supprimer ce post ?")===true){
         
          let baseURL = (window.location).href;
     let id = baseURL.substring(baseURL.lastIndexOf('=')+1)
          PostService.deletePost({id:id}).then((res)=> {console.log(res)})}
          window.location.pathname= 'post'
   }
   
    redirect = () => {
      let baseURL = (window.location).href;
     let id = baseURL.substring(baseURL.lastIndexOf('=')+1)
      window.location.pathname = `comment/id=${id}`
    }
    render() {
      const comments= this.state.comment;
      const post = this.state.post
      console.log(post);
      return (
       <div className='Signup'> 

          {post.map((post)=> (<div className='Postdiv'  key={post.id} >
            <div style={{display:"flex",justifyContent:"space-between"}}>
          <FontAwesomeIcon onClick={this.delete} icon={faTrashCan}  style={{height:"5vh",color:"red",}}></FontAwesomeIcon>
          <FontAwesomeIcon onClick={() => this.modify()} icon={faFilePen} style={{height:"5vh",color:"rgb(97, 118, 251)",}}></FontAwesomeIcon></div>
                   <h2 className='Titre' >{post.title} </h2>
                   <p className='content' >{post.message}  content</p>
                   <p className='content' >{post.Users_id} : userId</p>
                   <p className='date' > {post.post_date}</p>
                   
                   </div>))}
               
                
           <FontAwesomeIcon onClick={this.redirect} icon={faComment} style={{height:"5vh",color:"rgb(0,255,127)"}}></FontAwesomeIcon>
           {comments && comments.map((comment ) =>
               ( <div className='PostComm' key={comment.id}>
                 <FontAwesomeIcon onClick={this.delete} icon={faTrashCan}  style={{height:"5vh",color:"red",}}></FontAwesomeIcon>
                   <h2 className='Titre' >Titre : {comment.title}</h2>
                   <p > {comment.id}</p>
                   <p > {comment.content}</p>
                   <p > n{comment.image_url}</p>
                   <p > {comment.post_date}</p>
                   </div>)
                
           )}
        </div>
      );
    }
  }
   
   