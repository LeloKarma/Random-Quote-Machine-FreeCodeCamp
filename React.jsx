import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const quoteData = [
  { text: '"Be yourself; everyone else is already taken."', author: "― Oscar Wilde" },
  { text: `“So many books, so little time.”`, author: "― Frank Zappa" },
  { text: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`, author: "― Albert Einstein" },
  { text: `“You only live once, but if you do it right, once is enough.”`, author: "― Mae West" },
  { text: ` “A room without books is like a body without a soul.”`, author: "― Marcus Tullius Cicero" },
];

const QuoteBox = ({ quote, handleNewQuote }) => {
  
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${quote.text} ${quote.author}`)}`;

  return (
    // user story 1
    <div id="quote-box">
      {/* user story 2 */}
      <p id="text">{quote.text}</p>  
      {/* user story 3 */}
      <h2 id="author">{quote.author}</h2>
      <div className="actions">
        <button 
          id="new-quote" 
          className="button"
          onClick={handleNewQuote}
        >
          New Quote
        </button>
        {/* user story 5 */}
        <a 
          id="tweet-quote"
          className="button"
          href={tweetUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Tweet
        </a>
      </div>
    </div>
  );
};

const getRandomIndex = (max) => 
  Math.round(Math.random() * ((quoteData.length - 1) - 0) + 0);

const App = () => {
  const [quote, setQuote] = React.useState(quoteData[getRandomIndex()]);

  const handleNewQuote = () => {
    setQuote(quoteData[getRandomIndex()]);
  };

  return (
    <div className="main">
      <QuoteBox handleNewQuote={handleNewQuote} quote={quote} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));
