<script lang="ts">
  import { $user as user  } from "$store/user";
</script>

<h1>Welcome</h1>
<p>{$user?.username}</p>
