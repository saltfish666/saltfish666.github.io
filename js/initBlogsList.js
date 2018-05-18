/*
*https://api.github.com/repos/getlantern/lantern/issues?access_token=8e3a80f1bf33059a61d43327d8f7ea085401ff7c 获得issues
*parmas：https://developer.github.com/v3/issues/#custom-media-types
*
*
*
* */




var issues = "/repos/lishuai666777/program/issues"
var access_token = localStorage.token

base_url = "https://api.github.com"
var labels = ""
var creator = "saltfish666"

var blogs;
$.ajax({
    url: base_url+issues,
    type: 'get',
    data: {
        access_token:access_token,
        labels:"",
        /*creator:""*/
    },
    success:  function (data) {
        blogs = data
        console.log(data)

        var blogsListApp = new Vue({
            el:"#blogsList",
            data:{
                blogs:blogs,
            },
        })
    }
});


// 获得最近的 10 个issue
let query2 = `{
                  repository(owner: "lishuai666777", name: "program") {
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
        xhr.setRequestHeader("Authorization","token " + localStorage.token);
    },
    data: JSON.stringify({
        query: query2
    }) ,
    success:  function (data) {
        console.log(data)
        var nodes = data.data.repository.issues.nodes

        var blogsListApp = new Vue({
            el:"#blogsList",
            data:{
                nodes:nodes,
            },
        })
    }
});