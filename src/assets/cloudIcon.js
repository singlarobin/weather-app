const CloudIcon = props => {
    const { height, width, color, style } = props;
    return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" style={style}
        strokeWidth="1.5" stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-12" />
    </svg>;
};

export default CloudIcon;

CloudIcon.defaultProps = {
    width: '1.5rem',
    height: '1.5rem',
    color: '#000'
};