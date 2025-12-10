import React from "react";
import OdooPhases from '../../Assets/images/Odoo Phases.png';




export default function OdooDevelopment() {
  return (
    <div className="prod_body">
      <div className="prod_main_body py-3">
        Odoo 18 is the 18th version of Odoo's Enterprise Resource Planning (ERP)
        software, released in October 2024, that offers a modular platform for
        managing various business operations, including accounting, CRM,
        inventory, HR, and e-commerce, with a focus on advanced AI-driven
        features, enhanced user experience, and improved workflow automation.
        Key improvements include AI-powered reporting, streamlined inventory
        management with features like multi-scan and real-time tracking,
        advanced project management tools, optimized user interfaces with
        quicker navigation, and enhanced e-commerce capabilities.
      </div>

      <div className="prod_main_body py-3">
        Our organization is now capable of offering Odoo ERP solutions to almost
        all industry verticals.
      </div>

      <div className="prod_main_head2 pt-3">Our Services</div>
      <ul className="prod_main_body py-3">
      <li>
          <b style={{ color: "#4ea5ff" }}>Consulting Services:</b> We provide professional consulting to
          implement Odoo modules tailored to your business.
      </li>

      <li>
          <b style={{ color: "#4ea5ff" }}>Implementation Services:</b> Full Odoo deployment with
        configuration for your business workflows.
      </li>

      <li>
          <b style={{ color: "#4ea5ff" }}>Integration Services:</b> Integrate Odoo with other systems for
        seamless operations.
      </li>

      <li>
        <b style={{ color: "#4ea5ff" }}>Support Services:</b> Post-implementation support to keep your ERP
        running smoothly.
      </li>
      </ul>
          <div className="prod_main_body py-3">
         We have 25+ SMEs well trained in Odoo ERP modules who can transform your
          business to the next level. We can implement Odoo 18 with
          out-of-the-box features or with customizations based on business
          requirements. We follow a phase-wise approach while implementing Odoo
          ERP.
        </div>

      {/* -------------------- PHASE 1 -------------------- */}
      <div className="prod_main_head pt-1" style={{ fontSize: "1.66rem" }}>
        Phase - 1 – Discovery and Planning
      </div>
      <ul className="prod_main_body py-3">
        <li>
          <b>Define Business Goals  : </b>  Clearly outline objectives.
        </li>
        <li>
          <b>Process Analysis / Gap Analysis  : </b>  Identify gaps and efficiencies.
        </li>
        <li>
          <b>Design Technical & Business Approach  : </b>   Architecture planning.
        </li>
        <li>
          <b>Project Planning  :</b>  Develop timelines and resources.
        </li>
        <li>
          <b>Sign Off  : </b>  Approve agreed scope and timelines.
        </li>
      </ul>

      {/* -------------------- PHASE 2 -------------------- */}
      <div className="prod_main_head pt-1" style={{ fontSize: "1.66rem" }}>
        Phase - 2 – Configuration and Customization
      </div>
      <ul className="prod_main_body py-3">
        <li>
          <b>System Setup  : </b>  Install and configure necessary Odoo modules.
        </li>
        <li>
          <b>Personalization  :</b>  Create custom fields, reports, and workflows.
        </li>
      </ul>

      {/* -------------------- PHASE 3 -------------------- */}
      <div className="prod_main_head pt-1" style={{ fontSize: "1.66rem" }}>
        Phase - 3 – Integration
      </div>
      <ul className="prod_main_body py-3">
        <li>
          <b>System Integration  :</b>  Connect Odoo with other software.
        </li>
      </ul>

      {/* -------------------- PHASE 4 -------------------- */}
      <div className="prod_main_head pt-1" style={{ fontSize: "1.66rem" }}>
        Phase - 4 – Testing & Quality Assurance
      </div>
      <ul className="prod_main_body py-3">
        <li>
          <b>Testing  :</b>  Unit and integration testing to resolve issues.
        </li>
        <li>
          <b>User Acceptance Testing (UAT)  :</b>  End-user testing for usability.
        </li>
      </ul>

      {/* -------------------- PHASE 5 -------------------- */}
      <div className="prod_main_head pt-1" style={{ fontSize: "1.66rem" }}>
        Phase - 5 – Go Live / Deployment
      </div>
      <ul className="prod_main_body py-3">
        <li>
          <b>Final Preparation  :</b>  Data migration and readiness check.
        </li>
        <li>
          <b>End User Training  :</b>  Provide user training.
        </li>
        <li>
          <b>System Launch  :</b>  Deploy the fully tested system.
        </li>
        <li>
          <b>Sign Off  :</b>  Final deployment approval.
        </li>
      </ul>

      {/* -------------------- PHASE 6 -------------------- */}
      <div className="prod_main_head pt-1" style={{ fontSize: "1.66rem" }}>
        Phase - 6 – Business as Usual
      </div>
      <ul className="prod_main_body py-3">
        <li>
          <b>Support  :</b>  Ongoing support to users for immediate issues.
        </li>
        <li>
          <b>Continuous Improvement  :</b>  Collect feedback and optimize
          performance.
        </li>
        <li>
          <b>Updates & Upgrades  :</b>  Manage future Odoo version upgrades and
          patches.
        </li>
      </ul>

<div className="image-container py-3">
  <figure>
    <img
      src={OdooPhases}
      alt="Phases of ODOO"
      style={{ width: "100%", maxWidth: "900px", display: "block", margin: "0 auto" }}
    />
    <figcaption style={{ textAlign: "center", marginTop: "0.5rem" }}>
      Phases of ODOO.
    </figcaption>
  </figure>
</div>
    </div>


    
  );
}
