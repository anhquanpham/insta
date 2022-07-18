import like from "./img/like.PNG";
import dots from "./img/3dots.PNG";
import dogpost from "./img/dogpost.jfif";
import comment from "./img/comment.PNG";
import send from "./img/send.PNG";
import save from "./img/save.PNG";
import user_name_1 from "./img/user1.jpg";
import user_name_2 from "./img/user2.jpg";
function Body2 () {
    return(
        <section class="main">
            <div class="wrapper">
                <div class="left_collumn">
                    <div class="post">
                        <div class="info">
                            <div class="user">
                                <div class="profile_pic"><img src= {user_name_1} alt=""/></div>
                                <p class="username">user_name_1</p>
                            </div>
                            <img src= {dots} class="3dots" alt=""/>
                        </div>
                        <img src= {dogpost} class="post-image" alt=""/>
                        <div class="post-content">
                            <div class="reaction-wrapper">
                                <img src= {like} class="icon" alt=""/>
                                <img src= {comment} class="icon" alt=""/>
                                <img src= {send} class="icon" alt=""/>
                                <img src= {save} class="save icon" alt=""/>
                            </div>
                            <p class="likes">33 likes</p>
                            <p class="description"><span>user_name_1 </span> Look at this cute dog!</p>
                            <p class="post-time">3 hours ago</p>
                        </div>
                        <div class="comment-wrapper">
                            <img src="img/smiley.PNG" class="icon" alt=""/>
                            <input type="text" class="comment-box" placeholder="Add a comment"/>
                            <button class="comment-btn">post</button>
                        </div>
                    </div>
                    <div class="post">
                        <div class="info">
                            <div class="user">
                                <div class="profile_pic"><img src= {user_name_2} alt=""/></div>
                                <p class="username">user_name_2</p>
                            </div>
                            <img src= {dots} class="3dots" alt=""/>
                        </div>
                        <img src= {dogpost} class="post-image" alt=""/>
                        <div class="post-content">
                            <div class="reaction-wrapper">
                                <img src= {like} class="icon" alt=""/>
                                <img src= {comment} class="icon" alt=""/>
                                <img src= {send} class="icon" alt=""/>
                                <img src= {save} class="save icon" alt=""/>
                            </div>
                            <p class="likes">3333 likes</p>
                            <p class="description"><span>user_name_2 </span> This dog looks popular!</p>
                            <p class="post-time">4 hours ago</p>
                        </div>
                        <div class="comment-wrapper">
                            <img src="img/smiley.PNG" class="icon" alt=""/>
                            <input type="text" class="comment-box" placeholder="Add a comment"/>
                            <button class="comment-btn">post</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Body2
