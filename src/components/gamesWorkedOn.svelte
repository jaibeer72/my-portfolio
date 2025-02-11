<script lang="ts">
    // Array of games with name, image URL, and website URL
    import JDPicture from "$lib/JD2023.jpeg";
    import ODDBALLERS from "$lib/logo-oddballers.webp";

    let games = [
        {
            name: "Oddballers",
            imageUrl: ODDBALLERS, // replace with actual image URL
            websiteUrl: "https://www.ubisoft.com/en-gb/game/oddballers" // replace with actual website URL
        },
        {
            name: "JustDance 2023",
            imageUrl: JDPicture, // replace with actual image URL
            websiteUrl: "https://www.ubisoft.com/en-gb/game/just-dance/2023" // replace with actual website URL
        }
    ];
</script>

<style>
    div {
        background-color: var(--bg-color);
    }
    html, body {
        height: 100%;
        margin: 0;
    }
    .iframe-container {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        justify-content: center;
    }

    .iframe-container iframe {
        flex: 1 1 calc(50% - 16px); /* Adjust the width as needed */
        max-width: 552px;
        height: 167px;
    }
</style>


<div class="bg-gradient-to-r from-gray-700 via-gray-900 to-black dark:bg-gray-900">
<h1 class="text-4xl font-bold text-center col-span-4 text-white  p-4">Games I've Worked On</h1>
<div class="grid grid-cols-1 md:grid-cols-4 gap-8 p-8 justify-center items-center">
    {#each games as {name, imageUrl, websiteUrl}}
        <div class="transform transition-transform duration-300 hover:scale-105 bg-white shadow-lg hover:bg-gray-100 hover:shadow-xl rounded-lg overflow-hidden max-w-sm">
            <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
                <img src={imageUrl} alt={name} class="w-full h-64 object-cover"/>
            </a>
            <div class="p-4">
                <a href={websiteUrl} target="_blank" rel="noopener noreferrer"
                   class="text-lg font-medium text-blue-500 hover:text-blue-700">
                    {name}
                </a>
            </div>
        </div>
    {/each}
</div>

<h2 class="text-3xl font-bold text-center col-span-4 text-white p-4">My Itch.io Portfolio</h2>
<div class="flex justify-center p-8">
    <a href="https://jaibeer72.itch.io" target="_blank" rel="noopener noreferrer"
       class="text-lg font-medium text-blue-500 hover:text-blue-700">
        Visit my itch.io portfolio
    </a>
</div>

<div class="iframe-container">
    <iframe frameborder="0" src="https://itch.io/embed/299649?dark=true" width="552" height="167"><a href="https://suryavamsikk.itch.io/de-light">De-light by suryavamsikk, jaibeer72, bustingjam, Tarun.b</a></iframe>
    <iframe frameborder="0" src="https://itch.io/embed/402744?dark=true" width="552" height="167"><a href="https://jaibeer72.itch.io/escapeforever">EscapeForever by jaibeer72</a></iframe>
    <iframe frameborder="0" src="https://itch.io/embed/405868?dark=true" width="552" height="167"><a href="https://jaibeer72.itch.io/hungry-harold-ar">Hungry Harold AR by jaibeer72</a></iframe>
    <iframe frameborder="0" src="https://itch.io/embed/304897?dark=true" width="552" height="167"><a href="https://jaibeer72.itch.io/openglproceduralgeneratedlandmass">OpenGLProceduralGeneratedLandMass by jaibeer72</a></iframe>
    <iframe frameborder="0" src="https://itch.io/embed/304822?dark=true" width="552" height="167"><a href="https://jaibeer72.itch.io/visualiserio">VisualiserIO by jaibeer72</a></iframe>
</div>
</div>