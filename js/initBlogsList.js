/*
*https://api.github.com/repos/getlantern/lantern/issues?access_token=8e3a80f1bf33059a61d43327d8f7ea085401ff7c 获得issues
*parmas：https://developer.github.com/v3/issues/#custom-media-types
*
*
*
* */




var issues = "/repos/lishuai666777/program/issues"
var access_token = "9a66eff64b3e77c21fddcdc4aedbd7ecf22983d1"

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
        /*var blogsList = document.getElementById("blogsList")

        for(let i = 0;i<data.length;i++){
            let element = document.createElement("div")
            element.innerHTML=data[i]["body"]
            console.log(element)
            blogsList.appendChild(element)
        }*/
        var blogsListApp = new Vue({
            el:"#blogsList",
            data:{
                blogs:blogs,
            },
        })
    }
});