---
title: 'My experiences with GitHub CoPilot'
created: 2024-11-06 11:37:10
updated: 2024-11-08 15:29:16

description: |
  Using this article to capture my thoughts and feelings about GitHub CoPilot and its integration to Visual Studio Code starting in November 2024. Also assessing value for money for an unfunded open source developer.
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

## VSCode Chat Sidebar

* Relatively familiar interface similar to using ChatGPT but taking additional context from the specifically selected file and from other files open in the workspace.
* Adds some additional `/` commands to further steer the AI responses.
* Allows switching between models ![CoPilot model choices](CoPilot model choices.png)

### Failures

* With an Astro Markdown content file open, I asked both CoPilot and Claude `In the selected file, how can I tell Astro via the markdown to apply a specific class to the copilot-ctrl-i.png image?`. Both models completely failed to give a correct, workable answer. Both models started to go round in circles after a few attempts, trying to suggest the same, incorrect answers.

## VSCode Code Edit Integration

* When you write a comment in code, you may get some inline CoPilot code suggestions that appear ghosted.
* How to use those suggestions is far from obvious and behaviours seem a little flaky (though that might be partially due to other extensions interferring?).
* There is a mix of <kbd>tab</kbd>, <kbd>Enter</kbd>, and <kbd>Shift</kbd>-<kbd>Enter</kbd> keys to make things happen in the editor. Requires new muscle memory to be built up to avoid repeatedly pressing the wrong thing which may cancel when you want to insert or the other way around.
* <span class="imgright">![copilot vscode editor prompt](./copilot-ctrl-i.png)</span>OMG! Why choose one of THE most common keyboard shortcuts, <kbd>Ctrl</kbd>-<kbd>i</kbd> to kick CoPilot into doing something in the editor! 😕 If there is a way to change that shortcut, I haven't found it yet (though I've not really looked yet either).
  
  
 
