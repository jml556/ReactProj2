import React from 'react';
import ReactDOM from 'react-dom';
import Input from './input'

const printVal = (val) => {
    console.log(val)
}

const App = () => {
    return(
        <div style={styles.containerStyles}>
            <Input functionToPass={printVal}/>
        </div>
    )
}

const styles = {
    containerStyles: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

ReactDOM.render(<App />, document.getElementById('root'))