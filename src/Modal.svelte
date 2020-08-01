<script>
  let show = true;
  let isPromo = true;
</script>

{#if show}
  <div class="backdrop" class:promo={isPromo}>
    <div class="modal">
      <p>Sign up for offers!</p>
    </div>
  </div>
{/if}

<style>
  .modal > p {
    color: peru;
  }

  .backdrop{
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0, 0, 0, 0.8);
  }

  .modal{
    padding: 10px;
    border-radius: 10px;
    max-width: 40%;
    margin: 10% auto;
    text-align: center;
    background: white;
  }

  .promo{
    font-weight: 700;
  }
</style>