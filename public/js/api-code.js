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
		var $version = $('#_version').val();
		if($version === '0.4.x') {
			$version = 'master';
		} else if($version === '0.3.x') {
			$version = 'v0.3.x';
		}
		var append = '<div style="float:right" > /' + file + ' <a href="http://github.com/keystonejs/keystone/blob/' + $version + '/' + file + '" target="_blank"><i class="entypo entypo-social entypo-github"></i></a></div>';
		$this.append(append);
	});
	
	$(document).on('click', '.loadCode', function(e) {
		e.preventDefault();
		var $this = $(this);
		var target = $this.parent().data();
		
		if(target.file) {
			
			var version = $('#_version').val();
			if(version === '0.4.x') {
				version = 'master';
			} else if(version === '0.3.x') {
				version = 'v0.3.x';
			}
			create_cached(version);
			var url = 'https://raw.githubusercontent.com/keystonejs/keystone/BRANCH/FILE'.replace('BRANCH',version).replace('FILE', target.file);
			var $pre = $this.parent().next();
			
			if(_cached[version][target.file]) {
				$pre.text(_cached[version][target.file]);
			} else {
				$.ajax({
					url: url,
					dataType: 'text',
					success: function(results) {
						_cached[version][target.file] = results;
						$pre.text(results);
					}
				});
			}
			$pre.slideToggle();
					
		}
	});
	
	// sticky menu
	var $stickyMenu = $('.stickyMenu');
	if (!!$stickyMenu.offset()) { 
		var stickyTop = $stickyMenu.offset().top;  
		$(window).scroll(function(){ 
			var windowTop = $(window).scrollTop(); 
			if (stickyTop-40 < windowTop){
				$stickyMenu.css({ position: 'fixed', top: 0, overflow: 'auto', marginTop: '0', paddingBottom: '80px',  height: '100%', width: $stickyMenu.parent().width() });
			} else {
				$stickyMenu.css('position','static');
			}
		});
	}
	
});
