import Toggle from "../components/Toggle"
import Card from "../components/Card";

export default function SelectYourPlan({ plans, isChecked, setIsChecked, selectedPlan, setSelectedPlan }) {


  return <>
    <div className="cards">

      {plans.map(plan => <Card
        plan={plan}
        isChecked={isChecked}
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
        key={plan.name} />)}
    </div >

    <div className="monthly-yearly">
      <p className={!isChecked ? 'periodSelected' : 'noPeriodSelected'}>Monthly</p>
      <Toggle isChecked={isChecked} setIsChecked={setIsChecked} />
      <p className={isChecked ? 'periodSelected' : 'noPeriodSelected'}>Yearly</p>
    </div>
  </>
}


