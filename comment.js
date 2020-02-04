function displayTable() {
  var resultComment = document.getElementById('js-comment');
  var comment = JSON.parse(localStorage.getItem('comment'));
  var content = comment.map(function(item, index) {
    return '<div class="comment-result"><div class="comment-result-title"><img class="avatar" src="image/php-elephant.png" style="width: 20px;"><p>Name User:</p></div><div class="comment-result-content"><p class="comment-text">' + item + '</p><button class="btn-delete" data-id = ' + index + '>X</button></div></div>';
  });
  resultComment.innerHTML = content.join('');
}

function addComment() {
  var comment = localStorage.getItem('comment');
  comment = comment ? JSON.parse(comment) : [];
  var inp = document.getElementsByClassName('btn-add')[0];
  inp.addEventListener('click', function() {
    comment.push(document.getElementById('js-input-comment').value);
    localStorage.setItem('comment', JSON.stringify(comment));
    displayTable();
    document.getElementById('js-input-comment').value = '';
  })
}

function removeComment() {
  var btnDelete = document.getElementsByClassName('btn-delete');
  var comment = localStorage.getItem('comment');
  comment = comment ? JSON.parse(comment) : [];
  for (var i = 0; i < btnDelete.length; i++) {
    btnDelete[i].addEventListener('click', function(event) {
      var idBtn = event.target.dataset.id;
      comment.splice(idBtn, 1);
      localStorage.setItem('comment', JSON.stringify(comment));
      displayTable();
      location.reload();
    })
  }
}

function count() {
  var count = document.getElementById("count");
  if (comment) {
    count.innerHTML = '(' + comment.length + ')';
  } else {
    count.innerHTML = '(0)';
  }
}
addComment();
displayTable();
removeComment();
count();