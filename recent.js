//<![CDATA[
var homePage = "//codexreloadedgames.blogspot.com",
numPosts = 13;
function recentPosts(a){if(document.getElementById("recent-posts")){var e=a.feed.entry,title,link,content="",ct=document.getElementById("recent-posts");for(var i=0;i<numPosts;i++){for(var j=0;j<numPosts;j++){if(e[i].link[j].rel=="alternate"){link=e[i].link[j].href;break}}var title=e[i].title.$t;content+='<li class="recent-posts"><a href="'+link+'" title="'+title+'" target="_blank" rel="nofollow">'+title+'</a></li>'}ct.innerHTML=content}}var rcp=document.createElement('script');rcp.src=homePage+'/feeds/posts/summary?alt=json-in-script&orderby=published&max-results='+numPosts+'&callback=recentPosts';document.getElementsByTagName('head')[0].appendChild(rcp);
//]]>
