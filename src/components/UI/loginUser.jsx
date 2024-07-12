import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from'./style.module.css';
import Logo from './image/coft.gif'

const LoginUser = () => {

    const navigate = useNavigate();

    const username = useRef();
    const password = useRef();

    const [errorPass,setErrorPass] = useState(false);
    const [errorlog,setErrorLog] = useState(false)
    const [succes,setSucces] = useState(false);
    const [error,setError] = useState(true)
    const [change,setChange] = useState(false);
    const [location,setLocation] = useState(true);

    useEffect(()=>{ 
        setErrorPass(false)
        setErrorLog(false)
        setLocation(true)
        setTimeout(() => {
            setLocation(false)
        }, 1100);
    },[])

    const swipe = ()=>{ 
        
        setChange(true) 
        setTimeout(() => {
            navigate('/components/UI/createUser.jsx');
        }, 1100);

    }     
    const click = (e)=>{ 
        e.preventDefault();
        if(password.current){
            const pass = password.current.value.trim();
            if(pass === "" ){ 
                setErrorPass(true);
                setError(true)
                console.log('hello world')
            }else{ 
                setError(false)
                setErrorPass(false); 
            }
        }
        if(username.current){
            const user = username.current.value.trim();
            if(user === "" ){ 
                setErrorLog(true);
                setError(true)
                console.log('hello world')
            }else{ 
                setErrorLog(false); 
                setError(false)
            }
        }
        if(!error){ 
            
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
           <div className={`${classes.formContent} ${change===true? classes.formAnimation:classes.false} ${location===true? classes.backAnimationFormLogin:classes.false}`}>
            <h1>Авторизация</h1>
            <div>
                <form action="">
                    <div className={classes.formInput}>
                        <input className={`${errorlog === true?classes.err:classes.dflt}`} type="text" ref={username} placeholder='username'/>
                        <input className={`${errorPass === true?classes.err:classes.dflt}`} type="password" ref={password} placeholder='password'/>
                    </div>
                    <div className={classes.btnConteiner}>
                        <button onClick={click} className={classes.btnSign}>Войти!</button>
                    </div>
                    
                </form>

            </div>
            <Confeti/>
           </div>
           <div className={`${classes.fromSwipe_conteiner}  ${classes.login} ${change === true? classes.swipe:classes.false} ${location === true? classes.backAnimationSwipeLogin:classes.false}`}>
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
       </div>
    </div>
  )
}

export default LoginUser