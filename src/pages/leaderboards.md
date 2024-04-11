---
title: Leaderboards
---

# Leaderboards

## SWE-bench
**The gold standard**. Released in September 2023 by Princeton NLP, SWE-bench is the most widely accepted measure of an agent's ability to solve tasks in a realistic codebase. It was constructed from GitHub Pull Requests from real Open Source respositories, with unit tests verifying the change. To pass, the agent must effectively recreate that Pull Request.

[SWE-bench](https://www.swebench.com) publishes official results, the below includes results that have been credibly reported but not verified. 

**Unassisted:**
*Last checked: 2024-04-10*
| Rank | Agent                | Score  | Score (lite) | Status            | Group        | License                 |
| ---- | -------------------- | ------ | ------------ | ----------------- | ------------ | ----------------------- |
| 1    | [auto-code-rover](https://github.com/nus-apr/auto-code-rover)      | -  | 22.3%            | Reported          | APR@NUS      | GPL-3                   |
| 2    | Devin                | 13.48% | -            | Reported (sample)  | Cognition    | Proprietary |
| 3    | [SWE-agent](https://swe-agent.com/) + GPT 4    | 12.29% | 17%          | Official          | Princeton NLP  | MIT                     |



SWE-bench scores come in "assisted" and "unassisted" versions. "Assisted" means the agent is told which files need to be modified by the "oracle". There is usually a large difference between these scores, highlighting that navigating the codebase is a key part of the problem.

ML researcher [theblackcat102](https://github.com/theblackcat102) [reports](https://x.com/zraytam/status/1769523013501039070) that Claude 3 Opus reaches 11.07% assisted, hinting that the current GPT-4-based agent scores could be improved with Opus access (we got usage throttled attempting to verify). 


## LiveCodeBench

[LiveCodeBench](https://livecodebench.github.io/leaderboard.html): "Holistic and Contamination Free Evaluation of Large Language Models for Code"

Tests the strength of models across different coding sub-tasks.

* Code Generation
* Self-Repair
* Test Output Prediction
* Code Execution

*Last checked: 2024-04-10*
* Proprietary Leaders: GPT-4-Turbo-2024-04-09, Claude-3-Opus
* Open Weight Leaders: [WizardCoder-33B-V1.1](https://huggingface.co/WizardLM/WizardCoder-33B-V1.1), [deepseek-coder-33b-instruct](https://huggingface.co/deepseek-ai/deepseek-coder-33b-instruct), [CodeLlama-34b-Instruct-hf](https://huggingface.co/codellama/CodeLlama-34b-Instruct-hf)




## HumanEval

[Link](https://paperswithcode.com/sota/code-generation-on-humaneval)