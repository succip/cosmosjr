import { useEffect, useState } from "react";
import TreeItem from "@mui/lab/TreeItem";
import AddressTree from "./AddressTree";
import settings from "../../config/Settings";
import { highlightFeature } from "../../js/Identify";
const axios = require("axios");

const LotTreeItem = ({ result, index }) => {
  const { layerName, feature, displayValue } = result;
  const [addressList, setAddressList] = useState([]);

  useEffect(() => {
    if (result.open) fetchAddresses();
  }, [result]);

  const onLotResultClick = async () => {
    await fetchAddresses();
    highlightFeature(feature);
  };

  const fetchAddresses = async () => {
    setAddressList([]);
    const url = `${settings.dataServiceUrl}/GetAddressData/${displayValue}`;
    const { data } = await axios.get(url);
    setAddressList(data);
  };

  return (
    <TreeItem
      nodeId={index.toString()}
      label={`${layerName} - ${displayValue}`}
      onClick={onLotResultClick}
      children={<AddressTree mslink={result.displayValue} addresses={addressList} />}
    />
  );
};

export default LotTreeItem;
