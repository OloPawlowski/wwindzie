import React, { useState, useEffect } from "react";
import classes from "./Edu.module.css";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";

const Edu = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [httpError, setHttpError] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [score, setScore] = useState(0);
  const [finish, setFinish] = useState(false);
  const [isAnswerTrue, setIsAnswerTrue] = useState(false);
  const [idNum, setIdNum] = useState(4);
  const numberOfQuestion = current + 1;

  const [error, setError] = useState(null);

  const url = import.meta.env.VITE_REACT_APP_DATABASE;

  // useEffect(() => {
  //   const fetchQuestions = async () => {
  //     const response = await fetch(url);
  //     if (!response.ok) {
  //       throw new Error("cosik poszło nie tak jak trza");
  //     }
  //     const responseData = await response.json();
  //     setQuestions(responseData);
  //     setIsLoaded(true);
  //   };
  //   fetchQuestions().catch((error) => {
  //     setIsLoaded(false);
  //     setHttpError(error.message);
  //   });
  // }, []);


  useEffect(() => {
    const fetchQuestions = async () => {
      if (!url) {
        console.error("URL jest niezdefiniowany. Sprawdź zmienną środowiskową VITE_REACT_APP_DATABASE.");
        setError("Błąd konfiguracji: brak URL bazy danych");
        setIsLoaded(true);
        return;
      }

      try {
        console.log("Próba pobrania danych z URL:", url);
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          console.error("Nieoczekiwany typ zawartości:", contentType);
          const textData = await response.text();
          console.error("Otrzymane dane:", textData);
          throw new Error(`Nieoczekiwany typ zawartości: ${contentType}`);
        }

        const jsonData = await response.json();
        console.log("Sparsowane dane JSON:", jsonData);
        setQuestions(jsonData);
        setIsLoaded(true);
      } catch (e) {
        console.error("Błąd podczas pobierania lub przetwarzania danych:", e);
        setError(e.message);
        setIsLoaded(true);
      }
    };

    fetchQuestions();
  }, [url]);

  if (error) {
    return <div>Błąd: {error}. Sprawdź konsolę przeglądarki po więcej informacji.</div>;
  } else if (!isLoaded) {
    return <div>Ładowanie...</div>;
  }

  if (httpError) {
    return (
      <section className={classes.loading}>
        <p>{httpError}</p>
      </section>
    );
  }
  if (!isLoaded) {
    return (
      <section className={classes.loading}>
        <p>pobieram...</p>
      </section>
    );
  }
  const nextQuestionHandler = () => {
    let adNext = current + 1;
    if (adNext === questions.length) {
      setFinish(true);
      return;
    }
    setCurrent(adNext);
    setShowButton(false);
  };

  let scorePercentage = (score / questions.length) * 100;

  let comment = "Zapraszamy na szkolenie";
  if (scorePercentage === 100)
    comment =
      "Brawo! Lux! Świetnie! Graatuulaacjeee!!! Zapraszamy do współpracy! :)";
  else if (scorePercentage >= 90) {
    comment = "Bravo! Bardzo dobry wynik! Gratulacje! Masz dużą świadomość";
  } else if (scorePercentage >= 75) {
    comment = "Dobrze! zapraszamy na doszkalanie!";
  } else if (scorePercentage >= 50) {
    comment = "Nieźle! zapraszamy na doszkalanie!";
  }

  let changeColor = false;
  let buttonText = "kolejne pytanie";
  if (numberOfQuestion === questions.length) {
    buttonText = "zobacz wynik";
    changeColor = true;
  }
  const introduction = (
    <div className={classes.intro}>
      <p>
        Czy wiesz i rozumiesz jak zachowuje się jacht i dlaczego?
        <br /> Jakie siły działają na niego i jakie są miedzy nimi zależności?
        <br />
        Niżej są pytania zwiazane z teorią żeglowania i manewrowania,
        <br /> dzięki ktorym możesz zweryfikować i poszerzyć swoją wiedzę na ten
        temat.
        <br />
        Dla ułatwienia tylko jedna odpowiedź jest prawidłowa i ujawnia się na
        zielono.
      </p>
    </div>
  );
  const resultHandler = (result, id) => {
    setIdNum(id);
    setShowButton(true);
    if (result === true) {
      setIsAnswerTrue(true);
      setScore(score + 1);
    }
  };
  const thumbUp = <FaThumbsUp className={classes["thumb-up"]} />;
  const thumbDown = <FaThumbsDown className={classes["thumb-down"]} />;

  const buttonInside = showButton && (
    <button
      className={!changeColor ? classes.button : classes.buttonFinish}
      type='button'
      onClick={nextQuestionHandler}
    >
      {buttonText}
    </button>
  );
  const question = (
    <div className={classes.container}>
      <p className={classes.numbers}>
        pytanie {numberOfQuestion} z {questions.length}
      </p>
      <h3 className={classes.question}>{questions[current].question}</h3>
      {questions[current].answers.map((el, id) => (
        <button
          className={
            showButton && el.trueOrFalse ? classes.answerTrue : classes.answer
          }
          key={el.answer}
          disabled={showButton}
          onClick={() => resultHandler(el.trueOrFalse, id)}
        >
          {el.answer}
          {showButton && !el.trueOrFalse && id === idNum && thumbDown}
          {showButton && el.trueOrFalse && id === idNum && thumbUp}
        </button>
      ))}
      {buttonInside}
    </div>
  );

  return (
    <div className={classes.quiz}>
      {current === 0 && !showButton && introduction}
      {!finish ? (
        question
      ) : (
        <h3 className={classes.result}>
          <p>{comment}</p>
          Masz {scorePercentage.toFixed(2)}% świadomości tego, jak zachowuje się
          jacht i dlaczego.
        </h3>
      )}
    </div>
  );
};
export default Edu;
