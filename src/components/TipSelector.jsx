import ErrorMessage from './ErrorMessage'

export default function TipSelector({ presets, selected, customTip, customTipError, onSelectPreset, onCustomChange, onCustomBlur }) {
  function handleCustomChange(e) {
    const raw = e.target.value
    if (raw === '' || /^\d{0,3}$/.test(raw)) {
      onCustomChange(raw)
    }
  }

  const isCustomActive = customTip !== ''

  return (
    <div className="field">
      <label className="field__label">Tip %</label>
      <div className="tip-selector">
        <div className="tip-selector__presets">
          {presets.map((pct) => (
            <button
              key={pct}
              className={`tip-btn ${!isCustomActive && selected === pct ? 'tip-btn--active' : ''}`}
              onClick={() => onSelectPreset(pct)}
            >
              {pct}%
            </button>
          ))}
        </div>
        <div className="field__input-wrapper">
          <input
            className={`field__input tip-selector__custom ${isCustomActive && !customTipError ? 'field__input--active' : ''} ${customTipError ? 'field__input--error' : ''}`}
            type="text"
            inputMode="numeric"
            placeholder="Custom %"
            value={customTip}
            onChange={handleCustomChange}
            onBlur={onCustomBlur}
            aria-invalid={!!customTipError}
            aria-describedby={customTipError ? 'custom-tip-error' : undefined}
          />
        </div>
      </div>
      <ErrorMessage id="custom-tip-error" message={customTipError} />
    </div>
  )
}
