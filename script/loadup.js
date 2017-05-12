/**
 * slide navigation
 */

/**
 * number of pages
 */
var pagelimit = 10;

/**
 * starting page
 */
var page = 0;

/**
 * path and prefix for the slides
 */
var contentprefix = 'content/page_';

/**
 * slide extension
 */
var extension = '.php';

/**
 * loads the slide and displays it
 *
 * @param  textFile
 */
function read(textFile){
    var xhr = new XMLHttpRequest;
    xhr.open('GET',textFile);
    xhr.onload=show;
    console.log(xhr.send());
}

/**
 * loads the content into a div
 */
function show(){
    var pre = document.createElement('pre');
    pre.textContent = this.response;
    var container = document.getElementById('content');
    container.innerHTML = pre.textContent;

    paginate();
}

/**
 * go to the previous page
 */
function previousPage() {
  if (page > 0) {
    page--;
  }
  read(contentprefix + page + extension);
}

/**
 * go to the next page
 */
function nextPage() {
  if (page < pagelimit) {
    page++;
  }
  read(contentprefix + page + extension);
}

/**
 * go to the first page
 */
function firstPage() {
  page = 0;
  read(contentprefix + page + extension);
}

/**
 * go to the last  page
 */
function lastPage() {
  page = pagelimit;
  read(contentprefix + page + extension);
}

/**
 * manage the pagination
 */
function paginate() {
  var paginator = document.getElementById('paginate');
  var pagination = (page + 1) + ' of ' + (pagelimit + 1);
  paginator.innerHTML = pagination;
}

/**
 * show the first slide as soon as the page has loaded
 */
window.onload=read(contentprefix + 0 + extension);

