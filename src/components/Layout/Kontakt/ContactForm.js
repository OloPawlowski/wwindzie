import useInputHook from './hooks/use-input';
import emailjs from '@emailjs/browser';
import classes from './ContactForm.module.css';

const noEmpty = value => value.trim() !== '';

const ContactForm = () => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    isError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInputHook(noEmpty);

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    isError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInputHook(value => value.includes('@') && value.includes('.'));

  const {
    value: enteredContent,
    isValid: contentIsValid,
    isError: contentInputHasError,
    valueChangeHandler: contentChangeHandler,
    inputBlurHandler: contentBlurHandler,
    reset: resetContentInput
  } = useInputHook(noEmpty);

  let formIsValid = false;
  if (nameIsValid && emailIsValid && contentIsValid) {
    formIsValid = true;
  }  

  const SubmitHandler = (event) => {
    event.preventDefault();
    if (!nameIsValid) {
      return;
    }
    emailjs
      .sendForm(
        'service_s69nvki',
        'template_sja5ydr',
        event.target,
        'Y_UibvL7H2OubUGyo'
      )
      .then(
        (response) => {
          console.log(response.status, response.text);
          alert('Wiadomość została wysłana.', response.text);
        },
        (error) => {
          console.log(error.text, error);
        }
      );
    resetNameInput(); 
    resetEmailInput();    
    resetContentInput();   
  };
  //   const nameInputClasses = nameInputHasError   //nameIsInvalid
  //   ? 'form-control invalid'
  //   : 'form-control';

  // const emailInputClasses = emailInputHasError //emailIsInavalid
  //   ? 'form-control invalid'
  //   : 'form-control';
  return (
    <div className={classes['form-block']}>
      <h4>napisz do nas:</h4>
      <form onSubmit={SubmitHandler}>
        <div className={classes['form-inputs']}>
          <div className={classes['form-input']}>
            <label htmlFor="name">Twoje imię</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              value={enteredName}
            />
            {nameInputHasError && (//nameIsInvalid
              <p className={classes.error}>proszę wpisz swoje imię</p>
            )}
          </div>
          <div className={classes['form-input']}>
            <label htmlFor="email">Twój email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              value={enteredEmail}
            />
            {emailInputHasError && (
              <p className={classes.error}>proszę wpisz poprawny email</p>
            )}
          </div>
          <div className={classes['form-input']}>
            <label htmlFor="content">treść wiadomości</label>
            <textarea
              rows={10}
              id="content"
              name="message"
              onChange={contentChangeHandler}
              onBlur={contentBlurHandler}
              value={enteredContent}
            />
            {contentInputHasError && (//contentIsInvalid
              <p className={classes.error}>proszę wpisz treść wiadomości</p>
            )}
          </div>
          <div>
            <button
              className={classes.button}
              disabled={!formIsValid}
              type="submit"
            >
              wyślij wiadomość
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;






  // const [enteredName, setEnteredName] = useState('');
  // const [nameTouched, setNameTouched] = useState(false);

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailTouched, setEmailTouched] = useState(false);

  // const [enteredContent, setEnteredContent] = useState('');
  // const [contentTouched, setContentTouched] = useState(false);

  // const nameIsValid = enteredName.trim() !== '';
  // const nameIsInvalid = !nameIsValid && nameTouched;

  // const emailIsValid = enteredEmail.includes('@') && enteredEmail.includes('.');
  // const emailIsInavalid = !emailIsValid && emailTouched;

  // const contentIsValid = enteredContent.trim() !== '';
  // const contentIsInvalid = !enteredContent && contentTouched;

  // let formIsValid = false;
  // if (nameIsValid && emailIsValid && contentIsValid) {
  //   formIsValid = true;
  // }

  // const nameChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  // };
  // const nameBlurHandler = (event) => {
  //   setNameTouched(true);
  // };
  // const emailChangeHandler = (event) => {
  //   setEnteredEmail(event.target.value);
  // };
  // const emailBlurHandler = (event) => {
  //   setEmailTouched(true);
  // };
  // const contentChangeHandler = (event) => {
  //   setEnteredContent(event.target.value);
  // };
  // const contentBlurHandler = (event) => {
  //   setContentTouched(true);
  // };

  // const SubmitHandler = (event) => {
  //   event.preventDefault();
  //   if (!nameIsValid) {
  //     return;
  //   }
  //   emailjs
  //     .sendForm(
  //       'service_s69nvki',
  //       'template_sja5ydr',
  //       event.target,
  //       'Y_UibvL7H2OubUGyo'
  //     )
  //     .then(
  //       (response) => {
  //         console.log(response.status, response.text);
  //         alert('wiadomość wysłana', response.text);
  //       },
  //       (error) => {
  //         console.log(error.text, error);
  //       }
  //     );

    // setEnteredName('');
    // setNameTouched(false);

    // setEnteredEmail('');
    // setEmailTouched(false);
  
    // setEnteredContent('');
    // setContentTouched(false);
  //};
  //   const nameInputClasses = nameInputHasError   //nameIsInvalid
  //   ? 'form-control invalid'
  //   : 'form-control';

  // const emailInputClasses = emailInputHasError //emailIsInavalid
  //   ? 'form-control invalid'
  //   : 'form-control';
