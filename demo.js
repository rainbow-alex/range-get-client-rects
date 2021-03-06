$( function () {
	var selection = document.getSelection();
	$( document ).on( 'mousemove', function () {
		if ( selection.rangeCount === 0 ) {
			return;
		}
		var i, l, rect, rects, offset,
			range = selection.getRangeAt( 0 ),
			$highlightsNative = $( '<div>' ),
			$highlightsFixed = $( '<div>' );

		// Native
		rects = range.getClientRects();
		for ( i = 0, l = rects.length; i < l; i++ ) {
			$highlightsNative.append( $( '<div>' ).addClass( 'highlight' ).css( rects[i] ) );
		}
		$( '.highlights-native' ).empty().append( $highlightsNative );

		rect = range.getBoundingClientRect();
		$highlightsNative.append( $( '<div>' ).addClass( 'bounding' ).css( rect ) );

		// Fixed
		rects = rangeGetClientRects( range );
		for ( i = 0, l = rects.length; i < l; i++ ) {
			$highlightsFixed.append( $( '<div>' ).addClass( 'highlight' ).css( rects[i] ) );
		}
		$( '.highlights-fixed' ).empty().append( $highlightsFixed );

		rect = rangeGetBoundingClientRect( range );
		if ( rect ) {
			$highlightsFixed.append( $( '<div>' ).addClass( 'bounding' ).css( rect ) );
		}

		// Adjust for container position
		offset = $( '.col-text' )[0].getBoundingClientRect();
		$( '.highlights' ).css( { top: -offset.top, left: -offset.left } );
	} );
} );