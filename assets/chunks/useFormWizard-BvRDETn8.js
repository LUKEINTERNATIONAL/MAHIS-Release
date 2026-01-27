import { n as nextTick, f as ref } from './vendor-Wwszy5sF.js';

const useFormWizard = () => {
  const currentTabIndex = ref("");
  const onChangeCurrentTab = (index) => {
    if (index % 1 === 0) currentTabIndex.value = index;
  };
  const onTabBeforeChange = (index) => {
    if (currentTabIndex.value === 0) {
      console.log("First Tab");
    }
    onChangeCurrentTab(index);
  };
  const changeBtnIconPosition = () => {
    nextTick(() => {
      const button = document.querySelector(".fw-footer-left .fw-btn");
      if (!button) return;
      const span = button.querySelector("span");
      const icon = button.querySelector("i");
      if (!span || !icon) return;
      button.removeChild(span);
      button.removeChild(icon);
      button.appendChild(icon);
      button.appendChild(span);
    });
  };
  return {
    currentTabIndex,
    onChangeCurrentTab,
    onTabBeforeChange,
    changeBtnIconPosition
  };
};

export { useFormWizard as u };
