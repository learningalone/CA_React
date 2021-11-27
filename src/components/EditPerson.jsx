import React, { useState, useEffect } from "react";

function EditPerson() {
  // Esto se deve hacer en otra parte lel
  const getPesron = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/get/person/619587eb0eae9cbb8f6317b8"
      );
      const data = await res.json();
      console.log(data);
      setPerson(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPesron();
  }, []);
  
  const [person, setPerson] = useState({});

  const changePerson = (event) => {
    setPerson({
      ...person,
      [event.target.name]: event.target.value,
    });
  };

  const submitData = (event) => {
    event.preventDefault();
  };

  return (
    <div className="person container shadow p-3 mb-5 border">
      <h1 className="text-center fw-bold">Nueva Persona</h1>
      <form className="row g-3" onSubmit={submitData}>
        <div className="col-md-5">
          <label className="form-label">Tipo de Identificacion</label>
          <select
            className="form-select"
            defaultValue="Cedula de Cuidadania"
            name="typeIdent"
            onChange={changePerson}
          >
            <option>Tarjeta de Identidad</option>
            <option>Cedula de Cuidadania</option>
          </select>
        </div>
        <div className="col-md-7">
          <label className="form-label">No. Identificacion</label>
          <input
            type="text"
            className="form-control"
            name="numberIdent"
            required
            value={person.id_num}
            onChange={changePerson}
          />
        </div>
        <div className="col-md-9">
          <label className="form-label">Nombre Completo</label>
          <input
            type="text"
            className="form-control"
            name="name"
            required
            onChange={changePerson}
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">Edad</label>
          <input
            type="number"
            className="form-control"
            min="0"
            max="100"
            name="age"
            required
            onChange={changePerson}
          />
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

export default EditPerson;
