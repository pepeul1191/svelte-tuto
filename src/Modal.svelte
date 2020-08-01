<script>
  let show = false;
</script>

{#if show}
  <div class="backdrop">
    <div class="modal">
      <p>Sign up for offers!</p>
    </div>
  </div>
{/if}

<style>
  .modal > p {
    color: peru;
  }
</style>