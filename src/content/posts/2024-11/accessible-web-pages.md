---
title: Accessible Web Pages
created: 2024-11-23 13:23:16
updated: 2024-11-23 17:54:44
description: An overview of how to create and validate accessible web pages
draft: false
tags:
  - development
  - website
  - accessibility
  - aria
  - wcag
category: web-development
author: Julian Knight
---

> [!Info] Article Status
> Early Draft (Expect further updates)

Every public or staff-facing web page in the UK, EU and many other regions are required to meet minimum accessibility standards. The general requirement is usually WCAG 2.2 AA (or the current version).

> [!Warning] 
>
> This is often a **legal** requirement, not just a moral one.

It isn't always easy to meet these requirements but some of the tools listed here may be of help.

## Page structure

This is by no means a complete list. I may extend it from time-to-time. These are just a few of the basics.

* Must only have a single `h1` tag.
* `hx` tags should be in the correct order and correctly nested, no out-of-order headings.
* Every input should have a label.
* Every image must have an `alt` attribute.
* Keep the font sizes reasonably large. I set the base font size to 110%.
* Do not use fixed pixel sizing for anything unless you absolutely have to. Doing so restricts the users ability to alter sizing to meet their own accessibility needs.
* Watch out for colour contrast levels. Grey-on-grey is a daft idea! Use an accessibility checker
* ... lots more, check the standard for details.

## Tools for checking/testing

* Chromium-based browsers have the "Lighthouse" tool as part of the Developer Tools. This performs a sub-set of accessibility checks amongst other things.

* [Siteimprove Accessibility Checker browser extension](https://www.siteimprove.com/integrations/browser-extensions/). "This free extension lets you check any multi-step form, dynamic content, or non-public page for accessibility issues."

* [Accessibility Insights for Web](https://accessibilityinsights.io/docs/web/overview/) - Extension for Chromium-based browsers that helps developers find and fix accessibility issues in web apps and sites.

* [WAVE by WebAIM](https://wave.webaim.org/extension/) - A browser extension that shows a side-panel indicating page structure, aria use and any issues.

* [A simple CSS-based bookmarklet to check if any ARIA roles have been duplicated](https://adrianroselli.com/2015/01/css-bookmarklets-for-testing-and-fixing.html#ARIAdupes)

* https://thepaciellogroup.github.io/WAI-ARIA-Usage/WAI-ARIA_usage.html - a bookmarklet for checking ARIA usage on a page.

## References

* https://www.smashingmagazine.com/2021/06/complete-guide-accessibility-tooling/
