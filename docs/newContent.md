# CohesionXL + Atlas: System Description

*Reference document for evaluating system fitness against documented tracking and governance issues.*

---

## 1. What this system is

CohesionXL and Atlas are two layers of an enterprise AI governance and portfolio intelligence platform, grounded in a formal mathematical model (a constrained MAP inference compiler over factor graphs, with sheaf-theoretic constraint propagation). The two layers are architecturally distinct but designed to compose:

- **CohesionXL** — constraint-aware portfolio planning and simulation engine. It maintains the authoritative, structured representation of organizational delivery: people, work, products, capacity, intent, and constraints. It answers planning-layer questions: what has been authorized, against which constraints, with what capacity, by whom.

- **Atlas** — execution governance kernel. It converts stochastic activity from LLMs, AI agents, and human workers into auditable, evidence-backed project state that reconciles to CohesionXL's authorized intent. Atlas proves that a given action — agent or human — was within the scope of approved work, with full provenance.

In one sentence: **CohesionXL holds the authorization map; Atlas holds the reconciliation between authorized intent and observed delivery.**

---

## 2. The problem class this system addresses

The system targets a specific structural problem in enterprises scaling AI agents and citizen-built automations:

- **Capacity is no longer fully modeled.** A significant fraction of delivery output is now AI-generated (agent platforms, vibe coding, low-code tools), while portfolio planning systems still model only human capacity. The gap between actual delivery capacity and modeled capacity is the **Ungoverned Capacity Ratio**.
- **Existing tools log activity but do not authorize it.** Logs, audit trails, and observability tools (LangSmith, Langfuse, Helicone) capture what an agent did. They do not capture whether the action was within scope of an approved intent, who authorized that intent, or how the resulting artifact reconciles to the plan it was meant to fulfill.
- **Context, not code, is the primary artifact under governance.** Most current AI tooling treats prompts and tool calls as the unit of governance. The thesis here is that the governable artifact is the *compiled organizational context* — the structured state that determines whether a given action is authorized.

---

## 3. Formal foundations

The system implements a deterministic compiler with the following formal structure:

- **Latent project state** $s_t \in \mathcal{S}$ — the unobserved ground truth at time $t$.
- **Event-sourced observation log** $\mathcal{L} = \{(t, o_t)\}_{t \geq 1}$ — append-only record from which all downstream state is derived by deterministic projection. Replay and audit are guaranteed.
- **Semantic windows** $W_k$ — maximal time intervals during which the active intent contract remains constant. A window closes and a new one opens when the active intent changes.
- **Intent contract** $I_k = (\Sigma_k, \mathcal{C}_k^{\text{hard}}, \mathcal{C}_k^{\text{soft}}, \mathcal{V}_k)$ — schema signature, hard constraints, soft constraints, validators (tests, approvals, etc.).
- **Compiled macro-state** $C_k = (A_k, D_k, R_k, U_k, M_k, P_k, \lambda_k)$ — artifacts, task graph, budgets, confidence, evidence pointers, provenance receipts, dual budget variable.
- **Constrained MAP inference** — at each window boundary, the compiler computes $\Delta_k^\star = \arg\max_\Delta \mathbb{P}(\Delta \mid \tau_k, I_k, C_k)$ via factor graph energy minimization. Evidence factors $\psi$ reward agreement with logs and tests; constraint factors $\phi$ penalize violations of policy, dependency, or budget.
- **Algebraic merge** — deterministic state update $C_{k+1} = C_k \oplus \Delta_k^\star$, enabling full replay.
- **Calibrated completion probabilities** — aggregate confidence is a calibrated probability with credible intervals, not a binary done / not-done flag. Calibration maps raw scores to honest probabilities over time.
- **Value-of-information acquisition** — when uncertainty is high, the system decides whether to gather more evidence (test, doc fetch, human input) based on expected utility minus cost.
- **Budget-constrained control via dual variables** — overspend automatically raises $\lambda$, pushing the system toward cheaper behavior (less retrieval, fewer retries, cheaper models, or human handoff).
- **Counterfactual delta selection** — when multiple candidate deltas exist, the system selects the one maximizing expected utility minus risk and cost, rather than picking the most fluent output.
- **Bounded context packs** — agents and humans receive a compact slice of compiled state plus targeted evidence, preventing context explosion and reducing hallucination.

The deeper mathematical core grounds CohesionXL specifically in **sheaf diffusion** and **Dirichlet energy minimization** over a sheaf Laplacian. **H¹ cohomology** provides impossibility certificates for unsatisfiable constraint configurations — i.e., the system can prove that a given plan is structurally infeasible, not merely struggling.

---

## 4. CohesionXL — what it specifically maintains

CohesionXL is the constraint authority layer. It maintains three composable graphs:

- **Org Graph** — structure of who can authorize what (roles, reporting lines, decision rights, jurisdictional boundaries).
- **Work Graph** — dependency and constraint structure of in-flight and planned work (programs, initiatives, deliverables, dependencies).
- **Product Graph** — structure of what is being built (products, components, platforms, services).

Across these graphs, CohesionXL compiles:

- **Authorized intent** — typed contracts with explicit hard constraints, soft constraints, and validators.
- **Window Algebra** — the temporal structure of phases and their transitions, supporting sequential composition ($I_a \triangleright I_b$), parallel composition ($I_a \parallel I_b$), and refinement ($I' \preceq I$).
- **Capacity model** — including both human and AI-generated capacity, which makes the Ungoverned Capacity Ratio observable as a first-class metric.
- **Constraint surfaces** — the active set of hard and soft constraints at any window.
- **Override decisions** — when a planner overrides a constraint or recommendation, the override is captured as a first-class event with rationale.
- **Planning session patterns** — how decisions are actually made in this organization, fed back into the constraint model so the system becomes progressively more accurate per organization.

The output is **organizational legibility**: a queryable, authoritative answer to "what is approved, against what constraints, with what capacity, by whom" at any window boundary.

---

## 5. Atlas — what it specifically tracks

Atlas is the execution governance layer. Its differentiation from observability tools is that it is an **authorization audit layer**, not an activity log.

Atlas captures and proves:

- **Intent binding** — every observed action (human or agent) is bound to the specific authorized intent contract that scoped it.
- **Authorization audit** — for any artifact or action, Atlas produces the chain of authorization: which intent permitted it, which planning decision approved that intent, which authority signed off.
- **Evidence-backed state** — stochastic agent outputs are projected into structured state via the constrained MAP inference described above. The resulting state is fully replayable from the event log.
- **Provenance receipts** — every element of compiled state carries a pointer back to the observations and intent that produced it.
- **Reconciliation deltas** — where observed delivery diverges from authorized intent, the divergence is itself a first-class object that can be explained, accepted as an override, or escalated.

The buyer pain Atlas addresses: when an AI agent makes a decision that must be defended to a regulator, auditor, or internal risk function, Atlas produces the authorization chain. Without an upstream authorization map (CohesionXL), this audit is incomplete — Atlas would degrade to a higher-quality observability tool.

---

## 6. How CohesionXL and Atlas compose

CohesionXL is the prerequisite. Atlas binds activity *to* something — and that something is the typed intent contract maintained in CohesionXL.

Data flow:

1. Agents and humans act against systems of record (Jira, Azure DevOps, GitHub, SharePoint, etc.).
2. Atlas ingests the resulting events into the append-only log $\mathcal{L}$.
3. At each window boundary, the compiler runs constrained MAP inference and produces a structured delta $\Delta_k^\star$.
4. The delta is merged into the compiled macro-state: $C_{k+1} = C_k \oplus \Delta_k^\star$.
5. CohesionXL surfaces the reconciliation: what was authorized, what was delivered, what diverged.
6. Override decisions, new intents, and planning changes are themselves captured as events, closing the loop and feeding the constraint model.

---

## 7. Specific capability claims for fitness evaluation

The system is designed to answer the following questions, which most current toolchains cannot answer end-to-end. Use these as the primary mapping surface for evaluating fit against documented tracking issues.

1. For any AI agent action, what was the authorizing intent, and was the action within scope?
2. For any artifact, what is the full chain of authorization from the action back to the approving authority?
3. What portion of delivered capacity in window $W_k$ was AI-generated vs. human-generated, and was the AI-generated portion authorized?
4. Where is observed delivery diverging from authorized intent, and is the divergence accepted, contested, or unexplained?
5. What is the calibrated probability that initiative $X$ will complete by window $W_k$, with credible intervals, given current evidence and constraints?
6. Which constraints in the active intent contract are at risk of violation, and what is the marginal cost of each potential remediation?
7. For a proposed new initiative, is there a feasible allocation under current constraints, or is the constraint configuration provably unsatisfiable?
8. What is the override history for a given constraint, planner, or program — and is there a pattern indicating systemic constraint mis-specification?
9. For any agent or worker, what bounded context pack should they receive to act within scope on a given task?
10. Given a budget constraint, what is the system's optimal control action — proceed, gather more evidence, escalate to human, or pause?

---

## 8. What is explicitly not in scope

To prevent over-fit fitness claims:

- **The system does not build agents.** It governs activity from agents built on other platforms (Copilot Studio, Agentforce, Workspace Agents, Vertex Agent Builder, custom LangChain/LangGraph systems, etc.).
- **The system does not replace existing execution tools.** Jira, Azure DevOps, GitHub, SharePoint and similar systems remain systems of record for their respective domains. CohesionXL is a constraint authority layer above them, not a replacement.
- **The system is not a model observability tool.** It does not focus on prompt-level debugging, token-level performance metrics, or per-call LLM cost optimization.
- **The system is not a generic data warehouse.** It maintains specifically the compiled organizational state required for authorization and reconciliation.
- **The system does not generate code or content.** It governs the conditions under which code or content generation is authorized, and reconciles the outputs.

---

## 9. Integration surface

In-scope integration targets:

- Jira, Azure DevOps — work graph and execution events
- GitHub — delivery evidence (commits, PRs, CI results)
- SharePoint, Microsoft Graph API — organizational structure, document evidence, communication signals
- Azure AD / Entra ID — org graph, identity, role mapping
- Teams, Outlook — planning session evidence
- Major agent platforms via MCP — Copilot Studio, Agentforce, Workspace Agents, custom MCP-compliant agents

---

## 10. Terminology glossary

For precise mapping during fitness evaluation:

- **Latent state** — the unobserved ground truth of project status at a given time.
- **Semantic window / phase** — a time interval during which the active intent contract is stable.
- **Intent contract** — typed rulebook for a window (schema, hard constraints, soft constraints, validators).
- **Compiled macro-state** — the canonical project state at a window boundary.
- **MAP inference** — the projection step that picks the most plausible structured delta given evidence, intent, and prior state.
- **Factor graph / MRF** — the structure on which the projection is computed; evidence factors reward agreement with logs, constraint factors penalize policy violations.
- **Dirichlet energy** — the scalar measure of inconsistency the compiler minimizes.
- **Sheaf Laplacian / H¹ cohomology** — algebraic structures that detect unsatisfiable constraint configurations and produce impossibility certificates.
- **Restriction maps** — how local constraints compose into global ones across the Org / Work / Product graphs.
- **Tree-width** — structural property of the constraint graph that determines tractability of inference.
- **Ungoverned Capacity Ratio** — the fraction of delivery capacity that is AI-generated and not represented in the planning model.
- **Window Algebra** — the compositional operators over windows (sequential, parallel, refinement).
- **Bounded context pack** — compact slice of compiled state plus targeted evidence delivered to an agent or human.
- **Provenance receipt** — pointer from an element of compiled state back to the observations and intent that produced it.
- **Override** — a first-class event capturing a planner's decision to deviate from a constraint or recommendation, with rationale.

---

## 11. Evaluation guidance

For fitness evaluation against a list of tracking issues, please assess each issue using the following procedure:

1. Map the issue to one or more of the ten capability claims in Section 7.
2. Identify which layer addresses it: CohesionXL (authorization, planning, capacity), Atlas (reconciliation, audit, provenance), or both.
3. Where an issue requires both layers, note the dependency explicitly: Atlas reconciliation is only meaningful when CohesionXL holds the authorization map.
4. Where an issue falls outside Section 7 capabilities or intersects the Section 8 out-of-scope list, flag it explicitly rather than inferring fit.
5. For each mapped issue, identify the specific formal mechanism (Section 3) that produces the answer — e.g., "calibrated completion probability for initiative X" maps to the calibration step in §3.
6. Note any issues where fitness depends on integration surface (Section 9) being available in the target environment.

The goal is a precise mapping between documented tracking issues and system capabilities, with honest acknowledgment of gaps where they exist.