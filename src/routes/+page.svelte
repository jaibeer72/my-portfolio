<script lang="ts">
    import profilePicture from "$lib/ProfilePicture.png";
    import GamesWorkedOn from "../components/gamesWorkedOn.svelte";

    function redirectGithub() {
        window.location.href = "https://github.com/jaibeer72";
    }

    let card: HTMLElement;

    function handleMouseMove(event: MouseEvent) {
    let offsetX = event.offsetX;
    let offsetY = event.offsetY;
    let { width, height } = card.getBoundingClientRect();
    let xRotation = -(offsetY / height - 0.5) * 20;
    let yRotation = (offsetX / width - 0.5) * 20;
    card.style.transform = `perspective(500px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    }

    function handleMouseLeave() {
    card.style.transform = '';
    }
</script>
<section class="flex flex-wrap justify-center items-center text-center w-full h-screen bg-gradient-to-r from-purple-400 to-pink-600">
    <div bind:this={card} on:mousemove={handleMouseMove} on:mouseleave={handleMouseLeave} class="py-4">
    <div class="w-full max-w-sm bg-gradient-to-r from-gray-700 via-gray-900 to-black border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-11">
        <div class="flex flex-col items-center pb-1">
            <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={profilePicture} alt="Bonnie image"/>
            <h5>Jaibeer Singh Dugal</h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">Software Developer</span>
            <div class="flex mt-4 space-x-3 md:mt-6">
                <button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
                    on:click={redirectGithub}
                >
                    <svg class="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                    </svg>
                    Check out my Github
                </button>
            </div>
        </div>
    </div> 
</div>
    <div class="rounded-lg w-full h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black">
        <GamesWorkedOn />
    </div>
 </section>