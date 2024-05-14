import { useState } from "react";

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;
  return (
    <>
      <div>Section 1</div>
      <div>Section 2</div>
      <div>Section 3</div>
    </>
  );
};

export default Sidebar;
