/**
 * jquery.scrollFollow.js
 * Copyright (c) 2008 R.A. Ray (net-perspective.com)
 * Licensed under the MIT License (http://www.opensource.org/licenses/mit-license.php)
 * 
 * @projectDescription	jQuery plugin for allowing an element to animate down as the user scrolls the page.
 * 
 * @version 0.1.0
 * 
 * @requires jquery.js (tested with 1.2.5)
 * @requires ui.core.js (tested with 1.5b4)
 * @requires jquery.easing.js (http://gsgd.co.uk/sandbox/jquery/easing/ - tested with 1.3)
 * @requires jquery.cookie.js (http://www.stilbuero.de/2006/09/17/cookie-plugin-for-jquery/)
 * 
 * @param speed		int - Duration of animation (in milliseconds)
 * 								default: 500
 * @param offset			int - Number of pixels box should remain from top of viewport
 * 								default: 0
 * @param easing		string - Any one of the easing options from the easing plugin - < http://gsgd.co.uk/sandbox/jquery/easing/ > - Use 'linear' for no easing
 * 								default: 'easeOutBack'
 * @param container	string - ID of the containing div
 * 								default: box's immediate parent
 * @param killSwitch	string - ID of the On/Off toggle element
 * 								default: 'killSwitch'
 * @param onText		string - killSwitch text to be displayed if sliding is enabled
 * 								default: 'Turn Slide Off'
 * @param offText		string - killSwitch text to be displayed if sliding is disabled
 * 								default: 'Turn Slide On'
 */



( function( $ ) {
	
	$.scrollFollow = function ( box, options )
	{
		function ani( box, iTop )
		{		
			$( box ).dequeue();
							
			var pageScroll = $( document ).scrollTop();
			var parentTop = $( cont ).offset().top;
			var parentHeight = $( cont ).height();
			var boxTop = $( box ).offset().top;
			var boxHeight = box.offsetHeight;
			var aniTop;
			
			if ( isActive )
			{
				aniTop = Math.min( ( Math.max( ( parentTop + iTop ), ( pageScroll + options.offset ) ) - parentTop ), ( parentHeight - boxHeight ) );
	
				$( box ).animate(
					{
						top: aniTop
					}, options.speed, options.easing
				);
			}
		};
		
		// For user-initiated stopping of the slide
		var isActive = true;
		
		if( $.cookie( 'scrollFollowSetting' + $( box ).attr( 'id' ) ) == 'false' )
		{
			var isActive = false;
			
			$( '#' + options.killSwitch ).text( options.offText )
				.toggle( 
					function ()
					{
						isActive = true;
						
						$( this ).text( options.onText );
						
						$.cookie( 'scrollFollowSetting' + $( box ).attr( 'id' ), true, { expires: 365, path: '/'} );
					},
					function ()
					{
						isActive = false;
						
						$( this ).text( options.offText );
						
						$( box ).animate(
							{
								top: initialTop
							}, 0
						);	
						
						$.cookie( 'scrollFollowSetting' + $( box ).attr( 'id' ), false, { expires: 365, path: '/'} );
					}
				);
		}
		else
		{
			$( '#' + options.killSwitch ).text( options.onText )
				.toggle( 
					function ()
					{
						isActive = false;
						
						$( this ).text( options.offText );
						
						$( box ).animate(
							{
								top: initialTop
							}, 0
						);	
						
						$.cookie( 'scrollFollowSetting' + $( box ).attr( 'id' ), false, { expires: 365, path: '/'} );
					},
					function ()
					{
						isActive = true;
						
						$( this ).text( options.onText );
						
						$.cookie( 'scrollFollowSetting' + $( box ).attr( 'id' ), true, { expires: 365, path: '/'} );
					}
				);
		}
		
		// If no parent ID was specified, and the immediate parent does not have an ID
		// options.container will be undefined. So we need to figure out the parent element.
		var cont;
		
		if ( options.container == '')
		{
			cont = $( box ).parent();
		}
		else
		{
			cont = document.getElementById( options.container );
		}
		
		// Finds the defaul positioning of the box.
		var initialTop = $( box ).css( 'top' );
		
		if( initialTop == 'auto' )
		{
			initialTop = 0;
		}
		else
		{
			initialTop = parseInt( initialTop.substr( 0, initialTop.indexOf( 'p' ) ) );
		}
		
		// Animated the box when the page is scrolled.
		$( window ).scroll( function ()
			{
				ani( box, initialTop );
			}
		);
	};
	
	$.fn.scrollFollow = function ( options )
	{
		options = options || {};
		options.speed = options.speed || 500;
		options.offset = options.offset || 0;
		options.easing = options.easing || 'easeOutBack';
		options.container = options.container || this.parent().attr( 'id' );
		options.killSwitch = options.killSwitch || 'killSwitch';
		options.onText = options.onText || 'Turn Slide Off';
		options.offText = options.offText || 'Turn Slide On';
		
		this.each( function() 
			{
				new $.scrollFollow( this, options );
			}
		);
		
		return this;
	};
})( jQuery );

