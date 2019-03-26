(function () {
	"use strict";

	var treeviewMenu = $('.app-menu');

	// Toggle Sidebar
	$('[data-toggle="sidebar"]').click(function (event) {
		event.preventDefault();
		$('.app').toggleClass('sidenav-toggled');
	});

	// Activate sidebar treeview toggle
	$("[data-toggle='treeview']").click(function (event) {
		event.preventDefault();
		if (!$(this).parent().hasClass('is-expanded')) {
			treeviewMenu.find("[data-toggle='treeview']").parent().removeClass('is-expanded');
		}
		$(this).parent().toggleClass('is-expanded');
	});

	// Set initial active toggle
	$("[data-toggle='treeview.'].is-expanded").parent().toggleClass('is-expanded');

	//Activate bootstrip tooltips
	$("[data-toggle='tooltip']").tooltip();

})();


function isInputNumber(evt) {

	var ch = String.fromCharCode(evt.which);

	if (!(/[0-9]/.test(ch))) {
		evt.preventDefault();
	}
}

function isInputAZ(evt) {

	var ch = String.fromCharCode(evt.which);

	if (!(/[a-zA-Z]/.test(ch))) {
		evt.preventDefault();
	}
}