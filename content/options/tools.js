var chalkieextension = chalkieextension || {};
var Chalkie = Chalkie || {};
alert("manasil..");
  if(!chalkieextension.prefService)
  {
    chalkieextension.prefService = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService).getBranch("extensions.chalkie.");
  }
function getRequestWatcher() {
    var watcher = null;
    try {
        watcher = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsISupports).getBranch("extensions.chalkie.");
        watcher = watcher.wrappedJSObject;
        return watcher;
    } catch (e) {
        Components.utils.reportError(e);
        throw "Can't instantiate ReqeustWatcher!";
    }
}
function pref(name, value)
{
    try
    {
        var branch = chalkieextension.prefService; //Services.prefs.getDefaultBranch("");

        switch (typeof value)
        {
            case "boolean":
                branch.setBoolPref(name, value);
                break;

            case "number":
                branch.setIntPref(name, value);
                break;

            case "string":
                var str = Cc["@mozilla.org/supports-string;1"].createInstance(Ci.nsISupportsString);
                str.data = value;
                branch.setComplexValue(name, Ci.nsISupportsString, str);
                break;
        }
    }
    catch (e)
    {
        if(console) console.log("prefLoader.pref; Firebug can't set default pref value for: " + name+"::"+e);
		alert("ERR::"+e);
    }
}
pref("count", 6);

ce_emptyListBox = function(listBox)
{
	alert(listBox.getRowCount());
  while(listBox.getRowCount() > 0)
  {
    listBox.removeItemAt(0);
  }
};

ce_getPref= function(value, type){
   try{
	   var tmp ='';
	   switch (type)
	   {
		   case 'I':
				tmp = chalkieextension.prefService.getIntPref(value);
				break;
		   case 'S':
				tmp = chalkieextension.prefService.getIntPref(value);
				break;
		   case 'B':
				tmp = chalkieextension.prefService.getIntPref(value);
				break;
		   case 'C':
				tmp = chalkieextension.prefService.getComplexValue(value, Components.interfaces.nsIPrefLocalizedString).data.trim();
				break;
	   }
	   return tmp;
   }catch(exception){}
};

ce_initialize = function()
{
	alert("ce_initialize......called...");
  var description       = null;
  var key               = null;
  var listCell          = null;
  var listItem          = null;
  var separator         = null;
  var tools             = document.getElementById("chalkie-tools");
  var url               = null;

  alert("tools:"+tools);
  ce_emptyListBox(tools);

  alert("cnt:"+ce_getPref("count","I"));

  for(var i = 1, cnt = ce_getPref("count","I"); i <= cnt; i++)
  {
	  alert("SEP:"+ce_getPref("tool." + i + ".separator","B"));
    // If this is a separator
    if(1==1 || ce_getPref("tool." + i + ".separator","B"))
    {
      separator = document.createElement("separator");
      listItem  = document.createElement("listitem");

      separator.setAttribute("class", "groove");
      listItem.appendChild(separator);

      separator = document.createElement("separator");

      separator.setAttribute("class", "groove");
      listItem.appendChild(separator);

      separator = document.createElement("separator");

      separator.setAttribute("class", "groove");
      listItem.appendChild(separator);

      tools.appendChild(listItem);
    }
    else
    {
      description = ce_getPref("tool." + i + ".description","C");
      url = ce_getPref("tool." + i + ".url","C");

      if((description && url))
      {
        key       = ce_getPref("tool." + i + ".key","C");
        listCell  = document.createElement("listcell");
        listItem  = document.createElement("listitem");

        listCell.setAttribute("label", description);
        listItem.appendChild(listCell);

        listCell = document.createElement("listcell");

	    listCell.setAttribute("data-chalkieextension-tool-type", "url");
	    listCell.setAttribute("label", url);
        listItem.appendChild(listCell);

        listCell = document.createElement("listcell");
        listItem.appendChild(listCell);

        tools.appendChild(listItem);
      }
    }
  }

}

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

function addURL() {
    var textbox = document.getElementById("add-url-textbox");
    var textboxTitle = document.getElementById("add-url-title");
    //var watcher = getRequestWatcher();
    var site = checkSiteSpelling(textbox.value);
    if (!site) {
        textbox.focus();
        textbox.select();
        return;
    }

    //watcher.addSite(site,textboxTitle.value);
    textbox.value = "";
    textboxTitle.value = "";
    textbox.popupOpen = false;
    textboxTitle.popupOpen = false;
    //fillList();
}

