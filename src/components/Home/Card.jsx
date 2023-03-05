import List from "./List"

const Card = ({ imgUrl, title, children, lists, style = "bg-sky-500 " }) => {
    
    return (
        <div className={style + `m-4 p-8 rounded-sm text-white dark:bg-slate-800 space-y-4`}>
            <img src={imgUrl} width="100px" className="bg-slate-100 p-4 rounded-md" />
            <p className="text-2xl font-semibold"> { title } </p>
            <div className="space-y-4">
                <p> 
                    { children }
                </p>
                <List lists={lists} />
            </div>
        </div>
    )
}

export default Card