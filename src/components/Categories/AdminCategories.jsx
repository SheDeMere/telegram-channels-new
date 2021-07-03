import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCategories, openModal } from '../../redux/ducks/categories';
import { allChannels, openChannelsByCategory } from '../../redux/ducks/cards';
import styles from './Categories.module.css';
import { Link } from 'react-router-dom';
import AddChannels from './Modal/AddChannels';

function AdminCategories() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  const categories = useSelector((state) => {
    return state.categories.items;
  });

  const handleOpenChannelsByCategory = (categoryId) => {
    dispatch(openChannelsByCategory(categoryId));
  };

  const handleClick = () => {
    dispatch(allChannels());
  };

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <div>
      <AddChannels />
      <div className={styles['categories_wrap']}>
        <div>
          <Link to="/all">
            <button onClick={handleClick} className={styles.category}>
              Все
            </button>
          </Link>
          {categories &&
          categories.map((category) => {
            return (
              <Link to={`/${category.url}`}>
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
        <div className={styles.add}>
          <Link to="/add">
            <button
              onClick={handleOpenModal}
              className={styles['category_add']}
            >
              Добавить
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminCategories;
