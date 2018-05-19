/*
* POST /repos/:owner/:repo/issues
*
* */
var canSubmit = true
$("#submit").click(function(){

    if(canSubmit == false){
        return
    }
    canSubmit = false

    let title = document.getElementById("title").value
    let body  = document.getElementById("markdownText").value
    console.log(title)

    let access_token = localStorage._token
    let base_url = "https://api.github.com"
    let posturl = "/repos/gitblog666/program/issues"
    let a = "?access_token=9a66eff64b3e77c21fddcdc4aedbd7ecf22983d1"
    $.ajax({
        url: base_url+posturl,
        type: 'post',
        /*header:{
            Authorization:"token "+access_token,
            Accept:"application/vnd.github.symmetra-preview+json"
        },*/
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization","token " + access_token);
        },
        data:  JSON.stringify({
            title:title,
            body:body,
        }),
        success:  function (data) {
            alert("成功发出")
            canSubmit = true
        }
    });
})