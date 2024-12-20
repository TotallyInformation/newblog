# Changelog for the Totally Information website

Due to the speed of change, this repo does not use versioning but changes will be grouped by date.

## 2024-11-21

* Search feature added using [astro-pagefind](https://github.com/shishkin/astro-pagefind).
* Added a new favicon generated by Microsoft Copilot chat.

## 2024-11-19

* Added [Astro Markdown](https://github.com/astro-community/md) to enable rendering of Markdown within data collections or frontmatter.
* Added new collection `it-timeline`. Added new page `/kb/it-timeline`. Shows a timeline of my IT & tech. Added to the "About" menu.

## 2024-11-16

* Fix the site menu for Safari/Firefox. Many thanks to [Node-RED Forum members](https://discourse.nodered.org) for helping out. 😊
* Cloudflare analytics added - so privacy page updated.

## 2024-11-15

* Added [Giscus](https://github.com/giscus/giscus) GitHub based commenting added.
* Improved page header: Banner image and title/sub-title no longer overflow into the page.
* Added GitHub CoPilot config

## 2024-11-14

### BaseLayout.astro

* Hide accessible skip to main link

### PageMeta.astro

* Removed Twitter metadata - bye-bye xTwitter! 🤣

### PageFooter.astro

* Added BlueSky link

### site-info.json

* Added more site-level author attribs for various sites

## 2024-11-11

### Home page (index.astro)

* Show latest 5 posts

### Article pages

* Callouts - uses my custom version of remark-obsidian-callout
* Headings:
  * Heading anchors - using rehype-slug & rehype-autolink-headings - Each heading is now a link
  * Heading underline and colour - blue colour, no underline
  * Added a title attrib giving the heading level
