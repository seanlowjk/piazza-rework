$(document).ready(function () {
  var delete0 = 'Are you sure you want to delete? <a class="btn btn-sm btn-danger" id="dd0"> Delete Draft </a>';
  var delete1 = 'Are you sure you want to delete? <a class="btn btn-sm btn-danger" id="dd1"> Delete Draft 1 </a>';

  $('#drafts-popover-0').popover({
    placement: 'bottom',
    content: delete0,
    html: true
  });

  $(document).on('click', '#dd0', function(){
    deleteDraft(0);
    alert(5);
  });

  $('#drafts-popover-1').popover({
    placement: 'bottom',
    content: delete1,
    html: true
  });

  $(document).on('click', '#dd1', function(){
    deleteDraft(1);
    alert(5);
  });
});

const generateDraft = (draft) => {
  return draft.isDeleted ? `` :  `
   <br />
   <div class="row">
   <div class="card draft-summary">
     <div class="card-body">
       <div class="row">
         <div class="col-3">
           <h5 class="my-auto truncated-header">Post</h5>
         </div>
         <div class="col-9 text-right">
           <h6 class="my-auto">20/9/20</h6>
         </div>
       </div>
 
       <br />
 
       <div class="row">
         <div class="col-12">
           <p class="truncated-text">
             ${draft.content}
           </p>
         </div>
         <div class="col my-auto"></div>
       </div>
 
 
       <div class="col">
         <div class="row">
           <button class="btn btn-lg btn-primary mr-3" type="button">
             Edit Draft
           </button>
           <a tabindex="0" id="drafts-popover-${draft.id}" class="btn btn-lg btn-danger" role="button" rel="popover"
             data-toggle="popover" data-trigger="click" data-content="">
             Delete Draft
           </a>
         </div>
       </div>
 
 
     </div>
   </div>
 </div>
   `
};