<template>
  <img :height="height" :src="src"/>
</template>

<script>

export default {
	name: "PnTitleImage",
	props: {
		height: {
			type: String,
			default: "200"
		},
		src: {
			type: String,
			default: "https://farm2.staticflickr.com/1744/40757444840_126f6ab628_o.png"
		}
	}
}
</script>
