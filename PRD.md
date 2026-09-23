# Product Requirements Document (PRD)

## BizOrbit — Hyper-Local Business & Financial Structuring Assistant for Rural Micro-Entrepreneurs

| | |
|---|---|
| **Document Version** | 1.0 |
| **Date** | September 23, 2026 |
| **Status** | Active |
| **Owner** | Product Team |
| **Product Brand** | BizOrbit (formerly GraminMitra AI) |

---

## 1. Executive Summary

BizOrbit is a conversational AI assistant, delivered primarily over WhatsApp and web dashboard, that helps rural and semi-urban micro-entrepreneurs in India start, run, and grow small businesses. It combines a **Retrieval-Augmented Generation (RAG)** knowledge engine, a **hyper-local feasibility analysis engine**, and a **financial structuring module** to give entrepreneurs advice that is grounded in real scheme data, real local market conditions, and their own financial situation — in their own language, on a device they already use.

The product does not replace banks, NBFCs, or government agencies. It acts as a **trusted advisory and preparation layer** that increases the quality and success rate of applications entrepreneurs make to those institutions.

---

## 2. Problem Statement

Rural micro-entrepreneurs (kirana stores, tailoring units, food processing, poultry/dairy, handicrafts, agri-input shops, etc.) face:

- **Information asymmetry** — unaware of relevant government schemes (PMEGP, Mudra, Stand-Up India, PM SVANidhi, state schemes), subsidies, or which bank/NBFC product fits them.
- **Language & literacy barriers** — most advisory content, forms, and eligibility criteria exist only in English or formal Hindi.
- **No hyper-local insight** — generic business advice ignores village-level demand, competition density, seasonality, and supply chain realities.
- **Financial exclusion** — thin or no credit history, informal bookkeeping, and difficulty structuring a loan application that a bank will approve.
- **Low digital access** — smartphone app fatigue, poor connectivity, and low willingness to download a new app for occasional use.
- **No trusted single point of contact** — advice is fragmented across CSCs, bank branches, agents (some predatory), and word of mouth.

---

## 3. Objectives & Success Metrics

| Objective | Key Metric | Target (Year 1) |
|---|---|---|
| Reach entrepreneurs where they already are | Active WhatsApp users (MAU) | 500,000 |
| Improve access to formal finance | Loan/scheme applications submitted via platform-generated documentation | 100,000 |
| Improve approval quality | Approval rate of platform-assisted applications vs. baseline | +20% vs. district baseline |
| Improve business outcomes | 12-month business survival rate of onboarded entrepreneurs | +15% vs. control group |
| Language inclusivity | Conversations completed fully in a non-English regional language | >70% |
| Trust & usefulness | User satisfaction (in-chat micro-survey) | CSAT ≥ 4.2 / 5 |
| Advisory reliability | RAG answers with verifiable source citation | ≥95% of scheme/financial answers |

---

## 4. Target Users & Personas

1. **Rani — Kirana/general store owner (semi-literate, feature phone → smartphone shared with family)**
   Wants to know if she can get a loan to expand stock before the festival season.

2. **Meena — Self-Help Group (SHG) member starting a tailoring/stitching unit**
   Needs to understand Mudra loan eligibility, pricing for her area, and how to register on Udyam.

3. **Suresh — Farmer diversifying into agri-processing (flour mill, cold storage)**
   Needs feasibility validation (is there enough local demand?) and a bankable project report.

4. **Local Bank Correspondent / CSC Operator (secondary user)**
   Uses the platform's generated reports to speed up loan sourcing and documentation for multiple entrepreneurs.

---

## 5. Scope

**In scope — MVP (Phase 1)**
- WhatsApp-based multilingual conversational interface
- RAG-grounded scheme/financial Q&A
- Hyper-local feasibility scoring (district/block level)
- Basic financial structuring: loan matching, EMI/break-even calculators, document checklist generation
- Human advisor escalation path

**Out of scope — MVP**
- Direct loan disbursement or fund transfer (platform is advisory/preparation only)
- Native mobile app (WhatsApp-first; app considered Phase 3)
- Full-fledged accounting/ERP system

---

## 6. Core Features

### 6.1 Multilingual Conversational Interface
- Text and **voice-first** interaction (speech-to-text / text-to-speech) for low-literacy users
- Support for major Indian languages at launch: Hindi, Tamil, Telugu, Kannada, Marathi, Bengali, Gujarati; phased expansion to Odia, Punjabi, Malayalam, Assamese
- Auto language detection, including code-mixed input (e.g., Hinglish, Tanglish)
- Simple, non-jargon phrasing calibrated for low financial/digital literacy
- Dialect-tolerant NLU (handles regional variation, not just standardized script)

### 6.2 WhatsApp Business API Integration
- Primary channel — no app download required, works on any smartphone with WhatsApp
- Rich message types: quick-reply buttons, list menus, template/broadcast messages, document (PDF) and image sharing
- **Location sharing** via native WhatsApp location pin for hyper-local context capture
- Photo-based inputs — e.g., photo of shop front, produce, or handwritten ledger
- Proactive alerts: scheme deadlines, mandi price changes, weather advisories relevant to the business
- Seamless **human-in-the-loop handoff** to a live advisor or bank correspondent for complex/high-stakes cases
- Session state management for multi-turn structured flows (e.g., loan application wizard)

### 6.3 RAG-Powered Knowledge & Advisory Engine
- Vector database built from a curated, continuously updated corpus:
  - Central & state government schemes (PMEGP, Mudra, Stand-Up India, PM SVANidhi, state-specific subsidy programs)
  - Bank / NBFC / MFI loan products and eligibility criteria
  - Regulatory/compliance guides (Udyam registration, GST, FSSAI, Shop & Establishment Act)
  - Market price feeds (e-NAM, Agmarknet) for agri-linked businesses
- Every advisory answer includes a **source citation** so the user (or a bank officer) can verify it
- Confidence scoring — low-confidence or high-stakes answers (e.g., "should I take this loan?") are routed to a human advisor rather than answered autonomously
- Scheduled re-indexing pipeline to keep scheme rules, interest rates, and deadlines current

### 6.4 Hyper-Local Feasibility Analysis Engine
- Demand estimation at village/block/district level using geospatial, census, and local economic datasets
- **Competitor density mapping** — how many similar businesses exist within a configurable radius
- Local supply chain and raw-material availability assessment
- Seasonal demand modeling (harvest cycles, festivals, monsoon impact on footfall/logistics)
- Infrastructure risk flags (flood-prone zones, unreliable power, poor road connectivity)
- Output: a simple **feasibility score with plain-language explanation**, delivered as a WhatsApp-friendly image/infographic

### 6.5 Financial Structuring & Advisory Module
- Loan eligibility pre-assessment and matching to the best-fit scheme or lender
- EMI calculator, break-even analysis, and working-capital estimation tailored to business type
- Auto-generated **document checklist** for the specific scheme/lender chosen
- Alternate credit scoring using self-reported cash-flow patterns for users with no formal credit history
- Simple visual **financial health snapshot** (income vs. expense vs. loan capacity)
- Awareness nudges for micro-insurance (PMJJBY/PMSBY) and savings products

### 6.6 Business Advisory & Growth Module
- Locally-calibrated business plan generation (pricing, expected footfall, cost structure)
- Basic income/expense tracking via simple chat commands ("sold 200 for milk today")
- Inventory and seasonal stocking reminders
- Guided assistance for Udyam registration, Google Business Profile, and GeM vendor registration

---

## 7. Additional / Value-Add Features (Recommended for Roadmap)

Beyond the core requested capabilities, the following extend the product's reach and defensibility:

| Category | Feature |
|---|---|
| **Accessibility** | IVR/voice-call fallback for feature-phone users with no smartphone |
| **Accessibility** | Low-bandwidth / offline-tolerant mode with compressed responses for 2G areas |
| **Trust & Safety** | Fraud/scam alert system — verify if a scheme or "agent" is genuine |
| **Trust & Safety** | Grievance redressal channel for predatory lending or misinformation |
| **Financial Inclusion** | Gamified "credit-building" streaks for consistent bookkeeping, feeding into alternate credit history |
| **Community** | Peer learning network connecting nearby entrepreneurs in similar trades; success-story sharing |
| **Community** | Referral program to onboard neighboring entrepreneurs |
| **Inclusion Focus** | Dedicated module for women entrepreneurs — SHG linkage, Mahila-specific schemes, safety-aware design |
| **Data Digitization** | OCR + AI parsing of handwritten ledgers/receipts into digital records |
| **Ecosystem Integration** | Warm handoff to verified local CSCs, Business Correspondents, or NBFC field agents |
| **Climate/Agri Risk** | Weather and climate-risk advisories for agri-allied businesses |
| **Ecosystem Insight** | Aggregated, anonymized dashboard for NGOs/government/bank partners to inform policy and outreach |
| **Product Analytics** | Drop-off/sentiment analysis to detect where users disengage and trigger human follow-up |
| **Literacy** | Bite-sized audio/text micro-courses on financial and digital literacy |
| **Export** | One-tap PDF export of business plan / feasibility report for physical bank submission |

---

## 8. Sample User Journey (via WhatsApp)

1. User messages "Hi" to the GraminMitra WhatsApp number → language selection (auto-detected, confirmed by user)
2. Bot asks the nature of business idea/existing business + shares/requests **location pin**
3. Hyper-local feasibility engine returns a plain-language feasibility score with reasoning
4. User asked about existing savings, rough income, and business stage
5. RAG engine matches eligible schemes/lenders → explains top 2–3 options with pros/cons and sources
6. User selects an option → bot generates a document checklist and a simple business/financial plan (PDF)
7. Bot offers to connect the user to a nearby CSC/bank correspondent for submission
8. Follow-up nudges track application status and offer post-approval guidance (bookkeeping, growth tips)

---

## 9. High-Level System Architecture

```
WhatsApp Business API  ──▶  Conversation Orchestration Layer
                              │  (intent routing, session state,
                              │   language detection, human handoff)
                              ▼
              ┌───────────────────────────────┐
              │   NLU / Multilingual Layer      │
              │  (ASR, translation, NLU model)  │
              └───────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        ▼                     ▼                       ▼
  RAG Advisory Engine   Feasibility Engine     Financial Structuring
  (vector DB + LLM,     (geospatial + local     Engine (eligibility
  scheme/finance KB)    market data models)     matching, calculators)
        │                     │                       │
        └─────────────────────┴───────────────────────┘
                              ▼
                  Data & Integration Layer
   (Scheme DB, bank/NBFC product catalog, e-NAM/Agmarknet feeds,
    census/geospatial data, user profile & consent store)
                              ▼
              Human Advisor / CSC Escalation Layer
```

---

## 10. Data Sources & Knowledge Base

| Source | Purpose | Update Frequency |
|---|---|---|
| PMEGP, Mudra, Stand-Up India, PM SVANidhi, state schemes | Scheme eligibility & benefits | Monthly / on policy change |
| Bank, NBFC, MFI product catalogs | Loan matching | Monthly |
| e-NAM / Agmarknet | Market price data | Daily |
| Census & geospatial datasets | Demand & demographic modeling | Static, refreshed annually |
| Udyam / GST / FSSAI regulatory guides | Compliance guidance | On regulation change |
| User-provided data (location, income, business type) | Personalization | Real-time |

---

## 11. Non-Functional Requirements

- **Scalability:** queue-based architecture to support millions of concurrent WhatsApp conversations
- **Latency:** RAG-backed responses returned within a few seconds under normal load
- **Accessibility:** works on basic smartphones; IVR fallback for feature phones; designed for low literacy
- **Security & Privacy:** end-to-end encrypted data handling; compliance with India's **DPDP Act 2023**; explicit consent management for financial data
- **Regulatory posture:** the product is advisory/preparatory only — it does not itself extend credit, so it must stay clear of RBI digital lending regulations that apply to lenders; any fulfillment partnership must be structured accordingly
- **Reliability:** fallback to human advisor whenever confidence score is low or the query is high-stakes

---

## 12. Risks & Mitigations

| Risk | Mitigation |
|---|---|
| AI gives incorrect financial advice | Source-citation requirement + confidence thresholds + human escalation for high-stakes queries |
| Low trust in a "bot" for financial decisions | Human-in-the-loop handoff, transparent sourcing, local CSC partnerships |
| Regional language/dialect coverage gaps | Phased language rollout prioritized by entrepreneur density |
| Data privacy concerns around financial info | Explicit consent flows, DPDP-compliant data handling, minimal data retention |
| WhatsApp policy/rate-limit changes | Maintain IVR/SMS fallback channel |
| Stale scheme data leading to bad advice | Automated re-indexing pipeline with change alerts |

---

## 13. Roadmap & Phasing

| Phase | Timeline | Key Deliverables |
|---|---|---|
| Phase 1 — MVP | Months 1–4 | WhatsApp interface, 3–4 languages, RAG scheme Q&A, basic feasibility score, loan matching |
| Phase 2 — Expansion | Months 5–8 | Full language set, financial health dashboard, OCR ledger digitization, human advisor network |
| Phase 3 — Ecosystem | Months 9–12 | Peer community, gamified credit-building, partner dashboard for NGOs/banks, IVR fallback |
| Phase 4 — Scale | Year 2 | Native app option, deeper bank/NBFC API integrations, pan-India language coverage |

---

## 14. Assumptions & Dependencies

- Primary market is India; scheme references assume Indian rural entrepreneurship context (adjustable for other geographies)
- WhatsApp Business API access and template approval are secured in advance
- Government/bank data sources are accessible via API or licensed data feeds
- Human advisor network (in-house or CSC partnership) is available for escalations from launch

## 15. Open Questions

- Will fulfillment (loan disbursement) ever be brought in-house, or remain strictly partner-led?
- What is the monetization model — B2G (government/NGO funded), B2B (bank/NBFC referral fees), or freemium B2C?
- Which 3–4 languages and which states should Phase 1 prioritize based on entrepreneur density data?
