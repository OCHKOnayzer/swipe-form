import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from'./style.module.css';
import Logo from './image/coft.gif'

const CreateUser = () => {

    const username = useRef();
    const password = useRef();
    const mail = useRef();

    const [errorPass,setErrorPass] = useState(false);
    const [errorlog,setErrorLog] = useState(false);
    const [errorMail, setErrorMail] = useState(false);
    const [succes,setSucces] = useState(false);
    
    const navigate = useNavigate();
    const [change,setChange] = useState(false);
    const [location,setLocation] = useState(true)

    useEffect(()=>{ 
        setErrorPass(false)
        setErrorLog(false)
        setErrorMail(false)
        setLocation(true)
        setTimeout(() => {
            setLocation(false)
        }, 1100);
    },[])

    const swipe = ()=>{ 
        
        setChange(true) 
        setTimeout(() => {
            navigate('/');
        }, 1100);
    } 
    const click = (e)=>{ 
        e.preventDefault();
        if(password.current){
            const pass = password.current.value.trim();
            if(pass === "" ){ 
                setErrorPass(true);
                console.log('hello world')
            }else{ 
                setErrorPass(false); 
            }
        }
        if(username.current){
            const user = username.current.value.trim();
            if(user === "" ){ 
                setErrorLog(true);
                console.log('hello world')
            }else{ 
                setErrorLog(false); 
            }
        }
        if(mail.current){ 
            const email = mail.current.value.trim();
            if(email === ""){ 
                setErrorMail(true);
            }else{ 
                setErrorMail(false);
            }
        }
        if(errorPass===false&&errorlog===false){ 
            
            setSucces(true)

            setTimeout(()=>{
                setSucces(false)
            },900)
            
        } 
    }          

    const Confeti = ()=>{ 
        if(succes===true){ 
            return( 
                <img style={{position:'absolute'}} src={Logo} alt="" />
            )
        }else{ 
            return(
                <div></div>
            )
        }
    }

  return (
    <div className={classes.wrapper}>
       <div className={classes.formConteiner}>
        <div className={`${classes.fromSwipe_conteiner} ${classes.create} ${change === true? classes.swipe:classes.false} ${location === true? classes.backAnimationSwipe:classes.false}`}>
                <div className={`${classes.about_wrapper} ${change===true?classes.text_hiden:classes.text_visbl}`}>
                    <div className={classes.about_title}>
                        <p>Нет аккаунта?</p>
                        <div className={classes.about_content}>
                            <span>
                                Самое время его создать!
                            </span>
                            <div className={classes.btnConteiner}>
                                <button className={classes.buttonSwipe} onClick={swipe}>SWIPE!</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            
            </div>
           <div className={`${classes.formContent} ${change===true? classes.createAnimation:classes.false} ${location===true? classes.backAnimationForm:classes.false}`}>
            <h1>Регистрация</h1>
            <div>
                <form action="">
                    <div className={classes.formInput}>
                        <input className={`${errorlog === true?classes.err:classes.dflt}`} type="text" ref={username} placeholder='username'/>
                        <input className={`${errorMail === true?classes.err:classes.dflt}`} type="email" ref={mail} placeholder='username'/>
                        <input className={`${errorPass === true?classes.err:classes.dflt}`} type="password" ref={password} placeholder='password'/>
                    </div>
                    <div className={classes.btnConteiner}>
                        <button onClick={click} className={classes.btnSign}>Войти!</button>
                    </div>
                    
                </form>
            </div>
            <Confeti/>
            
           </div>
       </div>
    </div>
  )
}

export default CreateUser