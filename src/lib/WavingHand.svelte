<span class="waving-hand">👋</span>

<style>
  .waving-hand {
    animation-name: wave-animation;
    animation-duration: 2.5s;
    animation-iteration-count: 2;
    transform-origin: 70% 70%;
    display: inline-block;
  }

  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    15% {
      transform: rotate(14deg);
    } /* The following five values can be played with to make the waving more or less extreme */
    30% {
      transform: rotate(-8deg);
    }
    40% {
      transform: rotate(14deg);
    }
    50% {
      transform: rotate(-4deg);
    }
    60% {
      transform: rotate(10deg);
    }
    70% {
      transform: rotate(0deg);
    } /* Reset for the last half to pause */
    100% {
      transform: rotate(0deg);
    }
  }
</style>
