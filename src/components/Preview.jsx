import PropTypes from "prop-types"
function Preview({show}) {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">
            
            Preview Summary</h1>
    <div className="border border-gray-300 rounded-md p-2 w-full h-32">
        {show}</div>
    </>
  )
}

Preview.propTypes = {
    show:PropTypes.func
}

export default Preview