export default function Step({ curstep, step }) {
  return <div className='step'>

    <div className={`step-num ${step === curstep ? 'active' : ''}`}>
      {curstep}
    </div>

    <div className="step-info">
      <p>STEP {curstep}</p>
      <h4>{curstep === 1 && 'YOUR INFO'}</h4>
      <h4>{curstep === 2 && 'SELECT PLAN'}</h4>
      <h4>{curstep === 3 && 'ADD-ONS'}</h4>
      <h4>{curstep === 4 && 'SUMMARY'}</h4>
    </div>

  </div >
}