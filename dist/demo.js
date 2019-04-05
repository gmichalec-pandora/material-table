"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _materialTable = _interopRequireDefault(require("./material-table"));

var direction = 'ltr'; // direction = 'rtl';

var theme = (0, _styles.createMuiTheme)({
  direction: direction,
  palette: {
    type: 'light'
  }
});

var App =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(App, _Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(App)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "tableRef", _react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      selecteds: 0,
      data: [{
        id: 1,
        name: 'axxxxxasdasdasdasd',
        surname: 'Baran',
        isMarried: true,
        birthDate: new Date(1987, 1, 1),
        birthCity: 0,
        sex: 'Male',
        type: 'adult',
        insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
        time: new Date(1900, 1, 1, 14, 23, 35)
      }, {
        id: 2,
        name: 'bxxxxxasdasdasdasd',
        surname: 'Baran',
        isMarried: false,
        birthDate: new Date(1987, 1, 1),
        birthCity: 34,
        sex: 'Female',
        type: 'adult',
        insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
        time: new Date(1900, 1, 1, 14, 23, 35),
        parentId: 1
      }, {
        id: 3,
        name: 'cxxxxxasdasdasdasd',
        surname: 'Baran',
        isMarried: true,
        birthDate: new Date(1987, 1, 1),
        birthCity: 34,
        sex: 'Female',
        type: 'child',
        insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
        time: new Date(1900, 1, 1, 14, 23, 35),
        parentId: 1
      }, {
        id: 4,
        name: 'dxxxxxasdasdasdasd',
        surname: 'Baran',
        isMarried: true,
        birthDate: new Date(1987, 1, 1),
        birthCity: 34,
        sex: 'Female',
        type: 'child',
        insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
        time: new Date(1900, 1, 1, 14, 23, 35),
        parentId: 3
      }, {
        id: 5,
        name: 'exxxxxasdasdasdasd',
        surname: 'Baran',
        isMarried: false,
        birthDate: new Date(1987, 1, 1),
        birthCity: 34,
        sex: 'Female',
        type: 'child',
        insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
        time: new Date(1900, 1, 1, 14, 23, 35)
      }, {
        id: 6,
        name: 'fxxxxxasdasdasdasd',
        surname: 'Baran',
        isMarried: true,
        birthDate: new Date(1989, 1, 1),
        birthCity: 34,
        sex: 'Female',
        type: 'child',
        insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
        time: new Date(1900, 1, 1, 14, 23, 35),
        parentId: 5
      }],
      columns: [{
        title: 'Adı',
        render: function render(rowData) {
          return rowData.name + ' ' + rowData.surname;
        },
        customFilterAndSearch: function customFilterAndSearch(term, rowData) {
          return false;
        }
      }, {
        title: 'Soyadı',
        field: 'surname'
      }, {
        title: 'Evli',
        field: 'isMarried',
        type: 'boolean',
        readonly: true
      }, {
        title: 'Cinsiyet',
        field: 'sex',
        disableClick: true,
        readonly: true
      }, {
        title: 'Tipi',
        field: 'type',
        removable: false
      }, {
        title: 'Doğum Yılı',
        field: 'birthDate',
        type: 'date'
      }, {
        title: 'Doğum Yeri',
        field: 'birthCity',
        lookup: {
          34: 'İstanbul',
          0: 'Şanlıurfa'
        }
      }, {
        title: 'Kayıt Tarihi',
        field: 'insertDateTime',
        type: 'datetime'
      }, {
        title: 'Zaman',
        field: 'time',
        type: 'time'
      }],
      remoteColumns: [{
        title: 'Avatar',
        field: 'avatar',
        render: function render(rowData) {
          return _react["default"].createElement("img", {
            style: {
              height: 36,
              borderRadius: '50%'
            },
            src: rowData.avatar
          });
        }
      }, {
        title: 'Id',
        field: 'id'
      }, {
        title: 'First Name',
        field: 'first_name'
      }, {
        title: 'Last Name',
        field: 'last_name'
      }]
    });
    return _this;
  }

  (0, _createClass2["default"])(App, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react["default"].createElement(_core.MuiThemeProvider, {
        theme: theme
      }, _react["default"].createElement("div", {
        style: {
          maxWidth: '100%',
          direction: direction
        }
      }, _react["default"].createElement(_core.Grid, {
        container: true
      }, _react["default"].createElement(_core.Grid, {
        item: true,
        xs: 12
      }, _react["default"].createElement(_materialTable["default"], {
        ref: this.tableRef,
        columns: this.state.columns,
        data: this.state.data,
        title: "Demo Title",
        options: {} // parentChildData={(row, rows) => rows.find(a => a.id === row.parentId)}
        ,
        editable: {
          onRowAdd: function onRowAdd(newData) {
            return new Promise(function (resolve, reject) {
              setTimeout(function () {
                {
                  /* const data = this.state.data;
                  data.push(newData);
                  this.setState({ data }, () => resolve()); */
                }
                resolve();
              }, 1000);
            });
          },
          onRowUpdate: function onRowUpdate(newData, oldData) {
            return new Promise(function (resolve, reject) {
              setTimeout(function () {
                {
                  /* const data = this.state.data;
                  const index = data.indexOf(oldData);
                  data[index] = newData;                
                  this.setState({ data }, () => resolve()); */
                }
                resolve();
              }, 1000);
            });
          },
          onRowDelete: function onRowDelete(oldData) {
            return new Promise(function (resolve, reject) {
              setTimeout(function () {
                {
                  /* let data = this.state.data;
                  const index = data.indexOf(oldData);
                  data.splice(index, 1);
                  this.setState({ data }, () => resolve()); */
                }
                resolve();
              }, 1000);
            });
          }
        }
      }))), _react["default"].createElement("button", {
        onClick: function onClick() {
          _this2.tableRef.current.onQueryChange();
        }
      }, "ok"), _react["default"].createElement(_materialTable["default"], {
        columns: [{
          title: "Adı",
          field: "name"
        }, {
          title: "Soyadı",
          field: "surname"
        }, {
          title: "Doğum Yılı",
          field: "birthYear",
          type: "numeric"
        }, {
          title: "Doğum Yeri",
          field: "birthCity",
          lookup: {
            34: "İstanbul",
            63: "Şanlıurfa"
          }
        }],
        data: [{
          name: "Mehmet",
          surname: "Baran",
          birthYear: 1987,
          birthCity: 63
        }, {
          name: "Zerya Betül",
          surname: "Baran",
          birthYear: 1987,
          birthCity: 63
        }],
        title: "Multiple Detail Panel With RowClickExample",
        detailPanel: [{
          tooltip: "Show Name",
          render: function render(rowData) {
            return _react["default"].createElement("div", {
              style: {
                fontSize: 100,
                textAlign: "center",
                color: "white",
                backgroundColor: "#43A047"
              }
            }, rowData.name);
          }
        }, {
          icon: "account_circle",
          tooltip: "Show Surname",
          render: function render(rowData) {
            return _react["default"].createElement("div", {
              style: {
                fontSize: 100,
                textAlign: "center",
                color: "white",
                backgroundColor: "#E53935"
              }
            }, rowData.surname);
          }
        }, function (rowData) {
          return {
            disabled: rowData.name === "ax",
            icon: "favorite_border",
            openIcon: "favorite",
            tooltip: "Show Both",
            render: function render(rowData) {
              return _react["default"].createElement("div", {
                style: {
                  fontSize: 100,
                  textAlign: "center",
                  color: "white",
                  backgroundColor: "#FDD835"
                }
              }, rowData.name, " ", rowData.surname);
            }
          };
        }],
        onRowClick: function onRowClick(event, rowData, togglePanel) {
          return togglePanel(1);
        }
      })));
    }
  }]);
  return App;
}(_react.Component);

_reactDom["default"].render(_react["default"].createElement(App, null), document.getElementById('app'));

module.hot.accept();