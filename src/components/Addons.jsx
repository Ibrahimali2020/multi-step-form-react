export default function Addons({ addons, AddOnsList, toggleSelected, isChecked }) {

  return <div className="addons">
    <span> <input type="checkbox"
      value={addons.selected}
      onChange={() => toggleSelected(addons.name)}
      checked={addons.selected} /></span>

    <div>
      <h4>{addons.name}</h4>
      <p>{addons.description}</p>
    </div>

    <div>
      {(isChecked
        ? `$${AddOnsList.find(AddOnsList => AddOnsList.name === addons.name)?.priceYearly}/yr`
        : `$${AddOnsList.find(AddOnsList => AddOnsList.name === addons.name)?.priceMonthly}/mo`)}
    </div>
  </div>
}