import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const resultTitleStyle = {
  fontWeight: "medium",
  textDecoration: "underline",
};

const AddressResultAccordion = ({
  children,
  title,
  onChange,
  expanded,
  style = resultTitleStyle,
}) => {
  const expand = () => {
    onChange();
  };
  return (
    <>
      <Accordion expanded={expanded} onChange={expand} disableGutters={true}>
        <AccordionSummary>
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </>
  );
};

export default AddressResultAccordion;
