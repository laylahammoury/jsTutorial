let users;
let careers;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'json/Users.json', false);
    xhr.onload = function(){
        users =  JSON.parse(xhr.responseText)
        // console.log($users);

    }
    xhr.send();

    let xhr2 = new XMLHttpRequest();
    xhr.open('GET', 'json/Careers.json', false);
    xhr2.onload = function () {
         careers = JSON.parse(xhr2.responseText)
        careers.forEach(function (career) {

        })


    }

    users.forEach(function (user) {
        document.write("<div>\n" +
            "        <div>\n" +
            "            <p>" + user.name + "</p>\n" +
            "            <p>" + user.id + "</p>\n" +
            "            <p>" + user.careerId + "</p>\n" +
            "            <hr>\n" +
            "        </div>\n" +
            "          </div>")
    })

    careers.forEach(function (career) {
        document.write("<div>\n" +
            "        <div>\n" +
            "            <p>" + career.title + "</p>\n" +
            "            <p>" + career.id + "</p>\n" +
            "            <hr>\n" +
            "        </div>\n" +
            "          </div>")
    })

