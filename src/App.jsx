import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Section from "./components/Section"
import Card from "./components/Card"
import Footer from "./components/Footer"
import Citation from "./components/Citation"
import MultiOmicsTable from "./components/MultiOmicsTable"
import RoadmapTable from "./components/RoadmapTable"


export default function App() {
  return (
    <>
      <Nav />
      <Hero />

      <main className="container">
        <Section id="about" title="About Andia Health">
          <p className="lead">
            Andia Health combines <strong>multi-tissue multi-omics</strong> with its own{" "}
            <strong>AI agents and frameworks</strong> for precision neurology—accelerating the
            identification of novel biomarkers, disease subtyping, patient stratification, and target
            identification.
          </p>

          <div className="grid">
            <Card title="Multi-omics Integration">
              Cross-layer integration across genomics, transcriptomics, proteomics, and metabolomics,
              spanning tissues and platforms and linked with clinical phenotypes. Our science is built
              on large-scale proteomic, metabolomic, and transcriptomic datasets.
            </Card>

            <Card title="Explainable AI">
              Robust learning and causal reasoning to improve generalization and interpretability for
              research and clinical use. Our current agent AI and platform have been implemented in
              proteomic data to identify a protein panel that can quantify brain co-pathologies across
              the four major neurodegenerative diseases (Alzheimer’s, Parkinson’s, Frontotemporal
              Dementia, and Dementia with Lewy bodies)
              <Citation id={1} />.
            </Card>

            <Card title="Target identification / Causal inference">
              Proprietary pipelines that integrate quantitative omics data with genetics using
              Mendelian randomization, colocalization, and LLMs to identify causal targets and enable
              drug repositioning.
            </Card>
          </div>

          <div className="gridFull">
            <MultiOmicsTable />
          </div>
        </Section>

        <Section id="technology" title="Technology & Platform">
          <div className="grid two">
            <Card title="Data Platform">
              Secure data governance across centers, batch-effect mitigation, feature prioritization,
              and cross-assay alignment.
            </Card>

            <Card title="Model Platform">
              Classification, time-to-event (Cox), and causal discovery with transparent visual
              explanations and exportable reports.
            </Card>
          </div>
        </Section>

        <Section id="science" title="Science">
          <p className="lead">
            Andia Health technology was developed in the lab of{" "}
            <a
              href="https://cruchagalab.wustl.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dr. Carlos Cruchaga
            </a>{" "}
            at Washington University,
            with foundational results published on side-to-side manuscripts in{" "}
            <i>Nature Genetics</i>
            <Citation id={2} />, <i>Nature Medicine</i>
            <Citation id={3} />, and <i>Cell</i>
            <Citation id={4} />.
          </p>

          <p className="lead">
            Our GPND-AI (AI-based Generalizable Protein-based Neurodegenerative Diseases) model has been
            validated in over 40,000 samples from the Global Neurodegeneration Proteomics Consortium and UK
            Biobank and shows that it can accurately identify individuals with Alzheimer’s disease,
            Parkinson’s disease, FTD, or DLB even before clinical symptoms
            <Citation id={1} />.
          </p>
        </Section>

        <Section id="products" title="Products and Solutions">
          <p>
            At Andia Health, we harness the power of human multi-omics and artificial intelligence
            to deliver actionable and scalable solutions for precision medicine, with a primary
            focus on neurological diseases and traits.
          </p>

          <div className="grid one" style={{ marginTop: "2rem" }}>
            <Card title="GPND-AI (Generalizable Protein-based Neurodegenerative Disease AI)">
              <p>
                Early and accurate diagnosis of neurodegenerative diseases remains challenging,
                particularly in individuals with mixed or co-existing pathologies.
                GPND-AI is a novel, platform-agnostic AI framework that can be applied to diverse
                omic data types to identify informative features and develop predictive models
                for complex neurodegenerative diseases.
              </p>

              <p>
                The GPND-AI agent was trained on more than 20,000 samples and demonstrated
                strong multi-disease diagnostic performance, achieving AUC &gt; 0.90 across
                Alzheimer’s disease, Parkinson’s disease, dementia with Lewy bodies, and
                frontotemporal dementia.
              </p>

              <p>
                Importantly, GPND-AI enables quantitative assessment of pathology and
                co-pathology—including amyloid plaques, tau tangles, α-synuclein, and TDP-43—
                outperforming current single-analyte blood-based biomarkers.
              </p>

              <p>
                These findings were replicated across multiple independent cohorts, including
                GNPC, ROSMAP, and Stanford-ADRC, and are compatible with multiple proteomic
                platforms such as SomaLogic, Olink, and Alamar.
              </p>

              <p>
                In summary, GPND-AI delivers a clinically relevant, deployable protein panel
                with high diagnostic accuracy, cross-site reproducibility, and robust
                platform-agnostic performance validated in retrospective and external datasets.
              </p>
            </Card>
          </div>

          <div className="grid three" style={{ marginTop: "2.5rem" }}>
            <Card title="Unified AI/ML Framework for Multi-platform Biomarker Discovery">
              A unified and scalable AI/ML infrastructure enabling biomarker discovery,
              model transferability, and harmonized analytics across SomaLogic, Olink,
              Alamar/NuLISA, and emerging proteomic platforms.
            </Card>

            <Card title="Target Discovery & Patient Stratification">
              AI-driven patient stratification and disease subtyping to support
              precision clinical trials, disease progression modeling, and
              biologically informed cohort enrichment.
            </Card>

            <Card title="Target Identification & Causal Inference">
              Integrative multi-omic and causal inference frameworks for identifying
              disease-driving targets and pathways, supporting therapeutic target
              validation and translational research.
            </Card>
          </div>
        </Section>


        <Section id="roadmap" title="Roadmap">
          <RoadmapTable />
        </Section>

        <Section id="team" title="Team">
          <p>
            We bring together expertise in computational biology, neuroscience, software engineering,
            and artificial intelligence.
          </p>
          <ul className="list">
            <li>
              CEO & Scientific Lead — Dr. Carlos Cruchaga  
              <span style={{ opacity: 0.75 }}> (research collaborations & partnerships)</span>
            </li>
            <li>
              CSO & Head of AI — Fiona (Ying) Xu  
              <span style={{ opacity: 0.75 }}> (AI, modeling, and technology)</span>
            </li>
          </ul>
        </Section>

        <Section id="contact" title="Contact">
          <p>
            For research collaborations and business partnerships, please contact Dr. Carlos Cruchaga.
            For technical and AI-related inquiries, please contact Fiona (Ying) Xu.
          </p>
          <p>
            Dr. Carlos Cruchaga:{" "}
            <a href="mailto:cruchagac@wustl.edu">cruchagac@wustl.edu</a>
            <br />
            Fiona (Ying) Xu:{" "}
            <a href="mailto:x.ying1@wustl.edu">x.ying1@wustl.edu</a>
            <br />
            Location: Global / Remote
          </p>
        </Section>

        <Section id="references" title="References">
          <ol className="references">
            <li id="ref-1">
              Xu Y, Western D, Heo G, <i>et&nbsp;al.</i>{" "}
              <strong>
                Protein-based diagnosis and analysis of co-pathologies across neurodegenerative diseases:
                large-scale AI-boosted CSF and plasma classification.
              </strong>{" "}
              <i>medRxiv</i>. 2025; doi:&nbsp;
              <a
                href="https://doi.org/10.1101/2025.07.09.25331192"
                target="_blank"
                rel="noopener noreferrer"
              >
                10.1101/2025.07.09.25331192
              </a>
              .
            </li>

            <li id="ref-2">
              Western D, Timsina J, Wang L, <i>et al.</i>
              <strong>
                Proteogenomic analysis of human cerebrospinal fluid identifies neurologically relevant regulation
                and implicates causal proteins for Alzheimer’s disease.
              </strong>
              <i>Nature Genetics</i>. 2024;56:2672–2684.
              <a href="https://doi.org/10.1038/s41588-024-01972-8" target="_blank" rel="noopener noreferrer">
                https://doi.org/10.1038/s41588-024-01972-8
              </a>
            </li>

            <li id="ref-3">
              Ali M, Erabadda B, Chen Y, <i>et al.</i>
              <strong>
                Shared and disease-specific pathways in frontotemporal dementia and Alzheimer’s and Parkinson’s
                diseases.
              </strong>
              <i>Nature Medicine</i>. 2025;31:2567–2577.
              <a href="https://doi.org/10.1038/s41591-025-03833-1" target="_blank" rel="noopener noreferrer">
                https://doi.org/10.1038/s41591-025-03833-1
              </a>
            </li>

            <li id="ref-4">
              Shen Y, Timsina J, Heo G, <i>et al.</i>
              <strong>
                CSF proteomics identifies early changes in autosomal dominant Alzheimer’s disease.
              </strong>
              <i>Cell</i>. 2024;187:6309–6326.e15.
              <a href="https://doi.org/10.1016/j.cell.2024.08.049" target="_blank" rel="noopener noreferrer">
                https://doi.org/10.1016/j.cell.2024.08.049
              </a>
            </li>

          </ol>
        </Section>
      </main>

      <Footer />
    </>
  )
}
