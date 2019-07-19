import React from 'react';
import { NavLink } from 'react-router-dom';
import './AdminGeneral.scss';


function AdminGeneral() {
  return(
    <div className="AdminGeneral">
      <h1>ADMIN</h1>
      <NavLink activeClassName="active" to="/admin/AdminA"><button>Admin Artiste</button></NavLink>
      <NavLink activeClassName="active" to="/admin/AdminE"><button>Admin Évènement</button></NavLink>
    </div>
  )
}

export default AdminGeneral;