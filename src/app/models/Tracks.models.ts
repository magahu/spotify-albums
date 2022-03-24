import { Artist, ExUrl, Album } from "./Album.models";

export interface TracksResponse{
    href: string;
    items: Track[];
    limit: number;
    next: null;
    offset: number;
    previous: null;
    total: number;
}

export interface Track{
    artists: Artist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_urls: ExUrl;
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
}

export interface TrackDetail{
    album: Album;
    artists: Artist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: ExtIDs;
    external_urls: ExUrl;
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track_number:number;
    type:Track;
    uri: string;
} 

export interface ExtIDs{
    isrc: string;
}
