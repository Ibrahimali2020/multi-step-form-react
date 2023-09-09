import { useState } from 'react';
import './index.css';
import { data } from './data';
import { plans } from './plans';
import { PickAddOnsList } from './PickAddOnsList';
import Container from './components/Container';
import Nav from './components/Nav';
import Step from './components/Step';
import Button from './components/Button';
import Header from './components/Header';
import ThankYou from './pages/ThankYou';
import Summary from './pages/Summary';
import PickAddOns from './pages/PickAddOns';
import SelectYourPlan from './pages/SelectYourPlan';
import PersonalInfoForm from './pages/PersonalInfoForm';


// App component
export default function App() {
  const [step, setStep] = useState(1)
  const [selectedPlan, setSelectedPlan] = useState('Arcade')
  const [isChecked, setIsChecked] = useState(false);
  const [AddOnsList, setAddOnsList] = useState(PickAddOnsList)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const handleNext = (e) => {

    if (step === 1) {
      if (nameError || emailError || phoneNumberError) {
        // Display an error message or perform other actions for failed validation
        alert("Please fill in all fields.");
        return; // Prevent moving to the next step
      }
    }

    if (step === 2) {
      if (!selectedPlan) {
        // Display an error message or perform other actions for failed validation
        alert("Please select a plan before proceeding.");
        return; // Prevent moving to the next step
      }
    }
    e.preventDefault();
    if (step < 5) setStep((s) => s + 1);
  }

  function handlePrev(e) {
    e.preventDefault();
    if (step > 1) setStep((s) => s - 1);
  }

  function toggleSelected(name) {
    setAddOnsList(AddOns => AddOns.map(AddOns => AddOns.name === name ? { ...AddOns, selected: !AddOns.selected } : AddOns))

  }

  return <Container>
    <Nav>
      {data.map(item => (
        <Step curstep={item.step} step={step} key={item.step} />
      ))}
    </Nav>

    <main>
      {data.map(item => item.step === step && <Header title={item.title} info={item.info} key={item.step} />)}

      <div >
        <div className='main-content'>
          {step === 1 && <PersonalInfoForm
            step={step}
            handleNext={handleNext}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            nameError={nameError}
            setNameError={setNameError}
            emailError={emailError}
            setEmailError={setEmailError}
            phoneNumberError={phoneNumberError}
            setPhoneNumberError={setPhoneNumberError}

          />}

          {step === 2 && <SelectYourPlan
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
            isChecked={isChecked}
            setIsChecked={setIsChecked}
            plans={plans}
          />}

          {step === 3 && <PickAddOns
            AddOnsList={AddOnsList}
            setAddOnsList={setAddOnsList}
            PickAddOnsList={PickAddOnsList}
            toggleSelected={toggleSelected}
            isChecked={isChecked}
          />}

          {step === 4 && <Summary
            plans={plans}
            selectedPlan={selectedPlan}
            isChecked={isChecked}
            AddOnsList={AddOnsList}
          />}
          {step === 5 && <ThankYou />}
        </div>

        <div className="buttons">
          {(step > 1 && step < 5) && <Button className='btn-secondary' onClick={handlePrev}>Go Back</Button>
          }
          {(step < 4) && <Button className='btn-primary' onClick={handleNext}>Next Step</Button>}
          {step === 4 && <Button className='btn-confirm' onClick={handleNext}>Confirm</Button>}
        </div>

      </div>
    </main>
  </Container>
}





