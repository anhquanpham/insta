import user_name_1 from "./img/user1.jpg";
import user_name_2 from "./img/user2.jpg";
import user_name_3 from "./img/user3.jpg";
import user_name_4 from "./img/user4.jpeg";
import user_name_5 from "./img/user5.jpg";
import user_name_6 from "./img/user6.jfif";

function Body1 () {
    return(
        <section class="main">
            <div class="wrapper">
                <div class="left_collumn">
                    <div class="status_wrapper">
                        <div class="status_card">
                            <div class="profile_pic"><img src= {user_name_1} alt=""/></div>
                            <p class="username">user_name_1</p>
                        </div>
                        <div class="status_card">
                            <div class="profile_pic"><img src= {user_name_2} alt=""/></div>
                            <p class="username">user_name_2</p>
                        </div>
                        <div class="status_card">
                            <div class="profile_pic"><img src= {user_name_3} alt=""/></div>
                            <p class="username">user_name_3</p>
                        </div>
                        <div class="status_card">
                            <div class="profile_pic"><img src= {user_name_4} alt=""/></div>
                            <p class="username">user_name_4</p>
                        </div>
                        <div class="status_card">
                            <div class="profile_pic"><img src= {user_name_5} alt=""/></div>
                            <p class="username">user_name_5</p>
                        </div>
                        <div class="status_card">
                            <div class="profile_pic"><img src= {user_name_6} alt=""/></div>
                            <p class="username">user_name_6</p>
                        </div>
                    </div>
                </div>
            </div>    
        </section>
    )
}
export default Body1


