function toggleDropdown(button, list) {
    var button = document.getElementById(button);
    button.classList.toggle("fa-caret-up");

    var list = document.getElementById(list);
    if (list.style.display === "none") {
        list.style.display = "block";
    } else {
        list.style.display = "none";
    }
}

$(document).ready(function () {
    var image = '<img src="images/help-icons.png" alt="help-icons">';
    $('#icons-popover').popover({
        placement: 'bottom',
        content: image,
        html: true
    });

    var content = '<p>Text Copied!</p>';
    $('#copy-popover').popover({
        placement: 'bottom',
        content: content,
        html: true
    });
});

