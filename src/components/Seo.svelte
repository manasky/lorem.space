
<title>{title}</title>
<meta name="description" content={desc}>

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={desc} />
<meta name="twitter:image" content={img} />
<meta name="twitter:image:alt" content={title} />
<meta property="og:title" content={title} />
<meta property="og:description" content={desc} />
<meta property="og:image" content={img} />

<script>
	export let title;
	export let desc;
	export let img;
</script>