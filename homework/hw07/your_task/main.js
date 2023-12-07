function search() {
    const term = document.querySelector('#search').value;
    console.log('Search for:', term);

    // Issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtists(term);
}

function playTrack() {
    const template =
        `<iframe style="border-radius:12px" 
            src="https://open.spotify.com/embed/track/5y8d8RHvxb0KiTa9Nq0xWp?utm_source=generator" 
            width="100%" 
            height="352" 
            frameborder="0" 
            allowfullscreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
        </iframe>`;
    document.querySelector("#artist").innerHTML = template;
}

async function getTracks(term) {
    const url = `https://www.apitutor.org/spotify/simple/v1/search?type=track&q=${term}`;
    const response = await fetch(url);
    const trackData = await response.json();
    document.querySelector("#tracks").innerHTML = "";
    for (let i = 0; i < Math.min(5, trackData.length); i++) {
        const track = trackData[i];
        const template =
            `<section class="track-item preview">
                <img src="${track.album.image_url}"alt="track image">
                <i class="fas play-track fa-play" aria-hidden="true"></i>
                <div class="label">
                    <h2>${track.name}</h2>
                    <p>${track.artist.name}</p>
                </div>
            </section>`;
        document.querySelector("#tracks").innerHTML += template;
    }
}

async function getAlbums(term) {
    const url = `https://www.apitutor.org/spotify/simple/v1/search?type=album&q=${term}`;
    const response = await fetch(url);
    const albumData = await response.json();
    document.querySelector("#albums").innerHTML = "";
    for (let i = 0; i < Math.min(5, albumData.length); i++) {
        const album = albumData[i];
        const template =
            `<section class="album-card" id="${album.id}">
                <div>
                    <img src="${album.image_url}"alt="album image">
                    <h2>${album.name}</h2>
                    <div class="footer">
                        <a href="${album.spotify_url}" target="_blank">
                            View on Spotify
                        </a>
                    </div>
                </div>
            </section>`;
        document.querySelector("#albums").innerHTML += template;
    }
}

async function getArtists(term) {
    const url = `https://www.apitutor.org/spotify/simple/v1/search?type=artist&q=${term}`;
    const response = await fetch(url);
    const artistData = await response.json();
    document.querySelector("#artist").innerHTML = "";
    if (artistData.length > 0) {
        const topArtist = artistData[0];

        const template =
            `<section class="artist-card" id="${topArtist.id}">
                <div>
                    <img src="${topArtist.image_url}"alt="artist image">
                    <h2>${topArtist.name}</h2>
                    <div class="footer">
                        <a href="${topArtist.spotify_url}" target="_blank">
                            View on Spotify
                        </a>
                    </div>
                </div>
            </section>`;
        document.querySelector("#artist").innerHTML += template;
    }
}

document.querySelector('#search').onkeyup = function (ev) {
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
};