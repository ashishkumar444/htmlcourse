import React, { useState } from 'react';
// import Navbar from './Navbar';
function Signup() {
    let[username,setusername]=useState('');
    let[password,setpassword]=useState('');
    let[message,setmessage]=useState('');
    function  handleform(e){
        const formdata={username,password}
      e.preventDefault()
    const response= fetch("http://localhost:3000/signin/signinform",{
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(formdata)
      })
        
    }
    // console.log(response)
    return (
        <>

        <section id='signup'>
            <div className='container '>
                 <div className='row '>
                     <div className='col-md-6 mx-auto mt-5 shadow p-3 mb-5 bg-body rounded'>
                        <p className='text-dark text-center mt-4'>Signup From</p>
                       
                        <form action="" onSubmit={(e)=>{handleform(e)}}>
                            <label for="">username</label>
                            <input type="text"  className='form-control' 
                            value={username} onChange={(e)=>{setusername(e.target.value)}} required />
                            <label for="">Password</label>
                            <input type="text"  className='form-control' 
                            value={password} onChange={(e)=>{setpassword(e.target.value)}} required/>
                            <button className='btn btn-success  mt-3'>Sign Up</button>
                        </form>
                     </div>
                 </div>
            </div>
        </section>
           
            
            

        </>
    );
}

export default Signup;
