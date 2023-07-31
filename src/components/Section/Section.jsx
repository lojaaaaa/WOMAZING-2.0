import React from 'react'
import { Link } from 'react-router-dom';

function Section({title, activePage, path}) {

  const Path = [
    {id: 1, pat: '/', name: 'Главная'},
    {id: 2, pat: '/shop', name: 'Магазин'},
  ]

  return (
    <section className="section">
      <div className="section__container container">
          <h1 className="section__title">{title}</h1>
          <div className="section__path">
              {Path.map(p => p.name !== activePage.name && <Link key={p.id} to={p.pat} className="section__page">{p.name}</Link>)}
              {Path.find(p => p.name !== activePage.name) && <Link to={activePage.path} href="#" className="section__page--active">{activePage.name}</Link>}
              
          </div>
      </div>
  </section>
  )
}

export default Section