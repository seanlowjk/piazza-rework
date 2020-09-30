const sampleFollowup = {
    content: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et  magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
        consequat.
    `,
    index: 0,
    isLiked: false,
    likes: 0,
    isResolved: false
};

const samplePost = {
    id: 3,
    title: "Post",
    dateIndex: 2,
    dates: ["16/9/20", "18/9/20", "20/9/20"],
    isNote: false,
    isUnread: true,
    isLiked: false,
    isFavorite: false,
    unresolved: 1,
    list: "#pinned",
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et  magna aliqua. Ut enim ad minim veniam, 
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
      consequat.
      `,
    views: 18,
    likes: 18,
    studentAnswer: {
        content: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et  magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat.
        `,
        isLiked: false,
        likes: 20
    },
    instructorAnswer: {
        content: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et  magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat.
        `,
        isLiked: false,
        likes: 20
    },
    followupDiscussions: [
        sampleFollowup
    ]
};

const samplePost2 = {
    id: 4,
    title: "Post",
    dateIndex: 0,
    dates: ["20/9/20"],
    isNote: false,
    isUnread: true,
    isLiked: false,
    isFavorite: false,
    unresolved: 0,
    list: "#list-0",
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et  magna aliqua. Ut enim ad minim veniam, 
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
      consequat.
      `,
    views: 18,
    likes: 18,
    studentAnswer: {
        content: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et  magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat.
        `,
        isLiked: false,
        likes: 20
    },
    instructorAnswer: {
        content: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et  magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat.
        `,
        isLiked: false,
        likes: 20
    },
    followupDiscussions: [

    ]
};


const samplePost3 = {
    id: 2,
    title: "Post",
    dateIndex: 0,
    dates: ["8/9/20", "12/9/20", "14/9/20", "16/9/20", "20/9/20"],
    isNote: false,
    isUnread: true,
    isLiked: false,
    isFavorite: false,
    unresolved: 0,
    list: "#list-0",
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et  magna aliqua. Ut enim ad minim veniam, 
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
      consequat.
      `,
    views: 18,
    likes: 18,
    studentAnswer: {
        content: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et  magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat.
        `,
        isLiked: false,
        likes: 20
    },
    instructorAnswer: {
        content: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et  magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat.
        `,
        isLiked: false,
        likes: 20
    },
    followupDiscussions: [

    ]
};

const sampleNote = {
    id: 1,
    title: "Note",
    dateIndex: 2,
    dates: ["16/9/20", "18/9/20", "20/9/20"],
    isNote: true,
    isUnread: true,
    isLiked: false,
    isFavorite: false,
    unresolved: 0,
    list: "#pinned",
    content: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et  magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
        consequat.
    `,
    views: 18,
    likes: 18,
    studentAnswer: null,
    instructorAnswer: null,
    followupDiscussions: []
};

const sampleDraft0 = {
    id: 0, 
    content: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et  magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
    consequat.`,
    isDeleted: false
}

const sampleDraft1 = {
    id: 1, 
    content: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et  magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
    consequat.`,
    isDeleted: false
}

const draftsContainer = `
<div class="col ml-4 mt-3" id="drafts-content">
<div class="row">
  <h2>Drafts</h2>
</div>
</div>
`;

const filtersContent = `
<div class="col ml-4 mt-3" id="filters-content">
<div class="row">
  <h2>Filters</h2>
</div>

<div class="d-flex flex-row row justify-content-start">
  <div class="flex-fill">
    <fieldset class="form-group">
      <div class="row">
        <legend class="col-form-label col-sm-2 pt-0">
          <h5>Posts:</h5>
        </legend>
        <div class="col">
          <div class="row mt-2 form-check">
            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="none"
              >
            <label class="form-check-label" for="gridRadios1">
              All Posts
            </label>
          </div>
          <div class="row mt-2 form-check">
            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="unread">
            <label class="form-check-label" for="gridRadios2">
              Unread Posts
            </label>
          </div>
          <div class="row mt-2 form-check">
            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="unanswered">
            <label class="form-check-label" for="gridRadios3">
              Unanswered Posts
            </label>
          </div>
          <div class="row mt-2 form-check">
            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios4" value="followups">
            <label class="form-check-label" for="gridRadios4">
              Posts with unresolved Follow-ups
            </label>
          </div>
        </div>
      </div>
    </fieldset>
  </div>
</div>

<div class="d-flex flex-row row justify-content-start">
  <div class="flex-fill">
    <fieldset class="form-group">
      <div class="row">
        <legend class="col-form-label col-sm-2 pt-0">
          <h5>Tags:</h5>
        </legend>
        <fieldset class="d-flex flex-col col" id="checkArray">
          <div class="row btn-group-toggle justify-content-start w-75 align-items-start" data-toggle="buttons" id="my-tags">
           
          </div>
        </fieldset>
      </div>
    </fieldset>
  </div>
</div>

<div class="d-flex flex-row row justify-content-start">
  <button class="btn btn-lg btn-primary m-3" onClick="setFilters()">
    Filter Posts
  </button>
  <button class="btn btn-lg btn-danger m-3" onClick="resetFilters()">
    Reset Filters
  </button>
</div>

</div>
`;

/*
  Simple Abstraction for location.reload()
*/
function hardReload() {
    location.reload();
}

function setClass(classString) {
    if (localStorage.classSelected) {
        localStorage.classSelected = String(classString);
    } else {
        localStorage.classSelected = "CS1191S";
    }
    document.getElementById("dropdownMenuButton").innerHTML = `Class: ${localStorage.classSelected} `;
};

function getPost(id) {
    let posts = JSON.parse(localStorage.posts);

    for (let i = 0; i < posts.length; i++) {
        if (posts[i].id == id) {
            return posts[i];
        }
    }

    return null;
}

function editPost(id, post) {
    let posts = JSON.parse(localStorage.posts);

    for (let i = 0; i < posts.length; i++) {
        if (posts[i].id == id) {
            posts[i] = post;
        }
    }

    localStorage.posts = JSON.stringify(posts);
    hardReload();
}

const deleteDraft = (id) => {
    let drafts = JSON.parse(localStorage.drafts);
    for (let i = 0; i < drafts.length; i++) {
        if (drafts[i].id == id) {
            drafts[i].isDeleted = true;
        }
    }

    localStorage.drafts = JSON.stringify(drafts);
    hardReload();
}

function generateTag(bool, id, val)  {
    return `
    <label class="btn btn-secondary m-2" id="tag${id}">
    <input type="checkbox" ${bool ? 'checked' : ''}> ${val}
  </label>
    `;
};

$(document).ready(function () {
    /*
      If never set before, set all the necessary attributes 
      with their default values. 
    */
    if (!localStorage.posts) {
        localStorage.posts = JSON.stringify([samplePost, samplePost2, samplePost3, sampleNote]);
    }

    if (!localStorage.drafts) {
        localStorage.drafts = JSON.stringify([sampleDraft0, sampleDraft1]);
    }

    if (!localStorage.tags) {
        localStorage.tags = JSON.stringify([]);
    }

    if (!localStorage.filter) {
        localStorage.filter = 'none';
    }

    /*
      Filter posts based on current filter. 
    */

    let posts = [];

    if (localStorage.filter === 'unread') {
        posts = JSON.parse(localStorage.posts).filter(isUnread);
    } else if (localStorage.filter === 'unanswered') {
        posts = JSON.parse(localStorage.posts).filter(isUnanswered);
    } else if (localStorage.filter === 'followups') {
        posts = JSON.parse(localStorage.posts).filter(isClear);
    } else {
        posts = JSON.parse(localStorage.posts);
    }

    posts.forEach(post => {
        if (post.isFavorite) {
            $("#favorites").append(generatePostSummary(post));
        } else {
            $(post.list).append(generatePostSummary(post));
        }
    });

    /*
      Dynaically change main content whenever necessary
      based on the mainContentNumber attribute. 
    */
    if (!localStorage.mainContentNumber) {
        localStorage.mainContentNumber = 0;
    }

    if (localStorage.mainContentNumber == 0) {
        $("#main-content").append(generateFilters());
    } else if (localStorage.mainContentNumber > 0) {
        $("#main-content").append(generatePostContent(getPost(localStorage.mainContentNumber)));
    } else if (localStorage.mainContentNumber == -1) {
        let theDrafts = JSON.parse(localStorage.drafts);
        $("#main-content").append(draftsContainer);
        for (let i = 0; i < theDrafts.length; i++) {
            $("#drafts-content").append(generateDraft(theDrafts[i]));
        }
    } else if (localStorage.mainContentNumber == -2) {
        $("#main-content").append(filtersContent);
    }

    /*
      Restore Filter Checkelist
    */
    for (let i = 1; i <= 4; i++) {
        let elem = $(`#gridRadios${i}`)[0];
        let here = document.getElementById(`gridRadios${i}`);
        if (!here) {
            continue;
        }
        if (elem.value === localStorage.filter) {
            here.checked = true;
            break;
        }
    }

    /*
      Restore Filter Tags
    */
    let tags = JSON.parse(localStorage.tags);
    let tag_vals = ["CS1101S", "CS1231", "CS3240", "Design", "Majestic", "UIUX"];

    for (let i = 0; i < 6; i++) {
        $("#my-tags").append(generateTag(tags.includes(tag_vals[i]), i, tag_vals[i]));
    }
});