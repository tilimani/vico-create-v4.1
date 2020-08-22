import React, { useState } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  question: {
    fontSize: 16,
    fontWeight: "bold",
    color: theme.palette.secondary.main
  },
  add_icon: {
    color: theme.palette.secondary.light,
    fontSize: 20
  },
  minus_icon: {
    color: theme.palette.primary.main,
    fontSize: 20
  },
  expanded_question: {
    color: theme.palette.primary.main,
    fontSize: 16,
    fontWeight: "bold"
  },
  accordion_wrapper: {
    position: "relative",
    height: "100%",
    boxShadow: "none",
    borderBottom: "1px solid  rgba(196, 196, 196, 0.38)"
  }
}));
const CustomAccordion = props => {
  const [expanded, setExpended] = useState(false);
  const classes = useStyles();
  const { item } = props;
  const getExpandIcon = () => {
    if (expanded) {
      return <RemoveCircleOutlineOutlinedIcon className={classes.minus_icon} />;
    }
    return <AddCircleOutlineOutlinedIcon className={classes.add_icon} />;
  };
  return (
    <Accordion
      className={classes.accordion_wrapper}
      onChange={(e, expanded) => {
        setExpended(expanded);
      }}
      expanded={expanded}
    >
      <AccordionSummary
        expandIcon={getExpandIcon()}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography
          className={expanded ? classes.expanded_question : classes.question}
        >
          {item.question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{item.response}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordion;
