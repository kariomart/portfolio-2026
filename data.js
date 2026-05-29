// ─── Portfolio Content ────────────────────────────────────────────────────────
// Edit this file to add/remove/update projects.
//
// slug:        unique ID used in custom URLs (no spaces, lowercase, hyphens ok)
// tags:        used in the builder to group/filter projects for job applications
// client:      shown in the project modal (company or client name)
// year:        shown in the project modal
// description: shown in the project modal (right column)
// images:      number = cap on how many images from image-manifest.js to show
// captions:    optional array of strings, one per image in order (empty string = no caption)
// ─────────────────────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    slug: 'qup',
    title: 'Q-UP',
    tags: ['game', 'design', 'branding', 'ui/ux', 'art direction', 'sound design'],
    role: 'Lead Designer',
    client: 'Everybody House Games',
    year: '2025',
    description: "Sick of long queues, unfair matchups, and arbitrary reflex tests? Try Q-UP, the coin flipping eSport. It's one part clicker, one part multiplayer strategy game, one part demented capitalism simulator, and 100% completely random.",
    captions: ['', '', '', '', '', '', '', ''],
    quote: '',
    images: 8,
  },
  {
    slug: 'netflix',
    title: 'Netflix',
    tags: ['campaign', 'interactive', 'ux'],
    role: 'Designer',
    client: 'Netflix',
    year: '',
    description: "Snow City is a digital experience created for Coach, exploring themes of winter, nostalgia, and urban exploration. The work drew on deep UX expertise to create something both brand-aligned and genuinely playful.",
    quote: "Digital experience created for Coach's seasonal campaign.",
    images: 5,
    captions: ['', '', '', '', '', ''],
  },
  {
    slug: 'rewilding',
    title: 'Rewilding',
    tags: ['editorial', 'ux'],
    role: 'Designer',
    client: 'Personal',
    year: 'Ongoing',
    description: "a meditative ecology game about regrowing a forest as a means of reckoning with climate change and its effects.",
    quote: '',
    images: 5,
  },
  {
    slug: 'noclip',
    title: 'noclip',
    tags: ['sponsored', 'ux'],
    role: 'Sponsored',
    client: 'Adobe',
    year: '',
    description: 'A sponsored collaboration with Adobe, distributed through Spotify, exploring the creative process and the intersection of design and technology.',
    quote: 'Sponsored by Adobe. Available on Spotify.',
    images: 6,
  },
  {
    slug: 'SnowCity',
    title: 'Snow City',
    tags: ['editorial', 'ux'],
    role: 'Editorial Feature',
    client: 'Coach',
    year: '',
    description: 'Work featured in Wired magazine across stories on rewilding, climate change, and the gig economy — a visual and interactive contribution to reporting at the edge of technology and the natural world.',
    quote: 'Featured in Wired across stories on rewilding, climate change, and gig work.',
    images: 4,
  },
  {
    slug: 'linkedin',
    title: 'LinkedIn Data Communities',
    tags: ['editorial', 'ux'],
    role: 'Sponsored',
    client: 'LinkedIn',
    year: '',
    description: 'A sponsored collaboration with Adobe, distributed through Spotify, exploring the creative process and the intersection of design and technology.',
    quote: 'Sponsored by Adobe. Available on Spotify.',
    images: 4,
  },
  {
    slug: 'megaware',
    title: 'MegaWare',
    tags: ['editorial', 'ux'],
    role: 'Designer',
    client: 'Personal',
    year: 'Ongoing',
    description: '',
    quote: '',
    images: 4,
  },
];
