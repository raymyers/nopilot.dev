---
slug: devin-war-over
title: The Devin Wars Are Over
authors: raymyers
tags: []
---
**Devin deployed. Decisive defeat deflected. Dev displacement dubious**

Today we crown the winners of "The Devin Wars", and prepare to reset our goalposts for the next race. 

As of Tuesday, Devin is now [available](https://www.cognition.ai/blog/devin-generally-available). Cognition Labs' [viral demo](https://www.cognition.ai/blog/introducing-devin) from 9 months ago is no longer just a demo. You can buy it for your team for $500 USD per month.

Cognition still [incorrectly](https://nopilot.dev/blog/dissecting-devin#what-is-a-software-engineer) refers to this coding agent as "the world's first AI software engineer". Nonetheless, the increased autonomy as compared to today's popular coding assistants remains compelling.

*If you'd like more backstory, try this video.*

<iframe width="560" height="315" src="https://www.youtube.com/embed/aKrjE7NKfw8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## The Moment

A lot has happened since March, when Devin's demo sent out a shockwave of excitement, confusion, and even panic.

* Elements of Devin's announcement were found to be [exaggerated](https://nopilot.dev/blog/dissecting-devin/#point-by-point), especially the claim of [solving an Upwork job](https://www.youtube.com/watch?v=tNmgmwEtoWE)
* Devin's SWE-bench score of 14% was tied by numerous Open Source agents and eventually doubled
* Numerous corporate players released similar products, including:
  * GitHub Copilot Workspace
  * Amazon Q Developer
  * Cursor Composer
  * Sweep AI

Through all of this, of course, human programmers still exist and this shows [no signs](https://www.youtube.com/watch?v=xFI2w-lxNsI) of changing.

The inevitable perception is that Cognition has lost the moment. They followed up their huge buzz with near silence, and are now in an awkward position as late entrants to the wave they started.

Still, we should expect more surprises from them and everyone else, it's still extremely early for coding agents.

## The Award Goes To...

Nopilot hereby recognizes these contributions which pave the way for the future of Open Source autonomous coding agents.

*Drumroll, please...*

🥁🥁🥁

### 🏆  Overall: OpenHands

All Hands AI handily takes home Best In Show. In addition to creating the most polished user interface, their CodeAct agent is the current SWE-bench leader and has been consistently competive over time.

Their Open Source project [OpenHands](https://github.com/All-Hands-AI/OpenHands) (formerly OpenDevin) has gathered impressive momentum, and serves as a modular platform for experimenting with new agents. They recently secured [seed funding](https://www.all-hands.dev/blog/press-release-all-hands-announces-5m-to-scale-ai-agent-for-software-development) to continue this work and are currently [hiring](https://allhandsai.applytojob.com/apply).

<img src="/img/open-hands-star-history-20241212.png" alt="OpenHands repo star history" style={{width: '60%'}}></img>

### 🏅 Research Division: SWE-agent

From the creators of [SWE-bench](https://www.swebench.com/) itself came [SWE-agent](https://swe-agent.com/latest/), perhaps our best blueprint for understanding how these agents work and how to build new ones.

Their architecture stands out as extremely simple, performing similarly to much more complicated codebases. Their paper [SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering](https://arxiv.org/abs/2405.15793) ([video reading](https://www.youtube.com/watch?v=Ko-R3MtTpWQ)) is essential reading, with detailed discussion of design decisions and factors that drove performance.

### 🏅 Product Vision Award: Cognition

Credit where it's due! Even though Nopilot is here to follow Open Source agents, it's only fair to acknowledge Devin's influence. Many independant code assistant projects suddenly began coordinating around it as the new default vision.

As explained in the initial announcement [tweet](https://x.com/cognition_labs/status/1767548763134964000):

> Devin is an autonomous agent that solves engineering tasks through the use of its own shell, code editor, and web browser.

This is not the only shape that a coding agent can take, but as a package it resonated with a wide variety of people.

### 🏅 Unsung Hero: Aider

Pre-dating Devin by a year, Paul Gauthier's [Aider](https://github.com/Aider-AI/aider) was one of the first agents capable of extending an existing codebase given a prompt.

After agents emerged that could take many steps on their own, it was tempting to think that Aider's more interactive design was outdated, but Aider [proved us wrong](https://aider.chat/2024/06/02/main-swe-bench.html) with a state-of-the-art SWE-bench score in June. Keeping up with more agentic approaches, Aider "worked smarter not harder", saving time and tokens.

Here are some other features that Aider adopted early.

* Repo mapping using [ctags](https://aider.chat/2023/05/25/ctags.html) and [tree-sitter](https://aider.chat/2023/10/22/repomap.html).
* Targetted [benchmarks](https://aider.chat/docs/leaderboards/) comparing LLM accuracy for code editing 
* [Voice mode](https://aider.chat/docs/usage/voice.html)
* Incremental git [commits](https://aider.chat/docs/git.html)


## 🐘 The Elephant In The Room

Despite all these great efforts, new users will generally find these **coding agents are not ready**. This applies to the corporate offerings as well, not just the Open Source projects. It takes practice to understand what kinds of tasks are ready for agents to save you time rather than get in your way. In addition to task granularity, you need to consider how local context may confuse the agent, and there are stability issues.

Arguably, the user experience is lagging behind performance improvements on agent benchmarks. This could indicate that we need new measures besides SWE-bench for a more complete picture. Just as SWE-bench was a leap forward from earlier benchmarks like [HumanEval](https://paperswithcode.com/sota/code-generation-on-humaneval), moving from the scope of a file to an entire repo, we should keep an eye out for the next paradigm. If customization for context is a limiting factor, that will be difficult to evaluate objectively.

When in doubt, [listen to your users](https://www.uploop.dev/blog/stop-wasting-time-on-community).

## What's Next

With so many different products and caveats, this remains a very confusing space. We are midway between research prototypes and true DevTools.

For builders and adopters, here is some broad advice:

* Focus on what can be done safely, reliably, and sustainably
* Limit task scope, specialized agents are usually more effective than general ones
* Prefer algorithms to LLMs when you have the option
* Continue to invest in humanity

For further discussion, here are recent talks from three extremely qualified people.

* [From Github Copilot to AI Native Development - Cursor, v0, Bolt.new + many more tools!](https://www.youtube.com/watch?v=1QaXyA3iwig) by Patrick Debois (DevOps)
* [The Open Source AI Coding Revolution](https://www.youtube.com/watch?v=0aXPQ9eYer0) by Graham Neubig (All Hands AI, Carnegie Mellon University), and related slides [Agents in December 2024](https://docs.google.com/presentation/d/1MQzcsaohM2KfhN9HtY0c8vkvZXZBZ47lXrAL0QDe_nU/edit#slide=id.g2f602927918_0_313)
* [Few Shot Code Generation to Autonomous Software Engineering Agents](https://www.youtube.com/watch?v=f6D5eHNr_VI) by John Yang (SWE-bench, Stanford)

Please feel free to [reach out](https://www.linkedin.com/in/cadrlife) with any questions you'd like to see covered.

*With patience the most tangled cord may be undone.*

---
*Want to help out? [See where you fit in!](/contributing)*