import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadCategories } from '../../redux/ducks/categories'
import styles from "./Categories.module.css"
import { openChannelsByCategory } from '../../redux/ducks/cards'
import { Link } from 'react-router-dom'

function Categories (props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  const categories = useSelector((state) => {
    return state.categories.items
  });

  const handleOpenChannelsByCategory = (categoryId) => {
    dispatch(openChannelsByCategory(categoryId))
  }

  return (
    <div>
      <div className={styles.categories_wrap}>
        {categories.map((category)=>{
          return (
            <Link to={`/${category.url}`}>
              <button
                onClick={()=>handleOpenChannelsByCategory(category.id)}
                className={styles.category}>{category.name}
              </button>
              </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Categories