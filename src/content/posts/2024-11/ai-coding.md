---
title: Thoughts on using AI when coding
created: 2024-11-01 10:02:02
updated: 2024-11-23 13:03:57
description: |
  AI might be used casually via things like ChatGPT or via dedicated tools such as GitHub CoPilot.
  These are some of my thoughts on usage, viability, cost, security, and best practices.
draft: false
tags:
  - development
  - programming
  - AI
  - security
category: AI
author: Julian Knight
---

AI coding assistants, just like human coders are never going to be 100% accurate or reliable. Failure to understand this and to keep it in mind at all times **_IS_** going to get you into trouble at some stage.

So treat AI coding assistants like novice coders who have savant-scale memories. They may be able to spout off something they've "heard" before but may have no capacity to understand the context.

This means that AI does **_NOT_** replace developers! However, it can reduce the developer people resources required to achieve something. Whether that is the number of developers required and/or their time.

## Potential benefits

So what potential benefits are there from using AI coding assistants?

* Easier and quicker access to more complex answers than your current skills/knowledge allows.
* Access to knowledge that you didn't even understand you needed to ask about.
* May suggest alternative approaches to a specific issue that you would not have thought or known about.
* It can be like having an extra developer with you whenever you want them. Albeit a somewhat autistic one.
* It can give you a rapid baseline set of code, saving you lots of time having to write the "boring" boilerplate code that gets you started.
* It may suggest some limitations with your current approach which may save you going down an eventual dead-end.

## Getting the best from an AI coding assistant

AI assistants work best when provided with sufficient _context_. So coders now need a new skill, referred to as "prompt engineering", to get the best out of AI tooling.

Always try to provide as much relavent context as possible.

In addition, use follow-up prompts to home in on better answers.

## Costs

Compiling AI models as well as running queries through them is an expensive business. It requires a lot of electrical power and cooling. So AI tools have a significant financial and environmental cost.

So it is not unreasonable that vendors must find ways to recover those costs. If you are not paying for your AI tooling, who is? And how? You may still be paying, just not directly, perhaps the vendors are capturing and selling personal information for example. So always understand who is paying and how.

When using paid tooling, you need to think about value. If GitHub CoPilot for personal and open source development is UK£100 per year, would you get £100 value out of it each year? For businesses, this is likely to be an easier calculation than for personal use, however, many businesses fail to do initial or ongoing value calculations.

## Security

Since your code and data may be seen by the AI, you must not use live data, live access tokens, or other live sensitive information.

Do not use "random" AI's or other tooling (such as VSCode plugins). Only use known tools from known, reputable vendors to help reduce the risks of data loss and over-sharing.

## Privacy, Licensing & Intellectual Property

Always check the license and copyright on any AI coding tool. Make sure that you retain full rights and make sure you understand whether there are any licensing restrictions placed on generated code.

A simple example might be that a tool generates code that carries a GPL3 license. In that case all the code that uses that generated code MUST also carry the same license. This may be incompatible with your desired use.

Also check that you are not giving away any aspect of your own IP. Does the tool absorb data you give to it? If so, are you content with that, are you even in a position to allow that (e.g. with customer IP).
