const StormIcon = props => {
    const { height, width, color, style } = props;
    return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" style={style}
        strokeWidth="1.5" stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />
        <polyline points="13 14 11 18 14 18 12 22" />
    </svg>;
};

export default StormIcon;

StormIcon.defaultProps = {
    width: '1.5rem',
    height: '1.5rem',
    color: '#000'
};