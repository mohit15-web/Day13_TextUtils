import PropTypes from "prop-types"
function Summary({Charlength,totalWords,readingTime}) {
  return (
    <div className="flex flex-col justify-center items-center py-6 gap-3">
        <h1 className="font-bold text-3xl">Summary of your text</h1>
        <div>
            <p>Number of words : {totalWords}</p>
            <p>Number of Characters :{Charlength} </p>
            <p>Reading time : {readingTime}</p>
        </div>
    </div>
  )
}

Summary.propTypes = {
    Charlength:PropTypes.func,
    totalWords:PropTypes.func,
    readingTime:PropTypes.func
}

export default Summary