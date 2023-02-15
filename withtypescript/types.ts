export interface GetBossResults {
    info: Info;
    data: Bosses[]
}

export interface Info {
    count: number;
    pages: number;
    next: string;
    prev: null;
}

export interface Bosses {
    success: boolean;
    count:   number;
    total:   number;
    data:    Datum[];
}

export interface Datum {
    data: any;
    id:           string;
    name:         string;
    image:        null | string;
    region:       string;
    description:  string;
    location:     string;
    drops:        string[];
    healthPoints: string;
}
