import React from 'react';
import { NavLink } from 'react-router-dom';
import './AdminA.scss';


function AdminA() {
  return(
    <div className="AdminA">
      <h1>ADMIN ARTISTES</h1>
      <NavLink activeClassName="active" to="/admin/AdminArtist"><button>Ajouter un Artiste</button></NavLink>
      <NavLink activeClassName="active" to="/admin/AdminManageArtist"><button>Modifier un Artiste</button></NavLink>
      <NavLink activeClassName="active" to="/admin/AdminDeleteArtist"><button>Supprimer un Artiste</button></NavLink>
      <div>
        <NavLink activeClassName="active" to="/admin/AdminGeneral"><button>Retour Admin</button></NavLink>
      </div>
    </div>
  )
}

export default AdminA;