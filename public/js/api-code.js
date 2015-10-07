/*
 * Inject current code reference and sticky menu
 */
$(function() {
	var _cached = {}
	var create_cached = function(version) {
		if(typeof _cached[version] !== 'Object') {
			_cached[version] = {}
		}
	}
	$(".docs-content .addGitHubLink").each(function() {
		var $this = $(this);
		var file = $this.data("file");
		var branch = $('#_branch').val();
		var append = '<div style="float:right" > /' + file + ' <a href="http://github.com/keystonejs/keystone/blob/' + branch + '/' + file + '" target="_blank"><i class="entypo entypo-social entypo-github"></i></a></div>';
		$this.append(append);
	});
	$(document).on('click', '.loadCode', function(e) {
		e.preventDefault();
		var $this = $(this);
		var target = $this.parent().data();
		
		if(target.file) {
			var branch = $('#_branch').val();
			create_cached(branch);
			var url = 'https://raw.githubusercontent.com/keystonejs/keystone/BRANCH/FILE'.replace('BRANCH',branch).replace('FILE', target.file);
			var $pre = $this.parent().next();
			if(_cached[branch][target.file]) {
				$pre.text(_cached[branch][target.file]);
			} else {
				$.ajax({
					url: url,
					dataType: 'text',
					success: function(results) {
						_cached[branch][target.file] = results;
						$pre.text(results);
					}
				});
			}
			$pre.slideToggle();
					
		}
	});
	
	// sticky menu
	var $stickyMenu = $('.stickyMenu');
	var $docsFooter = $('.docs-footer');
	if (!!$stickyMenu.offset()) { 
		var stickyTop = $stickyMenu.offset().top;  
		$(window).scroll(function(){ 
			var windowTop = $(window).scrollTop(); 
			if (stickyTop-40 < windowTop){
				var docFooterView = $docsFooter[0].getBoundingClientRect();
				var height = (($(window).height() - docFooterView.top) < 0) ? '100%' : docFooterView.top + 'px';
				var width = $stickyMenu.parent().width()
				$stickyMenu.css({ position: 'fixed', top: 0, overflow: 'auto', marginTop: '0', paddingBottom: '80px',  'height': height, 'width': width });
			} else {
				$stickyMenu.css('position','static');
			}
		});
	}
	
});
