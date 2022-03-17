import React, { useEffect, useState } from "react";
import TestPanelContent from "../TestPanelContent";
import ResultAccordion from "../Common/ResultAccordion";

const ResultTitle = ({ result }) => {
  const { layerName, displayValue } = result;
  const [expanded, setExpanded] = useState(false);

  const expandResultTitle = async () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    setExpanded(false);
  }, [result]);

  const wrapperTitle = `${layerName} - ${displayValue}`;

  return (
    <>
      <ResultAccordion expanded={expanded} onChange={expandResultTitle} title={wrapperTitle}>
        <TestPanelContent />
      </ResultAccordion>
    </>
  );
};

export default ResultTitle;
