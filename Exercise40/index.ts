{
    interface Album {
        artist: string;
        title: string;
        tracks?: number;
    }
    
    function MakeAlbum(artistName:string, albumTitle:string, numberOfTracks?:number) : Album{
        const album: Album = {
            artist: artistName,
            title: albumTitle
        };
        if(numberOfTracks){
            album.tracks = numberOfTracks;
        }
        return album;
    }

    const album1:Album = MakeAlbum("Chahat", "PSL-8");
    const album2:Album = MakeAlbum("Spears", "When We All Fall Asleep, Where Do We Go?", 14);
    const album3:Album = MakeAlbum("Swift", "Anything Awesome", 21);

    console.log(album1);
    console.log(album2);
    console.log(album3);
}