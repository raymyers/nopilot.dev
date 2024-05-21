---
slug: tiny-type-agent
title: Tiny Type Agent - Safely Improving Python Code
authors: raymyers
tags: []
---

As a companion to my talk at [The Artificially Intelligent Enterprise Summit](https://www.techstrongevents.com/the-artificially-intelligent-enterprise), I'd like to demonstrate a minimal yet **useful** and **safe** Autonomous DevTool.

<img src="/img/Ray-Myers-AIE-talk-1080x1080.png" alt="Nopilot talk"></img>

## Definitions

Let's adopt these loose terms for now.

* **Assistant**: Takes ~1 action per user interaction
* **Agent**: Completes a meaningful task by taking many actions with environment feedback
* **Autonomous DevTool**: AI agent packaged into a polished product, ready to integrate with your software development lifecycle


## Use case: Add type-hints to legacy Python

Suppose you like type checking for Python, but the hints are toilsome to add!

This 400-line Python script shows how to address this with LLMs combined with safegaurds: [tiny-type-agent](https://github.com/raymyers/tiny-type-agent) on GitHub.

* LLM suggests types
* Agent uses Tree-Sitter to update the syntax tree in a tmp "shadow file"
* MyPy validates the shadow file
* Based on the result, Agent updates the original source or discards suggestion

It is perhaps not yet a DevTool because it's not polished (for that, help us finish the larger tool [Menderbot](https://github.com/craftvscruft/menderbot)), but it shows a workflow that is safe enough to improve production code with extremely low risk. In fact, it has already been used to update production code at a major company and found bugs in the process.

## Background

<iframe width="560" height="315" src="https://www.youtube.com/embed/aKrjE7NKfw8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

*With patience the most tangled cord may be undone.*

---
*Want to help out? [See where you fit in!](/contributing)*