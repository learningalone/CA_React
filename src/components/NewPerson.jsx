import React, { useState } from "react";

function NewPerson() {

  const [ person, setPerson ] = useState({
    phone2: ''
  });

  const changePerson = (event) => {
    setPerson({
        ...person,
        [event.target.name]: event.target.value
    })
}

const submitData = async (event) => {
    event.preventDefault();
    console.log(person);
    let options = {
      method: "POST",
      headers: {
        'Accept': 'aplication/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        //"id_type": person.typeIdent,
        "id_type": 'Cedula de Cuidadania',
        "id_num": person.numberIdent,
        "name": person.name,
        "age": parseInt(person.age),
        "phone_1": person.phone1,
        "phone_2": person.phone2,
        "address": person.address
      })
    }
    try {
      const res = await fetch('http://localhost:5000/add/person', options)
      const data = await res.json()
      console.log(data.msg)
    } catch (error) {
      console.log(error);
    }
    event.target.reset();
}

  return (
    <div className="person container shadow p-3 mb-5 border">
      <h1 className="text-center fw-bold">Nueva Persona</h1>
      <form className="row g-3" onSubmit={submitData}>
        <div className="col-md-5">
          <label className="form-label">Tipo de Identificacion</label>
          <select className="form-select" defaultValue="Cedula de Cuidadania" name="typeIdent" onChange={changePerson}>
            <option>Tarjeta de Identidad</option>
            <option>Cedula de Cuidadania</option>
          </select>
        </div>
        <div className="col-md-7">
          <label className="form-label">No. Identificacion</label>
          <input type="text" className="form-control" name="numberIdent" required onChange={changePerson}/>
        </div>
        <div className="col-md-9">
          <label className="form-label">Nombre Completo</label>
          <input type="text" className="form-control" name="name" required onChange={changePerson}/>
        </div>
        <div className="col-md-3">
          <label className="form-label">Edad</label>
          <input type="number" className="form-control" min="0" max="100" name="age" required onChange={changePerson}/>
        </div>
        <div className="col-12">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="1234 Main St"
            name="address"
            required
            onChange={changePerson}
          />
        </div>
        <div className="col-6">
          <label className="form-label">Telefono 1</label>
          <input
            type="number"
            className="form-control"
            placeholder="3124324321"
            name="phone1"
            // minLength="7" maxLength="10"
            required
            onChange={changePerson}
          />
        </div>
        <div className="col-6">
          <label className="form-label">Telefono 2</label>
          <input
            type="number"
            className="form-control"
            placeholder="3124324321"
            name="phone2"
            onChange={changePerson}
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-secondary">
            Agregar Persona
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewPerson;
