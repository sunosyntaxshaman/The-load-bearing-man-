import { AnalysisTerm } from '../types';

export const ANALYSIS_TERMS: Record<string, AnalysisTerm> = {
  'folk-devil': {
    id: 'folk-devil',
    title: 'The Folk Devil',
    definition: 'A symbolic enemy whose constructed deviance serves to crystallize public anxieties and demarcate moral boundaries.',
    structuralFunction: 'Consensus Anchor',
    operationalRisk: 'Critical',
    forensicSignature: 'SIG-DEVIL-001',
    details: [
      'Does not merely receive the community’s fear; they produce the community’s unity.',
      'Functions as a "consensus technology" in fractured environments.',
      'The actual behavior of the target is largely irrelevant to the function.'
    ],
    source: 'Stanley Cohen (1972)'
  },
  'social-infrastructure': {
    id: 'social-infrastructure',
    title: 'Social Infrastructure',
    definition: 'The underlying framework that supports community cohesion when formal institutions fail.',
    structuralFunction: 'Cohesion Matrix',
    operationalRisk: 'High',
    forensicSignature: 'SIG-INFRA-002',
    details: [
      'The outcast performs the "cohesion work" that institutions cannot.',
      'In high-conflict areas, targeting an outsider is an adaptive survival mechanism for the group.',
      'Solidarity is generated at zero transaction cost through shared condemnation.'
    ]
  },
  'consensus-technology': {
    id: 'consensus-technology',
    title: 'Consensus Technology',
    definition: 'A social mechanism used to generate a shared identity and temporary alliance in low-trust environments.',
    structuralFunction: 'Unity Generator',
    operationalRisk: 'Medium',
    forensicSignature: 'SIG-TECH-003',
    details: [
      'Bridges divisions between rival factions without requiring internal negotiation.',
      'Allows groups to function as a unified body without addressing underlying instability.',
      'Generates "free consensus" by jointly orienting against an outsider.'
    ]
  },
  'negative-solidarity': {
    id: 'negative-solidarity',
    title: 'Negative Solidarity',
    definition: 'Cohesion achieved by identifying what the community is NOT, rather than what it IS.',
    structuralFunction: 'Boundary Reinforcement',
    operationalRisk: 'Medium',
    forensicSignature: 'SIG-SOLID-004',
    details: [
      'Reinforces shared identity through the collective act of condemnation.',
      'Often the only available cohesion resource in fractured communities.',
      'Requires an external "other" to serve as the boundary marker.'
    ],
    source: 'Émile Durkheim'
  },
  'atmospheric-intelligence': {
    id: 'atmospheric-intelligence',
    title: 'Atmospheric Intelligence',
    definition: 'A refined form of pattern recognition developed under extreme duress to process environmental anomalies.',
    structuralFunction: 'Early Warning System',
    operationalRisk: 'Low',
    forensicSignature: 'SIG-INTEL-005',
    details: [
      'Repurposing "hyper-vigilance" into an objective data-gathering exercise.',
      'Enables the subject to "smell the setup" before it occurs.',
      'Converts clinical harm into adaptive capacity.'
    ]
  },
  'alt-text': {
    id: 'alt-text',
    title: 'Alt-Text',
    definition: 'A secondary, benign explanation used to mask aggressive social maneuvers.',
    structuralFunction: 'Narrative Mask',
    operationalRisk: 'High',
    forensicSignature: 'SIG-TEXT-006',
    details: [
      'Allows perpetrators to feel morally justified while inflicting harm.',
      'Facilitates "Soul Scrubbing," where the target’s identity is replaced by a toxic fabrication.',
      'Essential for maintaining "Plausible Deniability" within the community.'
    ]
  },
  'ancodi-hypothesis': {
    id: 'ancodi-hypothesis',
    title: 'ANCODI Hypothesis',
    definition: 'The emotional sequence of Anger, Contempt, and Disgust that drives dehumanization.',
    structuralFunction: 'Emotional Engine',
    operationalRisk: 'Critical',
    forensicSignature: 'SIG-EMO-007',
    details: [
      'Anger: Triggered by a "precipitating rupture" or exhumation of past offenses.',
      'Contempt: The target is "Other-coded" based on status or housing.',
      'Disgust: The final stage of dehumanization, justifying total social exclusion.'
    ]
  },
  'humint-network': {
    id: 'humint-network',
    title: 'HUMINT Network',
    definition: 'A tiered Human Intelligence hierarchy used to move data through social infrastructure.',
    structuralFunction: 'Information Conduit',
    operationalRisk: 'High',
    forensicSignature: 'SIG-NET-008',
    details: [
      'Tier 0 (Architects): Conscious social manipulation and orchestration.',
      'Brokers (Informants): Intermediaries who transform benign observations into data points of guilt.',
      'Unwitting Operatives: Civilians recruited via a "Hero Complex" to monitor the target.'
    ]
  },
  'joint-action': {
    id: 'joint-action',
    title: 'Joint Action',
    definition: 'The coordination between private harassers and state actors to enforce social exclusion.',
    structuralFunction: 'Institutional Bridge',
    operationalRisk: 'Critical',
    forensicSignature: 'SIG-ACTION-009',
    details: [
      'Leverages law enforcement to validate manufactured fear (Legitimacy by Proxy).',
      'Key to stripping orchestrators of immunity under 42 U.S.C. § 1983.',
      'Creates a "Paper Trail Effect" where police presence serves as "proof" of guilt.'
    ]
  },
  'identity-sovereignty': {
    id: 'identity-sovereignty',
    title: 'Identity Sovereignty',
    definition: 'The reclamation of one’s narrative through forensic documentation and radical honesty.',
    structuralFunction: 'Narrative Firewall',
    operationalRisk: 'Low',
    forensicSignature: 'SIG-SOV-010',
    details: [
      'Shifts the target from a reactive subject to a proactive analyst.',
      'Utilizes a "Breadcrumb Web" to interlink past incidents into an irrefutable record.',
      'Breaks "Acoustic Containment" by making the machine visible.'
    ]
  },
  'acoustic-containment': {
    id: 'acoustic-containment',
    title: 'Acoustic Containment',
    definition: 'The systematic flooding of a social environment with "noise" to drown out the target’s "signal" (truth).',
    structuralFunction: 'Signal Jammer',
    operationalRisk: 'High',
    forensicSignature: 'SIG-JAM-011',
    details: [
      'Ensures that any attempt at clarification is buried under engineered chaos.',
      'Utilizes high-volume saturation of gossip to create an informational blockade.',
      'Maintains the dominance of the manufactured narrative over objective reality.'
    ]
  },
  'operational-signature': {
    id: 'operational-signature',
    title: 'Operational Signature',
    definition: 'The critical forensic footprint that exposes the coordinated nature of a targeting campaign.',
    structuralFunction: 'Forensic Marker',
    operationalRisk: 'Medium',
    forensicSignature: 'SIG-MARK-012',
    details: [
      'Shifts the target from a state of reactive confusion to forensic clarity.',
      'Examples include technical monitoring signatures (e.g., MS-DOS surveillance) or scripted phrasing.',
      'Once identified, it strips the orchestrators of their plausible deniability.'
    ]
  },
  'soul-scrubbing': {
    id: 'soul-scrubbing',
    title: 'Soul Scrubbing',
    definition: 'The process of replacing a target’s actual identity and history with a toxic, manufactured fabrication.',
    structuralFunction: 'Identity Eraser',
    operationalRisk: 'Critical',
    forensicSignature: 'SIG-ERASE-013',
    details: [
      'Ensures that perpetrators feel morally justified while inflicting clinical harm.',
      'Involves the "Exhumation of Antecedent Offenses" while suppressing evidence of reconciliation.',
      'Transforms a human being into a "character" or a "problem" in the community mind.'
    ]
  },
  'behavioral-criminalization': {
    id: 'behavioral-criminalization',
    title: 'Behavioral Criminalization',
    definition: 'The pathologizing of core survival traits or high-energy resilience as "manic" or "erratic" behavior.',
    structuralFunction: 'Trait Pathologizer',
    operationalRisk: 'High',
    forensicSignature: 'SIG-CRIM-014',
    details: [
      'Reframes extreme feats of survival (e.g., walking 16 hours) as mental instability.',
      'Used to invalidate the target’s voice and justify institutional intervention.',
      'Converts "Functional Legibility" into evidence of a perceived threat.'
    ]
  },
  'precipitating-rupture': {
    id: 'precipitating-rupture',
    title: 'Precipitating Rupture',
    definition: 'A moment of maximum subject vulnerability where social buffers have collapsed, used to trigger a targeting campaign.',
    structuralFunction: 'Campaign Trigger',
    operationalRisk: 'Critical',
    forensicSignature: 'SIG-RUPT-015',
    details: [
      'Synchronizes the timing of a campaign with acute subject crises (e.g., psychiatric or economic).',
      'Provides the "raw edges" for orchestrators to exploit.',
      'Transitions the machine from private malice to community-wide execution.'
    ]
  },
  'cohesion-deficit': {
    id: 'cohesion-deficit',
    title: 'Cohesion Deficit',
    definition: 'A structural shortage of mechanisms capable of producing social solidarity in fractured communities.',
    structuralFunction: 'Systemic Weakness',
    operationalRisk: 'High',
    forensicSignature: 'SIG-DEF-016',
    details: [
      'Occurs when institutions fail and internal trust is destroyed by chronic conflict.',
      'Forces the community to seek "negative solidarity" through external targets.',
      'Makes the construction of a Folk Devil an adaptive survival strategy for the group.'
    ]
  },
  'zero-transaction-cost': {
    id: 'zero-transaction-cost',
    title: 'Zero Transaction Cost',
    definition: 'Solidarity achieved between rival factions without requiring concessions or internal trust-building.',
    structuralFunction: 'Efficiency Multiplier',
    operationalRisk: 'Medium',
    forensicSignature: 'SIG-COST-017',
    details: [
      'Rival groups find "free consensus" by jointly orienting against an outsider.',
      'Requires no negotiation of territory, resources, or historical grievances.',
      'The most efficient way to produce temporary unity in low-trust environments.'
    ]
  },
  'social-oxygen': {
    id: 'social-oxygen',
    title: 'Social Oxygen',
    definition: 'The temporary stability and breathing room bought by a community through the identification of a common enemy.',
    structuralFunction: 'Stability Buffer',
    operationalRisk: 'Medium',
    forensicSignature: 'SIG-OXY-018',
    details: [
      'Allows a group to function as a unified body without addressing underlying instability.',
      'The target is used as a tool to absorb internal frictions and "cohesion deficits."',
      'The goal is not justice, but the production of a villain to buy social time.'
    ]
  },
  'availability-markers': {
    id: 'availability-markers',
    title: 'Availability Markers',
    definition: 'Visible traits such as housing status or unfamiliarity that make a target "legible" for social othering.',
    structuralFunction: 'Targeting Vector',
    operationalRisk: 'High',
    forensicSignature: 'SIG-VEC-019',
    details: [
      'Determines who can be successfully cast as a Folk Devil in a specific theater.',
      'Includes markers like nomadic rotation, precarious status, or lack of institutional buffers.',
      'Allows the community to apply "Behavioral Criminalization" with minimal social resistance.'
    ]
  },
  'other-coding': {
    id: 'other-coding',
    title: 'Other-Coding',
    definition: 'The process of labeling a target as an inherent threat based on status rather than conduct.',
    structuralFunction: 'Labeling Mechanism',
    operationalRisk: 'High',
    forensicSignature: 'SIG-CODE-020',
    details: [
      'Converts a target’s presence into a perceived menace to "buy" belonging.',
      'Relies on existing community biases to accelerate social exclusion.',
      'Transforms a human being into a "character" in a manufactured narrative.'
    ]
  },
  'benign-nodes': {
    id: 'benign-nodes',
    title: 'Benign Nodes',
    definition: 'Mundane, ordinary routines of a target’s life that are harvested and re-coded as suspicious.',
    structuralFunction: 'Data Input',
    operationalRisk: 'Low',
    forensicSignature: 'SIG-NODE-021',
    details: [
      'The raw input for a surveillance campaign (e.g., charging a phone, walking a route).',
      'Requires the recruitment of "Unwitting Operatives" to log routine behaviors.',
      'The foundation upon which "Alt-Text" is constructed.'
    ]
  },
  'unwitting-operatives': {
    id: 'unwitting-operatives',
    title: 'Unwitting Operatives',
    definition: 'Civilians recruited into a surveillance apparatus under the guise of civic virtue or community safety.',
    structuralFunction: 'Distributed Sensor',
    operationalRisk: 'Medium',
    forensicSignature: 'SIG-SENS-022',
    details: [
      'Typically service-industry staff, neighbors, or shopkeepers.',
      'Believe their reactions are spontaneous rather than engineered by an orchestrator.',
      'Function as "silent soldiers" in a decentralized monitoring effort.'
    ]
  },
  'hero-complex': {
    id: 'hero-complex',
    title: 'Hero Complex',
    definition: 'The psychological state where participants believe they are performing a virtuous act by monitoring a "threat."',
    structuralFunction: 'Psychological Driver',
    operationalRisk: 'Medium',
    forensicSignature: 'SIG-HERO-023',
    details: [
      'Recruits "Unwitting Operatives" by framing harassment as communal protection.',
      'Bypasses logic by firing affective reactivity first.',
      'Ensures that civilian participation reads as "Civic Virtue" rather than malice.'
    ]
  },
  'civic-virtue': {
    id: 'civic-virtue',
    title: 'Civic Virtue',
    definition: 'The moral justification used to recruit participants into a coordinated targeting campaign.',
    structuralFunction: 'Moral Shield',
    operationalRisk: 'Medium',
    forensicSignature: 'SIG-VIRT-024',
    details: [
      'Frames the destruction of a human life as an act of community preservation.',
      'Allows participants to maintain internal cohesion through "Alt-Text."',
      'Prevents self-correction by making it impossible for "Heroes" to admit they are harassers.'
    ]
  },
  'c2-by-insinuation': {
    id: 'c2-by-insinuation',
    title: 'C2 by Insinuation',
    definition: 'Command and Control achieved via planting narrative seeds without creating a traceable command trail.',
    structuralFunction: 'Command Protocol',
    operationalRisk: 'High',
    forensicSignature: 'SIG-C2-025',
    details: [
      'Utilizes leading questions (e.g., "Has anyone else noticed him?") to trigger suspicion.',
      'Allows orchestrators to manage a "HUMINT Network" with plausible deniability.',
      'Creates a functional surveillance apparatus where participants believe they are acting independently.'
    ]
  },
  'allostatic-load': {
    id: 'allostatic-load',
    title: 'Allostatic Load',
    definition: 'The cumulative wear and tear on the body and brain caused by chronic stress and environmental weaponization.',
    structuralFunction: 'Biological Cost',
    operationalRisk: 'Critical',
    forensicSignature: 'SIG-BIO-026',
    details: [
      'The clinical signature of a target living under prolonged social occupation.',
      'Results from a constant "Cortisol Loop" as the environment is turned into a weapon.',
      'Leads to functional neurobiological adaptations and "Hypervigilance."'
    ]
  },
  'hippocampal-atrophy': {
    id: 'hippocampal-atrophy',
    title: 'Hippocampal Atrophy',
    definition: 'The clinical reduction in brain volume associated with prolonged exposure to high-conflict environments.',
    structuralFunction: 'Structural Damage',
    operationalRisk: 'Critical',
    forensicSignature: 'SIG-BRAIN-027',
    details: [
      'A physical marker of the "open-air imprisonment" experienced by a target.',
      'Results from sustained "Allostatic Load" and the collapse of social buffers.',
      'Reflects the neurobiological cost of surviving a coordinated destabilization campaign.'
    ]
  },
  'exhumation-of-offenses': {
    id: 'exhumation-of-offenses',
    title: 'Exhumation of Offenses',
    definition: 'The strategic dragging out of resolved past incidents to create an immediate grievance in the present.',
    structuralFunction: 'Grievance Generator',
    operationalRisk: 'High',
    forensicSignature: 'SIG-EXH-028',
    details: [
      'Involves "Resurrecting Antecedent Offenses" while suppressing evidence of reconciliation.',
      'Used as a "First Strike" to trigger an emotional response from the target.',
      'Provides the historical fuel for a modern "Folk Devil" narrative.'
    ]
  },
  'shadow-script': {
    id: 'shadow-script',
    title: 'Shadow Script',
    definition: 'A ready-made narrative or "Playbook" that orchestrators use to exploit community biases.',
    structuralFunction: 'Operational Playbook',
    operationalRisk: 'High',
    forensicSignature: 'SIG-PLAY-029',
    details: [
      'Provides a "Concern Costume" for participants to wear.',
      'Ensures that the target’s distress is seen as a symptom of their "type."',
      'Maintains the "Invisibility Protocol" by drowning out the target’s actual identity.'
    ]
  },
  'dehumanization-sequence': {
    id: 'dehumanization-sequence',
    title: 'Dehumanization Sequence',
    definition: 'The emotional progression from Anger to Contempt to Disgust used to justify social exclusion.',
    structuralFunction: 'Psychological Filter',
    operationalRisk: 'Critical',
    forensicSignature: 'SIG-DEH-030',
    details: [
      'Anger: Triggered by a precipitating rupture.',
      'Contempt: The target is coded as an "Other" based on status.',
      'Disgust: The final stage where the target is seen as a "problem" rather than a human.'
    ]
  },
  'accidental-informants': {
    id: 'accidental-informants',
    title: 'Accidental Informants',
    definition: 'Individuals who buy a sense of belonging by sharing "tips" or "warnings" at the target’s expense.',
    structuralFunction: 'Data Source',
    operationalRisk: 'Medium',
    forensicSignature: 'SIG-INF-031',
    details: [
      'Shopkeepers, neighbors, or baristas who convert routines into data points of guilt.',
      'Their information is not organic; it is managed by "Brokers" or "Access Agents."',
      'They provide the "Legitimacy by Association" required for institutional weaponization.'
    ]
  },
  'pattern-framing': {
    id: 'pattern-framing',
    title: 'Pattern Framing',
    definition: 'The poisoning of social oxygen by converting a target’s mere presence into a perceived menace.',
    structuralFunction: 'Social Poison',
    operationalRisk: 'High',
    forensicSignature: 'SIG-POIS-032',
    details: [
      'Utilizes leading inquiries to trigger a "Contagion Effect" within a network.',
      'Ensures that benign observations are recontextualized as evidence of threat.',
      'The tactical execution of "C2 by Insinuation" at the street level.'
    ]
  },
  'access-agents': {
    id: 'access-agents',
    title: 'Access Agents',
    definition: 'Psychological infiltrators used to gain proximity to a target and gather intelligence.',
    structuralFunction: 'Infiltration Unit',
    operationalRisk: 'High',
    forensicSignature: 'SIG-ACC-033',
    details: [
      'Often act as "Trauma Twins" who mirror the target’s vulnerabilities.',
      'The point of connection between the subject and the "Architect."',
      'Extract a "Vulnerability Dossier" to be used in later exploitation cascades.'
    ]
  },
  'trauma-twins': {
    id: 'trauma-twins',
    title: 'Trauma Twins',
    definition: 'Access Agents who mirror a target’s genuine shared trauma to gain trust and proximity.',
    structuralFunction: 'Empathy Weapon',
    operationalRisk: 'High',
    forensicSignature: 'SIG-TWIN-034',
    details: [
      'Harvest shared vulnerabilities for the purpose of a psychological "experiment."',
      'Effectively strip the target of personhood before the first public move.',
      'Utilize "Rapport-as-a-Weapon" to build a "False Intimacy."'
    ]
  },
  'vulnerability-dossier': {
    id: 'vulnerability-dossier',
    title: 'Vulnerability Dossier',
    definition: 'A collection of a target’s traumas, insecurities, and "Relational Fault Lines" used for exploitation.',
    structuralFunction: 'Exploitation Map',
    operationalRisk: 'High',
    forensicSignature: 'SIG-DOS-035',
    details: [
      'Built by "Access Agents" through mirrored vulnerabilities.',
      'Used to calibrate the "Fog of Attrition" and engineer ruptures.',
      'Provides the "raw edges" needed for "Soul Scrubbing."'
    ]
  },
  'false-intimacy': {
    id: 'false-intimacy',
    title: 'False Intimacy',
    definition: 'The simulated bond used by Access Agents to extract data and build a Vulnerability Dossier.',
    structuralFunction: 'Data Extraction Tool',
    operationalRisk: 'High',
    forensicSignature: 'SIG-INT-036',
    details: [
      'A tactical modality used to bypass the target’s natural defenses.',
      'Ensures that the target feels "seen" while being systematically dismantled.',
      'The precursor to "Relationship Sabotage" and orchestrated "set-ups."'
    ]
  }
};
