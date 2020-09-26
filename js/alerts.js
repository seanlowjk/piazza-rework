const followupDiscussionCreationSuccess = `
<div class="alert alert-success alert-dismissible">
<button type="button" class="close" data-dismiss="alert">&times;</button>
<strong> Follow-up Discussion Created!  </strong>
</div>
`;

const discussionResolvedSuccess = `
<div class="alert alert-success alert-dismissible">
<button type="button" class="close" data-dismiss="alert">&times;</button>
<strong> Marked Discussion as Resolved! </strong>
</div>
`;

const discussionUnresolvedDanger = `
<div class="alert alert-danger alert-dismissible">
<button type="button" class="close" data-dismiss="alert">&times;</button>
<strong> Marked Discussion as Unresolved!  </strong>
</div>
`;


const filtersAppliedSuucess = `
<div class="alert alert-success alert-dismissible">
<button type="button" class="close" data-dismiss="alert">&times;</button>
<strong> Filters Applied!  </strong>
</div>
`;

const draftDeletedDanger = `
<div class="alert alert-danger alert-dismissible">
<button type="button" class="close" data-dismiss="alert">&times;</button>
<strong> Draft Deleted!  </strong>
</div>
`;

const filtersClearedDanger = `
<div class="alert alert-danger alert-dismissible">
<button type="button" class="close" data-dismiss="alert">&times;</button>
<strong>  Filters Cleared!  </strong>
</div>
`;

const alert = (id) => {
    localStorage.alert = id;
};

$(document).ready(function () {
    if (!localStorage.alert) {
        localStorage.alert = 0;
    }

    switch (parseInt(localStorage.alert)) {
        case 1:
            $("body").append(followupDiscussionCreationSuccess);
            break;
        case 2:
            $("body").append(discussionResolvedSuccess);
            break;
        case 3:
            $("body").append(discussionUnresolvedDanger);
            break;
        case 4:
            $("body").append(filtersAppliedSuucess);
            break;
        case 5:
            $("body").append(draftDeletedDanger);
            break;
        case 6:
            $("body").append(filtersClearedDanger);
            break;
        default:
            break;
    }

    localStorage.alert = 0;
});

