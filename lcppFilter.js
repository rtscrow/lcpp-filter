blockedUsers = ['Alex']
const allComments = document.querySelectorAll('.wpd-comment');
for (const comment of allComments) {
    // get username
    username = comment.querySelector('.wpd-comment-wrap').querySelector('.wpd-comment-right').querySelector('.wpd-comment-author').querySelector('.wpd-comment-header').querySelector('.wpd-user-info').querySelector('.wpd-uinfo-top').querySelector('.wpd-comment-author').innerText;
   // remove if in blocklist
    if (username in blockedUsers) {
        comment.style.display = 'none';
    }
}