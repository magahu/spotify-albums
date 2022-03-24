export interface AlbumsResponse{
    albums: Search;
}

export interface Search{
    href: string;
    items: Album[];
    limit: number;
    next: string;
    offset: number;
    previous: number;
    total: number;
}

export interface Album{
    album_type: string;
    artists: Artist[];
    available_markets?: string[];
    copyrights?: Copyright[];
    external_ids?: ExId;
    external_urls: ExUrl;
    genres?: [];
    href: string;
    id: string;
    images: Image[];
    label?: '';
    name: string;
    popularity?: number;
    release_date: string;
    release_date_precision: string;
    total_tracks: number
    tracks?: Track;
    type: string;
    uri: string;
}

export interface Artist{
    external_urls: ExUrl;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

export interface Copyright{
    text: '';
    type: '';
}

export interface ExId{
    upc: string;
}

export interface ExUrl{
    spotify: string;
}

export interface Image{
    height: string;
    url: string;
    width: number
}

export interface CommonTrackData{
    href: string;
    limit: number;
    next: null;
    offset: number;
    previous:null;
    total: number;
}

export interface Track extends CommonTrackData{
    items: TrackDetail[];
}

export interface TrackDetail extends CommonTrackData{
    artists: Artist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_urls: ExUrl;
    id: string;
    is_local: boolean;
    name: string;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
}
