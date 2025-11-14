blockedUsers = ['Alex', 'Jared', 'Winsor']

function sleep(ms) { //https://stackoverflow.com/a/39914235
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    while (document.readyState == 'complete') {
        await sleep(50);
        console.log("lccp-filter running")
        const allComments = document.querySelectorAll('.wpd-comment'); 
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
}

main();