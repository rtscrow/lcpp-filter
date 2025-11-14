blockedUsers = ['Alex', 'Jared', 'Winsor']



function remove_blocked_users() {
    console.log("lccp-filter running")
    const allComments = document.querySelectorAll('.wpd-comment');          // gets every comment
    for (const comment of allComments) {
        // get username
        username = comment.querySelector('.wpd-comment-author').innerText; 
        console.log("processing post from: " + username);
        // remove if in blocklist
        if (blockedUsers.includes(username)) {
            console.log("blocking post from: " + username);
            comment.style.display = 'none';
        }
    }
}

window.addEventListener('load', () => {                                     //runs when the page loads
    setTimeout(remove_blocked_users(), 2000);                               //waits 2s for comments to load (hopefully)
});

const observer = new MutationObserver(() => remove_blocked_users());        //creates an observer that runs remove_blocked_users when something changes
observer.observe(document.body, { childList: true, subtree: true });        //does the actual observing