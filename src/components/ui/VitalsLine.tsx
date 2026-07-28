type VitalsLineProps = {
  className?: string;
};

// Signature motif: an EKG/vitals readout line used as a section divider
// throughout the site, echoing the clinical, monitored-care subject matter.
export default function VitalsLine({ className = "" }: VitalsLineProps) {
  return (
    <svg
      className={`vitals-line ${className}`}
      viewBox="0 0 400 28"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0 14 H140 L155 4 L168 24 L180 14 H400" />
    </svg>
  );
}
