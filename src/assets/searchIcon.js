const SearchIcon = props => {
    const { color, height, width } = props;
    return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24"
        strokeWidth="1.5" stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="10" cy="10" r="7" />
        <line x1="21" y1="21" x2="15" y2="15" />
    </svg>;
};

export default SearchIcon;

SearchIcon.defaultProps = {
    width: '1.5rem',
    height: '1.5rem',
    color: '#000',
};