import { ek as isPlatform, w as watch, f as ref, cz as E, cA as autoTable, el as writeBlob, em as Directory, en as Filesystem, eo as Encoding } from './vendor-BO7XRaEo.js';
import { l as lodashExports } from './lodash-C_0aJxVW.js';
import { t as toastWarning, x as toastDanger, G as toastSuccess } from '../index-C1ltxM1o.js';

var FileExportType = /* @__PURE__ */ ((FileExportType2) => {
  FileExportType2["WEB"] = "WEB";
  FileExportType2["FILE_SYSTEM"] = "FILE_SYSTEM";
  return FileExportType2;
})(FileExportType || {});
const DefaultProfiles = {
  "Desktop": {
    profileName: "Desktop",
    fileExport: "WEB" /* WEB */,
    scanner: "BARCODE_SCANNER" /* BARCODE_SCANNER */,
    printer: "WEB" /* WEB */,
    keyboard: "NATIVE_AND_HIS_KEYBOARD" /* NATIVE_AND_HIS_KEYBOARD */
  },
  "Mobile": {
    profileName: "Mobile",
    fileExport: "FILE_SYSTEM" /* FILE_SYSTEM */,
    scanner: "CAMERA_SCANNER" /* CAMERA_SCANNER */,
    printer: "BLUETOOTH" /* BLUETOOTH */,
    keyboard: "HIS_KEYBOARD_ONLY" /* HIS_KEYBOARD_ONLY */
  }
};
function usePlatform() {
  const activePlatformProfile = ref(DefaultProfiles["Desktop"]);
  const platformProfiles = ref({});
  const configuredProfile = localStorage.getItem("active_profile" /* ACTIVE_PLOFILE */);
  const profiles = localStorage.getItem("platformProfiles" /* PLATFORM_PROFILES */);
  if (typeof profiles === "string") {
    platformProfiles.value = JSON.parse(profiles);
  } else {
    platformProfiles.value = DefaultProfiles;
  }
  if (typeof configuredProfile === "string" && `${configuredProfile}`.match(/\{.*\}/)) {
    activePlatformProfile.value = JSON.parse(configuredProfile);
  } else {
    if (!lodashExports.isEmpty(platformProfiles.value)) {
      if (isPlatform("mobile") && "Mobile" in platformProfiles.value) {
        activePlatformProfile.value = platformProfiles.value["Mobile"];
      } else if (isPlatform("desktop") && "Desktop" in platformProfiles.value) {
        activePlatformProfile.value = platformProfiles.value["Desktop"];
      }
    }
  }
  watch(() => activePlatformProfile.value, (profile) => {
    localStorage.setItem("active_profile" /* ACTIVE_PLOFILE */, JSON.stringify(profile));
  });
  return {
    activePlatformProfile,
    platformProfiles
  };
}

function convertToCsv(list) {
  return list.reduce((accum, row) => {
    return accum + row.map((d) => `"${d}"`).join(",") + "\n";
  }, "");
}
function exportMobile(file, data, type) {
  let promiseObj = null;
  const path = `MaHIS/${file.replaceAll("/", "_")}`;
  toastSuccess(`Exporting file to "Documents/${path}"...`);
  if (type === "blob") {
    promiseObj = writeBlob({
      path,
      blob: data,
      directory: Directory.Documents,
      recursive: true
    });
  } else {
    promiseObj = Filesystem.writeFile({
      path,
      data,
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
      recursive: true
    });
  }
  if (promiseObj != null) {
    promiseObj.then(() => toastSuccess(`File exported to "Documents/${path}"!`, 3e3)).catch((e) => toastDanger(e));
  }
}
function toCsv(header, rows, fileName = "document") {
  rows = replaceHTMLContent(rows);
  const csvContent = convertToCsv(header.concat(rows));
  const { activePlatformProfile } = usePlatform();
  const fileWithExt = `${fileName}.csv`;
  if (activePlatformProfile.value.fileExport === FileExportType.WEB) {
    const csvData = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.setAttribute("id", "csv");
    link.href = window.URL.createObjectURL(csvData);
    link.setAttribute("download", `${fileName}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  } else if (activePlatformProfile.value.fileExport === FileExportType.FILE_SYSTEM) {
    exportMobile(fileWithExt, csvContent, "text");
  } else {
    toastWarning("Platform not supported");
  }
}
function toTablePDF(tableColumns, tableRows, fileName = "document", canHorizontalPageBreak = false, encryption = {}) {
  tableRows = replaceHTMLContent(tableRows);
  const doc = new E({ ...encryption });
  const title = doc.splitTextToSize(fileName, 180);
  const tableMarginStartY = title.length <= 1 ? 20 : title.length * 10;
  doc.text(title, 14, 10);
  const config = {
    startY: tableMarginStartY,
    head: [tableColumns[tableColumns.length - 1]],
    body: tableRows
  };
  if (canHorizontalPageBreak) {
    config.tableWidth = "wrap";
    config.horizontalPageBreak = true;
    config.horizontalPageBreakRepeat = 0;
  }
  autoTable(doc, config);
  const { activePlatformProfile } = usePlatform();
  const path = `${fileName}.pdf`;
  if (activePlatformProfile.value.fileExport === FileExportType.WEB) {
    doc.save(path);
  } else if (activePlatformProfile.value.fileExport === FileExportType.FILE_SYSTEM) {
    exportMobile(path, doc.output(), "blob");
  } else {
    toastDanger("Platform not supported");
  }
}
function replaceHTMLContent(tableRows) {
  const updatedTableRows = tableRows.map((row) => {
    return row.map((item) => {
      if (typeof item === "string") {
        return item.replace(/&lt;/g, "<");
      }
      return item;
    });
  });
  return updatedTableRows;
}

export { FileExportType as F, toTablePDF as a, exportMobile as e, toCsv as t, usePlatform as u };
