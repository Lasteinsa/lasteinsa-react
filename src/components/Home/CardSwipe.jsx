import TableLink from "./TableLink"

const CardSwipe = ({ imgUrl, title, desc, github, demo, stack }) => {
    return (
        <>
            <div className="flex place-items-center place-content-center m-4 bg-white rounded-lg">
                <img className="h-52 border-4 shadow-xl" src={imgUrl} />
            </div>
            <div className="m-4 p-4 bg-red-500 text-white rounded-md space-y-4">
                <p className="text-lg font-semibold">
                    { title }
                </p>
                <p>
                    { desc }
                </p>
                <TableLink
                    data={[{title: "Github", link: github}, {title: "Demo", link: demo}]}
                />
                {
                    stack?.map((url, key) => (
                        <img key={key} className="inline-block" src={url} />
                    ))
                }
            </div>
        </>
    )
}

export default CardSwipe