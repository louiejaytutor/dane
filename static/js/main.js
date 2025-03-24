const params = new URLSearchParams(window.location.search);

const posts = document.getElementById("posts");

// const post = params.get("post");

async function viewPost(post) {
    window.location.href = `post?${post}`;
}
