const List = ({ lists }) => {
    return (
        <ul className="list-disc mx-4">
            {
                lists?.map((list, key) => (
                    <li key={key}> { list } </li>
                ))
            }
        </ul>
    )
}

export default List