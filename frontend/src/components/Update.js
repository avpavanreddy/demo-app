import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
const Update = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState(0)
    const [error, setError] = useState("")
    const navigate = useNavigate();
    const { id } = useParams();
    const getSingleUser = async () => {
        const response = await fetch(`http://localhost:4000/${id}`);
        const result = await response.json();
        if (!response.ok) {
            console.log(result.error)
            setError(result.error)
        }
        if (response.ok) {
            setError("");
            setName(result.name);
            setAge(result.age);
            setEmail(result.email)
        }
    }
    useEffect(() => {
        getSingleUser();
    }, [])
    const handleUpdate = async (e) => {
        e.preventDefault();
        const updatedUser = { name, age, email }
        const response = await fetch(`http://localhost:4000/${id}`, {
            method: "PATCH",
            body: JSON.stringify(updatedUser),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const result = await response.json();
        if (!response.ok) {
            console.log(result.error)
            setError(result.error)
        }
        if (response.ok) {
            console.log(result)
            setError("")
            setEmail("")
            setAge()
            setName("")
            navigate("/all");
        }
    }
    return (
        <div className='container my-2'>
            {error && <div class="alert alert-danger" >
                <h4>The selected email is already used before!</h4>
            </div>}
            <h2 className='text-center'>Edit Data</h2>
            <form onSubmit={handleUpdate}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input type="text" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

    )
}

export default Update