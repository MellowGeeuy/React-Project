const Item = () => {
    const name = 'พักโรงแรม'
    const amout = '5000'
    return (
        <ul className="tb">
            <li>{name} <span>-{amout}</span></li>
            <li>{name} <span>-{amout}</span></li>
            <li>{name} <span>-{amout}</span></li>
            <li>{name} <span>-{amout}</span></li>
            <li>{name} <span>-{amout}</span></li>
        </ul>
    )
}

export default Item