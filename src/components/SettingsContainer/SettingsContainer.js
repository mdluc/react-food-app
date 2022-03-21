const SettingContainer = ({ title, children}) => {
  return (
    <div className="section d-block">
      <h2>{title}</h2>
      <div className="options-container">
      {children}
      </div>
    </div>
  );
};

export default SettingContainer;
