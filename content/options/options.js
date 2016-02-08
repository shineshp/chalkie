function checkSiteSpelling(site) {
    var arr = null;
    if (arr = site.match(/^(\w+):\/\/([\w.]+)\/(\S*)$/)) {
        return arr[2];
    } else if (arr = site.match(/^([\w-]+(\.[\w-]+)+)\/?.*$/)) {
        return arr[1];
    } else {

        alert("The value entered must be a valid URL or domain name (e.g. www.example.com)");
        return null;
    }
}

function addSite() {
    var textbox = document.getElementById("add-url-textbox");
    var watcher = getRequestWatcher();
    var site = checkSiteSpelling(textbox.value);
    if (!site) {
        textbox.focus();
        textbox.select();
        return;
    }

    watcher.addSite(site);
    textbox.value = "";
    textbox.popupOpen = false;
    fillList();
}