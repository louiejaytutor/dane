$(document).ready(function () {
    ShowLoader();
    UserController();
});

let user = null;
let isValidated = false;
let posts = null;

const container = $("#container");

async function UserController() {
    user = sessionStorage.getItem("user");
    if (user) {
        await ValidateUser();
    }

    if (isValidated) {
        await PostContainer();
    }
    else {
        await LoginContainer();
    }

}

async function PostContainer() {
    const postContainer = `<div class="header">
        Dane
        <button onclick="CreatePost()"><i class="fas fa-plus"></i></button>
        <button onclick="LogoutUser()"><i class="fas fa-sign-out-alt"></i></button>
    </div>
    <div class="top-nav">
        <a href="javascript:void(0)">For you</a>
        <a id="following-btn" href="javascript:void(0)">Following</a>
    </div>
    <div id="posts" class="posts"></div>
    <div class="bottom-nav">
        <a id="home-btn" href="javascript:void(0)"><i class="fas fa-home"></i></a>
        <a id="profile-btn" href="javascript:void(0)"><i class="fas fa-user-alt"></i></a>
    </div>
    <script>
        document.title = "Home / Dane";
    </script>`;
    container.html(postContainer);

    posts = $("#posts");
    await GetPosts();

    RemoveLoader();
}

async function LoginContainer() {
    const loginContainer = `<div class="login-container">
        <input type="text" id="username" autocomplete="off">
        <input type="password" id="password">
        <button onclick="LoginUser()">Login</button>
    </div>
    <script>
        document.title = "Login / Dane";
    </script>`;
    container.html(loginContainer);

    RemoveLoader();
}

async function CreatePost() {
    ShowLoader();
    
    const createPostContainer = `<div class="create-post-container">
        <button onclick="ShowLoader(); PostContainer();"><i class="fas fa-times"></i></button>
        <input type="text" id="timeline" autocomplete="off">
        <button onclick="SubmitPost()">Post</button>
    </div>
    <script>
        document.title = "Create Post / Dane";
    </script>`;
    container.html(createPostContainer);

    RemoveLoader();
}

async function ViewPost(post) {
    ShowLoader();

    const postData = await GetViewPost(post)
    let post_detail = `<button onclick="ShowLoader(); PostContainer();"><i class="fas fa-arrow-left"></i></button> Post
    <div class="post">
        <div class="post-l-container">
            <div onclick="ViewProfile('${postData.user_id}')" class="profile">
                <img src="static/img/dane.jpg">
            </div>
        </div>
        <div class="post-r-container">
            <div onclick="ViewProfile('${postData.user_id}')" class="name">${postData.name}</div>
            <div class="username">@${postData.username}</div>
            <div class="post-date">${formatTimestamp(postData.timestamp_created)}</div>
            <div class="post-timeline">${postData.timeline}</div>
            <div class="post-timeline-action">
                <a>${await CommentPostUI(postData.post_id)}</a>
                <a id="${postData.post_id}" onclick="LikePost('${postData.post_id}')">` + await LikePostUI(postData.post_id)+ `</a>
            </div>
        </div>
        <div class="dropdown">
            <a onclick="toggleDropdown(this)"><i class="fas fa-ellipsis-v"></i></a>
            <div class="dropdown-content">
                <a onclick="EditPost('${postData.post_id}')"><i class="fas fa-pencil-alt"></i> Edit</a>
                <a onclick="DeletePost('${postData.post_id}')"><i class="fas fa-trash-alt"></i> Delete</a>
            </div>
        </div>
    </div>
    <script>
        document.title = '${postData.name} on Dane: "${postData.timeline}" / Dane';
    </script>`;
    container.html(post_detail);

    RemoveLoader();
}