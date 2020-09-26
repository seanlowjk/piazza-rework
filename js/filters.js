function setFilters() {
    let tags = [];
    let tag_vals = ["CS1101S", "CS1231", "CS3240", "Design", "Majestic", "UIUX"];

    for (let i = 0; i < 6; i++) {
        let elem = $(`#tag${i}`)[0];
        if (elem.className.includes("active")) {
            tags.push(tag_vals[i]);
        }
    }

    localStorage.tags = JSON.stringify(tags);

    for (let i = 1; i <= 4; i++) {
        let elem = $(`#gridRadios${i}`)[0];
        if (elem.checked) {
            localStorage.filter = elem.value;
            break;
        }
    }

    alert(4);
    
    hardReload();
}

function resetFilters() {
    localStorage.tags = JSON.stringify([]);
    localStorage.filter = "none";
    alert(6);
    hardReload();
}