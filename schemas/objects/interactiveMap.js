export default {
  name: 'interactiveMap',
  type: 'object',
  title: 'Interactive Map',
  fields: [
    {
      name: 'mapPoints',
      title: 'Map Points',
      description: 'Points on the map with brief educational comments',
      type: 'array',
      of: [
        {
          name: 'mapPoint',
          title: 'Map Point',
          type: 'object',
          fields: [
            {
              name: 'geolocation',
              type: 'geopoint',
              title: 'Geolocation',
              description: "Where is the thing you're trying to highlight? (Can be a city, site, even a country!)",
            },
            {
              name: 'name',
              type: 'string',
              title: 'Name',
              description: "Name of this location as you'd like it to appear on a map.",
            },
            {
              name: 'description',
              title: 'Description',
              description: 'In-depth description of this location for usage in-map and in-text.',
              type: 'array',
              of: [{type: 'block'}]
            },
          ]
        }
      ]
    }
  ],
   preview: {
     select: {
        mapPoint0: 'mapPoints.0.name',
     },
    prepare({ mapPoint0 }) {
      const title = mapPoint0 ? `Interactive Map: ${mapPoint0}...` : "Interactive Map"
      return { title }
    }
  },
}
