---
slug: dissecting-devin
title: Dissecting Devin
authors: raymyers
tags: []
---
**Devin dissected. Disinformation debunked. Direction declared!**

It's now been one month since Cognition announced Devin, which we remain excited about. However, it's time to go over that initial announcement [tweet](https://x.com/cognition_labs/status/1767548763134964000), because we need to get some things clear.

We predict that Autonomous DevTools will have a historic impact on software (good or bad!) This period is the beginning of their transition from research prototypes to eventual production use.

If you tuned into this "dissection" hoping to see real architecture and code deep dives, don't worry - it's coming next. This site exists to promote the development of high quality Open Source tools, and we intend to hold every player to the same standards we're holding Cogniton to here.

## The announcement
<img src="/img/devin-announcement-tweet.png" alt="Devin announcement tweet" style={{width: '60%'}}></img>

## Point-by-point

> Today we're excited to introduce Devin,

Good so far.

> the first AI software engineer.

**False**. We'll come back to that.

### The benchmark
> Devin is the new state-of-the-art on the SWE-Bench coding benchmark,

**True-ish**. Their longer blog post explains that only a 25% sample of the benchmark was run. It hasn't been independently verified, which is probably why [SWE-bench](https://www.swebench.com) doesn't list it. Admittedly, the full benchmark can get expensive to run, which is why there is now an official subset called SWE-bench-lite.

However we tend to believe that the performance was *roughly* as reported because Cognition was nice enough to provide the [results](https://github.com/CognitionAI/devin-swebench-results) from the runs. Another reason it's plausible is that two Open Source agents using different architectures have since met or exceeded that score, SWE-agent (Princeton) and reportedly AutoCodeRover (NUS), see our [leaderboards](/leaderboards) page for updates.

## The interviews
> and it has successfully passed practical engineering interviews from leading AI companies,

**Misleading** even if true. Also unimpressive as it's a known capability of GPT-4.

You can see this "old trick" in the paper [Sparks of Artificial General Intelligence: Early experiments with GPT-4](https://arxiv.org/abs/2303.12712) from March 2023 by Microsoft Research. Here's Figure 1.5:

![Sparks of Artificial General Intelligence: Early experiments with GPT-4](/img/sparks-fig-1-5.png)

When we design a test for humans, such as an exam or interview, we build in assumptions about the common abilities and deficiencies intrisic to humans. For instance to whatever extent a bar exam can assess that a human can practice law, it has very little bearing on whether a machine can, Language Model or otherwise.

Since we're being careful with terms today, these were also not technically *job* interviews, they were *mock* interviews. You can only pass a job interview if you are being interviewed for a job, meaning the company believes you might be qualified and is gathering more signal to make a decision.

## The Upwork job

> and has even completed real jobs on Upwork.

**Completely false**, as we can easily see by simply reading the Upwork task description in the demo video, which says, "Your deliverable will be detailed instructions on how to do it in an EC2 instance in AWS." Internet of Bugs provides an excellent [analysis](https://www.youtube.com/watch?v=tNmgmwEtoWE) showing that not only is the task incomplete, but the impressive debugging capabilites we saw in the video were the result of the agent **adding its own bugs** while doing uneccesary work because it ignored the instructions in the README. Sometimes they're too much like us!

> Devin is an autonomous agent that solves engineering tasks through the use of its own shell, code editor, and web browser.

**True!**. In our view, this is the principal achievement. Although there were prior efforts, (GPT-Engineer, Aider, Smol-Developer, [etc...](https://github.com/e2b-dev/awesome-ai-agents)), this really brought it into focus - the smooth combination of these elements into a UX that anyone can look at and "get it". Once something like this is released and proven, tons of people will want one. We will buy them and we will build them.

## More on SWE-bench
> When evaluated on the SWE-Bench benchmark, which asks an AI to resolve GitHub issues found in real-world open-source projects, Devin correctly resolves 13.86% of the issues unassisted, far exceeding the previous state-of-the-art model performance of 1.96% unassisted and 4.80% assisted.

As covered above, this is plausible. Media outlets have widely misreported this as being able to solve "14% of bugs on GitHub" and similar, which is a wildly different claim that Cognition never made. SWE-bench is limited in the types of issues it samples, containing only widely-used Python libraries covered by tests.

It would be straightforward (if time-consuming) to gather alternate test cases for other languages, creating things like SWE-bench-Java. Beware of the "Python bias" still prevalent across many AI training sets and coding benchmarks.

> Check out what Devin can do in the thread below.

It was a cool [thread](https://x.com/cognition_labs/status/1767548763134964000)! But where were we?

## What is a Software Engineer?

**There is currently no such thing as an "AI Software Engineer."**

Software Engineer was a term introduced by Margaret Hamilton for the Apollo Moon landing project in order to secure professional respect for her colleagues and to emphasize the disciplined practices they were developing. By consensus, the term's use in most of the industry remains somewhat aspirational, but with the world now running on software we have good reason to use it carefully.

For discussion's sake, let's consider some basic necessary, though not sufficient conditions. We might all agree that a Software Engineer:

* Is a professional, having an obligation to uphold a standard of care
  * Therefore, has legal and moral agency typically associated with personhood
* Is capable not only of solving small predefined tasks in a codebase, but also
  * Creating and maintaining a codebase of significant size over a period of time
  * Partnering to define the requirements to be done

Without the supervision of a human programmer, every autonomous coding tool to date would fail these minimal prerequisites. That's before any consideration of the actual engineering discipline as currently understood, see Dave Farley's recent book [Modern Software Engineering](https://www.davefarley.net/?p=352) for a nice formulation.


## We can fix this

If Cognition responds, we will publish their remarks here. Perhaps they already [said it best](https://x.com/cognition_labs/status/1768716565636059274) at the end of the thread:

> Agents are still in their infancy, and there’s a lot of room for improvement.

My advice to everyone building or selling in this space is just take a deep breath and figure out how you can give people exactly what you write on the tin.

What's done is done. Industry leaders themselves have gotten caught up in the frenzy and claimed some pretty outlanding things, leading to a stream of embarassing headlines. We need to restore trust.

If you want to learn how, there's help. For instance, next month I'm honored to speak at [Craft Conf 2024](https://craft-conf.com/2024) in Budapest, with the talk "[Code Mending in the AI Age](https://craft-conf.com/2024/talk/code-mending-in-the-ai-age)". Just a glance through the featured speaker list shows people who have put out treasure troves on improving software.

*With patience the most tangled cord may be undone.*

---
*Want to help out? [See where you fit in!](/contributing)*