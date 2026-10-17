// All site content lives here. Edit this file to change the portfolio.
//
// Media items:
//   { src: "media/figr/01.jpg", w: 3840, h: 2160 }            image
//   { src: "media/figr/02.mp4", w: 1900, h: 2160, video: true } video (autoplays muted)
//   Leave `src` out to show a tinted placeholder of that size.
//
// Project page layout (`lines`): each line is either one full-width frame
// or a pair of half-width frames. Indexes point into `media`.

window.SITE = {
  name: "Itamar",
  email: "hello@example.com",
  elsewhere: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Instagram", href: "https://instagram.com" },
  ],
  // home page: a large opening line, a supporting sentence, then the featured project's hero video
  headline: "Crafting thoughtful product experiences",
  intro: "I work alongside the teams I make things for, from the first question to the live release.",
  featured: "homie",
  more: 'Currently open to new projects. <a href="contact.html">Get in touch</a>.',

  // about page: an opening line, a short story, then label / content rows
  about: {
    headline: "I design the product, the motion and the system underneath.",
    story: [
      "I'm Itamar, a product designer. I take products from the first question to the live release: the research, the interface, the way it moves and the design system that keeps it all consistent.",
      "A lot of my recent work started at home. Homie splits the household bills, Groceries plans the weekly shop, and both run on a design system I built for them. Graphite came from the other direction: a quiet, tactile system for tools you tune by hand, with its own documentation site.",
      "I prototype in code, so what I design is what ships. Tokens, components and motion live in the same files as the product.",
    ],
    rows: [
      { label: "What I do", items: ["Product design, from research to release", "Design systems and tokens", "Motion and illustration", "Front-end prototyping"] },
      { label: "How I work", items: ["Start from a real moment, not a feature list", "Make the boring parts feel good", "One source of truth for design and code", "Tune it by hand until it feels right"] },
    ],
  },

  projects: [
    {
      slug: "homie",
      name: "Homie",
      kind: "Household expenses for two",
      title: "Where did the money go?",
      text: "A small web app for splitting the house bills between two people. Type an amount, pick what it was for, mark it as monthly if it repeats, and see who paid what and how to settle up. Illustrated avatars, a voice with some attitude and its own design system.",
      tint: "#ededeb",
      media: [
        { src: "media/homie/v00-funnel.webm", poster: "media/homie/v00-funnel.jpg", w: 1920, h: 1080, video: true },
        { src: "media/homie/f05-amount.jpg", w: 1920, h: 2160 },
        { src: "media/homie/v07-approve.webm", poster: "media/homie/v07-approve.jpg", w: 1200, h: 1350, video: true },
        { src: "media/homie/f04-flow.jpg", w: 3840, h: 2160 },
        { src: "media/homie/v08-empty.webm", poster: "media/homie/v08-empty.jpg", w: 1200, h: 1350, video: true },
        { src: "media/homie/v09-piggy.webm", poster: "media/homie/v09-piggy.jpg", w: 1200, h: 1350, video: true },
        { src: "media/homie/sg-illustrations.jpg", w: 3840, h: 2160 },
        { src: "media/homie/v10-motion-lab.webm", poster: "media/homie/v10-motion-lab.jpg", w: 1920, h: 1080, video: true },
        { src: "media/homie/sg-color.jpg", w: 3840, h: 2160 },
        { src: "media/homie/sg-icons.jpg", w: 1920, h: 2160 },
        { src: "media/homie/sg-type.jpg", w: 1920, h: 2160 },
        { src: "media/homie/cs-components.jpg", w: 3840, h: 2160 },
        { src: "media/homie/cs-states.jpg", w: 3840, h: 2160 },
        { src: "media/homie/cs-tokens.jpg", w: 3840, h: 2160 },
        // who owes whom: the settle-up flow and its close-up
        { src: "media/homie/v11-owe.webm", poster: "media/homie/v11-owe.jpg", w: 1200, h: 1350, video: true },
        { src: "media/homie/v12-settle.webm", poster: "media/homie/v12-settle.jpg", w: 1200, h: 1350, video: true },
        // icon set drawn from scratch
        { src: "media/homie/sg-iconset-cat.jpg", w: 3840, h: 2160 },
        { src: "media/homie/sg-iconset-ui.jpg", w: 1920, h: 2160 },
        { src: "media/homie/sg-iconset-grid.jpg", w: 1920, h: 2160 },
      ],
      hero: 0,
      // a { title, text } entry opens a section with a short write-up; arrays are rows of frames
      lines: [
        { title: "Add expense flow", text: "Type the amount on a big keypad, pick what it was for from chips that also set the category, and tick monthly if it repeats. Saving counts the amount up with money spilling out, so logging a bill feels like a small win instead of a chore." },
        [1, 2], [3],
        { title: "Who owes whom", text: "Splitting is the point, so the month always knows who owes whom. Tap the line under the total to see it: a wallet, the amount, and one button to close the month. Closing it turns the popup into a check with a burst of coins, and the debt is cleared." },
        [14, 15],
        { title: "Empty states", text: "An empty month shouldn't look broken. A past month with nothing in it gets the piggy bank and a line with some attitude. The current month gets a hand offering a coin, a nudge to add the first expense." },
        [4, 5], [6],
        { title: "Motion Lab", text: "Every moment follows one rule: things that open ease in one way, things that close ease another. To tune the illustration loops I built a small Motion Lab: drag the bezier handles, preview, and save straight into the SVG the app uses." },
        [7],
        { title: "Style guide", text: "Rubik in two weights, a white page with deep green and a lime accent, and one colour per category, used for the icon circle and for its bar in the breakdown." },
        [8], [9, 10],
        { title: "Icon set", text: "Drawn from scratch for Homie. Category icons are duotone on a 32px grid: a lime fill under a deep green line, with details like the shekel on the receipt. Interface icons are plain 24px strokes at 2.5, so they stay quiet next to the categories." },
        [16], [17, 18],
        { title: "Design system", text: "Components, states and tokens live in one stylesheet shared by the app and its style guide, so what is documented is exactly what ships." },
        [11], [12], [13],
      ],
      // shot page (layout after Dribbble's shot pages)
      shotTitle: "Homie · Household Expenses App & Design System",
      reel: [0, 2, 14, 4, 7, 16],   // the card's short reel on the home page: media indexes, in order
      // small project details under the title: label / value
      meta: [
        { label: "Scope", value: "Product, UI, design system, motion" },
        { label: "Tools", value: "Claude, Figma" },
        { label: "Year", value: "2026" },
      ],
      intro: "A small web app for splitting the house bills between two people. Type an amount, pick what it was for, mark it as monthly if it repeats, and see who paid what and how to settle up.",
      facts: [
        { label: "The challenge", text: "Make logging a shared bill quick enough that it actually happens, and make money talk between two people feel light instead of like an audit." },
      ],
    },
    {
      slug: "groceries",
      name: "Groceries",
      kind: "Shared shopping list for two",
      title: "Plan the trip, fill the list, tick it off in the aisle.",
      text: "A shared shopping list for the two of us, built on the Homie design system.",
      tint: "#f5f5f5",
      media: [
        { src: "media/shop/v00-hero.webm", poster: "media/shop/v00-hero.jpg", w: 1920, h: 1080, video: true },
        { src: "media/shop/v01-plan.webm", poster: "media/shop/v01-plan.jpg", w: 1200, h: 1350, video: true },
        { src: "media/shop/f01-home.jpg", w: 1920, h: 2160 },
        { src: "media/shop/v02-catalog.webm", poster: "media/shop/v02-catalog.jpg", w: 1200, h: 1350, video: true },
        { src: "media/shop/f02-catalog.jpg", w: 1920, h: 2160 },
        { src: "media/shop/v03-store.webm", poster: "media/shop/v03-store.jpg", w: 1200, h: 1350, video: true },
        { src: "media/shop/f03-cart.jpg", w: 1920, h: 2160 },
        { src: "media/shop/f04-flow.jpg", w: 3840, h: 2160 },
        { src: "media/shop/sg-icons3d.jpg", w: 3840, h: 2160 },
      ],
      hero: 0,
      lines: [
        { title: "Plan the trip", text: "Everything hangs on the day you shop. Pick today, tomorrow or next Thursday and the list is ready, and the home screen turns into a card for the next trip." },
        [1, 2],
        { title: "Fill from the catalog", text: "No typing. Departments as tabs, every product as a picture, one tap to add. The product flies into the cart and the count sits on the tile." },
        [3, 4],
        { title: "In the store", text: "Switch the cart to store mode and the list regroups by department with big rows for one thumb. Ticking an item washes the row in lime and counts down what is left." },
        [5, 6], [7],
        { title: "Product pictures", text: "Fluent Emoji 3D, shown bare without circles, so a list of tomatoes, milk and bread is recognisable at a glance. Everything else comes from the Homie design system: Rubik, deep green, one lime accent." },
        [8],
      ],
      shotTitle: "Groceries · Shared Shopping List, built on Homie",
      reel: [0, 1, 3, 5, 8],   // the card's short reel on the home page: media indexes, in order
      meta: [
        { label: "Scope", value: "Product, UI, motion" },
        { label: "Tools", value: "HTML, CSS, JS" },
        { label: "Year", value: "2026" },
      ],
      intro: "A shopping list for two that follows a real trip to the supermarket: decide when you're going, fill the list from a picture catalog, then check things off department by department in the store. Both of you see the same list.",
      facts: [
        { label: "The challenge", text: "Shopping lists die in a notes app. Make one that is quicker to fill than to type and works with one hand while pushing a cart." },
      ],
    },
    {
      slug: "graphite",
      name: "Graphite",
      kind: "Design system for tactile tools",
      title: "Controls you can feel.",
      text: "A quiet, tactile design system for tools people tune by hand, with its own documentation site.",
      tint: "#f5f5f5",
      media: [
        { src: "media/graphite/v00-hero.webm", poster: "media/graphite/v00-hero.jpg", w: 1920, h: 1080, video: true },
        { src: "media/graphite/site-home.jpg", w: 3840, h: 2160 },
        { src: "media/graphite/press-variants.jpg", w: 3840, h: 2160 },
        { src: "media/graphite/site-components.jpg", w: 3840, h: 2160 },
        { src: "media/graphite/pat-settings.jpg", w: 1920, h: 2160 },
        { src: "media/graphite/pat-create.jpg", w: 1920, h: 2160 },
        { src: "media/graphite/pat-confirm.jpg", w: 1920, h: 2160 },
        { src: "media/graphite/pat-undo.jpg", w: 1920, h: 2160 },
        { src: "media/graphite/pat-filter.jpg", w: 3840, h: 2160 },
        { src: "media/graphite/color-ladder.jpg", w: 3840, h: 2160 },
        { src: "media/graphite/type-cover.jpg", w: 1920, h: 2160 },
        { src: "media/graphite/tok-chain.jpg", w: 1920, h: 2160 },
        { src: "media/graphite/type-scale.jpg", w: 3840, h: 2160 },
        { src: "media/graphite/tok-tiers.jpg", w: 3840, h: 2160 },
        { src: "media/graphite/tok-states.jpg", w: 3840, h: 2160 },
        { src: "media/graphite/dk-create.jpg", w: 1920, h: 2160 },
        { src: "media/graphite/dk-filter.jpg", w: 1920, h: 2160 },
        { src: "media/graphite/site-home-dark.jpg", w: 3840, h: 2160 },
      ],
      hero: 0,
      lines: [
        { title: "One home for the system", text: "Graphite lives on its own documentation site: foundations, components and patterns, each with live examples, every state, usage notes and the tokens it reads. Search sits a slash away." },
        [1],
        { title: "PressButton", text: "The signature control. Hold it and it becomes a live timer and waveform. Sensitivity, bounce, bar count and corner are tuned straight from the inspector, and it comes light, dark or with a stroke." },
        [2],
        { title: "Components", text: "24 building blocks, from the press-to-record button to settings rows. Pill controls you push, fills you drag, and one black action per surface." },
        [3],
        { title: "Patterns", text: "How the pieces make whole screens: a settings page with one control per row, a create form with one primary action, confirm before anything irreversible and undo for everything else, and a filtered list that keeps its count visible." },
        [4, 5], [6, 7], [8],
        { title: "Foundations", text: "Depth comes from a ladder of greys, named graphite so it never clashes with Tailwind's gray. Colour is kept for meaning: status, live recording, an optional accent. Geist for the interface, Geist Mono for timers and code." },
        [9], [10, 11], [12],
        { title: "Tokens and states", text: "Three tiers: primitives named by value, semantic tokens named by purpose, component tokens named by where they're used. Each tier only reads the one below, so one primitive change flows through every theme. Every component follows the same state model." },
        [13], [14],
        { title: "Light and dark", text: "Themes switch at the semantic tier, so components never need to know which one they're in. Dark is its own ladder, not an inverted light." },
        [15, 16], [17],
      ],
      shotTitle: "Graphite · Design System & Documentation",
      reel: [0, 1, 2, 8, 13, 17],   // the card's short reel on the home page: media indexes, in order
      meta: [
        { label: "Scope", value: "Design system, docs" },
        { label: "Tools", value: "CSS tokens, JS" },
        { label: "Year", value: "2026" },
      ],
      intro: "Graphite is a quiet, tactile design system for tools people tune by hand: soft greys, pill controls you push, fills you drag, and one black action per surface. It ships as tokens, components and a documentation site.",
      facts: [
        { label: "The challenge", text: "Build controls that feel physical without decoration, and a system tight enough that a designer, a developer and a content designer all reach for the same piece." },
      ],
    },
    {
      slug: "project-two",
      name: "Project Two",
      kind: "Contemporary art auction platform",
      title: "A one-line headline for the project.",
      text: "Two or three sentences on what the project was, what you did and why it mattered.",
      tint: "#8f9a92",
      media: [
        { w: 16, h: 9 }, { w: 8, h: 9 }, { w: 16, h: 9 }, { w: 16, h: 9 },
        { w: 8, h: 9 }, { w: 8, h: 9 },
      ],
      lines: [[0], [1, 4], [2], [5, 1], [3]],
    },
    {
      slug: "project-three",
      name: "Project Three",
      kind: "Media for modern creators",
      title: "A one-line headline for the project.",
      text: "Two or three sentences on what the project was, what you did and why it mattered.",
      tint: "#a39383",
      media: [
        { w: 16, h: 9 }, { w: 16, h: 9 }, { w: 8, h: 9 }, { w: 8, h: 9 },
        { w: 16, h: 9 },
      ],
      lines: [[0], [2, 3], [1], [4]],
    },
    {
      slug: "project-four",
      name: "Project Four",
      kind: "Threat intelligence before the breach",
      title: "A one-line headline for the project.",
      text: "Two or three sentences on what the project was, what you did and why it mattered.",
      tint: "#7f8590",
      media: [
        { w: 16, h: 9 }, { w: 8, h: 9 }, { w: 8, h: 9 }, { w: 16, h: 9 },
        { w: 16, h: 9 },
      ],
      lines: [[0], [1, 2], [3], [4]],
    },
  ],
};
