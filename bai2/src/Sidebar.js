import profile_pic from "./img/profile_pic.PNG";
import user_name_7 from "./img/user7.jpg";
import user_name_8 from "./img/user8.jfif";
import user_name_9 from "./img/user9.jfif";
function Sidebar () {
    return(
        <section class="main">
            <div class="wrapper"> 
                <div class="right_collumn">
                    <div class="profile-card">
                        <div class="profile_pic">
                            <img src={profile_pic} alt=""/>
                        </div>
                        <div>
                            <p class="username">your_username</p>
                            <p class="sub-text">Your Name</p>
                        </div>
                        <button class="action-btn">switch</button>
                    </div>
                    <p class="suggestion-text">Suggestions for you</p>
                    <div class="profile-card">
                        <div class="profile_pic">
                            <img src= {user_name_7} alt=""/>
                        </div>
                        <div>
                            <p class="username">user_name_7</p>
                            <p class="sub-text">followed by user_name_1</p>
                        </div>
                        <button class="action-btn">follow</button>
                    </div>
                    <div class="profile-card">
                        <div class="profile_pic">
                            <img src= {user_name_8} alt=""/>
                        </div>
                        <div>
                            <p class="username">user_name_8</p>
                            <p class="sub-text">followed by user_name_2</p>
                        </div>
                        <button class="action-btn">follow</button>
                    </div>
                    <div class="profile-card">
                        <div class="profile_pic">
                            <img src= {user_name_9} alt=""/>
                        </div>
                        <div>
                            <p class="username">user_name_9</p>
                            <p class="sub-text">followed by user_name_3</p>
                        </div>
                        <button class="action-btn">follow</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Sidebar;

