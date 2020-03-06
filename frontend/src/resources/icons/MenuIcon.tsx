import * as React from 'react';
import { globalTheme, useStyles } from '../theme';
import classNames from 'classnames';

const MenuIcon: React.FC = () => {
  const pathD = 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z';
  const classes = useStyles();

  return (
    <div className={classNames('menu-icon--wrapper', classes.icon)}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={pathD}
          fill={globalTheme.color.lightToggleOn}
        />
      </svg>
    </div>
  );
};

export default MenuIcon;