/* State Modification */
const changeDate = (id, index) => {
  let post = getPost(id);
  post.dateIndex = parseInt(index);
  editPost(id, post);
}

const togglePostLike = (id) => {
  let post = getPost(id);
  if (post.isLiked) {
    post.isLiked = false;
    post.likes--;
  } else {
    post.isLiked = true;
    post.likes++;
  }

  editPost(id, post);
}

const toggleInstructorLike = (id) => {
  let post = getPost(id);
  if (post.instructorAnswer.isLiked) {
    post.instructorAnswer.isLiked = false;
    post.instructorAnswer.likes--;
  } else {
    post.instructorAnswer.isLiked = true;
    post.instructorAnswer.likes++;
  }

  editPost(id, post);
}

const toggleStudentLike = (id) => {
  let post = getPost(id);
  if (post.studentAnswer.isLiked) {
    post.studentAnswer.isLiked = false;
    post.studentAnswer.likes--;
  } else {
    post.studentAnswer.isLiked = true;
    post.studentAnswer.likes++;
  }

  editPost(id, post);
}

const togglePostFavorite = (id) => {
  let post = getPost(id);
  if (post.isFavorite) {
    post.isFavorite = false;
  } else {
    post.isFavorite = true;
  }

  editPost(id, post);
}

const toggleDiscussionLike = (id, index) => {
  let post = getPost(id);
  if (post.followupDiscussions[index].isLiked) {
    post.followupDiscussions[index].isLiked = false;
    post.followupDiscussions[index].likes--;
  } else {
    post.followupDiscussions[index].isLiked = true;
    post.followupDiscussions[index].likes++;
  }

  editPost(id, post);
}

const toggleDiscussionResolve = (id, index) => {
  let post = getPost(id);
  if (!post.followupDiscussions[index].isResolved) {
    post.followupDiscussions[index].isResolved = true;
    post.unresolved--;
    alert(2);
  } else {
    post.followupDiscussions[index].isResolved = false;
    post.unresolved++;
    alert(3);
  }

  editPost(id, post);
}

const createFollowup = (id) => {
  let post = getPost(id);
  post.unresolved++;
  const newFollowup = {
    content: post.content,
    index: post.followupDiscussions.length,
    isLiked: false,
    likes: 0,
    isResolved: false
  };
  post.followupDiscussions.push(newFollowup);
  alert(1);
  editPost(id, post);
}

/* Getters  */
const getDate = (id, index) => {
  return getPost(id).dates[index];
}

const generatePostContent = (post) => {
  return `
    <div class="p-2 mt-3 bg-heading post-slider">
    <div class="row">
      <div class="mx-2 col-3 my-auto">
        Viewing Post At: ${post.dates[post.dateIndex]}
      </div>
      <div class="col mr-auto">
        <button type="button" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#exampleModal">
          Open Slider
        </button>

        <div class="modal" id="exampleModal" tabindex="0" role="dialog" aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Post History</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body d-flex justify-content-center">
                <input id="input${post.id}" data-slider-id='ex1Slider' type="text" data-slider-min="0" data-slider-max="${post.dates.length - 1}"
                  data-slider-step="1" data-slider-value="${post.dateIndex}" />
                <script>
                  $('#input${post.id}').slider({
                    formatter: function (i) {
                      return '' + getDate(${post.id}, i);
                    }
                  });
                </script>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" onclick="changeDate(${post.id}, $('#input${post.id}')[0].value);"
                  data-dismiss="modal">Save changes</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <br />

  <div>
    <div class="py-2 bg-heading post-header">
      <p class="my-auto question-header">${post.isNote ? 'Note' : 'Question'} ${post.id} </p>
    </div>

    <div class="card post-content">
      <div class="card-body">
        <div class="row">
          <div class="col-3">
            <h5 class="my-auto">Post</h5>
          </div>
          <div class="col my-auto text-right">
            <div><i class="fas fa-eye"></i> ${post.views}</div>
            <div><i class="far fa-thumbs-up"></i> ${post.likes}</div>
          </div>
        </div>

        <div class="row">
          <div class="col-9">
            <p>
                ${post.content}
            </p>
          </div>
          <div class="col my-auto"></div>
        </div>
        <div class="row">
        <div class="col-3 d-flex align-items-center text-align-center">
        <i class="fas fa-user-circle fa-2x" style="color:black;"></i> &nbsp; User
      </div>
          <div class="col-9">
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex flex-row row bg-buttons post-buttons">
      <div class="px-2">
        <a class="mx-auto" onClick="togglePostLike(${post.id})" >
          <i class="${post.isLiked ? 'fas' : 'far'} fa-thumbs-up"
          style="color: ${post.isLiked ? '#407BA7' : 'black'};"></i>
          <p style="color: black;">${post.isLiked ? 'Unlike' : 'Like'}</p>
        </a>
      </div>
      <div class="px-2">
      <a class="mx-auto" onClick="togglePostFavorite(${post.id})" >
            <i class="${post.isFavorite ? 'fas' : 'far'} fa-star" 
                style="color: ${post.isFavorite ? '#e3b829' : 'black'};"></i>
            <p style="color: black;">${post.isFavorite ? 'Unfavorite' : 'Favourite'}</p>
        </a>
      </div>
      <div class="px-2">
      <a tabindex="0" id="copy-popover" role="button" rel="popover" data-toggle="popover" data-trigger="focus"
      data-content="">
      
      <i class="fas fa-link"></i>
      <p>Copy Link</p>
    </a>
      </div>
    </div>
  </div>

  ${post.instructorAnswer ? `
  <br />

  <div>
  <div class="py-2 bg-instr post-header">
    <p class="my-auto question-header">Instructor Answer </p>
  </div>

  <div class="card post-content">
    <div class="card-body">
      <div class="row">
        <div class="col-3">
          <h5 class="my-auto">Post</h5>
        </div>
        <div class="col my-auto text-right">
          <div><i class="far fa-thumbs-up"></i> ${post.instructorAnswer.likes}</div>
        </div>
      </div>

      <div class="row">
        <div class="col-9">
          <p>
            ${post.instructorAnswer.content}
          </p>
        </div>
        <div class="col my-auto"></div>
      </div>
      <div class="row">
      <div class="col-3 d-flex align-items-center text-align-center">
      <i class="fas fa-user-circle fa-2x" style="color:black;"></i> &nbsp; User
    </div>
        <div class="col-9">
        </div>
      </div>
    </div>
  </div>

  <div class="d-flex flex-row row bg-buttons post-buttons">
    <div class="px-2">
    <a class="mx-auto" onClick="toggleInstructorLike(${post.id})" >
        <i class="${post.instructorAnswer.isLiked ? 'fas' : 'far'} fa-thumbs-up"
        style="color: ${post.instructorAnswer.isLiked ? '#407BA7' : 'black'};"></i>
        <p style="color: black;">${post.instructorAnswer.isLiked ? 'Unlike' : 'Like'}</p>
    </a>
    </div>
  </div>
</div>
  ` : ``}

 ${post.studentAnswer ? `
    <br />

   <div>
    <div class="py-2 bg-student post-header">
      <p class="my-auto question-header">Student Answer </p>
    </div>

    <div class="card post-content">
      <div class="card-body">
        <div class="row">
          <div class="col-3">
            <h5 class="my-auto">Post</h5>
          </div>
          <div class="col my-auto text-right">
            <div><i class="far fa-thumbs-up"></i> ${post.studentAnswer.likes} </div>
          </div>
        </div>

        <div class="row">
          <div class="col-9">
            <p>
            ${post.studentAnswer.content}
            </p>
          </div>
          <div class="col my-auto"></div>
        </div>
        <div class="row">
        <div class="col-3 d-flex align-items-center text-align-center">
        <i class="fas fa-user-circle fa-2x" style="color:black;"></i> 
        &nbsp; User
      </div>
          <div class="col-9">
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex flex-row row bg-buttons post-buttons">
      <div class="px-2">
      <a class="mx-auto" onClick="toggleStudentLike(${post.id})" >
            <i class="${post.studentAnswer.isLiked ? 'fas' : 'far'} fa-thumbs-up"
            style="color: ${post.studentAnswer.isLiked ? '#407BA7' : 'black'};"></i>
            <p style="color: black;">${post.studentAnswer.isLiked ? 'Unlike' : 'Like'}</p>
        </a>
      </div>
    </div>
  </div>
 ` : ``}

  <br />

  <div>
    <div class="py-2 bg-heading post-header">
      <p class="my-auto question-header">Follow-up Discussions </p>
    </div>

    <div class="card post-content">

      ${post.followupDiscussions.map(discussion => `
      <div class="col">
      <div class="col card-body bg-buttons my-3">
        <div class="d-flex flex-row row">
          <div class="d-flex px-2 align-items-center text-align-center">
            <i class="fas fa-user-circle fa-2x" style="color:black;"></i> &nbsp; User
          </div>
          <div class="p-2 mx-2" style="color: white; background: ${discussion.isResolved ? 'green' : 'red'};">
           ${discussion.isResolved ? 'Resolved' : 'Unresolved'}
            </div>
          <div class="px-2 ml-auto">
            <i class="far fa-thumbs-up"></i> ${discussion.likes}
          </div>
        </div>
        <div class="row px-2">
          ${discussion.content}
        </div>
        <div class="d-flex flex-row row px-2">
          <div class="px-2">
          <a class="mx-auto" onClick="toggleDiscussionLike(${post.id}, ${discussion.index})" >
                <i class="${discussion.isLiked ? 'fas' : 'far'} fa-thumbs-up"
                style="color: ${discussion.isLiked ? '#407BA7' : 'black'};"></i>
                <p style="color: black;">${discussion.isLiked ? 'Unlike' : 'Like'}</p>
            </a>
          </div>
          <div class="px-2">
            <a class="mx-auto" onClick="toggleDiscussionResolve(${post.id}, ${discussion.index})"
                style="color: black;">
            <i class="fas fa-wrench"></i>
            <p style="color: black;">${discussion.isResolved ? 'Unresolve' : 'Resolve'}</p>
        </a>
          </div>
        </div>
        <div class="row px-2">
          <div class="p-1 card bg-white w-100">
            Reply to followup discussion..
          </div>
        </div>
      </div>
    </div>
      `)}

      <div class="col">
      <div class="col card-body bg-buttons my-3">
        <div class="d-flex flex-row row">
        <div class="d-flex p-2 align-items-center text-align-center">
        <i class="fas fa-user-circle fa-2x" style="color:black;"></i> &nbsp; User
      </div>
        </div>

        <br />

        <div class="row px-2">
        <button type="button" onClick="createFollowup(${post.id})" class="btn btn-sm btn-primary">
          Create new Followup Discussion
        </button>
        </div>
    
      </div>
    </div>

    </div>
  </div>
    `;
};