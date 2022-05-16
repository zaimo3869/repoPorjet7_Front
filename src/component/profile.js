
import React,{Component} from 'react';
import UsersData from "../service/user.service"




export default class Profile extends Component {
    
    constructor (props) {
        super(props)
        this.getAllUser = this.getAllUser.bind(this)
        this.state = { 
            users : []
        }
    }
    componentDidMount () {
        this.getAllUser()
    }
    
    getAllUser () {
       
        UsersData.getAllUser().then((res) => {
           console.log(res.data);
           this.setState({users:res.data})
       }).catch(error => {
           console.log(error);
       })
    }
  
   
   
    
    render() {
        const posts= this.state.users
      return (
      <div className="Profile">
      {
                posts && posts.map((post ) => 
                   (    <div className='profile_info' key={post.id}>
                   <div className='profile_info_div' >
                   <div className='profile_info_p'>Photo :cgvugvibihbi </div>
                   <div className='profile_info_p'>Nom : {post.name}
                     </div>
                   <div className='profile_info_p'>Prenom :{post.prenom}
                     </div>
                   <div className='profile_info_p'>Email :{post.email}
                     </div>
                   <div className='profile_info_p'>Bio :fgjhkjkjhugyftrdetfcyvgubinbvytcrxycuvhbkjnlbhvgcfdzv"r</div>
                   </div>
                   </div> )
                )
            } 
      
   
      </div>
      );
    }
  }