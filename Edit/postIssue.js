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
 
    let access_token = localStorage._token
    let base_url = "https://api.github.com"
    let posturl = "/repos/gitblog666/program/issues"
    $.ajax({
        url: base_url+posturl,
        type: 'post',
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