import { useState } from 'react'
import BillInput from './BillInput'
import TipSelector from './TipSelector'
import PeopleInput from './PeopleInput'
import Results from './Results'
import './TipCalculator.css'

const PRESET_TIPS = [15, 18, 20, 25]

function validateBill(val) {
  if (val === '' || val === '.') return 'Enter a bill amount'
  if (parseFloat(val) <= 0) return 'Amount must be greater than $0'
  return ''
}

function validatePeople(val) {
  const n = parseInt(val)
  if (!val || isNaN(n) || n < 1) return 'Must be at least 1 person'
  return ''
}

function validateCustomTip(val) {
  if (val === '') return ''
  const n = Number(val)
  if (n <= 0) return 'Tip must be greater than 0%'
  if (n > 100) return 'Tip cannot exceed 100%'
  return ''
}

export default function TipCalculator() {
  const [bill, setBill] = useState('')
  const [tipPercent, setTipPercent] = useState(15)
  const [customTip, setCustomTip] = useState('')
  const [people, setPeople] = useState(1)

  const [billError, setBillError] = useState('')
  const [peopleError, setPeopleError] = useState('')
  const [customTipError, setCustomTipError] = useState('')

  const activeTip = customTip !== '' ? Number(customTip) : tipPercent
  const billNum = parseFloat(bill) || 0
  const peopleNum = Math.max(1, parseInt(people) || 1)

  const tipAmount = billNum * (activeTip / 100)
  const total = billNum + tipAmount
  const tipPerPerson = tipAmount / peopleNum
  const totalPerPerson = total / peopleNum

  const isEmpty = billNum <= 0 || !!billError

  function handlePresetSelect(pct) {
    setTipPercent(pct)
    setCustomTip('')
    setCustomTipError('')
  }

  function handleCustomTipChange(val) {
    setCustomTip(val)
    setCustomTipError(val !== '' ? validateCustomTip(val) : '')
  }

  function handleReset() {
    setBill('')
    setTipPercent(15)
    setCustomTip('')
    setPeople(1)
    setBillError('')
    setPeopleError('')
    setCustomTipError('')
  }

  return (
    <div className="calculator">
      <div className="calculator__header">
        <h1 className="calculator__title">Tip Calculator</h1>
        <p className="calculator__subtitle">Split the bill without the math</p>
      </div>

      <div className="calculator__inputs">
        <BillInput
          value={bill}
          onChange={setBill}
          error={billError}
          onBlur={() => setBillError(validateBill(bill))}
        />
        <TipSelector
          presets={PRESET_TIPS}
          selected={tipPercent}
          customTip={customTip}
          customTipError={customTipError}
          onSelectPreset={handlePresetSelect}
          onCustomChange={handleCustomTipChange}
          onCustomBlur={() => setCustomTipError(validateCustomTip(customTip))}
        />
        <PeopleInput
          value={people}
          onChange={setPeople}
          error={peopleError}
          onBlur={() => setPeopleError(validatePeople(String(people)))}
        />
      </div>

      <Results
        tipAmount={tipAmount}
        total={total}
        tipPerPerson={tipPerPerson}
        totalPerPerson={totalPerPerson}
        people={peopleNum}
        isEmpty={isEmpty}
      />

      <button className="calculator__reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  )
}
