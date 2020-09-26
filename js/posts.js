/* State Modifications */
const addView = (id) => {
  let post = getPost(id);
  post.views ++;

  if (post.isUnread) {
    post.isUnread = false;
  }

  editPost(id, post);
}

const viewContent = (id) => {
  setMainContent(id);
  addView(id);
}

const generateColor = (post) => {
  if (post.id == parseInt(localStorage.mainContentNumber)) {
    return 'current-summary';
  } else {
    if (post.isUnread) {
      return 'new-summary';
    } else {
      return 'post-summary';
    }
  }
}

const generatePostSummary = (post) => {
  return `
    </li>
    <a class="card ${generateColor(post)}" onClick="viewContent(${post.id})" href="index.html">
        <div class="card-body">
            <div class="row">
                <div class="col-3">
                    <h5 class="my-auto truncated-header">${post.title}</h5>
                </div>
                <div class="col-6 text-right">
                    <h6 class="my-auto">${post.dates[post.dates.length - 1]}</h6>
                </div>
                <div class="col my-auto text-right">
                    ${post.isNote ? `<img src="icons/note_post.svg" alt="Note" />` : ""}
                    ${post.instructorAnswer != null && !post.isNote ? `<img src="icons/instructor_answer.svg" alt="Instructor Answer Logo" />` : ''}
                    ${post.studentAnswer != null && !post.isNote ? `<img src="icons/student_answer.svg" alt="Student Answer Logo" />` : ''}
                    ${post.unresolved > 0 ? `<img src="icons/unresolved.svg" alt="Unresolved Discussion Logo" />` : ''}
                </div>
            </div>

            <br />

            <div class="row">
                <div class="col-9">
                    <p class="truncated-text">
                        ${post.content}
                    </p>
                </div>
                <div class="col my-auto"></div>
            </div>

            <div class="row">
                <div class="col-9">
                </div>
                <div class="col text-right">
                    <i class="fas fa-eye"></i> ${post.views}
                  </div>
            </div>

        </div>
    </a>
    </li>
    `;
};

const generateFilters = () => {
  return `
    <div class="main-filters container-fluid bg-white">

    <div class="col py-2">
      <div class="row">
        <h5> CS1101S: Programming Methodology </h5>
      </div>

      <div class="row">
        <div class="col-sm-2 my-auto">
          <i class="fas fa-comment-dots fa-3x"></i>
        </div>
        <div class="col-sm-6 my-auto">
          <p class="my-auto"> ${JSON.parse(localStorage.posts).filter(isUnread).length} Posts Unread </p>
        </div>
        <div class="col-sm-3 my-auto mx-auto">
          <button onClick="applyFilter('unread')" class="btn btn-secondary" type="button">
            View
          </button>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-2 my-auto">
          <i class="fas fa-question-circle fa-3x"></i>
        </div>
        <div class="col-sm-6 my-auto">
          <p class="my-auto"> ${JSON.parse(localStorage.posts).filter(isUnanswered).length}  Posts Unanswered </p>
        </div>
        <div class="col-sm-3 my-auto mx-auto">
          <button onClick="applyFilter('unanswered')" class="btn btn-secondary" type="button">
            View
          </button>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-2 my-auto">
          <i class="fas fa-comments fa-3x"></i>
        </div>
        <div class="col-sm-6 my-auto">
          <p class="my-auto"> ${JSON.parse(localStorage.posts).reduce((acc, curr) => acc + curr.unresolved, 0)}  Followup Discussions Unresolved </p>
        </div>
        <div class="col-sm-3 my-auto mx-auto">
          <button onClick="applyFilter('followups')" class="btn btn-secondary" type="button">
            View
          </button>
        </div>
      </div>
    </div>
    `;
};