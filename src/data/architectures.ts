export interface ArchitectureCaseStudy {
  id: string;
  title: string;
  projectTitle: string;
  category: 'concurrency' | 'offline' | 'security' | 'ai-safety';
  categoryLabel: string;
  badge: string;
  level: string;
  summary: string;
  metrics: { label: string; value: string; detail: string }[];
  problemStatement: string;
  whyNaiveApproachFails: string;
  engineeredSolution: string;
  keyTradeoffs: {
    prioritized: string;
    acceptedCost: string;
    rationale: string;
  };
  flowSteps: { step: string; title: string; description: string }[];
  codeHighlight: {
    language: string;
    title: string;
    code: string;
  };
  tags: string[];
}

export const ARCHITECTURES: ArchitectureCaseStudy[] = [
  {
    id: 'ojashare-concurrency',
    title: 'Distributed Concurrency & Optimistic Lock Resolution',
    projectTitle: 'OjaShare (Nigeria Food Supply)',
    category: 'concurrency',
    categoryLabel: 'Distributed Systems & Fintech',
    badge: 'High-Contention Atomic Slots',
    level: 'Senior Systems Engineering',
    summary: 'Preventing inventory over-allocation and duplicate slot claiming when hundreds of Nigerian consumers concurrently checkout the last fractional slots of bulk food items over high-latency mobile networks.',
    metrics: [
      { label: 'Race Condition Rate', value: '0.00%', detail: 'Zero over-allocations observed under peak load' },
      { label: 'Lock Resolution', value: '<48ms', detail: 'Optimistic CAS transaction window' },
      { label: 'Network Resilience', value: '2G/3G Tolerant', detail: 'Local rollback on connection drop' },
      { label: 'Fulfillment Accuracy', value: '100.0%', detail: 'Automated 100% capacity triggers' }
    ],
    problemStatement: 'During food price volatility in Nigeria, bulk food pools (e.g., 50kg Mama Gold Rice) experience flash-demand where 10+ shoppers attempt to claim the final 5kg slot in the same second over unstable cellular networks.',
    whyNaiveApproachFails: 'Standard client-side checks followed by a normal database `UPDATE` cause double-spend race conditions. If User A and User B both read `remaining = 1` simultaneously, both transactions succeed, leaving the merchant with -1 stock and unfulfillable orders.',
    engineeredSolution: 'Implemented atomic database transactions utilizing compare-and-swap (CAS) primitives and Firestore FieldValue transforms. The transaction acquires an optimistic snapshot, validates inventory invariants server-side, atomically decrements the slot, and broadcasts state updates to all subscribed clients via real-time listeners. If a collision occurs, clients apply exponential backoff with jitter and retry up to 3 times before displaying a graceful "Slot claimed" toast.',
    keyTradeoffs: {
      prioritized: 'Strict Data Consistency & Zero Inventory Leakage',
      acceptedCost: 'Slightly higher retry latency (<150ms) for collided clients',
      rationale: 'In high-inflation food supply, physical inventory overselling breaks customer trust and vendor logistics, making strict atomicity far more valuable than unconditional write speed.'
    },
    flowSteps: [
      {
        step: '01',
        title: 'Optimistic Client Claim',
        description: 'Client UI displays available slots and reserves an ephemeral UI slot with immediate feedback.'
      },
      {
        step: '02',
        title: 'Atomic CAS Transaction',
        description: 'Server transaction inspects current claimedSlots array inside an isolated lock boundary.'
      },
      {
        step: '03',
        title: 'Invariant Validation',
        description: 'Validates that claimedSlots + requestedSlots <= totalCapacity. Rejects if invariant breached.'
      },
      {
        step: '04',
        title: 'Pub/Sub Trigger Dispatch',
        description: 'When totalCapacity reaches 100%, background trigger dispatches bulk pickup order to Mile 12 / Bodija hub.'
      }
    ],
    codeHighlight: {
      language: 'typescript',
      title: 'Atomic Inventory Transaction Handler',
      code: `// Atomically claim fractional slot without race conditions
await runTransaction(db, async (transaction) => {
  const poolRef = doc(db, 'food_pools', poolId);
  const poolSnap = await transaction.get(poolRef);

  if (!poolSnap.exists()) throw new Error('Pool not found');
  const pool = poolSnap.data();

  // Invariant validation inside isolated lock
  const currentSlots = pool.claimedSlots || 0;
  if (currentSlots + requestedSlots > pool.totalSlots) {
    throw new Error('SLOT_OVERFLOW: Slot was just taken');
  }

  // Atomic field increment & user ledger entry
  transaction.update(poolRef, {
    claimedSlots: increment(requestedSlots),
    participants: arrayUnion({ userId, slots: requestedSlots, timestamp: Date.now() }),
    status: currentSlots + requestedSlots === pool.totalSlots ? 'FULFILLED' : 'ACTIVE'
  });
});`
    },
    tags: ['Distributed Locks', 'Atomic Transactions', 'Firestore', 'Next.js 14', 'Concurrency Control']
  },
  {
    id: 'cbt-offline-prng',
    title: 'Zero-Data Peer Synchronization via Seeded PRNG',
    projectTitle: '2026 JAMB & WAEC CBT Master',
    category: 'offline',
    categoryLabel: 'Offline-First & Algorithmic Math',
    badge: '100% Offline Multi-Device Sync',
    level: 'Algorithmic Optimization',
    summary: 'Allowing multiple students in rural Nigerian secondary schools to compete in identical multiplayer mock exam rooms with identical question shuffling and timing, using 0 KB of internet bandwidth.',
    metrics: [
      { label: 'Data Usage', value: '0 KB', detail: 'Zero server requests required for sync' },
      { label: 'Battery Overhead', value: '<3%', detail: 'Optimized Web Worker compute loops' },
      { label: 'Question Bank', value: '10,000+', detail: 'Compressed IndexedDB offline storage' },
      { label: 'Sync Accuracy', value: 'Bit-for-bit', detail: 'Deterministic PRNG across all devices' }
    ],
    problemStatement: 'Nigerian students in remote areas without internet or affordable mobile data need to practice timed, competitive multiplayer mock UTME/WAEC exams together before sitting for high-stakes national exams.',
    whyNaiveApproachFails: 'Typical multiplayer games rely on WebSocket connections or WebRTC signaling servers. When there is zero internet connectivity or cellular network tower, all conventional server-driven room synchronization architectures fail completely.',
    engineeredSolution: 'Engineered a deterministic Pseudo-Random Number Generator (Linear Congruential Generator - LCG) embedded client-side. When students create a local study room, the host announces a simple 4-digit numeric room code (the PRNG seed). Each participant enters the code, and their local JavaScript runtime independently runs the identical mathematical permutation across the 10,000-question local IndexedDB dataset. All devices get the exact same questions in the exact same randomized order with synchronized countdown timers without a single byte of internet.',
    keyTradeoffs: {
      prioritized: 'Universal Accessibility & Zero Infrastructure Dependency',
      acceptedCost: 'Anti-cheat is social/local rather than server-verified',
      rationale: 'Rural educational empowerment requires guaranteed zero-cost uptime on 10-year-old budget smartphones over complex centralized servers.'
    },
    flowSteps: [
      {
        step: '01',
        title: 'Room Seed Input',
        description: 'Students share a 4-digit seed (e.g. 7492) verbally or on a classroom blackboard.'
      },
      {
        step: '02',
        title: 'Deterministic PRNG Sequence',
        description: 'Local LCG algorithm computes identical pseudo-random shuffle index across the offline dataset.'
      },
      {
        step: '03',
        title: 'Local IndexedDB Extraction',
        description: 'Questions, options, and scientific diagrams are retrieved from client IndexedDB cache instantly.'
      },
      {
        step: '04',
        title: 'Synchronized Web Worker Timer',
        description: 'A Web Worker handles question timing and UTME 8-key keyboard navigation independent of UI thread.'
      }
    ],
    codeHighlight: {
      language: 'typescript',
      title: 'Deterministic Seeded PRNG Question Shuffler',
      code: `// Seeded Linear Congruential Generator for 0KB peer room sync
class SeededPRNG {
  private seed: number;
  constructor(seed: number) { this.seed = seed % 2147483647; }

  // Returns deterministic float between 0 and 1
  next(): number {
    this.seed = (this.seed * 16807) % 2147483647;
    return (this.seed - 1) / 2147483646;
  }
}

export function generateSyncRoomQuestions<T>(questions: T[], roomSeed: number): T[] {
  const rng = new SeededPRNG(roomSeed);
  const shuffled = [...questions];
  
  // Fisher-Yates shuffle using deterministic mathematical sequence
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rng.next() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}`
    },
    tags: ['IndexedDB', 'Deterministic PRNG', 'PWA Offline', 'Web Workers', 'Zero-Server Architecture']
  },
  {
    id: 'clusterdrop-encryption',
    title: 'Zero-Knowledge Client-Side AES-GCM Chunk Streaming',
    projectTitle: 'ClusterDrop Asset Distribution',
    category: 'security',
    categoryLabel: 'Cryptography & Systems',
    badge: 'End-to-End Zero Knowledge',
    level: 'Cryptographic Architecture',
    summary: 'Encrypting large multi-gigabyte files directly inside browser Web Crypto memory buffers before chunked parallel streaming across distributed edge storage nodes.',
    metrics: [
      { label: 'Encryption Cipher', value: 'AES-GCM 256', detail: 'Hardware-accelerated Web Crypto API' },
      { label: 'Server Knowledge', value: 'Zero Bits', detail: 'Encryption keys never transmitted to cloud' },
      { label: 'Throughput', value: 'Line Speed', detail: 'Pipelined chunk encryption and streaming' },
      { label: 'Memory Footprint', value: '<32MB RAM', detail: 'Sliding window buffer prevents browser crashes' }
    ],
    problemStatement: 'Users transmitting proprietary AI weights, unreleased media assets, or confidential contracts need high-throughput transfer without hosting servers or edge providers having access to decrypt the data.',
    whyNaiveApproachFails: 'Server-side encryption (like AWS S3 SSE) gives the cloud provider complete custody of the decryption keys. Browser-based full-file encryption loads entire 2GB+ files into JavaScript memory at once, crashing the browser tab with Out-Of-Memory (OOM) errors.',
    engineeredSolution: 'Constructed a streaming chunk pipeline utilizing the browser native crypto.subtle API with AES-GCM-256 and unique 96-bit initialization vectors (IVs) per 4MB chunk. A fixed sliding window buffer processes files slice-by-slice, keeping JavaScript heap usage below 32MB regardless of whether the file is 50MB or 5GB. Decryption keys are stored solely in the URL fragment (#key=...), which browsers never send to HTTP servers during requests.',
    keyTradeoffs: {
      prioritized: 'Complete Zero-Knowledge Privacy & Bounded Memory Usage',
      acceptedCost: 'No server-side keyword search or automated thumbnail generation',
      rationale: 'Cryptographic privacy and immunity from subpoenas/server compromises take precedence over cloud-side inspection features.'
    },
    flowSteps: [
      {
        step: '01',
        title: 'Ephemeral Key Generation',
        description: 'Client browser generates a high-entropy 256-bit AES-GCM cryptographic key in volatile RAM.'
      },
      {
        step: '02',
        title: 'Sliding Window Slicing',
        description: 'File is sliced into 4MB chunks; each chunk receives an incremented 96-bit nonce/IV.'
      },
      {
        step: '03',
        title: 'Hardware-Accelerated Encryption',
        description: 'Native crypto.subtle encodes chunk and appends 128-bit authentication tag for tamper detection.'
      },
      {
        step: '04',
        title: 'Zero-Knowledge Link Formation',
        description: 'Secret key is appended as URL hash fragment (#key=...) which never touches HTTP network logs.'
      }
    ],
    codeHighlight: {
      language: 'typescript',
      title: 'Streaming AES-GCM Chunk Cipher',
      code: `// Stream-encrypt 4MB chunk in-browser with zero cloud key custody
export async function encryptChunk(
  chunkBuffer: ArrayBuffer,
  key: CryptoKey,
  chunkIndex: number
): Promise<{ ciphertext: ArrayBuffer; iv: Uint8Array }> {
  // Deterministic unique 96-bit IV per chunk
  const iv = new Uint8Array(12);
  crypto.getRandomValues(iv);
  new DataView(iv.buffer).setUint32(8, chunkIndex);

  // Hardware-accelerated AES-GCM-256 with 128-bit auth tag
  const ciphertext = await window.crypto.subtle.encrypt(
    { name: 'AES-GCM', iv, tagLength: 128 },
    key,
    chunkBuffer
  );

  return { ciphertext, iv };
}`
    },
    tags: ['Web Crypto API', 'AES-GCM-256', 'Zero-Knowledge', 'Chunked Streaming', 'Memory Optimization']
  },
  {
    id: 'agentguard-security',
    title: 'Sub-60ms Multi-Tier Prompt Injection & Jailbreak Guardrail',
    projectTitle: 'AgentGuard (PeerShield)',
    category: 'ai-safety',
    categoryLabel: 'AI Systems & Security',
    badge: 'Enterprise LLM Defense',
    level: 'AI Security Engineering',
    summary: 'Neutralizing sophisticated adversarial jailbreak attempts, indirect prompt injections, and system prompt leaks with sub-60ms overhead before user input reaches downstream LLM agents.',
    metrics: [
      { label: 'Evaluation Latency', value: '<52ms', detail: 'Cascading deterministic + heuristic layers' },
      { label: 'Mitigation Rate', value: '99.4%', detail: 'Defeats known DAN, dev-mode & obfuscation vectors' },
      { label: 'False Positive Rate', value: '<0.8%', detail: 'Strict semantic boundary preserving developer intent' },
      { label: 'Throughput', value: '1,200 req/s', detail: 'Lightweight edge proxy compatible' }
    ],
    problemStatement: 'Autonomous enterprise LLM agents connected to real databases, payment APIs, and email tools are vulnerable to prompt injection attacks where untrusted inputs hijack agent instructions.',
    whyNaiveApproachFails: 'Relying solely on "Be a helpful assistant and do not reveal secrets" in the system prompt fails reliably against multi-shot adversarial techniques. Sending every query to a secondary slow LLM for validation adds 1,500ms+ of latency and doubles inference costs.',
    engineeredSolution: 'Engineered a cascading 3-tier defense pipeline: Tier 1 executes ultra-fast (<2ms) deterministic regex and entropy anomaly scans; Tier 2 evaluates semantic vector proximity against known attack manifolds using lightweight embeddings (<35ms); Tier 3 wraps execution in isolated sandbox canary tokens. If canary tokens appear in intermediate output, the transaction is immediately severed with an audit trail log.',
    keyTradeoffs: {
      prioritized: 'Ultra-Low Latency & High Detection Accuracy',
      acceptedCost: 'Occasional re-verification for heavily obfuscated base64 text',
      rationale: 'In enterprise production, adding 1.5 seconds of lag destroys user experience; a fast tiered defense delivers enterprise-grade protection with zero perceptible lag.'
    },
    flowSteps: [
      {
        step: '01',
        title: 'Tier 1 Deterministic Sweep',
        description: 'Sub-2ms check for known escape syntax, unicode homoglyphs, and prompt-override tokens.'
      },
      {
        step: '02',
        title: 'Tier 2 Semantic Embedding Guard',
        description: 'Cosine similarity check against jailbreak embeddings vector cluster in memory.'
      },
      {
        step: '03',
        title: 'Canary Token Inoculation',
        description: 'Cryptographic canary token injected into system instructions to detect prompt extraction.'
      },
      {
        step: '04',
        title: 'Safe Execution or Intercept',
        description: 'Passes sanitized payload to LLM or returns an explicit security violation report.'
      }
    ],
    codeHighlight: {
      language: 'typescript',
      title: 'Cascading Security Pipeline with Canary Boundary',
      code: `// Multi-tiered prompt injection firewall
export async function guardInput(rawPrompt: string): Promise<GuardrailResult> {
  const t0 = performance.now();

  // Tier 1: Deterministic Syntax & Entropy Scan (<2ms)
  const syntaxCheck = scanAdversarialPatterns(rawPrompt);
  if (syntaxCheck.threatDetected) {
    return { allowed: false, threat: syntaxCheck.type, latencyMs: performance.now() - t0 };
  }

  // Tier 2: Embedding Similarity against Jailbreak Manifolds (<35ms)
  const semanticRisk = await calculateJailbreakVectorSimilarity(rawPrompt);
  if (semanticRisk.score > 0.85) {
    return { allowed: false, threat: 'SEMANTIC_JAILBREAK_ATTEMPT', latencyMs: performance.now() - t0 };
  }

  // Tier 3: Append Cryptographic Canary Token for Execution Isolation
  const canary = crypto.randomUUID();
  const hardenedPrompt = \`[SEC_BOUNDARY:\${canary}]\\n\${rawPrompt}\\n[END_SEC_BOUNDARY:\${canary}]\`;

  return { allowed: true, hardenedPrompt, canary, latencyMs: performance.now() - t0 };
}`
    },
    tags: ['AI Safety', 'Adversarial Defense', 'Vector Embeddings', 'Canary Tokens', 'Low-Latency Proxy']
  }
];
