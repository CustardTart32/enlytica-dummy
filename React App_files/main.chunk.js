(this["webpackJsonpfb-frontend"] = this["webpackJsonpfb-frontend"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styles.css ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#header_text {\n    color: white;\n    padding-left: 4%;\n}\n\n#gold {\n    color: goldenrod;\n    font-weight: normal;\n}\n\nbody {\n    background-color: goldenrod;\n}\n\n#main_content {\n    margin-left: 7.5%;\n    margin-right: 7.5%;\n    background-color: #f1f1f7;\n    padding: 1%;\n}\n\n.flex-container{\n    display: flex;\n    justify-content: space-around;\n}\n\n.flex-container.vertical{\n    flex-direction: column;\n    width: 35%;\n}\n\n/* CSS for every flexbox item */\n.flex-item {\n    background-color: white;\n    margin: 1.5%;\n    padding: 8px;\n}\n\n/* CSS for header for each flexbox item */\n.flex-item-header {\n    background-color:#343a40;\n    color: gold;\n    text-align: center;\n    width: 100%;\n\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.flex-large {\n    width: 60%;\n    height: 55%;\n}\n\n.flex-very-large {\n    width: 75%;\n    height: 75%;\n}\n\n/* CSS for Events on Main Page */\n.flex-container-secondary{\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    overflow-y: scroll;\n    max-height: 260px;\n}\n\n\n.flex-item-secondary {\n    width: 20%;\n    background-color: white;\n    margin: 1%;\n    padding: 1%;\n    padding-bottom: 0%;\n    margin-bottom: 0%;\n}\n\n.event_secondary {\n    background-color: #05050511;\n}\n\n/* CSS for 2 bottom graphs on main page */\n.flex-container-tertiary{ \n    display: flex;\n    flex-direction: column;\n}\n\n.flex-item.tertiary {\n    margin-bottom: 0.5%;\n    padding: 1%;\n    margin-top: 0.5%;\n}\n\n\n\n/* CSS for flexbox for alt events */\n#list_view{\n    width: 25%;\n}\n\n#alt_events {\n    max-height: 550px;\n    overflow-y: scroll;\n}\n\n/* CSS for individual event on alt page */\n.alt_event{\n    border-style: solid;\n    margin-top: 5px;\n    margin-bottom: 5px;\n    border-radius: 5px;\n    border-color: rgb(174, 174, 177);\n    overflow: auto;\n    padding: 3px;\n    display: flex;\n    align-items: center;\n    border-width: 3px;\n}\n\n\n/* CSS for sliders */\n.slider_box_alt {\n    padding: 10px;\n    width: 30%;\n    float: right;\n}\n\n.slider_box_main {\n    padding: 0;\n    margin: auto;\n    width: 80%;\n}\n\n.input-range__label-container {\n    visibility: hidden;\n}\n\n.input-range__track--active {\n    background: aquamarine !important;  \n}\n", ""]);



/***/ }),

/***/ "./src/AltContent.js":
/*!***************************!*\
  !*** ./src/AltContent.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AltLineGraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/AltLineGraph */ "./src/components/AltLineGraph.js");
/* harmony import */ var _components_AltEventsSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/AltEventsSelect */ "./src/components/AltEventsSelect.js");
var _jsxFileName = "/Users/CuthbertPC/Documents/Enactus/fb-analytics/frontend/cuth_frontend/src/AltContent.js";




class AltContent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "main_content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex-container",
      style: {
        alignItems: "center"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AltLineGraph__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AltEventsSelect__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AltContent);

/***/ }),

/***/ "./src/MainContent.js":
/*!****************************!*\
  !*** ./src/MainContent.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Events */ "./src/components/Events.js");
/* harmony import */ var _components_BarChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/BarChart */ "./src/components/BarChart.js");
/* harmony import */ var _components_AreaChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/AreaChart */ "./src/components/AreaChart.js");
/* harmony import */ var _components_PieChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/PieChart */ "./src/components/PieChart.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_MainLineChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/MainLineChart */ "./src/components/MainLineChart.js");
var _jsxFileName = "/Users/CuthbertPC/Documents/Enactus/fb-analytics/frontend/cuth_frontend/src/MainContent.js";








class MainContent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "main_content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex-item flex-large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex-item-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, " Test "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PieChart__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex-container vertical",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex-item-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, " Test "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MainLineChart__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex-item-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, " Test "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MainLineChart__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Events__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex-container-tertiary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex-item tertiary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, " Days "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BarChart__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex-item tertiary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, " Times "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AreaChart__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MainContent);

/***/ }),

/***/ "./src/components/AltEvents.js":
/*!*************************************!*\
  !*** ./src/components/AltEvents.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/CuthbertPC/Documents/Enactus/fb-analytics/frontend/cuth_frontend/src/components/AltEvents.js";


class ListEvents extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  renderListEvent(i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListEvent, {
      key: i,
      number: this.props.numbers[i],
      title: this.props.titles[i],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    });
  }

  renderListEvents() {
    let eventItems = this.props.indices.map(i => this.renderListEvent(i));
    return eventItems;
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "alt_events",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, this.renderListEvents());
  }

}

class ListEvent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "alt_event",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        width: "20%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      style: {
        fontSize: "20px",
        margin: "auto"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, " ", this.props.number, " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        width: "70%",
        marginLeft: "20px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      style: {
        fontSize: "10px",
        margin: "auto"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, " ", this.props.title, " ")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ListEvents);

/***/ }),

/***/ "./src/components/AltEventsSelect.js":
/*!*******************************************!*\
  !*** ./src/components/AltEventsSelect.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DropDownMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropDownMenu */ "./src/components/DropDownMenu.js");
/* harmony import */ var _AltEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AltEvents */ "./src/components/AltEvents.js");
var _jsxFileName = "/Users/CuthbertPC/Documents/Enactus/fb-analytics/frontend/cuth_frontend/src/components/AltEventsSelect.js";




class ListEventsSelect extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    this.handleChange = selectedOption => {
      let title_string = "Enactus presents how to create a " + selectedOption.value + " cake";
      let titles = Array(14).fill(title_string);
      this.setState({
        selected: selectedOption,
        titles: titles
      });
    };

    let options = [{
      value: 'chocolate',
      label: 'Chocolate'
    }, {
      value: 'strawberry',
      label: 'Strawberry'
    }, {
      value: 'vanilla',
      label: 'Vanilla'
    }];

    let _title_string = "Enactus presents how to create a " + options[0].value + " cake";

    this.state = {
      options: options,
      titles: Array(14).fill(_title_string),
      numbers: Array(14).fill("8.6K"),
      selected: options[0],
      indices: []
    };

    for (let i = 0; i < this.state.titles.length; i++) {
      this.state.indices.push(i);
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex-item",
      id: "list_view",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex-item-header",
      style: {
        marginBottom: "5px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, " List View "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DropDownMenu__WEBPACK_IMPORTED_MODULE_1__["default"], {
      options: this.state.options,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AltEvents__WEBPACK_IMPORTED_MODULE_2__["default"], {
      titles: this.state.titles,
      numbers: this.state.numbers,
      indices: this.state.indices,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ListEventsSelect);

/***/ }),

/***/ "./src/components/AltLineGraph.js":
/*!****************************************!*\
  !*** ./src/components/AltLineGraph.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DropDownMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropDownMenu */ "./src/components/DropDownMenu.js");
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Slider */ "./src/components/Slider.js");
/* harmony import */ var react_input_range_lib_css_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-input-range/lib/css/index.css */ "./node_modules/react-input-range/lib/css/index.css");
/* harmony import */ var react_input_range_lib_css_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_input_range_lib_css_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _LineChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LineChart */ "./src/components/LineChart.js");
var _jsxFileName = "/Users/CuthbertPC/Documents/Enactus/fb-analytics/frontend/cuth_frontend/src/components/AltLineGraph.js";






class AltGraph extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.sample_options = [{
      value: 'ocean',
      label: 'Ocean'
    }, {
      value: 'forest',
      label: 'Forest'
    }, {
      value: 'gumtree',
      label: 'Gumtree'
    }];

    this.handleChange = selectedOption => {
      console.log(selectedOption);
    };

    this.handleSlide = value => {
      let new_x = this.state.x_data.slice(0, value);
      let old_y = this.state.y_data;
      let new_y = [];
      old_y.forEach(element => {
        //console.log(element);
        let old_series = element["data"];
        let new_series = {
          name: element["name"],
          data: old_series.slice(0, value)
        };
        new_y.push(new_series);
      });
      console.log(new_y);
      this.lineChart.current.handleChange(new_x, new_y);
    };

    let x = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
    let y = [{
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }, {
      name: "Parcels",
      data: [11, 52, 52, 12, 42, 23, 55, 75, 123]
    }];
    this.state = {
      x_data: x,
      y_data: y
    };
    this.lineChart = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex-item flex-very-large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex-item-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, " Test "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LineChart__WEBPACK_IMPORTED_MODULE_4__["default"], {
      ref: this.lineChart,
      x_data: this.state.x_data,
      y_data: this.state.y_data,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: "5px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        width: "20%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DropDownMenu__WEBPACK_IMPORTED_MODULE_1__["default"], {
      options: this.sample_options,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        width: "20%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DropDownMenu__WEBPACK_IMPORTED_MODULE_1__["default"], {
      options: this.sample_options,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        width: "20%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DropDownMenu__WEBPACK_IMPORTED_MODULE_1__["default"], {
      options: this.sample_options,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "slider_box_alt",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Slider__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onChange: this.handleSlide,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AltGraph);

/***/ }),

/***/ "./src/components/AreaChart.js":
/*!*************************************!*\
  !*** ./src/components/AreaChart.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apexcharts */ "./node_modules/react-apexcharts/dist/react-apexcharts.min.js");
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/CuthbertPC/Documents/Enactus/fb-analytics/frontend/cuth_frontend/src/components/AreaChart.js";



class AreaChart extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        chart: {
          toolbar: {
            show: true,
            tools: {
              download: true,
              selection: false,
              zoom: false,
              zoomin: false,
              zoomout: false,
              pan: false,
              reset: false | '<img src="/static/icons/reset.png" width="20">',
              customIcons: []
            },
            autoSelected: 'zoom'
          }
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018/09/19 00:30:00", "2018/09/19 01:30:00", "2018/09/19 02:30:00", "2018/09/19 03:30:00", "2018/09/19 04:30:00", "2018/09/19 05:30:00", "2018/09/19 06:30:00", "2018/09/19 07:30:00", "2018/09/19 08:30:00", "2018/09/19 09:30:00", "2018/09/19 10:30:00", "2018/09/19 11:30:00", "2018/09/19 12:30:00", "2018/09/19 13:30:00", "2018/09/19 14:30:00", "2018/09/19 15:30:00", "2018/09/19 16:30:00", "2018/09/19 17:30:00", "2018/09/19 18:30:00", "2018/09/19 19:30:00", "2018/09/19 20:30:00", "2018/09/19 21:30:00", "2018/09/19 22:30:00", "2018/09/19 23:30:00"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      },
      series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100, 43, 23, 12, 54, 65, 43, 75, 12, 54, 16, 75, 65, 121, 41, 53, 33, 12]
      }]
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "chart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a, {
      options: this.state.options,
      series: this.state.series,
      type: "area",
      height: "350",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AreaChart);

/***/ }),

/***/ "./src/components/BarChart.js":
/*!************************************!*\
  !*** ./src/components/BarChart.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apexcharts */ "./node_modules/react-apexcharts/dist/react-apexcharts.min.js");
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/CuthbertPC/Documents/Enactus/fb-analytics/frontend/cuth_frontend/src/components/BarChart.js";



class BarChart extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        plotOptions: {
          bar: {
            dataLabels: {
              position: 'top' // top, center, bottom

            }
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val;
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ["#304758"]
          }
        },
        xaxis: {
          categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          position: 'top',
          labels: {
            offsetY: -18
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#D8E3F0',
                colorTo: '#BED1E6',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5
              }
            }
          },
          tooltip: {
            enabled: true,
            offsetY: -35
          }
        },
        fill: {
          gradient: {
            shade: 'light',
            type: "horizontal",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [50, 0, 100, 100]
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false,
            formatter: function (val) {
              return val;
            }
          }
        },
        title: {
          text: 'Sample Label',
          floating: true,
          offsetY: 320,
          align: 'center',
          style: {
            color: '#444'
          }
        }
      },
      series: [{
        name: 'Number of Views',
        data: [5312, 5213, 3424, 5315, 4314, 5143, 4440]
      }]
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "chart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a, {
      options: this.state.options,
      series: this.state.series,
      type: "bar",
      height: "350",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (BarChart);

/***/ }),

/***/ "./src/components/DropDownMenu.js":
/*!****************************************!*\
  !*** ./src/components/DropDownMenu.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select */ "../../node_modules/react-select/dist/react-select.browser.esm.js");
var _jsxFileName = "/Users/CuthbertPC/Documents/Enactus/fb-analytics/frontend/cuth_frontend/src/components/DropDownMenu.js";



class Selection extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    this.handleChange = selectedOption => {
      this.setState({
        selectedOption
      });
      this.props.onChange(selectedOption);
    };

    this.state = {
      options: this.props.options,
      selectedOption: this.props.options[0]
    };
  }

  render() {
    const selectedOption = this.state.selectedOption;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: selectedOption,
      onChange: this.handleChange,
      options: this.state.options,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Selection);

/***/ }),

/***/ "./src/components/Events.js":
/*!**********************************!*\
  !*** ./src/components/Events.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/CuthbertPC/Documents/Enactus/fb-analytics/frontend/cuth_frontend/src/components/Events.js";


class Event extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex-item-secondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, this.props.header), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      style: {
        marginBottom: "1%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      style: {
        fontSize: "55px",
        marginBottom: 0
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, this.props.reached), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      style: {
        marginBottom: "5%",
        fontSize: "13px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, " people reached "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "event_secondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      style: {
        marginLeft: "2%",
        marginBottom: 0
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, this.props.responded), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      style: {
        fontFamily: "Arial",
        fontSize: "13px",
        marginLeft: "2%",
        paddingBottom: "1%",
        marginBottom: "4%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, " people responded ")));
  }

}

class Events extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      indices: [],
      headers: Array(8).fill("Encatus UNSW Presents: Sample Text"),
      reached: Array(8).fill("2.4K"),
      responded: Array(8).fill(77)
    };

    for (let i = 0; i < this.state.headers.length; i++) {
      this.state.indices[i] = i;
    }
  }

  renderEvent(i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Event, {
      key: i,
      header: this.state.headers[i],
      reached: this.state.reached[i],
      responded: this.state.responded[i],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    });
  }

  renderEvents() {
    let eventItems = this.state.indices.map(i => this.renderEvent(i));
    return eventItems;
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex-container-secondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, this.renderEvents());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Events);

/***/ }),

/***/ "./src/components/LineChart.js":
/*!*************************************!*\
  !*** ./src/components/LineChart.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apexcharts */ "./node_modules/react-apexcharts/dist/react-apexcharts.min.js");
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/CuthbertPC/Documents/Enactus/fb-analytics/frontend/cuth_frontend/src/components/LineChart.js";

 //Without Zoom Function 

class LineChart extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        markers: {
          size: 5
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'],
            // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        xaxis: {
          categories: this.props.x_data
        }
      },
      series: this.props.y_data
    };
  }

  handleChange(x_data, y_data) {
    this.setState({
      xaxis: x_data,
      series: y_data
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "chart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a, {
      options: this.state.options,
      series: this.state.series,
      type: "line",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LineChart);

/***/ }),

/***/ "./src/components/MainLineChart.js":
/*!*****************************************!*\
  !*** ./src/components/MainLineChart.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slider */ "./src/components/Slider.js");
/* harmony import */ var _LineChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LineChart */ "./src/components/LineChart.js");
var _jsxFileName = "/Users/CuthbertPC/Documents/Enactus/fb-analytics/frontend/cuth_frontend/src/components/MainLineChart.js";




class MainLineChart extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    this.handleSlide = value => {
      let new_x = this.state.x_data.slice(0, value);
      let old_y = this.state.y_data;
      let new_y = [];
      old_y.forEach(element => {
        //console.log(element);
        let old_series = element["data"];
        let new_series = {
          name: element["name"],
          data: old_series.slice(0, value)
        };
        new_y.push(new_series);
      });
      console.log(new_y);
      this.lineChart.current.handleChange(new_x, new_y);
    };

    let x = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
    let y = [{
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }, {
      name: "Parcels",
      data: [11, 52, 52, 12, 42, 23, 55, 75, 123]
    }];
    this.state = {
      x_data: x,
      y_data: y
    };
    this.lineChart = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LineChart__WEBPACK_IMPORTED_MODULE_2__["default"], {
      ref: this.lineChart,
      x_data: this.state.x_data,
      y_data: this.state.y_data,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "slider_box_main",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Slider__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onChange: this.handleSlide,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MainLineChart);

/***/ }),

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/esm/Navbar.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles.css */ "./src/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Switch */ "./src/components/Switch.js");
var _jsxFileName = "/Users/CuthbertPC/Documents/Enactus/fb-analytics/frontend/cuth_frontend/src/components/NavBar.js";




 //Needs to be split into various functions 

class NavBanner extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      bg: "dark",
      variant: "dark",
      sticky: "top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"].Brand, {
      href: "#home",
      className: "justify-content-between",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: __webpack_require__(/*! ../enactus.png */ "./src/enactus.png"),
      width: "30",
      height: "30",
      className: "d-inline-block align-top",
      alt: "React Bootstrap logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"].Text, {
      className: "justify-content-between",
      id: "header_text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "Enactus ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
      id: "gold",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "Dashboard"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"].Toggle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"].Collapse, {
      className: "justify-content-end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Switch__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onChange: () => this.props.onChange(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NavBanner);

/***/ }),

/***/ "./src/components/PieChart.js":
/*!************************************!*\
  !*** ./src/components/PieChart.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apexcharts */ "./node_modules/react-apexcharts/dist/react-apexcharts.min.js");
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/CuthbertPC/Documents/Enactus/fb-analytics/frontend/cuth_frontend/src/components/PieChart.js";



class PieChart extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        legend: {
          position: 'bottom'
        },
        responsive: [{
          breakpoint: 480
        }]
      },
      series: [44, 55, 13, 43, 22]
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "chart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a, {
      options: this.state.options,
      series: this.state.series,
      type: "pie",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PieChart);

/***/ }),

/***/ "./src/components/Slider.js":
/*!**********************************!*\
  !*** ./src/components/Slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_input_range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-input-range */ "./node_modules/react-input-range/lib/js/index.js");
/* harmony import */ var react_input_range__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_input_range__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/CuthbertPC/Documents/Enactus/fb-analytics/frontend/cuth_frontend/src/components/Slider.js";



class Slider extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 9
    };
  }

  handleChange(value) {
    this.setState({
      value
    });
    this.props.onChange(value);
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_input_range__WEBPACK_IMPORTED_MODULE_1___default.a, {
      maxValue: 9,
      minValue: 2,
      value: this.state.value,
      onChange: value => this.handleChange(value),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./src/components/Switch.js":
/*!**********************************!*\
  !*** ./src/components/Switch.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-switch */ "./node_modules/react-switch/index.js");
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/CuthbertPC/Documents/Enactus/fb-analytics/frontend/cuth_frontend/src/components/Switch.js";



class ToggleButton extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.state = {
      checked: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({
      checked
    });
    this.props.onChange();
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_switch__WEBPACK_IMPORTED_MODULE_1___default.a, {
      onChange: this.handleChange,
      checked: this.state.checked,
      checkedIcon: false,
      uncheckedIcon: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ToggleButton);

/***/ }),

/***/ "./src/enactus.png":
/*!*************************!*\
  !*** ./src/enactus.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/enactus.324a27fe.png";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/NavBar */ "./src/components/NavBar.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _MainContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MainContent */ "./src/MainContent.js");
/* harmony import */ var _AltContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AltContent */ "./src/AltContent.js");
var _jsxFileName = "/Users/CuthbertPC/Documents/Enactus/fb-analytics/frontend/cuth_frontend/src/index.js";





 //Further Refactoring needed especially for Charts

class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();
    this.state = {
      toggled: false
    };
  }

  handleToggle() {
    let new_state;

    if (this.state.toggled === false) {
      new_state = true;
    } else {
      new_state = false;
    }

    this.setState({
      toggled: new_state
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onChange: () => this.handleToggle(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), !this.state.toggled ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), this.state.toggled ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AltContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }));
  }

}

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}), document.getElementById("root"));
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/CuthbertPC/Documents/Enactus/fb-analytics/frontend/cuth_frontend/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/CuthbertPC/Documents/Enactus/fb-analytics/frontend/cuth_frontend/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map