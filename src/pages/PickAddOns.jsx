import Addons from "../components/Addons"

export default function PickAddOns({ AddOnsList, setAddOnsList, toggleSelected, isChecked }) {



  return <div className="PickAddOns">
    {AddOnsList.map(addons => <Addons
      addons={addons}
      key={addons.name}
      AddOnsList={AddOnsList}
      setAddOnsList={setAddOnsList}
      toggleSelected={toggleSelected}
      isChecked={isChecked}
    />)}
  </div>
}
