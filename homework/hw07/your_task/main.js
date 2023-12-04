const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search (ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

function = playTrack() {
    const template =
        `<iframe style="border-radius:12px" 
            src="https://open.spotify.com/embed/track/5y8d8RHvxb0KiTa9Nq0xWp?utm_source=generator" 
            width="100%" 
            height="352" 
            frameBorder="0" 
            allowfullscreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
        </iframe>`;
    document.querySelector("#artist").innerHTML = template;
}

async function getTracks (term) {
    const url = `https://www.apitutor.org/spotify/simple/v1/search?type=track&q=${term}`;
    const response = await fetch(url);
    const trackData = await response.json();
    const track = trackData(i);
    console.log (trackData);
    document.querySelector("#tracks").innerHTML = "";

    // for (let i = 0 ; i < 5; i++)

    const template = 
        `<section class="track-item preview">
            <img src="${track.album.image_url}">
            <i class="fas play-track fa-play" aria-hidden="true"></i>
                <div class="label">
                    <h2>${track.name}</h2>
                        <p>${track.artist.name}</p>
                </div>
        </section>`;
    document.querySelector("#tracks").innerHTML = template;
}

async function getAlbums (term) {
    const url = `https://www.apitutor.org/spotify/simple/v1/search?type=album&q=${term}`;
    const response = await fetch(url);
    const albumData = await response.json();
    const album = albumData(0);
    console.log (albumData);

    const template = 
        `<section class="album-card" id="2lATw9ZAVp7ILQcOKPCPqp">
            <div>
                <img src="https://i.scdn.co/image/ab67616d0000b2736feb6d9ed7891f40e9a524dd">
                    <h2>Love Yourself 結 'Answer'</h2>
                <div class="footer">
                    <a href="https://open.spotify.com/album/2lATw9ZAVp7ILQcOKPCPqp" target="_blank">
                        view on spotify
                    </a>
                </div>
            </div>
        </section>`;
    document.querySelector("#albums").innerHTML = template;
}

async function getArtist (term) {
    const url = `https://www.apitutor.org/spotify/simple/v1/search?type=artist&q=${term}`;
    const response = await fetch(url);
    const artistData = await response.json();
    const artist = artistData(0);
    console.log(artistData);

    const template = 
        `<section class="artist-card" id="${artist.id}">
            <div>
                <img src="${artist.image_url}">
                <h2>"${artist.name}"</h2>
                    <div class="footer">
                        <a href="${artist.spotify_url}" target="_blank">
                            view on spotify
                        </a>
                    </div>
            </div>
        </section>`;
    document.querySelector("#artist").innerHTML = template;
}

document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}