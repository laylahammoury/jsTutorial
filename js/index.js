
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'json/Users.json', false);
    xhr.onload = function(){
       let users =  JSON.parse(xhr.responseText)
        // console.log($users);
        users.forEach(function (user) {
            document.write("    <div>\n" +
                "        <div>\n" +
                "            <p> " + user.name + "</p>\n" +
                "            <p>" + user.id + "</p>\n" +
                "            <p>" + user.careerId + "</p>\n" +
                "            <hr>\n" +
                "        </div>\n" +
                "    </div>")
        })
    }
    xhr.send();

