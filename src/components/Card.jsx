
export default function Card({ isChecked, plan, selectedPlan, setSelectedPlan }) {
  function handlePlan(PlanName) {
    setSelectedPlan(PlanName === selectedPlan ? '' : PlanName);
  }

  return <div className={`card ${selectedPlan === plan.name ? 'activeCard' : ''}`} onClick={() => handlePlan(plan.name)}>
    <img src={`/images/${plan.img}`} alt="" />
    <p>{plan.name}</p>
    {isChecked ? (
      <>
        <div> ${plan.priceYearly}/yr</div>
        <p className="yearly" div > 2 months free</p>
      </>

    ) : <div>${plan.priceMonthly}/mo</div>}

  </div>
}