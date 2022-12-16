export type FormData = {
    name: string;
    lastname: string;
    email: string;
    address1: string;
    address2?: string | null;
    city: string;
    state: string;
    zipCode: string;
    number: string;
    cvc: string;
    expDate: string;
    nameOnCard: string;
}



export type Comic = {
    id: string;
    title: string;
    thumbnail: {
        path: string;
        extension: string;
    };
    description: string;
    price: number;
    stock: number;
    characters: characters;
};

type characters = {
    available: number;
    returned: number;
    collectionURI: string;
    items: items[];
};

type items = {
    resourceURI: string;
    name: string;
    role: string;
};


export interface Character {
    id: string;
    name: string;
    description: string;
    modified: string;
    resourceURI: string;
    urls: URL[];
    thumbnail: Thumbnail;
    comics: Comics;
    stories: Stories;
    events: Comics;
    series: Comics;
}

interface Comics {
    available: string;
    returned: string;
    collectionURI: string;
    items: ComicsItem[];
}

interface ComicsItem {
    resourceURI: string;
    name: string;
}

interface Stories {
    available: string;
    returned: string;
    collectionURI: string;
    items: StoriesItem[];
}

interface StoriesItem {
    resourceURI: string;
    name: string;
    type: string;
}

interface Thumbnail {
    path: string;
    extension: string;
}

interface URL {
    type: string;
    url: string;
}