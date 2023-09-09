
export default function Toggle({ isChecked, setIsChecked }) {

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={`toggle-switch ${isChecked ? 'active' : ''}`} onClick={handleToggle}>
      <div className={`slider ${isChecked ? 'active' : ''}`}></div>
    </div>
  );
}