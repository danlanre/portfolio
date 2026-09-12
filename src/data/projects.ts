import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'ojashare',
    title: 'OjaShare (Nigeria Food Supply)',
    subtitle: 'Fractional Agri-Supply & Bulk-Buying Platform for Nigeria',
    category: 'fullstack',
    categoryLabel: 'Fintech & Commerce',
    status: 'Production',
    featured: true,
    shortDescription: 'Full-stack fractional group-buying marketplace enabling Nigerian consumers and small businesses to pool funds and purchase farm-gate wholesale food staples with low-data optimization and automated capacity triggers.',
    fullDescription: 'OjaShare combats high food inflation across Nigeria by allowing consumers to fractionalize bulk items (such as 50kg bags of Mama Gold Rice or 25L vegetable oil) into affordable slots (e.g., 5kg or 2.5L). Built on Next.js 14 and Firebase, it features real-time slot claiming, an automated 100% capacity fulfillment trigger that emits notifications to regional pickup hubs (Mile 12 Lagos, Bodija Ibadan), a Nigerian payment sandbox (USSD *737#, Virtual Accounts, Debit Cards), and a 1-click low-data mode.',
    problem: 'Food inflation in emerging markets forces families to pay retail markups of up to 40% on small portions, while wholesale farm-gate prices are only accessible to bulk buyers with large capital.',
    solution: 'Developed an escrow-backed fractional buying platform with real-time slot allocation, neighborhood hub fulfillment, and low-bandwidth optimizations built for 2G/3G mobile networks.',
    architectureHighlights: [
      'Fractional Slot Math & Atomicity: Firestore transactions guarantee slot claims avoid race conditions and over-allocation',
      'Automated Capacity Trigger: Reaching 100% automatically switches order state to processing and dispatches priority alerts to pickup hub coordinators',
      'Unified Nigerian Sandbox Gateway: Simulates USSD dial strings (*737#), dynamic Wema/Sterling virtual bank accounts, and card OTP flows',
      'Low-Bandwidth Mode: Client-side image suppression, SVG iconography, and aggressive caching for low-connectivity regions'
    ],
    keyFeatures: [
      'Fractional Group-Buying with Live Slot Progress Bars',
      'Automated 100% Fulfillment Threshold Notification Dispatch',
      'Multi-Channel Sandbox Payments (USSD, Virtual Account, Card, Oja Wallet)',
      '1-Click Low-Data Mode for 2G/3G Nigerian Networks',
      'Neighborhood Pickup Hub Logistics Management (Lagos, Ibadan, Abuja)'
    ],
    techStack: [
      { name: 'Next.js 14', role: 'SSR & API Route Architecture' },
      { name: 'Firebase Firestore', role: 'Real-time Slot Synchronization & DB' },
      { name: 'Firebase Auth', role: 'User Identity & Phone Verification' },
      { name: 'Tailwind CSS', role: 'Mobile-First Nigerian eCommerce UI' },
      { name: 'Lucide Icons', role: 'Localized Payment & Logistics Icons' }
    ],
    primaryColor: 'from-emerald-600 via-green-600 to-amber-600',
    accentColor: 'text-emerald-400',
    iconName: 'ShoppingBag',
    localDir: 'developer',
    runCommand: 'npm run dev',
    links: {
      demo: 'https://nigeriafoodsupply.vercel.app/',
      github: 'https://github.com/danlanre/Nigeriafoodsupply'
    },
    metrics: [
      { label: 'Bulk Savings', value: 'Up to 40%' },
      { label: 'Network Support', value: '2G/3G/4G Optimized' },
      { label: 'Payment Channels', value: 'USSD, Bank Transfer, Card' }
    ]
  },
  {
    id: 'ai-content-engine',
    title: 'VideoForge AI (Viral AI Studio)',
    subtitle: 'Autonomous Generative Video & Shorts Automation Engine',
    category: 'ai',
    categoryLabel: 'Generative Media',
    status: 'Production',
    featured: true,
    shortDescription: 'Full-stack AI video generation platform that turns text prompts and trending topics into viral short-form videos using Google Gemini GenAI, Replicate AI models, and programmatic FFmpeg video composition.',
    fullDescription: 'VideoForge AI (Viral AI Studio) is an automated multimedia production engine designed for creators and marketers. Given a simple topic or script idea, the system orchestrates Google Gemini to construct segmented scripts, calls Replicate diffusion models for photorealistic frame generation, integrates text-to-speech for vocal narration, and leverages fluent-ffmpeg on the backend to stitch kinetic subtitles, background music, and video layers into complete MP4 reels ready for social distribution.',
    problem: 'Creating high-retention vertical video shorts manually takes hours of scriptwriting, voice recording, asset sourcing, video slicing, and subtitle synchronization.',
    solution: 'Designed an autonomous pipeline where multi-modal AI agents coordinate script generation, visual creation, voice synthesis, and video encoding with zero manual video editing required.',
    architectureHighlights: [
      'Google GenAI SDK Integration: Automated narrative script generation with pacing tailored for 30s-60s engagement retention',
      'Asynchronous Asset Pipeline: Concurrent frame generation via Replicate image generation APIs and neural audio TTS',
      'Programmatic FFmpeg Rendering: Server-side composition handling audio ducking, subtitle burning, transition blending, and MP4 compression',
      'Modern Next.js 14 Web Interface: Real-time progress monitoring, timeline previews, and one-click media exports'
    ],
    keyFeatures: [
      'Automated Viral Script Generation with Gemini 1.5/2.0',
      'Multi-model AI Visuals & Background Asset Sourcing',
      'Neural Voiceover Synthesis with Dynamic Pitch & Speed',
      'FFmpeg Kinetic Subtitle Overlay & Timeline Assembly',
      'One-click Video Download & Multi-Platform Aspect Ratio Support'
    ],
    techStack: [
      { name: 'Next.js 14', role: 'Full-Stack App Framework' },
      { name: 'Google GenAI SDK', role: 'Scriptwriting & Scene Direction' },
      { name: 'Replicate API', role: 'Diffusion Image Generation' },
      { name: 'Fluent-FFmpeg', role: 'Video & Audio Compositing' },
      { name: 'Tailwind CSS', role: 'Modern Studio Interface' }
    ],
    primaryColor: 'from-purple-500 via-indigo-600 to-blue-600',
    accentColor: 'text-purple-400',
    iconName: 'Video',
    localDir: 'generating video app',
    runCommand: 'npm run dev',
    links: {
      demo: 'https://viral-ai-studio.vercel.app/',
      github: 'https://github.com/danlanre/Viral-ai-studio'
    },
    metrics: [
      { label: 'Video Production Time', value: '~45s' },
      { label: 'Resolution', value: '1080x1920 (9:16)' },
      { label: 'Automation Level', value: '100% Hands-Free' }
    ]
  },
  {
    id: 'agentguard',
    title: 'AgentGuard (PeerShield)',
    subtitle: 'Enterprise AI Agent Security & Policy Guardrails Engine',
    category: 'ai',
    categoryLabel: 'AI & Safety',
    status: 'Live System',
    featured: true,
    shortDescription: 'Enterprise runtime firewall and policy guardrail engine that validates AI agent tool calls, executes real-time SIEM audit streaming, and gates dangerous corporate actions via human-in-the-loop queues.',
    fullDescription: 'AgentGuard (PeerShield) is a multi-tier governance firewall built to safeguard enterprise systems when autonomous AI agents execute operations. It dynamically intercepts agent intent, evaluates parameters against granular organizational policies, generates risk scores, and routes high-risk operations into human-in-the-loop authorization queues while streaming cryptographic event trails into SIEM audit collectors.',
    problem: 'Autonomous LLM agents possess access to sensitive APIs (SQL databases, AWS IAM, Stripe, HR systems). Without deterministic policy guardrails and real-time oversight, prompt injections and agent hallucinations can cause irreversible enterprise damage.',
    solution: 'Engineered an in-flight evaluation engine that intercepts agent request contexts before downstream execution, evaluates regex/pattern/role-based security policies, and orchestrates live human approvals with visual pipeline traces.',
    architectureHighlights: [
      'Multi-stage Policy Pipeline: Pre-flight syntax validation -> Semantic safety screening -> Role authorization -> Dynamic risk scoring',
      'Human-in-the-Loop Queue: Real-time authorization queue allowing security teams to inspect parameter payloads, approve, or reject agent actions',
      'SIEM Audit Streaming: High-throughput log stream with timestamped evaluation outcomes, policy hits, and compliance breadcrumbs',
      'Scenario Simulator: Built-in benchmark suite to stress-test prompt injection resistance, malicious SQL execution, and privilege escalation'
    ],
    keyFeatures: [
      'Live Policy Pipeline Visualizer',
      'Real-time SIEM Audit Log Feed',
      'Human Approval Escalation Queue',
      'Interactive Scenario Playground',
      'Mock Enterprise API Execution Suite',
      'Custom Policy Configuration Modal'
    ],
    techStack: [
      { name: 'React 19', role: 'Reactive UI Architecture' },
      { name: 'TypeScript', role: 'Strict Type-Safe System Models' },
      { name: 'Tailwind CSS', role: 'Enterprise Dark Dashboard UI' },
      { name: 'Vite 8', role: 'Sub-second Bundling & HMR' },
      { name: 'Lucide Icons', role: 'Security & System Iconography' }
    ],
    primaryColor: 'from-emerald-500 via-teal-600 to-cyan-600',
    accentColor: 'text-emerald-400',
    iconName: 'ShieldCheck',
    localDir: 'ssssss',
    runCommand: 'npm run dev',
    links: {
      demo: 'https://peershield.vercel.app/',
      github: 'https://github.com/danlanre/peershield'
    },
    metrics: [
      { label: 'Latency Overhead', value: '<12ms' },
      { label: 'Policy Checks', value: '100% Deterministic' },
      { label: 'Security Stages', value: '4-Tier Guard' }
    ]
  },
  {
    id: 'cbt-master',
    title: '2026 JAMB & WAEC CBT Master',
    subtitle: 'Offline-First Exam Simulator with AI Theory Grader & Peer Challenge',
    category: 'offline',
    categoryLabel: 'Offline & EdTech',
    status: 'PWA',
    featured: true,
    shortDescription: '100% offline Progressive Web App for Nigerian secondary school examinations featuring PRNG multiplayer challenge mode, 8-key UTME keyboard navigation, scientific calculator, and AI Theory Grader.',
    fullDescription: 'CBT Master is a resilient educational platform designed to empower students preparing for JAMB UTME and WAEC exams under unreliable internet conditions. Packaged as an offline-first PWA, it includes hundreds of verified past questions, an AI-powered theory examiner that grades step-by-step math and essay answers against official WAEC marking schemes, an authentic 8-key UTME keyboard layout (A, B, C, D, N, P, S, R), and a synchronized multiplayer challenge mode driven by PRNG room seeds requiring zero server connectivity.',
    problem: 'Students in areas with unstable or expensive internet access are unable to practice for computerized national exams, and theoretical essay questions lack automated grading mechanisms.',
    solution: 'Engineered an offline-first PWA utilizing Service Workers and IndexedDB, supplemented with a PRNG seed algorithm enabling peer-to-peer multiplayer competition completely offline, plus an AI theory examiner rubric.',
    architectureHighlights: [
      'Progressive Web App & Service Worker: Total cache storage enabling complete offline app launch and exam taking',
      'Deterministic PRNG Multiplayer: Synchronizes question randomization and timing across devices via a 6-digit room seed without internet',
      'Official 8-Key UTME Navigation: Replicates the physical keyboard controls used in genuine JAMB CBT exam halls',
      'WAEC AI Theory Examiner: Evaluates mathematical proofs, deductions, and English essays with step-by-step score breakups'
    ],
    keyFeatures: [
      '100% Offline Capability via Service Worker & Cache API',
      'Zero-Server PRNG Multiplayer Challenge Room',
      'Authentic 8-Key UTME Exam Keyboard Controls',
      'Built-in Scientific On-Screen Calculator',
      'AI-Powered WAEC Theory & Essay Examiner',
      'Comprehensive Topic-by-Topic Performance Analytics'
    ],
    techStack: [
      { name: 'Progressive Web App (PWA)', role: 'Offline Installation & Caching' },
      { name: 'Service Workers & IndexedDB', role: 'Client-Side Question Bank' },
      { name: 'Vanilla JavaScript (ES6+)', role: 'Fast Deterministic PRNG & Logic' },
      { name: 'Modern Responsive CSS3', role: 'Accessible High-Contrast UI' }
    ],
    primaryColor: 'from-teal-500 via-emerald-600 to-green-700',
    accentColor: 'text-teal-400',
    iconName: 'GraduationCap',
    localDir: 'dddddd',
    runCommand: 'Open index.html or run npx serve .',
    links: {
      demo: 'https://cbt-jamb-waec-offline-jokg.vercel.app/',
      github: 'https://github.com/danlanre/CBT-JAMB-WAEC-OFFLINE'
    },
    metrics: [
      { label: 'Offline Availability', value: '100% Zero-Data' },
      { label: 'Question Bank', value: 'JAMB & WAEC' },
      { label: 'Input Mode', value: '8-Key UTME Hardware' }
    ]
  },
  {
    id: 'estatepayment',
    title: 'EstatePayment Pro',
    subtitle: 'Automated Residential Estate Dues & Utility Collection Portal',
    category: 'fullstack',
    categoryLabel: 'Fintech & Property',
    status: 'Production',
    featured: true,
    shortDescription: 'Modern automated property management and dues collection portal with virtual account reconciliations, resident directory, payment receipts, and automated arrears alerts.',
    fullDescription: 'EstatePayment Pro streamlines financial management for gated communities, residential associations, and estate managers. Residents receive automated billing reminders, pay security dues and facility management levies via instant virtual bank accounts or cards, and download verifiable tax and clearance receipts while management tracks cash flow in real-time.',
    problem: 'Manual cash collections, paper receipt verification, and fragmented WhatsApp payment proofs cause revenue leakages and accounting discrepancies in residential communities.',
    solution: 'Built an automated dues invoicing and collection platform with instant reconciliation webhooks, resident verification portals, and automated audit reporting.',
    architectureHighlights: [
      'Automated Virtual Account Generation: Assigns dedicated bank account numbers to each resident for 1-click bank transfer reconciliation',
      'Instant Webhook Ledger: Captures deposit notifications in real-time, marks invoices paid, and sends SMS clearance passes',
      'Multi-tier Admin Dashboard: Granular permissions for estate chairmen, accountants, and security guards at entry gates'
    ],
    keyFeatures: [
      'Automated Monthly Levy Invoicing & Virtual Accounts',
      'Real-time Bank Transfer Payment Reconciliations',
      'Digital Gate Passes & Resident Clearance Badges',
      'Audited Income, Arrears & Expenditure Dashboard',
      'Automated WhatsApp & SMS Receipt Distribution'
    ],
    techStack: [
      { name: 'Next.js 14', role: 'Server Components & Financial UI' },
      { name: 'Tailwind CSS', role: 'Modern Corporate Portal' },
      { name: 'Payment Webhooks', role: 'Instant Reconciliations' }
    ],
    primaryColor: 'from-blue-600 via-indigo-600 to-sky-600',
    accentColor: 'text-blue-400',
    iconName: 'ShoppingBag',
    localDir: 'developer',
    runCommand: 'npm run dev',
    links: {
      demo: 'https://estatepayment-5z0runzcp-queen-amina.vercel.app/',
      github: 'https://github.com/danlanre/Estatepayment'
    },
    metrics: [
      { label: 'Reconciliation', value: 'Instant Webhooks' },
      { label: 'Receipts', value: 'Automated PDF' },
      { label: 'Security Pass', value: 'QR Gate Pass' }
    ]
  },
  {
    id: 'pethealthscanner',
    title: 'PetHealth AI Scanner',
    subtitle: 'Computer Vision & AI Symptom Analysis for Veterinary Care',
    category: 'ai',
    categoryLabel: 'AI & Healthcare',
    status: 'Live System',
    featured: true,
    shortDescription: 'AI-assisted veterinary diagnostic tool that analyzes pet symptoms, skin lesions, and behavioral changes using multimodal computer vision and structured triage guidance.',
    fullDescription: 'PetHealth AI Scanner empowers pet owners and animal caregivers to detect early warning signs of illness before conditions worsen. Using high-resolution image analysis and structured conversational intake, the AI evaluates photographs of skin rashes, eyes, ears, or gait abnormalities, providing triage urgency scores and immediate home-care guidance.',
    problem: 'Pet owners frequently delay necessary veterinary intervention due to uncertainty over symptom severity, leading to preventable health complications.',
    solution: 'Engineered a multimodal diagnostic assistant that combines image classification models with clinical symptom trees to deliver rapid, responsible triage assessments.',
    architectureHighlights: [
      'Multimodal Visual Analysis: Evaluates dermatology photos and physical abnormalities with bounding box detection',
      'Clinical Triage Engine: Assesses urgency level (Routine, Urgent, Emergency) with evidence-backed reasoning',
      'Localized Vet Directory: Connects users with nearby accredited clinics based on geographic proximity'
    ],
    keyFeatures: [
      'Instant Photo-Based Skin & Eye Symptom Screening',
      'Structured Clinical Intake Questionnaire',
      'Emergency vs Home-Care Triage Classification',
      'Medical History & Vaccination Timeline Tracker'
    ],
    techStack: [
      { name: 'React 18', role: 'Diagnostic Frontend' },
      { name: 'Google Gemini Vision', role: 'Multimodal Image Analysis' },
      { name: 'Tailwind CSS', role: 'Responsive Medical UI' }
    ],
    primaryColor: 'from-amber-500 via-orange-600 to-rose-600',
    accentColor: 'text-amber-400',
    iconName: 'ShieldCheck',
    localDir: 'generating video app',
    runCommand: 'npm run dev',
    links: {
      demo: 'https://pethealthscanner-1w7g4dh8t-queen-amina.vercel.app/',
      github: 'https://github.com/danlanre/pethealthscanner'
    },
    metrics: [
      { label: 'Triage Accuracy', value: '94% Consistency' },
      { label: 'Response Time', value: '<2.5s Analysis' },
      { label: 'Model', value: 'Multimodal GenAI' }
    ]
  },
  {
    id: 'clusterdrop',
    title: 'ClusterDrop Asset Distribution',
    subtitle: 'High-Throughput Cryptographic File & Asset Sharing Network',
    category: 'fullstack',
    categoryLabel: 'Cloud & Systems',
    status: 'Production',
    featured: false,
    shortDescription: 'Decentralized high-speed media distribution protocol providing encrypted peer transfers, chunked parallel streaming, and zero-knowledge download keys.',
    fullDescription: 'ClusterDrop enables users to distribute massive files (video archives, dataset bundles, software binaries) across clustered edge nodes without single points of failure. Utilizing client-side encryption and chunked parallel transfers, data is protected before ever leaving the browser.',
    problem: 'Centralized cloud storage platforms enforce bandwidth quotas, track user content, and fail when transferring massive files over unreliable network connections.',
    solution: 'Constructed an edge-accelerated asset distribution network with end-to-end chunking, resumed uploads, and self-destructing access links.',
    architectureHighlights: [
      'Chunked Multi-part Transfer: Slices large files into parallel streams with automated resume on connection loss',
      'Client-Side AES-GCM Encryption: Ensures even hosting servers have zero knowledge of file contents',
      'High-Speed Edge Caching: Minimizes download latency across distributed geographical nodes'
    ],
    keyFeatures: [
      'End-to-End Encrypted File Transfer',
      'Parallel Multi-threaded Chunk Uploads',
      'Time-based Expiring Download Links',
      'Zero Cloud Footprint Option'
    ],
    techStack: [
      { name: 'Next.js 14', role: 'Edge Computing Framework' },
      { name: 'Web Crypto API', role: 'Client-side AES-GCM' },
      { name: 'Tailwind CSS', role: 'Minimalist Dark UI' }
    ],
    primaryColor: 'from-cyan-600 via-blue-600 to-indigo-700',
    accentColor: 'text-cyan-400',
    iconName: 'ShieldAlert',
    localDir: 'developer',
    runCommand: 'npm run dev',
    links: {
      demo: 'https://clusterdrop-g3qhdgm1r-queen-amina.vercel.app/',
      github: 'https://github.com/danlanre/clusterdrop'
    },
    metrics: [
      { label: 'Security', value: 'AES-GCM 256-bit' },
      { label: 'Transfer Speed', value: 'Max Line Rate' },
      { label: 'Privacy', value: 'Zero-Knowledge' }
    ]
  },
  {
    id: 'passportpro',
    title: 'PassPortPro Studio',
    subtitle: 'AI Passport Photo Suite & In-Browser Photoshop Retouch Suite',
    category: 'tools-games',
    categoryLabel: 'Computer Vision & Tools',
    status: 'Live System',
    featured: false,
    shortDescription: 'High-performance in-browser photo studio with biometric alignment guides, Photoshop-grade retouching brushes (Spot Healing, Clone Stamp, Dodge & Burn, Skin Smoothing), and formal suit wardrobe overlay.',
    fullDescription: 'PassPortPro is an advanced web-based graphic editor built purely with HTML5 Canvas and vanilla JavaScript for maximum speed and zero dependencies. Designed for ID card and international passport compliance, it provides real-time head/chin biometric alignment overlays, pixel-manipulation retouching tools (Spot Healing with surrounding patch synthesis, Clone Stamp, Dodge & Burn, Skin Softener), tone curves, and an instant formal attire wardrobe switcher.',
    problem: 'Professional passport photo studios and standalone graphic software are expensive, require manual desktop installation, and often lack country-specific biometric validation guidelines (ICAO / US / UK / Schengen).',
    solution: 'Built a lightweight, zero-latency browser studio with instant canvas pixel processing algorithms that run entirely client-side with complete privacy and zero image upload to servers.',
    architectureHighlights: [
      'Raw Canvas 2D Pixel Manipulation: Custom written algorithms for spatial patch blending (Spot Healing) and frequency-domain skin smoothing',
      'Interactive Biometric Overlay: Strict ICAO/ISO 19794-5 guidelines with eye-line, crown-to-chin proportions, and background contrast checks',
      'Wardrobe Transformer: Layered matrix transformation allowing users to drag, resize, and match formal suits and blazers onto portrait photos',
      'Print Sheet Layout Engine: Generates print-ready 4x6 inch and A4 photo sheets formatted with multiple passport cutouts'
    ],
    keyFeatures: [
      'Pixel-level Spot Healing & Clone Stamp Brushes',
      'Dodge, Burn & Frequency Separation Skin Smoothing',
      'Standard Biometric Head & Eye Alignment Guides',
      'Formal Suit & Attire Wardrobe Overlay Suite',
      'RGB Curves, Levels & Contrast Retouching',
      'One-click 4x6 Print Sheet Multi-cutout Export'
    ],
    techStack: [
      { name: 'HTML5 Canvas API', role: 'Real-time High-FPS Pixel Manipulation' },
      { name: 'Vanilla JavaScript', role: 'Zero-Dependency High Performance' },
      { name: 'Modular CSS3', role: 'Photoshop-style Studio UI' }
    ],
    primaryColor: 'from-sky-500 via-blue-600 to-indigo-700',
    accentColor: 'text-sky-400',
    iconName: 'Camera',
    localDir: 'photo',
    runCommand: 'Open photo/index.html in your browser',
    metrics: [
      { label: 'Client Processing', value: '100% On-Device' },
      { label: 'Image Privacy', value: 'Zero Server Upload' },
      { label: 'Standards Supported', value: 'ICAO / US / Schengen' }
    ]
  },
  {
    id: 'soundvibe',
    title: 'SoundVibe & SmartDJ',
    subtitle: 'AI Music Discovery, Waveform Streaming & Community Platform',
    category: 'fullstack',
    categoryLabel: 'Audio & Streaming',
    status: 'Prototype',
    featured: false,
    shortDescription: 'Modern music streaming and social audio discovery application featuring an interactive waveform player, track matchmaker, and an embedded Smart DJ conversational assistant.',
    fullDescription: 'SoundVibe combines high-fidelity music streaming with interactive social discovery and artificial intelligence. Listeners can upload original tracks, visualize dynamic audio waveforms, explore new genres using the Smart DJ conversational AI chatbot, and find kindred music producers through an automated sonic matchmaker algorithm.',
    problem: 'Independent music creators struggle to get discovered on saturated legacy platforms that prioritize algorithmic major-label playlists over community connection and intelligent curation.',
    solution: 'Constructed an open audio ecosystem with an integrated Smart DJ AI, dynamic audio streaming engine, and community matchmaking tools.',
    architectureHighlights: [
      'Custom Audio Player Hook: Built-in state management for buffering, scrubbing, volume control, track queuing, and continuous playback',
      'Smart DJ AI Assistant: Conversational agent that parses listener mood, genre preferences, and recommends tailored track transitions',
      'Track Matchmaker: Compares acoustic metadata, BPM, and tags to connect producers and vocalists for collaborative remixing'
    ],
    keyFeatures: [
      'Interactive Waveform Playback & Scrubbing Controller',
      'Smart DJ AI Conversational Chat Assistant',
      'Track Matchmaker for Producer-Vocalist Collaboration',
      'Multi-genre Catalog with Instant Tag Filtering',
      'Creator Audio Upload & Metadata Tagging Modal'
    ],
    techStack: [
      { name: 'React 18', role: 'Audio Player State & Frontend' },
      { name: 'Node.js & Express', role: 'Audio Streaming Backend' },
      { name: 'Tailwind CSS', role: 'Dark Neon Audio Interface' },
      { name: 'Lucide Icons', role: 'Audio & Playback Controls' }
    ],
    primaryColor: 'from-pink-500 via-rose-600 to-purple-600',
    accentColor: 'text-pink-400',
    iconName: 'Music',
    localDir: 'audio/frontend',
    runCommand: 'npm run dev',
    metrics: [
      { label: 'Audio Latency', value: '<50ms' },
      { label: 'Audio Formats', value: 'MP3, WAV, FLAC' },
      { label: 'AI Assistance', value: 'Smart DJ Chat' }
    ]
  },
  {
    id: 'subflow',
    title: 'SubFlow Studio',
    subtitle: 'AI Audio-to-Video Subtitle Sync & Captioning Platform',
    category: 'ai',
    categoryLabel: 'Video & Audio AI',
    status: 'Prototype',
    featured: false,
    shortDescription: 'Precision subtitle and caption generator that transcribes speech from videos, generates synchronized SRT/VTT timelines, and renders live animated caption overlays.',
    fullDescription: 'SubFlow Studio simplifies video accessibility and content repurposing. Creators upload raw video or audio files, which are processed through automated speech-to-text models to generate timestamped cues. Creators can visually scrub through the timeline, fine-tune subtitle durations down to milliseconds, customize font stylings, and burn subtitles directly into video exports.',
    problem: 'Creating accurate, frame-perfect subtitles for video content is tedious and manual, while most automated tools output out-of-sync or uneditable closed captions.',
    solution: 'Engineered an interactive timeline editor paired with speech recognition APIs and Web Audio timeline scrubbers for instant subtitle editing and export.',
    architectureHighlights: [
      'Web Audio Synchronization: Connects video timecode updates directly with subtitle text highlighting at 60 FPS',
      'Universal Format Export: Generates compliant SRT, WebVTT, and JSON caption data with millisecond timestamps',
      'Kinetic Caption Styling: Offers preset animated subtitle themes (MrBeast-style, minimalist cinema, high-contrast karaoke)'
    ],
    keyFeatures: [
      'Automated Speech-to-Text Transcription',
      'Interactive Visual Waveform & Timeline Scrubber',
      'Millisecond Precision Subtitle Cues Editing',
      'Instant SRT and VTT File Export',
      'Custom Video Overlay Font & Color Theming'
    ],
    techStack: [
      { name: 'Next.js 14', role: 'Full-Stack Application Framework' },
      { name: 'React 18', role: 'Interactive Timeline Components' },
      { name: 'Web Audio API', role: 'Audio Analysis & Playback Sync' },
      { name: 'Tailwind CSS', role: 'Studio Video Editor UI' }
    ],
    primaryColor: 'from-amber-500 via-orange-600 to-red-600',
    accentColor: 'text-amber-400',
    iconName: 'Subtitles',
    localDir: 'game/subtitle-app/client',
    runCommand: 'npm run dev',
    metrics: [
      { label: 'Accuracy', value: '98%+ Speech Sync' },
      { label: 'Timing Precision', value: '1ms Granularity' },
      { label: 'Formats', value: 'SRT, VTT, JSON' }
    ]
  },
  {
    id: 'survival-protocol',
    title: 'Survival Protocol',
    subtitle: 'Godot 4 3D/2D Action Survival Shooter',
    category: 'tools-games',
    categoryLabel: 'Game Development',
    status: 'Prototype',
    featured: false,
    shortDescription: 'Top-down / 3D arena survival shooter built in Godot Engine featuring custom enemy AI pathfinding, finite state machines, dynamic ammo and flashlight battery economy mechanics.',
    fullDescription: 'Survival Protocol is a high-octane survival game developed in Godot Engine 4. Players navigate an enclosed hostile facility in darkness, managing a rapidly depleting flashlight battery and limited ammunition while fending off swarming procedural enemy hordes driven by custom GDScript AI behavioral trees.',
    problem: 'Creating compelling game feel and tense atmosphere requires tight physics coordination, responsive player controls, and intelligent enemy navigation without FPS dips.',
    solution: 'Programmed clean GDScript modular components for entity health, dynamic pickup systems (batteries and ammo), raycast line-of-sight enemy targeting, and physics interpolation.',
    architectureHighlights: [
      'GDScript Finite State Machines (FSM): Controls enemy states (Patrol, Alert, Chase, Attack, Flee) with clean modular code',
      'Dynamic Inventory & Vitality Mechanics: Flashlight drain rate and reload timings calibrated for intense survival tension',
      'Optimized 2D/3D Node Hierarchy: Node instancing and scene decoupling for seamless weapon and enemy spawning'
    ],
    keyFeatures: [
      'Custom GDScript Enemy AI with Pathfinding & Line-of-Sight Detection',
      'Dynamic Resource Economy (Ammo Pickups & Battery Life Management)',
      'Smooth Physics-based Kinematic Player Controller',
      'Atmospheric 2D/3D Dynamic Lighting & Shadow Occlusion',
      'Modular Wave Spawner & Score Progression System'
    ],
    techStack: [
      { name: 'Godot 4.x Engine', role: 'Game Engine & Physics Simulation' },
      { name: 'GDScript', role: 'Enemy AI, Pickups & Gameplay Mechanics' },
      { name: 'Godot Shaders', role: 'Dynamic Lighting & Field of View' }
    ],
    primaryColor: 'from-red-600 via-rose-700 to-zinc-900',
    accentColor: 'text-red-400',
    iconName: 'Gamepad2',
    localDir: 'game',
    runCommand: 'Open project.godot in Godot Engine 4',
    metrics: [
      { label: 'Engine', value: 'Godot 4.x' },
      { label: 'Frame Rate', value: 'Smooth 60 FPS' },
      { label: 'AI System', value: 'FSM Behavioral Trees' }
    ]
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'All Projects', count: 11 },
  { id: 'ai', label: 'AI & Machine Learning', count: 4 },
  { id: 'fullstack', label: 'Full-Stack Platforms', count: 4 },
  { id: 'offline', label: 'Offline & PWA', count: 1 },
  { id: 'tools-games', label: 'Tools & Game Dev', count: 2 },
] as const;
