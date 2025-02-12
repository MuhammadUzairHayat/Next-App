import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(
  `*[_type == 'startup' && defined(slug.current)] | order(_createdAt desc) {
        _id, author->{_id, name, image}, title, image, description, views, slug, 
        category, _createdAt
    }`
);
