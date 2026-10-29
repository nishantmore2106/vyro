import React from 'react';

interface OutcomeStep {
  title: string;
  subtitle: string;
}

interface WorkflowAction {
  id: string;
  title: string;
  subtitle: string;
  outcomes: OutcomeStep[];
}

const WORKFLOW_ITEMS: WorkflowAction[] = [
  {
    id: 'capture-ideas',
    title: 'Capture Ideas',
    subtitle: 'Notes · Quick thoughts',
    outcomes: [
      { title: 'Capture', subtitle: 'Add notes and thoughts' },
      { title: 'Organize', subtitle: 'Sort ideas into a workspace' },
      { title: 'Ready', subtitle: 'Convert ideas into actionable work' },
    ],
  },
  {
    id: 'manage-tasks',
    title: 'Manage Tasks',
    subtitle: 'Create · Prioritize',
    outcomes: [
      { title: 'Prioritize', subtitle: 'Set importance and deadlines' },
      { title: 'Track', subtitle: 'Monitor task progress' },
      { title: 'Complete', subtitle: 'Mark work as finished' },
    ],
  },
  {
    id: 'organize-projects',
    title: 'Organize Projects',
    subtitle: 'Goals · Milestones',
    outcomes: [
      { title: 'Plan', subtitle: 'Define goals and milestones' },
      { title: 'Coordinate', subtitle: 'Keep project tasks together' },
      { title: 'Review', subtitle: 'Check project progress' },
    ],
  },
  {
    id: 'focus-mode',
    title: 'Focus Mode',
    subtitle: 'Sessions · Deep work',
    outcomes: [
      { title: 'Start Session', subtitle: 'Choose a task to focus on' },
      { title: 'Deep Work', subtitle: 'Reduce distractions' },
      { title: 'Session Complete', subtitle: 'Return to your workspace' },
    ],
  },
  {
    id: 'ai-assistance',
    title: 'AI Assistance',
    subtitle: 'Organize · Summarize',
    outcomes: [
      { title: 'Process Input', subtitle: 'Analyze notes and tasks' },
      { title: 'Generate Insights', subtitle: 'Suggest useful next steps' },
      { title: 'Take Action', subtitle: 'Apply suggestions to your workflow' },
    ],
  },
  {
    id: 'review-progress',
    title: 'Review Progress',
    subtitle: 'Insights · Next steps',
    outcomes: [
      { title: 'Review Activity', subtitle: 'See completed work' },
      { title: 'Identify Patterns', subtitle: 'Understand your workflow' },
      { title: 'Improve', subtitle: 'Plan the next step' },
    ],
  },
];

export const WorkflowSection: React.FC = () => {
  return (
    <section
      id="workflow"
      aria-label="User Flow & Workflow"
      className="w-full bg-[#FFFFFF] min-h-[90vh] md:min-h-[100vh] flex flex-col justify-center py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-12 text-[#080B10]"
    >
      <div className="w-[94%] max-w-[1360px] mx-auto flex flex-col">
        {/* Upper Area: Section Label (Left) and Multiline Headline (Right) */}
        <div className="w-full flex flex-col md:flex-row items-start justify-between gap-6 md:gap-14 mb-16 sm:mb-20 md:mb-24">
          {/* Left Label */}
          <div className="flex-shrink-0 pt-1 md:pt-2">
            <span className="text-[#087EBD] text-[11px] sm:text-[12px] font-semibold tracking-[0.16em] uppercase select-none">
              USER FLOW
            </span>
          </div>

          {/* Right Multiline Headline */}
          <div className="w-full md:max-w-4xl">
            <h2
              className="font-bold tracking-tight text-left m-0 p-0"
              style={{
                fontSize: 'clamp(30px, 3.2vw, 44px)',
                lineHeight: 1.18,
              }}
            >
              <span className="text-[#777D86]">VYRO brings every idea, task, and project </span>
              <span className="text-[#080B10]">into one clear workflow </span>
              <br className="hidden sm:inline" />
              <span className="text-[#087EBD]">
                — from capturing thoughts to completing meaningful work.
              </span>
            </h2>
          </div>
        </div>

        {/* Lower Area — Desktop & Tablet Horizontal Workflow Diagram */}
        <div className="hidden md:block w-full overflow-x-auto pb-4">
          <div className="w-full min-w-[960px] flex items-stretch justify-start gap-0 relative">
            
            {/* 1. Left Vertical Starting Blocks */}
            <div className="flex items-stretch gap-2.5 flex-shrink-0">
              {/* Block A: VYRO WORKSPACE */}
              <div
                className="w-12 bg-[#080B10] rounded-[8px] flex flex-col items-center justify-center p-3 select-none"
                style={{
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)',
                }}
              >
                <span className="text-white text-[11px] font-bold tracking-[0.18em] uppercase font-mono">
                  VYRO WORKSPACE
                </span>
              </div>

              {/* Block B: CAPTURE */}
              <div
                className="w-16 bg-[#F0F2F4] rounded-[8px] flex flex-col items-center justify-center p-3 select-none"
                style={{
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)',
                }}
              >
                <span className="text-[#080B10] text-[12px] font-bold tracking-[0.12em] uppercase">
                  CAPTURE
                </span>
                <span className="text-[#777D86] text-[10px] font-normal mt-2 tracking-normal">
                  Ideas · Tasks · Notes
                </span>
              </div>
            </div>

            {/* 2. SVG Tree Connector Lines (Linking CAPTURE to 6 Primary Action Rows) */}
            <div className="w-10 relative flex-shrink-0">
              <svg
                className="w-full h-full absolute inset-0 overflow-visible"
                preserveAspectRatio="none"
                viewBox="0 0 40 430"
              >
                {/* Horizontal exit from CAPTURE center to spine */}
                <line x1="0" y1="215" x2="20" y2="215" stroke="#D9DDE2" strokeWidth="1.5" />

                {/* Vertical spine spanning from row 1 to row 6 */}
                <line x1="20" y1="29" x2="20" y2="399" stroke="#D9DDE2" strokeWidth="1.5" />

                {/* Horizontal branch taps to each of the 6 action rows */}
                {[29, 103, 177, 251, 325, 399].map((y, idx) => (
                  <line
                    key={idx}
                    x1="20"
                    y1={y}
                    x2="40"
                    y2={y}
                    stroke="#D9DDE2"
                    strokeWidth="1.5"
                  />
                ))}
              </svg>
            </div>

            {/* 3. Action Blocks & Outcome Blocks Rows */}
            <div className="flex flex-col gap-4 flex-1 w-full">
              {WORKFLOW_ITEMS.map((item) => (
                <div key={item.id} className="flex items-center h-[58px] w-full">
                  
                  {/* Primary Action Block (Cyan-Blue) */}
                  <div className="w-[190px] lg:w-[210px] h-full bg-[#087EBD] rounded-[8px] px-4 py-2.5 flex flex-col justify-center flex-shrink-0 select-none shadow-sm transition-transform duration-200 hover:scale-[1.01]">
                    <span className="text-white text-[13px] lg:text-[14px] font-semibold leading-tight">
                      {item.title}
                    </span>
                    <span className="text-white/85 text-[10px] lg:text-[11px] font-normal mt-1 leading-tight">
                      {item.subtitle}
                    </span>
                  </div>

                  {/* Connector Line 1 */}
                  <div className="w-5 lg:w-7 h-[1.5px] bg-[#D9DDE2] flex-shrink-0" />

                  {/* Outcome Block 1 — Expanded to flex-1 */}
                  <div className="flex-1 min-w-[170px] h-full bg-[#F0F2F4] rounded-[8px] px-4 py-2.5 flex flex-col justify-center select-none transition-transform duration-200 hover:bg-[#E8EBEE]">
                    <span className="text-[#080B10] text-[12.5px] lg:text-[13.5px] font-semibold leading-tight">
                      {item.outcomes[0].title}
                    </span>
                    <span className="text-[#777D86] text-[10px] lg:text-[11px] font-normal mt-1 leading-tight">
                      {item.outcomes[0].subtitle}
                    </span>
                  </div>

                  {/* Connector Line 2 */}
                  <div className="w-5 lg:w-7 h-[1.5px] bg-[#D9DDE2] flex-shrink-0" />

                  {/* Outcome Block 2 — Expanded to flex-1 */}
                  <div className="flex-1 min-w-[170px] h-full bg-[#F0F2F4] rounded-[8px] px-4 py-2.5 flex flex-col justify-center select-none transition-transform duration-200 hover:bg-[#E8EBEE]">
                    <span className="text-[#080B10] text-[12.5px] lg:text-[13.5px] font-semibold leading-tight">
                      {item.outcomes[1].title}
                    </span>
                    <span className="text-[#777D86] text-[10px] lg:text-[11px] font-normal mt-1 leading-tight">
                      {item.outcomes[1].subtitle}
                    </span>
                  </div>

                  {/* Connector Line 3 */}
                  <div className="w-5 lg:w-7 h-[1.5px] bg-[#D9DDE2] flex-shrink-0" />

                  {/* Outcome Block 3 — Expanded to flex-1 */}
                  <div className="flex-1 min-w-[170px] h-full bg-[#F0F2F4] rounded-[8px] px-4 py-2.5 flex flex-col justify-center select-none transition-transform duration-200 hover:bg-[#E8EBEE]">
                    <span className="text-[#080B10] text-[12.5px] lg:text-[13.5px] font-semibold leading-tight">
                      {item.outcomes[2].title}
                    </span>
                    <span className="text-[#777D86] text-[10px] lg:text-[11px] font-normal mt-1 leading-tight">
                      {item.outcomes[2].subtitle}
                    </span>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Lower Area — Mobile Reflow (Vertical Step-by-Step Sequence) */}
        <div className="md:hidden flex flex-col w-full gap-8">
          
          {/* Mobile Starting Block Banner */}
          <div className="flex items-center gap-3 p-3.5 bg-[#080B10] rounded-[10px] select-none">
            <span className="w-2 h-2 rounded-full bg-[#22C7F2]" />
            <div className="flex flex-col">
              <span className="text-white text-[12px] font-bold tracking-wider uppercase font-mono">
                VYRO WORKSPACE // CAPTURE
              </span>
              <span className="text-[#777D86] text-[11px] mt-0.5">
                Starting Point · Ideas, Tasks & Notes
              </span>
            </div>
          </div>

          {/* Vertical Action Progression */}
          <div className="flex flex-col gap-6">
            {WORKFLOW_ITEMS.map((item, idx) => (
              <div
                key={item.id}
                className="flex flex-col p-4 bg-white border border-[#E2E6EA] rounded-[14px] shadow-sm"
              >
                {/* Primary Action Header */}
                <div className="bg-[#087EBD] rounded-[8px] px-4 py-3 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-white text-[14px] font-semibold">
                      {idx + 1}. {item.title}
                    </span>
                    <span className="text-white/80 text-[11px] mt-0.5">
                      {item.subtitle}
                    </span>
                  </div>
                  <span className="text-white/40 text-[12px] font-mono">ACTION</span>
                </div>

                {/* Vertical Outcome Steps */}
                <div className="flex flex-col gap-2.5 mt-3 pl-2 border-l-2 border-[#D9DDE2] ml-4">
                  {item.outcomes.map((outcome, oIdx) => (
                    <div
                      key={oIdx}
                      className="bg-[#F0F2F4] rounded-[8px] p-3 flex flex-col justify-center ml-2"
                    >
                      <span className="text-[#080B10] text-[13px] font-semibold">
                        {outcome.title}
                      </span>
                      <span className="text-[#777D86] text-[11px] mt-0.5">
                        {outcome.subtitle}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default WorkflowSection;
