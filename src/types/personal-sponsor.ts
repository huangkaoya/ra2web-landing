export interface PersonalSponsorRecord {
  id: string;
  name: string;
  deed: string;
  /** English deed. Shown when the site locale is English; `deed` is used otherwise. */
  deedEn?: string;
  published?: boolean;
}

export interface PersonalSponsorsFile {
  version: number;
  updatedAt: string;
  sponsors: PersonalSponsorRecord[];
}
