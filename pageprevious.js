//<![CDATA[ 
(function($){    
    var newerLink = $('a.newer-link'); 
    var olderLink = $('a.older-link'); 
    $.get(newerLink.attr('href'), function (data) { 
     newerLink.html('<span>'+$(data).find('.post h3.post-title').text()+'</span><strong>&#187;</strong>');    
    },"html"); 
    $.get(olderLink.attr('href'), function (data2) { 
     olderLink.html('<strong>&#171;</strong><span>'+$(data2).find('.post h3.post-title').text()+'</span>');    
    },"html"); 
})(jQuery);
//]]>