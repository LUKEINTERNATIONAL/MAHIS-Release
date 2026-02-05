import { d as defineStore } from './pinia-BoqbyD4X.js';
import { n as icons, H as HisDate } from '../index-0HlCc1Mr.js';
import { l as lodashExports } from './lodash-C_0aJxVW.js';

const initialStartEndDate = [
  {
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Start date",
              icon: icons.calenderPrimary,
              value: HisDate.toStandardHisDisplayFormat(HisDate.sessionDate()),
              name: "start_date",
              eventType: "input",
              alertsErrorMassage: "",
              required: true,
              isDatePopover: true
            },
            {
              inputHeader: "End date",
              icon: icons.calenderPrimary,
              value: HisDate.toStandardHisDisplayFormat(HisDate.sessionDate()),
              name: "end_date",
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
const useStartEndDate = defineStore("startEndDate", {
  state: () => ({
    startEndDate: [...initialStartEndDate]
  }),
  actions: {
    setStartEndDate(data) {
      this.startEndDate = data;
    },
    getInitialStartEndDate() {
      const data = lodashExports.cloneDeep(initialStartEndDate);
      return [...data];
    }
  }
});

export { useStartEndDate as u };
