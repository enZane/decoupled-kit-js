# @pantheon-systems/next-wordpress-starter

## 0.8.0-canary.0

### Minor Changes

- 915c3ac: Added unit and snapshot tests, some minor refactoring

### Patch Changes

- Updated dependencies [6656b11]
  - @pantheon-systems/wordpress-kit@2.5.1-canary.0

## 0.7.0

### Minor Changes

- dad84cd: Change next-wordpress-starter to use SSR for all routes and added ISR
  example.
- f9d5697: Create setEdgeHeader lib in wordpress-kit and use this in
  next-wordpress-starter to set cache control headers.

### Patch Changes

- 8943464: Derive IMAGE_DOMAIN from the backend url when it is https or http
- 66aeea3: Upgraded next to latest version, changed starter kits to build and
  start using standalone output mode.
- ee835e8: Update prettierrc and reformat spaces -> tabs for accessibility
- Updated dependencies [e9901e5]
- Updated dependencies [f9d5697]
- Updated dependencies [ee835e8]
  - @pantheon-systems/wordpress-kit@2.5.0

## 0.7.0-canary.2

### Minor Changes

- f9d5697: Create setEdgeHeader lib in wordpress-kit and use this in
  next-wordpress-starter to set cache control headers.

### Patch Changes

- ee835e8: Update prettierrc and reformat spaces -> tabs for accessibility
- Updated dependencies [e9901e5]
- Updated dependencies [f9d5697]
- Updated dependencies [ee835e8]
  - @pantheon-systems/wordpress-kit@2.5.0-canary.0

## 0.7.0-canary.1

### Minor Changes

- dad84cd: Change next-wordpress-starter to use SSR for all routes and added ISR
  example.

## 0.6.1-canary.0

### Patch Changes

- 8943464: Derive IMAGE_DOMAIN from the backend url when it is https or http
- 66aeea3: Upgraded next to latest version, changed starter kits to build and
  start using standalone output mode.

## 0.6.0

### Minor Changes

- 25ea80e: Fixed IMAGE_DOMAIN env var which was being incorrectly set in some
  cases
- 50309dd: [next-wordpress] Add example page fetch via Authenticated API

### Patch Changes

- f6134ed: Fix file name for WordPressClient
- 56ec318: Added a helpful error message in case a CMS backend endpoint is not
  set
- Updated dependencies [62ba36b]
  - @pantheon-systems/wordpress-kit@2.4.0

## 0.6.0-canary.1

### Patch Changes

- f6134ed: Fix file name for WordPressClient

## 0.6.0-canary.0

### Minor Changes

- 25ea80e: Fixed IMAGE_DOMAIN env var which was being incorrectly set in some
  cases
- 50309dd: [next-wordpress] Add example page fetch via Authenticated API

### Patch Changes

- 56ec318: Added a helpful error message in case a CMS backend endpoint is not
  set
- Updated dependencies [62ba36b]
  - @pantheon-systems/wordpress-kit@2.4.0-canary.0

## 0.5.0

### Minor Changes

- 0ac5ecf: [next-wordpress-starter] Use IMAGE_DOMAIN + image url in all
  instances of the next/image component

### Patch Changes

- Updated dependencies [68a2d36]
- Updated dependencies [960e2e8]
- Updated dependencies [ba2a226]
- Updated dependencies [a940098]
  - @pantheon-systems/wordpress-kit@2.3.0

## 0.4.1

### Patch Changes

- d96e395: Change js files to jsx to follow vite spec
- 94f95a2: Change from URI property to path in FooterMenuQuery
- Updated dependencies [d96e395]
- Updated dependencies [d4f9c8a]
- Updated dependencies [7380376]
- Updated dependencies [3683ced]
- Updated dependencies [31e9144]
  - @pantheon-systems/wordpress-kit@2.2.0

## 0.4.0

### Minor Changes

- b7e9b1f: Added pages grid in the route /pages, getting data by static
  generating
- 2f72e82: Added the Post component to the `/posts/[slug]` route that renders a
  post from WordPress.
- d49504b: Added the dynamic route [uri] inside /pages that fetch statically the
  page data
- 0db7b52: Imported tailwind plugin from WordPress-Kit
- 04f4e0c: Added to the /post route the post grid with server side rendering

### Patch Changes

- Updated dependencies [0db7b52]
  - @pantheon-systems/wordpress-kit@2.1.0

## 0.3.0

### Minor Changes

- d53fee9: Added the HOC withGrid, and the PostGridItem component to render the
  posts, that components are used in the home page, also created the Posts file
  in lib, where added the getLatestPosts function
- 5dfbb69: [next-wordpress-starter] Added to the lib the implementation to get
  the client, the use of that client in each page to get the footer menu, and
  the logic to render the options in the footer component

### Patch Changes

- Updated dependencies [5dfbb69]
  - @pantheon-systems/wordpress-kit@2.0.0

## 0.2.0

### Minor Changes

- b27b218: Added Footer, Header, Layout and Page-Header components to the
  next-wordpress-starter, created index page and work in progress pages/index
  and posts/index
- 02049ef: [next-wordpress-starter] Initialized the `next-wordpress-starter`
