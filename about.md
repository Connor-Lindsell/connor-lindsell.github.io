---
layout: wrapper
title: About
permalink: /about/
description: Mechanical and mechatronic engineer working across robotics, mechanical design, and applied manufacturing.
---

<main class="container">
  <section class="section">
    <div class="section-heading reveal">
      <span class="section-heading__kicker mono">ABOUT / PROFILE</span>
      <h1 class="section-heading__title">About Me</h1>
    </div>

    <div class="about-intro reveal">
      <div class="about-intro__media">
        <img src="/assets/images/profile-image/Image.jpg" alt="{{ site.name }}" style="width: 100%; height: auto; display: block; border: 1px solid var(--line); border-radius: var(--radius);">
      </div>
      <div class="about-intro__copy prose">
        <p>
          I'm {{ site.name }}, a {{ site.headline }}. My work sits at the
          intersection of mechanical design, robotics, and applied manufacturing —
          taking ideas from concept sketches through CAD, simulation, and prototyping
          to tested, working hardware.
        </p>
        <p>
          The projects here span robotics, mechatronics, mechanical design,
          prototyping, and applied control — drawn from industry, university,
          and personal work. Each one is written up as a case study covering
          the problem, my contribution, the technical approach, and the outcome.
        </p>
        <p>
          I care about designs that hold up once they leave the CAD environment:
          parts that assemble the way they were modelled, mechanisms that survive
          contact with real tolerances, and systems that are validated with evidence
          rather than assumptions. Whether it's a robotic actuator, a manufacturing
          process, or a control system, I try to bring the same discipline —
          understand the problem, engineer a solution, and prove it works.
        </p>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="section-heading reveal">
      <span class="section-heading__kicker mono">02 / EXPERIENCE</span>
      <h2 class="section-heading__title">Experience</h2>
    </div>

    {% include timeline.html %}
  </section>

  <section class="section reveal">
    <div class="dim-rule"></div>
    <div class="about-actions" style="display: flex; gap: var(--space-3); flex-wrap: wrap; margin-top: var(--space-5);">
      <a class="btn btn--solid" href="{{ site.resume-url }}" target="_blank" rel="noopener">View Resume</a>
      <a class="btn" href="/#contact">Get in touch</a>
    </div>
  </section>
</main>
