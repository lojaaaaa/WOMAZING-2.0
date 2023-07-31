import React from 'react'

function Filters({items, setFilteredItems, setCurrentPage}) {

  const onClickFilter = (text) =>{
    setCurrentPage(1)
    setFilteredItems(items.filter((item) => item.title.includes(text.slice(0, text.length - 1))))
  }

  const filters = [
    {name: 'Пальто', key: 1},
    {name: 'Свитшоты', key: 2},
    {name: 'Купальники', key: 3},
    {name: 'Толстовки', key: 4},
    {name: 'Футболки', key: 5},
  ]
  return (
    <div className="shop__filters">
      <div onClick={() => setFilteredItems(items)} className="shop__filter">Все</div>
      
      {filters.map(f =>
        <div key={f.key} onClick={(e) => onClickFilter(e.target.innerText)} className="shop__filter">{f.name}</div>
        )}
      

  </div>
  )
}

export default Filters