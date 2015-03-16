# Usage #

  1. Include JQuery
```
<script type="text/javascript" src="jquery.js"></script>
```
  1. Include required plugins, including Scroll Follow:
```
<script type="text/javascript" src="ui.core.js"></script>
<script type="text/javascript" src="jquery.easing.js"></script>
```
  1. Call Scroll Follow on the desired DOM object: [See Example](http://kitchen.net-perspective.com/sf-example-1.html)
```
<script type="text/javascript">
	$( '#example' ).scrollFollow();
</script>
```
  1. Or call Scroll Follow on the desired DOM object and give it some parameters: [See Example](http://kitchen.net-perspective.com/sf-example-2.html)
```
<script type="text/javascript">
	$( document ).ready( function () {
		$( '#example' ).scrollFollow( {
			speed: 1000,
			offset: 60,
			killSwitch: 'exampleLink',
			onText: 'Disable Follow',
			offText: 'Enable Follow'
		} );
	} );
</script>
```
  1. The Scroll Follow object will remain inside its immediate container. [See Example](http://kitchen.net-perspective.com/sf-example-3.html)
  1. Or you can specify a parent (by ID) for the Scroll Follow object to consider its container: [See Example](http://kitchen.net-perspective.com/sf-example-4.html)
```
<script type="text/javascript">
	$( document ).ready( function () {
		$( '#example' ).scrollFollow( {
			container: 'outer'
		} );
	} );
</script>
```
  1. Scroll Follow uses the "top" property of an object to slide it. Therefore, the "position" of the object must be set to either "relative" or "absolute." Other than that limitation, the Scroll Follow object should be completely configured through CSS.