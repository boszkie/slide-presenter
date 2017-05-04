var pagelimit = 10;

var page = 0;
var contentprefix = 'content/page_';
var extension = '.php';

function read(textFile){
    var xhr = new XMLHttpRequest;
    xhr.open('GET',textFile);
    xhr.onload=show;
    xhr.send();
}

function show(){
    var pre = document.createElement('pre');
    pre.textContent = this.response;
    var container = document.getElementById('content');
    container.innerHTML = pre.textContent;

    paginate();
}

function previousPage() {
  if (page > 0) {
    page--;
  }
  read(contentprefix + page + extension);
}

function nextPage() {
  if (page < pagelimit) {
    page++;
  }
  read(contentprefix + page + extension);
}

function firstPage() {
  page = 0;
  read(contentprefix + page + extension);
}

function lastPage() {
  page = pagelimit;
  read(contentprefix + page + extension);
}

function paginate() {
  var paginator = document.getElementById('paginate');
  var pagination = (page + 1) + ' of ' + (pagelimit + 1);
  paginator.innerHTML = pagination;
}

window.onload=read(contentprefix + 0 + extension);
