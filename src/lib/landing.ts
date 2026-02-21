export const landingCopy = {
  header: {
    links: [
      { label: "Solution", href: "#solution" },
      { label: "Features", href: "#features" },
      { label: "How it Works", href: "#how-it-works" },
      { label: "Security", href: "#security" },
    ],
    primaryCTA: "Join the Waitlist",
    secondaryCTA: "Book a Demo",
  },
  hero: {
    badge: "Enterprise RAG for Legal Teams",
    headline: "Master complexity. Find answers faster.",
    subhead: "Starplum helps legal teams instantly locate information across case files and legal documents using advanced hybrid search and proprietary legal-grade AI. Get precise answers with citations back to the source text.",
    primaryCTA: "Request Early Access",
    secondaryCTA: "See How It Works",
    trustLine: "Securely architected on private, enterprise-grade cloud infrastructure.",
    trustedBy: ["Thorne Law", "Sterling & Assoc", "Global Legal", "Nexus IPC", "Vertex Legal"],
  },
  metrics: [
    { value: "85%", label: "Time Saved", description: "Average reduction in manual document review time for litigators." },
    { value: "10,000+", label: "Documents", description: "Engineers can index thousands of complex legal files in seconds." },
    { value: "100%", label: "Accuracy", description: "AI-generated answers are strictly grounded in your provided documents." },
  ],
  socialProof: [
    { metric: "125k+", description: "Documents analyzed daily across our global user base." },
    { metric: "SOC-2", description: "Certified infrastructure with enterprise-grade data isolation." },
    { metric: "99.9%", description: "Uptime guarantee for mission-critical legal research." }
  ],
  templates: [
    {
      title: "Master Case File Setup",
      variant: "Litigation",
      clauses: 48,
      lastUpdated: "2 days ago",
      preview: "Standard matter-based organization including discovery files, party depositions, and evidence logs. Optimized for cross-document fact checking."
    },
    {
      title: "M&A Due Diligence Portfolio",
      variant: "Corporate",
      clauses: 124,
      lastUpdated: "1 week ago",
      preview: "Complex multi-party disclosure review including non-standard indemnification detection and change-of-control clause mapping."
    },
    {
      title: "Audit & Compliance Review",
      variant: "Governance",
      clauses: 72,
      lastUpdated: "2 weeks ago",
      preview: "Regulatory mapping template for tracking policy adherence across thousands of internal governance documents and external mandates."
    }
  ],
  testimonials: [
    { quote: "Starplum has completely transformed our discovery process. What used to take days now takes minutes.", author: "Jane Thorne", role: "Managing Partner", firm: "Thorne Law Group" },
    { quote: "The precision and traceability of the answers is unlike anything we've seen in legal tech.", author: "S. Sterling", role: "Senior Counsel", firm: "Sterling & Assoc" },
    { quote: "Finally, an AI that understands legal nuance and provides verifiable citations.", author: "Michael Nexus", role: "Director of Legal Ops", firm: "Nexus Global" },
  ],
  problem: {
    title: "Document overload is the enemy of precision.",
    description: "Standard keyword search fails when complexity scales. Misplaced clauses, missed details in discovery, and hours spent manual-reviewing thousands of pages lead to risk and burnout.",
    points: [
      {
        title: "The Keyword Gap",
        description: "Traditional search doesn't understand legal nuance. If you don't use the exact word, you miss the critical evidence."
      },
      {
        title: "The Review Bottleneck",
        description: "Manually skimming thousands of pages in discovery is slow, expensive, and inevitably leads to human error."
      },
      {
        title: "The Information Silo",
        description: "Critical facts shouldn't be trapped in isolated PDFs. Fragmented data leads to incomplete case strategy."
      },
    ],
  },
  solution: {
    title: "Intelligence backed by evidence.",
    description: "Starplum uses Retrieval-Augmented Generation (RAG) to ground AI answers in your specific document sets. We don't just generate text; we retrieve the exact passages you need to verify.",
    howRAGWorks: [
      { step: "Retrieve", detail: "Our search engine finds the most relevant passages via hybrid keyword and vector search." },
      { step: "Generate", detail: "Starplum synthesizes a clear answer using only the retrieved evidence." },
      { step: "Cite", detail: "Every sentence is linked to a source document, page, and paragraph for instant audit." },
    ],
  },
  features: [
    {
      title: "AI-Powered Hybrid Search",
      description: "Combines keyword precision with vector semantic understanding to find meaning, not just words.",
      icon: "search",
    },
    {
      title: "Cited Answers",
      description: "Receive synthesized summaries where every claim links directly to a source document segment.",
      icon: "cite",
    },
    {
      title: "Automated Indexing",
      description: "Documents are automatically chunked, tagged, and indexed by matter, client, or jurisdiction.",
      icon: "index",
    },
    {
      title: "Privileged Data Isolation",
      description: "Strict RBAC and matter-level isolation ensures only authorized users can query sensitive files.",
      icon: "lock",
    },
    {
      title: "Comparison & Detection",
      description: "Identify subtle deviations across document versions and detect standard vs. non-standard clauses.",
      icon: "compare",
    },
    {
      title: "Audit-Grade Logs",
      description: "Complete traceability of every question asked and every document accessed for compliance.",
      icon: "audit",
    },
  ],
  howItWorks: [
    {
      title: "Upload & Organize",
      description: "Drop your case files or matter folders. Starplum structures them into a queryable intelligence base.",
    },
    {
      title: "Index & Retrieve",
      description: "Our hybrid search engine continuously indexes content, making even 10,000+ page sets searchable in seconds.",
    },
    {
      title: "Ask & Verify",
      description: "Ask natural legal questions. Review the cited answer and click through to the source PDF to verify facts.",
    },
  ],
  useCases: [
    "Due Diligence and M&A Contract Review",
    "Litigation Discovery and Pre-trial Research",
    "Regulatory Compliance and Policy Audits",
    "Precedent Consolidation and Knowledge Management",
  ],
  benefits: [
    "Save hours of manual document review",
    "Eliminate search blind spots in large case files",
    "Maintain 100% traceability for every AI-generated claim",
    "Enhance client service with faster turnarounds",
  ],
  security: {
    title: "Your data never leaves your control.",
    description: "Starplum is built for the highest confidentiality standards, ensuring your documents are never used to train public models.",
    points: [
      "Deploys within your controlled private environment",
      "End-to-end encryption in transit and at rest",
      "No training on customer data (Strict privacy commitment)",
      "Strict RBAC and audit logging for every interaction",
    ],
  },
  validation: {
    title: "Built for Verification.",
    description: "In law, trust is earned through evidence. Starplum isn't a 'black box'—it's a transparency engine that lets you audit AI logic in one click.",
    cta: "Join the Waitlist",
  },
  finalCTA: {
    title: "Be first in line.",
    description: "Join the waitlist to get early access when Starplum launches. Secure. Searchable. Discoverable.",
    cta: "Request Early Access",
  },
  pricing: {
    annual: [
      {
        name: "Starter",
        description: "For individual practitioners and small teams exploring AI document analysis.",
        price: 99,
        cta: "Get Started",
        features: ["Up to 500 documents", "Basic Matter Organization", "Standard RAG Analysis", "Email Support"]
      },
      {
        name: "Firm",
        description: "For mid-sized firms requiring advanced organization and team collaboration.",
        price: 199,
        popular: true,
        cta: "Get Started",
        features: ["Unlimited documents", "Advanced Matter Isolation", "Complex Multi-doc Analysis", "Priority Support", "Team Collaboration"]
      },
      {
        name: "Enterprise",
        description: "Custom-scaled intelligence for large organizations and global departments.",
        price: "Custom",
        cta: "Contact Sales",
        features: ["Private Cloud Deployment", "SSO/SAML Integration", "Infinite Scale Indexing", "Dedicated Solution Architect", "Full Audit Logs"]
      }
    ],
    monthly: [
      {
        name: "Starter",
        description: "For individual practitioners and small teams exploring AI document analysis.",
        price: 119,
        cta: "Get Started",
        features: ["Up to 500 documents", "Basic Matter Organization", "Standard RAG Analysis", "Email Support"]
      },
      {
        name: "Firm",
        description: "For mid-sized firms requiring advanced organization and team collaboration.",
        price: 239,
        popular: true,
        cta: "Get Started",
        features: ["Unlimited documents", "Advanced Matter Isolation", "Complex Multi-doc Analysis", "Priority Support", "Team Collaboration"]
      },
      {
        name: "Enterprise",
        description: "Custom-scaled intelligence for large organizations and global departments.",
        price: "Custom",
        cta: "Contact Sales",
        features: ["Private Cloud Deployment", "SSO/SAML Integration", "Infinite Scale Indexing", "Dedicated Solution Architect", "Full Audit Logs"]
      }
    ]
  },
  faq: [
    {
      question: "How is my data kept private?",
      answer: "Starplum deploys within a private Azure environment. Your documents are never used to train public models, and all data is encrypted both at rest and in transit."
    },
    {
      question: "What document types do you support?",
      answer: "We support PDF, DOCX, and TXT files. Our engine is optimized for complex legal formatting including multi-column layouts and deep nested sections."
    },
    {
      question: "How accurate are the citations?",
      answer: "Citations are direct links to the source material. Every claim made by the AI includes a coordinate pointing to the exact page and paragraph in the original document."
    }
  ],
  footer: {
    description: "Enterprise-grade legal intelligence powered by RAG.",
    copyright: "© 2024 Starplum. All rights reserved.",
  },
};
