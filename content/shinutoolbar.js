function callme(tag){
	switch (tag)
	{
		case "ce-dev-ipd" :
			url="https://dev.sd.intuit.com/ipd/ipdproductsell";
				break;
		case "ce-dev-im"  :
			url="https://dev.sd.intuit.com/";
				break;
		case "ce-stg-ipd"  :
			url="https://qdcstage.intuitmarket.intuit.com/ipd/ipdproductsell";
				break;
		case "ce-stg-im"  :
			url="https://qdcstage.intuitmarket.intuit.com/";
				break;
		case "ce-prd-ipd" :
			url="https://jira.intuit.com/secure/RapidBoard.jspa?rapidView=10824&view=planning.nodetail";
				break;
		case "ce-prd-im"  :
			url="https://jira.intuit.com/secure/RapidBoard.jspa?rapidView=10812&view=planning.nodetail";
				break;
	}
 shinuex_LoadURL(url);
}

////////////////////////////////////////////////////////////////////////////////
// The shinuex_LoadURL() function loads the specified URL in the browser.
////////////////////////////////////////////////////////////////////////////////
function shinuex_LoadURL(url)
{
    // Set the browser window's location to the incoming URL
    window._content.document.location = url;

    // Make sure that we get the focus
    window.content.focus();
}