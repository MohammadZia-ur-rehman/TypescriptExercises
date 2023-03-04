"use strict";
{
    function MakeAlbum(artistName, albumTitle, numberOfTracks) {
        const album = {
            artist: artistName,
            title: albumTitle
        };
        if (numberOfTracks) {
            album.tracks = numberOfTracks;
        }
        return album;
    }
    const album1 = MakeAlbum("Chahat", "PSL-8");
    const album2 = MakeAlbum("Spears", "When We All Fall Asleep, Where Do We Go?", 14);
    const album3 = MakeAlbum("Swift", "Anything Awesome", 21);
    console.log(album1);
    console.log(album2);
    console.log(album3);
}
