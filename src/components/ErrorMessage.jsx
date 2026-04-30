export default function ErrorMessage({ id, message }) {
  if (!message) return null

  return (
    <p id={id} className="field__error" role="alert">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <circle cx="12" cy="16" r="0.5" fill="currentColor" />
      </svg>
      {message}
    </p>
  )
}
