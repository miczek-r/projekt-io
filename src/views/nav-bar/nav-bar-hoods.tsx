

const handleThemeChange = ( event: { target: { checked: any; };}, setTheme: any ) => {
    const { checked } = event.target;
    if ( checked ) {
        setTheme( 'dark' );
    } else {
        setTheme( 'light' );
    }
};

export default handleThemeChange;