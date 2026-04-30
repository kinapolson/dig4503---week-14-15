import ErrorMessage from './ErrorMessage'

export default function PeopleInput({ value, onChange, error, onBlur }) {
  function handleChange(e) {
    const raw = e.target.value
    if (raw === '' || /^\d{1,2}$/.test(raw)) {
      onChange(raw)
    }
  }

  return (
    <div className="field">
      <label className="field__label" htmlFor="people">
        Number of People
      </label>
      <div className="field__input-wrapper">
        <span className="field__prefix">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </span>
        <input
          id="people"
          className={`field__input ${error ? 'field__input--error' : ''}`}
          type="text"
          inputMode="numeric"
          placeholder="1"
          value={value}
          onChange={handleChange}
          onBlur={onBlur}
          aria-invalid={!!error}
          aria-describedby={error ? 'people-error' : undefined}
        />
      </div>
      <ErrorMessage id="people-error" message={error} />
    </div>
  )
}
