import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCategories } from '../../redux/ducks/categories';
import { allChannels, openChannelsByCategory } from '../../redux/ducks/cards';
import styles from './Categories.module.css';
import {Link} from 'react-router-dom';

function UserCategories() {
  const dispatch = useDispatch();

  const categories = useSelector((state) => {
    return state.categories.items;
  });
  const channelCategoryId = useSelector((state) => {
    return state.cards.channelCategoryId;
  });

  const handleOpenChannelsByCategory = (categoryId) => {
    dispatch(openChannelsByCategory(categoryId));
  };

  const handleClick = () => {
    dispatch(allChannels());
  };

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);
  return (
    <div>
      <div className={styles['categories_wrap']}>
        <Link to="/all" className={` ${
          channelCategoryId.categoryId === 0 ? styles.selected : ''
        }`}>
          <button onClick={handleClick}  className={styles.category} >
            Все
          </button>
        </Link>
        {categories &&
        categories.map((category) => {
          return (
            <Link to={`/${category.url}`} className={` ${
              channelCategoryId.categoryId === category.id ? styles.selected : ''
            }`}>
              <button
                onClick={() => handleOpenChannelsByCategory(category.id)}
                className={styles.category}
              >
                {category.name}
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default UserCategories;
