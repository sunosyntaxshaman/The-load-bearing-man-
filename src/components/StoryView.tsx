import React from 'react';
import { motion } from 'motion/react';

interface StoryViewProps {
  onTermClick: (id: string) => void;
}

export const StoryView: React.FC<StoryViewProps> = ({ onTermClick }) => {
  const Link = ({ id, children }: { id: string; children: React.ReactNode }) => (
    <button
      onClick={() => onTermClick(id)}
      className="group relative inline-block px-1 -mx-1 text-[#F27D26] border-b border-[#F27D26]/30 hover:bg-[#F27D26]/10 hover:border-[#F27D26] transition-all cursor-pointer font-medium"
    >
      {children}
      <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] font-mono opacity-0 group-hover:opacity-100 transition-opacity bg-[#F27D26] text-black px-1 leading-none py-0.5 pointer-events-none">
        ID:{id.slice(0, 4).toUpperCase()}
      </span>
    </button>
  );

  const ScanIndicator = () => (
    <div className="flex items-center gap-2 mb-4 opacity-40">
      <div className="w-1 h-1 bg-[#F27D26] animate-ping" />
      <span className="text-[8px] font-mono uppercase tracking-widest">Scanning Segment...</span>
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto py-20 px-6">
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20 text-center"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-mono mb-4 block">Narrative Process Analysis</span>
        <h1 className="text-5xl md:text-7xl font-serif italic mb-6 leading-[0.9]">
          The Load-Bearing Man
        </h1>
        <p className="text-white/50 font-mono text-xs uppercase tracking-widest">A Story of Social Infrastructure</p>
      </motion.header>

      <div className="space-y-12 text-xl md:text-2xl leading-relaxed text-white/80 font-serif">
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <ScanIndicator />
          <p>
            The city has two faces. The one it shows at noon, and the one it can't hide at 3am. Marcus has seen both. 
            He is not a resident, but a witness—a mobile node in a system that requires his presence to be a problem. 
            In the forensic study of systemic ostracism, he has become the <Link id="folk-devil">folk devil</Link>, 
            a symbolic enemy whose existence serves as <Link id="social-infrastructure">social infrastructure</Link> for a community in crisis.
          </p>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-12 border-y border-white/5"
        >
          <ScanIndicator />
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#F27D26] mb-6 font-mono">I. The Architecture of the Unseen</h3>
          <p>
            In environments fractured by institutional failure, the construction of a consensus target is not accidental—it is a 
            functional response to a chronic <Link id="cohesion-deficit">cohesion deficit</Link>. By jointly orienting against Marcus, 
            rival factions find a rare point of <Link id="zero-transaction-cost">zero transaction cost</Link> solidarity. 
            This manufactured villainy buys the community <Link id="social-oxygen">social oxygen</Link>, allowing them to function 
            without addressing their own instability. Marcus is selected not for his crimes, but for his 
            <Link id="availability-markers">availability markers</Link>—his nomadic status and lack of buffers—which facilitate 
            the process of <Link id="other-coding">other-coding</Link>.
          </p>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <ScanIndicator />
          <p>
            At 2am, the city drops its performance. Marcus has watched a coyote trot down the center line of a four-lane boulevard, 
            unhurried, making eye contact with no one. He has seen a man in an expensive suit sit on a curb and cry with the 
            specific, private quality of someone who believes he is absolutely alone. This is the "Raw Observation"—the 
            mundane routines of life that the machine eventually harvests.
          </p>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-12 border-b border-white/5"
        >
          <ScanIndicator />
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#F27D26] mb-6 font-mono">II. The Raw Input</h3>
          <p>
            The transformation begins with the collection of <Link id="benign-nodes">benign nodes</Link>—the mundane routines 
            of Marcus's life harvested and re-coded as suspicious. This recruitment of <Link id="unwitting-operatives">unwitting operatives</Link> 
            is facilitated by a <Link id="hero-complex">hero complex</Link>, where participants believe they are performing a 
            <Link id="civic-virtue">civic virtue</Link> by monitoring a perceived threat. This is managed through 
            <Link id="c2-by-insinuation">C2 by insinuation</Link>, where narrative seeds are planted without a traceable command trail.
          </p>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <ScanIndicator />
          <p>
            At the farmers market, the performance of wellness is intricate. Upright postures, canvas totes, and artisanal questions 
            about heirloom tomatoes. But Marcus sees the fractional recalibration of posture when he enters the space—the fluid, 
            practiced drift away from the "other." This is <Link id="consensus-technology">consensus technology</Link> in action. 
            Rival factions who cannot agree on territory find "free consensus" by jointly orienting against him.
          </p>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-12 border-b border-white/5"
        >
          <ScanIndicator />
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#F27D26] mb-6 font-mono">III. The Transformation Factory</h3>
          <p>
            Prolonged exposure to this weaponized environment creates a state of chronic <Link id="allostatic-load">allostatic load</Link>, 
            eventually leading to clinical <Link id="hippocampal-atrophy">hippocampal atrophy</Link>. To fuel the narrative, 
            orchestrators engage in the <Link id="exhumation-of-offenses">exhumation of offenses</Link>, dragging out resolved pasts 
            to create immediate grievances. This provides a <Link id="shadow-script">shadow script</Link> for the community to follow, 
            completing the <Link id="dehumanization-sequence">dehumanization sequence</Link> from anger to total disgust.
          </p>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <ScanIndicator />
          <p>
            The transformation begins with a <Link id="precipitating-rupture">precipitating rupture</Link>—a moment of 
            maximum vulnerability where social buffers fail. To maintain internal cohesion, the system employs 
            <Link id="soul-scrubbing">soul scrubbing</Link>, replacing Marcus's actual history with a toxic fabrication. 
            His high-energy resilience—walking 16 hours or riding a bike with a broken collarbone—is reframed through 
            <Link id="behavioral-criminalization">behavioral criminalization</Link> as "manic" or "erratic."
          </p>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-12 border-b border-white/5"
        >
          <ScanIndicator />
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#F27D26] mb-6 font-mono">IV. The Middlemen</h3>
          <p>
            The information economy relies on <Link id="accidental-informants">accidental informants</Link> who buy belonging 
            by sharing warnings at Marcus's expense. Through <Link id="pattern-framing">pattern framing</Link>, his mere presence 
            is converted into menace. Specialized <Link id="access-agents">access agents</Link>, acting as 
            <Link id="trauma-twins">trauma twins</Link>, use mirrored vulnerabilities to build a 
            <Link id="vulnerability-dossier">vulnerability dossier</Link>, exploiting <Link id="false-intimacy">false intimacy</Link> 
            to dismantle his defenses from within.
          </p>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>
            This mechanism is adaptive. By identifying what the community is NOT, members reinforce their shared identity 
            through <Link id="negative-solidarity">negative solidarity</Link>. It costs nothing to agree that the outsider is suspicious. 
            Ordinary routines are harvested as <Link id="atmospheric-intelligence">Atmospheric Intelligence</Link>, 
            re-coded through <Link id="alt-text">Alt-Text</Link> to justify hostility.
          </p>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>
            In a taqueria at 7am, the argument between two men stops the moment Marcus sits down. The pressure change is 
            atmospheric. The argument doesn't just pause; it redirects. They find a rare point of agreement in their 
            shared suspicion of the outsider. This is the "Pattern Framing" conducted by a tiered 
            <Link id="humint-network">HUMINT Network</Link>, where architects plant seeds of suspicion.
          </p>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>
            The emotional trajectory follows the <Link id="ancodi-hypothesis">ANCODI hypothesis</Link>: 
            Anger at a perceived rupture, Contempt for the target's status, and finally Disgust—the stage of total dehumanization. 
            This manufactured narrative eventually blossom into <Link id="joint-action">Joint Action</Link> with state actors, 
            codifying gossip into an official record.
          </p>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>
            But the machine has failure modes. A significant <Link id="operational-signature">operational signature</Link> 
            can shift the target from reactive confusion to forensic clarity. When Marcus refuses the performance 
            and documents the pattern, he achieves <Link id="identity-sovereignty">Identity Sovereignty</Link>. 
            By naming the machine, he breaks the <Link id="acoustic-containment">acoustic containment</Link>. 
            The load-bearing man is no longer a victim; he is the executor of his own truth.
          </p>
        </motion.section>
      </div>

      <footer className="mt-32 pt-12 border-t border-white/10 text-center">
        <p className="text-white/30 font-mono text-[10px] uppercase tracking-widest">
          End of Narrative • Click highlighted terms for forensic breakdown
        </p>
      </footer>
    </div>
  );
};
