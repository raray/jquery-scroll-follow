# Parameters List #

### speed ###
_int - default: 500_

The duration of the sliding animation (in milliseconds). The smaller the value, the faster the animation.

### easing ###
_string - default: 'easeOutBack'_

If included, use any one of the easing options from the [easing plugin](http://gsgd.co.uk/sandbox/jquery/easing/). Uses 'linear' by default which provides no easing.

### offset ###
_int - default: 0_

Number of pixels the Scroll Follow object should remain from top of viewport.

### container ###
_string - default: object's immediate parent_

ID of the containing div.

### killSwitch ###
_string - default: 'killSwitch'_

ID of the On/Off toggle element. Requires the [jQuery Cookie plugin](http://www.stilbuero.de/2006/09/17/cookie-plugin-for-jquery/).

### onText ###
_string - default: 'Turn Slide Off'_

killSwitch text to be displayed if sliding is enabled.

### offText ###
_string - default: 'Turn Slide On'_

killSwitch text to be displayed if sliding is disabled.

### relativeTo ###
_string - default: 'top'_

Scroll animation can be relative to either the 'top' or 'bottom' of the viewport.

### delay ###
_int - default: 0_

Time between the end of the scroll and the beginning of the animation in milliseconds.