import React from 'react'

export const users=[
    {
        userName:"tuba",
        password:"1"
    },
    {
        userName:"ayşe",
        password:"2"
    }
]

function Log() {
    return (
        <>
            <div>
                <div>
                    <p>Kullanıcı adınız:</p>
                    <input type="text" />
                </div>

                <div>
                    <p>Şifreniz:</p>
                    <input type="text" />
                </div>

                <div>
                    <button>Giriş yap</button>
                </div>
            </div>
        </>
    )
}

export default Log