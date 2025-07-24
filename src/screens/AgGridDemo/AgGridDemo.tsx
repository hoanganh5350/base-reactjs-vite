/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AllCommunityModule,
  ColDef,
  colorSchemeDarkBlue,
  ModuleRegistry,
  SizeColumnsToFitGridStrategy,
  themeQuartz,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useCallback, useMemo, useState } from "react";
import "./index.css"

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);
const themeDarkBlue = themeQuartz.withPart(colorSchemeDarkBlue);

export const AgGridDemo = () => {
  const [rowData] = useState([
    { symbol: "BTCUSD", state: "Active", price: 64950 },
    { symbol: "XAUUSD", state: "Active", price: 33850 },
    { symbol: "NDKUSD", state: "Inactive", price: 29600 },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs] = useState([
    { field: "symbol", minWidth: 150 },
    { field: "state", minWidth: 150 },
    {
      field: "price",
      minWidth: 150,
      enableCellChangeFlash: true,
      cellRenderer: "agAnimateShowChangeCellRenderer",
    },
  ]);

  const autoSizeStrategy = useMemo(() => {
    return {
      type: "fitCellContents",
    };
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onGridReady = useCallback(
    (params: {
      api: {
        getDisplayedRowCount: () => any;
        getDisplayedRowAtIndex: (arg0: number) => any;
      };
    }) => {
      const updateValues = () => {
        const rowCount = params.api.getDisplayedRowCount();
        // pick 2 cells at random to update
        for (let i = 0; i < 2; i++) {
          const row = Math.floor(Math.random() * rowCount);
          const rowNode = params.api.getDisplayedRowAtIndex(row);
          rowNode.setDataValue("price", Math.floor(Math.random() * 10000));
        }
      };
      setInterval(updateValues, 1000);
    },
    []
  );
  return (
    <div className="ag-theme-alpine-dark" style={{ height: "100%" }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs as ColDef[]}
        theme={themeDarkBlue}
        autoSizeStrategy={autoSizeStrategy as SizeColumnsToFitGridStrategy}
        onGridReady={onGridReady}
      />
    </div>
  );
};
