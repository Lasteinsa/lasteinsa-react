const BottomLine = ({addClass = {style: "border-b-sky-400"}}) => {
    return(
        <div className="flex place-content-center mt-4">
            <div className={`w-1/2 border-b-4 rounded-lg ${addClass.style}`}></div>
        </div>
    )
}

export default BottomLine