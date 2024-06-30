import React from 'react'

function Container(props) {
    // console.log(props);
    const {children}=props;
    return (
        <div>
            <div>Container componenti çalıştır</div>
            {children}
        </div>
    )
}

export default Container