
// las interfaces se escriben en singular

// User 
    //uid
    //foto
    //name



// playlist
    //id
    // type: playlist
    // portada
    // name  
    // decription
    // nuemros elementos
    // duracion
    // creador de la playlist
    // traks: [
        // portada
        // track name
        // artist
        // album al que pertenece
    //]

// tus me gustas
    // portada
    // nuemeros elementos
    // creador de la playlist
    // traks: [
        // portada
        // track name
        // artist
        // album al que pertenece
    //]


// Album
    //id
    // portada
    // name  
    // Artist
    // released year
    // cantidad de traks
    // duracion
    // traks: [
        // track name
    //]


// audio info
    //portada
    //name track
    //artist
    //tonalidad
    //duracion
    //released
    //volumen
    //modo
    //ritmo
    //tempo


export interface user{
    // modelo de user que manda 
    // https://api.spotify.com/v1/users/{user_id}   
    display_name: string,
    external_urls: externalUrl,
    href: string,
    id: string,
    images: [],
    type: string,
    uri: string,
    followers: followersUser,
}

export interface externalUrl{
    spotify: string
}

export interface followersUser{
    href: null,
    total: 0
}



export interface savedTrack{
    // modelo de "tus me gustas"
    // https://api.spotify.com/v1/me/tracks
    href: string,
    limit: number,
    next: string,
    offset: number,
    previous: string,
    total: number,
    items: savedTrackIten[],
}

export interface savedTrackIten{
    added_at: string,
    track: savedTrackItenTrack
}

export interface savedTrackItenTrack{
    album: dataAlbumSavedTrack,
    artists: infoArtistMoreInformation[],
    available_markets: string[],
    disc_number: number,
    duration_ms: number,
    explicit: boolean,
    external_ids: idsExterno,
    external_urls: externalUrl,
    href: string,
    id: string,
    is_playable: boolean,
    linked_from: {},
    restrictions: reasonForRestrictions,
    name: string,
    popularity: number,
    preview_url: string,
    track_number: number,
    type: string,
    uri: string,
    is_local: boolean 
}

export interface infoArtistMoreInformation{
    external_urls: externalUrl,
    followers: followers,
    genres: [],
    href: string,
    id: string,
    images: img[],
    name: string,
    popularity: number,
    type: number,
    uri: number
}

export interface idsExterno{
    isrc: string,
    ean: string,
    upc: string
}

export interface reasonForRestrictions{
    reason: string
}

export interface dataAlbumSavedTrack{
    album_type: string,
    total_tracks: number,
    available_markets: [],
    external_urls: externalUrl,
    href: string,
    id: string,
    images: img[],
    name: string,
    release_date: string,
    release_date_precision: string,
    restrictions: reasonForRestrictions,
    type: string,
    uri: string,
    artists: infoArtistLessInformation[]
}

export interface img{
    url: string,
    height: number,
    width: number
}

export interface infoArtistLessInformation{
    external_urls: externalUrl,
    href: string,
    id: string,
    name: string,
    type: string,
    uri: string
}

export interface followers{
    href: string,
    total: number
}





export interface usersAlbum{
    // albunes del usuario actual
    // https://api.spotify.com/v1/me/albums
    href: string,
    limit: number,
    next: string,
    offset: number,
    previous: string,
    total: number,
    items: usersAlbum[]
}


export interface usersAlbumItens{
    added_at: string,
    album: usersAlbumItensAlbum
}

export interface usersAlbumItensAlbum{
    album_type: string,
    total_tracks: number,
    available_markets: [],
    external_urls: externalUrl,
    href: string,
    id: string,
    images: img[],
    name: string,
    release_date: string,
    release_date_precision: string,
    restrictions: reasonForRestrictions,
    type: string,
    uri: string,
    artists: infoArtistLessInformation[],
    tracks: usersAlbumItensAlbumTrack,
    copyrights: usersAlbumItensAlbumcopyrightsData[],
    external_ids: idsExterno,
    genres: [],
    label: string,
    popularity: number
}

export interface usersAlbumItensAlbumcopyrightsData{
    text: string,
    type: string
}

export interface usersAlbumItensAlbumTrack{
    href: string,
        limit: number,
        next: string,
        offset: number,
        previous: string,
        total: number,
        items: usersAlbumItensAlbumTrackIntem[]
}


export interface usersAlbumItensAlbumTrackIntem{
    artists: infoArtistLessInformation[],
    available_markets: string[],
    disc_number: number,
    duration_ms: number,
    explicit: boolean,
    external_urls: externalUrl,
    href: string,
    id: string,
    is_playable: boolean,
    linked_from: usersAlbumItensAlbumTrackIntemLinkedFrom,
    restrictions: reasonForRestrictions,
    name: string,
    preview_url: string,
    track_number: number,
    type: string,
    uri: string,
    is_local: boolean
}

export interface usersAlbumItensAlbumTrackIntemLinkedFrom{
    external_urls: externalUrl,
    href: string,
    id: string,
    type: string,
    uri: string
}






export interface playlistUser{
    // Playlist user (sin tracks)
    // https://api.spotify.com/v1/me/playlists
    href: string,
    limit: number,
    next: string,
    offset: number,
    previous: string,
    total: number,
    items: playlistUser[]
}

export interface playlistUserIten{
    collaborative: boolean,
    description: string,
    external_urls: externalUrl,
    href: string,
    id: string,
    images: img[],
    name: string,
    owner: playlistUserItenOwnerData,
    public: boolean,
    snapshot_id: string,
    tracks: playlistUserItenTrack,
    type: string,
    uri: string
}

export interface playlistUserItenOwnerData{
    external_urls: externalUrl,
    followers: followers,
    href: string,
    id: string,
    type: user,
    uri: string,
    display_name: string
}

export interface playlistUserItenTrack{
    href: string,
    total: number
}





export interface audioFeatureTrack{
    // obtener audio features de un track
    //https://api.spotify.com/v1/audio-features/{id}
    acousticness: number,
    analysis_url: string,
    danceability: number,
    duration_ms: number,
    energy: number,
    id: string,
    instrumentalness: number,
    key: number,
    liveness: number,
    loudness: number,
    mode: number,
    speechiness: number,
    tempo: number,
    time_signature: number,
    track_href: string,
    type: string,
    uri: string,
    valence: number
}
