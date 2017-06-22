$('[title=applied_subreddit_stylesheet]').attr('href', 'https://www.reddit.com/r/TechnizorCSSStage/stylesheet.css')
$.ajax({
   url: 'https://www.reddit.com/r/TechnizorCSSStage/',
   type:'GET',
   success: function(data) {
       $('.titlebox .usertext-body .md').html($(data).find('.titlebox .usertext-body .md').html());
   }
});
