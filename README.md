# Pokémon Shopping Cart [(Live Site)](https://pokemon-shopping.vercel.app/)

`Javascript` | `React` | `HeroIcons`

This is a personal project to explore React (and soon Next.js) functionality.

## What's the MVP of a shopping cart?

- [x] Have things to sell
- [x] Add said things to a cart
- [ ] Purchase items via a checkout screen

## Concepts utilized

- Component level state management
  - `useState`
- Data fetching, management, and reactivity
  - `fetch`
  - `useEffect`
- Loading state
  - shimmer animation
- Pagination

## Future Development

- `SHOW` view
- (mock) Checkout
- Client-side state management

### TODOs (as of 01/04/2024):

- Refactor `PokemonCard` html
  - add-to-cart via the pokeball+plus+minus icon vs not the whole element
  - clicking `PokemonCard` should toggle the focus of the element without modyfying `itemsInCart`
  - focus should route to a show view for the `pokemon` object
  - `PokemonCard` shadow should remain active on view change
- Move fetch to `PokemonList` for better loading experience
  - use `Suspense`

### Tools to consider for future development

- [`TypeScript`](https://www.typescriptlang.org/docs/) - for typed variables
  - Why?
    - readability
    - code error guarding
  - Alternative?
    - n/a
- [`Next.js`](https://nextjs.org/) - for more development structure and features
  - Why?
    - `next/navigation`
    - folder based routing & file system magic (`layout.jsx`, `loading.jsx`, `error.jsx`)
    - Vercel integration
  - Alternative:
    - `React Router` if the only feature we need is routing
- [`Tailwind`](https://tailwindcss.com/) - for simplified css
  - Why?
    - classless css
    - consistency
    - lower bundle size
  - Alternative?
    - regular `CSS`
    - `SASS`
- [`Elf`](https://ngneat.github.io/elf/) - for client-side state management (when data is needed outside of just prop drilling)
  - Why?
    - [Netanel Basal](https://netbasal.com/) made it
  - Alternative?
    - n/a

## Disclaimer

- Project is `IN PROGRESS`
- Data provided by [PokéApi](https://pokeapi.co/)
