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

    let repositoryOwner = "gitblog666"
    let repositoryName = "program"

    let posturl = `/repos/${repository}/${repositoryName}/issues`
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
            //alert("成功发出")
            window.location.href=titleLink = `https://saltfish666.github.io/article.html?repositoryOwner=${repositoryOwner}&repositoryName=${repositoryName}&issueNum=${data.number}`
            canSubmit = true
        }
    });
})