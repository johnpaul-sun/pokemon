import BackBtn from '../Assets/Images/back-button.png';
import './Styles/BackButton.css';

function BackButton() {
  return (
    <>
      <button
        className="back-btn"
        onClick={() => {
          window.location = '/';
        }}
      >
        <img src={BackBtn} alt="back" />
        <h1>Back</h1>
      </button>
    </>
  );
}

export default BackButton;
