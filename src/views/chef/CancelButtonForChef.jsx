import React, { Fragment, useState } from "react";

import Modal from "../../views/modal/modal";
import CancelWarning from "./CancelWarning";

const CancelButtonForChef = () => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <button
        className="cancelButtonForChef"
        onClick={() => {
          setOpen(true);
        }}
      >
        CANCEL
      </button>
      <Modal open={open} close={() => setOpen(false)}>
        <CancelWarning />
      </Modal>
    </Fragment>
  );
};

export default CancelButtonForChef;
