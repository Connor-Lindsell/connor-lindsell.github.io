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

    <figure class="content-figure content-figure--wide reveal">
      <img src="/assets/images/working-image/Picture2.jpg" alt="{{ site.name }} assembling and wiring a mobile robot platform during university project work">
      <figcaption>Robotics build work — assembling and wiring a mobile robot platform during university project work.</figcaption>
    </figure>

    <div class="prose reveal">
      <p class="lead">
        I'm {{ site.name }}, a mechanical and mechatronic engineering undergraduate at UTS,
        currently working as an undergraduate engineer at Capral Aluminium. Most weeks that
        means two things at once: designing mechanical hardware that has to survive a working
        aluminium extrusion plant, and building robotics — actuators, control systems,
        learning-based manipulation — on the other side of the week. The two feed each other
        more than I expected them to.
      </p>

      <h2>Why I ended up between two disciplines</h2>

      <p>
        I didn't start here. I began my degree in electrical and electronic engineering and
        fairly quickly worked out it wasn't what I wanted. The turning point was a design
        subject in my first year where I built a mechanical differential. It was the first
        thing in the degree I finished and immediately wanted to keep going with — the
        geometry, the constraints, the fact that you can reason your way to a mechanism that
        does something genuinely clever with no electronics in it at all.
      </p>

      <p>
        That could have been a clean switch to mechanical, but it would have thrown away the
        part I did enjoy. Circuits, control and embedded hardware still interested me, and by
        then I knew I wanted to work on robots — which sit exactly on the seam between the
        two. So taking mechanical and mechatronic together was a deliberate decision rather
        than hedging. Robotics is the case where splitting the disciplines doesn't work: the
        gearbox, the packaging, the sensing and the control loop are all one design problem,
        and you make worse decisions in every one of them if you can only see half of it.
      </p>

      <p>
        It has held up. The mechanical side is what I do most of at work and it's the part I
        find most satisfying — the challenge of designing something that actually works,
        assembles cleanly, and doesn't cost more than it needs to. The robotics side is why
        I'm doing research.
      </p>

      <h2>How I decide what a good design is</h2>

      <p>
        The short version: the most sophisticated solution available is rarely the right one.
        Complexity is something you spend, and you should be able to say what you bought
        with it.
      </p>

      <p>
        In practice that means leaning hard on design for manufacture and design for assembly
        — reducing part count, simplifying fabrication, and removing ways a system can fail
        before it's built rather than after. It means treating drawings, tolerancing and
        assembly documentation as part of the design rather than paperwork that trails it,
        because an ambiguous drawing becomes a manufacturing error, and a manufacturing error
        on an industrial project becomes cost and schedule. And it means asking early how a
        thing gets installed and who has to reach it at 2am with the line down. Designing an
        installation jig, or moving a fastener so a fitter can actually get a tool on it, is
        often worth more than another iteration on the mechanism itself.
      </p>

      <p>
        Where the choice is between a clever mechanism and a simpler one that removes failure
        modes and is safer for the operator, I take the simpler one — not because the
        sophisticated version is beyond me, but because on a production line the design that
        runs is worth more than the design that impresses.
      </p>

      <h2>What working in a live plant changed</h2>

      <p>
        Before I started at Capral I assumed the role would be almost entirely technical:
        design parts, improve systems, support production. That's part of it. The bigger
        shift has been in what I measure a design against.
      </p>

      <p>
        At university a design is judged on paper — does the analysis close, does the model
        look right, does it meet the brief. In a plant it's judged on installed performance.
        I work with equipment operators, maintenance crews, fitters, electricians, external
        manufacturers, other engineers, managers and the people signing off the spend, and
        each of them constrains the design differently: how it runs, how it gets in, how it's
        maintained, and whether it can be commercially justified at all. A technically
        excellent solution can still fail because it's hard to fabricate, awkward to assemble,
        impossible to service, or simply not worth the money.
      </p>

      <p>
        The clearest lesson came from a project where recurring equipment problems were
        driving real maintenance downtime, scrap and financial loss. My contribution was to
        analyse what was actually failing, iterate quickly on solutions, and — the part that
        was new to me — connect the engineering change to the operational and financial value
        it was expected to return. Being able to move between problem identification,
        mechanical design, stakeholder consultation, manufacturing reality and business
        justification turned out to matter as much as the design work itself.
      </p>

      <p>
        The other thing I've had to learn is how to handle disagreement. Manufacturing errors
        and conflicting technical requirements get expensive fast on large projects, and the
        way through them is clear documentation, evidence-based discussion, and aiming at a
        workable resolution rather than at who was at fault.
      </p>

      <h2>Where I'm heading</h2>

      <p>
        I want to build hardware for robotics — specifically the side of it where things get
        designed and made rather than only specified, taking a mechanism from a problem
        statement through to something physical that works.
      </p>

      <p>
        The timing is the part I find genuinely exciting. I'm starting my career as the AI
        boom moves out of software and into the physical world, and I think the next five to
        ten years of robotics will look very different from the last twenty. Physical AI —
        learned manipulation, adaptive behaviour, machines that cope with variation instead of
        needing it engineered out — is where that change lands, and it needs mechanical
        hardware good enough to carry it. That's the intersection I've spent the degree
        putting myself at, and it's why my capstone research is in learning-based robotic
        manipulation for industrial packing and assembly.
      </p>

      <p>
        For now I'm doing the unglamorous and necessary part: learning how real manufacturing
        works, how projects actually get approved and delivered, and how to design things that
        survive contact with a production environment. I'd rather build that foundation
        properly than skip it. After graduation I'm aiming at design engineering in robotics
        and automation, with enough ownership to take something from problem to installed
        hardware — and eventually, to build something of my own.
      </p>
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
