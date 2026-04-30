function fmt(num) {
  return num.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}

export default function Results({ tipAmount, total, tipPerPerson, totalPerPerson, people, isEmpty }) {
  if (isEmpty) {
    return (
      <div className="results results--empty">
        <p className="results__placeholder">Enter a bill amount to see your totals</p>
      </div>
    )
  }

  return (
    <div className="results">
      <div className="results__row results__row--highlight">
        <span>Tip Amount</span>
        <span>{fmt(tipAmount)}</span>
      </div>
      <div className="results__row results__row--highlight">
        <span>Total</span>
        <span>{fmt(total)}</span>
      </div>

      {people > 1 && (
        <>
          <div className="results__divider" />
          <p className="results__split-label">Per person ({people} people)</p>
          <div className="results__row">
            <span>Tip / Person</span>
            <span>{fmt(tipPerPerson)}</span>
          </div>
          <div className="results__row">
            <span>Total / Person</span>
            <span>{fmt(totalPerPerson)}</span>
          </div>
        </>
      )}
    </div>
  )
}
