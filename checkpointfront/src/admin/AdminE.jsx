import React from 'react';
import { NavLink } from 'react-router-dom';
import './AdminE.scss';


function AdminE() {
  return(
    <div className="AdminE">
      <h1>ADMIN ÉVÈNEMENTS</h1>
      <NavLink activeClassName="active" to="/admin/AdminEvent"><button>Ajouter un évènement</button></NavLink>
      <NavLink activeClassName="active" to="/admin/AdminManageEvent"><button>Modifier un évènement</button></NavLink>
      <NavLink activeClassName="active" to="/admin/AdminDeleteEvent"><button>Supprimer un évènement</button></NavLink>
      <div>
        <NavLink activeClassName="active" to="/admin/AdminGeneral"><button>Retour Admin</button></NavLink>
      </div>
    </div>
  )
}

export default AdminE;