---
marp: true
---

# Chaos Engineering

### Chapter 9, 10
---

# Intro to Part III: Human Factors

- Human system: sociotechnical system
- How Chaos Engineering can help to better understand 

<!-- Software are built by human -->

---
# Agenda

- Chapter 9
- Chapter 10
- Thoughts & QA

---

# Chapter 9: Creating Foresight

## Chaos engineering is a tool for learning

---

# Main message

Chaos Engineering is not only a tool to improve system resilience,
but also a tool to help different team member to refine their **mental
models** of how our systems suceed and fail

---

# Before and After are important

- we investe much effect to **execute** the chaos experiment
- underinvested in the **Before** and **After** phase

---

# Before: distill (汲み取る｜提炼) expertise

- designing the experiment
- asking questions
- discuss scope

---

# Desiging experiments

- find different mental model and assumptions between people
- people are more open to share during experiments, than in incidents
- tools to self-service run experiments
- automate collection information
  + Timeouts
  + Retries
  + Whether or not have a fallback
  + Percent of traffic it regularly served

---

# Asking questions

- Dashboard and UI is not enough
  + Why team don't use it?
- Interview teammates in a group setting
  + Discuss their **expectation** of the system
  + What behaviors and interactions are you concerned
  + Start from less-tenured member to more tenured ones
  + Identify experties, gaps. This is a learning experience

---

# Discuss scope

- How do you define a "normal" or "good" operation?
- Where are we inject the failure?
- What do we expect to happen?
- How do you know if the system is in bad state
- Write down and share to all stakeholders

---

# Conclusion

- The Chaos engineering is a process to uncover expertise
- Looking for suprises
- Learning and refine mental models

---

# Chapter 10: Human Chaos

by Andy Fleener @SportsEngine

---

# Main message

Apply Chaos Engineering to human organizations

- Identify the limits of the team
- Expand the capacity of the team

---

# Finding the _Weak Signals_

- it's the only signal that can increase the capacity of an organization

<!-- when systems fail, the signals are strong -->

## examples

- ending an on-call shift on Monday is more tiring than on a Friday (is it?)
- team-wide slack channel to answer questions
- "I don't know anything about this, we'll need to talk to X"

---

# Principles

- Build a hypotheis
  + what's the steady state
- Define the variable to change
  + where to inject failure
- Monitor the outcomme
  + compare the result to previous state of the system

## Minimize Blast Radius
  + less impact to customer
  + have a contingency plan
  + show clear explicit value, buy-in throughout orgnization

---

# Case Study 1: Game day

Create a game where "the **right** people can not participate"

- hypothesis:
  without some expert, it will greatly impact the amount of time to responsd and resolve an issue
- variable:
  [the person who you think is a single point of failure]
- outcome:
  find the SPOF in the organization

---
# Case Study 2: Connecting the Dots

Communication network can be expanded (exceed Dunbar's number: 150)

- hypothesis:
  Etsy bootcamp: put new hire to work in different teams, it can help product
- variable:
  Send product engineer to Ops team for a sprint (two weeks), in rotation
- outcome:
  mixed, trade-off: product resource v.s. Ops knowledge shareing

---

# Case Study 3: Changing a Basic Assumption

Empower people to change system fundations and find the week signals

- hypothesis:
  people at the eages are the experts of the system, they can make impactful change to the system
- variable:
  engineer are driven by personal growth
  build a culture on shared learning through retrospectives (Spotify's health check)
- outcome:
  tradeoff: product presuare v.s. personal desire

---

# Conclusion

- build an organization that is ok to fail
- build feedback loop, so you can see the impact
- if you are not failing, you are not learning

---

# Thoughts & QA


<!-- Etsy>