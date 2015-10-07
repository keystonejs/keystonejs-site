/*
 * Add visual anchor links to docs-content
 */
$(function() {
	// for all anchor tags with name props
	$(".docs-content a[name]").each(function() {
		var $anchor = $(this),
			name = $anchor.attr("name"),
			link = '<a class="anchor" href="#' + name + '"><i class="entypo entypo-link"></i></a><a class="anchor" href="#top"><i class="entypo entypo-up"></i></a>',
			$next = $anchor.next();
		
		var versions = ['0.2.x', 'current', 'incoming'],
			version = $('#_version').val(),
			path = $('#_path').val();

		if(path) {
			link += '<i class="anchor" style="padding-right: 0px;"><span>switch to:</span></i>';
			versions.forEach(function(v) {
				if(v !== version) {
					var newpath = path.replace(version, v);
					link += '<a style="padding-left: 8px;padding-right: 8px;"class="anchor" href="' + newpath + '/#' + name + '"><span>' + v + '</span></a>';
				}
			});
		}	
		var $link = $(link);
		
		// only append links to H2/H3/H4 tags
		if (["H2", "H3", "H4"].indexOf($next.prop("tagName")) > -1) {
			$next.append($link);
		}
	});
});
