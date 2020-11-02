import './custom-button.styles.scss';

const CustomButton = ({ children, signInWithGoogle }) => (
  <button
    className={`custom-button ${signInWithGoogle ? 'sign-in-with-Google' : ''}`}
  >
    {children}
  </button>
);

export default CustomButton;
