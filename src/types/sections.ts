type Section = {
  _id: string;
  _type: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
};

export type Sections = [Settings & Socials & Media & Shows & Footer];

export type Settings = Section & {
  primaryColor: {
    hex: string;
  };
  secondaryColor: {
    hex: string;
  };
};

export type Socials = Section & {
  socials: {
    name: string;
    url: string;
  }[];
};

export type Media = Section & {
  headline: string;
  video: string;
};

export type Shows = Section & {
  headline: string;
  shows: {
    date: string;
    location?: string;
    city: string;
    country: string;
    ticketLink: string;
  };
};

export type Footer = Section & {
  sections: {
    title: string;
    link: string;
    linkTitle: string;
  };
};
