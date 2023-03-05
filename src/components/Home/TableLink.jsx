const TableLink = ({ data }) => {

    return(
        <table>
            <tbody>
                {
                    data.map(({ title, link }, key) => (
                        <tr key={key}>
                            <td >{ title } Link</td>
                            <td>
                                {
                                    link ? 
                                    <a href={link} className="mx-2 text-sm text-white border-b-2 border-white">Click Here</a>
                                    :
                                    <span className="mx-2 text-sm text-white border-b-2 border-white w-fit">Unavailable or On Progess</span>
                                }
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default TableLink