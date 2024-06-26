import React from "react";

const TableRow = ({
  item,
  handleClickEngagement,
  setShowDeleteEngagementDialog,
  setCurrentEngagementId,
}) => {
  return (
    <tr>
      <td>{item?.id}</td>
      <td
        onClick={() => handleClickEngagement(item?.id, item?.natureThrough)}
        className="cursor-pointer"
      >
        {item?.engagementName}
      </td>
      <td
        onClick={() => handleClickEngagement(item?.id, item?.natureThrough)}
        className="cursor-pointer"
      >
        {item?.natureThrough}
      </td>
      <td
        onClick={() => handleClickEngagement(item?.id, item?.natureThrough)}
        className="cursor-pointer"
      >
        {item?.initiatedBy?.name}
      </td>
      <td className="cursor-pointer">
        <i
          className="fa fa-edit  f-18 cursor-pointer"
          onClick={() => handleClickEngagement(item?.id, item?.natureThrough)}
        ></i>
        {item?.locked === false && (
          <i
            className="fa fa-trash text-danger f-18 px-3 cursor-pointer"
            onClick={() => {
              setCurrentEngagementId(item?.id);
              setShowDeleteEngagementDialog(true);
            }}
          ></i>
        )}
      </td>
    </tr>
  );
};

export default TableRow;
