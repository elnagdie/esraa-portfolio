const tagTypeMap = {
  PM: 'tag-pm',
  PMM: 'tag-pmm',
  TPM: 'tag-tpm',
  FOUNDER: 'tag-founder',
};

export default function TagBadge({ label }) {
  const className = tagTypeMap[label] || 'tag-default';
  return <span className={className}>{label}</span>;
}
