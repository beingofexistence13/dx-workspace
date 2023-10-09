<script>
	export let username;
	export let socialMediaImgClasses;
</script>

<!-- We use the GitHub profile image because the Twitter profile image needs an authenticated API call -->
<!-- Commented out, because we can't use this endpoint yet -->
<!-- <img
  src="/api/{username}.avatar"
  alt="Avatar of {username}"
  title="Avatar of {username}"
  height="28"
  width="28"
  class="inline rounded-full border border-solid border-card {socialMediaImgClasses}"
/> -->

<!-- This uses a Netlify-Endpoint for returning the image -->
<img
	src="https://github.com/{username}.png"
	alt="@{username}'s avatar on GitHub"
	height="28"
	width="28"
	title="@{username}"
	class="inline !rounded-full border border-solid border-card {socialMediaImgClasses}"
	loading="lazy"
/>
