import './Login.css';

const Register = () => {
    return (
        <>
            <main className="form-signin w-100 m-auto">
                <form>
                    <h1 className="h3 mb-3 fw-normal">Please register</h1>

                    <div className="form-floating">
                        <input type="text" className="form-control" id="firstNameInput"
                               placeholder="Input your first name"/>
                        <label htmlFor="firstNameInput">First name</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="lastNameInput"
                               placeholder="Input your last name"/>
                        <label htmlFor="lastNameInput">Last name</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="emailInput" placeholder="name@example.com"/>
                        <label htmlFor="emailInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword2" placeholder="Repeat password"/>
                        <label htmlFor="floatingPassword2">Repet password</label>
                    </div>
                    <button className="btn btn-primary w-100 py-2" type="submit">Register</button>
                </form>
            </main>
        </>
    )
}
export default Register;