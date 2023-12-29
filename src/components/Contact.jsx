import React, { useState, useEffect } from 'react'
import "./Contact.css"
import { useCookies } from 'react-cookie'
function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [msg, setMsg] = useState("")

    // //for normal form data
    // const [arr, setArr] = useState([])

    // //local storage
    // //activedata is for displaying localstorage data in table
    // const [activeData, setActiveData] = useState(JSON.parse(localStorage.getItem('obj')) || []);
    // // used in edit
    // const [edititem, setEditItem] = useState(null)
    // //toggle variable is used for edit functionality only
    // const [toggle, setToggle] = useState(false)

    //cookie
    const [cookies, setCookie] = useCookies([])
    const [arrcookie, setArrCookie] = useState([])
    useEffect(() => {
        const storedSubmissions = cookies.o || [];
        setArrCookie(storedSubmissions);
    }, [cookies.o]);
    function Validate(e) {

        var obj = {
            name: name,
            email: email,
            subject: subject,
            msg: msg

        }
        // console.log(obj)
        let result = true;
        e.preventDefault();

        // name
        if (name.length === 0) {
            document.getElementById('name').innerHTML = "Name cannot be empty"
            result = false
        }
        else {
            document.getElementById('name').innerHTML = ""
        }

        // email
        if (email.length === 0) {
            document.getElementById('email').innerHTML = "Email field cannot be empty"
            result = false
        }
        else if (email.toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            document.getElementById('email').innerHTML = ""
        }
        else {
            document.getElementById('email').innerHTML = "Invaid Email"
            result = false
        }

        // subject
        if (subject.length === 0) {
            document.getElementById('subject').innerHTML = "Subject cannot be empty"
            result = false
        }
        else if (subject.length <= 3) {
            document.getElementById('subject').innerHTML = "Subject cannot be less than 4 letters"
            result = false
        }
        else {
            document.getElementById('subject').innerHTML = ""
        }

        // message
        if (msg.length === 0) {
            document.getElementById('message').innerHTML = "Message cannot be empty"
            result = false
        }
        else {
            document.getElementById('message').innerHTML = ""
        }
        // if (!toggle) {
        if (result) {
            // for normal form 
            // setArr([...arr, obj])

            // for localstorage
            // saveFormData(obj); 

            //for cookies
            setArrCookie([...arrcookie, obj])
            setCookie('o', [...arrcookie, obj], { path: '/' })
        }
        // }
        // //when we click on edit button then else block will execute
        // else {
        //     activeData[edititem] = obj;
        //     localStorage.setItem(
        //         "obj",
        //         JSON.stringify([...activeData])
        //     );
        //     setToggle(false);

        // }

        setName('');
        setEmail('');
        setMsg('');
        setSubject('');


    }
    // // local storage start
    // function saveFormData(obj) {
    //     //getting empty array
    //     let storedFormData = JSON.parse(localStorage.getItem('obj')) || [];

    //     //storing data of obj in localstorage
    //     localStorage.setItem('obj', JSON.stringify([...storedFormData, obj]))

    //     //getting stored data in localstorage in storedFormData
    //     storedFormData = JSON.parse(localStorage.getItem('obj')) || [];

    //     // updating activedata which is used for table
    //     setActiveData(storedFormData);
    //     // console.log(storedFormData)
    // }

    // // delete local storage data
    // function dataDelete(item, index) {
    //     let deleted_data = activeData.filter((value, valueindex) => {
    //         return valueindex !== index;


    //     })
    //     setActiveData(deleted_data)
    //     localStorage.setItem('obj', JSON.stringify(deleted_data))

    // }

    // // edit 
    // const dataEdit = (item, index) => {
    //     activeData.forEach((v, i) => {
    //         if (i === index) {
    //             setEditItem(index);
    //             //opening the fields with index == i
    //             setArr({
    //                 name: setName(item.name),
    //                 email: setEmail(item.email),
    //                 subject: setSubject(item.subject),
    //                 msg: setMsg(item.msg),

    //             })
    //             setToggle(true);
    //         }
    //     });
    // };
    // //localstorage end

    //cookie
    //delete
    let dataDelete = (item, index) => {
        let afterDelete = arrcookie.filter((it, i) => {
            return i !== index
        })
        setArrCookie(afterDelete)
        setCookie('o', afterDelete, { path: '/' })
    }

    //edit
    let dataEdit = (item, index) => {

    }

    return (

        <div className='contact' id='contact'><br></br><br></br>
            <div className="contact_inner">
                <div className="contact_inner_left">
                    <h1>Hire Me.</h1><br></br>
                    <span>I am available for freelance work. Connect with me via phone: <br></br><i>01923 088574</i> or email: <i>admin@example.com</i></span>
                    <br></br><br></br><br></br><br></br>

                    {/* Form */}
                    <form onSubmit={Validate}  >
                        <input className='form_txt' type='text' placeholder='Your Name : '
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            name='name'
                        />
                        <p id='name'></p>
                        <br></br><br></br>
                        <input className='form_txt' type='text' placeholder='Your Email : '
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            name='email'
                        />
                        <p id='email'></p>
                        <br></br><br></br>
                        <input className='form_txt' type='text' placeholder='Write a Subject : '
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            name='subject'
                        />
                        <p id='subject'></p>
                        <br></br><br></br>
                        <textarea className='form_txt' placeholder='Your Message'
                            value={msg}
                            onChange={(e) => setMsg(e.target.value)}
                            name='msg'
                        />
                        <p id='message'></p>
                        {/* <input className='form_txt' type='textarea' placeholder='Your Name' /> */}
                        <br></br><br></br>
                        <input className="button" type='submit' />  <br></br><br></br>

                    </form>
                </div>
                <div className="contact_inner_right"></div>

            </div>

            {/* Normal form data table */}
            {/* <table className='form_table' cellPadding={20} cellSpacing={0} >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Message</th>

                    </tr>
                </thead>

                <tbody>
                    {arr.map((item, i) => (

                        <tr key={i}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.subject}</td>
                            <td>{item.msg}</td>
                        </tr>
                    ))}
                </tbody>

            </table> */}

            {/* Local storage table */}
            {/* <table className='form_table' cellPadding={20} cellSpacing={0} >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Message</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>

                <tbody>

                    {activeData.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.subject}</td>
                                <td>{item.msg}</td>
                                <td><button onClick={() => dataDelete(item, index)}>Delete</button></td>
                                <td><button onClick={() => dataEdit(item, index)}>Edit</button></td>
                            </tr>
                        )
                    }
                    )}


                </tbody>

            </table> */}

            {/* cookies table */}
            <table className='form_table' cellPadding={20} cellSpacing={0} >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Message</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>

                <tbody>

                    {arrcookie.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.subject}</td>
                                <td>{item.msg}</td>
                                <td><button onClick={() => dataDelete(item, index)}>Delete</button></td>
                                <td><button onClick={() => dataEdit(item, index)}>Edit</button></td>
                            </tr>
                        )
                    }
                    )}


                </tbody>

            </table>

        </div >
    )
}


export default Contact
