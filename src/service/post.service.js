import appelAxios from '../requette';

class postService  {
    getAllPost () {
        return appelAxios.get("/posts")
    }
    getOnePost (data) {
        return appelAxios.post("/post/:id", data)
    }
    // createPost (data) {
    //     return appelAxios.post("/post/", data)
    // }
    getAOneComment (data) {
        return appelAxios.post("/post",data)
    }
    createComment(data){
        return appelAxios.post("post/comments", data)
    }
    deletePost (data) {
        return appelAxios.post("/delete", data)
    }
    createPost (data) {
        return appelAxios.post("/upload", data)
    }
    updatePost (data) {
        return appelAxios.put("/post/:id/modify", data)
    }

    

}
export default new postService ();