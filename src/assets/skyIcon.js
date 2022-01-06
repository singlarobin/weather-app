const SkyIcon = props => {
    const { height, width, color, style } = props;
    return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" style={style}
        strokeWidth="1.5" stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="12" r="4" />
        <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
    </svg>;
};

export default SkyIcon;

SkyIcon.defaultProps = {
    width: '1.5rem',
    height: '1.5rem',
    color: '#000'
};