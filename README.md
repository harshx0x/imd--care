# IMD Care — Intelligent Medical & Health Guidance
> **Your Health. Better Understood.**  
> *A responsive, culturally nuanced AI healthcare web application built for the Healthcare Hackathon.*

---

## 🌟 Overview

**IMD Care** is an AI-powered healthcare literacy prototype designed for the Indian healthcare ecosystem. The platform bridges the communication gap between patients and medical professionals by translating complex clinical concepts, symptoms, and lab reports into clear, empathetic, and actionable guidance in **English, Hindi (हिंदी), and Marathi (मराठी)**.

The application adheres to conservative clinical safety standards: it provides educational guidance, highlights red flags, directs genuine emergencies to India's **112** and **108** hotlines, and never claims to replace licensed physicians or diagnose conditions.

---

## 🚀 Key Features

### 1. 🤖 Conversational AI Health Assistant (Grounded via RAG)
- **Multi-lingual Support**: Native comprehension and responses in English, Hindi (Devanagari), and Marathi (Devanagari).
- **Retrieval-Augmented Generation (RAG)**: Real-time vector search over verified guidelines from MoHFW, ICMR, WHO, and AIIMS.
- **Traceable Clinical Citations**: Provides clickable source links with publisher attribution, document titles, and relevance match scores.
- **Insufficient Evidence Protection**: Explicitly flags when curated medical evidence is insufficient for a query, refusing to hallucinate or fabricate sources.
- **Conservative Guardrails**: Evaluates acute red-flag emergencies *before* vector lookup, directing genuine emergencies to India's **112** and **108** hotlines.

### 2. 🩺 Smart Symptom Guidance
- **Structured Intake Form**: Evaluates primary symptom, duration (<24h, 1–3 days, 4–7 days, >1 week, chronic), severity (mild, moderate, severe), and age group.
- **Immediate Emergency Safety Check**: Client-side and server-side evaluation triggers an emergency modal and protocol banner *before* AI requests for cardiac, neurological (FAST stroke), respiratory, or severe trauma red flags.
- **Organized Results in 4 Actionable Cards**:
  1. *Possible Explanations* (educational possibilities)
  2. *General Self-Care* (hydration, rest, comfort)
  3. *When to Consult a Doctor* (specific timelines)
  4. *Warning Signs* (red flags requiring urgent care)
- **India Emergency Access**: One-touch call buttons for **112** (All-in-one Emergency) and **108** (Ambulance).

### 3. 📄 Medical Report Simplifier
- **Synthetic Lab Panel Samples**: One-click prefill for Complete Blood Count (Hemoglobin), Lipid Profile (LDL), Glycated Hemoglobin (HbA1c Prediabetes), Thyroid Panel (TSH), Fasting Blood Sugar (FBS), and Serum Creatinine.
- **Custom Biomarker Input**: Enter test name, measured value, units, and laboratory reference interval.
- **Plain-Language Breakdown**: Explains what the biomarker measures in simple terms without inventing missing values.
- **Doctor Consultation Prep**: Generates 3–4 tailored, empowered questions to bring to the next clinical appointment.
- **Confidential Synthetic Data**: Clearly labeled as synthetic; requires no real patient personal identifiers or uploaded documents.

### 4. 🌿 Basic Preventive Care & Reminders
- **Medication & Appointment Reminders**: Add, view, toggle complete, and delete health reminders locally.
- **Daily Indian Wellness Tracker**: Interactive tracking for hydration (8 glasses/day), 30 minutes of physical movement/yoga, 7–8 hours restorative sleep, 10 minutes pranayama/meditation, and nutrient-dense balanced meals.
- **Zero Sensitive Data Logging**: Reminders and wellness counts stay strictly inside browser `localStorage`.
- **Transparent Notice**: Clearly informs users that browser-local reminders do not send background push notifications or SMS.

---

## 🎨 Brand Identity & Design System

The visual design is engineered as a **premium, trustworthy Indian healthtech experience**:
- **Hero & Key Feature Sections**: Dark Navy (`#102A43` / `#0A1926`)
- **Primary Highlights & CTAs**: Emerald Green (`#0F766E` / `#0D655F`)
- **Secondary Accents & Badges**: Soft Mint (`#DDF5EF` / `#2DD4BF`)
- **Page Background**: Clean Off-White (`#F8FAFC`)
- **Cards & Surfaces**: Pure White (`#FFFFFF`)
- **Typography & Body Text**: Dark Slate (`#243447`)
- **Warnings & Emergency Flags**: Soft Amber (`#D97706`) and Accessible Red (`#DC2626`)
- **Subtle Cultural Accents**: Understated Indian geometric jali lattice patterns and radial mandala vector flourishes.
- **Accessibility & Motion**: Respects `prefers-reduced-motion` with WCAG AA compliant color contrast ratios.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Framework** | [Next.js](https://nextjs.org/) (App Router, Server-side API routes) |
| **Language** | TypeScript (Strict type checking) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **AI Integration** | Official [`openai`](https://www.npmjs.com/package/openai) Node SDK |
| **Iconography** | [Lucide React](https://lucide.dev/) |
| **State & Storage** | React Hooks + Client-side `localStorage` (Zero server persistence) |

---

## 🔒 Medical Ethics & Safety Framework

1. **No Definitive Diagnosis**: System instructions strictly enforce cautious, educational phraseology ("This could be associated with...", "Benign causes include...").
2. **No Drug Prescribing**: Never suggests specific prescription drugs or dosages; focuses on comfort measures and consulting registered MBBS/MD clinicians.
3. **Conservative Red-Flag Triage**: Immediate bypass and alert for acute chest pain, stroke symptoms (FAST), respiratory collapse, or severe bleeding.
4. **India Emergency Numbers**: Prominently displays:
   - **112**: National Emergency Helpline
   - **108**: Medical Ambulance Service
   - **1075**: MoHFW National Health Helpline
   - **14416**: Tele-MANAS Mental Health Support
5. **Zero Data Retention**: Conversational inputs are not permanently logged or tracked on backend databases.

---

## ⚙️ Environment Variables & Authentication Setup

Create or configure `.env.local` in the project root:

```bash
# ----------------------------------------------------
# 1. OpenAI API Configuration (Server-Side Only)
# ----------------------------------------------------
# Add your real OpenAI API Key below to enable live OpenAI completions.
# If left blank, IMD Care automatically operates in full offline Demo Mode with pre-vetted synthetic clinical examples.
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-4o-mini

# ----------------------------------------------------
# 2. Supabase Authentication Configuration
# ----------------------------------------------------
# Optional for public health literacy browsing; required for live user accounts.
# Step 1: Create a free project at https://supabase.com
# Step 2: Navigate to Project Settings -> API
# Step 3: Copy your Project URL and anon public key:
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key
```

### 🔐 Authentication Architecture & Privacy
- **Dedicated Split-Screen Auth Pages**:
  - `/login` — Login with email and password, show/hide password toggle, and remember me.
  - `/register` — Account registration with full name, email, password confirmation, and mandatory healthcare safety terms consent.
  - `/forgot-password` — Secure recovery link request with safe enumeration mitigation.
- **Three-Language Interface**: Complete instant translation of all greetings, inputs, error messages, and buttons in **English, Hindi (हिंदी), and Marathi (मराठी)**.
- **Privacy & Healthcare Safety**: Authentication profiles are strictly decoupled from health queries. Zero medical histories, symptom checks, or chat logs are ever stored in auth databases or user profiles.
- **Transparent Setup Guard**: If Supabase environment variables are missing, the UI presents an informative configuration helper rather than simulating a fake or insecure login system.

### ⚡ Offline Demo Mode
When `OPENAI_API_KEY` is not provided or if network/rate-limit errors occur, **IMD Care automatically activates its pre-vetted synthetic clinical knowledge base**. Demo responses are explicitly badged (`Demo Mode`) so judges and evaluators experience a 100% working prototype without requiring an active OpenAI key.

---

## 📦 Installation & Running

### 1. Navigate to the project directory
```bash
cd /Users/harshraj/.gemini/antigravity/scratch/imd-care
```

### 2. Install dependencies (if not already installed)
```bash
npm install
```

### 3. Build the application
```bash
npm run build
```

### 4. Start the production server
```bash
npm run start
```
The application will be live at: **`http://localhost:3000`**

### Development Mode:
```bash
npm run dev
```

---

## 📂 Project Directory Structure

```
imd-care/
├── .env.example              # Sample environment template
├── .env.local                # Local environment configuration
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── next.config.ts            # Next.js configuration
├── public/                   # Static assets & favicon
└── src/
    ├── app/
    │   ├── api/
    │   │   ├── chat/route.ts       # Secure server-side OpenAI chat endpoint
    │   │   ├── symptoms/route.ts   # Structured symptom triage endpoint
    │   │   ├── reports/route.ts    # Diagnostic lab simplification endpoint
    │   │   └── status/route.ts     # System health and demo mode detection
    │   ├── globals.css             # Theme variables & Indian jali patterns
    │   ├── layout.tsx              # Root HTML & metadata layout
    │   └── page.tsx                # Main responsive single-page application
    ├── components/
    │   ├── Navbar.tsx              # Sticky nav with language selector & 112 button
    │   ├── Hero.tsx                # Navy hero with visual AI vitals card
    │   ├── FeatureHighlights.tsx   # 3 primary module cards
    │   ├── HealthAssistant.tsx     # Conversational multilingual chat
    │   ├── SymptomGuidance.tsx     # Structured intake form & 4 result cards
    │   ├── ReportSimplifier.tsx    # Synthetic sample reports & breakdown
    │   ├── PreventiveCare.tsx      # Local reminders & wellness tracker
    │   ├── EmergencyModal.tsx      # Emergency protocol & helpline dialog
    │   ├── DisclaimerModal.tsx     # Medical disclaimer & privacy notice
    │   ├── Footer.tsx              # Footer with emergency helpline banner
    │   └── IndianPatternDecorations.tsx # Subtle jali and mandala SVG accents
    └── lib/
        ├── types.ts                # TypeScript interfaces
        ├── openai.ts               # Server-side OpenAI client
        ├── emergency.ts            # Conservative emergency triage logic
        ├── synthetic-data.ts       # Pre-vetted fallback knowledge base
        └── rag/                    # Retrieval-Augmented Generation (RAG) Module
            ├── types.ts            # Knowledge chunks, citations & query options
            ├── text-chunker.ts     # Markdown-aware overlapping text chunking & SHA-256 hash
            ├── curated-sources.ts  # Verified medical registry (MoHFW, ICMR, WHO, AIIMS)
            ├── embeddings.ts       # OpenAI embeddings + cross-lingual semantic projection
            ├── vector-store.ts     # Supabase pgvector + local in-memory vector store
            ├── ingestion.ts        # Domain-whitelisted ingestion & deduplication pipeline
            ├── rag-pipeline.ts     # Safe context injection & citation formatting
            └── seed.ts             # Knowledge base seeding script
```

---

## 📚 Retrieval-Augmented Generation (RAG) Architecture

IMD Care grounds AI-generated health education responses in a verified, traceable medical knowledge base.

```
User Health Query (EN / HI / MR)
              │
              ▼
┌───────────────────────────┐
│  Emergency Safety Triage  │ ──► [Red Flag Detected?] ──► Immediate 112/108 Warning (Bypasses RAG)
└─────────────┬─────────────┘
              │ (Non-emergency)
              ▼
┌───────────────────────────┐
│ Query Embedding Generator │ (OpenAI text-embedding-3-small or Cross-Lingual Semantic Projection)
└─────────────┬─────────────┘
              │
              ▼
┌───────────────────────────┐
│ Vector Similarity Search  │ (Supabase pgvector HNSW OR Local In-Memory Cosine Store)
└─────────────┬─────────────┘
              │
      ┌───────┴────────────────────────┐
      ▼                                ▼
[Matches Found (≥ Threshold)]     [No Relevant Guidelines]
      │                                │
      ▼                                ▼
Grounded Medical Prompt           Insufficient Evidence Fallback
(Safety Preamble + Evidence)      (Explains gap & advises doctor visit)
      │                                │
      ▼                                ▼
OpenAI / Grounded Engine          Safe Educational Guidance
      │                                │
      ▼                                ▼
Response with Clickable Citations ──► User Interface
```

### 1. Vector Database Options
1. **Supabase PostgreSQL with `pgvector`**:
   - Migration file: [`supabase/migrations/20261028_rag_pgvector.sql`](supabase/migrations/20261028_rag_pgvector.sql)
   - Creates `knowledge_chunks` table, HNSW cosine index, Row Level Security (RLS), and `match_knowledge_chunks` stored RPC function.
   - Activated automatically when `SUPABASE_SERVICE_ROLE_KEY` and `NEXT_PUBLIC_SUPABASE_URL` are provided in `.env.local`.
2. **Local In-Memory Vector Store**:
   - Zero-dependency, pure TypeScript cosine-similarity vector store with SHA-256 deduplication.
   - Automatically self-seeds with verified medical guidelines on first launch if Supabase is unconfigured, ensuring immediate out-of-the-box functionality for local judging.

### 2. Curated Healthcare Authorities & Whitelist
Ingestion strictly enforces an approved publisher domain whitelist:
- **Ministry of Health and Family Welfare (MoHFW) India**: `mohfw.gov.in`, `nhp.gov.in`
- **Indian Council of Medical Research (ICMR)**: `icmr.gov.in`, `icmr.nic.in`
- **World Health Organization (WHO)**: `who.int`
- **All India Institute of Medical Sciences (AIIMS)**: `aiims.edu`
- **Anemia Mukt Bharat Mission**: `anemiamuktbharat.info`
- **National Disaster Management Authority (NDMA)**: `ndma.gov.in`
- **CDC**: `cdc.gov`

Arbitrary websites and patient-uploaded personal medical reports are strictly forbidden from being ingested into the shared knowledge base.

### 3. Ingestion & Seeding
To inspect or seed the knowledge base:
```bash
npm run seed:rag
```
Or query the live RAG diagnostic API:
```bash
curl http://localhost:3000/api/rag/status
```

### 4. Running the RAG Test Suite
```bash
node tests/test-rag-pipeline.js
```
Runs 7 comprehensive tests covering text chunking, SHA-256 deduplication, domain whitelisting, vector geometry, semantic retrieval, insufficient evidence handling, emergency override, and prompt injection defense.

---

## 🎮 HealthQuest India Edition (Interactive Health Education Game)

Route: `/healthquest`

An interactive, gamified healthcare literacy engine designed to teach everyday health, preventive care, nutrition, myth debunking, and emergency first aid through play.

- **100 Curated Questions & Interactive Challenges**:
  - **Beat the Health Myth** (25 questions): Debunks widespread misconceptions with clinical rationale citing ICMR and WHO.
  - **Health Knowledge Quiz** (25 questions): Multiple-choice questions on hygiene, preventive care, nutrition, and vital signs.
  - **Food Label Detective** (15 interactive comparisons): Real-world comparisons of packaged foods, added sugar calculations, sodium levels, and FSSAI ingredient rules.
  - **Emergency Action Quest** (15 scenarios): Critical first-aid triage scenarios prioritizing **112 / 108** response (heat stroke, acute chest pain, burn care, snakebite, choking, seizures).
  - **Build Your Healthy Day** (20 activities): 24-hour circadian routine architect across morning, afternoon, evening, and night with real-time balance scoring.
- **Trilingual Localization**: Complete native translations in English, हिन्दी (Hindi), and मराठी (Marathi).
- **Gamification Mechanics**: XP points engine, consecutive streak bonus, level progression (Apprentice to Master), Trophy Case (6 unlockable badges), and synchronized Daily Missions.

---

## 🏆 Hackathon Evaluation Summary

- **Complete & Working**: All buttons, forms, language switchers, reminder trackers, and modal triggers are fully functional.
- **Server-Side Security**: API keys stay securely on the server; zero browser bundle leakage.
- **Real & Fallback Intelligence**: Seamless live OpenAI generation with a reliable, graceful synthetic demo fallback.
- **Clinical Responsibility**: Conservative safety triage aligned with Indian healthcare infrastructure (112 / 108).

