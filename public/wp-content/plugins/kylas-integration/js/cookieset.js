function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.search);
    if (results == null) return "";
    else return decodeURIComponent(results[1].replace(/\+/g, " "));
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return '';
}
function clearCookie(cookieName) {
    document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// clearCookie("utm_source");
getCampaign = getParameterByName("utm_campaign");
getSource = getParameterByName("utm_source");
getTerm = getParameterByName("utm_term");
getContent = getParameterByName("utm_content");
getMedium = getParameterByName("utm_medium");

// console.log(cfInitialUrl);
if(getCampaign || getSource){
    if (getCampaign != readCookie("utm_campaign") || getSource != readCookie("utm_source")){
        clearCookie("utm_campaign");
        clearCookie("utm_source");
        clearCookie("utm_term");
        clearCookie("utm_content");
        clearCookie("utm_medium");
    }
}

if (getParameterByName('utm_campaign') != "" || readCookie("utm_campaign") == null) {
    setCookie('utm_campaign', getCampaign);
}
if (getParameterByName('utm_source') != "" || readCookie("utm_source") == null) {
    setCookie('utm_source', getSource);
}
if (getParameterByName('utm_term') != "" || readCookie("utm_term") == null) {
    setCookie('utm_term', getTerm);
}
if (getParameterByName('utm_content') != "" || readCookie("utm_content") == null) {
    setCookie('utm_content', getContent);
}
if (getParameterByName('utm_medium') != "" || readCookie("utm_medium") == null) {
    setCookie('utm_medium', getMedium);
}
campaign = readCookie('utm_campaign');
source = readCookie('utm_source');
term = readCookie('utm_term');
content = readCookie('utm_content');
medium = readCookie('utm_medium');

if(source)
    document.getElementById("utm_source").value = source;

if(campaign)
    document.getElementById("utm_campaign").value = campaign;

if(medium)
    document.getElementById("utm_medium").value = medium;

if(term)
    document.getElementById("utm_term").value = term;

if(content)
    document.getElementById("utm_content").value = content;


