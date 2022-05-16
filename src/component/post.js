
import React,{Component} from 'react';
import PostService from "../service/post.service";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faUser } from '@fortawesome/free-solid-svg-icons'



export default class Post extends Component{
  constructor (props) {
    super(props)
    this.getPosts = this.getPosts.bind(this)
    this.redirect= this.redirect.bind(this)
    this.state = { 
        posts : [],
        id:[],
        visible: false
    }
    
}
montre = ()  => {
  this.setState({visible: true})
}
  componentDidMount () {
    this.getPosts()
    this.montre()
}

  getPosts () {
   
    PostService.getAllPost().then((res) => {
       this.setState({posts:res.data})
   }).catch(error => {
       console.log(error);
   })
}
// delete = () => {
// //       alert("bana")
// //       let baseURL = (window.location).href;
// //  let id = baseURL.substring(baseURL.lastIndexOf('=')+1)
// //  alert(id)
//       PostService.deletePost({id:37}).then((res)=> {console.log(res)})
// }
 

  redirect = (postid) => {
  //   //enregistre l'id dans le state pour pouvoir le rediriger vers post id
  window.location.pathname = `post/:id/id=${postid}`
  // PostService.getAOneComment(postid).then((res) => {console.log(res.data)})
  // console.log(postid)
  // console.log(this.state);
}

redirectUser = (user) => {
  window.location.pathname = `profile/*id=${user}`
}

upload = () =>{
  window.location.pathname = "/upload"
}
comment = () =>{
   
    PostService.getOnePost().then((res) => { console.log(res);
   }).catch(error => {
       console.log(error);
   })

  // window.location.pathname = "/post/:id"
}

  render(){
    const posts = this.state.posts
    console.log(posts);
    return(
    
      <div className='postDislay'>
          
        {/* <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> */}
 <div className='Signup'>
 
 <FontAwesomeIcon icon={faMessage} style={{
   height:"8vh",
   position:"fixed",
   color: "rgb(97, 118, 251)",
   marginLeft:"40%"
 }} 
 onClick={this.upload}> Create post</FontAwesomeIcon> 
       { posts.map((post)=>
       
            <div className='Postdiv' key={post.id} >

             <div value={post.id} onClick={() => this.redirect(post.id)}> 
           <h2 className='Titre' > {post.title}</h2>
           <p className='name' > postId:{ post.id}</p>
           <p className='content' > {post.message}</p>
           <img alt='img' src={post.image_url}></img>
           <p className='Titre' > {post.post_date}</p>
           {/* <button onClick={this.delete}>Commenter</button> */}
          
         </div>
           <p>user { post.Users_id} <FontAwesomeIcon onClick={()=>this.redirectUser(post.Users_id)} icon={faUser}></FontAwesomeIcon></p>
           <button onClick={this.montre}>Affiche</button>
           </div> )
         } 
             </div>
      </div>
     
   )
}
}

