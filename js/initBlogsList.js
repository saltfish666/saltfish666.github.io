/*
*https://api.github.com/repos/getlantern/lantern/issues?access_token=8e3a80f1bf33059a61d43327d8f7ea085401ff7c 获得issues
*parmas：https://developer.github.com/v3/issues/#custom-media-types
*
*
*
* */



// 获得最近的 10 个issue
/*
let query2 = `{
                  repository(owner: "gitblog666", name: "program") {
                    issues(last:10){
                      nodes{
                        title
                        bodyHTML
                        id
                        number
                      }
                    }
                  }
                }`

$.ajax({
    url: "https://api.github.com/graphql",
    type: 'post',
    beforeSend: function(xhr) {
        xhr.setRequestHeader("Authorization","token " + localStorage._token);
    },
    data: JSON.stringify({
        query: query2
    }) ,
    success:  function (data) {

        var nodes = data.data.repository.issues.nodes
        console.log(nodes)
        /!*
        var blogsListApp = new Vue({
            el:"#blogsList",
            data:{
                nodes:nodes,
            },
        })*!/
        var blogsListInnerHTML = ``
        for (let i = 0; i<nodes.length; i++ ){

            titleLink = `https://saltfish666.github.io/article.html?repositoryOwner=gitblog666&repositoryName=program&issueNum=${nodes[i].number}`
            blogsListInnerHTML = `<div class="mypanel" v-for="node in nodes">
                                     <header class="mypanel-title">
                                        <a href="${titleLink}" target="_blank"><h3 >${nodes[i].title} </h3></a>
                                     </header>
                                     <!--<div class="mypanel-author">
                                        <h3 class="mypanel-title">查拉图斯</h3>
                                        </div>-->
                                     <main class="mypanel-body" >
                                        ${nodes[i].bodyHTML}
                                     </main>
                                     <footer>
                                         <button class="btn">👍</button>
                                     </footer>
                                   </div>`      +    blogsListInnerHTML
        }
        var blogsList = document.getElementById("blogsList")
        blogsList.innerHTML = blogsListInnerHTML
    }
});*/
