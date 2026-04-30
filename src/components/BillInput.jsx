import ErrorMessage from './ErrorMessage'

export default function BillInput({ value, onChange, error, onBlur }) {
  function handleChange(e) {
    const raw = e.target.value
    if (raw === '' || /^\d*\.?\d{0,2}$/.test(raw)) {
      onChange(raw)
    }
  }

  return (
    <div className="field">
      <label className="field__label" htmlFor="bill">
        Bill Amount
      </label>
      <div className="field__input-wrapper">
        <span className="field__prefix">$</span>
        <input
          id="bill"
          className={`field__input ${error ? 'field__input--error' : ''}`}
          type="text"
          inputMode="decimal"
          placeholder="0.00"
          value={value}
          onChange={handleChange}
          onBlur={onBlur}
          aria-invalid={!!error}
          aria-describedby={error ? 'bill-error' : undefined}
        />
      </div>
      <ErrorMessage id="bill-error" message={error} />
    </div>
  )
}
