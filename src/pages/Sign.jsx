import { useForm } from 'react-hook-form';
import './Sign.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faEnvelope, faLock, faCalendar, faVenusMars, faGraduationCap } from '@fortawesome/free-solid-svg-icons'; 

export default function Sign(){

    const{
        register,
        handleSubmit, 
        formState:{ errors },
        reset,
        getValues
    }= useForm()

    const onSubmit=(data)=>{
        console.log(data)
        reset();
    }

    return(
        <>
        <div className="validation-container">
        <div className="title">
                <h2>Sign-In</h2>
              </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              
                <div className="input-field">
                    <p>Fullname</p>
                    <div className="input-icon-wrapper">
                        <FontAwesomeIcon icon={faCircleUser} className="input-icon" />
                        <input type='text'
                        {
                            ...register('fullname',{
                                required:'Your fullname is required'
                            })
                        }>
                        </input>
                    </div>
                </div>

                <div className="input-field">
                    <p>Email-Address</p>
                    <div className="input-icon-wrapper">
                        <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                        <input type='email'
                        {
                            ...register('email',{
                                required:'Your Email is required',
                                pattern:{
                                    value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                    message:'Invalid email address'
                                }
                            })
                        }>
                        </input>
                    </div>
                </div>

                <div className="input-field">
                    <p>Your role</p>
                    <div className="input-icon-wrapper">
                        <FontAwesomeIcon icon={faGraduationCap} className="input-icon" />
                        <select
                        {
                            ...register('role',{
                                required:'Select your role'
                            })
                        }>
                            <option value=''>Select your role</option>
                            <option value='Post-Graduate'>Post-Graduate</option>
                            <option value='Under-Graduate'>Under-Graduate</option>
                            <option value='Graduating'>Graduating</option>
                        </select>
                    </div>
                </div>

                <div className="input-field">
                    <p>Gender</p>
                    <div className="input-icon-wrapper">
                        <FontAwesomeIcon icon={faVenusMars} className="input-icon" />
                        <div className="sub-field">
                            <input type='radio' 
                            value='Male' 
                            id='male' 
                            {...register('gender', 
                            {
                                 required: 'Your gender is required' 
                            })}>
                            </input>
                            <label htmlFor='male'>Male</label>
                            <input type='radio' 
                            value='Female'
                             id='female' 
                             {...register('gender', 
                             { required: 'Your gender is required' })}
                             ></input>
                            <label htmlFor='female'>Female</label>
                        </div>
                    </div>
                </div>

                <div className="input-field">
                    <p>Age</p>
                    <div className="input-icon-wrapper">
                        <FontAwesomeIcon icon={faCalendar} className="input-icon" />
                        <input type='number'
                        {
                            ...register('age',{
                                required:'Your age is required',
                                min:{
                                    value:18,
                                    message:'You are minor'
                                }
                            })
                        }>
                        </input>
                    </div>
                </div>

                <div className="input-field">
                    <p>Password</p>
                    <div className="input-icon-wrapper">
                        <FontAwesomeIcon icon={faLock} className="input-icon" />
                        <input type='password'
                        {
                            ...register('pwd',{
                                required:'Password is required'
                            })
                        }>
                        </input>
                    </div>
                </div>

                <div className="input-field">
                    <p>Confirm Password</p>
                    <div className="input-icon-wrapper">
                        <FontAwesomeIcon icon={faLock} className="input-icon" />
                        <input type='password'
                        {
                            ...register('cwd',{
                                required:'Confirm Password is required',
                                validate: (value) => value === getValues('pwd') || 'Passwords do not match'
                            })
                        }>
                        </input>
                    </div>
                    
                </div>
                <div className='error-div'>
                    {
                        errors && <p>{Object.values(errors) [0]?.message}</p>
                    }
                </div>

                <div className="button-field">
                    <button type='submit'>Sign-Up</button>
                </div>
            </form>
        </div>
        </>
    )
}
