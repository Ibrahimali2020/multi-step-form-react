
export default function PersonalInfoForm({ name, setName, email, setEmail, phoneNumber, setPhoneNumber, nameError, setNameError, emailError, setEmailError, phoneNumberError, setPhoneNumberError }) {

  const validateName = () => {
    if (!name) {
      setNameError("Name is required");
    } else {
      setNameError("");
    }
  };

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("Email is required");
    } else if (!emailPattern.test(email)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const validatePhoneNumber = () => {
    const phonePattern = /^\+\d{1,3} \d{1,3} \d{1,3} \d{1,3}$/;
    if (!phoneNumber) {
      setPhoneNumberError("Phone number is required");
    } else if (!phonePattern.test(phoneNumber)) {
      setPhoneNumberError("Invalid phone number format");
    } else {
      setPhoneNumberError("");
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    validateName();
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail();
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    validatePhoneNumber();
  };

  return (
    <form>
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="e.g. Stephen King"
          value={name}
          onChange={handleNameChange}
          required
        />
        <div className="error">{nameError}</div>
      </div>

      <div className="form-control">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <div className="error">{emailError}</div>
      </div>

      <div className="form-control">
        <label htmlFor="Phone">Phone Number</label>
        <input
          type="text"
          name="Phone"
          id="Phone"
          placeholder="e.g. +1 234 567 890"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          required
        />
        <div className="error">{phoneNumberError}</div>
      </div>
    </form>
  );
}
