/**
 * Navbar Component
 * Bottom navigation bar with tabs (Pokédex, Types, Names, Profile)
 */

import React, { memo, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';

function Navbar() {
  const toast = useRef(null);

  const tabs = [
    { id: 'pokedex', label: 'Pokédex', icon: 'pi-th-large', path: '/' },
    { id: 'types', label: 'Types', icon: 'pi-heart-fill', path: '/types' },
    { id: 'names', label: 'Names', icon: 'pi-list', path: '/names' },
    { id: 'profile', label: 'Profile', icon: 'pi-user', path: '/profile' },
  ];

  // Get current path from window.location
  const currentPath = window.location.pathname;
  const activeTabObj = tabs.find(tab => tab.path === currentPath);
  const activeTab = activeTabObj ? activeTabObj.id : 'pokedex';

  const handleTabClick = path => {
    if (path === '/') {
      window.location.href = path;
    } else {
      toast.current.show({
        severity: 'warn',
        summary: 'Under Maintenance',
        detail: 'This page is currently under maintenance.',
        life: 3000,
      });
    }
  };

  return (
    <>
      <Toast ref={toast} />
      <nav className="pokemon-navbar">
        <div className="navbar-container">
          {tabs.map(tab => (
            <div
              key={tab.id}
              className={classNames('navbar-tab', {
                active: activeTab === tab.id,
              })}
              onClick={() => handleTabClick(tab.path)}
              role="button"
              tabIndex={0}
              onKeyPress={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleTabClick(tab.path);
                }
              }}
            >
              <div className="navbar-icon-wrapper">
                <i
                  className={classNames('navbar-icon pi', tab.icon, {
                    active: activeTab === tab.id,
                  })}
                />
              </div>
              <span
                className={classNames('navbar-label', {
                  active: activeTab === tab.id,
                })}
              >
                {tab.label}
              </span>
            </div>
          ))}
        </div>
      </nav>
    </>
  );
}

export default memo(Navbar);
