
function applyFilter(filter) {
    localStorage.filter = filter;
    alert(4);
    hardReload();
}

function isUnread(post) {
    return post.isUnread;
}

function isUnanswered(post) {
    return !post.isNote && !post.studentAnswer && !post.instructorAnswer;
}

function isClear(post) {
    return post.unresolved > 0;
}

function resetContentAndFilters() {
    localStorage.mainContentNumber = 0;
    hardReload();
}

function setMainContent(id) {
    localStorage.mainContentNumber = id;
    hardReload();
}