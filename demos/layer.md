---
layout: component
title: Layer
---

Utility for overlay creation

## Example

```js
<script>
$(function(){
	var layer = component.layer();
	layer.setPosition('bottom center');
	layer.$e.text('Layer');
	layer.$e.css({
		'background': '#fff',
		'padding': '30px',
		'border': 'dashed 4px #f00'
	});
	console.log('layer', layer);
});
</script>
```

<script>
$(function(){
	var layer = component.layer();
	layer.setPosition('bottom center');
	layer.$e.text('Layer');
	layer.$e.css({
		'background': '#fff',
		'padding': '30px',
		'border': 'dashed 4px #f00'
	});
	console.log('layer', layer);
});
</script>