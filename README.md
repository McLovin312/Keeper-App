# Keeper

A small Google Keep–style notes app I built with React while learning the basics. You type a title and a note, hit **Add**, and it shows up as a little card on the page. Hit **DELETE** on a card and it's gone.

It's nothing fancy, but it was a good way to get comfortable with state, props, and passing functions between components.

## What it does

- Add a note with a title and some content
- Notes show up as cards in a grid
- Delete any note with its button
- Line breaks in your notes are kept

## Built with

- React 17
- Vite
- Plain CSS (fonts are McLaren and Montserrat from Google Fonts)

## Running it locally

You'll need Node installed. Then:

```bash
git clone https://github.com/McLovin312/Keeper-App.git
cd Keeper-App
npm install
npm run dev
```

Vite will print a local URL (usually `http://localhost:5173`). Open that in your browser and you're good to go.

To make a production build:

```bash
npm run build
npm run preview
```

## How it's put together

```
src/
├── index.jsx            # renders <App /> into the page
└── components/
    ├── App.jsx          # holds the notes array + add/delete logic
    ├── Header.jsx       # yellow "Keeper" bar at the top
    ├── CreateArea.jsx   # the form for writing a new note
    ├── Note.jsx         # a single note card
    └── Footer.jsx       # copyright line
public/
└── styles.css
```

`App` keeps all the notes in state. `CreateArea` tracks what you're typing and sends the finished note up to `App` through an `onAdd` prop. Each `Note` gets an `onDelete` function, and when you click delete it passes its id back up so `App` can filter it out of the list.

## Things I'd like to add

Right now it's pretty bare-bones, so a few things are on my list:

- **Saving notes** – everything disappears when you refresh. localStorage would fix that pretty easily.
- **Stop empty notes** – you can currently add a note with nothing in it.
- **Better ids** – notes use their array index as the key/id, which works but isn't ideal. Something like `crypto.randomUUID()` would be better.
- **Editing notes** instead of just deleting and rewriting them
- Maybe some Material UI icons and an expanding input box like the real Keep has

## Credits

This started as a project from a web development course I've been working through. The layout and styling are based on the course starter files, and I wrote the note functionality.
