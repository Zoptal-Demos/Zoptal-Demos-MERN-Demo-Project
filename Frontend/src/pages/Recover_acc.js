import React,{ useState } from 'react'
import login_img from '../img/login_banner.jpg'
import GreenLogo from '../img/green-logo.png'
import CommonFunctions from '../CommonFunctions'
import APIFunctions, { postRequest } from '../ApiFunctions'
import { useNavigate } from 'react-router-dom'
import Popup from '../components/Popup'
import API from '../Api'

export default function Recover_acc() {
    const [show, setShow] = useState(false);
    const [pass, setPass] = useState(false);
    const [showOtp, setshowOtp] = useState(false);
    const showPass = () => {
        setShow(!show);
        setPass(!pass)
    }
    const [email,setEmail] = useState({
        email : ''
    });
    const handleInput = (e) => {
        setEmail({
            ...email,
            [e.target.name]: e.target.value.trim()
        })
    }
    const sendOtp = async (e) => {
        setshowOtp(true);
        e.preventDefault()
        try {
            const data = await postRequest(API.RECOVER_ACCOUNT,email);
            console.log(data)

            if(data.data.status && data.data.code == 200){
                // router('/')
                console.log(data.data)
            }else{
                console.log(data.data.message)
            }
        } catch (err) {
            console.log(err.message)
        }
    }
    return (
        <>
            <section className='login_page container-fluid'>
                <div className="login_page_inner row ">
                    <div className="left_side col-lg-6 p-0">
                        <img src={login_img} alt="Login banner" className='img-fluid' />
                    </div>
                    <div className="right_side p-3 col-lg-6">
                        <div className="logn_logo">
                            <img src={GreenLogo} alt="Login Logo" />
                        </div>
                        <div className="login_form mt-5">
                            <div className="login_top_heading text-center">
                                <h3>Recover Your Account</h3>
                                <p>Enter Your Registered Email Address To Recover Your Account</p>
                            </div>
                    <form>
                            <div className="form_login mt-5 row">
                                <div className="center_content col-9 m-auto">
                                    <div className="form-group">
                                        <input type="email" name='email' value={email.email} onChange={handleInput} className='form-control' placeholder='Email' />
                                        <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
                                            <path d="M16.1973 3C19.398 3.00979 21.9903 5.6212 22 8.84554V10.3069L21.9935 10.4037C21.9467 10.7516 21.6506 11.0198 21.2923 11.0198L21.2835 11.002L21.1721 10.9931C21.0257 10.9696 20.8893 10.9001 20.7831 10.7932C20.6504 10.6595 20.5759 10.4782 20.5759 10.2891V8.84554C20.5519 6.41955 18.6055 4.45879 16.1973 4.43465H7.80274C5.39451 4.45879 3.44811 6.41955 3.42415 8.84554V15.1545C3.44811 17.5805 5.39451 19.5412 7.80274 19.5653H16.1973C18.6055 19.5412 20.5519 17.5805 20.5759 15.1545C20.6163 14.7891 20.923 14.5127 21.2879 14.5127C21.6529 14.5127 21.9595 14.7891 22 15.1545C21.9903 18.3788 19.398 20.9902 16.1973 21H7.80274C4.6 20.9951 2.00487 18.3808 2 15.1545V8.84554C2 5.61714 4.59798 3 7.80274 3H16.1973ZM6.29443 8.38693C6.4807 8.36682 6.66718 8.4229 6.81203 8.54257L10.9695 11.8574C11.4888 12.2679 12.2193 12.2679 12.7386 11.8574L16.8518 8.54257H16.8607L16.9474 8.48292C17.2462 8.30809 17.6345 8.3726 17.8602 8.64951C17.9785 8.798 18.0329 8.988 18.0113 9.17715C17.9897 9.36629 17.8939 9.53888 17.7452 9.65644L13.632 12.9802C12.5862 13.828 11.0954 13.828 10.0495 12.9802L5.92747 9.65644L5.85135 9.58356C5.61891 9.32594 5.59998 8.93 5.82132 8.64951C5.93771 8.50163 6.10817 8.40703 6.29443 8.38693Z" fill="#02919A" />
                                        </svg>
                                        </span>
                                    </div>
                                    <div className="submit_btn mt-4">
                                        <button className='btn web_btn' data-bs-toggle="modal" data-bs-target="#forget_pass" type='submit' disabled={CommonFunctions.validate(email)} onClick={sendOtp}>Send OTP</button>
                                    </div>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Popup onClose={()=>{setshowOtp(false)}} email={email.email} showOtp={showOtp?'show_p show':''}/>
        </>
    )
}
