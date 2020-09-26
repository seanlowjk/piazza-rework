class PiazzaNavBar extends HTMLElement {
    constructor() {
      super();
  
      this.classSelected = localStorage.classSelected || 'CS1101S';
  
      window.onload = () => {
        this.innerHTML = `<div id="navigation-bar">
        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
          <a class="navbar-brand" onClick="resetContentAndFilters();" href="index.html">
            <img src="icons/piazza_logo.svg" alt="Piazza Logo" height="130px" width="70px" />
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
  
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item dropdown">
                <button class="btn btn-light btn-sm dropdown-toggle" type="button" id="dropdownMenuButton"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Class: ${this.classSelected}
                </button>
                <div class="dropdown-menu">
                  <a onClick="setClass('CS1101S')" class="dropdown-item">CS1101S</a>
                  <a onClick="setClass('CS1231')" class="dropdown-item">CS1231</a>
                  <a onClick="setClass('CS3240')" class="dropdown-item">CS3240</a>
                </div>
              </li>
            </ul>
            <ul class="navbar-nav ml-auto">
              <li class="nav-item mr-3">
                <a class="nav-link" style="color:white;" ><i class="fas fa-user-circle" style="color:white;"></i>
                  User</a>
              </li>
              <li class="nav-item">
                <a  class="nav-link" style="color:white;"><i class="fas fa-door-open" style="color:white;"></i>
                  Logout</a>
              </li>
            </ul>
          </div>
        </nav>
  
        <nav class="navbar navbar-expand navbar-light bg-secondary">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <button class="btn btn-primary btn-lg dropdown-toggle" type="button" id="dropdownMenuButton"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                New Post
              </button>
              <div class="dropdown-menu text-center bg-primary">
                <a class="dropdown-item dropdown-post-button">Post a Question</a>
                <a class="dropdown-item dropdown-post-button">Post a Note</a>
              </div>
            </li>
          </ul>
  
          <ul class="navbar-nav ml-3 mr-auto">
            <a onClick="setMainContent(-1)"  href="index.html">
              <button class="btn btn-secondary" type="button">
                Drafts
              </button>
            </a>
          </ul>
  
          <ul class="navbar-nav ml-auto">
            <a onClick="setMainContent(-2)" href="index.html">
            <button class="btn btn-secondary" type="button">
              Filters
            </button>
            </a>
          </ul>
        </nav>
      </div>`;
      };
  
    }
  }
  
  customElements.define('piazza-nav-bar',
    PiazzaNavBar
  );
  

