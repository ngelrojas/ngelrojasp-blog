import React from 'react';
import { Link } from 'react-router-dom';
import { MdFavoritedBorder, MdFavorite } from 'react-icons/md';

export const FavBtn = ({liked, onClick}) => {
    const Icon = liked === 1 ? MdFavorite : MdFavoritedBorder;
    return <Link to="#" onClick={onClick}><Icon size='32px' /></Link>
}
