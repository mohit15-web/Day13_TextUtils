import { useState, useEffect, useReducer } from "react";
import Preview from "./Preview";
import Summary from "./Summary";
import { useRef } from "react";

function reducer(state,action){
  switch(action.type){
    case "UPPERCASE":{
      let newStr = state.str.toUpperCase();
      return {str:newStr}
    }
    case "LOWERCASE":{
      let newStr = state.str.toLowerCase();
      return {str:newStr}
    }
    case "CLEAR_TEXT":{
      return {str:""}
    }
    case "COPY_TO_CLIPBOARD":{
      navigator.clipboard.writeText(state.str);
      return {str:state.str}
    }
    case "REMOVE_EXTRA_SPACES":{
      let temp = state.str.replace(/\s+/g, ' ');
      return {str:temp}
    }
    case "SET_TEXT":{
      return {str:action.payload}
    }
    default:{
      return state
    }
  }
}

const calculateReadingTime = (textLength) => {
  const averageReadingSpeed = 200; // Adjust this value as needed
  const minutes = textLength / averageReadingSpeed;
  return Math.ceil(minutes);
};

function Home() {
  const[state,dispatch] = useReducer(reducer,{str:""})
  const [text, setText] = useState("");
  const [Charlength, setCharLength] = useState(0);
  const[totalWords,setTotalwords] = useState(0)
  const[readingTime,setReadingTime] = useState(0)
  const inputRef = useRef(null);



  useEffect(() => {
    setText(state.str);

    const trimmedText = text.trim();
    setCharLength(trimmedText.length);

    const words = text.split(" ").filter(word => word !== '');  
    setTotalwords(words.length)

    const calculatedReadingTime = calculateReadingTime(trimmedText.length);
  setReadingTime(calculatedReadingTime);
  }, [state.str]);

  useEffect(() => {
    dispatch({ type: "SET_TEXT", payload: text });
  }, [text]);

  return (
    <div className=" px-32 flex flex-col justify-start items-center gap-6 p-5">
      <h1 className="text-2xl font-bold mb-4">
        TextUtils - Word Counter, Character Counter, Remove Extra Space
      </h1>
      <textarea
        ref={inputRef}
        className="border bg-transparent border-gray-300 rounded-md p-2 w-full h-32 resize-none"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div className="flex gap-3">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => dispatch({type:"UPPERCASE"})}
        >
          UPPERCASE
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                   onClick={() => dispatch({type:"LOWERCASE"})}

        >
          LOWERCASE
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          onClick={() => dispatch({type:"CLEAR_TEXT"})}
        >
          CLEAR
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
          onClick={() => dispatch({type:"COPY_TO_CLIPBOARD"})}
        >
          COPY TO CLIPBOARD
        </button>
        <button
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
          onClick={() => dispatch({type:"REMOVE_EXTRA_SPACES"})}
        >
          REMOVE EXTRA SPACES
        </button>
      </div>

      <Summary Charlength={Charlength} totalWords={totalWords} readingTime={readingTime}/>
      <Preview show={state.str} />
    </div>
  );
}

export default Home;
