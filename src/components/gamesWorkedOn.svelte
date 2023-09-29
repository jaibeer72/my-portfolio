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
  </style>
  
  <div class="grid grid-cols-4 gap-8 p-8 justify-center items-center">
    <h1 class="text-4xl font-bold text-center col-span-4 text-white shadow-lg">Games I've Worked On</h1>
    {#each games as { name, imageUrl, websiteUrl }}
      <div class="transform transition-transform duration-300 hover:scale-105 bg-white shadow-lg hover:bg-gray-100 hover:shadow-xl rounded-lg overflow-hidden max-w-sm">
        <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
          <img src={imageUrl} alt={name} class="w-full h-64 object-cover" />
        </a>
        <div class="p-4">
          <a href={websiteUrl} target="_blank" rel="noopener noreferrer" class="text-lg font-medium text-blue-500 hover:text-blue-700">
            {name}
          </a>
        </div>
      </div>
    {/each}
  </div>
  