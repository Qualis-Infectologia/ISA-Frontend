import React, { useState, useEffect, useRef } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { kcSignOut } from '~/store/modules/auth/actions';

import { Container, Badge, DropDown } from './styles';

export default function ProfileMenu() {
  const dispatch = useDispatch();
  const history = useHistory();
  const dropRef = useRef(null);
  const [menuDropdown, setMenuDropDown] = useState(false);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setMenuDropDown(false);
        }
      }

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  function handleLogout() {
    history.push('/');
    dispatch(kcSignOut());
  }

  function handleProfile() {
    setMenuDropDown(!menuDropdown);
    history.push('/perfil');
  }

  function handleToggleMenuDropdown() {
    setMenuDropDown(!menuDropdown);
  }

  useOutsideAlerter(dropRef);

  return (
    <Container ref={dropRef}>
      <Badge onClick={handleToggleMenuDropdown}>
        <FaRegUserCircle size="1.8rem" />
      </Badge>
      <DropDown visible={menuDropdown}>
        <button type="button" onClick={handleProfile}>
          <p>Perfil</p>
        </button>
        <button type="button" onClick={handleLogout}>
          <p>Sair</p>
        </button>
      </DropDown>
    </Container>
  );
}
