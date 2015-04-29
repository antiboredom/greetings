function showProject(name) {
  // $('section.project').hide();
  // $(name).show();
  window.scrollTo(0, 0);
  $('#main').addClass('ready');
  $('#projects')
    .html('')
    .load('/projects/' + name.replace('#', '') + '.html', function(){
      window.scrollTo(0, 0);
    })
    .show();
}


var hash = window.location.hash;

if (hash) {
  showProject(hash);
}

$('a.project').click(function(){
  showProject($(this).attr('href'));
});

