export default function Summary({ selectedPlan, plans, isChecked, AddOnsList }) {

  // Find the selected plan data
  const selectedPlanData = plans.find(plan => plan.name === selectedPlan);

  // Calculate the total price of the selected plan
  const planPrice = isChecked ? selectedPlanData.priceYearly : selectedPlanData.priceMonthly;

  // Calculate the total price of selected add-ons
  const addOnsPrice = AddOnsList
    .filter(addOn => addOn.selected === true)
    .reduce((total, selectedAddOn) => {
      return total + (isChecked ? selectedAddOn.priceYearly : selectedAddOn.priceMonthly);
    }, 0);

  // Calculate the total price based on billing frequency
  const yearlyTotalPrice = planPrice + addOnsPrice;
  const monthlyTotalPrice = isChecked ? yearlyTotalPrice / 12 : yearlyTotalPrice;

  return (
    <>
      <div className="summaryBox">
        <div className="row">
          <div>
            <div><strong>{selectedPlan} ({isChecked ? 'Yearly' : 'Monthly'})</strong></div>
            <p className='change'>Change</p>
          </div>
          <div className="Price">
            <strong>
              {selectedPlan &&
                (isChecked
                  ? `$${plans.find(plan => plan.name === selectedPlan)?.priceYearly}/yr`
                  : `$${plans.find(plan => plan.name === selectedPlan)?.priceMonthly}/mo`)}
            </strong>
          </div>
        </div>
        <div className="line"></div>
        {AddOnsList
          .filter(AddOns => AddOns.selected === true)
          .map(selectedAddOn => (
            <div className="row" key={selectedAddOn.name}>
              <p>{selectedAddOn.name}</p>
              <div className="Price">
                {isChecked
                  ? `$${selectedAddOn.priceYearly}/yr`
                  : `$${selectedAddOn.priceMonthly}/mo`}
              </div>
            </div>
          ))}
      </div>

      <div className="total row">
        <p>Total (per {isChecked ? 'year' : 'month'})</p>
        <div className="totalPrice">
          {isChecked ? `$${yearlyTotalPrice}/yr` : `$${monthlyTotalPrice}/mo`}
        </div>
      </div>
    </>
  );
}
