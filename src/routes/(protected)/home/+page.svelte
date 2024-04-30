<script lang="ts">
	import type { Profile } from '$supabase/models';
	export let data: { profile: Profile };
	const { profile } = data;
	console.log('data', profile);
</script>

<div>
	<div class="mb-12 text-5xl font-medium">
		Welcome <span class="text-third-color">{profile.username} </span>
	</div>
</div>
