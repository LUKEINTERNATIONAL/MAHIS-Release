import { _ as _export_sfc } from '../index-CIYQg2Yf.js';
import { y as openBlock, z as createElementBlock, C as createBaseVNode, a5 as createTextVNode, s as defineComponent, ac as IonNote, a7 as IonLabel, aq as IonItem, bd as IonCardContent, bL as IonCard, ap as IonList, x as resolveComponent, O as createBlock, B as withCtx, J as Fragment, R as renderList, A as createVNode, D as toDisplayString, H as createCommentVNode } from './vendor-Dw8g_yFL.js';
import { E as EIRreportsStore } from './EIRreportsStore-DRz81GZp.js';
import { m as mapState } from './pinia-zB_ge_8G.js';
import { b as getMonthsList } from './vaccines_service-CTFuJlsP.js';

const _sfc_main$1 = {  };

const _hoisted_1$1 = {
  border: "0",
  cellspacing: "0",
  width: "100%"
};

function _sfc_render$1(_ctx, _cache) {
  return (openBlock(), createElementBlock("table", _hoisted_1$1, [...(_cache[0] || (_cache[0] = [
    createBaseVNode("tbody", null, [
      createBaseVNode("tr", null, [
        createBaseVNode("td", { colspan: "2" }, [
          createBaseVNode("table", {
            cellspacing: "0",
            width: "100%"
          }, [
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Annual Population"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "FAUUU0mZbcL",
                    "data-co": "Tt7fU5lUhAU"
                  }, "253677")
                ]),
                createBaseVNode("td", null, "Live Births"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "fLG3TWakdSk",
                    "data-co": "Tt7fU5lUhAU"
                  }, "10699")
                ]),
                createBaseVNode("td", null, "Surviving Infants"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "p19DIsV5dS1",
                    "data-co": "Tt7fU5lUhAU"
                  })
                ]),
                createBaseVNode("td", null, "Pregnant Women"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "GxqYLY3iWcz",
                    "data-co": "Tt7fU5lUhAU"
                  }, "12218")
                ]),
                createBaseVNode("td", null, "9 Years Old Girls"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "CIZ7Ey6tGI7",
                    "data-co": "Tt7fU5lUhAU"
                  }, "14869")
                ])
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("tr", null, [
        createBaseVNode("td", { colspan: "2" }, [
          createBaseVNode("table", {
            border: "1",
            cellspacing: "0",
            width: "100%"
          }, [
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", { class: "section-head" }, [
                createBaseVNode("td", { colspan: "7" }, "A. Immunisation Sessions")
              ]),
              createBaseVNode("tr", { class: "section-subhead" }, [
                createBaseVNode("td", null, " "),
                createBaseVNode("td", null, "Number"),
                createBaseVNode("td", null, "%"),
                createBaseVNode("td", { colspan: "2" }, " "),
                createBaseVNode("td", null, "Number"),
                createBaseVNode("td", null, "%")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Planned immunization sessions (Static)"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "Hig2nHtgfVr",
                    "data-co": "yqszvXV2s8u"
                  }, "114")
                ]),
                createBaseVNode("td", { class: "grayed-cells" }, " "),
                createBaseVNode("td", { colspan: "2" }, "Canceled immunization sessions (Outreach)"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "QJBtQ8GfxXE",
                    "data-co": "kVTGmhgf7wQ"
                  }, "1")
                ]),
                createBaseVNode("td", null, "0.6")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Canceled immunization sessions (Static)"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "QJBtQ8GfxXE",
                    "data-co": "yqszvXV2s8u"
                  }, "2")
                ]),
                createBaseVNode("td", null, "1.8"),
                createBaseVNode("td", { rowspan: "2" }, "Reasons for cancellation"),
                createBaseVNode("td", {
                  class: "text-field-inside",
                  colspan: "3",
                  rowspan: "2",
                  width: "724"
                }, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "Er9t7hU2OQp",
                    "data-co": "Tt7fU5lUhAU"
                  }, "0")
                ])
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Planned immunization sessions (Outreach)"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "Hig2nHtgfVr",
                    "data-co": "kVTGmhgf7wQ"
                  }, "179")
                ]),
                createBaseVNode("td", { class: "grayed-cells" }, " ")
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("tr", null, [
        createBaseVNode("td", { colspan: "2" }, [
          createTextVNode("    "),
          createBaseVNode("table", {
            cellspacing: "0",
            width: "100%"
          }, [
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", { class: "section-subhead" }, [
                createBaseVNode("td", { rowspan: "2" }, "Age"),
                createBaseVNode("td", { rowspan: "2" }, "Monthly Target/ Live Births"),
                createBaseVNode("td", { colspan: "4" }, "BCG"),
                createBaseVNode("td", { colspan: "4" }, "OPV 0"),
                createBaseVNode("td", { rowspan: "2" }, "Monthly Target Surviving Infants"),
                createBaseVNode("td", { colspan: "6" }, "MR1"),
                createBaseVNode("td", {
                  colspan: "3",
                  rowspan: "1"
                }, "TCV"),
                createBaseVNode("td", null, " "),
                createBaseVNode("td", null, " "),
                createBaseVNode("td", { rowspan: "2" }, "Monthly Target Surviving Infants"),
                createBaseVNode("td", { colspan: "4" }, "MR2"),
                createBaseVNode("td", null, "dropout rate")
              ]),
              createBaseVNode("tr", { class: "section-subhead" }, [
                createBaseVNode("td", null, "Static"),
                createBaseVNode("td", null, "O/reach"),
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "Cov"),
                createBaseVNode("td", null, "Static"),
                createBaseVNode("td", null, "O/reach"),
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "Cov"),
                createBaseVNode("td", null, "Static"),
                createBaseVNode("td", null, " "),
                createBaseVNode("td", null, " "),
                createBaseVNode("td", null, "O/reach"),
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "Cov"),
                createBaseVNode("td", null, " "),
                createBaseVNode("td", null, "Static"),
                createBaseVNode("td", null, "Outreach"),
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, " "),
                createBaseVNode("td", null, "Static"),
                createBaseVNode("td", null, "O/reach"),
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "Cov"),
                createBaseVNode("td", null, " ")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Under 1"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "hhK4Ph0ZtB6",
                    "data-co": "Tt7fU5lUhAU"
                  }, "960")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "s79kWckFPLs",
                    "data-co": "UHR4d8LgGou"
                  }, "622")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "s79kWckFPLs",
                    "data-co": "ipKITPnwlcP"
                  }, "48")
                ]),
                createBaseVNode("td", null, "670"),
                createBaseVNode("td", null, "69.8"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "pVdb1wcTMyw",
                    "data-co": "goHo0wV2Gx1"
                  }, "589")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "pVdb1wcTMyw",
                    "data-co": "H5xzz0m9zyd"
                  }, "25")
                ]),
                createBaseVNode("td", null, "614"),
                createBaseVNode("td", null, "64"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "rzkixPVm4Dv",
                    "data-co": "Tt7fU5lUhAU"
                  }, "910")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "noxYd7tOSon",
                    "data-co": "UHR4d8LgGou"
                  }, "290")
                ]),
                createBaseVNode("td", null, " "),
                createBaseVNode("td", null, " "),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "noxYd7tOSon",
                    "data-co": "ipKITPnwlcP"
                  }, "435")
                ]),
                createBaseVNode("td", null, "725"),
                createBaseVNode("td", null, "79.7"),
                createBaseVNode("td", null, " "),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "p5CUt2TQJjd",
                    "data-co": "UHR4d8LgGou"
                  }, "288")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "p5CUt2TQJjd",
                    "data-co": "ipKITPnwlcP"
                  }, "435")
                ]),
                createBaseVNode("td", null, "723"),
                createBaseVNode("td", null, " "),
                createBaseVNode("td", { class: "grayed-cells" }, " "),
                createBaseVNode("td", { class: "grayed-cells" }, " "),
                createBaseVNode("td", { class: "grayed-cells" }, " "),
                createBaseVNode("td", { class: "grayed-cells" }, " "),
                createBaseVNode("td", { class: "grayed-cells" }, " "),
                createBaseVNode("td", { class: "grayed-cells" }, " ")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Over 1"),
                createBaseVNode("td", { class: "grayed-cells" }, " "),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "s79kWckFPLs",
                    "data-co": "r2NJTUrJ2TL"
                  }, "0")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "s79kWckFPLs",
                    "data-co": "zKLduwqZFnh"
                  }, "0")
                ]),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", { class: "grayed-cells" }, " "),
                createBaseVNode("td", { class: "grayed-cells" }, " "),
                createBaseVNode("td", { class: "grayed-cells" }, " "),
                createBaseVNode("td", { class: "grayed-cells" }, " "),
                createBaseVNode("td", { class: "grayed-cells" }, " "),
                createBaseVNode("td", { class: "grayed-cells" }, " "),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "noxYd7tOSon",
                    "data-co": "r2NJTUrJ2TL"
                  }, "0")
                ]),
                createBaseVNode("td", null, " "),
                createBaseVNode("td", null, " "),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "noxYd7tOSon",
                    "data-co": "zKLduwqZFnh"
                  }, "0")
                ]),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, " "),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "p5CUt2TQJjd",
                    "data-co": "r2NJTUrJ2TL"
                  }, "0")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "p5CUt2TQJjd",
                    "data-co": "zKLduwqZFnh"
                  }, "0")
                ]),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, " "),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "nSF1a1Kjfou",
                    "data-co": "Tt7fU5lUhAU"
                  }, "911")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "i78OLuiaUDY",
                    "data-co": "r2NJTUrJ2TL"
                  }, "216")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "i78OLuiaUDY",
                    "data-co": "zKLduwqZFnh"
                  }, "392")
                ]),
                createBaseVNode("td", null, "608"),
                createBaseVNode("td", null, "66.7"),
                createBaseVNode("td")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "960"),
                createBaseVNode("td", null, "622"),
                createBaseVNode("td", null, "48"),
                createBaseVNode("td", null, "670"),
                createBaseVNode("td", { class: "grayed-cells" }, " "),
                createBaseVNode("td", null, "589"),
                createBaseVNode("td", null, "25"),
                createBaseVNode("td", null, "614"),
                createBaseVNode("td", { class: "grayed-cells" }, " "),
                createBaseVNode("td", null, "910"),
                createBaseVNode("td", null, "290"),
                createBaseVNode("td", null, " "),
                createBaseVNode("td", null, " "),
                createBaseVNode("td", null, "435"),
                createBaseVNode("td", null, "725"),
                createBaseVNode("td", null, "79.7"),
                createBaseVNode("td", null, " "),
                createBaseVNode("td", null, "288"),
                createBaseVNode("td", null, "435"),
                createBaseVNode("td", null, "723"),
                createBaseVNode("td", null, " "),
                createBaseVNode("td", null, "911"),
                createBaseVNode("td", null, "216"),
                createBaseVNode("td", null, "392"),
                createBaseVNode("td", null, "608"),
                createBaseVNode("td", null, "66.7"),
                createBaseVNode("td", null, "16.1")
              ])
            ])
          ]),
          createTextVNode("     "),
          createBaseVNode("table", {
            cellspacing: "0",
            width: "100%"
          }, [
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", { class: "section-subhead" }, [
                createBaseVNode("td", { rowspan: "2" }, "Age"),
                createBaseVNode("td", { rowspan: "2" }, "Monthly Target Surviving Infants"),
                createBaseVNode("td", { colspan: "3" }, "OPV1"),
                createBaseVNode("td", {
                  colspan: "3",
                  width: "226"
                }, "OPV2"),
                createBaseVNode("td", { colspan: "4" }, "OPV3"),
                createBaseVNode("td", { rowspan: "2" }, "Dropout rate"),
                createBaseVNode("td", { colspan: "4" }, "IPV")
              ]),
              createBaseVNode("tr", { class: "section-subhead" }, [
                createBaseVNode("td", null, "Static"),
                createBaseVNode("td", null, "O/reach"),
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "Static"),
                createBaseVNode("td", null, "O/reach"),
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "Static"),
                createBaseVNode("td", null, "O/reach"),
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "cov"),
                createBaseVNode("td", null, "Static"),
                createBaseVNode("td", null, "O/reach"),
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "cov")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Under 1"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "OxUdXmxVbG3",
                    "data-co": "Tt7fU5lUhAU"
                  }, "912")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "hftsrvq65Ia",
                    "data-co": "UHR4d8LgGou"
                  }, "352")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "hftsrvq65Ia",
                    "data-co": "ipKITPnwlcP"
                  }, "444")
                ]),
                createBaseVNode("td", null, "796"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "cC69GTz2OSm",
                    "data-co": "UHR4d8LgGou"
                  }, "298")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "cC69GTz2OSm",
                    "data-co": "ipKITPnwlcP"
                  }, "488")
                ]),
                createBaseVNode("td", null, "786"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "CrELJNRN6Ok",
                    "data-co": "UHR4d8LgGou"
                  }, "319")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "CrELJNRN6Ok",
                    "data-co": "ipKITPnwlcP"
                  }, "438")
                ]),
                createBaseVNode("td", null, "757"),
                createBaseVNode("td", null, "83"),
                createBaseVNode("td", null, "4.9"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "aoEFV2GYFdr",
                    "data-co": "UHR4d8LgGou"
                  }, "315")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "aoEFV2GYFdr",
                    "data-co": "ipKITPnwlcP"
                  }, "407")
                ]),
                createBaseVNode("td", null, "722"),
                createBaseVNode("td", null, "79.2")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Over 1"),
                createBaseVNode("td", { class: "grayed-cells" }, " "),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "hftsrvq65Ia",
                    "data-co": "r2NJTUrJ2TL"
                  }, "0")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "hftsrvq65Ia",
                    "data-co": "zKLduwqZFnh"
                  }, "0")
                ]),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "cC69GTz2OSm",
                    "data-co": "r2NJTUrJ2TL"
                  }, "0")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "cC69GTz2OSm",
                    "data-co": "zKLduwqZFnh"
                  }, "0")
                ]),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "CrELJNRN6Ok",
                    "data-co": "r2NJTUrJ2TL"
                  }, "0")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "CrELJNRN6Ok",
                    "data-co": "zKLduwqZFnh"
                  }, "0")
                ]),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "aoEFV2GYFdr",
                    "data-co": "r2NJTUrJ2TL"
                  }, "0")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "aoEFV2GYFdr",
                    "data-co": "zKLduwqZFnh"
                  }, "0")
                ]),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, "0")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "912"),
                createBaseVNode("td", null, "352"),
                createBaseVNode("td", null, "444"),
                createBaseVNode("td", null, "796"),
                createBaseVNode("td", null, "298"),
                createBaseVNode("td", null, "488"),
                createBaseVNode("td", null, "786"),
                createBaseVNode("td", null, "319"),
                createBaseVNode("td", null, "438"),
                createBaseVNode("td", null, "757"),
                createBaseVNode("td", null, "83"),
                createBaseVNode("td", null, "4.9"),
                createBaseVNode("td", null, "315"),
                createBaseVNode("td", null, "407"),
                createBaseVNode("td", null, "722"),
                createBaseVNode("td", null, "79.2")
              ])
            ])
          ]),
          createTextVNode("     "),
          createBaseVNode("table", {
            cellspacing: "0",
            width: "100%"
          }, [
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", { class: "section-subhead" }, [
                createBaseVNode("td", { rowspan: "2" }, "Age"),
                createBaseVNode("td", { rowspan: "2" }, "Monthly Target Surviving Inf nts"),
                createBaseVNode("td", { colspan: "3" }, "DPT-HepB-Hib1"),
                createBaseVNode("td", { colspan: "3" }, "DPT-HepB-Hib2"),
                createBaseVNode("td", { colspan: "4" }, "DPT-HepB-Hib3"),
                createBaseVNode("td", { rowspan: "2" }, "Dropout rate")
              ]),
              createBaseVNode("tr", { class: "section-subhead" }, [
                createBaseVNode("td", null, "Static"),
                createBaseVNode("td", null, "O/reach"),
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "Static"),
                createBaseVNode("td", null, "O/reach"),
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "Static"),
                createBaseVNode("td", null, "O/reach"),
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "cov")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Under 1"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "yxUM9vxdmF6",
                    "data-co": "Tt7fU5lUhAU"
                  }, "910")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "bUpxQhmf8ZK",
                    "data-co": "UHR4d8LgGou"
                  }, "352")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "bUpxQhmf8ZK",
                    "data-co": "ipKITPnwlcP"
                  }, "444")
                ]),
                createBaseVNode("td", null, "796"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "oVS5H2KNyxb",
                    "data-co": "UHR4d8LgGou"
                  }, "297")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "oVS5H2KNyxb",
                    "data-co": "ipKITPnwlcP"
                  }, "487")
                ]),
                createBaseVNode("td", null, "784"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "cq3o6581c85",
                    "data-co": "UHR4d8LgGou"
                  }, "319")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "cq3o6581c85",
                    "data-co": "ipKITPnwlcP"
                  }, "437")
                ]),
                createBaseVNode("td", null, "756"),
                createBaseVNode("td", null, "83.1"),
                createBaseVNode("td", null, "5")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Over 1"),
                createBaseVNode("td", { class: "grayed-cells" }, " "),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "bUpxQhmf8ZK",
                    "data-co": "r2NJTUrJ2TL"
                  }, "0")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "bUpxQhmf8ZK",
                    "data-co": "zKLduwqZFnh"
                  }, "0")
                ]),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "oVS5H2KNyxb",
                    "data-co": "r2NJTUrJ2TL"
                  }, "0")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "oVS5H2KNyxb",
                    "data-co": "zKLduwqZFnh"
                  }, "0")
                ]),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "cq3o6581c85",
                    "data-co": "r2NJTUrJ2TL"
                  }, "0")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "cq3o6581c85",
                    "data-co": "zKLduwqZFnh"
                  }, "0")
                ]),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "910"),
                createBaseVNode("td", null, "352"),
                createBaseVNode("td", null, "444"),
                createBaseVNode("td", null, "796"),
                createBaseVNode("td", null, "297"),
                createBaseVNode("td", null, "487"),
                createBaseVNode("td", null, "784"),
                createBaseVNode("td", null, "319"),
                createBaseVNode("td", null, "437"),
                createBaseVNode("td", null, "756"),
                createBaseVNode("td", null, "1010.8"),
                createBaseVNode("td", null, "5")
              ])
            ])
          ]),
          createTextVNode("     "),
          createBaseVNode("table", {
            cellspacing: "0",
            width: "100%"
          }, [
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", { class: "section-subhead" }, [
                createBaseVNode("td", { rowspan: "2" }, "Age"),
                createBaseVNode("td", { rowspan: "2" }, "Monthly Target Surviving Inf nts"),
                createBaseVNode("td", { colspan: "3" }, "PCV1"),
                createBaseVNode("td", { colspan: "3" }, "PCV2"),
                createBaseVNode("td", { colspan: "4" }, "PCV3"),
                createBaseVNode("td", { rowspan: "2" }, "Dropout rate")
              ]),
              createBaseVNode("tr", { class: "section-subhead" }, [
                createBaseVNode("td", null, "Static"),
                createBaseVNode("td", null, "O/reach"),
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "Static"),
                createBaseVNode("td", null, "O/reach"),
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "Static"),
                createBaseVNode("td", null, "O/reach"),
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "cov")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Under 1"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "phZB9X9xSbs",
                    "data-co": "Tt7fU5lUhAU"
                  }, "910")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "TOdUoVRc7n0",
                    "data-co": "UHR4d8LgGou"
                  }, "352")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "TOdUoVRc7n0",
                    "data-co": "ipKITPnwlcP"
                  }, "454")
                ]),
                createBaseVNode("td", null, "806"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "iV9Ijd0qjPU",
                    "data-co": "UHR4d8LgGou"
                  }, "298")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "iV9Ijd0qjPU",
                    "data-co": "ipKITPnwlcP"
                  }, "488")
                ]),
                createBaseVNode("td", null, "786"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "IQFC39nNHPX",
                    "data-co": "UHR4d8LgGou"
                  }, "319")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "IQFC39nNHPX",
                    "data-co": "ipKITPnwlcP"
                  }, "438")
                ]),
                createBaseVNode("td", null, "757"),
                createBaseVNode("td", null, "83.2"),
                createBaseVNode("td", null, "6.1")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Over 1"),
                createBaseVNode("td", { class: "grayed-cells" }, " "),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "TOdUoVRc7n0",
                    "data-co": "r2NJTUrJ2TL"
                  }, "0")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "TOdUoVRc7n0",
                    "data-co": "zKLduwqZFnh"
                  }, "0")
                ]),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "iV9Ijd0qjPU",
                    "data-co": "r2NJTUrJ2TL"
                  }, "0")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "iV9Ijd0qjPU",
                    "data-co": "zKLduwqZFnh"
                  }, "0")
                ]),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "IQFC39nNHPX",
                    "data-co": "r2NJTUrJ2TL"
                  }, "0")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "IQFC39nNHPX",
                    "data-co": "zKLduwqZFnh"
                  }, "0")
                ]),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "910"),
                createBaseVNode("td", null, "352"),
                createBaseVNode("td", null, "454"),
                createBaseVNode("td", null, "806"),
                createBaseVNode("td", null, "298"),
                createBaseVNode("td", null, "488"),
                createBaseVNode("td", null, "786"),
                createBaseVNode("td", null, "319"),
                createBaseVNode("td", null, "438"),
                createBaseVNode("td", null, "757"),
                createBaseVNode("td", null, "83.2"),
                createBaseVNode("td", null, "6.1")
              ])
            ])
          ]),
          createTextVNode("     "),
          createBaseVNode("table", {
            cellspacing: "0",
            width: "100%"
          }, [
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", { class: "section-subhead" }, [
                createBaseVNode("td", { rowspan: "2" }, "Age"),
                createBaseVNode("td", { rowspan: "2" }, "Monthly Target"),
                createBaseVNode("td", { colspan: "3" }, "ROTA 1"),
                createBaseVNode("td", { colspan: "4" }, "ROTA 2"),
                createBaseVNode("td", null, "Dropout rate")
              ]),
              createBaseVNode("tr", { class: "section-subhead" }, [
                createBaseVNode("td", null, "Static"),
                createBaseVNode("td", null, "O/reach"),
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "Static"),
                createBaseVNode("td", null, "O/reach"),
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "Cov"),
                createBaseVNode("td", null, " ")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Under 1"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "fcsaaUnmg5j",
                    "data-co": "Tt7fU5lUhAU"
                  }, "910")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "DzCqBNtgw2C",
                    "data-co": "goHo0wV2Gx1"
                  }, "352")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "DzCqBNtgw2C",
                    "data-co": "H5xzz0m9zyd"
                  }, "454")
                ]),
                createBaseVNode("td", null, "806"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "kBNHszeOCpn",
                    "data-co": "goHo0wV2Gx1"
                  }, "296")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "kBNHszeOCpn",
                    "data-co": "H5xzz0m9zyd"
                  }, "488")
                ]),
                createBaseVNode("td", null, "784"),
                createBaseVNode("td", null, "86.2"),
                createBaseVNode("td", null, "2.7")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "910"),
                createBaseVNode("td", null, "352"),
                createBaseVNode("td", null, "454"),
                createBaseVNode("td", null, "806"),
                createBaseVNode("td", null, "296"),
                createBaseVNode("td", null, "488"),
                createBaseVNode("td", null, "784"),
                createBaseVNode("td", null, "86.2"),
                createBaseVNode("td", null, "2.7")
              ])
            ])
          ]),
          createTextVNode("     "),
          createBaseVNode("table", {
            cellspacing: "0",
            width: "100%"
          }, [
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", { class: "section-subhead" }, [
                createBaseVNode("td", { rowspan: "2" }, "Age"),
                createBaseVNode("td", { rowspan: "2" }, "Monthly target"),
                createBaseVNode("td", { colspan: "3" }, "Malaria Vaccine 1"),
                createBaseVNode("td", { colspan: "3" }, "Malaria Vaccine 2"),
                createBaseVNode("td", { colspan: "4" }, "Malaria Vaccine 3"),
                createBaseVNode("td", { colspan: "4" }, "Malaria Vaccine 4"),
                createBaseVNode("td", { rowspan: "2" }, "Dropout Rate")
              ]),
              createBaseVNode("tr", { class: "section-subhead" }, [
                createBaseVNode("td", null, "Static"),
                createBaseVNode("td", null, "O/Reach"),
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "Static"),
                createBaseVNode("td", null, "O/Reach"),
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "Static"),
                createBaseVNode("td", null, "O/Reach"),
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "Cov"),
                createBaseVNode("td", null, "Static"),
                createBaseVNode("td", null, "O/Reach"),
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "Cov")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Under 1"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "gxGFvXiI39i",
                    "data-co": "Tt7fU5lUhAU"
                  }, "856")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "a3DjUocUyEa",
                    "data-co": "goHo0wV2Gx1"
                  }, "0")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "a3DjUocUyEa",
                    "data-co": "H5xzz0m9zyd"
                  }, "0")
                ]),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "qcbczRGg4Gm",
                    "data-co": "goHo0wV2Gx1"
                  }, "0")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "qcbczRGg4Gm",
                    "data-co": "H5xzz0m9zyd"
                  }, "0")
                ]),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "MqhI0ToAbRd",
                    "data-co": "goHo0wV2Gx1"
                  }, "0")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "MqhI0ToAbRd",
                    "data-co": "H5xzz0m9zyd"
                  }, "0")
                ]),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", { class: "grayed-cells" }, " "),
                createBaseVNode("td", { class: "grayed-cells" }, " "),
                createBaseVNode("td", { class: "grayed-cells" }, " "),
                createBaseVNode("td", { class: "grayed-cells" }, " "),
                createBaseVNode("td")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "22 - 36 months"),
                createBaseVNode("td", { class: "grayed-cells" }, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "RpcTO1N2yQu",
                    "data-co": "Tt7fU5lUhAU"
                  }, "0")
                ]),
                createBaseVNode("td", { class: "grayed-cells" }, " "),
                createBaseVNode("td", { class: "grayed-cells" }, " "),
                createBaseVNode("td", { class: "grayed-cells" }, " "),
                createBaseVNode("td", { class: "grayed-cells" }, " "),
                createBaseVNode("td", { class: "grayed-cells" }, " "),
                createBaseVNode("td", { class: "grayed-cells" }, " "),
                createBaseVNode("td", { class: "grayed-cells" }, " "),
                createBaseVNode("td", { class: "grayed-cells" }, " "),
                createBaseVNode("td", { class: "grayed-cells" }, " "),
                createBaseVNode("td", { class: "grayed-cells" }, " "),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "BcipDoKGMNu",
                    "data-co": "k4MfKNU5WDq"
                  }, "0")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "BcipDoKGMNu",
                    "data-co": "heiO5lIn7Cs"
                  }, "0")
                ]),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td"),
                createBaseVNode("td", { class: "grayed-cells" }, " ")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td"),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td"),
                createBaseVNode("td")
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("tr", null, [
        createBaseVNode("td", {
          style: {"border":"0px","padding-top":"20px"},
          width: "40%"
        }, [
          createBaseVNode("table", {
            cellspacing: "0",
            width: "100%"
          }, [
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", { class: "section-subhead" }, [
                createBaseVNode("td", { rowspan: "2" }, "Age"),
                createBaseVNode("td", { rowspan: "2" }, "Monthly Target"),
                createBaseVNode("td", { colspan: "3" }, "Number children protected at birth"),
                createBaseVNode("td", null, "Cov")
              ]),
              createBaseVNode("tr", { class: "section-subhead" }, [
                createBaseVNode("td", null, "Static"),
                createBaseVNode("td", null, "O/reach"),
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, " ")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Under 1"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "TWRYEEWgPFo",
                    "data-co": "Tt7fU5lUhAU"
                  }, "939")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "ds8EuoyoTUK",
                    "data-co": "goHo0wV2Gx1"
                  }, "619")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "ds8EuoyoTUK",
                    "data-co": "H5xzz0m9zyd"
                  }, "77")
                ]),
                createBaseVNode("td", null, "696"),
                createBaseVNode("td", null, "74.1")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "939"),
                createBaseVNode("td", null, "619"),
                createBaseVNode("td", null, "77"),
                createBaseVNode("td", null, "696"),
                createBaseVNode("td", null, " ")
              ])
            ])
          ])
        ]),
        createBaseVNode("td", {
          style: {"border":"0px","padding-top":"20px","vertical-align":"top"},
          width: "60%"
        }, [
          createBaseVNode("table", {
            cellspacing: "0",
            width: "100%"
          }, [
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", { class: "section-subhead" }, [
                createBaseVNode("td", { rowspan: "2" }, "Age"),
                createBaseVNode("td", { rowspan: "2" }, "Monthly Target"),
                createBaseVNode("td", { colspan: "5" }, "HPV 1"),
                createBaseVNode("td", { colspan: "5" }, "HPV 2"),
                createBaseVNode("td", { rowspan: "2" }, "Drop Out Rate")
              ]),
              createBaseVNode("tr", { class: "section-subhead" }, [
                createBaseVNode("td", null, "Static"),
                createBaseVNode("td", null, "Out Reach"),
                createBaseVNode("td", null, "School"),
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "Cov"),
                createBaseVNode("td", null, "Static"),
                createBaseVNode("td", null, "Out Reach"),
                createBaseVNode("td", null, "School"),
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "Cov")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "9 Yrs girls"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "H9AA0aCgLLW",
                    "data-co": "Tt7fU5lUhAU"
                  }, "1376")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "LVf1UKNhsTQ",
                    "data-co": "bynRt3ic3AU"
                  }, "11")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "LVf1UKNhsTQ",
                    "data-co": "ncuvhAmA87L"
                  }, "0")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "LVf1UKNhsTQ",
                    "data-co": "xqbG4BkxGQf"
                  }, "0")
                ]),
                createBaseVNode("td", null, "11"),
                createBaseVNode("td", null, "0.8"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "pU8U8rGHdz9",
                    "data-co": "bynRt3ic3AU"
                  }, "0")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "pU8U8rGHdz9",
                    "data-co": "ncuvhAmA87L"
                  }, "0")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "pU8U8rGHdz9",
                    "data-co": "xqbG4BkxGQf"
                  }, "0")
                ]),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, "100")
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("tr", { class: "spacer" }, [
        createBaseVNode("td", { colspan: "2" }, " ")
      ]),
      createBaseVNode("tr", {
        class: "section-head",
        style: {"border-spacing":"0 20px"}
      }, [
        createBaseVNode("td", {
          colspan: "2",
          style: {"border":"0px"}
        }, "B. Fully Immunized")
      ]),
      createBaseVNode("tr", null, [
        createBaseVNode("td", {
          colspan: "2",
          style: {"border":"0px"}
        }, [
          createBaseVNode("table", {
            cellspacing: "0",
            width: "100%"
          }, [
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", { class: "section-subhead" }, [
                createBaseVNode("td", { rowspan: "2" }, "Age"),
                createBaseVNode("td", { rowspan: "2" }, "Monthly Target"),
                createBaseVNode("td", { colspan: "4" }, "Fully Immunized  children")
              ]),
              createBaseVNode("tr", { class: "section-subhead" }, [
                createBaseVNode("td", null, "Static"),
                createBaseVNode("td", null, "Outreach"),
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "Cov")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Under 1"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "nY4VJl2RBVn",
                    "data-co": "Tt7fU5lUhAU"
                  }, "907")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "NxggSy8gzqo",
                    "data-co": "UHR4d8LgGou"
                  }, "284")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "NxggSy8gzqo",
                    "data-co": "ipKITPnwlcP"
                  }, "459")
                ]),
                createBaseVNode("td", null, "743"),
                createBaseVNode("td", null, "81.9")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Over 1"),
                createBaseVNode("td", { class: "grayed-cells" }, " "),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "NxggSy8gzqo",
                    "data-co": "r2NJTUrJ2TL"
                  }, "10")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "NxggSy8gzqo",
                    "data-co": "zKLduwqZFnh"
                  }, "31")
                ]),
                createBaseVNode("td", null, "41"),
                createBaseVNode("td", { class: "grayed-cells" }, " ")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "907"),
                createBaseVNode("td", null, "294"),
                createBaseVNode("td", null, "490"),
                createBaseVNode("td", null, "784"),
                createBaseVNode("td", { class: "grayed-cells" }, " ")
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("tr", { class: "spacer" }, [
        createBaseVNode("td", { colspan: "2" }, " ")
      ]),
      createBaseVNode("tr", {
        class: "section-head",
        style: {"border-spacing":"0 20px"}
      }, [
        createBaseVNode("td", {
          colspan: "2",
          style: {"border":"0px"}
        }, "C. Tetanus Diphtheria Vaccinations")
      ]),
      createBaseVNode("tr", null, [
        createBaseVNode("td", {
          colspan: "2",
          style: {"border":"0px"}
        }, [
          createBaseVNode("table", {
            cellspacing: "0",
            width: "100%"
          }, [
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", { class: "section-subhead" }, [
                createBaseVNode("td", { rowspan: "3" }, " "),
                createBaseVNode("td", { colspan: "5" }, "Td for pregnant women"),
                createBaseVNode("td", { colspan: "5" }, "Td for non-pregnant women of"),
                createBaseVNode("td", { colspan: "5" }, "Td for women of child bearing age (CBA)")
              ]),
              createBaseVNode("tr", { class: "section-subhead" }, [
                createBaseVNode("td", null, "Monthly Target"),
                createBaseVNode("td", null, "Static"),
                createBaseVNode("td", null, "O/reach"),
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", { rowspan: "2" }, "Cov"),
                createBaseVNode("td", null, "Monthly Target"),
                createBaseVNode("td", null, "Static"),
                createBaseVNode("td", null, "O/reach"),
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", { rowspan: "2" }, "Cov"),
                createBaseVNode("td", null, "Monthly Target"),
                createBaseVNode("td", null, "Static"),
                createBaseVNode("td", null, "O/reach"),
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", { rowspan: "2" }, "Cov")
              ]),
              createBaseVNode("tr", { class: "section-subhead" }, [
                createBaseVNode("td", null, "A"),
                createBaseVNode("td", null, "B"),
                createBaseVNode("td", null, "C"),
                createBaseVNode("td", null, "D"),
                createBaseVNode("td", null, "E"),
                createBaseVNode("td", null, "F"),
                createBaseVNode("td", null, "G"),
                createBaseVNode("td", null, "H"),
                createBaseVNode("td", null, "A+E"),
                createBaseVNode("td", null, "B+F"),
                createBaseVNode("td", null, "C+G"),
                createBaseVNode("td", null, "D+H")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Td1"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "GFK6GYOH1pe",
                    "data-co": "FUyKlZuQ0op"
                  }, "1059")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "ZvoyuiyUtgg",
                    "data-co": "Y0oKwoxLmfB"
                  }, "413")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "ZvoyuiyUtgg",
                    "data-co": "v8UlsCp6RTi"
                  }, "82")
                ]),
                createBaseVNode("td", null, "495"),
                createBaseVNode("td", null, "46.7"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "GFK6GYOH1pe",
                    "data-co": "sUJu7Rrwnqf"
                  }, "3804")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "ZvoyuiyUtgg",
                    "data-co": "VR8GxFVadjW"
                  }, "90")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "ZvoyuiyUtgg",
                    "data-co": "fyMUQSfro2z"
                  }, "96")
                ]),
                createBaseVNode("td", null, "186"),
                createBaseVNode("td", null, "4.9"),
                createBaseVNode("td", null, "4863"),
                createBaseVNode("td", null, "503"),
                createBaseVNode("td", null, "178"),
                createBaseVNode("td", null, "681"),
                createBaseVNode("td", null, "14")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Td2"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "GFK6GYOH1pe",
                    "data-co": "p1eVusA8ewZ"
                  }, "1036")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "ZvoyuiyUtgg",
                    "data-co": "rX6HhzjkC63"
                  }, "286")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "ZvoyuiyUtgg",
                    "data-co": "zKvAzopOfMq"
                  }, "56")
                ]),
                createBaseVNode("td", null, "342"),
                createBaseVNode("td", null, "33"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "GFK6GYOH1pe",
                    "data-co": "ilp7FL283ki"
                  }, "3723")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "ZvoyuiyUtgg",
                    "data-co": "zjjR9qDJM3F"
                  }, "97")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "ZvoyuiyUtgg",
                    "data-co": "oTvYHlcftAc"
                  }, "148")
                ]),
                createBaseVNode("td", null, "245"),
                createBaseVNode("td", null, "6.6"),
                createBaseVNode("td", null, "4759"),
                createBaseVNode("td", null, "383"),
                createBaseVNode("td", null, "204"),
                createBaseVNode("td", null, "587"),
                createBaseVNode("td", null, "12.3")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Td3"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "GFK6GYOH1pe",
                    "data-co": "hkiWKCld6Gb"
                  }, "1036")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "ZvoyuiyUtgg",
                    "data-co": "ftfQcyXJfc9"
                  }, "89")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "ZvoyuiyUtgg",
                    "data-co": "fgRdWjPgNhY"
                  }, "30")
                ]),
                createBaseVNode("td", null, "119"),
                createBaseVNode("td", null, "11.5"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "GFK6GYOH1pe",
                    "data-co": "X3wL9Dv8IQ1"
                  }, "3723")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "ZvoyuiyUtgg",
                    "data-co": "sC2KvkQdJ9m"
                  }, "77")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "ZvoyuiyUtgg",
                    "data-co": "AGICAaiRdfh"
                  }, "175")
                ]),
                createBaseVNode("td", null, "252"),
                createBaseVNode("td", null, "6.8"),
                createBaseVNode("td", null, "4759"),
                createBaseVNode("td", null, "166"),
                createBaseVNode("td", null, "205"),
                createBaseVNode("td", null, "371"),
                createBaseVNode("td", null, "7.8")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Td4"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "GFK6GYOH1pe",
                    "data-co": "ddOrYP9LWcZ"
                  }, "1036")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "ZvoyuiyUtgg",
                    "data-co": "ggMAma5by6E"
                  }, "59")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "ZvoyuiyUtgg",
                    "data-co": "wu9dfmpb8R8"
                  }, "24")
                ]),
                createBaseVNode("td", null, "83"),
                createBaseVNode("td", null, "8"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "GFK6GYOH1pe",
                    "data-co": "ebDFxuz6EN3"
                  }, "3723")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "ZvoyuiyUtgg",
                    "data-co": "cJXUKYuKghd"
                  }, "45")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "ZvoyuiyUtgg",
                    "data-co": "pM2WJzwnYvn"
                  }, "116")
                ]),
                createBaseVNode("td", null, "161"),
                createBaseVNode("td", null, "4.3"),
                createBaseVNode("td", null, "4759"),
                createBaseVNode("td", null, "104"),
                createBaseVNode("td", null, "140"),
                createBaseVNode("td", null, "244"),
                createBaseVNode("td", null, "5.1")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Td5"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "GFK6GYOH1pe",
                    "data-co": "exF4t64yYbj"
                  }, "1045")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "ZvoyuiyUtgg",
                    "data-co": "KTII5gIVUpu"
                  }, "37")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "ZvoyuiyUtgg",
                    "data-co": "CW5V3g1rGup"
                  }, "16")
                ]),
                createBaseVNode("td", null, "53"),
                createBaseVNode("td", null, "5.1"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "GFK6GYOH1pe",
                    "data-co": "s9bOyev26fk"
                  }, "3714")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "ZvoyuiyUtgg",
                    "data-co": "jf94UGJxXmC"
                  }, "33")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "ZvoyuiyUtgg",
                    "data-co": "Oy2BoTw63WF"
                  }, "50")
                ]),
                createBaseVNode("td", null, "83"),
                createBaseVNode("td", null, "2.2"),
                createBaseVNode("td", null, "4759"),
                createBaseVNode("td", null, "70"),
                createBaseVNode("td", null, "66"),
                createBaseVNode("td", null, "136"),
                createBaseVNode("td", null, "2.9")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Total doses"),
                createBaseVNode("td", null, "5212"),
                createBaseVNode("td", null, "884"),
                createBaseVNode("td", null, "208"),
                createBaseVNode("td", null, "1092"),
                createBaseVNode("td", null, "21"),
                createBaseVNode("td", null, "18687"),
                createBaseVNode("td", null, "342"),
                createBaseVNode("td", null, "585"),
                createBaseVNode("td", null, "927"),
                createBaseVNode("td", null, "5"),
                createBaseVNode("td", null, "23899"),
                createBaseVNode("td", null, "1226"),
                createBaseVNode("td", null, "793"),
                createBaseVNode("td", null, "2019"),
                createBaseVNode("td", null, "8.4")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Td2+"),
                createBaseVNode("td", null, "4153"),
                createBaseVNode("td", null, "471"),
                createBaseVNode("td", null, "126"),
                createBaseVNode("td", null, "597"),
                createBaseVNode("td", null, "14.4"),
                createBaseVNode("td", null, "14883"),
                createBaseVNode("td", null, "252"),
                createBaseVNode("td", null, "489"),
                createBaseVNode("td", null, "741"),
                createBaseVNode("td", null, "5"),
                createBaseVNode("td", null, "19036"),
                createBaseVNode("td", null, "723"),
                createBaseVNode("td", null, "615"),
                createBaseVNode("td", null, "1338"),
                createBaseVNode("td", null, "7")
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("tr", { class: "spacer" }, [
        createBaseVNode("td", { colspan: "2" }, " ")
      ]),
      createBaseVNode("tr", {
        class: "section-head",
        style: {"border-spacing":"0 20px"}
      }, [
        createBaseVNode("td", {
          colspan: "2",
          style: {"border":"0px"}
        }, "D. Vaccine Wastage")
      ]),
      createBaseVNode("tr", null, [
        createBaseVNode("td", {
          colspan: "2",
          style: {"border":"0px"}
        }, [
          createBaseVNode("table", {
            cellspacing: "0",
            width: "100%"
          }, [
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", { class: "section-subhead" }, [
                createBaseVNode("td", null, "Strategy"),
                createBaseVNode("td", { colspan: "4" }, "BCG"),
                createBaseVNode("td", { colspan: "4" }, "OPV"),
                createBaseVNode("td", { colspan: "4" }, "MR")
              ]),
              createBaseVNode("tr", { class: "section-subhead" }, [
                createBaseVNode("td", null, " "),
                createBaseVNode("td", null, "Doses Used and wasted (A)"),
                createBaseVNode("td", null, "Number of children vaccinated (B)"),
                createBaseVNode("td", null, "Vaccine wasted (A-B)"),
                createBaseVNode("td", null, "Wastage rate (A- B)/A*100"),
                createBaseVNode("td", null, "Doses Used and wasted (A)"),
                createBaseVNode("td", null, "Number of children vaccinate d (B)"),
                createBaseVNode("td", null, "Vaccine wasted (A-B)"),
                createBaseVNode("td", null, "Wastage rate (A- B)/A*100"),
                createBaseVNode("td", null, "Doses Used and wasted (A)"),
                createBaseVNode("td", null, "Number of children vaccinated (B)"),
                createBaseVNode("td", null, "Vaccine wasted (A-B)"),
                createBaseVNode("td", null, "Wastage rate (A-B)/A*100")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Static"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "mbWu21JCSjl",
                    "data-co": "yqszvXV2s8u"
                  }, "1730")
                ]),
                createBaseVNode("td", null, "622"),
                createBaseVNode("td", null, "1108"),
                createBaseVNode("td", null, "64"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "fWIuCM5jG37",
                    "data-co": "yqszvXV2s8u"
                  }, "1753")
                ]),
                createBaseVNode("td", null, "969"),
                createBaseVNode("td", null, "784"),
                createBaseVNode("td", null, "44.7"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "RBgvlB5UwNu",
                    "data-co": "yqszvXV2s8u"
                  }, "768")
                ]),
                createBaseVNode("td", null, "506"),
                createBaseVNode("td", null, "262"),
                createBaseVNode("td", null, "34.1")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Outreach"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "mbWu21JCSjl",
                    "data-co": "kVTGmhgf7wQ"
                  }, "320")
                ]),
                createBaseVNode("td", null, "48"),
                createBaseVNode("td", null, "272"),
                createBaseVNode("td", null, "85"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "fWIuCM5jG37",
                    "data-co": "kVTGmhgf7wQ"
                  }, "1322")
                ]),
                createBaseVNode("td", null, "1370"),
                createBaseVNode("td", null, "-48"),
                createBaseVNode("td", null, "-3.6"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "RBgvlB5UwNu",
                    "data-co": "kVTGmhgf7wQ"
                  }, "1068")
                ]),
                createBaseVNode("td", null, "827"),
                createBaseVNode("td", null, "241"),
                createBaseVNode("td", null, "22.6")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "2050"),
                createBaseVNode("td", null, "670"),
                createBaseVNode("td", null, "1380"),
                createBaseVNode("td", null, "67.3"),
                createBaseVNode("td", null, "3075"),
                createBaseVNode("td", null, "2339"),
                createBaseVNode("td", null, "736"),
                createBaseVNode("td", null, "23.9"),
                createBaseVNode("td", null, "1836"),
                createBaseVNode("td", null, "1333"),
                createBaseVNode("td", null, "503"),
                createBaseVNode("td", null, "27.4")
              ])
            ])
          ]),
          createTextVNode("     "),
          createBaseVNode("table", {
            cellspacing: "0",
            width: "100%"
          }, [
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", { class: "section-subhead" }, [
                createBaseVNode("td", { rowspan: "2" }, "Strategy"),
                createBaseVNode("td", { colspan: "4" }, "DPT-HepB-Hib"),
                createBaseVNode("td", { colspan: "4" }, "PCV"),
                createBaseVNode("td", { colspan: "4" }, "ROTA"),
                createBaseVNode("td", { colspan: "4" }, "Malaria Vaccine")
              ]),
              createBaseVNode("tr", { class: "section-subhead" }, [
                createBaseVNode("td", null, "Doses Used(A)"),
                createBaseVNode("td", null, "Doses Discarded (B)"),
                createBaseVNode("td", null, "Total (A+B)"),
                createBaseVNode("td", null, "Wastage rate"),
                createBaseVNode("td", null, "Doses Used (A)"),
                createBaseVNode("td", null, "Doses Discarded (B)"),
                createBaseVNode("td", null, "Total (A+B)"),
                createBaseVNode("td", null, "Wastage rate"),
                createBaseVNode("td", null, "Doses Used (A)"),
                createBaseVNode("td", null, "Doses Discarded (B)"),
                createBaseVNode("td", null, "Total (A+B)"),
                createBaseVNode("td", null, "Wastage rate"),
                createBaseVNode("td", null, "Doses Used (A)"),
                createBaseVNode("td", null, "Doses Discarded (B)"),
                createBaseVNode("td", null, "Total (A+B)"),
                createBaseVNode("td", null, "Wastage rate")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Static"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "I8dr5TvUAwP",
                    "data-co": "yqszvXV2s8u"
                  }, "983")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "e7PwzVUCN3H",
                    "data-co": "yqszvXV2s8u"
                  }, "877")
                ]),
                createBaseVNode("td", null, "1860"),
                createBaseVNode("td", null, "48"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "y5XiQQ1fQux",
                    "data-co": "yqszvXV2s8u"
                  }, "919")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "luKOKmbulRH",
                    "data-co": "yqszvXV2s8u"
                  }, "870")
                ]),
                createBaseVNode("td", null, "1789"),
                createBaseVNode("td", null, "45.8"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "m9TzcUzQ84r",
                    "data-co": "yqszvXV2s8u"
                  }, "606")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "j6kXgziwjSE",
                    "data-co": "yqszvXV2s8u"
                  }, "577")
                ]),
                createBaseVNode("td", null, "1183"),
                createBaseVNode("td", null, "45.2"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "w9TeerQ0fM4",
                    "data-co": "yqszvXV2s8u"
                  }, "40")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "qsgQxHQOBHa",
                    "data-co": "yqszvXV2s8u"
                  }, "32")
                ]),
                createBaseVNode("td", null, "72"),
                createBaseVNode("td", null, "100")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Outreach"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "I8dr5TvUAwP",
                    "data-co": "kVTGmhgf7wQ"
                  }, "1248")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "e7PwzVUCN3H",
                    "data-co": "kVTGmhgf7wQ"
                  }, "1103")
                ]),
                createBaseVNode("td", null, "2351"),
                createBaseVNode("td", null, "41.8"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "y5XiQQ1fQux",
                    "data-co": "kVTGmhgf7wQ"
                  }, "1154")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "luKOKmbulRH",
                    "data-co": "kVTGmhgf7wQ"
                  }, "1098")
                ]),
                createBaseVNode("td", null, "2252"),
                createBaseVNode("td", null, "38.7"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "m9TzcUzQ84r",
                    "data-co": "kVTGmhgf7wQ"
                  }, "870")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "j6kXgziwjSE",
                    "data-co": "kVTGmhgf7wQ"
                  }, "824")
                ]),
                createBaseVNode("td", null, "1694"),
                createBaseVNode("td", null, "44.4"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "w9TeerQ0fM4",
                    "data-co": "kVTGmhgf7wQ"
                  }, "15")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "qsgQxHQOBHa",
                    "data-co": "kVTGmhgf7wQ"
                  }, "5")
                ]),
                createBaseVNode("td", null, "20"),
                createBaseVNode("td", null, "100")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "2231"),
                createBaseVNode("td", null, "1980"),
                createBaseVNode("td", null, "4211"),
                createBaseVNode("td", null, "44.5"),
                createBaseVNode("td", null, "2073"),
                createBaseVNode("td", null, "1968"),
                createBaseVNode("td", null, "4041"),
                createBaseVNode("td", null, "41.9"),
                createBaseVNode("td", null, "1476"),
                createBaseVNode("td", null, "1401"),
                createBaseVNode("td", null, "2877"),
                createBaseVNode("td", null, "44.7"),
                createBaseVNode("td", null, "55"),
                createBaseVNode("td", null, "37"),
                createBaseVNode("td", null, "92"),
                createBaseVNode("td", null, "100")
              ])
            ])
          ]),
          createTextVNode("     "),
          createBaseVNode("table", {
            cellspacing: "0",
            width: "100%"
          }, [
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", { class: "section-subhead" }, [
                createBaseVNode("td", { rowspan: "2" }, "Strategy"),
                createBaseVNode("td", { colspan: "4" }, "  Td"),
                createBaseVNode("td", { colspan: "4" }, "  HPV")
              ]),
              createBaseVNode("tr", { class: "section-subhead" }, [
                createBaseVNode("td", null, "Doses Used"),
                createBaseVNode("td", null, "Doses Discarded"),
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "Wastage rate"),
                createBaseVNode("td", null, "Doses Used"),
                createBaseVNode("td", null, "Doses Discarded"),
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "Wastage")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Static"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "q9pGVAO68Gr",
                    "data-co": "yqszvXV2s8u"
                  }, "1181")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "KfG1kd1zFzz",
                    "data-co": "yqszvXV2s8u"
                  }, "122")
                ]),
                createBaseVNode("td", null, "1303"),
                createBaseVNode("td", null, "5.9"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "n7rIea6EPyy",
                    "data-co": "yqszvXV2s8u"
                  }, "0")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "Y5K4MbjF0wX",
                    "data-co": "yqszvXV2s8u"
                  }, "0")
                ]),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Outreach"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "q9pGVAO68Gr",
                    "data-co": "kVTGmhgf7wQ"
                  }, "766")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "KfG1kd1zFzz",
                    "data-co": "kVTGmhgf7wQ"
                  }, "105")
                ]),
                createBaseVNode("td", null, "871"),
                createBaseVNode("td", null, "9"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "n7rIea6EPyy",
                    "data-co": "kVTGmhgf7wQ"
                  }, "0")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "Y5K4MbjF0wX",
                    "data-co": "kVTGmhgf7wQ"
                  }, "0")
                ]),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "1947"),
                createBaseVNode("td", null, "227"),
                createBaseVNode("td", null, "2174"),
                createBaseVNode("td", null, "7.1"),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td")
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("tr", { class: "spacer" }, [
        createBaseVNode("td", { colspan: "2" }, " ")
      ]),
      createBaseVNode("tr", {
        class: "section-head",
        style: {"border-spacing":"0 20px"}
      }, [
        createBaseVNode("td", {
          colspan: "2",
          style: {"border":"0px"}
        }, "E. Vitamin A Supplementation")
      ]),
      createBaseVNode("tr", null, [
        createBaseVNode("td", {
          colspan: "2",
          style: {"border":"0px"}
        }, [
          createBaseVNode("table", {
            cellspacing: "0",
            width: "100%"
          }, [
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", { class: "section-subhead" }, [
                createBaseVNode("td", { rowspan: "2" }, "Strategy"),
                createBaseVNode("td", { colspan: "5" }, "6-11 months"),
                createBaseVNode("td", { colspan: "5" }, [
                  createTextVNode("12-59 months (1"),
                  createBaseVNode("sup", null, "st"),
                  createTextVNode(" Dose)")
                ]),
                createBaseVNode("td", { colspan: "5" }, [
                  createTextVNode("12-59 months (2"),
                  createBaseVNode("sup", null, "nd"),
                  createTextVNode(" Dose)")
                ]),
                createBaseVNode("td", { colspan: "3" }, "Postnatal mothers")
              ]),
              createBaseVNode("tr", { class: "section-subhead" }, [
                createBaseVNode("td", { rowspan: "2" }, "Monthly Target"),
                createBaseVNode("td", {
                  colspan: "3",
                  rowspan: "1"
                }, "Number supplemented"),
                createBaseVNode("td", { rowspan: "2" }, "Cov"),
                createBaseVNode("td", { rowspan: "2" }, "Monthly Target"),
                createBaseVNode("td", {
                  colspan: "3",
                  rowspan: "1"
                }, "Number supplemented"),
                createBaseVNode("td", null, "Cov"),
                createBaseVNode("td", { rowspan: "2" }, "Monthly Target"),
                createBaseVNode("td", {
                  colspan: "3",
                  rowspan: "1"
                }, "Number supplemented"),
                createBaseVNode("td", null, "Cov"),
                createBaseVNode("td", null, "Monthly Target"),
                createBaseVNode("td", null, "Number Supplemented"),
                createBaseVNode("td", null, "Cov")
              ]),
              createBaseVNode("tr", { class: "section-subhead" }, [
                createBaseVNode("td", null, " "),
                createBaseVNode("td", null, "M"),
                createBaseVNode("td", null, "F"),
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "M"),
                createBaseVNode("td", null, "F"),
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, " "),
                createBaseVNode("td", null, "M"),
                createBaseVNode("td", null, "F"),
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, " "),
                createBaseVNode("td", null, " "),
                createBaseVNode("td", null, " "),
                createBaseVNode("td", null, " ")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Static"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "Z0NHyXNToqQ",
                    "data-co": "cg6HUEGPtVn"
                  }, "397")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "QBgBWJAlOxW",
                    "data-co": "xZ6voDw6RH5"
                  }, "1")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "QBgBWJAlOxW",
                    "data-co": "TEIykBA5pf5"
                  }, "0")
                ]),
                createBaseVNode("td", null, "1"),
                createBaseVNode("td", null, "0.2"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "Z0NHyXNToqQ",
                    "data-co": "CRLR2mJxlDh"
                  }, "1691")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "QBgBWJAlOxW",
                    "data-co": "KgiMiWs1E8P"
                  }, "3")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "QBgBWJAlOxW",
                    "data-co": "FpdeEDs8TIP"
                  }, "1")
                ]),
                createBaseVNode("td", null, "4"),
                createBaseVNode("td", null, "0.2"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "Z0NHyXNToqQ",
                    "data-co": "kwL7tcT1Y2F"
                  }, "1635")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "QBgBWJAlOxW",
                    "data-co": "PRPdhssSeW6"
                  }, "0")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "QBgBWJAlOxW",
                    "data-co": "UWrsmTpB3fF"
                  }, "0")
                ]),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "Z0NHyXNToqQ",
                    "data-co": "BazVKQ6ZpCq"
                  }, "329")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "QBgBWJAlOxW",
                    "data-co": "xLZW9fzZMdq"
                  }, "13")
                ]),
                createBaseVNode("td", null, "4")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Outreach"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "Z0NHyXNToqQ",
                    "data-co": "s5nG0tOerwC"
                  }, "0")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "QBgBWJAlOxW",
                    "data-co": "fuvlp9uqcPd"
                  }, "6")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "QBgBWJAlOxW",
                    "data-co": "GC3TdzwM8OA"
                  }, "6")
                ]),
                createBaseVNode("td", null, "12"),
                createBaseVNode("td"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "Z0NHyXNToqQ",
                    "data-co": "DelguUiaDgQ"
                  }, "70")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "QBgBWJAlOxW",
                    "data-co": "rumJgZkdY47"
                  }, "4")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "QBgBWJAlOxW",
                    "data-co": "gB0W63Kq6AZ"
                  }, "2")
                ]),
                createBaseVNode("td", null, "6"),
                createBaseVNode("td", null, "8.6"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "Z0NHyXNToqQ",
                    "data-co": "UZ80iHM7Ta7"
                  }, "0")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "QBgBWJAlOxW",
                    "data-co": "tsqT0XhqObc"
                  }, "1")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "QBgBWJAlOxW",
                    "data-co": "hGXCz93cOZz"
                  }, "0")
                ]),
                createBaseVNode("td", null, "1"),
                createBaseVNode("td"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "Z0NHyXNToqQ",
                    "data-co": "Q3z4PEAGJPk"
                  }, "0")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "QBgBWJAlOxW",
                    "data-co": "xprBmf6aoxX"
                  }, "0")
                ]),
                createBaseVNode("td")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "397"),
                createBaseVNode("td", null, "7"),
                createBaseVNode("td", null, "6"),
                createBaseVNode("td", null, "13"),
                createBaseVNode("td", null, "3.3"),
                createBaseVNode("td", null, "1761"),
                createBaseVNode("td", null, "7"),
                createBaseVNode("td", null, "3"),
                createBaseVNode("td", null, "10"),
                createBaseVNode("td", null, "0.6"),
                createBaseVNode("td", null, "1635"),
                createBaseVNode("td", null, "1"),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, "1"),
                createBaseVNode("td", null, "0.1"),
                createBaseVNode("td", null, "329"),
                createBaseVNode("td", null, "13"),
                createBaseVNode("td", null, "4")
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("tr", { class: "spacer" }, [
        createBaseVNode("td", { colspan: "2" }, " ")
      ]),
      createBaseVNode("tr", {
        class: "section-head",
        style: {"border-spacing":"0 20px"}
      }, [
        createBaseVNode("td", {
          colspan: "2",
          style: {"border":"0px"}
        }, "F. Deworming")
      ]),
      createBaseVNode("tr", null, [
        createBaseVNode("td", {
          colspan: "2",
          style: {"border":"0px"}
        }, [
          createBaseVNode("table", {
            cellspacing: "0",
            width: "100%"
          }, [
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", { class: "section-subhead" }, [
                createBaseVNode("td", { rowspan: "2" }, "Strategy"),
                createBaseVNode("td", { colspan: "5" }, "12-23 months (1st Dose)"),
                createBaseVNode("td", null, " "),
                createBaseVNode("td", {
                  colspan: "2",
                  rowspan: "1"
                }, "12-23 months (2nd Dose)"),
                createBaseVNode("td", {
                  colspan: "1",
                  rowspan: "3"
                }, "Total"),
                createBaseVNode("td", {
                  colspan: "1",
                  rowspan: "3"
                }, "Cov"),
                createBaseVNode("td", { colspan: "5" }, "24-59 months(1st Dose)"),
                createBaseVNode("td", null, " "),
                createBaseVNode("td", {
                  colspan: "2",
                  rowspan: "1"
                }, "24-59 months(2nd Dose)"),
                createBaseVNode("td", { rowspan: "1" }, " "),
                createBaseVNode("td", null, " ")
              ]),
              createBaseVNode("tr", { class: "section-subhead" }, [
                createBaseVNode("td", { rowspan: "2" }, "Monthly Target"),
                createBaseVNode("td", {
                  colspan: "3",
                  rowspan: "1"
                }, "Number dewormed"),
                createBaseVNode("td", { rowspan: "2" }, "  Cov"),
                createBaseVNode("td", { rowspan: "2" }, "Monthly Target"),
                createBaseVNode("td", {
                  colspan: "2",
                  rowspan: "1"
                }, "Number Dewormed"),
                createBaseVNode("td", { rowspan: "2" }, "Monthly Target"),
                createBaseVNode("td", {
                  colspan: "3",
                  rowspan: "1"
                }, "Number dewormed"),
                createBaseVNode("td", { rowspan: "2" }, "  Cov"),
                createBaseVNode("td", { rowspan: "2" }, "Monthly Target"),
                createBaseVNode("td", {
                  colspan: "2",
                  rowspan: "1"
                }, "Number Dewormed"),
                createBaseVNode("td", { rowspan: "1" }, " "),
                createBaseVNode("td", { rowspan: "2" }, "Cov")
              ]),
              createBaseVNode("tr", { class: "section-subhead" }, [
                createBaseVNode("td", null, " "),
                createBaseVNode("td", null, "Male"),
                createBaseVNode("td", null, "Female"),
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "Male"),
                createBaseVNode("td", null, "Female"),
                createBaseVNode("td", null, "Male"),
                createBaseVNode("td", null, "Female"),
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "Male"),
                createBaseVNode("td", null, "Female"),
                createBaseVNode("td", null, "Total")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Static"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "j4CbL1w5OI8",
                    "data-co": "nB36VubTAWb"
                  }, "289")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "Ojz51mfHBQH",
                    "data-co": "mVBoBn7kcA3"
                  }, "1")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "Ojz51mfHBQH",
                    "data-co": "sVUMSUwxQyj"
                  }, "3")
                ]),
                createBaseVNode("td", null, "4"),
                createBaseVNode("td", null, "1.4"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "i6kd29hhCjl",
                    "data-co": "M6Uu8GIqZES"
                  }, "289")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "bfTL32ZckYS",
                    "data-co": "uFc9OWXlyO1"
                  }, "0")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "bfTL32ZckYS",
                    "data-co": "TpcUZ7K5l6K"
                  })
                ]),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "j4CbL1w5OI8",
                    "data-co": "hWep1DrZyg7"
                  }, "914")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "Ojz51mfHBQH",
                    "data-co": "p7xCFOF37EI"
                  }, "4")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "Ojz51mfHBQH",
                    "data-co": "OX3bT0qfrwH"
                  }, "2")
                ]),
                createBaseVNode("td", null, "6"),
                createBaseVNode("td", null, "0.7"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "DrFxjPdt8Wc",
                    "data-co": "M6Uu8GIqZES"
                  }, "914")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "OY9j2WgcC61",
                    "data-co": "uFc9OWXlyO1"
                  }, "0")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "OY9j2WgcC61",
                    "data-co": "TpcUZ7K5l6K"
                  }, "0")
                ]),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, "0")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Outreach"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "j4CbL1w5OI8",
                    "data-co": "sE59AYPpDzV"
                  }, "0")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "Ojz51mfHBQH",
                    "data-co": "XAPWPhdXPpN"
                  }, "2")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "Ojz51mfHBQH",
                    "data-co": "e6tut7p8b3U"
                  }, "2")
                ]),
                createBaseVNode("td", null, "4"),
                createBaseVNode("td"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "i6kd29hhCjl",
                    "data-co": "czomyGc9xby"
                  }, "0")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "bfTL32ZckYS",
                    "data-co": "LHkKnWYPRBE"
                  }, "0")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "bfTL32ZckYS",
                    "data-co": "ZLgaeoPf0bg"
                  })
                ]),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "j4CbL1w5OI8",
                    "data-co": "yHjAeb2FeKo"
                  }, "0")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "Ojz51mfHBQH",
                    "data-co": "sNWb5qxiOkh"
                  }, "5")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "Ojz51mfHBQH",
                    "data-co": "mAcNlntVW6y"
                  }, "3")
                ]),
                createBaseVNode("td", null, "8"),
                createBaseVNode("td"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "DrFxjPdt8Wc",
                    "data-co": "czomyGc9xby"
                  }, "0")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "OY9j2WgcC61",
                    "data-co": "LHkKnWYPRBE"
                  }, "0")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "OY9j2WgcC61",
                    "data-co": "ZLgaeoPf0bg"
                  }, "0")
                ]),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "289"),
                createBaseVNode("td", null, "3"),
                createBaseVNode("td", null, "5"),
                createBaseVNode("td", null, "8"),
                createBaseVNode("td", null, "2.8"),
                createBaseVNode("td", null, "289"),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td"),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, "914"),
                createBaseVNode("td", null, "9"),
                createBaseVNode("td", null, "5"),
                createBaseVNode("td", null, "14"),
                createBaseVNode("td", null, "1.5"),
                createBaseVNode("td", null, "914"),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, "0")
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("tr", { class: "spacer" }, [
        createBaseVNode("td", { colspan: "2" }, " ")
      ]),
      createBaseVNode("tr", {
        class: "section-head",
        style: {"border-spacing":"0 20px"}
      }, [
        createBaseVNode("td", {
          colspan: "2",
          style: {"border":"0px"}
        }, "G. Vitamin A Supplies")
      ]),
      createBaseVNode("tr", null, [
        createBaseVNode("td", {
          colspan: "2",
          style: {"border":"0px"}
        }, [
          createBaseVNode("table", {
            cellspacing: "0",
            width: "100%"
          }, [
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", { class: "section-subhead" }, [
                createBaseVNode("td", { rowspan: "2" }, "Strategy"),
                createBaseVNode("td", { colspan: "8" }, "Vitamin A (100 000 ius)"),
                createBaseVNode("td", { colspan: "7" }, "Vitamin A (200 000 ius)")
              ]),
              createBaseVNode("tr", { class: "section-subhead" }, [
                createBaseVNode("td", null, "Capsules at the beginning of the month (A)"),
                createBaseVNode("td", null, "Capsules received within the month (B)"),
                createBaseVNode("td", null, "Capsules at the end of the month (C)"),
                createBaseVNode("td", null, " "),
                createBaseVNode("td", null, "Number Supplemented"),
                createBaseVNode("td", null, "Wastage Rate (CI (B+C) * 100)"),
                createBaseVNode("td", null, "Stock at the End (A - (B+C))"),
                createBaseVNode("td", null, "Stock Out (Yes/No)"),
                createBaseVNode("td", null, "Capsules at beginning of the month (A)"),
                createBaseVNode("td", null, "Capsules received within the month (B)"),
                createBaseVNode("td", null, "Capsules at the end of the month (C)"),
                createBaseVNode("td", null, "Number Supplemented"),
                createBaseVNode("td", null, "Wastage rate (CI (B+C) * 100)"),
                createBaseVNode("td", null, "Stock at the End (A- (B+C))"),
                createBaseVNode("td", null, "Stock Out (Yes/No)")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Static"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "ur1h5tVZeuf",
                    "data-co": "M6Uu8GIqZES"
                  }, "1700")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "tbTlZnz4cau",
                    "data-co": "M6Uu8GIqZES"
                  }, "0")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "jwRBmw1fLIe",
                    "data-co": "M6Uu8GIqZES"
                  }, "1543")
                ]),
                createBaseVNode("td", null, " "),
                createBaseVNode("td"),
                createBaseVNode("td"),
                createBaseVNode("td", {
                  class: "grayed-cells",
                  rowspan: "2"
                }, " "),
                createBaseVNode("td", {
                  class: "grayed-cells",
                  rowspan: "2"
                }, " "),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "fb759iT1PiG",
                    "data-co": "M6Uu8GIqZES"
                  }, "6571")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "xeTBVCQ67TB",
                    "data-co": "M6Uu8GIqZES"
                  }, "100")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "Whmhjsd4gyE",
                    "data-co": "M6Uu8GIqZES"
                  }, "5641")
                ]),
                createBaseVNode("td"),
                createBaseVNode("td"),
                createBaseVNode("td", {
                  class: "grayed-cells",
                  rowspan: "2"
                }, " "),
                createBaseVNode("td", {
                  class: "grayed-cells",
                  rowspan: "2"
                }, " ")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Outreach"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "ur1h5tVZeuf",
                    "data-co": "czomyGc9xby"
                  }, "0")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "tbTlZnz4cau",
                    "data-co": "czomyGc9xby"
                  }, "0")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "jwRBmw1fLIe",
                    "data-co": "czomyGc9xby"
                  }, "0")
                ]),
                createBaseVNode("td", null, " "),
                createBaseVNode("td"),
                createBaseVNode("td"),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "fb759iT1PiG",
                    "data-co": "czomyGc9xby"
                  }, "0")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "xeTBVCQ67TB",
                    "data-co": "czomyGc9xby"
                  }, "0")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", {
                    class: "val",
                    "data-de": "Whmhjsd4gyE",
                    "data-co": "czomyGc9xby"
                  }, "0")
                ]),
                createBaseVNode("td"),
                createBaseVNode("td")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, "Total"),
                createBaseVNode("td", null, "1700"),
                createBaseVNode("td", null, "0"),
                createBaseVNode("td", null, "1543"),
                createBaseVNode("td", null, " "),
                createBaseVNode("td"),
                createBaseVNode("td"),
                createBaseVNode("td"),
                createBaseVNode("td", null, " "),
                createBaseVNode("td", null, "6571"),
                createBaseVNode("td", null, "100"),
                createBaseVNode("td", null, "5641"),
                createBaseVNode("td"),
                createBaseVNode("td"),
                createBaseVNode("td"),
                createBaseVNode("td", null, " ")
              ])
            ])
          ]),
          createTextVNode("     "),
          createBaseVNode("table", {
            cellspacing: "0",
            width: "100%"
          }, [
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", {
                class: "section-head",
                style: {"border-spacing":"0 20px"}
              }, [
                createBaseVNode("td", {
                  colspan: "2",
                  style: {"border":"0px"}
                }, "H. Deworming Supplies")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", {
                  colspan: "2",
                  style: {"border":"0px"}
                }, [
                  createBaseVNode("table", {
                    cellspacing: "0",
                    width: "100%"
                  }, [
                    createBaseVNode("tbody", null, [
                      createBaseVNode("tr", { class: "section-subhead" }, [
                        createBaseVNode("td", { rowspan: "2" }, "Strategy"),
                        createBaseVNode("td", { colspan: "8" }, "Albendazole (200mg)"),
                        createBaseVNode("td", { colspan: "7" }, "Albendazole(400mg)/Mebendazole (500mg)")
                      ]),
                      createBaseVNode("tr", { class: "section-subhead" }, [
                        createBaseVNode("td", null, "Capsules at the beginning of the month (A)"),
                        createBaseVNode("td", null, "Capsules received within the month (B)"),
                        createBaseVNode("td", null, "Capsules at the end of the month (C)"),
                        createBaseVNode("td", null, " "),
                        createBaseVNode("td", null, "Number Supplemented"),
                        createBaseVNode("td", null, "Wastage Rate (CI (B+C) * 100)"),
                        createBaseVNode("td", null, "Stock at the End (A - (B+C))"),
                        createBaseVNode("td", null, "Stock Out (Yes/No)"),
                        createBaseVNode("td", null, "Capsules at beginning of the month (A)"),
                        createBaseVNode("td", null, "Capsules received within the month (B)"),
                        createBaseVNode("td", null, "Capsules at the end of the month (C)"),
                        createBaseVNode("td", null, "Number Supplemented"),
                        createBaseVNode("td", null, "Wastage rate (CI (B+C) * 100)"),
                        createBaseVNode("td", null, "Stock at the End (A- (B+C))"),
                        createBaseVNode("td", null, "Stock Out (Yes/No)")
                      ]),
                      createBaseVNode("tr", null, [
                        createBaseVNode("td", null, "Static"),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "lTKW3f1p1IY",
                            "data-co": "M6Uu8GIqZES"
                          }, "400")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "WjWEztXO7mY",
                            "data-co": "M6Uu8GIqZES"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "oOuwrDoVFzC",
                            "data-co": "M6Uu8GIqZES"
                          }, "691")
                        ]),
                        createBaseVNode("td", null, " "),
                        createBaseVNode("td"),
                        createBaseVNode("td"),
                        createBaseVNode("td", {
                          class: "grayed-cells",
                          rowspan: "2"
                        }, " "),
                        createBaseVNode("td", {
                          class: "grayed-cells",
                          rowspan: "2"
                        }, " "),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "eqRWnXMzj5Q",
                            "data-co": "M6Uu8GIqZES"
                          }, "40020")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "SVlDjRhAGwr",
                            "data-co": "M6Uu8GIqZES"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "BL80WzM3xJ4",
                            "data-co": "M6Uu8GIqZES"
                          }, "27731")
                        ]),
                        createBaseVNode("td"),
                        createBaseVNode("td"),
                        createBaseVNode("td", {
                          class: "grayed-cells",
                          rowspan: "2"
                        }, " "),
                        createBaseVNode("td", {
                          class: "grayed-cells",
                          rowspan: "2"
                        }, " ")
                      ]),
                      createBaseVNode("tr", null, [
                        createBaseVNode("td", null, "Outreach"),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "lTKW3f1p1IY",
                            "data-co": "czomyGc9xby"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "WjWEztXO7mY",
                            "data-co": "czomyGc9xby"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "oOuwrDoVFzC",
                            "data-co": "czomyGc9xby"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, " "),
                        createBaseVNode("td"),
                        createBaseVNode("td"),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "eqRWnXMzj5Q",
                            "data-co": "czomyGc9xby"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "SVlDjRhAGwr",
                            "data-co": "czomyGc9xby"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "BL80WzM3xJ4",
                            "data-co": "czomyGc9xby"
                          }, "0")
                        ]),
                        createBaseVNode("td"),
                        createBaseVNode("td")
                      ]),
                      createBaseVNode("tr", null, [
                        createBaseVNode("td", null, "Total"),
                        createBaseVNode("td", null, "400"),
                        createBaseVNode("td", null, "0"),
                        createBaseVNode("td", null, "691"),
                        createBaseVNode("td", null, " "),
                        createBaseVNode("td"),
                        createBaseVNode("td"),
                        createBaseVNode("td"),
                        createBaseVNode("td", null, " "),
                        createBaseVNode("td", null, "40020"),
                        createBaseVNode("td", null, "0"),
                        createBaseVNode("td", null, "27731"),
                        createBaseVNode("td"),
                        createBaseVNode("td"),
                        createBaseVNode("td"),
                        createBaseVNode("td", null, " ")
                      ])
                    ])
                  ])
                ])
              ]),
              createBaseVNode("tr", { class: "spacer" }, [
                createBaseVNode("td", { colspan: "2" }, " ")
              ]),
              createBaseVNode("tr", {
                class: "section-head",
                style: {"border-spacing":"0 20px"}
              }, [
                createBaseVNode("td", {
                  colspan: "2",
                  style: {"border":"0px"}
                }, "I. Adverse Events Following Immunization - AEFI")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", {
                  colspan: "2",
                  style: {"border":"0px"}
                }, [
                  createBaseVNode("table", {
                    cellspacing: "0",
                    width: "100%"
                  }, [
                    createBaseVNode("tbody", null, [
                      createBaseVNode("tr", { class: "section-subhead" }, [
                        createBaseVNode("td", null, "Cases"),
                        createBaseVNode("td", null, "BCG"),
                        createBaseVNode("td", null, "OPV"),
                        createBaseVNode("td", null, "IPV"),
                        createBaseVNode("td", null, "DPT-HepB-Hib"),
                        createBaseVNode("td", null, "PCV"),
                        createBaseVNode("td", null, "ROTA"),
                        createBaseVNode("td", null, "Measles/MR"),
                        createBaseVNode("td", null, "TT/Td"),
                        createBaseVNode("td", null, "MV"),
                        createBaseVNode("td", null, "HPV")
                      ]),
                      createBaseVNode("tr", { class: "grayed-cells" }, [
                        createBaseVNode("td", null, "Minor AEFIs"),
                        createBaseVNode("td", null, " "),
                        createBaseVNode("td", null, " "),
                        createBaseVNode("td", null, " "),
                        createBaseVNode("td", null, " "),
                        createBaseVNode("td", null, " "),
                        createBaseVNode("td", null, " "),
                        createBaseVNode("td", null, " "),
                        createBaseVNode("td", null, " "),
                        createBaseVNode("td", null, " "),
                        createBaseVNode("td", null, " ")
                      ]),
                      createBaseVNode("tr", null, [
                        createBaseVNode("td", null, "Bacteria abscesses"),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "q9nBSuktrBk",
                            "data-co": "HzynxoDR57N"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "q9nBSuktrBk",
                            "data-co": "BykWQ3ObDtd"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "q9nBSuktrBk",
                            "data-co": "Po5l0buP3Yy"
                          }, "4")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "q9nBSuktrBk",
                            "data-co": "hyJKBeiHRpa"
                          }, "4")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "q9nBSuktrBk",
                            "data-co": "UktdkHknJbW"
                          }, "4")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "q9nBSuktrBk",
                            "data-co": "KnrMoNeitVN"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "q9nBSuktrBk",
                            "data-co": "JalBxgOJb6M"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "q9nBSuktrBk",
                            "data-co": "MWMaArdbJ2y"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "q9nBSuktrBk",
                            "data-co": "SgyO6bt56Kj"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "q9nBSuktrBk",
                            "data-co": "L4jezmlN5D5"
                          }, "0")
                        ])
                      ]),
                      createBaseVNode("tr", null, [
                        createBaseVNode("td", null, "Severe local reaction"),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "q9nBSuktrBk",
                            "data-co": "CcuTdCcGLzw"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "q9nBSuktrBk",
                            "data-co": "mltd73Uwigx"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "q9nBSuktrBk",
                            "data-co": "mGNBPZ9JcFw"
                          }, "1")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "q9nBSuktrBk",
                            "data-co": "XkAixQCOMT0"
                          }, "1")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "q9nBSuktrBk",
                            "data-co": "GbNBwKROyDx"
                          }, "1")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "q9nBSuktrBk",
                            "data-co": "ul3BBk8XyxY"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "q9nBSuktrBk",
                            "data-co": "RcMbVtgcXIS"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "q9nBSuktrBk",
                            "data-co": "rJfaTyqHdSh"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "q9nBSuktrBk",
                            "data-co": "DC1gDA0U6ZR"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "q9nBSuktrBk",
                            "data-co": "MEoyDTEI9rq"
                          }, "0")
                        ])
                      ]),
                      createBaseVNode("tr", null, [
                        createBaseVNode("td", null, "Lymphadenitis"),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "q9nBSuktrBk",
                            "data-co": "QVmaeFuE2Qr"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "q9nBSuktrBk",
                            "data-co": "KlUgOnNYiPt"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "q9nBSuktrBk",
                            "data-co": "pjnaCzFceXv"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "q9nBSuktrBk",
                            "data-co": "CXIL0in6O49"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "q9nBSuktrBk",
                            "data-co": "JRChBkWc3ok"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "q9nBSuktrBk",
                            "data-co": "wYkmuupJzV8"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "q9nBSuktrBk",
                            "data-co": "Rzqii165pvS"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "q9nBSuktrBk",
                            "data-co": "xmzXYzpnem8"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "q9nBSuktrBk",
                            "data-co": "wdDdZdoSCpb"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "q9nBSuktrBk",
                            "data-co": "Au6hRKvdBxY"
                          }, "0")
                        ])
                      ]),
                      createBaseVNode("tr", null, [
                        createBaseVNode("td", null, "Sepsis"),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "q9nBSuktrBk",
                            "data-co": "ePCJ4u243Gi"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "q9nBSuktrBk",
                            "data-co": "fia70ncKCuR"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "q9nBSuktrBk",
                            "data-co": "vQNAAInKPe3"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "q9nBSuktrBk",
                            "data-co": "OuGbuaj1RO3"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "q9nBSuktrBk",
                            "data-co": "M7Gu7z76MB0"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "q9nBSuktrBk",
                            "data-co": "z7KRKDOOKxk"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "q9nBSuktrBk",
                            "data-co": "bvS2ftaiHeY"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "q9nBSuktrBk",
                            "data-co": "XZnRHnFKXMp"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "q9nBSuktrBk",
                            "data-co": "l0ehds5KryF"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "q9nBSuktrBk",
                            "data-co": "l8jI5wb39PR"
                          }, "0")
                        ])
                      ]),
                      createBaseVNode("tr", { class: "grayed-cells" }, [
                        createBaseVNode("td", null, "Serious AEFIs"),
                        createBaseVNode("td", null, " "),
                        createBaseVNode("td", null, " "),
                        createBaseVNode("td", null, " "),
                        createBaseVNode("td", null, " "),
                        createBaseVNode("td", null, " "),
                        createBaseVNode("td", null, " "),
                        createBaseVNode("td", null, " "),
                        createBaseVNode("td", null, " "),
                        createBaseVNode("td", null, " "),
                        createBaseVNode("td", null, " ")
                      ]),
                      createBaseVNode("tr", null, [
                        createBaseVNode("td", null, "High fever >38*c"),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "EPMQGfb3xGc"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "spbUeVnLNdY"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "RpzT7ndYBqJ"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "wq0ZxHrbfEt"
                          }, "1")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "D5cg0nkggEI"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "OUw4MNHUzBL"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "RJDEwzn1NR0"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "ZJCJQeKAIp7"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "qDv9NvuXish"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "M7jQlKEkSqJ"
                          }, "0")
                        ])
                      ]),
                      createBaseVNode("tr", null, [
                        createBaseVNode("td", null, "Death"),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "I5MHbE6gO5g"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "ryVbsKdZvKq"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "kaWoFpjPa2w"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "gZPbWP3yobl"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "j25CKvyXL2w"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "cG3o9OE3Bmo"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "I2THvhSkzzc"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "zhf7SmRLOBt"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "QmMH4sRtERh"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "t8dBdgbtPoy"
                          }, "0")
                        ])
                      ]),
                      createBaseVNode("tr", null, [
                        createBaseVNode("td", null, "Encephalopathy"),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "m44BfzYUKH3"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "sKyOKPADAAE"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "PJf9ivWxgS5"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "jrxmweUAE7n"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "s0AUta6B7qh"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "EOyg85FPysK"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "pAjvpodvmYC"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "GqIoLWljn2v"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "QwqdNFvwMfu"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "I9DkCyQNmj4"
                          }, "0")
                        ])
                      ]),
                      createBaseVNode("tr", null, [
                        createBaseVNode("td", null, "Seizures"),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "uXjz3UiXhqI"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "KJ8YHlo7MRD"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "c4ui9JxN0V9"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "wzqyAQp1KCv"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "JsEjaIhDDfd"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "JYKpMjweyAQ"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "PGvrZxza7oi"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "oPAsier4S0v"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "dZYJB5tnp8R"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "HOlQfcCymaL"
                          }, "0")
                        ])
                      ]),
                      createBaseVNode("tr", null, [
                        createBaseVNode("td", null, "Paralysis"),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "EUXXhcTm18i"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "VICC8Yaz7nK"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "hJ7AN2yP9Gy"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "BoC4q5Ox2yS"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "TgWc3gfnLMN"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "ZnepR09oQqE"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "gkTXlnYFAJB"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "R5PTsj1f4na"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "dKq8hPIWrhI"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "B0f32ZFn60o"
                          }, "0")
                        ])
                      ]),
                      createBaseVNode("tr", null, [
                        createBaseVNode("td", null, "Significant Disability"),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "ifH5NLMRCSO"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "BLtDfpoI9Wf"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "ss4D3akmVqu"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "SRJ00MpeweP"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "sZ9tuvX0GC7"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "oAztQdp2DfA"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "fBkMYsRdIBB"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "BpPUhIEd0K0"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "ZXXvnfJEqvR"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "KoKTLhnFdWO"
                          }, "0")
                        ])
                      ]),
                      createBaseVNode("tr", null, [
                        createBaseVNode("td", null, "Birth Defect"),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "mZnpFHRXgM0"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "rwoQyevgGOz"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "I9sqzi0JRKb"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "uUR0ce3KsiX"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "opFyRApeg6i"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "FTMYsSKZrlx"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "atjmFUlHTeL"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "LWMz8aMKe3G"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "vr7q11Y5fo6"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "OC9VhkUCUQ4"
                          }, "0")
                        ])
                      ]),
                      createBaseVNode("tr", null, [
                        createBaseVNode("td", null, "Toxic Shock syndrome"),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "VEP6HzE6Cex"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "PtS27aDPTsq"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "uGHBRQTb2el"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "pPz7JzZqqjS"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "uQ0NDg7rI3G"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "PM6VGUl2fee"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "RtjgtHQgg4k"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "k4s9eb1boLy"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "PSvPIb2Yb7A"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "EkWjeufJBZm",
                            "data-co": "XxEUgxNYpyz"
                          }, "0")
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              createBaseVNode("tr", { class: "spacer" }, [
                createBaseVNode("td", { colspan: "2" }, " ")
              ]),
              createBaseVNode("tr", {
                class: "section-head",
                style: {"border-spacing":"0 20px"}
              }, [
                createBaseVNode("td", {
                  colspan: "2",
                  style: {"border":"0px"}
                }, "J. Disease Surveilance")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", {
                  colspan: "2",
                  style: {"border":"0px"}
                }, [
                  createBaseVNode("table", {
                    cellspacing: "0",
                    width: "100%"
                  }, [
                    createBaseVNode("tbody", null, [
                      createBaseVNode("tr", { class: "section-subhead" }, [
                        createBaseVNode("td", { colspan: "3" }, "Suspected Measles Cases"),
                        createBaseVNode("td", { colspan: "2" }, "Acute Flaccid Paralysis (AFP)"),
                        createBaseVNode("td", { colspan: "2" }, "Neonatal Tetanus (NNT)")
                      ]),
                      createBaseVNode("tr", null, [
                        createBaseVNode("td", null, "Number of cases"),
                        createBaseVNode("td", null, "Number of cases investigated"),
                        createBaseVNode("td", null, "Number of deaths due to measles"),
                        createBaseVNode("td", null, "Number of cases"),
                        createBaseVNode("td", null, "Number of cases investigated"),
                        createBaseVNode("td", null, "Number of cases"),
                        createBaseVNode("td", null, "Number of cases investigated")
                      ]),
                      createBaseVNode("tr", null, [
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "BO5LhJdAGgU",
                            "data-co": "Tt7fU5lUhAU"
                          }, "1")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "rQqO0bAzoFv",
                            "data-co": "Tt7fU5lUhAU"
                          }, "1")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "RmONYUtfq0m",
                            "data-co": "Tt7fU5lUhAU"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "kF0YpqmyhzM",
                            "data-co": "Tt7fU5lUhAU"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "k9D99xE8QFI",
                            "data-co": "Tt7fU5lUhAU"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "FS2x2osM8O8",
                            "data-co": "Tt7fU5lUhAU"
                          }, "0")
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: "val",
                            "data-de": "xcE6eSWtFdI",
                            "data-co": "Tt7fU5lUhAU"
                          }, "0")
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ]),
          createBaseVNode("p", null, "   "),
          createBaseVNode("p", null, "   ")
        ])
      ])
    ], -1)
  ]))]))
}
const rawTable = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render$1],['__scopeId',"data-v-8b68d9d8"]]);

const _sfc_main = defineComponent({
  name: "TaskList",
  components: { IonList, IonCard, IonCardContent, IonItem, IonLabel, IonNote },
  data() {
    return {
      tasks: [],
      foward_Route: "",
      backward_route: "",
      report_name: ""
    };
  },
  computed: {
    ...mapState(EIRreportsStore, ["navigationPayload"])
  },
  async mounted() {
    this.initN();
    this.initMonths();
    this.initOwnNavData();
  },
  props: {
    fowardRoute: {
      default: "home"
    },
    reportName: {
      default: "Change name"
    },
    backwardRoute: {
      default: ""
    }
  },
  watch: {
    $route: {
      async handler(data) {
        if (data.name == "immunizationEipmReport" || data.name == "immunizationAefiReport") this.initOwnNavData();
      },
      deep: true
    },
    fowardRoute: {
      async handler(data) {
        this.initN();
      },
      deep: true
    }
  },
  methods: {
    initN() {
      this.foward_Route = this.$props.fowardRoute;
      this.backward_route = this.$props.backwardRoute;
      this.report_name = this.$props.reportName;
    },
    navigationMenu(task) {
      this.initNavData(task);
      this.$router.push(this.foward_Route);
    },
    initNavData(task) {
      const store = EIRreportsStore();
      const dates = task.other[1][1].split(" to ");
      store.setStartAndEndDates(dates[0], dates[1]);
      const subText = task.other[1][0];
      store.setNavigationPayload(this.report_name, true, false, "/", this.backwardRoute, subText);
    },
    initOwnNavData() {
      const store = EIRreportsStore();
      store.setNavigationPayload("Pick Month", true, false, "/", "home");
    },
    async initMonths() {
      const monthsArray = [];
      const data = await getMonthsList();
      data.forEach((month) => {
        const aob = {
          month: month[1][0].replace("-", " "),
          completed: true,
          date: month[0],
          other: month
        };
        monthsArray.push(aob);
      });
      this.tasks = monthsArray;
    }
  }
});

const _hoisted_1 = {
  key: 0,
  class: "completed-text"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_note = resolveComponent("ion-note");
  const _component_ion_item = resolveComponent("ion-item");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  const _component_ion_list = resolveComponent("ion-list");
  return openBlock(), createBlock(_component_ion_list, null, {
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.tasks, (task) => {
        return openBlock(), createBlock(_component_ion_card, {
          key: task.month
        }, {
          default: withCtx(() => [
            createVNode(_component_ion_card_content, {
              style: { "cursor": "pointer" },
              onClick: ($event) => _ctx.navigationMenu(task)
            }, {
              default: withCtx(() => [
                createVNode(_component_ion_item, { lines: "none" }, {
                  default: withCtx(() => [
                    createVNode(_component_ion_label, null, {
                      default: withCtx(() => [
                        createBaseVNode("h2", null, toDisplayString(task.month), 1),
                        task.completed ? (openBlock(), createElementBlock("p", _hoisted_1, "✓ Completed")) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_ion_note, { slot: "end" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(task.date), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["onClick"])
          ]),
          _: 2
        }, 1024);
      }), 128))
    ]),
    _: 1
  });
}
const MonthsPicker = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e9699086"]]);

export { MonthsPicker as M, rawTable as r };
