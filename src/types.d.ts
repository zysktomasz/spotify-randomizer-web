interface Playlist {
  id: string;
  name: string;
  ownerDisplayName: string;
  href: string;
  coverImageUrl: string;
  webPlayerUrl: string;
  isPublic: boolean;
  snapshotId: string;
  tracksCount: number;
}

interface HowToElement {
  id: number;
  heading: string;
  content?: string;
}

interface Track {
  addedAt: string;
  trackItem: TrackItem;
}

interface TrackItem {
  id: string;
  name: string;
  albumName: string;
  albumImageUrl: string;
  artists: Artist[];
}

interface Artist {
  id: string;
  name: string;
}
