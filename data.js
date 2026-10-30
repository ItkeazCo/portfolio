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
      "A lot of my recent work started at home. Homie shows my girlfriend and me what we spend on at home, Groceries plans the weekly shop, and both run on a design system I built for them. Graphite came from the other direction: a quiet, tactile system for tools you tune by hand, with its own documentation site.",
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
        // the user flow, animated in the style guide's language
        { src: "media/homie/v13-userflow.webm", poster: "media/homie/v13-userflow.jpg", w: 1920, h: 1080, video: true, once: true },
        // Motion Lab close-up: dragging the bezier handles, then the animation playing with the new curve
        { src: "media/homie/v14-lab-curves.webm", poster: "media/homie/v14-lab-curves.jpg", w: 1920, h: 1080, video: true },
        // the category breakdown: list, then the ring chart
        { src: "media/homie/v15-breakdown.webm", poster: "media/homie/v15-breakdown.jpg", w: 1200, h: 1350, video: true },
        // the menu's "download the month", then the spreadsheet it makes
        { src: "media/homie/v16-report.webm", poster: "media/homie/v16-report.jpg", w: 1920, h: 1080, video: true },
        // the winged coin on its own: the money flying away after a save
        { src: "media/homie/v17-coin.webm", poster: "media/homie/v17-coin.jpg", w: 1200, h: 1350, video: true },
        // where it started: the first prototype next to today's app
        { src: "media/homie/f06-before-after.jpg", w: 1920, h: 1080 },
        // process boards: patterns kept from browsing money apps on Mobbin, and the tone of voice
        { src: "media/homie/f07-patterns.jpg", w: 1920, h: 1080 },
        { src: "media/homie/f08-voice.jpg", w: 1920, h: 1080 },
        // how the tools connect: Grok → Figma → Claude, built in once
        { src: "media/homie/v18-tools.webm", poster: "media/homie/v18-tools.jpg", w: 1920, h: 1080, video: true, once: true },
        // the icon libraries we showed the Grok brand manager: our real menu in Phosphor, Lucide and Tabler
        { src: "media/homie/f09-icon-options.jpg", w: 1920, h: 1080 },
        // reel only: the category icons arriving one at a time in a close frame
        { src: "media/homie/v19-icons.webm", poster: "media/homie/v19-icons.jpg", w: 1440, h: 1080, video: true },
        // 30: bento of the animations the app plays (same list and timing as the app reel)
        { src: "media/homie/v22-bento.webm", poster: "media/homie/v22-bento.jpg", w: 1920, h: 1080, video: true },
        // 31-35: scenes from the piggy animation breakdown film
        { src: "media/homie/v21-piggy-05.mp4", poster: "media/homie/v21-piggy-05.jpg", w: 1080, h: 1350, video: true },
        { src: "media/homie/v21-piggy-08.mp4", poster: "media/homie/v21-piggy-08.jpg", w: 1080, h: 1350, video: true },
        { src: "media/homie/v21-piggy-10.mp4", poster: "media/homie/v21-piggy-10.jpg", w: 1080, h: 1350, video: true },
        { src: "media/homie/v21-piggy-12.mp4", poster: "media/homie/v21-piggy-12.jpg", w: 1080, h: 1350, video: true },
        { src: "media/homie/v21-piggy-13.mp4", poster: "media/homie/v21-piggy-13.jpg", w: 1080, h: 1350, video: true },
        // 36-40: storyboard clips, visuals only, each plays once
        { src: "media/homie/v23-patterns.webm", poster: "media/homie/v23-patterns.jpg", w: 1920, h: 1080, video: true, once: true },
        { src: "media/homie/v24-iterate.webm", poster: "media/homie/v24-iterate.jpg", w: 1920, h: 1080, video: true, once: true },
        { src: "media/homie/v25-voice.webm", poster: "media/homie/v25-voice.jpg", w: 1920, h: 1080, video: true, once: true },
        { src: "media/homie/v26-color.webm", poster: "media/homie/v26-color.jpg", w: 1920, h: 1080, video: true, once: true },
        { src: "media/homie/v28-userflow.webm", poster: "media/homie/v28-userflow.jpg", w: 1920, h: 1080, video: true, once: true },
        // 41-42: the tools diagram and the interface icon pick
        { src: "media/homie/v29-tools.webm", poster: "media/homie/v29-tools.jpg", w: 1920, h: 1080, video: true, once: true },
        { src: "media/homie/v27-icon-pick.webm", poster: "media/homie/v27-icon-pick.jpg", w: 1920, h: 1080, video: true, once: true },
      ],
      hero: null,
      story: true,   // storyboard layout
      // a { title, text } entry opens a section with a short write-up; arrays are rows of frames
      lines: [
        [0], [15],
        { title: "Idea", text: "Everything the app does, on one map." },
        [40],
        { title: "Research", text: "I looked at money apps on Mobbin and kept the patterns that repeat." },
        [36],
        { title: "Iterations", text: "A rough prototype with Claude, just to feel it. Then frames from Pinterest for more character, and refining the messages on the real screens." },
        [37], [21, 23], [22],
        { title: "Visual language", text: "I set up a branding bot in Grok to shape the voice and colors, inspired by friendly apps like Bit, then built a design system in Figma. I drew the category icons myself, and asked the bot which interface library fits us best." },
        [41], [38], [39], [29], [42],
        { title: "Interaction", text: "I drew the illustrations in Figma, animated them with Claude, and polished the timing in Motion Lab." },
        [31, 32], [33, 34], [20], [30],
      ],
      // shot page (layout after Dribbble's shot pages)
      shotTitle: "Homie",
      subtitle: "Where our money goes, at a glance.",   // one short line under the title
      // the card's short reel on the home page: media indexes in order; { i, cut: true } switches instantly instead of sliding
      reel: [2, 0, 30, 21, 20, 29],
      intro: "I wanted my girlfriend and me to track what we spend and pull reports, in a simple, clear way.",
      // small project details under the title: label / value
      meta: [
        { label: "What I did", value: "UI, design system, motion" },
        { label: "Year", value: "2026" },
      ],
      facts: [],   // the goal now lives in the intro
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
        // the user flow, animated in the Homie style guide's language
        { src: "media/shop/v05-userflow.webm", poster: "media/shop/v05-userflow.jpg", w: 1920, h: 1080, video: true, once: true },
      ],
      hero: 0,
      lines: [
        { title: "The whole trip on one page", text: "The whole trip in one picture: pick a day, fill the list, shop together. Each step is there so we never have to text each other what to buy." },
        [9],
        { title: "Start from the shopping day", text: "Pick the day you're shopping, and the list is ready. The date tells us how long we have to add things, and each shop gets its own fresh list." },
        [1, 2],
        { title: "Pick by picture, not memory", text: "No typing. Tap a picture to add it, so we pick by seeing the product, not from memory." },
        [3, 4],
        { title: "Shop aisle by aisle, one-handed", text: "The list sorts by aisle, with big rows you can tick with your thumb. One hand stays on the cart, and we don't walk back and forth." },
        [5, 6], [7],
        { title: "Spot every product at a glance", text: "3D emoji, so you spot milk or bread at a glance. A free, ready set covers almost everything, so we didn't need to photograph hundreds of products." },
        [8],
      ],
      shotTitle: "Groceries",
      subtitle: "A shopping list for two.",   // one short line under the title
      reel: [0, 3, 8],   // the card's short reel on the home page: media indexes, in order
      meta: [
        { label: "What I did", value: "UI, motion" },
        { label: "Tools", value: "HTML, CSS, JS" },
        { label: "Year", value: "2026" },
      ],
      intro: "Instead of sending each other messages to build a list, we share one list that's always up to date. And we pick products by seeing them, not from memory.",
      facts: [
        { label: "What I wanted", text: "Make a list that's faster to fill than typing, and easy to use with one hand." },
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
        { title: "Keep it all on one docs site", text: "Everything lives on one docs site, with live examples. I built Graphite as the base for my own tools, so it had to be easy to look things up and copy." },
        [1],
        { title: "Hold to record, tune it live", text: "Hold it to record. Tune it right from the inspector. It's the first tool built on Graphite, so it set how every control should feel." },
        [2],
        { title: "Start every tool from 24 blocks", text: "24 building blocks, from buttons to settings rows. Each new tool starts from these, so I build the idea, not the buttons." },
        [3],
        { title: "Reuse whole screens", text: "How the pieces come together into full screens. Settings, forms and lists look the same in every tool, so nothing needs relearning." },
        [4, 5], [6, 7], [8],
        { title: "Grey for depth, color for meaning", text: "Soft greys for depth, color only when it means something. With little color around, the one thing that matters stands out." },
        [9], [10, 11], [12],
        { title: "Change one value, update everything", text: "Three simple layers, so one change updates everything. I can retheme a whole tool without touching a single component." },
        [13], [14],
        { title: "Design dark mode on its own", text: "Dark mode is designed on its own, not just inverted. Inverted greys lose their depth, so dark gets its own ladder." },
        [15, 16], [17],
      ],
      shotTitle: "Graphite",
      subtitle: "A design system you can feel.",   // one short line under the title
      reel: [0, 2, 13, 17],   // the card's short reel on the home page: media indexes, in order
      meta: [
        { label: "What I did", value: "Design system, docs" },
        { label: "Tools", value: "CSS tokens, JS" },
        { label: "Year", value: "2026" },
      ],
      intro: "A calm design system for tools you tune by hand.",
      facts: [
        { label: "What I wanted", text: "Make controls feel physical without extra decoration." },
      ],
    },
    {
      slug: "pixy",
      name: "Pixy",
      kind: "Pixel icon tool",
      title: "From pixels to shapes.",
      text: "A small tool for drawing pixel icons on a grid and rounding them into smooth shapes.",
      tint: "#f5f5f5",
      media: [
        // 0 the intro: the icon grid draws in, the first character builds pixel by pixel, then quick cuts on the beat (4:5)
        { src: "media/pixy/v05-intro.webm", poster: "media/pixy/v05-intro.jpg", w: 1080, h: 1350, video: true },
        // 1 symmetry: draw the left half, the right half mirrors; then Merge rounds it
        { src: "media/pixy/v03-symmetry.webm", poster: "media/pixy/v03-symmetry.jpg", w: 1920, h: 1080, video: true, cap: "Symmetry on: I draw the left half, Pixy mirrors every cell, then Merge rounds it." },
        // 2 the same skull at three merge levels
        { src: "media/pixy/f02-merge.jpg", w: 1920, h: 1080, cap: "The same skull at Merge 0%, 50% and 100%." },
        // 3 the Merge page with its live preview
        { src: "media/pixy/f03-tool.jpg", w: 1920, h: 1080, cap: "Merge adjusts right on the artwork, from a bar at the bottom: Cancel or Done, like Procreate." },
        // 4 time-lapse replay
        { src: "media/pixy/v04-timelapse.webm", poster: "media/pixy/v04-timelapse.jpg", w: 1920, h: 1080, video: true, cap: "Time-lapse replays the drawing cell by cell, and exports it as a video." },
        // 5 export
        { src: "media/pixy/f06-export.jpg", w: 1920, h: 1080, cap: "Export a PNG, an SVG, or a WhatsApp sticker." },
        // 6 sign-in
        { src: "media/pixy/v02-signin.webm", poster: "media/pixy/v02-signin.jpg", w: 1920, h: 1080, video: true, cap: "Pixy naps until the mouse comes near, then wakes up and eats pixels." },
        // 7 the mascot
        { src: "media/pixy/f05-pixy.jpg", w: 1920, h: 1080, cap: "Pixy, the mascot, drawn in Pixy." },
        // 8 on a phone: drawing the skull with a finger, then Merge from the menu
        { src: "media/pixy/v06-mobile.webm", poster: "media/pixy/v06-mobile.jpg", w: 1200, h: 1350, video: true, cap: "Drawing with a finger, then Merge from the menu." },
        // 9 phone screens: the drawing, the menu, rounded
        { src: "media/pixy/f07-mobile.jpg", w: 1920, h: 1080, cap: "The drawing, the Merge bar on the artwork, and the merged skull." },
        // 10: artwork drawn in Pixy, shown cell for cell
        { src: "media/pixy/f08-coin.png", w: 1920, h: 1080, cap: "A shekel coin, drawn in Pixy." },
      ],
      hero: 0,
      lines: [
        { title: "Draw half, get the whole", text: "Turn on symmetry and I only draw one side: every cell is mirrored to the other. Brush, fill, eraser and eyedropper, like in Procreate." },
        [1], [10],
        { title: "Merge pixels into shapes", text: "One slider rounds the pixels: the higher it goes, the more the corners round and touching cells join into one smooth shape. The SVG export uses the same paths, so what I see is what I get." },
        [2], [3],
        { title: "Watch it build", text: "Time-lapse replays a drawing cell by cell, like Procreate, and saves it as a video to share." },
        [4],
        { title: "Take it anywhere", text: "Export a PNG at 1×, 4× or 8×, an SVG, or a WhatsApp sticker with a white cut-out outline." },
        [5],
        { title: "On the phone too", text: "The same tools on a phone: they move to a bar at the bottom, settings like Merge adjust right on the artwork, and every button is sized for a finger." },
        [8], [9],
        { title: "A sign-in with a mascot", text: "Sign in with Google, and your drawings are saved to your account. On the way in, Pixy naps until the mouse comes near, then wakes up and starts eating pixels." },
        [6],
        { title: "Built in Claude Code, on Graphite", text: "I built it in Claude Code, and every control comes from Graphite, my design system." },
        [7],
      ],
      shotTitle: "Pixy",
      subtitle: "Draw tiny pixel icons.",
      reel: [0, 1, 4],
      meta: [
        { label: "What I did", value: "Design, code" },
        { label: "Tools", value: "Claude Code, Graphite, Supabase" },
        { label: "Year", value: "2026" },
      ],
      intro: "A small tool I made for drawing icons pixel by pixel, then merging the pixels into smooth shapes I can export as SVG.",
      facts: [],
    },
  ],
};
