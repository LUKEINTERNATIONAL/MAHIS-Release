import { d as defineStore } from './pinia-BYnbfcrK.js';
import { n as icons, H as HisDate } from '../index-DY89AFDi.js';
import { l as lodashExports } from './lodash-aZqQi0CK.js';

const initialStock = [
  {
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Product Name *",
              icon: icons.search,
              value: "",
              name: "product name",
              eventType: "input",
              alertsErrorMassage: "",
              selectedID: "",
              validationFunctionName: "required",
              isSingleSelect: true,
              trackBy: "drug_id",
              multiSelectData: []
            }
          ]
        }
      ]
    }
  },
  {
    selectedData: {},
    isFinishBtn: false,
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Batch No.*",
              iconRight: "",
              value: "",
              name: "batch",
              eventType: "input",
              alertsErrorMassage: "",
              valueType: "text",
              validationFunctionName: "required"
            }
          ]
        }
      ]
    }
  },
  {
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Manufacturer*",
              value: "",
              name: "manufacture",
              eventType: "input",
              alertsErrorMassage: "",
              valueType: "text",
              validationFunctionName: "required"
            }
          ]
        }
      ]
    }
  },
  {
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Doses Received*",
              value: "",
              name: "quantity",
              eventType: "input",
              alertsErrorMassage: "",
              validationFunctionName: "isNumber"
            }
          ]
        }
      ]
    }
  },
  {
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Doses Wasted",
              value: "",
              name: "doses_wasted",
              eventType: "input",
              alertsErrorMassage: "",
              valueType: "text",
              validationFunctionName: "isNumber"
            }
          ]
        }
      ]
    }
  },
  {
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Date Received*",
              icon: icons.calenderPrimary,
              value: "",
              name: "delivery_date",
              eventType: "input",
              alertsErrorMassage: "",
              required: true,
              isDatePopover: true,
              validationFunctionName: "required"
            }
          ]
        }
      ]
    }
  },
  {
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Expire date*",
              icon: icons.calenderPrimary,
              value: "",
              name: "expire date",
              eventType: "input",
              alertsErrorMassage: "",
              required: true,
              isDatePopover: true,
              minDate: HisDate.sessionDate(),
              maxDate: "",
              validationFunctionName: "required"
            }
          ]
        }
      ]
    }
  }
];
const useStockStore = defineStore("stockStore", {
  state: () => ({
    stock: [...initialStock]
  }),
  actions: {
    setStock(data) {
      this.stock = data;
    },
    getInitialStock() {
      const data = lodashExports.cloneDeep(initialStock);
      return [...data];
    }
  }
});

export { useStockStore as u };
