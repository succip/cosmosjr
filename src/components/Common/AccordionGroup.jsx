import React, { useState, useEffect } from "react";

const AccordionGroup = ({ children }) => {
  const [curAccordionId, setCurAccordionId] = useState(null);

  const handleChange = (id) => {
    setCurAccordionId(curAccordionId === id ? null : id);
  };

  useEffect(() => {
    setCurAccordionId(curAccordionId);
  }, [curAccordionId]);

  useEffect(() => {
    setCurAccordionId(null);
  }, [children]);

  const childrenWithProps = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      key: index,
      accordionId: index,
      handleChange,
      expanded: curAccordionId === index,
    });
  });

  return <>{childrenWithProps}</>;
};

export default AccordionGroup;
