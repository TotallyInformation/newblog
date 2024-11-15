---
title: 'My experiences with GitHub CoPilot'
description: |
  Using this article to capture my thoughts and feelings about GitHub CoPilot and its integration to Visual Studio Code starting in November 2024. Also assessing value for money for an unfunded open source developer.
created: 2024-11-06 11:37:10
updated: 2024-11-15 17:33:54

draft: false
tags: ["vscode","github","copilot","ai","llm"]
category: development
author: 'Julian Knight'

cover: './using-guthub-copilot.png'
coverAlt: 'CoPilot chat'
#subtitle: A subtitle
#language: en
#series:
#  name: 'My Series'
#  number: 1
---

> [!Info] Article Status
> Incomplete (Expect further updates)

I signed up for a personal license at US$10 per month with a view to deciding whether $100 per year is worth it for me as an open source developer who isn't making any money from their outputs.

I was already making fairly extensive use of the public ChatGPT service to get answers to coding questions and code suggestions. I already noted a significant improvement in responses when the `4o` model went live.

As with most things related to GitHub, sign-up, configuration and integration with VSCode wasn't _hard_ but it was reasonably involved. Not all configuration settings were obvious. Nor are all of the VSCode integrations. So this is my first observation. 

> [!Tip]
> Even being familiar with ChatGPT and prompt engineering, you _will_ need to invest time and energy learning how to use CoPilot.

## VSCode Installation

* Only slightly confusing since there are not only many unofficial extensions to avoid, there are 2 official extensions but installing the main one also installs the other (chat).
* Further confusion if you install the extension before you complete the GitHub side of the CoPilot configuration. The VSCode integration didn't want to work. I had to complete the config and restart VSCode though no errors or warnings were showing.

Summary: [RTFM!](https://code.visualstudio.com/docs/copilot/overview). 😊

## VSCode Chat Sidebar

* Relatively familiar interface similar to using ChatGPT but taking additional context from the specifically selected file and from other files open in the workspace.
* Adds some additional `/` commands to further steer the AI responses.
* Allows switching between models ![CoPilot model choices](CoPilot model choices.png)

### Failures

* With an Astro Markdown content file open, I asked both CoPilot and Claude `In the selected file, how can I tell Astro via the markdown to apply a specific class to the copilot-ctrl-i.png image?`. Both models completely failed to give a correct, workable answer. Both models started to go round in circles after a few attempts, trying to suggest the same, incorrect answers.

Summary: As with all LLM-based AI tools, they only really work when they have plenty of source material to work with. The more specialist the data/question, the less likely to are to get a decent answer.

## VSCode Code Edit Integration

* When you write a comment in code, you may get some inline CoPilot code suggestions that appear ghosted.
* How to use those suggestions is far from obvious and behaviours seem a little flaky (though that might be partially due to other extensions interferring?).
* There is a mix of <kbd>tab</kbd>, <kbd>Enter</kbd>, and <kbd>Shift</kbd>-<kbd>Enter</kbd> keys to make things happen in the editor. Requires new muscle memory to be built up to avoid repeatedly pressing the wrong thing which may cancel when you want to insert or the other way around.

### Successes

* When writing either documentation or web pages, CoPilot can nicely suggest some text. For example, on [this site's Privacy page](/privacy), it provided a description of the giscus local storage entry and a link to the giscus home page. It also added the privacy page's link here.

### Failures

* <span class="imgright">![copilot vscode editor prompt](./copilot-ctrl-i.png)</span>OMG! Why choose one of THE most common keyboard shortcuts, <kbd>Ctrl</kbd>-<kbd>i</kbd> to kick CoPilot into doing something in the editor! 😕 I even asked a GitHub staffer and had it confirmed that there is no way to change it. However, you can 

## Steering CoPilot Responses

When using GitHub CoPilot with VSCode, you can give it a set of fixed guidance instructions either through settings in VSCode's setting or better still, using a `.github/copilot-instructions.md` file. These instructions can be quite comprehensive and you can even ask CoPilot to improve them for you.

### Example instructions file

This is the file I'm using to help steer responses for an Astro build repository. As you can see, it is a Markdown formatted file.

```markdown
# Copilot Instructions

## Core Requirements

- Use Astro (v4.x or newer)
- Follow project eslint configuration
- Ensure WCAG 2.2 Level AA compliance
- Apply Shift-Left security practices

## Code Style

### JavaScript/TypeScript

- For node.js, use features available to v18
- For browsers, use features available to 90%+ browsers/users
- No trailing semicolons
- Single quotes for strings
- Use const by default, let when needed
- Prefer arrow functions
- Use optional chaining
- Add JSDoc if missing
- Add TypeScript types/interfaces

### Documentation

- Include JSDoc for functions and classes
- Add @param and @returns tags
- Document thrown errors
- Include usage examples for complex functions

### HTML/CSS

- Use semantic HTML elements
- Only use features available to 90%+ browsers/users
- Include ARIA attributes where needed
- Mobile-first responsive design
- Use CSS custom properties
- Follow BEM naming convention
- Include print styles

## Testing

- Write unit tests using Vitest
- Include accessibility tests
- Maintain >80% code coverage
- Test error scenarios

## Performance

- Lazy load components when possible
- Optimize images and assets
- Keep bundle size minimal
- Use proper caching strategies

## Security

- Sanitize user inputs
- Validate data on server-side
- Follow OWASP guidelines
- Use Content Security Policy
```

## VSCode Extensions that use CoPilot

In addition to the 2 GitHub official CoPilot extensions, here are a few more that I thought were interesting.

* [Regex Previewer](https://marketplace.visualstudio.com/items?itemName=chrmarti.regex)
* [vscode-mermAId](https://marketplace.visualstudio.com/items?itemName=ms-vscode.copilot-mermaid-diagram) - AI enhanced diagrams using Mermaid.
* [GenAIScript](https://marketplace.visualstudio.com/items?itemName=genaiscript.genaiscript-vscode) - very interesting idea from Microsoft for using JavaScript to generate scripts that create AI prompts and can analyse the returned data.
* [Data Analysis for Copilot](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-copilot-data-analysis) - Another interesting Microsoft extension that will analyse CSV files of data for you using Python. It can generate visualizations and output to a Python or Jupyter notebook file.
* [GitHub Copilot Code Review Assistant](https://marketplace.visualstudio.com/items?itemName=Codereviewforgithubcopilot.github-copilot-code-review) - analyse changes between GitHub branches.
* [CoCover](https://marketplace.visualstudio.com/items?itemName=MayaShavinStudio.cocover) - AI generate images for articles based on frontmatter title and description. You need to add API references for Dall-E 3.

You can [search the VSCode extensions marketplace](https://marketplace.visualstudio.com/search?term=tag%3Achat-participant&target=VSCode&category=All%20categories&sortBy=Relevance) with the tag `chat-participant` to see the full list.

## References

* [GitHub: Prompt engineering for CoPilot](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)
* [Visual Studio Code: GitHub CoPilot Documentation](https://code.visualstudio.com/docs/copilot/overview)
* [Prompt Engineering Guide](https://www.promptingguide.ai)
* [GitHub CoPilot Blog](https://github.blog/changelog/label/copilot/)
