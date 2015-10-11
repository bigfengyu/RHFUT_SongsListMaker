/**
 * Created by fengyu on 15/10/10.
 */

function maker()
{
    var text = getText().replace(/.mp3/g,"").replace(/ /g,"");
    var textgroup = text.split("\n");
    var singer = [],song = [];
    for(var i in textgroup)
    {
        var splited = textgroup[i].split("-");
        if(splited.length > 1) {
            singer.push(splited[0]);
            song.push(splited[1]);
        }
    }
    document.getElementById("container").className = "container hidden";
    divmaker(singer,song);
    var htmlres = document.getElementById("result");
    html2canvas(htmlres).then(function(canvas) {
        document.body.appendChild(canvas);
    });
    htmlres.className = "result hidden";
}


function divmaker(singer,song)
{
    var mydate = new Date();
    var p = document.getElementById("dateP");
    p.innerHTML = mydate.getFullYear().toString()+"-"+(mydate.getMonth()+1).toString()+"-"+mydate.getDate().toString();
    var content = document.getElementById("middle");
    var topimage = document.getElementById("topimage"),
        bottomimage = document.getElementById("bottomimage");
    var order = mydate.getDay()%5+1;
    topimage.style.background = "url('static/" + order.toString()+"-1.jpg')";
    bottomimage.style.background = "url('static/"+order.toString()+"-2.jpg')";
    for(var i = 0;i < singer.length;++i) {
        var singername = document.createElement("div");
        singername.className = "editor singername";
        var songname = document.createElement("div");
        songname.className = "editor songname";
        singername.innerHTML = singer[i];
        songname.innerHTML = song[i];
        content.appendChild(singername);
        content.appendChild(songname);
    }
    document.getElementById("result").className = "result_show";
}



function getText()
{
    text = document.getElementById("songtext");
    return text.value;
}
