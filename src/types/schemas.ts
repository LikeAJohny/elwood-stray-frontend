export type Schema<T> = T & {
  _id: string;
  _type: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
};

export type Settings = {
  primaryColor: {
    hex: string;
  };
  secondaryColor: {
    hex: string;
  };
};

export type Socials = {
  socials: {
    name: string;
    url: string;
    icon: string;
    color: {
      hex: string;
    };
  }[];
};

export type Media = {
  headline: string;
  video: string;
};

export type Shows = {
  headline: string;
  shows: {
    date: string;
    endDate?: string;
    name?: string;
    subName?: string;
    location?: string;
    city: string;
    country: string;
    ticketLink: string;
  }[];
};

export type Footer = {
  sections: {
    title: string;
    link: string;
    linkTitle: string;
  }[];
};
