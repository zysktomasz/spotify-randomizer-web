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
