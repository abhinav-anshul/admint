/* eslint-disable import/no-absolute-path */
/* eslint-disable global-require */
import React from 'react';

function CollapsibleMenu() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [test, setTest] = React.useState<string>('1');
  const [isCollapsed, setIsCollapsed] = React.useState<boolean>(true);
  function handleOnMouseEnter() {
    setTest('longpararaarrarararaaraaaaa');
    setIsCollapsed(false);
  }
  function handleOnMouseLeave() {
    setTest('1');
    setIsCollapsed(true);
  }
  const handleUnhoverStyle = {
    height: '70px',
    backgroundColor: '#ffffff',
    width: '50px',
    textAlign: 'center',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: '10px',
    transition: 'opacity 0.5s ease-in-out',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px',
    cursor: 'pointer',
  };
  const handleHoverStyle = {
    height: '70px',
    backgroundColor: '#ffffff',
    width: '180px',
    textAlign: 'left',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: '10px',
    transition: 'opacity 0.5s ease-in-out',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px',
    cursor: 'pointer',
    position: 'absolute',
    zIndex: 9,
  };

  return (
    <div
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      // @ts-ignore
      style={isCollapsed ? handleUnhoverStyle : handleHoverStyle}
    >
      <div>
        {isCollapsed ? (
          <div>
            <img
              loading="lazy"
              alt="paperplus"
              width={15}
              height={15}
              src={require('/public/assets/PaperPlus.svg').default.src}
            />
          </div>
        ) : (
          <div style={{ display: 'flex' }}>
            <img
              loading="lazy"
              alt="paperplus"
              width={15}
              height={15}
              src={require('/public/assets/PaperPlus.svg').default.src}
            />
            <div>Create Campaign</div>
          </div>
        )}
      </div>
      <div>
        {isCollapsed ? (
          <img
            loading="lazy"
            alt="paperplus"
            width={15}
            height={15}
            src={require('/public/assets/PaperPlus.svg').default.src}
          />
        ) : (
          <div style={{ display: 'flex' }}>
            <img
              loading="lazy"
              alt="paperplus"
              width={15}
              height={15}
              src={require('/public/assets/PaperPlus.svg').default.src}
            />
            <div>Create Campaign</div>
          </div>
        )}
      </div>
      <div>
        {isCollapsed ? (
          <img
            loading="lazy"
            alt="paperplus"
            width={15}
            height={15}
            src={require('/public/assets/PaperPlus.svg').default.src}
          />
        ) : (
          <div style={{ display: 'flex' }}>
            <img
              loading="lazy"
              alt="paperplus"
              width={15}
              height={15}
              src={require('/public/assets/PaperPlus.svg').default.src}
            />
            <div>Create Campaign</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CollapsibleMenu;
