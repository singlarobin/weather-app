const SnowIcon = props => {
    const { height, width, color, style } = props;
    return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" style={style}
        strokeWidth="1.5" stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7" />
        <path d="M11 15v.01m0 3v.01m0 3v.01m4 -4v.01m0 3v.01" />
    </svg>;
};

export default SnowIcon;

SnowIcon.defaultProps = {
    width: '1.5rem',
    height: '1.5rem',
    color: '#000'
};