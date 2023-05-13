export interface Team {
  id: number;
  abbreviation: string | null;
  city: string | null;
  conference: string | null;
  division: string | null;
  full_name: string | null;
  name: string | null;
}

export interface Player {
  id: number;
  first_name: string;
  height_feet: string | null;
  height_inches: string | null;
  last_name: string | null;
  position: string | null;
  team: Team;
  weight_pounds: any | null;
}

export interface PlayerMetaData {
  data: Player[];
}

export interface TeamMetaData {
  data: Team[];
}
