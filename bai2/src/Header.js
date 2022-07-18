import logo from "./img/logo.PNG";
import home from "./img/home.PNG";
import messenger from "./img/messenger.PNG";
import add from "./img/add.PNG";
import explore from "./img/explore.PNG";
import like from "./img/like.PNG";
import profile_pic from "./img/profile_pic.PNG";
function Header() {
    return(
        <nav class="navigation">
            <div class="navigation_wrap">
                <img src={logo} class="company_image" alt=""/>
                <input type="text" class="search_bar" placeholder="search"/>
                <div class="nav-items">
                    <img src= {home} class="icon" alt=""/>
                    <img src= {messenger} class="icon" alt=""/>
                    <img src= {add} class="icon" alt=""/>
                    <img src= {explore} class="icon" alt=""/>
                    <img src= {like} class="icon" alt=""/>
                    <img src= {profile_pic} class = "icon user-profile" alt=""/>
                </div>
            </div>
        </nav>
    );
}

export default Header;