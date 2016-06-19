	var api = "http://knet.kcorporation.tk/api";
function logout()
{

	$.ajax({
			url: api,
			dataType: 'text',
			method: 'get',
			crossDomain: true,
			data: {"origin":"usrPage", "request":"logout"},
			success: function(data) {
				window.location.href = "login.html?loggedOut=true";
			},
			error: function(data) {
				
				
			}
		});
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function request(origin, request, callback)
{
	data = $.ajax({
			url: api,
			dataType: 'text',
			method: 'get',
			crossDomain: true,
			data: {"origin":origin, "request":request},
			success: function(data) {
			callback(data);
			},
			error: function(data) {
			callback(data);
				
				
			}
		});
}

function dbReq(origin, request, term, callback)
{
	data = $.ajax({
			url: api,
			dataType: 'text',
			method: 'get',
			crossDomain: true,
			data: {"origin":origin, "request":request, "term":term},
			success: function(data) {
			callback(data);
			},
			error: function(data) {
			callback(data);
				
				
			}
		});
}