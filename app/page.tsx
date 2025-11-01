"use client";

import { useCallback } from "react";

type Session = {
  day: string;
  segments: { title: string; focus: string }[];
};

const sessions: Session[] = [
  {
    day: "Day 1",
    segments: [
      {
        title: "Hands-on Maths Kit Demonstration",
        focus:
          "Explored foundational numeracy manipulatives and classroom integration."
      },
      {
        title: "Activity Planning Lab",
        focus:
          "Mapped kit resources to Tamil Nadu Board outcomes for Grades 1-5."
      },
      {
        title: "Collaborative Reflection",
        focus:
          "Defined success indicators and daily routines for kit-based learning."
      }
    ]
  },
  {
    day: "Day 2",
    segments: [
      {
        title: "Advanced Strategy Workshop",
        focus:
          "Designed differentiated lesson flows and assessment checkpoints."
      },
      {
        title: "Classroom Simulation",
        focus:
          "Role-played facilitator and learner interactions to refine facilitation cues."
      },
      {
        title: "Action Planning",
        focus:
          "Finalised implementation roadmap with monitoring and community showcase ideas."
      }
    ]
  }
];

const trainees = [
  { role: "Headmistress", name: "Gandhi Aided Primary School" },
  { role: "Assistant Teacher", name: "Primary Mathematics Lead" },
  { role: "Senior Resource Person", name: "Block Resource Centre" }
];

export default function Page() {
  const handleDownload = useCallback(async () => {
    const PPTXGenJS = (await import("pptxgenjs")).default;
    const pptx = new PPTXGenJS();

    pptx.layout = "LAYOUT_16x9";
    pptx.title = "Maths Kit Training Completion Report";

    const slide1 = pptx.addSlide();
    slide1.background = { color: "F5F7FB" };
    slide1.addText("Gandhi Aided Primary School", {
      x: 0.6,
      y: 0.4,
      fontSize: 18,
      color: "3551FF",
      bold: true
    });
    slide1.addText("Maths Kit Training Completion Report", {
      x: 0.6,
      y: 1.2,
      fontSize: 32,
      color: "102A43",
      bold: true
    });
    slide1.addShape(pptx.ShapeType.roundRect, {
      x: 0.6,
      y: 2.2,
      w: 8.6,
      h: 2.2,
      fill: { color: "EEF3FF" },
      line: { color: "FFFFFF" },
      rectRadius: 0.3
    });
    slide1.addText(
      "Trainer: Mrs. Jayashree\nDuration: Two-Day Immersive Workshop\nFocus: Activating maths kit resources for joyful numeracy",
      {
        x: 0.9,
        y: 2.35,
        fontSize: 16,
        color: "1D2530",
        lineSpacing: 24
      }
    );
    slide1.addText("Participants", {
      x: 0.6,
      y: 4.85,
      fontSize: 20,
      color: "102A43",
      bold: true
    });
    trainees.forEach((trainee, index) => {
      slide1.addShape(pptx.ShapeType.roundRect, {
        x: 0.6 + index * 3,
        y: 5.35,
        w: 2.8,
        h: 1.6,
        fill: { color: "FFFFFF" },
        line: { color: "DCE3FF", width: 1.5 },
        rectRadius: 0.2,
        shadow: { type: "outer", color: "999999", blur: 6, offset: 3 }
      });
      slide1.addText(`${trainee.role}\n${trainee.name}`, {
        x: 0.75 + index * 3,
        y: 5.55,
        fontSize: 14,
        color: "1D2530",
        lineSpacing: 24
      });
    });
    slide1.addText("Date: 2-Day Intensive | Location: School STEM Lab", {
      x: 0.6,
      y: 7.2,
      fontSize: 16,
      color: "51606F"
    });

    const slide2 = pptx.addSlide();
    slide2.background = { color: "FFFFFF" };
    slide2.addText("Training Highlights", {
      x: 0.6,
      y: 0.5,
      fontSize: 28,
      color: "102A43",
      bold: true
    });
    slide2.addShape(pptx.ShapeType.roundRect, {
      x: 0.6,
      y: 1.3,
      w: 8.4,
      h: 4.8,
      fill: { color: "F7F9FF" },
      line: { color: "EEF3FF" },
      rectRadius: 0.25
    });
    slide2.addText(
      [
        "• Built confidence in decoding and sequencing maths kit experiments.",
        "• Created classroom-ready facilitation plans for Grades 1-5 numeracy.",
        "• Strengthened peer coaching loops between leadership and teachers.",
        "• Established monitoring diary and learner evidence capture formats.",
        "• Sparked community engagement ideas for maths learning festivals."
      ].join("\n"),
      {
        x: 1,
        y: 1.6,
        w: 7.6,
        fontSize: 18,
        color: "1D2530",
        lineSpacing: 30
      }
    );
    slide2.addText("Trainer Observations", {
      x: 0.6,
      y: 6.35,
      fontSize: 20,
      color: "3551FF",
      bold: true
    });
    slide2.addText(
      "Participants demonstrated strong ownership in adapting kit resources to locally relevant storylines and committed to weekly practice showcases.",
      {
        x: 0.6,
        y: 6.9,
        w: 8.6,
        fontSize: 16,
        color: "51606F",
        lineSpacing: 26
      }
    );

    const slide3 = pptx.addSlide();
    slide3.background = { color: "FFFFFF" };
    slide3.addText("Two-Day Agenda Snapshot", {
      x: 0.6,
      y: 0.5,
      fontSize: 28,
      color: "102A43",
      bold: true
    });
    sessions.forEach((session, idx) => {
      slide3.addShape(pptx.ShapeType.roundRect, {
        x: 0.6,
        y: 1.3 + idx * 2.6,
        w: 8.6,
        h: 2.3,
        fill: { color: idx === 0 ? "EEF3FF" : "F7F9FF" },
        line: { color: "DCE3FF" },
        rectRadius: 0.2
      });
      slide3.addText(session.day, {
        x: 0.8,
        y: 1.55 + idx * 2.6,
        fontSize: 20,
        color: "3551FF",
        bold: true
      });
      slide3.addText(
        session.segments
          .map((segment) => `• ${segment.title} – ${segment.focus}`)
          .join("\n"),
        {
          x: 0.8,
          y: 1.95 + idx * 2.6,
          w: 7.8,
          fontSize: 16,
          color: "1D2530",
          lineSpacing: 26
        }
      );
    });

    const slide4 = pptx.addSlide();
    slide4.background = { color: "F5F7FB" };
    slide4.addText("Way Forward", {
      x: 0.7,
      y: 0.5,
      fontSize: 28,
      color: "102A43",
      bold: true
    });
    slide4.addShape(pptx.ShapeType.roundRect, {
      x: 0.7,
      y: 1.3,
      w: 3.8,
      h: 4.8,
      fill: { color: "FFFFFF" },
      line: { color: "DCE3FF" },
      rectRadius: 0.2
    });
    slide4.addText("Immediate Next Steps", {
      x: 0.9,
      y: 1.5,
      fontSize: 18,
      color: "3551FF",
      bold: true
    });
    slide4.addText(
      [
        "• Launch weekly maths kit lab periods.",
        "• Document learner artefacts in progress portfolios.",
        "• Conduct peer observations twice a month."
      ].join("\n"),
      {
        x: 0.9,
        y: 2,
        w: 3.2,
        fontSize: 15,
        color: "1D2530",
        lineSpacing: 24
      }
    );
    slide4.addShape(pptx.ShapeType.roundRect, {
      x: 4.8,
      y: 1.3,
      w: 4.5,
      h: 4.8,
      fill: { color: "FFFFFF" },
      line: { color: "DCE3FF" },
      rectRadius: 0.2
    });
    slide4.addText("Support & Monitoring", {
      x: 5,
      y: 1.5,
      fontSize: 18,
      color: "3551FF",
      bold: true
    });
    slide4.addText(
      [
        "• Monthly check-ins with Mrs. Jayashree.",
        "• Resource refresh request submitted to district office.",
        "• School to host maths kit community day in 90 days."
      ].join("\n"),
      {
        x: 5,
        y: 2,
        w: 4.1,
        fontSize: 15,
        color: "1D2530",
        lineSpacing: 24
      }
    );
    slide4.addText("Prepared by Mrs. Jayashree | Trainer, Maths Kit Program", {
      x: 0.7,
      y: 6.5,
      fontSize: 16,
      color: "51606F"
    });

    await pptx.writeFile({
      fileName: "Maths-Kit-Training-Completion-Report.pptx"
    });
  }, []);

  return (
    <main>
      <section className="hero">
        <div>
          <span className="badge">Completion Report</span>
          <h1>Two-Day Maths Kit Training</h1>
          <p>
            Celebrating the successful completion of the maths kit immersion at
            Gandhi Aided Primary School led by Mrs. Jayashree. This concise
            report captures the energy, learning outcomes, and action plan
            emerging from the training.
          </p>
          <div className="meta">
            <div>
              <strong>Trainer</strong>
              <div>Mrs. Jayashree</div>
            </div>
            <div>
              <strong>Duration</strong>
              <div>2 Days Intensive</div>
            </div>
            <div>
              <strong>Location</strong>
              <div>Gandhi Aided Primary School</div>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <h3>Participants</h3>
            <ul className="list">
              <li>Headmistress</li>
              <li>Assistant Teacher</li>
              <li>Senior Resource Person</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Training Highlights</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Hands-on Exploration</h3>
            <p>
              Participants mastered the structure and pedagogical flow of the
              maths kit through immersive activity stations and reflection labs.
            </p>
          </div>
          <div className="card">
            <h3>Classroom Integration</h3>
            <p>
              Action plans mapped kit resources to grade-wise competencies,
              ensuring every learner experiences joyful numeracy.
            </p>
          </div>
          <div className="card">
            <h3>Peer Collaboration</h3>
            <p>
              Leadership and teaching teams co-created monitoring tools and
              peer-feedback loops to sustain momentum.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2>Agenda at a Glance</h2>
        <div className="timeline">
          {sessions.map((session) => (
            <div className="timeline-item" key={session.day}>
              <strong>{session.day}</strong>
              <ul className="list">
                {session.segments.map((segment) => (
                  <li key={segment.title}>
                    <span>
                      {segment.title} — {segment.focus}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Next Steps</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Immediate Focus</h3>
            <ul className="list">
              <li>Launch weekly maths kit lab sessions.</li>
              <li>
                Capture learner artefacts for showcasing progress and mastery.
              </li>
              <li>Conduct fortnightly peer coaching huddles.</li>
            </ul>
          </div>
          <div className="card">
            <h3>Support Required</h3>
            <ul className="list">
              <li>Refresher mentoring with Mrs. Jayashree every month.</li>
              <li>Access to replenishment materials for manipulatives.</li>
              <li>
                Coordination with Block Resource Centre for community math day.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="cta">
        <button className="button" onClick={handleDownload}>
          Download PPT Report
        </button>
        <a
          className="button secondary"
          href="#"
          onClick={(event) => {
            event.preventDefault();
            handleDownload();
          }}
        >
          Share with Stakeholders
        </a>
      </div>

      <p className="footer-note">
        Prepared and facilitated by Mrs. Jayashree for Gandhi Aided Primary
        School&apos;s maths excellence program.
      </p>
    </main>
  );
}
