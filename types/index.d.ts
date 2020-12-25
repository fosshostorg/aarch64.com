type Sponsor = {
  name: string;
  id: string;
  img: string;
  description: string;
  link: string;
};

type Author = {
  name: string;
  id: string;
  img: string;
};

type Post = {
  title: string;
  slug?: string;
  date: any;
  thumbnail: string;
  author: string;
  description?: string;
};
