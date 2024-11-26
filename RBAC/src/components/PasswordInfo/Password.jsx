import React, { useState } from 'react'
import './Password.css'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
const Password = ({ value, onChange, id, name }) => {
    const [isShow, setIsShow] = useState(false);
    const toggleShow = () => {
        setIsShow(!isShow);
    }
    return (
        <>
            <div className='password'>
                <input
                    type={isShow ? 'text' : 'password'}
                    id={id}
                    name={name}
                    placeholder="Enter your password"
                    value={value}
                    onChange={onChange}
                />
                {
                    isShow ? <p><FaRegEye
                        onClick={toggleShow}
                        className='eye-btn'
                    /></p> : <p>
                        <FaRegEyeSlash
                            onClick={toggleShow}
                              className='eye-btn'
                        />
                    </p>
                }
            </div>
        </>
    )
}

export default Password
