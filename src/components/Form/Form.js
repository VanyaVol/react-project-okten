import React, {useState} from 'react';

const Form = ({getFilter,users}) => {
        const [form, setForm] = useState({name: '', username: '', email: ''});

        const formHandler = (e) => {
            let formChanges = {...form, [e.target.name]: e.target.value};
            setForm(formChanges);

            if ((!formChanges.name) && (!formChanges.username) && (!formChanges.email)) {
                getFilter({...users})
            }
        };

        const find = (e) => {
            e.preventDefault();
            getFilter(form);
        }

        return (
            <div>
                <form onSubmit={find}>
                    <label>Name: <input type="text" name={'name'} onChange={formHandler}/></label>
                    <label>Username: <input type="text" name={'username'} onChange={formHandler}/></label>
                    <label>Email: <input type="text" name={'email'} onChange={formHandler}/></label>
                    <button>Find</button>
                </form>
            </div>
        );
    }
;

export default Form;
